---
layout: default
title: 只有短期界面加载异常
category: [Technology , JAVA]
comments: true
---

## 文章介绍
CJW反馈JS现场出现一个短期界面加载异常，其他界面都很正常的一个状况，进行了一个分析，






# 目录

[TOC]








## 问题分析

查看配置无异常。

执行语句查看数据库正常,有正常的数据返回:
```
 select load as sp, to_char(ybtime, 'yyyy-mm-dd hh24-mi-ss') as timekey from fd_plan_load where (((ybtime > to_date('2019-08-15 00-00-00', 'yyyy-mm-dd hh24-mi-ss') and ybtime <= to_date('2019-08-18 00-00-00', 'yyyy-mm-dd hh24-mi-ss')) and engineid = 58230000) and type = 106) and to_char(fbtime,'hh24')='20' order by ybtime, fbtime
```

查看console 发现异常,报错提示的是一个空指针，有附件的可以查看对应日期的附件图片 短期数据的console.jpg 

获取数据出现异常，更新一下对应的js完成功能。 

```
//ShortPlanForecast.js
//修改的位置为：
if(responseObject.correctionPower[i]!=-99){
	shortTermPowerManualTotal+=responseObject.correctionPower[i];
	dayCheckTotal[i/96]+=responseObject.responseObject[i];
}
							
//改为
if(responseObject.correctionPower[i]!=-99){
	shortTermPowerManualTotal+=responseObject.correctionPower[i];
	dayCheckTotal[i/96]+=responseObject.correctionPower[i];
}
```


## 问题解决

手动解决的话，则按照上图的进行修改即可，不会修改的话，直接找到附件或者联系开发人员获取最新版本的进行替换即可。




## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/java/2019/08/14/company-short-load-error/ )


### 参考博客

无

### 版本记录
20190814 问题出现并解决

20190916 完成文章
