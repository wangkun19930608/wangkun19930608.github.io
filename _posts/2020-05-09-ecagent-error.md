---
layout: default
title: 大量ECAgent报错
category: [Technology, Software]
comments: true
---

# 文章背景
电脑的突然变卡，检查任务管理器发现了大量的ECAgent的进程，而且不断的产生中，很是苦恼！










# 目录

[TOC]









# 环境介绍

出现异常的状况是Win10 x64的系统，基本软件正常运行。

# 解决过程

通过搜索以及分析进程的名字，发现对应的程序是ECAgent.exe ，描述如下：
```
名称	PID	状态	用户名	CPU	内存(专用工作集)	描述
ECAgent.exe	286740	正在运行	nari	00 	3,992 K	Agent for EasyConnect
```

彻底解决的办法是卸载 EasyConnect 。

不过因为一些原因，必须要使用 EasyConnect 所以不能卸载，只能够先将就一下，不过，大量的这个进程，处理的话，得花费不少的时间，于是写了一个脚本，一下子干掉所有的进程(保存文本另存为bat或者cmd即可)：
```
taskkill -IM ECAgent.exe -f 
```


解决之后，通过文件的路径下面的名称，发现了另外的程序
```
名称	PID	状态	用户名	CPU	内存(专用工作集)	描述
SangforPromoteService.exe	206316	正在运行	SYSTEM	00 	2,632 K	Promote Service
```

以及对应的服务名：
```
名称	PID	描述	状态	组
SangforSP		SangforSP	已停止	
```

尝试通过结束以及禁用上面的两个进程或者服务，可以防止出现大量的这个 ECAgent.exe 进程。

# 说明

这个应该是深信服 easyconnection 的一个bug，希望什么时候可以解决这个bug吧。

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/software/2019/05/24/ecagent-error/ )

## 参考文章

无




## 版本记录

202005094 完成文章



