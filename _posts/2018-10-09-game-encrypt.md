---
layout: default
title: 智动大闯关密码游戏记录
category: [Technology, Encrypt]
comments: true
---


# 文章背景
这个是之前玩过的一个网页闯关游戏，只是玩过，但是卡在一个关卡没有通过，希望寻求一下帮助。









# 目录

[TOC]









# 闯关记录

## stage0 

### 地址

<https://puzzle.sxisa.org/stage0.php>

### 过关方式

直接点击图片

## stage1

### 地址

<https://puzzle.sxisa.org/stage1.php>

### 过关方式
 
直接修改地址为state2了。

## stage2

### 地址

<https://puzzle.sxisa.org/stage2.php>

### 过关方式
 
页面全选，发现第二关的入口next。

## stage3

### 地址

<https://puzzle.sxisa.org/next.php>

### 过关方式
 
查看源代码，发现第二关的入口lang/cpp.php。

## stage4

### 地址

<https://puzzle.sxisa.org/lang/cpp.php>

### 过关方式
 
查看源代码，发现第二关的入口java.php。

## stage5

### 地址

<https://puzzle.sxisa.org/lang/java.php>

### 过关方式
 
看到图片，一个是windows的图标，另一个是linux了，不过，注意，不是Ruby，有个家伙似乎记错单词直接跳关了。

## stage6

### 地址

<https://puzzle.sxisa.org/lang/linux.php>

### 过关方式

提示说屏幕脏了，没有明白，直接查看源代码，发现了一张图片，打开发现图片的提示入口ruby

## stage7

### 地址

<https://puzzle.sxisa.org/lang/ruby.php>

### 过关方式
 
根据标题的提示，直接输入密码here过关。

## stage8

### 地址

<https://puzzle.sxisa.org/helloworld/nbsp.php>

### 过关方式
 
根据标题的nbsp和提示的html转义，连接替换space过关。

## stage9

### 地址

<https://puzzle.sxisa.org/helloworld/space.php>

### 过关方式
 
通过图片猜测是凯撒密码，直接跑一跑得到下一关密码next stage is mathematic.php

## stage10

### 地址

<https://puzzle.sxisa.org/helloworld/mathematic.php>

### 过关方式
 
根据标题的hex提示，把251636973转为16进制为`effaced`过关


## stage11

### 地址

<https://puzzle.sxisa.org/helloworld/effaced.php>

### 过关方式
 
根据题目提示的base，直接把bmV4dCBzdGFnZSBpcyBtaXNzYWJ1dHRvbi5odG1s解码为next stage is missabutton.html

相信这么多的php，你不会把html贴进去的。

## stage12

### 地址

<https://puzzle.sxisa.org/helloworld/missabutton.php>

### 过关方式
 
提示密码直接给了，只是没有提交按钮，直接在输入框回车，就没了。

## stage13

### 地址

<https://puzzle.sxisa.org/helloworld/giveyoubutton.php>

### 过关方式
 
给出了密码1123581321345589144233，但是输入提示错误，因为长度不够，把maxlength去掉就行。再次提交过关。

## stage14

### 地址

<https://puzzle.sxisa.org/lang/python.php>

### 过关方式
 
这一关，实在不知道怎么弄，然后把数字一个个填写的，最后是4过关了。其他的说搜索函数，但是这个就呵呵了，百度排名是会优化的。

## stage15

### 地址

<https://puzzle.sxisa.org/lang/program.php>

### 过关方式
 
在cookie找到密码21fbd4a1acbdaf6f37e3eb01aebcf181ddcae1f8

## stage16

### 地址

<https://puzzle.sxisa.org/story/one.php>

### 过关方式
 
莫尔斯密码解密为HELLOWOELD，尝试输入不对，大小写改了后成功HelloWorld

## stage17

### 地址

<https://puzzle.sxisa.org/story/unicode.php>

### 过关方式
 
页面乱码，转为utf-8后显示正常，根据地址输入unt8过关

## stage18

### 地址

<https://puzzle.sxisa.org/story/utf8.php>

### 过关方式
 
图片下载后直接用编辑器打开看到click.php过关

此处采用了隐写术，将后缀名改为rar即可解压得到，直接用编辑器针对加密过的不能处理。

## stage19

### 地址

<https://puzzle.sxisa.org/story/click.php>

### 过关方式
 
图片先下载下来吧，直接编辑器打开看到下一关which.php

## stage20

### 地址

<https://puzzle.sxisa.org/story/which.php>

### 过关方式
 
查看资源发现两张图，然后通过隐写术的对比图片得到truth五个字母，过关

## stage21

### 地址

<https://puzzle.sxisa.org/story/truth.php>

### 过关方式
 
下载图片编辑器打开发现提示：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

通过base64还原得到图片mistake.php

## stage22

### 地址

<https://puzzle.sxisa.org/story/mistake.php>

### 过关方式
 
css中找到密码\0063\0068\0061\006E\0067\0065，输入即可过关

注意不要多此一举的弄成change

## stage23

### 地址

<https://puzzle.sxisa.org/family/brother.php>

### 过关方式
 
提交密码被拦截，找到前端方法，直接覆盖返回真即可过关。


## stage24

### 地址

<https://puzzle.sxisa.org/family/father.php>

### 过关方式
 
qwe键盘码对应abc键盘码即可得到grandparent.php 。

## stage25

### 地址

<https://puzzle.sxisa.org/family/grandparent.php>

### 过关方式
 
暂未过关





# 另外的一个闯关记录


<https://p.sxisa.com/stage0.html>
0

<https://p.sxisa.com/stage1.php>
1

<https://p.sxisa.com/stage2.php>
2

<https://p.sxisa.com/next.php>
3

<https://p.sxisa.com/gogo.php>
4

<https://p.sxisa.com/chrome.php>
5

<https://p.sxisa.com/lang/mac.php>
6

<https://p.sxisa.com/lang/linux.php>
7

<https://p.sxisa.com/lang/ruby.php>
8

<https://p.sxisa.com/helloworld/nbsp.php>
9

<https://p.sxisa.com/helloworld/rome.php>
10

<https://p.sxisa.com/helloworld/mathematic.php>
11 251636973->effaced

<https://p.sxisa.com/helloworld/effaced.php>
12 VGhlIHBhc3N3b3JkIGlzIFN0b3JhZ2Uu ->The password is Storage.提示出来了，但是不知道为什么不对

<https://p.sxisa.com/helloworld/missabutton.php>
16 c74d97b01eae257e44aa9d5bade97baf

<https://p.sxisa.com/helloworld/giveyoubutton.php>
17 70efdf2ec9b086079795c442636b55fb 

<https://p.sxisa.com/helloworld/submit.php>
18 6f4922f45568161a8cdf4ad2299f6d23

<https://p.sxisa.com/helloworld/whatnext.php>
19 1f0e3dad99908345f7439f8ffabdffc4

<https://p.sxisa.com/face/object.php>
20 110037296

<https://p.sxisa.com/face/110037296.php>
21 vuejs

<https://p.sxisa.com/face/vuejs.php>
22 fbd4a1acbdaf6f37e3eb01aebcf181ddcae1f8->next stage

<https://p.sxisa.com/lang/logo.php>
23 html5

<https://p.sxisa.com/lang/http.php>
24 3c3d014ed4f2eb778570a40642277e86

<https://p.sxisa.com/story/unicode.php>
25

<https://p.sxisa.com/story/utf8.php>
26

<https://p.sxisa.com/story/click.php>
27


<https://p.sxisa.com/story/which.php>
28

<https://p.sxisa.com/story/truth.php>
29

<https://p.sxisa.com/story/mistake.php>
30 change

<https://p.sxisa.com/family/father.php>
31

<https://p.sxisa.com/family/grandparent.php>
33 又在这儿被拦住了

# 其他闯关游戏
[Arthur's Online Riddle](http://riddle.arthurluk.net/index.php )







# 说明
之前就玩过，现在整理一下这个笔记。

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/encrypt/2018/10/09/game-encrypt/)

## 参考文章

[我的闯关记录_白帽子技术](https://bbs.ichunqiu.com/thread-15816-1-1.html)

[图片在线转换Base64](https://www.sojson.com/image2base64.html)

[SOMD5](https://www.somd5.com/)

[md5在线解密破解,md5解密加密](http://www.cmd5.com/)

## 版本记录

20181009 文章开始着手


20181010 完成文章
http://ecard.hbut.edu.cn/SSLogin/HBGYSelfSearchSSO_Login.aspx?userName=101710789

