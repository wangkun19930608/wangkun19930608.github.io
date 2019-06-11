---
layout: default
title: java软件托盘显示中文出现框框乱码
category: [Technology, Bug]
comments: true
---


# 文章背景
测试代码时候突然发现代码运行时候的托盘菜单的名字显示异常，查询了下资料发现是运行参数的缘故。








# 目录

[TOC]









# 问题的代码

系统是win10，x64版本，jdk1.6 x64，测试的是myeclipse。

```
		PopupMenu popupMenu = new PopupMenu();// 弹出菜单
		MenuItem mi = new MenuItem("弹出");
		MenuItem exit = new MenuItem("关闭");
		popupMenu.add(mi);
		popupMenu.add(exit);
```

代码是没有问题的，断点调试这儿也看不出来。查询资料之后才发现是运行参数的问题。

# 解决办法

修改 myeclipse 的编译环境，选中工程，Run as----Run Configuration，将java的运行参数VM arguements 更正为`-Dfile.encoding=GB18030.`

# 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/bug/2018/10/18/java-menuitem/ )

## 参考文章

[java软件托盘MenuItem](https://blog.csdn.net/lishaman/article/details/17751727)

## 版本记录

20181018 完成文章


