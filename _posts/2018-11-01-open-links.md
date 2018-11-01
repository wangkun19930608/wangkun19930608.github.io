---
layout: default
title: 批量打开连接
category: [Technology, JavaScript]
comments: true
---


# 文章背景
喜欢收藏一些好的网站，比方说一些课程，一些技术人的博客，一些一些新闻媒体，有时候全部都想看，
有时候想看部分，之前是把这些连接放在一个收藏夹的文件夹里面，然后可以直接打开问文件夹的全部连接。
但是随着连接的增多，一次性打开全部的连接，电脑效率就降低太多了，因此为了方便访问一些常用的网址，就写了个一件打开的功能了。








# 目录

[TOC]









# 原始操作

想要一次打开多个连接？最简单的办法，按住ctrl，依次点击你想要看的连接就行。但是这个只能固定打开一些在同一个页面的连接。


# 浏览器

通过浏览器，你可以方便打开一个收藏夹文件夹里面的所有连接，如果分类详细，可以根据需要，每天打开自己想要打开的连接即可。

# 通过js实现

这个呢，其实也比较简单，但是需要懂代码才能够实现，通过一键打开几个需要打开的网站。写的代码主要如下：
```
$(".mytalbes").click(function(){
	var links = $(this).parent().next().children().children();
	for(var i = 1 ; i < links.length ; i++){
		window.open(links[i].children[2].firstChild.href);
	}
});
```

分析代码可以看到，代码只是批量获取连接，然后通过open函数打开。所以并没有什么难度。

欢迎访问这个连接尝试一下这个功能<https://wangkun19930608.github.io/friends.html>



# 说明


[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/javascript/2018/11/01/open-links/)

## 参考文章

无

## 版本记录


20181101 完成文章



