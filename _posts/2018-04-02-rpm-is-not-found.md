---
layout: default
title: 2018年全球网络安全热词排行榜
category: [技术, 安全]
comments: true
---

## rpm无法安装
今天安装java时候,下载的rpm的包,但是用linux打开时候发现不能正常打开.



## 错误详情
主要是rpm安装时候的错误,java提示的错误就没有记录了.


```
Reading package lists... Done

Building dependency tree... Done

Package rpm is not available, but is referred to by another package.

This may mean that the package is missing, has been obsoleted, or

is only available from another source
```


## 解决方案

这个问题的原因是ubuntu的/etc/apt/source.list中的源比较旧了，需要更新一下，更新方法：

$ sudo apt-get -y update

更新完毕之后，在使用apt-get就没有问题了。


## 说明
写这篇文章是作为使用linux的笔记.我的是rpm不能安装,参考的博客是ssh不能安装,类似的问题应该解决方案类似了.

参考文章 
ubuntu进行apt-get时候出现Package ssh is not available, but is referred to by another package 错误 - 三更_雨 - 博客园
https://www.cnblogs.com/cyttina/archive/2013/01/29/2882111.html
