/**
 * 设置页面JavaScript
 * 处理设置项的保存和读取
 */

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    // 初始化返回按钮
    initBackButton();
    // 初始化底部导航
    Navigation.initNavigation();
    // 初始化设置项
    initSettings();
    // 初始化保存按钮
    initSaveButton();
});

/**
 * 初始化返回按钮
 */
function initBackButton() {
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.history.back();
        });
    }
}

/**
 * 初始化设置项
 */
function initSettings() {
    // 获取保存的AppKey
    const appKey = localStorage.getItem('app_key') || '';
    
    // 设置输入框值
    const appKeyInput = document.getElementById('appKey');
    if (appKeyInput) {
        appKeyInput.value = appKey;
    }
}

/**
 * 初始化保存按钮
 */
function initSaveButton() {
    const saveButton = document.getElementById('saveSettings');
    if (!saveButton) return;
    
    saveButton.addEventListener('click', () => {
        // 获取AppKey值
        const appKeyInput = document.getElementById('appKey');
        const appKey = appKeyInput ? appKeyInput.value.trim() : '';
        
        // 保存到本地存储
        localStorage.setItem('app_key', appKey);
        
        // 显示成功信息
        showSuccessMessage();
    });
}

/**
 * 显示保存成功信息
 */
function showSuccessMessage() {
    // 检查是否已有成功消息元素
    let messageEl = document.querySelector('.success-message');
    
    // 如果没有，创建一个
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.className = 'success-message';
        messageEl.textContent = '设置已保存';
        
        // 添加到按钮容器之后
        const buttonContainer = document.querySelector('.button-container');
        if (buttonContainer) {
            buttonContainer.parentNode.insertBefore(messageEl, buttonContainer.nextSibling);
        }
    }
    
    // 显示成功消息
    messageEl.classList.add('visible');
    
    // 3秒后隐藏
    setTimeout(() => {
        messageEl.classList.remove('visible');
    }, 3000);
} 