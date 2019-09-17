---
layout: default
title: 节假日功能填报异常
category: [Technology , JAVA]
comments: true
---

## 文章介绍
CJW反馈JS现场出现了一个节假日功能填报异常的状况,填写之后无反应，不生效，刷新就没了。






# 目录

[TOC]








## 问题分析
通过层层溯源，发现最终的问题是因为holiday的主键和其他的有区别，因而顺序有些变动，导致备注和长度的先后顺序不对，最后调整为正常的顺序即可。

分析查询的主要错误在这里：
```
	String strSql = "INSERT INTO " + DBconnectionFactory.getInstance().getSchema() + "FD_DEF_HOLIDAY  VALUES('" + name + "',TO_DATE('" + date + "', 'yyyy-mm-dd')," + length + "," + more + ")";
```

能够找出哪里不合适吗？



## 问题解决

手动解决的话，基本填写的话，把时间长度和备注设置成一样即可。

最好的解决方式的话自然是更新到最新版本。

报错的根本原因是备注字段不一定是数字的，因此需要加一个引号去解决。




## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/java/2019/08/14/company-holiday-error/ )


### 参考博客

无

### 版本记录
20190814 问题出现并解决

20190916 完成文章
