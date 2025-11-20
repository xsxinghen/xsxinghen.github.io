---
title: CNB如何用EO部署搭建Blog
published: 2025-11-20
description: '如何利用CNB简单快捷的在O上部署搭建Blog'
image: ''
tags: [CNB, Blog, EO, Edgeone]
pinned: true
draft: false 
---
## 如何将cnb仓库搭建好的Blog部署到edgeone或edgeone国际版
CNB是腾讯旗下的代码仓库平台，也是继 gitee，gitcode 之后又一个为中文开发者生态提供基础设施的平台，同GitHub Pages一样，CNB也可以托管静态网页。

废话不多说，教程开始。

:::caution    
注意第二步！注意第二步！！注意第二步！！！  
:::

> 一、 先在EO点击创建项目=>直接上传，项目名称同仓库名

> 二、 ［！！！注意！！！］加速区域别忘记更改为：【全球可用区（不含中国大陆）】！！！『域名备案过的可无视这条』

> 三、 可以下载本仓库的源进行上传（不会部署成功）或直接用示例模板开始部署（项目名称别忘改！！！）

> 四、 返回cnb继续操作其它操作，不用管EO部署

- 建立一个 envs.yml 文件
```yml
EDGEONE_API_TOKEN: 填写自己在EO的创建的API TOKEN
```
- 在建立一个 .cnb.yml 文件
```yml
# 触发器：推送到主分支
main:
  push:
      # 从私有仓库导入环境变量：
      # 参考：https://docs.cnb.cool/en/build/env.html#importing-environment-variables  
      - imports: {这里填之前创建的 envs.yml Raw的地址}
      stages:
        # 构建当前项目
        - name: Build Current Project
          image: node:20
          script: node -v && npm install && npm run build  
        # 将构建输出部署到 EdgeOne Pages
        # ./dist 目录由前一步构建步骤生成
        # 参考：https://www.npmjs.com/package/edgeone  
        - name: Deploy to EdgeOne Pages
          image: node:20
          script: npx edgeone pages deploy ./dist/ -n {这里填你的仓库名} -t $EDGEONE_API_TOKEN
```
:::
题外话：自定义域名如果是托管在CF的话是要关闭小黄云的，不然无法解析。
:::
