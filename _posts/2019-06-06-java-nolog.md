---
layout: default
title: java web 在tomcat没有正常日志输出
category: [Technology, Bug]
comments: true
---


# 文章背景
调试程序时候突然发现一些位置设置的日志输出没有了，最后总算是解决了！







# 目录

[TOC]









# 问题介绍

本地运行时候的环境如下：

windows10中文，tomcat9，java1.8，java web程序

程序里面之前都是`System.out.println();`形式的日志，为了方便定位，就采用log4j改写了一些。

因为工作量比较多，就没有全部改写，但是后来发现改写的位置并没有找到日志输出。

以为是配置文件内容问题，但是对照之后发现用网上正常的依旧无法解决。

配置文件最近本的console输出配置如下：

```
log4j.rootLogger=ALL,console

log4j.appender.console = org.apache.log4j.ConsoleAppender
log4j.appender.console.Target = System.out
log4j.appender.console.layout = org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern = %d %p [%c] - %m%n
```



日志有了是好，不错，为了方便定位，ConversionPattern 得修改一下：
```
log4j.appender.console.layout.ConversionPattern  = %5p [%d{HH\:mm\:ss\:SSS}] [%t] (%F\:%L)%n           -%m%n
```



# 问题解决

偶尔尝试一下，把之前的log4j.cfg改名成为log4j.properties，然后发现竟然成功了，也不知道具体回事，回头有时间再研究研究了。

至少前者在一般程序里面是可以正常识别的。所以并没有关注它的格式，不过好在总算是解决了。

至于其他的日志输出，根据需要添加即可了。


# 说明


[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/bug/2019/06/06/java-nolog/ )

## 参考文章

使用log4j接管tomcat日志catalina.out - 梦想起飞的地方......... - CSDN博客
<https://blog.csdn.net/yucaifu1989/article/details/78673132>

Tomcat日志、项目中的log4j日志、控制台——我的日志最后到底跑哪去了？ - 小野爸爸的博客 - CSDN博客
<https://blog.csdn.net/lihongjing/article/details/79358498>


## 版本记录

20190605 解决问题

20190605 完成文章

20190705 更新ConversionPattern


