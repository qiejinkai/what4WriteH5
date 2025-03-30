/**
 * 公共工具函数文件
 * 包含页面通用的功能实现
 */

// 页面导航相关函数
const Navigation = {
    /**
     * 跳转到指定页面
     * @param {string} pageName 页面名称
     * @param {Object} params 参数对象
     */
    goToPage(pageName, params = {}) {
        // 构建URL参数
        const queryParams = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');
        
        // 判断当前是否在子页面
        const isInSubPage = window.location.pathname.includes('/pages/');
        
        // 构建完整URL
        let url = '';
        switch (pageName) {
            case 'home':
                url = isInSubPage ? '../index.html' : './index.html';
                break;
            case 'topic':
                url = isInSubPage ? 
                    `./topic.html${queryParams ? '?' + queryParams : ''}` : 
                    `./pages/topic.html${queryParams ? '?' + queryParams : ''}`;
                break;
            case 'favorites':
                url = isInSubPage ? 
                    './favorites.html' : 
                    './pages/favorites.html';
                break;
            default:
                url = isInSubPage ? '../index.html' : './index.html';
        }
        
        // 跳转
        window.location.href = url;
    },
    
    /**
     * 从URL获取查询参数
     * @param {string} paramName 参数名
     * @returns {string|null} 参数值
     */
    getQueryParam(paramName) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(paramName);
    },

    /**
     * 初始化底部导航事件
     */
    initNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const targetPage = item.getAttribute('data-page');
                if (targetPage) {
                    Navigation.goToPage(targetPage);
                }
            });
        });
    }
};

// DOM工具函数
const DOMUtils = {
    /**
     * 显示元素
     * @param {HTMLElement} element DOM元素
     */
    show(element) {
        if (element) {
            element.style.display = '';
        }
    },
    
    /**
     * 隐藏元素
     * @param {HTMLElement} element DOM元素
     */
    hide(element) {
        if (element) {
            element.style.display = 'none';
        }
    },
    
    /**
     * 显示加载状态
     * @param {string} elementId 元素ID
     */
    showLoading(elementId) {
        const loadingEl = document.getElementById(elementId);
        if (loadingEl) {
            this.show(loadingEl);
        }
    },
    
    /**
     * 隐藏加载状态
     * @param {string} elementId 元素ID
     */
    hideLoading(elementId) {
        const loadingEl = document.getElementById(elementId);
        if (loadingEl) {
            this.hide(loadingEl);
        }
    }
};

// 数据处理工具
const DataUtils = {
    /**
     * 格式化日期
     * @param {Date} date 日期对象
     * @returns {string} 格式化后的日期字符串
     */
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    },
    
    /**
     * 创建下载链接
     * @param {string} content 内容
     * @param {string} filename 文件名
     */
    createDownloadLink(content, filename) {
        // 创建Blob对象
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        // 创建下载链接
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        
        // 清理
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    }
};

// 将工具对象挂载到全局
window.Navigation = Navigation;
window.DOMUtils = DOMUtils;
window.DataUtils = DataUtils;

// 页面加载完成后初始化导航
document.addEventListener('DOMContentLoaded', () => {
    Navigation.initNavigation();
});

// 返回按钮处理
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.history.back();
        });
    }
});