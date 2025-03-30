// 收藏页面JavaScript
// 处理收藏内容的展示、删除和导出功能

// 初始化页面
document.addEventListener("DOMContentLoaded", () => {
    // 加载收藏列表
    loadFavorites();
    
    // 初始化导出按钮
    initExportButton();
    
    // 初始化返回首页按钮
    initGoHomeButton();
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
            Navigation.goToPage("home");
        });
    }
} 