---
layout: default
title: 公司笔记Oracle出错
category: [技术, Bug]
comments: true
---

## 文章介绍
今天同事现场出现问题,数据插入时候报错,导致一部分文本不能正常生成.




## 问题详情

```c
ERROR [2018-05-01 00:04:47:329] [统计线程] (PowerDataStatisticsDbOperation.java:882)
           -java.sql.SQLException: ORA-01438: 值大于为此列指定的允许精度

java.sql.SQLException: ORA-01438: 值大于为此列指定的允许精度

	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:112)
	at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:331)
	at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:288)
	at oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:743)
	at oracle.jdbc.driver.T4CPreparedStatement.doOall8(T4CPreparedStatement.java:213)
	at oracle.jdbc.driver.T4CPreparedStatement.executeForRows(T4CPreparedStatement.java:952)
	at oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1160)
	at oracle.jdbc.driver.OraclePreparedStatement.executeInternal(OraclePreparedStatement.java:3285)
	at oracle.jdbc.driver.OraclePreparedStatement.execute(OraclePreparedStatement.java:3390)
	at statistics.PowerDataStatisticsDbOperation.insertAllPowerStat(PowerDataStatisticsDbOperation.java:877)
	at statistics.PowerDataStatistics.generatePowerDataOper(PowerDataStatistics.java:72)
	at statistics.StatisticsTask.generatePowerCalculation(StatisticsTask.java:830)
	at statistics.StatisticsTask.statistics(StatisticsTask.java:168)
	at statistics.StatisticsThread.run(StatisticsThread.java:35)

```


## 解决思路

看到这个提示信息,懂的人一眼看出数据库的数据需要扩大,不懂的人也应该可以看出数据出错的位置在PowerDataStatisticsDbOperation.insertAllPowerStat这个函数.需要检查一下数据是否正常.如果有明显的计算错误就需要直接改正了.

## 解决办法

解决办法有两个,最简单的解决办法是直接扩大数据库里面的字段类型,通过查看数据库,知道出错的数据类型是number(8,4),这个基本是没有问题的,但是因为计算出现问题,临时解决问题可以直接扩大数据类型为number(20,4)了.

但是这个方法没有彻底解决问题,通过代码的层层逻辑调试,我们可以发现,是因为数据输入时候,数据的倍率调错,0.5变成了500,造成了这样子的错误,因此在接入数据之后更改一下倍率,这个问题就暂时完美解决了.

## number用法补充

### Number的数据声明如下：
Number(p, s)        声明一个定点数        p(precision)为精度，s(scale)表示小数点右边的数字个数，精度最大值为38，
Number(p)        声明一个整数        相当于Number(p, 0)
Number        声明一个浮点数        其精度为38，要注意的是scale的值没有应用，也就是说scale的指不能简单的理解为0，或者其他的数。

### 定点数的精度(p)和刻度(s)遵循以下规则：
?        当一个数的整数部分的长度 > p-s 时，Oracle就会报错
?        当一个数的小数部分的长度 > s 时，Oracle就会舍入。
?        当s(scale)为负数时，Oracle就对小数点左边的s个数字进行舍入。
?        当s > p 时, p表示小数点后第s位向左最多可以有多少位数字，如果大于p则Oracle报错，小数点后s位向右的数字被舍入


所以，当录入的数据出现其中某一种情况，就有可能报错！如100.003入到Number(6,4)的列中，就会报错,因为100为三位数，3>6-4

ORA-01438: 值大于为此列指定的允许精度

查看时是数据类型的长度问题。 
比如定义为number(4,2)，却要插入一个值200.12的话，就会出错。 
原因是number（p,s）的问题。 
 
number（p,s），其中p表示该number的总长度，s为小数位。 
如果s为负数，则会取相应位数的取整。 
 
例如，如果number（4,-3），则数字1234的存储值为1000；
如果number（4,-2），则数字1234的存储值为1200。 
 
在对数据库表中的字段设定类型时，要注意： 
NUMBER(10,6)  Double   带有小数 
NUMBER(4)     Long     为整数




## 说明


[欢迎评论，欢迎指正,转载也请注明出处.]()

### 参考博客
[ORA-01438: 值大于为此列指定的允许精度 - CSDN博客](https://blog.csdn.net/hellolib/article/details/8729725)

### 版本记录

20180521 完成文章