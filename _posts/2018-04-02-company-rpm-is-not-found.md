---
layout: default
title: rpm bug
category: [Technology, Bug]
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


# 说明

写这篇文章是作为使用linux的笔记.我的是rpm不能安装,参考的博客是ssh不能安装,类似的问题应该解决方案类似了

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/bug/2018/04/02/company-rpm-is-not-found/)

## 参考文章

[ubuntu进行apt-get时候出现Package ssh is not available, but is referred to by another package](https://www.cnblogs.com/cyttina/archive/2013/01/29/2882111.html)




## 版本记录

20180402 完成文章

20190528 修改文章格式