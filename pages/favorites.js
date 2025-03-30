// 收藏页面JavaScript
// 处理收藏内容的展示、删除和导出功能

// 初始化页面
document.addEventListener("DOMContentLoaded", () => {
    // 初始化导航
    Navigation.initNavigation();
    
    // 加载收藏列表
    loadFavorites();
    
    // 初始化导出按钮
    initExportButton();
    
    // 初始化返回首页按钮
    initGoHomeButton();
    
    // 初始化弹窗
    initPromptModal();
});

/**
 * 加载收藏列表
 */
function loadFavorites() {
    const favoritesList = document.getElementById("favoritesList");
    const emptyState = document.getElementById("emptyState");
    
    if (!favoritesList || !emptyState) return;
    
    // 调用API获取收藏数据
    API.getFavorites().then(favorites => {
        // 根据收藏数量决定是否显示空状态
        if (favorites.length === 0) {
            DOMUtils.show(emptyState);
            DOMUtils.hide(favoritesList);
        } else {
            DOMUtils.hide(emptyState);
            DOMUtils.show(favoritesList);
            
            // 渲染收藏列表
            renderFavoritesList(favorites);
        }
    }).catch(error => {
        console.error('获取收藏失败:', error);
    });
}

/**
 * 渲染收藏列表
 * @param {Array} favorites 收藏数据数组
 */
function renderFavoritesList(favorites) {
    const favoritesList = document.getElementById("favoritesList");
    const template = document.getElementById("favoriteItemTemplate");
    
    if (!favoritesList || !template) return;
    
    // 清空之前的内容
    favoritesList.innerHTML = "";
    
    // 遍历收藏数据并渲染
    favorites.forEach(item => {
        // 克隆模板
        const favoriteNode = document.importNode(template.content, true);
        
        // 填充数据
        favoriteNode.querySelector(".favorite-track").textContent = item.trackName || item.trackId;
        favoriteNode.querySelector(".favorite-title").textContent = item.title;
        favoriteNode.querySelector(".favorite-desc").textContent = item.description;
        
        // 设置删除按钮事件
        const removeBtn = favoriteNode.querySelector(".remove-btn");
        removeBtn.setAttribute("data-topic-id", item.id);
        removeBtn.addEventListener("click", () => {
            removeFavorite(item.id);
        });
        
        // 设置提示词按钮事件
        const promptBtn = favoriteNode.querySelector('.prompt-btn');
        promptBtn.addEventListener('click', () => {
            showPromptModal(item);
        });
        
        // 添加到收藏列表
        favoritesList.appendChild(favoriteNode);
    });
}

/**
 * 移除收藏项
 * @param {string} topicId 话题ID
 */
function removeFavorite(topicId) {
    // 调用API删除收藏
    API.removeFromFavorites(topicId).then(() => {
        // 重新加载收藏列表
        loadFavorites();
    }).catch(error => {
        console.error('删除收藏失败:', error);
    });
}

/**
 * 初始化导出按钮功能
 */
function initExportButton() {
    const exportBtn = document.getElementById("exportBtn");
    
    if (exportBtn) {
        exportBtn.addEventListener("click", () => {
            // 获取格式化的收藏列表文本
            const content = API.exportFavoritesAsText();
            
            // 当前日期作为文件名一部分
            const date = DataUtils.formatDate(new Date());
            const filename = `我的收藏话题_${date}.txt`;
            
            // 创建下载
            DataUtils.createDownloadLink(content, filename);
            
            // 显示导出成功提示
            showExportToast();
        });
    }
}

/**
 * 显示导出成功提示
 */
function showExportToast() {
    // 检查是否已有提示
    let toast = document.querySelector(".export-toast");
    
    // 如果没有则创建
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "export-toast";
        toast.textContent = "导出成功！";
        document.body.appendChild(toast);
    }
    
    // 显示提示
    DOMUtils.show(toast);
    
    // 定时隐藏
    setTimeout(() => {
        DOMUtils.hide(toast);
    }, 2500);
}

/**
 * 初始化返回首页按钮
 */
function initGoHomeButton() {
    const goHomeBtn = document.getElementById("goHomeBtn");
    
    if (goHomeBtn) {
        goHomeBtn.addEventListener("click", () => {
            Navigation.goToPage('home');
        });
    }
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
 * @param {Object} favorite 收藏对象
 */
function showPromptModal(favorite) {
    const modal = document.getElementById('promptModal');
    const promptText = document.getElementById('promptText');
    
    // 生成提示词
    const prompt = `我是一个新媒体作者，帮我生成一篇原创文章。
平台：今日头条。
赛道：${favorite.trackName}。
风格：语言风格口语化，消除AI生成痕迹。
内容：内容深刻，发人深省，有另辟蹊径的观点更好。
数据：多引用真实兰礼盒科学数据分析，并在文末标明引用出处。
主题：${favorite.title}。
描述：${favorite.description}`;
    
    // 设置弹窗内容
    promptText.textContent = prompt;
    
    // 显示弹窗
    modal.classList.add('active');
    
    // 重置复制按钮状态
    const copyBtn = document.getElementById('copyPromptBtn');
    copyBtn.classList.remove('success');
    copyBtn.textContent = '复制提示词';
} 