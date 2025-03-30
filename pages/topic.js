/**
 * 话题页面JavaScript
 * 处理热点话题生成与展示逻辑
 */

// 当前选中的赛道ID
let currentTrackId = '';
// 加载计时器
let loadingTimer = null;
// 记录开始时间
let loadingStartTime = 0;

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
    
    // 初始化API加载进度监听
    initApiLoadingProgressListener();
    
    // 初始隐藏加载提示
    const resultsLoading = document.getElementById('resultsLoading');
    if (resultsLoading) {
        resultsLoading.style.display = 'none';
    }
    
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
    const currentTrackElement = document.getElementById('currentTrack');
    if (currentTrackElement) {
        currentTrackElement.textContent = trackName;
    }
    
    const trackNameElement = document.getElementById('trackName');
    if (trackNameElement) {
        trackNameElement.textContent = trackName;
    }
    
    // 更新结果标题
    const resultsTitle = document.getElementById('resultsTitle');
    if (resultsTitle) {
        resultsTitle.textContent = `${trackName}领域热点话题`;
    }
}

/**
 * 开始显示加载状态和进度
 */
function startLoadingProgress() {
    // 显示加载状态
    const resultsLoading = document.getElementById('resultsLoading');
    const resultsList = document.getElementById('resultsList');
    
    // 确保加载指示器可见
    if (resultsLoading) {
        resultsLoading.style.display = 'block';
    }
    
    if (resultsList) {
        resultsList.innerHTML = ''; // 清空之前的结果
    }
    
    // 重置进度条
    const loadingBarProgress = document.getElementById('loadingBarProgress');
    if (loadingBarProgress) {
        loadingBarProgress.style.width = '0%';
    }
    
    // 重置步骤状态
    resetLoadingSteps();
    
    // 设置第一个步骤为活跃状态
    const stepConnecting = document.getElementById('stepConnecting');
    if (stepConnecting) {
        stepConnecting.classList.add('active');
    }
    
    // 记录开始时间
    loadingStartTime = Date.now();
    
    // 启动计时器
    if (loadingTimer) {
        clearInterval(loadingTimer);
    }
    
    loadingTimer = setInterval(() => {
        updateLoadingTimer();
        updateLoadingProgress();
    }, 100);
    
    // 延迟显示后续步骤
    setTimeout(() => {
        const stepGenerating = document.getElementById('stepGenerating');
        if (stepGenerating) {
            const stepConnecting = document.getElementById('stepConnecting');
            if (stepConnecting) {
                stepConnecting.classList.remove('active');
            }
            stepGenerating.classList.add('active');
        }
        
        // 更新进度条到30%
        if (loadingBarProgress) {
            loadingBarProgress.style.width = '30%';
        }
    }, 1500);
    
    setTimeout(() => {
        const stepFormatting = document.getElementById('stepFormatting');
        if (stepFormatting) {
            const stepGenerating = document.getElementById('stepGenerating');
            if (stepGenerating) {
                stepGenerating.classList.remove('active');
            }
            stepFormatting.classList.add('active');
        }
        
        // 更新进度条到70%
        if (loadingBarProgress) {
            loadingBarProgress.style.width = '70%';
        }
    }, 4000);
}

/**
 * 停止加载进度显示
 */
function stopLoadingProgress() {
    // 停止计时器
    if (loadingTimer) {
        clearInterval(loadingTimer);
        loadingTimer = null;
    }
    
    // 隐藏加载状态
    const resultsLoading = document.getElementById('resultsLoading');
    if (resultsLoading) {
        resultsLoading.style.display = 'none';
    }
    
    // 重置步骤状态
    resetLoadingSteps();
}

/**
 * 重置所有加载步骤的状态
 */
function resetLoadingSteps() {
    const steps = ['stepConnecting', 'stepGenerating', 'stepFormatting'];
    steps.forEach(stepId => {
        const step = document.getElementById(stepId);
        if (step) {
            step.classList.remove('active');
        }
    });
}

/**
 * 更新加载计时器显示
 */
function updateLoadingTimer() {
    const loadingTimer = document.getElementById('loadingTimer');
    if (loadingTimer) {
        const elapsed = Math.floor((Date.now() - loadingStartTime) / 1000);
        loadingTimer.textContent = `${elapsed}秒`;
    }
}

/**
 * 更新加载进度条
 */
function updateLoadingProgress() {
    const loadingBarProgress = document.getElementById('loadingBarProgress');
    if (loadingBarProgress) {
        const currentWidth = parseFloat(loadingBarProgress.style.width) || 0;
        if (currentWidth < 95) {
            // 进度缓慢前进，最多到95%（等待实际完成）
            const newWidth = Math.min(95, currentWidth + 0.2);
            loadingBarProgress.style.width = `${newWidth}%`;
        }
    }
}

/**
 * 完成加载进度
 */
function completeLoadingProgress() {
    const loadingBarProgress = document.getElementById('loadingBarProgress');
    if (loadingBarProgress) {
        loadingBarProgress.style.width = '100%';
    }
    
    // 延迟一会再隐藏，让用户看到100%的状态
    setTimeout(() => {
        stopLoadingProgress();
    }, 300);
}

/**
 * 加载话题列表
 */
function loadTopics() {
    // 开始显示加载进度
    startLoadingProgress();
    
    // 调用API获取话题数据
    API.getTopicsByTrack(currentTrackId)
        .then(topics => {
            // 完成加载进度
            completeLoadingProgress();
            
            // 渲染话题列表
            renderTopicList(topics);
        })
        .catch(error => {
            console.error('获取话题失败:', error);
            stopLoadingProgress();
            
            const resultsList = document.getElementById('resultsList');
            if (resultsList) {
                resultsList.innerHTML = `
                    <div class="error-message">
                        <p>获取话题失败: ${error.message || '未知错误'}</p>
                        <p>请检查您的网络连接和API密钥设置，然后重试</p>
                        <button id="retryButton" class="btn">重新尝试</button>
                    </div>
                `;
                
                // 添加重试按钮事件
                const retryButton = document.getElementById('retryButton');
                if (retryButton) {
                    retryButton.addEventListener('click', () => {
                        loadTopics();
                    });
                }
            }
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
    topics.forEach((topic, index) => {
        // 克隆模板
        const topicNode = document.importNode(template.content, true);
        
        // 填充数据
        topicNode.querySelector('.topic-title').textContent = topic.title;
        topicNode.querySelector('.topic-desc').textContent = topic.description;
        
        // 设置标签内容
        const tagElement = topicNode.querySelector('.topic-tag');
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
        tagElement.textContent = `#${trackNameMap[currentTrackId] || currentTrackId}`;
        
        // 设置边框色彩变化（为了视觉多样性）
        const topicItem = topicNode.querySelector('.topic-item');
        const colors = ['#4A90E2', '#50C878', '#FF7F50', '#9370DB', '#FF6B6B'];
        topicItem.style.borderLeftColor = colors[index % colors.length];
        
        // 设置收藏按钮数据和事件
        const favoriteBtn = topicNode.querySelector('.favorite-btn');
        favoriteBtn.setAttribute('data-topic-id', topic.id);
        favoriteBtn.addEventListener('click', (e) => {
            toggleFavorite(e.currentTarget, topic);
        });
        
        // 检查是否已收藏
        if (window.favoritedTopicIds && window.favoritedTopicIds.includes(topic.id)) {
            favoriteBtn.classList.add('active');
            const iconImg = favoriteBtn.querySelector('.favorite-icon');
            iconImg.src = '../images/icons/star-filled.svg';
        }
        
        // 设置提示词按钮事件
        const promptBtn = topicNode.querySelector('.prompt-btn');
        promptBtn.addEventListener('click', () => {
            showPromptModal(topic, trackNameMap[currentTrackId] || currentTrackId);
        });
        
        // 添加到结果列表
        resultsList.appendChild(topicNode);
    });
    
    // 添加初始动画效果
    setTimeout(() => {
        const topicItems = resultsList.querySelectorAll('.topic-item');
        topicItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);

    // 初始化弹窗
    initPromptModal();
}

/**
 * 初始化提示词弹窗
 */
function initPromptModal() {
    const modal = document.getElementById('promptModal');
    const closeBtn = modal.querySelector('.close-btn');
    const copyBtn = document.getElementById('copyPromptBtn');
    
    // 关闭按钮事件
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    // 点击弹窗外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // 复制按钮事件
    copyBtn.addEventListener('click', () => {
        const promptText = document.getElementById('promptText');
        
        // 创建临时textarea元素用于复制
        const textarea = document.createElement('textarea');
        textarea.value = promptText.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            // 执行复制
            document.execCommand('copy');
            
            // 显示复制成功状态
            copyBtn.classList.add('success');
            copyBtn.textContent = '复制成功';
            
            // 2秒后恢复按钮状态
            setTimeout(() => {
                copyBtn.classList.remove('success');
                copyBtn.textContent = '复制提示词';
            }, 2000);
        } catch (err) {
            console.error('复制失败:', err);
        }
        
        // 移除临时元素
        document.body.removeChild(textarea);
    });
}

/**
 * 显示提示词弹窗
 * @param {Object} topic 话题对象
 * @param {string} trackName 赛道名称
 */
function showPromptModal(topic, trackName) {
    const modal = document.getElementById('promptModal');
    const promptText = document.getElementById('promptText');
    
    // 生成提示词
    const prompt = `我是一个新媒体作者，帮我生成一篇原创文章。
平台：今日头条。
赛道：${trackName}。
风格：语言风格口语化，消除AI生成痕迹。
内容：内容深刻，发人深省，有另辟蹊径的观点更好。
数据：多引用真实兰礼盒科学数据分析，并在文末标明引用出处。
主题：${topic.title}。
描述：${topic.description}`;
    
    // 设置弹窗内容
    promptText.textContent = prompt;
    
    // 显示弹窗
    modal.classList.add('active');
    
    // 重置复制按钮状态
    const copyBtn = document.getElementById('copyPromptBtn');
    copyBtn.classList.remove('success');
    copyBtn.textContent = '复制提示词';
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

/**
 * 初始化API加载进度监听器
 */
function initApiLoadingProgressListener() {
    window.addEventListener('api-loading-progress', (event) => {
        const { phase, progress, message, trackId } = event.detail;
        
        // 确保是当前赛道的进度更新
        if (trackId === currentTrackId) {
            updateLoadingUI(phase, progress, message);
        }
    });
}

/**
 * 根据API加载阶段更新UI
 * @param {string} phase 加载阶段
 * @param {number} progress 进度值(0-1)
 * @param {string} message 可选的消息
 */
function updateLoadingUI(phase, progress, message) {
    const loadingBarProgress = document.getElementById('loadingBarProgress');
    if (loadingBarProgress) {
        loadingBarProgress.style.width = `${progress * 100}%`;
    }
    
    // 重置所有步骤状态
    resetLoadingSteps();
    
    // 根据阶段高亮对应步骤
    switch (phase) {
        case 'connecting':
            const stepConnecting = document.getElementById('stepConnecting');
            if (stepConnecting) {
                stepConnecting.classList.add('active');
                if (message) stepConnecting.textContent = message;
            }
            break;
        case 'generating':
            const stepGenerating = document.getElementById('stepGenerating');
            if (stepGenerating) {
                stepGenerating.classList.add('active');
                if (message) stepGenerating.textContent = message;
            }
            break;
        case 'formatting':
            const stepFormatting = document.getElementById('stepFormatting');
            if (stepFormatting) {
                stepFormatting.classList.add('active');
                if (message) stepFormatting.textContent = message;
            }
            break;
        case 'completed':
            // 完成加载，延迟一会再隐藏
            setTimeout(() => {
                stopLoadingProgress();
            }, 500);
            break;
    }
} 