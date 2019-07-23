---
layout: default
title: Web界面兼容性调整
category: [Technology , JS]
comments: true
---

## 文章介绍
公司的一个软件存在一个兼容性问题，针对谷歌浏览器的效果不是太好。






# 目录

[TOC]








## 需要描述 
公司的web程序存在一个兼容性问题，针对谷歌浏览器的效果不是太好，之前开发的主要对象都是面对ie的。

针对谷歌的话，点击日历控件会导致一个长度不可控的状况，造成无法正常选择时间的状况。



## 问题解决

解决这个问题不能，这个问题主要的原因是公司使用的extjs插件本身没有做这个方面的兼容。最新版本的不知道有没有处理，至少目前使用的版本是没有处理的。

解决的办法需要添加几行代码：
```
//WindForecast\WebRoot\WindForecast\jsCommon\ext\ext-all.js  22508

/********** 解决日历控件显示异常 **********/
Ext.override(Ext.menu.DateMenu, {
	render : function() {
		Ext.menu.DateMenu.superclass.render.call(this);
		if (Ext.isGecko || Ext.isSafari || Ext.isChrome) {
			this.picker.el.dom.childNodes[0].style.width = '178px';
			this.picker.el.dom.style.width = '178px';
		}
	}
});
```

最终形成的效果是如下的代码：
```
Ext.reg("numberfield", Ext.form.NumberField);


/********** 解决日历控件显示异常 **********/
Ext.override(Ext.menu.DateMenu, {
	render : function() {
		Ext.menu.DateMenu.superclass.render.call(this);
		if (Ext.isGecko || Ext.isSafari || Ext.isChrome) {
			this.picker.el.dom.childNodes[0].style.width = '178px';
			this.picker.el.dom.style.width = '178px';
		}
	}
});



Ext.form.DateField = Ext.extend(Ext.form.TriggerField, {
...
```





## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/js/2019/05/14/company-web-date/ )


### 参考博客

解决 Ext.form.DateField 在 chrome 等浏览器下显示异常<https://blog.csdn.net/cdmamata/article/details/8688154 >

### 版本记录
20190514 问题解决

20190723 完成文章
