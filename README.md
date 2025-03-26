# 🍥Fuwari

基于 [Astro](https://astro.build) 开发的静态博客模板。

[**🖥️在线预览（Vercel）**](https://fuwari.vercel.app)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
[**📦旧 Hexo 版本**](https://github.com/saicaca/hexo-theme-vivia)

> README 版本：`2024-09-10`

![Preview Image](https://raw.githubusercontent.com/saicaca/resource/main/fuwari/home.png)

## ✨ 功能特性

- [x] 基于 Astro 和 Tailwind CSS 开发
- [x] 流畅的动画和页面过渡
- [x] 亮色 / 暗色模式
- [x] 自定义主题色和横幅图片
- [x] 响应式设计
- [ ] 评论
- [x] 搜索
- [ ] 文内目录

## 🚀 使用方法

1. 使用此模板[生成新仓库](https://github.com/saicaca/fuwari/generate)或 Fork 此仓库
2. 进行本地开发，Clone 新的仓库，执行 `pnpm install` 和 `pnpm add sharp` 以安装依赖  
   - 若未安装 [pnpm](https://pnpm.io)，执行 `npm install -g pnpm`
   - 完成后运行服务 `npm run dev`
3. 通过配置文件 `src/config.ts` 自定义博客
4. 执行 `pnpm new-post <filename>` 创建新文章，并在 `src/content/posts/` 目录中编辑
5. 参考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)将博客部署至 Vercel, Netlify, GitHub Pages 等；部署前需编辑 `astro.config.mjs` 中的站点设置。

## ⚙️ 文章 Frontmatter

```yaml
---
title: My First Blog Post     #标题
published: 2023-09-09      #日期
description: This is the first post of my new Astro blog.      #文章简概
image: ./cover.jpg  # 封面名称最好统一用cover命名，否则可能会报错
tags: [Foo, Bar]     #标签
category: Front-end     # 分类
draft: false      # 草稿状态：false = 不是草稿，主页显示文章 ；true = 是草稿，主页不显示文章
lang: jp      # 仅当文章语言与 `config.ts` 中的网站语言不同时需要设置
---

插入图片
![](./图片地址.jpg)  # 统一使用jpg格式的图片，bmp的用不了。

```

## 🧞 指令

下列指令均需要在项目根目录执行：

| Command                           | Action                            |
|:----------------------------------|:----------------------------------|
| `pnpm install` 并 `pnpm add sharp` | 安装依赖                              |
| `pnpm dev`                        | 在 `localhost:4321` 启动本地开发服务器      |
| `pnpm build`                      | 构建网站至 `./dist/`                   |
| `pnpm preview`                    | 本地预览已构建的网站                        |
| `pnpm new-post <filename>`        | 创建新文章                             |
| `pnpm run new-friend `            | 创建新友链                             |
| `pnpm astro ...`                  | 执行 `astro add`, `astro check` 等指令 |
| `pnpm astro --help`               | 显示 Astro CLI 帮助                   |

<ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8"> <li> <a href="https://astro.sliverkeigo.top/" target="_blank" rel="noopener noreferrer external"> <div class="p-4 flex gap-2 bg-accent/10 rounded-lg group"> <img class="shrink-0 size-16 object-contain rounded-full" src="https://www.sliverkeigo.top/_next/image?url=https%3A%2F%2Fsliverkeigo.top%2Fapi%2Fv2%2Fobjects%2Favatar%2Fd7mox619mtisq9vtxt.png&amp;w=384&amp;q=75" alt="Friend avatar: Keigo" loading="lazy"> <div class="min-w-0 grow"> <div class="truncate font-bold text-xl group-hover:text-accent"> Keigo </div> <div class="text-sm line-clamp-2">那天早上的霧散了,不止早上,不止霧</div> </div> <i class="shrink-0 iconfont icon-external-link group-hover:text-accent"></i> </div> </a> </li><li> <a href="https://docs.astro.build/en/getting-started/" target="_blank" rel="noopener noreferrer external"> <div class="p-4 flex gap-2 bg-accent/10 rounded-lg group"> <img class="shrink-0 size-16 object-contain rounded-full" src="https://s2.loli.net/2023/12/13/YbKirkO21CtdvMD.png" alt="Friend avatar: Astro Docs" loading="lazy"> <div class="min-w-0 grow"> <div class="truncate font-bold text-xl group-hover:text-accent"> Astro Docs </div> <div class="text-sm line-clamp-2">Astro 入门指南</div> </div> <i class="shrink-0 iconfont icon-external-link group-hover:text-accent"></i> </div> </a> </li><li> <a href="https://www.lxchapu.com" target="_blank" rel="noopener noreferrer external"> <div class="p-4 flex gap-2 bg-accent/10 rounded-lg group"> <img class="shrink-0 size-16 object-contain rounded-full" src="https://s2.loli.net/2024/04/23/tIxXmT45RbBDWH8.webp" alt="Friend avatar: 柃夏chapu" loading="lazy"> <div class="min-w-0 grow"> <div class="truncate font-bold text-xl group-hover:text-accent"> 柃夏chapu </div> <div class="text-sm line-clamp-2">生活明朗，万物可爱。</div> </div> <i class="shrink-0 iconfont icon-external-link group-hover:text-accent"></i> </div> </a> </li> </ul>


