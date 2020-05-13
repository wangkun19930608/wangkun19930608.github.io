---
layout: default
title: C盘占用过满问题
category: [Technology, Software]
comments: true
---

# 文章背景
最近C盘文件因为软件安装太多，导致太满了，想把软件转移出来，又怕路径改变导致软件出错，所幸有完美解决方案。










# 目录

[TOC]









# 环境介绍

系统时 win10 x64 的c盘时固态硬盘，d盘时机械硬盘，但是很多临时数据以及一些必须要的软件会自动存储到c盘，因此空间不足了。

# 解决过程

解决方法很简单，使用windows系统自带的工具即可实现！

比方说你需要将c盘的360软件转移到d盘，对应的路径是：C:\Program Files\HP


那么，你直接关闭360软件之后，把文件夹剪切到d盘你需要的目录，比方说 d:\Program Files\360

剪贴完毕之后，就是最后也是最重要的关键操作，打开命令行，输入如下命令即可，命令需要根据你的实际路径去做调整：
```
mklink /j  "C:\Program Files\HP" "D:\Program Files\HP"
```

这样子系统可以直接访问c盘的360，然而实际上却是访问的d盘的360.



# 说明

另外，如果不知道哪些文件占用空间比较大，可以使用 [SpaceSniffer](http://www.uderzo.it/ ) ，这个软件不错的，有更好的软件或者操作方法欢迎点评！

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/software/2020/05/13/mklink-spacesniffer/ )
## 参考文章

[Windows 7 mklink命令详解](https://www.cnblogs.com/youxin/p/3588722.html )

[SpaceSniffer官网](http://www.uderzo.it/ )


## 版本记录

20200513 完成文章



