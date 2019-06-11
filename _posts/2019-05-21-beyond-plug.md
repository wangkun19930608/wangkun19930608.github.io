---
layout: default
title: 在myeclipse安装beyond插件
category: [Technology, Software]
comments: true
---


# 文章背景
myeclipse自带的比较工具感觉是有一些看不清晰，也不是太方便处理，然后就找了个比较插件了。









# 目录

[TOC]









# 环境介绍

myeclipse Version: 2017 CI 7

Beyond Compare 4 X64  4.1.2.20720

系统 Windows10 x64 


# 安装步骤

这里采用的是直接通过网址安装的方式，通过软件安装，可以参考文末链接1.

首先找到插件所在的地址：

[http://beyondcvs.sourceforge.net](http://beyondcvs.sourceforge.net)


通过地址可以看到一个链接Update Site：

[http://beyondcvs.sourceforge.net/update/0.8.x/](http://beyondcvs.sourceforge.net/update/0.8.x/)

复制刚刚的那个Update Site之后，打开myeclisep 的 help -> install from site 

![](https://img2018.cnblogs.com/blog/652638/201905/652638-20190521161140746-1452654037.png)

打开之后粘贴刚刚的网址，然后一路确定即可。

![](https://img2018.cnblogs.com/blog/652638/201905/652638-20190521161322674-1856104214.jpg)


最后安装完以后 , 选择本地的 Beyond Compare 程序目录 , 依次点击 : Window -> Preferences , 在左侧的 External Tools 里面选择 Beyond Compare , 在右侧的 Path To Beyond Compare 里面选择本地安装的 Beyond Compare 程序目录 即可。


# 说明


[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/software/2019/05/21/beyond-plug/ )

## 参考文章

[Eclipse中使用BeyondCompare插件](https://blog.csdn.net/tojohnonly/article/details/79150937)

[Beyond CVS Eclipse Plug-In](http://beyondcvs.sourceforge.net/)

[MyEclipse官方中文网](https://www.myeclipsecn.com/)

[Beyond Compare 4中文版](http://www.beyondcompare.cc/)




## 版本记录

20190520 测试完成（可怜的520在加班）

20190521 完成文章



