---
title: Fuwari简单指南
published: 2024-04-01
description: "如何使用这个博客模板。"
image: "./cover.jpeg"
tags: ["Fuwari", "Blog", "定制"]
pinned: true
draft: false
---

> 封面图片来源: [Source](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

此博客模板是使用 [Astro](https://astro.build/).对于本指南中未提及的内容，您可以在 [Astro Docs](https://docs.astro.build/).

## 帖子的前言内容

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
pinned: false
draft: false
---
```

| Attribute     | Description                                                                                                                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 帖子的标题                                                                                                                                                                                      |
| `published`   | 帖子发布的日期                                                                                                                                                                            |
| `description` | 简短描述，显示在索引页上。                                                                                                                                                   |
| `image`       | 帖子的封面图片路径。以“http://”或“https://”开头：使用网络图片以“/”开头：用于“public”（公共）目录中的图片无前缀：相对于markdown（标记语言）文件（的路径）。 |
| `tags`        | 帖子的标签。                                                                                                                                                                                       |
| `pinned`      | 帖子置顶。                                                                                                                                                                                   |
| `draft`       | 如果这篇帖子仍是草稿，就不会显示。                                                                                                                                                    |

## 放置帖子文件的位置



你的文章文件应放置在 `src/content/posts/` 目录下。你也可以创建子目录，以便更好地组织你的文章和素材 。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
