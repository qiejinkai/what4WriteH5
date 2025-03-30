/**
 * 首页JavaScript
 * 处理赛道选择和导航逻辑
 */

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    // 初始化赛道点击事件
    initTrackSelection();
    // 初始化设置按钮
    initSettingsButton();
});

/**
 * 初始化赛道选择功能
 */
function initTrackSelection() {
    const trackItems = document.querySelectorAll('.track-item');
    
    trackItems.forEach(item => {
        item.addEventListener('click', () => {
            // 获取选中的赛道ID
            const trackId = item.getAttribute('data-track');
            
            // 跳转到话题生成页面
            if (trackId) {
                Navigation.goToPage('topic', { track: trackId });
            }
        });
    });
}

/**
 * 初始化设置按钮
 */
function initSettingsButton() {
    const settingsBtn = document.getElementById('settingsBtn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            // 跳转到设置页面
            Navigation.goToPage('settings');
        });
    }
} 