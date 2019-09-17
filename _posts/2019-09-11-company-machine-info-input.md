---
layout: default
title: 机组信息填报必须大于0
category: [Technology , JAVA]
comments: true
---

## 文章介绍
CJW反馈JS现场出现一个机组信息无法正常填报的错误,提示报错“不可以大于最高机组数”。有点印象，似乎之前解决过，但是没有找到问题的原因，只能怪重新定位一下问题了，






# 目录

[TOC]








## 问题分析

通过定位，找到出错的位置代码

```
if(data.length == 0){
	msg2 += "所有提交值不能为空！\n";
}else{
	if((!/^[0-9]*[1-9][0-9]*$/.test(data))&&(data!=0)){
		msg2 += "内容必须为正整数或者0";
	}else{
		if(parseInt(data)>maxCount){
			msg2+="不可以大于最高机组数("+maxCount+")!";
		}
	}
}
```

找到赋值的位置

```
function getMaxPower(){
	var windFarmId = WindFarmCfg.WindFarms[currentSelectedIndex].ID;
	var strDataParamNode = windFarmId + "##";
	
	var requestConfig = {
		url : '../action/installCapacityAction',
		params : {
			DATAPARAM : strDataParamNode,
			Random : Math.round(Math.random() * 200)
		},
		success : function(response) {
			if (response.responseText !== undefined) {
				var setup=Ext.decode(response.responseText);
				
				maxPower = setup.ratePower;
				maxCount = setup.rateCount;
			}
		},
		failure : function() {
			
			Ext.MessageBox.hide();
			alert("查询装机容量失败！");
		}
	};
	Ext.Ajax.request(requestConfig);
	
	return maxPower;
}
```

匹配到接口对应的类

```
<action path="/installCapacityAction" type="com.narisq.ewis.nsf.InstallCapacityAction" />
```

定位到对应的数据库
```
StringBuffer sb = new StringBuffer(128);
		sb.append("SELECT RATEPOWER AS RATEPOWER, MACHINE_NUM AS RATECOUNT FROM UPLOAD_TIME_CFG T \n");
		sb.append("WHERE T.WINDFARMID = " + windFarmId + "\n");
```	
		

问题是出在这里没值了，按照系统设计，这些都是可以配置的。

通过搜索与查看调用，发现调用的方式是`upTimeAction`定位接口为

```
	<action path="/upTimeAction" type="com.narisq.ewis.struts.upTimeAction" />
```

通过搜素查找到设置界面为
```
 <title>参数设置</title>
```
	
然后找到填报的一个开关,设置值的代码部分截取如下：
```
var requestConfig = {
			timeout : 60000,
			url : '../action/upTimeAction',
			params : {
				DATAPARAM : strParam,
				Random : Math.round(Math.random() * 200)
			},
				
				
				
var strParam = "";
for ( var i = 0; i < returnData.length; i++) {
	strParam += returnData[i];
	strParam += "##";
}
			
			
returnData.push(tempMaxCount);
	
	
}else if(record.get('0')==WebCfg.WebCfg.ParaSetting.MaxCount.text){
		if((!/^[0-9]*[1-9][0-9]*$/.test(data))&&(data!=0)){
			msg += "第"+(i+1)+"行值必须为正整数或者0";
		}
	}
	
	
if(maxCountCfg=='true')showType.push(WebCfg.WebCfg.ParaSetting.MaxCount.text);
```	


## 问题解决

分析到这里，应该确定是问题出在了哪里。只是发现现场已经解决完问题了，和这个差不多，不过这个默认配置是隐藏的，需要开启之后才能去手动配置。

最后正常填报即可。




## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/java/2019/09/11/company-machine-info-input/ )


### 参考博客

无

### 版本记录
20190911 问题出现并解决

20190916 完成文章
