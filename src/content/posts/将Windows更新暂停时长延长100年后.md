---
title: 将Windows更新暂停时长延长到100年后
published: 2025-3-17
description: 通过修改注册表来延长系统更新时长.
image: 
tags: [Windows更新, 教程]
category: 教程
draft: false
---

废话不多说，直接上教程。

WIN+R 输入 regedit 进入注册表编辑器。

按照以下顺序依次点击:
HKEY_LOCAL_MACHINE => SOFTWARE => Microsoft => WindowsUpdate => UX => Settings 

右击右边空白处

新建一个 DWORD值

重命名为: FlightSettingsMaxPauseDays

双击 FlightSettingsMaxPauseDays ，基数选择十进制。

左侧填写为你想暂停的整数天数，例如36500天，点确定。

然后 WIN+i 打开系统设置，在Windows更新里就可以选择设置好的暂停的最大天数了。

