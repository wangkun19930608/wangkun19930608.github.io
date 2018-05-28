---

layout: default

title: CharSequence cannot be resolved

category: [技术, Bug]

comments: true

---

## 问题介绍

今天把Web代码导入到项目里面去,莫名出现这样子的错误,没有明确的错误代码,不好处理,不过好在最后处理好了.

## 问题详情
问题的没有明确的
```c
//出问题代码
if(CommonDataSetObj.GetDataSetName().contains(strNameContain)) 

//出问题提示
java.lang.CharSequence cannot be resolved
```





## 问题解决

项目的问题不大,主要是项目的环境问题,之前是JDK1.6的,现在直接导入时候默认的环境是JDK1.8,直接删除1.8的环境,添加1.6的环境即可.

具体操作可以参考:

在MyEclipse中的配置方式为：右击项目->configuration buildPath->选择jre8->remove->add library->JRE SystemLibrary->jre6,之后重新编译项目即可.


## 说明

[欢迎评论，欢迎指正,转载也请注明出处.]()

### 参考博客

[java.lang.CharSequence cannot be resolved](https://www.cnblogs.com/wangpei/p/4730086.html)

### 版本记录

20180528 完成文章