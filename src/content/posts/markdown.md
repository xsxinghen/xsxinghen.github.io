---
title: Markdown 示例
published: 2023-10-01
description: 一篇Markdown博客文章的简单示例。
tags: [Markdown, Blog, 演示]
category: 示例
draft: false
---

# h1 标题

段落之间由空行分隔。

第二段。 _斜体_, **粗体**, and `monospace`. 项目符号列表看起来像:

- 这一条
- 那一个
- 另一个

请注意——不考虑星号——实际文本内容从第 4 列开始

> 区块引用
> 是这样写的。
>
> 它们可以跨越多个段落,
> 如果您喜欢的话.

使用 3 个短横线表示破折号。使用 2 个短横线表示范围 (ex., "it's all
in chapters 12--14"). 三个点 ... 将被转换为省略号。支持 Unicode ☺

## h2 标题

以下是一个编号列表:

1. 第一项
2. 第二项
3. 第三项

注意再次，实际文本从第 4 列开始（从左侧起 4 个字符）。这里是一个代码示例:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

您可能已经猜到了，缩进 4 个空格。顺便说一句，如果您喜欢，可以用分隔块代替缩进块:

```
define foobar() {
    print "Welcome to flavor country!";
}
```

（这使得复制粘贴更容易）。您可以选择为分隔的块标记语法高亮:

```python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```

### h3 标题

现在是一个嵌套列表:

1. 首先，准备以下食材:

    - carrots
    - celery
    - lentils

2. 烧一些水.

3. 将所有东西倒入锅中，按照以下算法进行:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    不要碰木勺，否则它会掉下来

注意文本总是对齐在 4 个空格缩进上（包括那条继续上面第 3 项的最后一行）.

这里有一个 [网站链接](http://foo.bar), 一个 [本地文档链接](local-doc.html), 以及当前文档中的一个 [部分标题链接](#an-h2-header). 部分标题链接 [^1].

[^1]: 脚注文本在此处.


内联数学公式可以这样输入: $\omega = d\phi / dt$. 显示数学公式应单独占一行，并用双美元符号括起来:

$$I = \int \rho R^{2} dV$$

$$
\begin{equation*}
\pi
=3.1415926535
 \;8979323846\;2643383279\;5028841971\;6939937510\;5820974944
 \;5923078164\;0628620899\;8628034825\;3421170679\;\ldots
\end{equation*}
$$

请注意，您可以转义任何您希望按字面显示的标点符号，例如.: \`foo\`, \*bar\*, etc.
