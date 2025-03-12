---
title: Markdown 扩展
published: 2024-05-01
updated: 2024-11-29
description: '在Fuwari中了解更多关于Markdown功能的信息'
image: ''
tags: [演示, 示例, Markdown]
category: 示例
draft: false 
---

## GitHub Repository Cards
您可以添加动态卡片，链接到 GitHub 仓库，页面加载时，仓库信息从 GitHub API 中获取。

::github{repo="Fabrizz/MMM-OnSpotify"}

创建一个带有代码 ::github{repo="<owner>/<repo>"} 的 GitHub 仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```

## 警告

支持的警告类型如下: `note` `tip` `important` `warning` `caution`

:::note
突出显示用户在快速浏览时应注意的信息。
:::

:::tip
可选信息，以帮助用户更成功。
:::

:::important
关键信息，用户成功所需的必要信息。
:::

:::warning
Critical content demanding immediate 关键内容，因潜在风险而需立即引起用户注意。
:::

:::caution
行动的负面潜在后果。
:::

### 基本语法

```markdown
:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::
```

### 自定义标题

警告标题可以自定义。

:::note[我的自定义标题]
这是一个有自定义标题的便签 。
:::

```markdown
:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::
```

### GitHub 语法

> [!TIP]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925) 也得到支持

```
> [!NOTE]
> The GitHub syntax is also supported.

> [!TIP]
> The GitHub syntax is also supported.
```