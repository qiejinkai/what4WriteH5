/**
 * 话题页面JavaScript
 * 处理热点话题生成与展示逻辑
 */

// 当前选中的赛道ID
let currentTrackId = '';

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    // 获取URL参数中的赛道ID
    currentTrackId = Navigation.getQueryParam('track') || 'tech';
    
    // 更新页面标题
    updateTrackTitle(currentTrackId);
    
    // 初始化生成按钮事件
    initGenerateButton();
    
    // 初始化收藏功能
    initFavoriteFeature();
    
    // 自动加载话题列表
    loadTopics();
});

/**
 * 更新页面顶部赛道标题
 * @param {string} trackId 赛道ID
 */
function updateTrackTitle(trackId) {
    const trackNameMap = {
        'tech': '科技',
        'finance': '财经',
        'entertainment': '娱乐',
        'education': '教育',
        'health': '健康',
        'lifestyle': '生活方式',
        'parenting': '母婴育儿',
        'wellness': '健康养生'
    };
    
    const trackName = trackNameMap[trackId] || trackId;
    
    // 更新页面显示
    document.getElementById('currentTrack').textContent = trackName;
    document.getElementById('trackName').textContent = trackName;
}

/**
 * 加载话题列表
 */
function loadTopics() {
    const resultsLoading = document.getElementById('resultsLoading');
    const resultsList = document.getElementById('resultsList');
    
    // 显示加载状态
    DOMUtils.show(resultsLoading);
    resultsList.innerHTML = ''; // 清空之前的结果
    
    // 调用API获取话题数据
    API.getTopicsByTrack(currentTrackId)
        .then(topics => {
            // 隐藏加载状态
            DOMUtils.hide(resultsLoading);
            
            // 渲染话题列表
            renderTopicList(topics);
        })
        .catch(error => {
            console.error('获取话题失败:', error);
            DOMUtils.hide(resultsLoading);
            resultsList.innerHTML = '<div class="error-message">获取话题失败，请重试</div>';
        });
}

/**
 * 初始化生成按钮事件
 */
function initGenerateButton() {
    const generateBtn = document.getElementById('generateBtn');
    
    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            // 加载话题
            loadTopics();
        });
    }
}

/**
 * 渲染话题列表
 * @param {Array} topics 话题数据
 */
function renderTopicList(topics) {
    const resultsList = document.getElementById('resultsList');
    const template = document.getElementById('topicItemTemplate');
    
    if (!resultsList || !template) return;
    
    // 清空之前的内容
    resultsList.innerHTML = '';
    
    // 遍历话题数据并渲染
    topics.forEach(topic => {
        // 克隆模板
        const topicNode = document.importNode(template.content, true);
        
        // 填充数据
        topicNode.querySelector('.topic-title').textContent = topic.title;
        topicNode.querySelector('.topic-desc').textContent = topic.description;
        
        // 设置收藏按钮数据和事件
        const favoriteBtn = topicNode.querySelector('.favorite-btn');
        favoriteBtn.setAttribute('data-topic-id', topic.id);
        favoriteBtn.addEventListener('click', (e) => {
            toggleFavorite(e.currentTarget, topic);
        });
        
        // 添加到结果列表
        resultsList.appendChild(topicNode);
    });
}

/**
 * 初始化收藏功能
 */
function initFavoriteFeature() {
    // 加载已收藏的话题，用于设置正确的收藏按钮状态
    API.getFavorites().then(favorites => {
        // 存储收藏的话题ID，用于快速查找
        window.favoritedTopicIds = favorites.map(item => item.id);
    });
}

/**
 * 切换收藏状态
 * @param {HTMLElement} button 收藏按钮
 * @param {Object} topic 话题数据
 */
function toggleFavorite(button, topic) {
    const isFavorited = button.classList.contains('active');
    const iconImg = button.querySelector('.favorite-icon');
    
    if (isFavorited) {
        // 取消收藏
        API.removeFromFavorites(topic.id).then(() => {
            button.classList.remove('active');
            iconImg.src = '../images/icons/star-outline.svg';
            
            // 更新收藏ID列表
            const index = window.favoritedTopicIds.indexOf(topic.id);
            if (index > -1) {
                window.favoritedTopicIds.splice(index, 1);
            }
        });
    } else {
        // 添加收藏
        API.addToFavorites(topic, currentTrackId).then(() => {
            button.classList.add('active');
            iconImg.src = '../images/icons/star-filled.svg';
            
            // 更新收藏ID列表
            if (!window.favoritedTopicIds.includes(topic.id)) {
                window.favoritedTopicIds.push(topic.id);
            }
        });
    }
} 