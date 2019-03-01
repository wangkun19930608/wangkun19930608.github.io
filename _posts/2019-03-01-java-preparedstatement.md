---
layout: default
title: PreparedStatementSQLException
category: [Technology, Bug]
comments: true
---


# 文章背景
在写一些入库操作时候，想动态的设置一些表的名字，有几种想法，除了通过解析本地xml，想尝试通过参数直接传入，但是出现了报错。





# 目录

[TOC]









# 问题分析

错误的详情如下：
```
2019-03-01 16:45:39,387 INFO [cn.naritech.im.DataServices]:32 - user pass 78125000 15min ForecastResultParameters [dataType=ActivePowerProduction, optional1=o1, optional2=o2]
java.sql.SQLException: 无效的列索引
	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:112)
	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:146)
	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:208)
	at oracle.jdbc.driver.OraclePreparedStatement.setStringInternal(OraclePreparedStatement.java:5265)
	at oracle.jdbc.driver.OraclePreparedStatement.setString(OraclePreparedStatement.java:5257)
	at com.narisq.ewis.dao.DataServiceDAO.getActivePowerProduction(DataServiceDAO.java:74)
	at cn.naritech.im.DataServices.GetPlantForecastData(DataServices.java:61)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:483)
	at org.apache.axis2.rpc.receivers.RPCUtil.invokeServiceClass(RPCUtil.java:194)
	at org.apache.axis2.rpc.receivers.RPCMessageReceiver.invokeBusinessLogic(RPCMessageReceiver.java:98)
	at org.apache.axis2.receivers.AbstractInOutMessageReceiver.invokeBusinessLogic(AbstractInOutMessageReceiver.java:40)
	at org.apache.axis2.receivers.AbstractMessageReceiver.receive(AbstractMessageReceiver.java:96)
	at org.apache.axis2.engine.AxisEngine.receive(AxisEngine.java:145)
	at org.apache.axis2.transport.http.HTTPTransportUtils.processHTTPPostRequest(HTTPTransportUtils.java:275)
	at org.apache.axis2.transport.http.AxisServlet.doPost(AxisServlet.java:120)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:637)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:717)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:290)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)
	at com.narisq.ewis.xss.XssFilter.doFilter(XssFilter.java:24)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:235)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)
	at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:233)
	at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:191)
	at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:128)
	at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:102)
	at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:109)
	at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:286)
	at org.apache.coyote.http11.Http11Processor.process(Http11Processor.java:845)
	at org.apache.coyote.http11.Http11Protocol$Http11ConnectionHandler.process(Http11Protocol.java:583)
	at org.apache.tomcat.util.net.JIoEndpoint$Worker.run(JIoEndpoint.java:447)
	at java.lang.Thread.run(Thread.java:745)

2019-03-01 16:50:35,912 INFO [cn.naritech.im.DataServices]:32 - user pass 78125000 15min ForecastResultParameters [dataType=ActivePowerProduction, optional1=o1, optional2=o2]
java.sql.SQLException: ORA-00903: 表名无效

	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:112)
	at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:331)
	at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:288)
	at oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:743)
	at oracle.jdbc.driver.T4CPreparedStatement.doOall8(T4CPreparedStatement.java:213)
	at oracle.jdbc.driver.T4CPreparedStatement.executeForDescribe(T4CPreparedStatement.java:796)
	at oracle.jdbc.driver.OracleStatement.executeMaybeDescribe(OracleStatement.java:1031)
	at oracle.jdbc.driver.T4CPreparedStatement.executeMaybeDescribe(T4CPreparedStatement.java:836)
	at oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1124)
	at oracle.jdbc.driver.OraclePreparedStatement.executeInternal(OraclePreparedStatement.java:3285)
	at oracle.jdbc.driver.OraclePreparedStatement.executeQuery(OraclePreparedStatement.java:3329)
	at com.narisq.ewis.dao.DataServiceDAO.getActivePowerProduction(DataServiceDAO.java:75)
	at cn.naritech.im.DataServices.GetPlantForecastData(DataServices.java:61)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:483)
	at org.apache.axis2.rpc.receivers.RPCUtil.invokeServiceClass(RPCUtil.java:194)
	at org.apache.axis2.rpc.receivers.RPCMessageReceiver.invokeBusinessLogic(RPCMessageReceiver.java:98)
	at org.apache.axis2.receivers.AbstractInOutMessageReceiver.invokeBusinessLogic(AbstractInOutMessageReceiver.java:40)
	at org.apache.axis2.receivers.AbstractMessageReceiver.receive(AbstractMessageReceiver.java:96)
	at org.apache.axis2.engine.AxisEngine.receive(AxisEngine.java:145)
	at org.apache.axis2.transport.http.HTTPTransportUtils.processHTTPPostRequest(HTTPTransportUtils.java:275)
	at org.apache.axis2.transport.http.AxisServlet.doPost(AxisServlet.java:120)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:637)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:717)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:290)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)
	at com.narisq.ewis.xss.XssFilter.doFilter(XssFilter.java:24)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:235)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)
	at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:233)
	at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:191)
	at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:128)
	at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:102)
	at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:109)
	at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:286)
	at org.apache.coyote.http11.Http11Processor.process(Http11Processor.java:845)
	at org.apache.coyote.http11.Http11Protocol$Http11ConnectionHandler.process(Http11Protocol.java:583)
	at org.apache.tomcat.util.net.JIoEndpoint$Worker.run(JIoEndpoint.java:447)
	at java.lang.Thread.run(Thread.java:745)

```




# 问题解决


对比不报错的代码，发现是因为表名的原因，这里因为涉及到内部数据库构成，就不展示代码了。

通过搜索知道PreparedStatement不支持动态设置表的名字和列的名字的缘故，因此换用其他的方法解决。

# 说明


[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/bug/2019/03/01/java-preparedstatement/)

## 参考文章


[PreparedStatement不能动态设置表名和列名](https://blog.csdn.net/qq_20936333/article/details/81190433)

## 版本记录


20190301 完成文章



