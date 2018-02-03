---
layout: default
title: fatal: The remote end hung up unexpectedly
category: [技术, git]
comments: true
---

# fatal: The remote end hung up unexpectedly
上传一份代码的时候,出现了这个错误,然后就没有成功上传.




## 背景操作

主要是进行svn转换到git时候出错的,转换的代码比较简单,三行就可以解决.当然,web端的项目要事先准备好.

``` 
git svn clone svn://xxxxx
git remote add origin git@github.com/xxx/xxx.git
git  push -u origin master
``` 

## 出错发生

本来还算顺利的,有三个项目,前面两个成功了,但是第三个时候,有文件比较大,导致错误,没有上传成功,具体报错如下:

``` 
Counting objects: 61350, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (20587/20587), done.
efatal: The remote end hung up unexpecterror: RPC failed; HTTP 413 curl 22 The requested U
RL returned error: 413 Request Entity Too Large
dly
Writing objects: 100% (61350/61350), 4.32 GiB | 657.00 KiB/s, done.
Total 61350 (delta 39636), reused 59367 (delta 37653)
fatal: The remote end hung up unexpectedly
Everything up-to-date
``` 

看到这个的初步感觉是有文件太大无法上传,百度之后找到一个解决方案,直接在配置文件中添加参数即可.

* windows:
在 .git/config 文件中加入
``` 
[http]
postBuffer = 524288000
``` 
* linux:
``` 
git config http.postBuffer 524288000
``` 

## 分析
目前是成功解决问题了,根据错误,这个是明显的文件过大导致的上传失败了,我实际更改的时候是直接更改的1g了.
算是成功解决问题.


看到还有用git命令直接修改的,由于一次就成功了,就没有再重新尝试一下修改之后能够行得通了,后面遇到再试了.

## 参考的博客
* Git中push时出现错误fatal: The remote end hung up unexpectedly - 行者小朱的博客 - CSDN博客
<http://blog.csdn.net/u012050154/article/details/54605256>
* 解决RPC failed; HTTP 413 curl 22 The requested URL returned error: 413 Request Entity Too Large问题 - 飞鱼君 - 博客园
<https://www.cnblogs.com/feiyujun/p/7755764.html>





