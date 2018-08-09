---
layout: default
title: SvnUpdateBug
category: [Technology , Bug]
comments: true
---

## 问题介绍
在填写工作日报时候更新时候出现的一个错误.







## 问题详情 
在文件通过svn的commit上传之后,上级目录下update是没有问题,但是再上一级时候,就会出现如下错误:
```
Command: Update
Updating: path\to\working\copy
Skipped obstructing working copy: path\to\working\copy\project
```

## 问题解决
出现问题之后,首先是通过clean解决,但是没有成功,
最后通过查询问题找到解决方案,把多余的项目移走之后,再次update即可.

出现这个的原因主要svn要创建一个目录时候,已经存在一个同名并且文件已经存在的目录了.

## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/Technology/bug/2018/08/09/company-bug-svnupdatebug/)

### 参考博客

[Skipped obstructing working copy](https://blog.csdn.net/liuwei063608/article/details/24361097)

### 版本记录

20180809 完成文章
