---
layout: default
title: 公司笔记UI添加
category: [技术, JAVA]
comments: true
---


# 104规约添加界面显示
本来项目说的是为了防止在Linux界面里面防止阻塞,没有设置界面,在log里面显示相关的信息的,现在为了方便windows,还是先把这个功能实现,不需要时候直接删除就行.










# 目录

[TOC]



# 如何实现
添加一个界面不难,毕竟系统已经有了成熟的方案,直接把代码CV过来之后,修改一下名称和配置,基本上就完了.

## 第一步
把之前写好的dznari.iec.UI的包和sznari.iec.image的包直接拷贝到新的目录.

这一步是是把界面复制到新的项目里面去了,因为只是需要显示日志,和之前的功能基本不变,所以直接拷贝就行.

## 第二步
添加了界面之后,现在直接运行,你会发现并没有界面,因为界面这个类并没有运行.直接在主函数里面添加如下代码即可.

```java
mainWnd = new MainWnd();
```

当然,为了防止重复运行,添加一个锁判断也是需要的,代码如下:
```java
public static boolean isLocked() {

		String strFilePathName = "C:\\.IEC104.bin";

		String strOs = System.getProperty("os.name").toLowerCase();

		if (!strOs.contains("win")) {
			win = false;
			strFilePathName = "/tmp/IEC104.bin";
		}

		try {

			File flagFile = new File(strFilePathName);

			if (!flagFile.exists())

				flagFile.createNewFile();

			lock = new FileOutputStream(strFilePathName).getChannel().tryLock();

			if (lock == null) {
				JOptionPane.showMessageDialog(null, "ICE102程序已经启动。", "ICE102程序",
						JOptionPane.ERROR_MESSAGE);

				return true;
			}

		} catch (Exception ex) {

			LOG.log.error(ex);
		}

		return false;
	}
```

完成之后基本是没有多少问题了,有问题只是锁和界面的一些对应的全局变量的一些问题,直接添加即可.对应的如下三个部分需要添加:
```java
	static public boolean win = true;
	
	static private FileLock lock = null;
	
	static MainWnd mainWnd = null;
```

## 第三步修改配置文件
有了界面之后,运行发现效果并不怎么样,因为所有的日志输出并没有添加到里面去,那个因为log4g的配置文件还没有修改,直接对照如下修改即可:
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


## 细节优化
第三步修改完成,基本上就完成了,只是一些部分的名词,需要修改成对应的系统,这里就不一一列举了,仔细找找即可.完成这一步就全部完成了.


# 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/%E6%8A%80%E6%9C%AF/%E7%B3%BB%E7%BB%9F/2018/07/05/YUMI/)

## 版本记录
20180714 完成项目代码

20180716 完成文章
