---
title: 朋友们
description: 我的小伙伴们和一些有趣的站点。
comments: true
---
# 朋友们
> 我的小伙伴们和一些有趣的站点。


<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>朋友链接</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        
        body {
            background-color: #f8fafc;
            color: #334155;
            padding: 20px;
            line-height: 1.5;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .header h1 {
            font-size: 2rem;
            color: #1e293b;
            margin-bottom: 10px;
        }
        
        .header p {
            color: #64748b;
            font-size: 1.1rem;
        }
        
        .friends-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
        }
        
        .friend-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
        }
        
        .friend-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .friend-link {
            display: flex;
            align-items: center;
            padding: 16px;
            text-decoration: none;
            color: inherit;
            height: 100%;
        }
        
        .friend-logo {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            flex-shrink: 0;
            margin-right: 16px;
            background-color: #f1f5f9;
        }
        
        .friend-info {
            flex: 1;
            min-width: 0; /* 确保文本截断生效 */
        }
        
        .friend-name {
            font-weight: 600;
            font-size: 1rem;
            color: #1e293b;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .friend-desc {
            font-size: 0.875rem;
            color: #64748b;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        /* 移动端适配 */
        @media (max-width: 768px) {
            .friends-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .header h1 {
                font-size: 1.75rem;
            }
            
            .friend-card {
                border-radius: 10px;
            }
            
            .friend-logo {
                width: 44px;
                height: 44px;
                margin-right: 12px;
            }
        }
        
        @media (max-width: 480px) {
            .friends-grid {
                grid-template-columns: 1fr;
                gap: 12px;
            }
            
            .header h1 {
                font-size: 1.5rem;
            }
            
            .friend-link {
                padding: 14px;
            }
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            color: #94a3b8;
            font-size: 0.875rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>友情链接</h1>
            <p>发现更多优质网站和资源</p>
        </div>
        
        <ul class="friends-grid">
            <!-- Cloudflare -->
            <li class="friend-card">
                <a href="https://www.cloudflare-cn.com/" 
                   target="_blank" 
                   rel="noopener"
                   class="friend-link">
                    <img src="https://xsxinghen.github.io/jkfx/images/cloudflare.png" 
                         alt="Cloudflare" 
                         class="friend-logo">
                    <div class="friend-info">
                        <div class="friend-name">Cloudflare</div>
                        <div class="friend-desc">为"无处不在的世界"打造的云服务</div>
                    </div>
                </a>
            </li>
            
            <!-- Spaceship -->
            <li class="friend-card">
                <a href="https://www.spaceship.com/" 
                   target="_blank" 
                   rel="noopener"
                   class="friend-link">
                    <img src="https://spaceship-cdn.com/static/spaceship/favicon/spaceship-favicon.ico" 
                         alt="Spaceship" 
                         class="friend-logo">
                    <div class="friend-info">
                        <div class="friend-name">Spaceship</div>
                        <div class="friend-desc">由全球第二大域名注册商Namecheap推出的网络服务平台</div>
                    </div>
                </a>
            </li>
            
            <!-- Astro文档 -->
            <li class="friend-card">
                <a href="https://docs.astro.build/en/getting-started/" 
                   target="_blank" 
                   rel="noopener"
                   class="friend-link">
                    <img src="https://s2.loli.net/2023/12/13/YbKirkO21CtdvMD.png" 
                         alt="Astro文档" 
                         class="friend-logo">
                    <div class="friend-info">
                        <div class="friend-name">Astro文档</div>
                        <div class="friend-desc">Astro框架的入门指南和完整文档</div>
                    </div>
                </a>
            </li>
            
            <!-- TVBox接口 -->
            <li class="friend-card">
                <a href="/jkfx/" 
                   target="_blank" 
                   rel="noopener"
                   class="friend-link">
                    <img src="https://xsxinghen.github.io/jkfx/images/liuxing.png" 
                         alt="TVBox接口" 
                         class="friend-logo">
                    <div class="friend-info">
                        <div class="friend-name">TVBox接口</div>
                        <div class="friend-desc">TVBox播放器接口资源分享</div>
                    </div>
                </a>
            </li>
        </ul>
        
        <div class="footer">
            <p>© 2023 友情链接 | 持续更新中</p>
        </div>
    </div>
</body>
</html>