/**
 * API接口文件
 * 定义与后端交互的数据接口
 * 目前使用模拟数据
 */

// 模拟数据 - 赛道列表
const trackData = [
    {
        id: 'tech',
        name: '科技',
        icon: './images/icons/tech.svg'
    },
    {
        id: 'finance',
        name: '财经',
        icon: './images/icons/finance.svg'
    },
    {
        id: 'entertainment',
        name: '娱乐',
        icon: './images/icons/entertainment.svg'
    },
    {
        id: 'education',
        name: '教育',
        icon: './images/icons/education.svg'
    },
    {
        id: 'health',
        name: '健康',
        icon: './images/icons/health.svg'
    },
    {
        id: 'lifestyle',
        name: '生活方式',
        icon: './images/icons/lifestyle.svg'
    }
];

// 模拟数据 - 话题数据
const topicData = {
    tech: [
        {
            id: 't1',
            title: '人工智能如何改变内容创作',
            description: '探讨AI辅助创作工具对新媒体作者工作流程的影响与未来发展趋势。'
        },
        {
            id: 't2',
            title: '元宇宙概念股大涨，背后有哪些投资机会',
            description: '分析元宇宙概念爆发后的产业链机会，以及对内容创作者的启示。'
        },
        {
            id: 't3',
            title: '最新发布的AR眼镜，会成为下一个革命性产品吗',
            description: '深度解析最新AR技术，以及它将如何改变人们的生活与工作方式。'
        },
        {
            id: 't4',
            title: '5G时代的内容革命：短视频如何进化',
            description: '从技术角度分析5G时代短视频内容的变革与创新方向。'
        },
        {
            id: 't5',
            title: '大模型时代，程序员的未来在哪里',
            description: '探讨AI大模型对软件开发行业的影响，以及程序员如何应对变革。'
        }
    ],
    finance: [
        {
            id: 'f1',
            title: '通胀数据公布后，投资者该如何布局',
            description: '解读最新经济数据，分析当前经济形势下的投资策略。'
        },
        {
            id: 'f2',
            title: '数字货币监管新政影响几何',
            description: '探讨最新数字货币监管政策对行业发展的影响及未来趋势。'
        },
        {
            id: 'f3',
            title: '年轻人理财新趋势：从储蓄到投资的转变',
            description: '分析Z世代的消费与投资行为，以及背后的经济学原理。'
        },
        {
            id: 'f4',
            title: '跨境电商新政解读：机遇与挑战',
            description: '详解最新跨境电商政策变化，及对商家和消费者的影响。'
        },
        {
            id: 'f5',
            title: '房地产市场新动向：泡沫还是机会',
            description: '从多角度分析当前房地产市场形势，为读者提供投资参考。'
        }
    ],
    entertainment: [
        {
            id: 'e1',
            title: '热播剧爆款背后的内容营销策略',
            description: '解析近期爆款影视作品的营销手法与传播路径。'
        },
        {
            id: 'e2',
            title: '当红艺人塑造人设的成功与失败案例',
            description: '剖析明星人设打造的关键因素，以及对粉丝经济的影响。'
        },
        {
            id: 'e3',
            title: '综艺节目创新模式：如何突破同质化困境',
            description: '探讨当下综艺节目的创新方向与未来发展趋势。'
        },
        {
            id: 'e4',
            title: '直播带货遇冷，内容创作者如何转型',
            description: '分析直播电商行业变化，提供内容创作者的转型策略。'
        },
        {
            id: 'e5',
            title: '新生代偶像养成：流量与实力的平衡',
            description: '解读偶像培养中的商业模式与艺术价值的平衡之道。'
        }
    ],
    education: [
        {
            id: 'ed1',
            title: '双减政策一年后：教育行业的变革与应对',
            description: '分析教育政策变化对行业的影响，以及机构的转型方向。'
        },
        {
            id: 'ed2',
            title: '高校专业选择新趋势：新文科与新工科受追捧',
            description: '解读最新高校专业选择数据，为考生和家长提供参考。'
        },
        {
            id: 'ed3',
            title: '在线教育平台如何提高用户留存率',
            description: '探讨数字化教育产品的用户体验设计与内容策略。'
        },
        {
            id: 'ed4',
            title: '终身学习时代：成人教育市场的蓝海机会',
            description: '分析成人继续教育市场的规模与发展前景。'
        },
        {
            id: 'ed5',
            title: '教育元宇宙：虚拟学习环境的优势与局限',
            description: '前瞻性探讨元宇宙技术在教育领域的应用场景与挑战。'
        }
    ],
    health: [
        {
            id: 'h1',
            title: '亚健康人群激增，养生内容如何精准触达',
            description: '分析不同年龄段人群的健康需求，提供内容创作思路。'
        },
        {
            id: 'h2',
            title: '数字健康产品爆发，智能穿戴设备如何选择',
            description: '深度评测市面主流健康监测产品，为消费者提供购买建议。'
        },
        {
            id: 'h3',
            title: '心理健康成为热门话题，如何科学普及心理知识',
            description: '探讨心理健康内容创作的专业性与大众化平衡。'
        },
        {
            id: 'h4',
            title: '体重管理新理念：告别极端减肥法',
            description: '科学解读健康饮食与运动结合的体重管理方法。'
        },
        {
            id: 'h5',
            title: '中医养生热潮背后：传统与科学如何结合',
            description: '分析中医养生概念流行的原因，以及如何科学传播中医知识。'
        }
    ],
    lifestyle: [
        {
            id: 'l1',
            title: '断舍离生活方式：极简主义为何受年轻人追捧',
            description: '解读极简生活理念的兴起及其对消费方式的影响。'
        },
        {
            id: 'l2',
            title: '城市微旅行：周末也能充电的精致生活方式',
            description: '挖掘城市周边旅行资源，分享高质量短途旅行规划方法。'
        },
        {
            id: 'l3',
            title: '居家办公常态化，家居布置如何兼顾工作与生活',
            description: '提供实用的家居改造建议，打造高效舒适的居家办公环境。'
        },
        {
            id: 'l4',
            title: '咖啡文化升级：从速溶到精品的消费升级之路',
            description: '分析咖啡消费升级现象背后的文化与社会因素。'
        },
        {
            id: 'l5',
            title: '宠物经济爆发：铲屎官消费行为解析',
            description: '深入探讨宠物市场的增长点与内容创作机会。'
        }
    ]
};

/**
 * 获取所有赛道列表
 * @returns {Promise} 返回赛道数据
 */
function getTracks() {
    return new Promise((resolve) => {
        // 模拟网络请求延迟
        setTimeout(() => {
            resolve(trackData);
        }, 300);
    });
}

/**
 * 根据赛道ID获取热点话题
 * @param {string} trackId 赛道ID
 * @returns {Promise} 返回该赛道的话题列表
 */
function getTopicsByTrack(trackId) {
    return new Promise((resolve, reject) => {
        // 模拟网络请求延迟
        setTimeout(() => {
            if (topicData[trackId]) {
                resolve(topicData[trackId]);
            } else {
                reject(new Error('赛道不存在'));
            }
        }, 1500); // 故意设置较长的延迟，以展示加载效果
    });
}

/**
 * 获取收藏的话题列表
 * @returns {Promise} 返回收藏的话题
 */
function getFavorites() {
    return new Promise((resolve) => {
        // 从本地存储获取收藏数据
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setTimeout(() => {
            resolve(favorites);
        }, 300);
    });
}

/**
 * 添加话题到收藏
 * @param {Object} topic 话题对象
 * @param {string} trackId 赛道ID
 * @returns {Promise} 成功状态
 */
function addToFavorites(topic, trackId) {
    return new Promise((resolve) => {
        // 获取现有收藏
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        // 添加赛道信息到话题对象
        const trackInfo = trackData.find(track => track.id === trackId);
        const topicWithTrack = {
            ...topic,
            trackId,
            trackName: trackInfo ? trackInfo.name : trackId
        };
        
        // 检查是否已收藏
        const exists = favorites.some(item => item.id === topic.id);
        
        if (!exists) {
            favorites.push(topicWithTrack);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
        
        setTimeout(() => {
            resolve({ success: true });
        }, 200);
    });
}

/**
 * 从收藏中删除话题
 * @param {string} topicId 话题ID
 * @returns {Promise} 成功状态
 */
function removeFromFavorites(topicId) {
    return new Promise((resolve) => {
        // 获取现有收藏
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        // 移除指定话题
        const newFavorites = favorites.filter(item => item.id !== topicId);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        
        setTimeout(() => {
            resolve({ success: true });
        }, 200);
    });
}

/**
 * 导出收藏列表为文本
 * @returns {string} 格式化的文本内容
 */
function exportFavoritesAsText() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let textContent = '# 我的收藏话题\n\n';
    
    if (favorites.length === 0) {
        textContent += '暂无收藏内容\n';
        return textContent;
    }
    
    // 按赛道分组
    const trackGroups = {};
    favorites.forEach(item => {
        if (!trackGroups[item.trackId]) {
            trackGroups[item.trackId] = [];
        }
        trackGroups[item.trackId].push(item);
    });
    
    // 格式化输出
    Object.keys(trackGroups).forEach(trackId => {
        const trackName = trackGroups[trackId][0].trackName || trackId;
        textContent += `## ${trackName}\n\n`;
        
        trackGroups[trackId].forEach(item => {
            textContent += `### ${item.title}\n`;
            textContent += `${item.description}\n\n`;
        });
    });
    
    return textContent;
}

// 导出API函数
window.API = {
    getTracks,
    getTopicsByTrack,
    getFavorites,
    addToFavorites,
    removeFromFavorites,
    exportFavoritesAsText
}; 