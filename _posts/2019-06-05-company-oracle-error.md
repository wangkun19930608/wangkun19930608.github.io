---
layout: default
title: 已安装Oracle提示TNS:无监听程序的解决办法
category: [Technology , Oracle]
comments: true
---

## 问题介绍
同事使用oracle时候出错，连接时候报错，自己解决不了，寻求帮助。







## 问题详情 
远程连接数据库时候，提示如下：
```
TNS:无监听程序
```





## 问题解决
根据windows里面的经验，应该只是数据库没有启动监听程序，启动对应的服务即可，没有服务的话则需要使用Net Configuration Assistant创建对应的服务。

搜索相关命令之后找到如下解决方案：
```
#登录 root 用户
su 

#启动sqlplus 
sqlplus /nolog


#启动数据库实例
startup

# 退出
exit


#切换到root用户，启动监听程序
lsnrctl start
```

以oracle一般用户使用命令不能识别，使用root用户或者su权限能够正常输入，具体以哪个身份，得根据实际安装情况进行测试。

## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/oracle/2019/06/05/company-oracle-error/ )


### 参考博客

【oracle常见错误】oracle监听程序配置/“ORA-12541: TNS: 无监听程序” - yxtic - 博客园
<https://www.cnblogs.com/yx007/p/6732012.html>

连接linux数据库Oracle时报错ORA-12541: TNS: 无监听程序 - joe立 - 博客园
<https://www.cnblogs.com/difme/p/6187231.html>

redhat6.4 下安装oracle 11g详细完整的步骤 - ningjiu9的博客 - CSDN博客
<https://blog.csdn.net/ningjiu9/article/details/82148231>

### 版本记录
20190605 解决问题

20190605 完成文章
