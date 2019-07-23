---
layout: default
title: 风速信息获取
category: [Technology , SQL]
comments: true
---

## 文章介绍
现场一个场站需要一个风速的信息，比较急，说是直接sql语句能够得到也行，后面的话，时间充裕可以通过web界面方便的获取。最近事情有些多，博客都堵在一块了，而且还没时间发布。






# 目录

[TOC]








## 需要描述 

![](https://ask.qcloudimg.com/draft/1178990/94qp0sffi8.jpg)

现场需要统计一个新的值，输出10米层月平均风速，月最大风速，月极大风速，月平均气温。

sql语句并不难，主要是理解一下如何进行计算，基本上，数据库存储的是每15min的一个值。

平均风速和平均温度，基本可以通过avg函数实现。

最大风速和极大风速的话，通过max函数可以实现。


## 问题解决

综合前面的，基本最后的语句如下了：
```
select avg(V1AVGSP),max(V1MAXSP),max(V1SP),avg(V1TEMP) from FD_RUN_RTTOWER where TOWERID = 57032999 and time >= TO_DATE('2013-05-01', 'yy-MM-dd') and time < TO_DATE('2013-06-01', 'yy-MM-dd')
```

添加一下字段说明之后如下：
```
select avg(V1AVGSP) "10米层月平均风速",max(V1MAXSP) "10米层月最大风速",max(V1SP) "10米层月极大风速",avg(V1TEMP) "10米层月平均风速" from FD_RUN_RTTOWER where TOWERID = 57032999 and time >= TO_DATE('2013-05-01', 'yy-MM-dd') and time < TO_DATE('2013-06-01', 'yy-MM-dd')
```

结构稍微优化之后如下：
```
SELECT
	AVG (V1AVGSP) "10米层月平均风速",
	MAX (V1MAXSP) "10米层月最大风速",
	MAX (V1SP) "10米层月极大风速",
	AVG (V1TEMP) "10米层月平均风速"
FROM
	FD_RUN_RTTOWER
WHERE
	TOWERID = 57032999
AND TIME >= TO_DATE ('2013-05-01', 'yy-MM-dd')
AND TIME < TO_DATE ('2013-06-01', 'yy-MM-dd')
```

只是考虑到功能的实现，并没有测试性能如何，基本上几个`where`的顺序变化，对于小库查询的变化不大。


## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/sql/2019/07/23/company-wind-info/ )


### 参考博客

无

### 版本记录
20190722 问题解决

20190723 完成文章
