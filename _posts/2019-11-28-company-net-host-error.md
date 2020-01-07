---
layout: default
title: 现场host异常unknown hostexception
category: [Technology , JAVA]
comments: true
---

## 文章介绍
工程同事CJW反馈现场程序使用时候出现异常，报错unknown hostexception 






# 目录

[TOC]








## 问题分析

分析大致有三种可能，一种是java 版本的问题，一种是hosts的问题，还有一种在windos10出现了，但是没有解决，报错是一样的。

报错的具体信息如下：
```
java.net.UnknownHostException: NSF2100
```


分析版本号之后 确定现场是jdk6 ，排除jdk8的 network 的问题，在jdk8的环境下，有些时候不可以使用127.0.0.1的地址。

应该是后面两种状况了，

正好添加对应的hosts之后解决。添加host的话，操作不多说，都是添加对应的名称如
```
127.0.0.1 NSF2100
```

其中，linux通常是在`/etc/hosts` ，Windows 一般是在 `“C:\Windows\System32\drivers\etc` ，具体操作如果不会刻意参考文章末尾连接。


第三种暂未解决，可能是winddows10的特殊机制导致的吧，暂时无法解决！



## 问题解决

直接参考前面三种情况解决即可，此次出现的问题是第二种状况！




## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/java/2019/11/28/company-net-host-error/ )


### 参考博客

[Linux 修改 etc/hosts文件详细介绍](https://blog.csdn.net/aempty/article/details/79593625 )


[修改Windows/Linux系统hosts文件 ](https://www.cmsky.com/linux-hosts/ )

### 版本记录
20200107 解决问题完成文章
