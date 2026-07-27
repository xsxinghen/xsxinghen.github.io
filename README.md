# 🍥Fuwari
测试测试测试
基于 [Astro](https://astro.build) 开发的静态博客模板。

Fuwari主题源仓地址：[saicaca/fuwari](https://github.com/saicaca/fuwari)

🖥️[**在线预览（Vercel)**](https://fuwari.vercel.app)&nbsp;&nbsp;&nbsp;🖥️[**在线预览（Edgeone)**](https://fuwari.xsxh.qzz.io)

![Preview Image](https://raw.githubusercontent.com/saicaca/resource/main/fuwari/home.png)

## ✨ 功能特性

- [x] 使用 [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- [x] 平滑的动画和页面过渡
- [x] 浅色/深色模式
- [x] 可定制的主题颜色和横幅
- [x] 响应式设计
- [x]  [Pagefind](https://pagefind.app/)的搜索功能
- [x] [Markdown 扩展功能](https://github.com/saicaca/fuwari?tab=readme-ov-file#-markdown-extended-syntax)
- [x] 目录
- [x] RSS 提要
- [x] 添加置顶功能，删除分类功能


## 📦 使用方法

1. 使用此模板[生成新仓库](https://github.com/saicaca/fuwari/generate)或 Fork 此仓库
2. 进行本地开发，Clone 新的仓库，执行 `pnpm install` 和 `pnpm add sharp` 以安装依赖  
   - 若未安装 [pnpm](https://pnpm.io)，执行 `npm install -g pnpm`
   - 完成后运行服务 `pnpm dev` 或 `npm run dev`
3. 通过配置文件 `src/config.ts` 自定义博客
4. 执行 `pnpm new-post <filename>` 创建新文章，并在 `src/content/posts/` 目录中编辑
5. 参考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)将博客部署至 Vercel, Netlify, GitHub Pages 等；部署前需编辑 `astro.config.mjs` 中的站点设置。

## 🧩 进阶配置

1、**导航栏添加菜单**
   
方法一：
   - src/pages添加文件 标题.astro 内容可以复制about.astro，且将about改为标题名;
   - src/types/config.ts里添加修改 ==> export enum LinkPreset 下修改；
   - src/constants/link-presets.ts修改翻译
   - src/i18n/i18nKey.ts 添加
   
方法二：
   - src/pages添加文件 标题.astro
可按照
[afoim/fuwari/](https://github.com/afoim/fuwari/)进行配置

2、**寻找**
```
<head>...</head>
```
：src => layouts => Layout.astro <=在此文件下

3、**主页自动跳About或其它页**

如何让 主页 `/` 链接自动跳转到 关于 `/about`，可以在 astro.config.mjs 里加一行配置：
```
export default defineConfig({
        redirects: {
        '/': '/about'
        },
        ……
```

4、**设置Node.js版本：**

   package.json文件下添加
   ```json
   "engines": {
      "node": "24.18.0"
   },
   ```

## 🚀 部署

将博客部署到任何静态托管平台：

- **Vercel：** 连接 GitHub 仓库到 Vercel
- **Netlify：** 直接从 GitHub 部署
- **GitHub Pages：** 使用包含的 GitHub Actions 工作流
- **Cloudflare Pages：** 连接您的仓库
- **构建设置：** 

-- 构建命令：`npm run build`

-- 输出目录：`dist`

部署前，请在 `src/config.ts` 中更新 `siteURL`。
**不建议**将 `.env` 文件提交到 Git，`.env` 应该仅在本地调试或构建使用。若要将项目在云平台部署，建议通过平台上的 `环境变量` 配置传入。

## ⚙️ 文章 Frontmatter

```yaml
---
title: 我的第一篇博客文章   #标题
published: 2023-09-09      #日期
description: 这是我新的astro博客的第一篇文章。      #文章简概
image: ./cover.jpg  # 封面
pinned : false # 置顶功能 false = 不置顶 true = 置顶
tags: [Foo, Bar]     #标签
draft: false      # 草稿状态：false = 不是草稿，主页显示文章 ；true = 是草稿，主页不显示文章
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
| `pnpm astro ...`                  | 执行 `astro add`, `astro check` 等指令 |
| `pnpm astro --help`               | 显示 Astro CLI 帮助                   |




