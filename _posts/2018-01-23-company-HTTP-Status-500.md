---
layout: default
title: 查找错误html status 500 Parser configuration exception 的错误
category: [Technology, Tomcat]
comments: true
---

#  查找错误html status 500的错误
弄一个公司程序的web程序发布时候报这个错误,初次看这个还是不明白,虽说解决很简单,直接上报错代码和解决方案了.



## 错误代码1
``` 
HTTP Status 500 -

type Exception report

message

description The server encountered an internal error () that prevented it from fulfilling this request.

exception

javax.servlet.ServletException: Servlet.init() for servlet springmvc threw exception
	org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:102)
	org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:286)
	org.apache.coyote.http11.Http11Processor.process(Http11Processor.java:845)
	org.apache.coyote.http11.Http11Protocol$Http11ConnectionHandler.process(Http11Protocol.java:583)
	org.apache.tomcat.util.net.JIoEndpoint$Worker.run(JIoEndpoint.java:447)
	java.lang.Thread.run(Thread.java:745)
root cause

org.springframework.beans.factory.BeanDefinitionStoreException: Parser configuration exception parsing XML from ServletContext resource [/WEB-INF/springmvc-servlet.xml]; nested exception is javax.xml.parsers.ParserConfigurationException: Unable to validate using XSD: Your JAXP provider [gnu.xml.dom.JAXPFactory@6ffe137f] does not support XML Schema. Are you running on Java 1.4 with Apache Crimson? Upgrade to Apache Xerces (or Java 1.5) for full XSD support.
	org.springframework.beans.factory.xml.XmlBeanDefinitionReader.doLoadBeanDefinitions(XmlBeanDefinitionReader.java:404)
	org.springframework.beans.factory.xml.XmlBeanDefinitionReader.loadBeanDefinitions(XmlBeanDefinitionReader.java:334)
	org.springframework.beans.factory.xml.XmlBeanDefinitionReader.loadBeanDefinitions(XmlBeanDefinitionReader.java:302)
	org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:143)
	org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:178)
	org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:149)
	org.springframework.web.context.support.XmlWebApplicationContext.loadBeanDefinitions(XmlWebApplicationContext.java:124)
	org.springframework.web.context.support.XmlWebApplicationContext.loadBeanDefinitions(XmlWebApplicationContext.java:93)
	org.springframework.context.support.AbstractRefreshableApplicationContext.refreshBeanFactory(AbstractRefreshableApplicationContext.java:130)
	org.springframework.context.support.AbstractApplicationContext.obtainFreshBeanFactory(AbstractApplicationContext.java:467)
	org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:397)
	org.springframework.web.servlet.FrameworkServlet.createWebApplicationContext(FrameworkServlet.java:442)
	org.springframework.web.servlet.FrameworkServlet.createWebApplicationContext(FrameworkServlet.java:458)
	org.springframework.web.servlet.FrameworkServlet.initWebApplicationContext(FrameworkServlet.java:339)
	org.springframework.web.servlet.FrameworkServlet.initServletBean(FrameworkServlet.java:306)
	org.springframework.web.servlet.HttpServletBean.init(HttpServletBean.java:127)
	javax.servlet.GenericServlet.init(GenericServlet.java:212)
	org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:102)
	org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:286)
	org.apache.coyote.http11.Http11Processor.process(Http11Processor.java:845)
	org.apache.coyote.http11.Http11Protocol$Http11ConnectionHandler.process(Http11Protocol.java:583)
	org.apache.tomcat.util.net.JIoEndpoint$Worker.run(JIoEndpoint.java:447)
	java.lang.Thread.run(Thread.java:745)
root cause

javax.xml.parsers.ParserConfigurationException: Unable to validate using XSD: Your JAXP provider [gnu.xml.dom.JAXPFactory@6ffe137f] does not support XML Schema. Are you running on Java 1.4 with Apache Crimson? Upgrade to Apache Xerces (or Java 1.5) for full XSD support.
	org.springframework.beans.factory.xml.DefaultDocumentLoader.createDocumentBuilderFactory(DefaultDocumentLoader.java:102)
	org.springframework.beans.factory.xml.DefaultDocumentLoader.loadDocument(DefaultDocumentLoader.java:70)
	org.springframework.beans.factory.xml.XmlBeanDefinitionReader.doLoadBeanDefinitions(XmlBeanDefinitionReader.java:388)
	org.springframework.beans.factory.xml.XmlBeanDefinitionReader.loadBeanDefinitions(XmlBeanDefinitionReader.java:334)
	org.springframework.beans.factory.xml.XmlBeanDefinitionReader.loadBeanDefinitions(XmlBeanDefinitionReader.java:302)
	org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:143)
	org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:178)
	org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:149)
	org.springframework.web.context.support.XmlWebApplicationContext.loadBeanDefinitions(XmlWebApplicationContext.java:124)
	org.springframework.web.context.support.XmlWebApplicationContext.loadBeanDefinitions(XmlWebApplicationContext.java:93)
	org.springframework.context.support.AbstractRefreshableApplicationContext.refreshBeanFactory(AbstractRefreshableApplicationContext.java:130)
	org.springframework.context.support.AbstractApplicationContext.obtainFreshBeanFactory(AbstractApplicationContext.java:467)
	org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:397)
	org.springframework.web.servlet.FrameworkServlet.createWebApplicationContext(FrameworkServlet.java:442)
	org.springframework.web.servlet.FrameworkServlet.createWebApplicationContext(FrameworkServlet.java:458)
	org.springframework.web.servlet.FrameworkServlet.initWebApplicationContext(FrameworkServlet.java:339)
	org.springframework.web.servlet.FrameworkServlet.initServletBean(FrameworkServlet.java:306)
	org.springframework.web.servlet.HttpServletBean.init(HttpServletBean.java:127)
	javax.servlet.GenericServlet.init(GenericServlet.java:212)
	org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:102)
	org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:286)
	org.apache.coyote.http11.Http11Processor.process(Http11Processor.java:845)
	org.apache.coyote.http11.Http11Protocol$Http11ConnectionHandler.process(Http11Protocol.java:583)
	org.apache.tomcat.util.net.JIoEndpoint$Worker.run(JIoEndpoint.java:447)
	java.lang.Thread.run(Thread.java:745)
root cause

java.lang.IllegalArgumentException: http://java.sun.com/xml/jaxp/properties/schemaLanguage
	gnu.xml.dom.JAXPFactory.setAttribute(JAXPFactory.java:109)
	org.springframework.beans.factory.xml.DefaultDocumentLoader.createDocumentBuilderFactory(DefaultDocumentLoader.java:99)
	org.springframework.beans.factory.xml.DefaultDocumentLoader.loadDocument(DefaultDocumentLoader.java:70)
	org.springframework.beans.factory.xml.XmlBeanDefinitionReader.doLoadBeanDefinitions(XmlBeanDefinitionReader.java:388)
	org.springframework.beans.factory.xml.XmlBeanDefinitionReader.loadBeanDefinitions(XmlBeanDefinitionReader.java:334)
	org.springframework.beans.factory.xml.XmlBeanDefinitionReader.loadBeanDefinitions(XmlBeanDefinitionReader.java:302)
	org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:143)
	org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:178)
	org.springframework.beans.factory.support.AbstractBeanDefinitionReader.loadBeanDefinitions(AbstractBeanDefinitionReader.java:149)
	org.springframework.web.context.support.XmlWebApplicationContext.loadBeanDefinitions(XmlWebApplicationContext.java:124)
	org.springframework.web.context.support.XmlWebApplicationContext.loadBeanDefinitions(XmlWebApplicationContext.java:93)
	org.springframework.context.support.AbstractRefreshableApplicationContext.refreshBeanFactory(AbstractRefreshableApplicationContext.java:130)
	org.springframework.context.support.AbstractApplicationContext.obtainFreshBeanFactory(AbstractApplicationContext.java:467)
	org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:397)
	org.springframework.web.servlet.FrameworkServlet.createWebApplicationContext(FrameworkServlet.java:442)
	org.springframework.web.servlet.FrameworkServlet.createWebApplicationContext(FrameworkServlet.java:458)
	org.springframework.web.servlet.FrameworkServlet.initWebApplicationContext(FrameworkServlet.java:339)
	org.springframework.web.servlet.FrameworkServlet.initServletBean(FrameworkServlet.java:306)
	org.springframework.web.servlet.HttpServletBean.init(HttpServletBean.java:127)
	javax.servlet.GenericServlet.init(GenericServlet.java:212)
	org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:102)
	org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:286)
	org.apache.coyote.http11.Http11Processor.process(Http11Processor.java:845)
	org.apache.coyote.http11.Http11Protocol$Http11ConnectionHandler.process(Http11Protocol.java:583)
	org.apache.tomcat.util.net.JIoEndpoint$Worker.run(JIoEndpoint.java:447)
	java.lang.Thread.run(Thread.java:745)
note The full stack trace of the root cause is available in the Apache Tomcat/6.0.18 logs.

Apache Tomcat/6.0.18

``` 

## 解决方案 
  删除JFreeChart的gunjaxp.jar包.
  
## 分析
  这个问题似乎之前遇到过几次,但是好久没久没有碰到了结果忘记了,真是不应该,这里记录一下,方便后面查找错误了.
  这个问题的原因是这个架包版本存在问题,但是不知道为什么这个架包一直存在在spring整体里面.


# 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/tomcat/2018/01/23/company-HTTP-Status-500/)

## 参考文章

[Unable to validate using XSD: Your JAXP provider ](http://blog.csdn.net/linshutao/article/details/6225482)




## 版本记录

20180123 完成文章

20190528 修改文章格式



