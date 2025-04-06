/**
 * 文本工具功能
 * 提供文本处理相关的工具函数
 */

// 初始化文本工具功能
function initTextTool() {
    // 找到底部文本工具按钮并添加点击事件
    const textToolBtn = document.querySelector('.nav-item[data-page="text-tool"]');
    const textToolModal = document.getElementById('textToolModal');
    const closeTextToolBtn = document.getElementById('closeTextToolBtn');
    const cleanTextBtn = document.getElementById('cleanTextBtn');
    const copyCleanTextBtn = document.getElementById('copyCleanTextBtn');
    const markdownText = document.getElementById('markdownText');
    const cleanTextResult = document.getElementById('cleanTextResult');
    
    if (textToolBtn) {
        textToolBtn.addEventListener('click', () => {
            if (textToolModal) {
                textToolModal.classList.add('active');
            }
        });
    }
    
    if (closeTextToolBtn) {
        closeTextToolBtn.addEventListener('click', () => {
            if (textToolModal) {
                textToolModal.classList.remove('active');
            }
        });
    }
    
    if (cleanTextBtn && markdownText && cleanTextResult) {
        cleanTextBtn.addEventListener('click', () => {
            const markdown = markdownText.value;
            const cleanText = removeMarkdown(markdown);
            cleanTextResult.textContent = cleanText;
        });
    }
    
    if (copyCleanTextBtn && cleanTextResult) {
        copyCleanTextBtn.addEventListener('click', () => {
            const textToCopy = cleanTextResult.textContent;
            if (textToCopy.trim() === '') {
                return; // 如果没有内容，不执行复制操作
            }
            
            copyToClipboard(textToCopy).then(() => {
                // 显示复制成功提示
                const originalText = copyCleanTextBtn.textContent;
                copyCleanTextBtn.textContent = '复制成功！';
                setTimeout(() => {
                    copyCleanTextBtn.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('复制失败:', err);
                // 显示复制失败提示
                copyCleanTextBtn.textContent = '复制失败！';
                setTimeout(() => {
                    copyCleanTextBtn.textContent = '复制纯文本';
                }, 2000);
            });
        });
    }
}

/**
 * 移除文本中的Markdown语法
 * @param {string} markdown Markdown文本
 * @return {string} 移除Markdown语法后的纯文本
 */
function removeMarkdown(markdown) {
    if (!markdown) return '';
    
    let text = markdown;
    
    // 移除标题 (# 标题)
    text = text.replace(/^#{1,6}\s+/gm, '');
    
    // 移除加粗和斜体 (**粗体** *斜体*)
    text = text.replace(/(\*\*|__)(.*?)\1/g, '$2');
    text = text.replace(/(\*|_)(.*?)\1/g, '$2');
    
    // 移除行内代码 (`代码`)
    text = text.replace(/`([^`]+)`/g, '$1');
    
    // 移除代码块
    text = text.replace(/```[\s\S]*?```/g, '');
    
    // 移除链接 [文本](链接)
    text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    
    // 移除图片 ![描述](图片链接)
    text = text.replace(/!\[([^\]]+)\]\([^)]+\)/g, '');
    
    // 移除引用 (> 引用)
    text = text.replace(/^>\s+/gm, '');
    
    // 移除水平线 (---, ___, ***)
    text = text.replace(/^(---|___|\*\*\*)$/gm, '');
    
    // 移除列表标记 (- 列表项, 1. 列表项)
    text = text.replace(/^(\s*)([-+*]|\d+\.)\s+/gm, '$1');
    
    // 移除HTML标签
    text = text.replace(/<[^>]+>/g, '');
    
    // 移除表格 Markdown 语法
    text = text.replace(/\|.*\|/g, '');
    text = text.replace(/^[-:|\s]+$/gm, '');
    
    // 移除空白行
    text = text.replace(/\n\s*\n/g, '\n\n');
    
    // 去掉多余的空白行
    text = text.replace(/^\s+|\s+$/g, '');
    
    return text;
}

/**
 * 复制文本到剪贴板
 * @param {string} text 要复制的文本
 * @return {Promise} 复制操作的Promise
 */
function copyToClipboard(text) {
    // 现代浏览器的复制方法
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
    }
    
    // 兼容性复制方法
    return new Promise((resolve, reject) => {
        try {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            
            if (successful) {
                resolve();
            } else {
                reject(new Error('复制失败'));
            }
        } catch (err) {
            reject(err);
        }
    });
}

// 在页面加载完成后初始化文本工具
document.addEventListener('DOMContentLoaded', () => {
    initTextTool();
}); 