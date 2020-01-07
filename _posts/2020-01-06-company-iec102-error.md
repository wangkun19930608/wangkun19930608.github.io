---
layout: default
title: IEC102JAVA程序出现两个界面
category: [Technology , JAVA]
comments: true
---

## 文章介绍
同事LC在现场测试程序时候，不知道怎么的跑出了两个界面，其中一个还是乱码，不过好在最后解决了。






# 目录

[TOC]








## 问题分析

刚刚问我时候，发的两个截图，以为是两个程序，然后其中一个乱码，以为是编码格式的问题，如果操作系统不好自动识别的话，可能需要手动设置一下了。

于是找了一篇文章发送给他，让他自行解决。

[执行jar包输出中文乱码的解决方法_whorus1的专栏-CSDN博客](https://blog.csdn.net/whorus1/article/details/51518139 )


但是他说还是不能解决，之后详细询问异常的状况，才明白是出现了两个界面。并且其中一个有日志，一个是没有的。

造成这个的原因是因为程序使用了独立模块，并且日志输出时候，输出到了错误的位置导致的，解决的办法的话，就是在配置界面显示的位置调整一下就好。

配置需要根据实际的情况去配置，目前的IEC102的log4j的配置如下，后续有更改以最新的为标准！

```
#OFF 、 FATAL 、 ERROR 、 WARN 、 INFO 、 DEBUG 、 ALL
log4j.rootLogger=ALL,stdout,R,UiTable
#,CHAINSAW_CLIENT
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout

# Pattern to output the caller's file name and line number.#
log4j.appender.stdout.layout.ConversionPattern=%5p [%d{HH:mm:ss:SSS}] [%t] (%F\:%L)%n           -%m%n


log4j.appender.R=org.apache.log4j.RollingFileAppender 
log4j.appender.R.File=ultrafore.log
log4j.appender.R.MaxFileSize=10MB 

# Keep one backup file
log4j.appender.R.MaxBackupIndex=1000
log4j.appender.R.layout=org.apache.log4j.PatternLayout
#log4j.appender.R.layout.ConversionPattern=%5p [%t] (%F\:%L) %r - %m%n
log4j.appender.R.layout.ConversionPattern=%5p [%d{yyyy-MM-dd HH:mm:ss:SSS}] [%t] (%F\:%L)%n           -%m%n

#log4j.appender.CHAINSAW_CLIENT=org.apache.log4j.net.SocketAppender
#log4j.appender.CHAINSAW_CLIENT.RemoteHost=localhost
#log4j.appender.CHAINSAW_CLIENT.Port=4445
#log4j.appender.CHAINSAW_CLIENT.LocationInfo=true

log4j.appender.UiTable = sznari.iec.UI.UiLogAppender
```





## 问题解决

按照分析过程给出的配置文件的最后一行，对应修改程序的日志配置文件即可！重点关注`log4j.appender.UiTable = sznari.iec.UI.UiLogAppender`





## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/java/2020/01/06/company-iec102-error/ )


### 参考博客

[执行jar包输出中文乱码的解决方法_whorus1的专栏-CSDN博客](https://blog.csdn.net/whorus1/article/details/51518139 )

### 版本记录
20200107 解决问题完成文章
