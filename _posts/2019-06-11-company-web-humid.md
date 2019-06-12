---
layout: default
title: 现场软件湿度值过大问题
category: [Technology , Web]
comments: true
---

## 问题介绍

这个之前已经处理过不止一次，但是由于现场软件配置的问题，可以调整倍率，因此会导致不通的倍数。






# 目录

[TOC]









## 问题详情 

现场软件linux版本。WindForecast1.42版本的，其他版本应该也是有类似的配置问题，根据实际情况进行调整即可。

具体的就是在湿度那一列的数据为9900，值太大，希望改小一点。





## 问题解决
通过现场图片可以定位到到如下位置：
```
/WindForecast/WeatherStation/StationRTLists.js
```
然后看到有如下一段，大概在40-50行左右：
```
 function humRender(value) {
 	if(value == -99.0 || value== -99){
 		return '-';
 	}
 	return (value*100).toFixed(2);
 }
```

找到这个对应的js文件，直接用编辑器打开，然后调小的话根据需要进行配置。不要用记事本直接打开，记事本打开的话，行不会自动区分，推荐notepad++。

如果调整现场接入数据，这里可以不用更改。

如果不调整接入数据的倍率，这里可以修改为对应的值，如把9900变为99，则把*100去掉即可。

更改完毕重启tomcat即可，注意刷新页面之后检查数据，避免缓存影响数据。

## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/web/2019/06/11/company-web-humid/ )

### 参考博客

无

### 版本记录
20180000 解决问题

20190611 完成文章
