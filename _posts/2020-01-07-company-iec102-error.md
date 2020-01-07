---
layout: default
title: IEC102规约确认帧重复
category: [Technology , JAVA]
comments: true
---

## 文章介绍
调试IEC102规约时候，测试断点，发现文件发送成功之后，会发过来两个一样的重复包。及时是很快点击跳过，也是不行的。






# 目录

[TOC]








## 问题分析

单步调试很多次，但是每次还是出现重复的报文，不知道问题出在哪里。
异常接收报文：
```
DEBUG [12:31:55:724] [Thread-10] (IEC102Socket.java:393)
           -收到的报文16进制为: 68 0D 00 68 53 FF FF 96 01 0A FF FF 00 4E 1D 00 00 5B 16 
 INFO [12:31:57:799] [Thread-10] (IEC102Socket.java:618)
           -文件传输成功 [d:\DiaoduUpLoad_DQ\XHFDC_DQ_20191213.WPD] 
DEBUG [12:31:57:800] [Thread-10] (FileUploadTaskMng.java:291)
           -d:\DiaoduUpLoad_DQ\XHFDC_DQ_20191213.WPD 文件从上传队列删除
DEBUG [12:31:57:800] [Thread-10] (FileUploadTaskMng.java:149)
           -d:\DiaoduUpLoad_DQ\XHFDC_DQ_20191213.WPD 添加至已经完成队列!
DEBUG [12:31:57:805] [Thread-10] (FileUploadTaskMng.java:201)
           -d:\DiaoduUpLoad_DQ\XHFDC_DQ_20191213.WPD have dealt,needn't to add to upload task!
DEBUG [12:31:57:805] [Thread-10] (IEC102Socket.java:936)
           -发送的数据为:TX_ 19 68 0D 00 68 28 FF FF 96 01 0B FF FF 00 4E 1D 00 00 31 16 
DEBUG [12:31:57:806] [Thread-10] (IEC102Socket.java:393)
           -收到的报文16进制为: 68 0D 00 68 53 FF FF 96 01 0A FF FF 00 4E 1D 00 00 5B 16 
```


两端正常确认报文：
```
DEBUG [2019-12-26 17:07:33:451] [Thread-7] (IEC102Socket.java:288)
           -收到的报文16进制为: 68 0D 00 68 53 FF FF 96 01 0A FF FF 00 BA 02 00 00 AC 16 
		   
DEBUG [2019-12-26 17:07:33:453] [Thread-7] (IEC102Socket.java:831)
           -发送的数据为:TX_ 19 68 0D 00 68 28 FF FF 96 01 0B FF FF 00 BA 02 00 00 82 16 
		   
DEBUG [2019-12-26 17:07:35:575] [Thread-7] (IEC102Socket.java:288)
           -收到的报文16进制为: 10 7A FF FF 78 16 
		   
		   
		   
DEBUG [2019-12-26 17:22:34:239] [Thread-7] (IEC102Socket.java:288)
           -收到的报文16进制为: 68 0D 00 68 53 FF FF 96 01 0A FF FF 00 BA 02 00 00 AC 16
		   
DEBUG [2019-12-26 17:22:34:241] [Thread-7] (IEC102Socket.java:831)
           -发送的数据为:TX_ 19 68 0D 00 68 28 FF FF 96 01 0B FF FF 00 BA 02 00 00 82 16 
		   
DEBUG [2019-12-26 17:22:36:366] [Thread-7] (IEC102Socket.java:288)
           -收到的报文16进制为: 10 7A FF FF 78 16 
		   
```

断点调试时候，不论如何满，只要一断点，tcp就会自动发送包，导致有重复的报文。



## 问题解决

猜测是否是tcp底层的重传导致的，结果直接取消断点调试，直接运行，是成功的！




## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/java/2020/01/07/company-iec102-error/ )


### 参考博客

无

### 版本记录
20200107 解决问题完成文章
