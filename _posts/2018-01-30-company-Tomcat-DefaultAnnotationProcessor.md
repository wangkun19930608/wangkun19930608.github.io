---
layout: default
title: Tomcat 启动DefaultAnnotationProcessor报错
category: [Technology, Tomcat]
comments: true
---

#  发布web项目时候tomcat启动报错
Tomcat中catalina.jar和jasper.jar都有AnnotationProcessor接口，所以运行时，就出错了.



## 错误代码
``` 
java.lang.ClassCastException: org.apache.catalina.util.DefaultAnnotationProcessor
``` 

###  解决方案 1
  org.apache.catalina.util.DefaultAnnotationProcessor cannot be cast to org.apache.AnnotationProcessor
这个错误。后来查资料问群友，终于搞明白。是tomcat的lib文件夹jar包和项目的lib文件下的jar包冲突了
把项目下lib文件下和tomcat的jar的重复的全部删除。错误终于被搞定。

###  解决方案 2
修改了tomcat里的context.xml文件，在context 元素下添加  

```
<Loader delegate="true" />  
```


最后形成的结构为：
```
<Context>
    <WatchedResource>WEB-INF/web.xml</WatchedResource>
	<Loader delegate="true" />
</Context>
```


##  分析
这个之前犯过,但是之前因为另外一个大错误,忽略了这个小错误,结果有错了.
  

# 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/tomcat/2018/01/30/company-Tomcat-DefaultAnnotationProcessor/)

## 参考文章

[org.apache.catalina.util.DefaultAnnotationProcessor cannot be cast](http://blog.csdn.net/wwbmyos/article/details/7734799)




## 版本记录

20180130 完成文章

20190528 修改文章格式