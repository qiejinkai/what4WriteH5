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
    },
    {
        id: 'parenting',
        name: '母婴育儿',
        icon: './images/icons/parenting.svg'
    },
    {
        id: 'wellness',
        name: '健康养生',
        icon: './images/icons/wellness.svg'
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
    ],
    parenting: [
        {
            id: 'p1',
            title: '幼儿早教哪些误区，80%的家长都踩坑了',
            description: '揭秘幼儿早教中常见的认知误区，帮助家长科学育儿。'
        },
        {
            id: 'p2',
            title: '怎样处理孩子的"为什么"，培养孩子好奇心',
            description: '解析儿童好奇心发展规律，提供科学回应孩子提问的方法。'
        },
        {
            id: 'p3',
            title: '婴幼儿营养餐搭配指南，宝妈必收藏',
            description: '分享科学合理的婴幼儿饮食配方，满足不同月龄宝宝的营养需求。'
        },
        {
            id: 'p4',
            title: '新式亲子游戏：培养专注力的7个实用小方法',
            description: '介绍适合不同年龄段儿童的专注力培养游戏，附详细操作指南。'
        },
        {
            id: 'p5',
            title: '解读育儿焦虑背后：当代父母如何科学减压',
            description: '分析育儿焦虑产生的原因，提供实用的家长减压和自我调节方法。'
        }
    ],
    wellness: [
        {
            id: 'w1',
            title: '春季养生关键期，这些食疗方不容错过',
            description: '结合中医理论，介绍适合春季的养生食材和简易食疗方案。'
        },
        {
            id: 'w2',
            title: '都市白领颈椎问题大起底，3个动作在办公室就能做',
            description: '深度解析办公族颈椎问题的成因，提供实用的工间操和康复锻炼。'
        },
        {
            id: 'w3',
            title: '睡眠质量与长寿的关系：黄金睡眠如何实现',
            description: '解读最新睡眠医学研究成果，分享提高睡眠质量的实用技巧。'
        },
        {
            id: 'w4',
            title: '四季养生茶饮指南，对症喝出健康好气色',
            description: '根据不同体质和季节，推荐适合的养生茶饮配方及冲泡方法。'
        },
        {
            id: 'w5',
            title: '中医经络拍打法大全，每天10分钟激活全身',
            description: '详解经络拍打的养生原理和操作方法，针对不同问题的拍打要点。'
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
    return new Promise(async (resolve, reject) => {
        try {
            // 显示加载状态
            const appKey = getAppKey();
            
            if (!appKey) {
                // 如果没有设置appKey，使用模拟数据
                // 模拟网络延迟，分阶段显示加载状态
                setTimeout(() => {
                    // 可以通过事件或回调通知UI层更新加载状态
                    if (window.dispatchEvent) {
                        window.dispatchEvent(new CustomEvent('api-loading-progress', {
                            detail: { 
                                phase: 'connecting',
                                progress: 0.3,
                                trackId
                            }
                        }));
                    }
                }, 500);
                
                setTimeout(() => {
                    if (window.dispatchEvent) {
                        window.dispatchEvent(new CustomEvent('api-loading-progress', {
                            detail: { 
                                phase: 'generating',
                                progress: 0.6,
                                trackId
                            }
                        }));
                    }
                }, 1000);
                
                setTimeout(() => {
                    if (topicData[trackId]) {
                        if (window.dispatchEvent) {
                            window.dispatchEvent(new CustomEvent('api-loading-progress', {
                                detail: { 
                                    phase: 'completed',
                                    progress: 1.0,
                                    trackId
                                }
                            }));
                        }
                        resolve(topicData[trackId]);
                    } else {
                        reject(new Error('赛道不存在'));
                    }
                }, 1500);
                return;
            }
            
            // 构建提示词
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
            const prompt = `请为${trackName}领域生成10个热门话题，每个话题包含标题和描述。请按照以下JSON格式返回数据：
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "id": "字符串ID",
      "title": "话题标题",
      "description": "详细描述"
    },
    ...
  ]
}
id使用title的md5值。
首先搜索全网${trackName}的最新热点话题，然后根据搜索结果生成话题，确保话题的时效性和传播性。
生成的话题要有创意、新颖、符合${trackName}领域的最新趋势，适合新媒体内容创作。必须返回JSON格式，不要添加任何解释和其他文本。`;

            // 通知UI进入连接阶段
            if (window.dispatchEvent) {
                window.dispatchEvent(new CustomEvent('api-loading-progress', {
                    detail: { 
                        phase: 'connecting',
                        progress: 0.1,
                        message: '正在连接千问AI服务...',
                        trackId
                    }
                }));
            }

            // 调用千问(Qwen-Plus)大模型API
            const apiUrl = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions";
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${appKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "qwen-max", // 使用千问大模型
                    messages: [
                        {
                            role: "system",
                            content: "你是一个专业的新媒体内容创作助手，擅长生成热门话题建议。请用JSON格式返回结果，不要添加任何额外的解释文本。",
                        },
                        {
                            role: "user",
                            content: prompt,
                        },
                    ],
                    enable_search: true, // 启用搜索功能，获取更新数据
                    search_options: {
                        "forced_search": true,     // 设置最大返回结果数量为5
                        "search_strategy": "pro"
                      },
                    tool_choice: "auto"

                }),
            });

            // 通知UI进入生成阶段
            if (window.dispatchEvent) {
                window.dispatchEvent(new CustomEvent('api-loading-progress', {
                    detail: { 
                        phase: 'generating',
                        progress: 0.5,
                        message: '正在生成话题内容...',
                        trackId
                    }
                }));
            }

            // 处理响应
            if (!response.ok) {
                const errorText = await response.text();
                console.error('千问API调用失败:', errorText);
                throw new Error(`千问API调用失败: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            
            // 通知UI进入格式化阶段
            if (window.dispatchEvent) {
                window.dispatchEvent(new CustomEvent('api-loading-progress', {
                    detail: { 
                        phase: 'formatting',
                        progress: 0.8,
                        message: '整理千问返回的数据...',
                        trackId
                    }
                }));
            }
            
            // 检查返回的数据格式
            if (result.choices && result.choices[0] && result.choices[0].message) {
                try {
                    // 尝试解析返回的内容为JSON
                    const content = result.choices[0].message.content;
                    // 尝试查找JSON部分
                    const jsonMatch = content.match(/\{[\s\S]*\}/);
                    const jsonString = jsonMatch ? jsonMatch[0] : content;
                    const data = JSON.parse(jsonString);
                    
                    if (data.data && Array.isArray(data.data)) {
                        // 确保每个话题都有id
                        data.data.forEach((item, index) => {
                            if (!item.id) {
                                item.id = `${trackId}_${index}_${Date.now()}`;
                            }
                        });
                        
                        // 通知UI加载完成
                        if (window.dispatchEvent) {
                            window.dispatchEvent(new CustomEvent('api-loading-progress', {
                                detail: { 
                                    phase: 'completed',
                                    progress: 1.0,
                                    message: '千问数据加载完成',
                                    trackId
                                }
                            }));
                        }
                        
                        resolve(data.data);
                    } else {
                        console.error('千问API返回格式不符合预期:', data);
                        // 尝试处理不同的返回格式
                        if (data && typeof data === 'object') {
                            // 尝试从其他可能的结构中提取数据
                            let extractedData = [];
                            
                            // 如果有直接的数组
                            if (Array.isArray(data)) {
                                extractedData = data.map((item, index) => {
                                    return {
                                        id: `${trackId}_${index}_${Date.now()}`,
                                        title: item.title || item.name || `话题${index+1}`,
                                        description: item.description || item.content || item.desc || '暂无描述'
                                    };
                                });
                            } 
                            // 如果数据包含在其他字段中
                            else if (data.topics || data.items || data.list || data.result) {
                                const dataArray = data.topics || data.items || data.list || data.result;
                                if (Array.isArray(dataArray)) {
                                    extractedData = dataArray.map((item, index) => {
                                        return {
                                            id: `${trackId}_${index}_${Date.now()}`,
                                            title: item.title || item.name || `话题${index+1}`,
                                            description: item.description || item.content || item.desc || '暂无描述'
                                        };
                                    });
                                }
                            }
                            
                            if (extractedData.length > 0) {
                                resolve(extractedData);
                                return;
                            }
                        }
                        
                        // 如果无法提取数据，使用模拟数据
                        if (topicData[trackId]) {
                            resolve(topicData[trackId]);
                        } else {
                            reject(new Error('赛道不存在或千问API返回格式异常'));
                        }
                    }
                } catch (e) {
                    console.error('解析千问API返回内容失败:', e, result.choices[0].message.content);
                    // 解析失败，使用模拟数据
                    if (topicData[trackId]) {
                        resolve(topicData[trackId]);
                    } else {
                        reject(new Error('赛道不存在或千问API返回格式解析失败'));
                    }
                }
            } else {
                // 响应结构不符合预期，使用模拟数据
                console.error('千问API响应结构不符合预期:', result);
                if (topicData[trackId]) {
                    resolve(topicData[trackId]);
                } else {
                    reject(new Error('赛道不存在或千问API响应结构异常'));
                }
            }
        } catch (error) {
            console.error('获取话题失败:', error);
            
            // 通知UI发生错误
            if (window.dispatchEvent) {
                window.dispatchEvent(new CustomEvent('api-loading-progress', {
                    detail: { 
                        phase: 'error',
                        progress: 0,
                        message: `千问API调用出错: ${error.message}`,
                        trackId
                    }
                }));
            }
            
            // 等待一会再使用模拟数据，让用户看到错误信息
            setTimeout(() => {
                // 通知UI将使用模拟数据
                if (window.dispatchEvent) {
                    window.dispatchEvent(new CustomEvent('api-loading-progress', {
                        detail: { 
                            phase: 'fallback',
                            progress: 0.5,
                            message: '使用预设数据',
                            trackId
                        }
                    }));
                }
                
                // 出现异常时使用模拟数据
                if (topicData[trackId]) {
                    setTimeout(() => {
                        // 通知UI完成
                        if (window.dispatchEvent) {
                            window.dispatchEvent(new CustomEvent('api-loading-progress', {
                                detail: { 
                                    phase: 'completed',
                                    progress: 1.0,
                                    message: '已加载预设数据',
                                    trackId
                                }
                            }));
                        }
                        
                        resolve(topicData[trackId]);
                    }, 1000);
                } else {
                    reject(new Error('赛道不存在或千问API调用失败'));
                }
            }, 1500);
        }
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

/**
 * 获取AppKey
 * @returns {string} 应用的AppKey
 */
function getAppKey() {
    return localStorage.getItem('app_key') || '';
}

/**
 * 根据用户输入的关键词生成自定义话题
 * @param {string} trackId 赛道ID
 * @param {string} keyword 用户输入的关键词
 * @param {string} customPrompt 自定义提示词
 * @returns {Promise} 返回生成的话题列表
 */
function getCustomTopics(trackId, keyword, customPrompt) {
    return new Promise(async (resolve, reject) => {
        try {
            // 显示加载状态
            const appKey = getAppKey();
            
            if (!appKey) {
                // 如果没有设置appKey，使用模拟数据
                setTimeout(() => {
                    if (window.dispatchEvent) {
                        window.dispatchEvent(new CustomEvent('api-loading-progress', {
                            detail: { 
                                phase: 'connecting',
                                progress: 0.3,
                                trackId
                            }
                        }));
                    }
                }, 500);
                
                setTimeout(() => {
                    if (window.dispatchEvent) {
                        window.dispatchEvent(new CustomEvent('api-loading-progress', {
                            detail: { 
                                phase: 'generating',
                                progress: 0.6,
                                trackId
                            }
                        }));
                    }
                }, 1000);
                
                // 模拟数据，根据关键词生成
                setTimeout(() => {
                    // 为关键词创建模拟数据
                    const simulatedTopics = [
                        {
                            id: `custom_${Date.now()}_1`,
                            title: `${keyword}领域最新发展趋势`,
                            description: `探索${keyword}领域的最新发展动态，分析未来发展方向和潜在机会。`
                        },
                        {
                            id: `custom_${Date.now()}_2`,
                            title: `如何在${keyword}领域建立个人品牌`,
                            description: `分享在${keyword}领域建立个人影响力的策略和方法，从零开始打造专业形象。`
                        },
                        {
                            id: `custom_${Date.now()}_3`,
                            title: `${keyword}领域的5个创新案例分析`,
                            description: `深度解析${keyword}领域最具创新性的案例，探讨其成功因素和启示。`
                        },
                        {
                            id: `custom_${Date.now()}_4`,
                            title: `${keyword}与人工智能的结合点`,
                            description: `探讨${keyword}领域如何与AI技术结合，创造新的产品和服务模式。`
                        },
                        {
                            id: `custom_${Date.now()}_5`,
                            title: `${keyword}领域从业者必备的5项技能`,
                            description: `梳理在${keyword}领域取得成功所需的核心能力和知识体系。`
                        }
                    ];
                    
                    if (window.dispatchEvent) {
                        window.dispatchEvent(new CustomEvent('api-loading-progress', {
                            detail: { 
                                phase: 'completed',
                                progress: 1.0,
                                trackId
                            }
                        }));
                    }
                    resolve(simulatedTopics);
                }, 1500);
                return;
            }
            
            // 通知UI进入连接阶段
            if (window.dispatchEvent) {
                window.dispatchEvent(new CustomEvent('api-loading-progress', {
                    detail: { 
                        phase: 'connecting',
                        progress: 0.1,
                        message: '正在连接千问AI服务...',
                        trackId
                    }
                }));
            }

            // 调用千问(Qwen-Plus)大模型API
            const apiUrl = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions";
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${appKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "qwen-max", // 使用千问大模型
                    messages: [
                        {
                            role: "system",
                            content: `你是一个专业的新媒体内容创作助手，擅长根据用户提供的关键词生成热门话题建议。请关注${keyword}相关的热点内容，用JSON格式返回结果，不要添加任何额外的解释文本。`,
                        },
                        {
                            role: "user",
                            content: customPrompt,
                        },
                    ],
                    enable_search: true, // 启用搜索功能，获取更新数据
                    search_options: {
                        "forced_search": true,     
                        "search_strategy": "pro"
                    },
                    tool_choice: "auto"
                }),
            });

            // 通知UI进入生成阶段
            if (window.dispatchEvent) {
                window.dispatchEvent(new CustomEvent('api-loading-progress', {
                    detail: { 
                        phase: 'generating',
                        progress: 0.5,
                        message: '正在生成话题内容...',
                        trackId
                    }
                }));
            }

            // 处理响应
            if (!response.ok) {
                const errorText = await response.text();
                console.error('千问API调用失败:', errorText);
                throw new Error(`千问API调用失败: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            
            // 通知UI进入格式化阶段
            if (window.dispatchEvent) {
                window.dispatchEvent(new CustomEvent('api-loading-progress', {
                    detail: { 
                        phase: 'formatting',
                        progress: 0.8,
                        message: '整理千问返回的数据...',
                        trackId
                    }
                }));
            }
            
            // 检查返回的数据格式
            if (result.choices && result.choices[0] && result.choices[0].message) {
                try {
                    // 尝试解析返回的内容为JSON
                    const content = result.choices[0].message.content;
                    // 尝试查找JSON部分
                    const jsonMatch = content.match(/\{[\s\S]*\}/);
                    const jsonString = jsonMatch ? jsonMatch[0] : content;
                    const data = JSON.parse(jsonString);
                    
                    if (data.data && Array.isArray(data.data)) {
                        // 确保每个话题都有id
                        data.data.forEach((item, index) => {
                            if (!item.id) {
                                item.id = `${keyword}_${index}_${Date.now()}`;
                            }
                        });
                        
                        // 通知UI加载完成
                        if (window.dispatchEvent) {
                            window.dispatchEvent(new CustomEvent('api-loading-progress', {
                                detail: { 
                                    phase: 'completed',
                                    progress: 1.0,
                                    message: '千问数据加载完成',
                                    trackId
                                }
                            }));
                        }
                        
                        resolve(data.data);
                    } else {
                        console.error('千问API返回格式不符合预期:', data);
                        // 尝试处理不同的返回格式
                        if (data && typeof data === 'object') {
                            // 尝试从其他可能的结构中提取数据
                            let extractedData = [];
                            
                            // 如果有直接的数组
                            if (Array.isArray(data)) {
                                extractedData = data.map((item, index) => {
                                    return {
                                        id: `${keyword}_${index}_${Date.now()}`,
                                        title: item.title || item.name || `话题${index+1}`,
                                        description: item.description || item.content || item.desc || '暂无描述'
                                    };
                                });
                            } 
                            // 如果数据包含在其他字段中
                            else if (data.topics || data.items || data.list || data.result) {
                                const dataArray = data.topics || data.items || data.list || data.result;
                                if (Array.isArray(dataArray)) {
                                    extractedData = dataArray.map((item, index) => {
                                        return {
                                            id: `${keyword}_${index}_${Date.now()}`,
                                            title: item.title || item.name || `话题${index+1}`,
                                            description: item.description || item.content || item.desc || '暂无描述'
                                        };
                                    });
                                }
                            }
                            
                            if (extractedData.length > 0) {
                                resolve(extractedData);
                                return;
                            }
                        }
                        
                        // 如果无法提取数据，使用模拟数据
                        const simulatedTopics = [
                            {
                                id: `custom_${Date.now()}_1`,
                                title: `${keyword}领域最新发展趋势`,
                                description: `探索${keyword}领域的最新发展动态，分析未来发展方向和潜在机会。`
                            },
                            {
                                id: `custom_${Date.now()}_2`,
                                title: `如何在${keyword}领域建立个人品牌`,
                                description: `分享在${keyword}领域建立个人影响力的策略和方法，从零开始打造专业形象。`
                            },
                            {
                                id: `custom_${Date.now()}_3`,
                                title: `${keyword}领域的5个创新案例分析`,
                                description: `深度解析${keyword}领域最具创新性的案例，探讨其成功因素和启示。`
                            }
                        ];
                        resolve(simulatedTopics);
                    }
                } catch (e) {
                    console.error('解析千问API返回内容失败:', e, result.choices[0].message.content);
                    // 解析失败，使用模拟数据
                    const simulatedTopics = [
                        {
                            id: `custom_${Date.now()}_1`,
                            title: `${keyword}领域最新发展趋势`,
                            description: `探索${keyword}领域的最新发展动态，分析未来发展方向和潜在机会。`
                        },
                        {
                            id: `custom_${Date.now()}_2`,
                            title: `如何在${keyword}领域建立个人品牌`,
                            description: `分享在${keyword}领域建立个人影响力的策略和方法，从零开始打造专业形象。`
                        }
                    ];
                    resolve(simulatedTopics);
                }
            } else {
                // 响应结构不符合预期，使用模拟数据
                console.error('千问API响应结构不符合预期:', result);
                const simulatedTopics = [
                    {
                        id: `custom_${Date.now()}_1`,
                        title: `${keyword}领域最新发展趋势`,
                        description: `探索${keyword}领域的最新发展动态，分析未来发展方向和潜在机会。`
                    }
                ];
                resolve(simulatedTopics);
            }
        } catch (error) {
            console.error('获取自定义话题失败:', error);
            
            // 通知UI发生错误
            if (window.dispatchEvent) {
                window.dispatchEvent(new CustomEvent('api-loading-progress', {
                    detail: { 
                        phase: 'error',
                        progress: 0,
                        message: `千问API调用出错: ${error.message}`,
                        trackId
                    }
                }));
            }
            
            // 等待一会再使用模拟数据，让用户看到错误信息
            setTimeout(() => {
                // 通知UI将使用模拟数据
                if (window.dispatchEvent) {
                    window.dispatchEvent(new CustomEvent('api-loading-progress', {
                        detail: { 
                            phase: 'fallback',
                            progress: 0.5,
                            message: '使用预设数据',
                            trackId
                        }
                    }));
                }
                
                // 出现异常时使用模拟数据
                const simulatedTopics = [
                    {
                        id: `custom_${Date.now()}_1`,
                        title: `${keyword}领域最新发展趋势`,
                        description: `探索${keyword}领域的最新发展动态，分析未来发展方向和潜在机会。`
                    },
                    {
                        id: `custom_${Date.now()}_2`,
                        title: `如何在${keyword}领域建立个人品牌`,
                        description: `分享在${keyword}领域建立个人影响力的策略和方法，从零开始打造专业形象。`
                    }
                ];
                
                setTimeout(() => {
                    // 通知UI完成
                    if (window.dispatchEvent) {
                        window.dispatchEvent(new CustomEvent('api-loading-progress', {
                            detail: { 
                                phase: 'completed',
                                progress: 1.0,
                                message: '已加载预设数据',
                                trackId
                            }
                        }));
                    }
                    
                    resolve(simulatedTopics);
                }, 1000);
            }, 1500);
        }
    });
}

// 导出API函数
window.API = {
    getTracks,
    getTopicsByTrack,
    getFavorites,
    addToFavorites,
    removeFromFavorites,
    exportFavoritesAsText,
    getAppKey,
    getCustomTopics
}; 