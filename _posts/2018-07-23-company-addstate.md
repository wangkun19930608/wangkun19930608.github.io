---
layout: default
title: 公司笔记系统状态添加
category: [技术, JAVA]
comments: true
---


# 系统状态添加的缘由
公司的新项目现在基本是好了,有计算的wpfs,传输的102,104,upload,download,展示的web,但是几个软件的运行状态如何,需要一个形象的展示方式,因此需要添加一个状态展示的页面.









# 目录

[TOC]



# 如何实现
这个添加不难,不过要思路清晰的话,添加才顺利.由于经理只说说加一个状态,没有指定风格,样式,所以还是比较简单的了.(ps至于后面要求修改界面的那个,就是后话了,毕竟男生的审美毕竟有限)

## 思路整理
大致添加这个的思路如下:
```
Web添加界面窗口
->
实现定时刷新
->
实现数据获取接口
->
实现读取数据
->
构造数据
->
其他的数据补充,以及刷新的依据
```

## 开工

### 第一步
针对第一步数据添加文字和圆圈,表示不难,直接就在菜单栏后面添加了一个分隔符,文字,以及相应的状态圆圈了.
```js
//圆圈代码
<div class="circle" style="width: 20px;height: 20px; border-radius: 50%; background-color: red;"></div>
```

完成后全部的代码效果如下:
```
//完成后的界面代码
<div id="SystemMenu" class="x-toolbar x-small-editor"><table cellspacing="0"><tbody><tr><td id="ext-gen69"><table border="0" cellpadding="0" cellspacing="0" class="x-btn-wrap x-btn " id="ext-comp-1010" style="width: auto;"><tbody><tr id="ext-gen77" class=" x-btn-with-menu"><td class="x-btn-left"><i>&nbsp;</i></td><td class="x-btn-center"><em><button type="button" id="">WPFS</button></em></td><td class="x-btn-right"><i>&nbsp;</i></td></tr></tbody></table></td><td><span class="ytb-sep" id="ext-gen78"></span></td><td id="ext-gen80"><table border="0" cellpadding="0" cellspacing="0" class="x-btn-wrap x-btn " id="ext-comp-1015" style="width: auto;"><tbody><tr id="ext-gen88" class=" x-btn-with-menu"><td class="x-btn-left"><i>&nbsp;</i></td><td class="x-btn-center"><em unselectable="on"><button class="x-btn-text" type="button" id="ext-gen82">IEC102</button></em></td><td class="x-btn-right"><i>&nbsp;</i></td></tr></tbody></table></td><td><span class="ytb-sep" id="ext-gen89"></span></td><td id="ext-gen91"><table border="0" cellpadding="0" cellspacing="0" class="x-btn-wrap x-btn" id="ext-comp-1024" style="width: auto;"><tbody><tr id="ext-gen99" class=" x-btn-with-menu"><td class="x-btn-left"><i>&nbsp;</i></td><td class="x-btn-center"><em unselectable="on"><button class="x-btn-text" type="button" id="ext-gen93">IEC104</button></em></td><td class="x-btn-right"><i>&nbsp;</i></td></tr></tbody></table></td></tr></tbody></table></div>
```

当然,要实现这个,直接写页面是比较方便了,只是这个菜单栏用的是一个ext的插件,只能按照同样的样式添加,最后形成如上状态栏的代码如下:
```js
///SHEWIS3.0/WebRoot/WindForecast/jsCommon/control/SystemMenu.js
//tb表示原来的table菜单的变量

tb.add('-');
tb.add('-');

tb.addText({
	text : 'WPFS',
	//iconCls : 'bmenu', // <-- icon
	//menu : menu
		// assign menu by instance
	});
var B = document.createElement("div");
B.setAttribute('id', 'WPFSState');
B.setAttribute('style', 'width: 20px;height: 20px; border-radius: 50%; background-color: red;');
tb.add(B);
tb.add('-');

tb.addText({
	text : 'IEC102',
	//iconCls : 'bmenu', // <-- icon
	//menu : menu
	// assign menu by instance
});
var B = document.createElement("div");
B.setAttribute('id', 'IEC102State');
B.setAttribute('style', 'width: 20px;height: 20px; border-radius: 50%; background-color: red;');
tb.add(B);
tb.add('-');

tb.addText({
	text : 'IEC104',
	//iconCls : 'bmenu', // <-- icon
	//menu : menu
	// assign menu by instance
});
var B = document.createElement("div");
B.setAttribute('id', 'IEC104State');
B.setAttribute('style', 'width: 20px;height: 20px; border-radius: 50%; background-color: red;');
tb.add(B);
//tb.add('-');
```

至于颜色,本来是有三个状态的,正常,离线,还有异常,我是打算用绿色,黄色,和红色代替,然后在加一个表示未知状态的白色.


#### 注意
到这里,其实第一步的工作是已经完成了,只是呢,
后面需要把对应的状态栏另外起一行,这样子的话,工作量又要添加了.

不过没办法,只能添加,直接新建一个和菜单table一样的对象,
然后在加上一个新的table对象,最后把代码添加在新的对象里面就行了.
然后再把其他的一些变量也添加一些,最后的代码就是下面的样子了.
```js
	tbState.addText({
						text : 'Web',
						id : 'webId',
					});
					var B = document.createElement("div");
					B.setAttribute('id', 'WebState');
					B.setAttribute('style', 'width: 20px;height: 20px; border-radius: 50%; background-color: white;');
					tbState.add(B);
//					tbState.add('-');
					
					tbState.addText({
						text : 'NPFS',
						});
					var B = document.createElement("div");
					B.setAttribute('id', 'NPFSState');
					B.setAttribute('style', 'width: 20px;height: 20px; border-radius: 50%; background-color: white;');
					tbState.add(B);
//					tbState.add('-');
					
					tbState.addText({
						text : 'FrontServer',
					});
					var B = document.createElement("div");
					B.setAttribute('id', 'FrontState');
					B.setAttribute('style', 'width: 20px;height: 20px; border-radius: 50%; background-color: white;');
					tbState.add(B);
//					tbState.add('-');
					
					tbState.addText({
						text : 'FtpDownload',
					});
					var B = document.createElement("div");
					B.setAttribute('id', 'FtpDownloadState');
					B.setAttribute('style', 'width: 20px;height: 20px; border-radius: 50%; background-color: white;');
					tbState.add(B);
//					tbState.add('-');
					
					tbState.addText({
						text : 'FtpUpload',
					});
					var B = document.createElement("div");
					B.setAttribute('id', 'FtpUploadState');
					B.setAttribute('style', 'width: 20px;height: 20px; border-radius: 50%; background-color: white;');
					tbState.add(B);
//					tbState.add('-');
					
					tbState.addText({
						text : 'IEC102',
						//iconCls : 'bmenu', // <-- icon
						//menu : menu
						// assign menu by instance
					});
					var B = document.createElement("div");
					B.setAttribute('id', 'IEC102State');
					B.setAttribute('style', 'width: 20px;height: 20px; border-radius: 50%; background-color: white;');
					tbState.add(B);
//					tbState.add('-');
					
					tbState.addText({
						text : 'IEC104',
						//iconCls : 'bmenu', // <-- icon
						//menu : menu
						// assign menu by instance
					});
					var B = document.createElement("div");
					B.setAttribute('id', 'IEC104State');
					B.setAttribute('style', 'width: 20px;height: 20px; border-radius: 50%; background-color: white;');
					tbState.add(B);
//					tb.add('-');
					
```



加了这个还没有完,因为还有一些位置的高度没有调整,这些的话就得看哪些页面的高度不合理了.

这个位置需要根据实际情况来,修改的位置不少,只能慢慢修改了.


### 第二步
实现定时刷新的这个,本来是有很多方式的,选取哪一种似乎比较头疼,
不过系统本身就有一个通过ext的线程不断读取的过程了.直接照猫画虎就行.
代码的实现如下:
```
var task3 = {
			run : function() {

				//如果关闭了告警功能，则不再像后台查询告警状态
				var SoftwareStateParamOn = WebCfg.WebCfg.FileStateParam.SoftwareState.On;
				if ("true"!= SoftwareStateParamOn) {
					
					//AlarmBox.setVisible(false);
					return;
				}
				
				getSoftwareMessage();
			},
			interval : IntervalTimeSoftware
	}
	Ext.TaskMgr.start(task3);
```

这里的两个参数文件是在配置文件里面新加的两个节点,因为需要自动定义刷新时间,所以只能单独配置,
之前的告警是5min一次,现在的状态检测刷新的是3s一次.

### 第三步
定时刷新的有了,现在就是需要构造一个数据获取接口,用来读取,解析状态.

接口的添加直接在struct的配置文件添加即可.然后再添加相关的实现.对应的配置节点如下:
```xml
		<action path="/StateMonitorAction" type="com.narisq.ewis.struts.StateMonitorAction" />
```

之后添加相应代码的功能,简单的分了下层,代码实现如下:
```java
package com.narisq.ewis.struts;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.narisq.ewis.bean.SoftwareState;
import com.narisq.ewis.dao.MonitorStateDAO;

public class StateMonitorAction extends BaseAction {

	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {

		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");

		
		List<SoftwareState> list = (new MonitorStateDAO()).queryState();
		JsonConfig config = new JsonConfig();
		JSONObject json = new JSONObject();
		JSONArray jsonArray = JSONArray.fromObject(list, config);
		if(0==list.size()){
			json.put("state", 0);
		}else{
			json.put("state", 1);
		}
		json.put("list", jsonArray);
		response.getWriter().print(json.toString());

		return null;
	}
}

```

这里主要是将获取到的数据,输出去即可.

然后在定时的任务里面去解析获取到的数据即可.
```js

function getSoftwareMessage() {
	
	var requestConfig = {
		url : '../action/StateMonitorAction',
		success : function(response) {
			if (response.responseText != undefined) {
				var strMessage = response.responseText; // 全部风场的配置信息
				var Message = JSON.parse(strMessage); 
				if ("1"==Message.state) {
					var stateArray= Message.list;
					for(var i = 0;i < stateArray.length ;i++ ){
						if(stateArray[i].keyName=='Web'){
							setState('WebState',stateArray[i].state);
						}else  if(stateArray[i].keyName=='Download'){
							setState('FtpDownloadState',stateArray[i].state);
						}else  if(stateArray[i].keyName=='Front'){
							setState('FrontState',stateArray[i].state);
						}else  if(stateArray[i].keyName=='Npfs'){
							setState('NPFSState',stateArray[i].state);
						}else  if(stateArray[i].keyName=='Upload'){
							setState('FtpUploadState',stateArray[i].state);
						}else  if(stateArray[i].keyName=='IEC102'){
							setState('IEC102State',stateArray[i].state);
						}else  if(stateArray[i].keyName=='IEC104'){
							setState('IEC104State',stateArray[i].state);
						}  
					}
				
				} 
			}
		},
		failure : function() {
		}
	};
	Ext.Ajax.request(requestConfig);
	Ext.MessageBox.hide();
}





function setState(key,state){
	var color = 'white';
	Ext.getDom(key).style['display']='block';
	Ext.getDom(key).parentNode.previousSibling.style['display']='block';
	if('0'==state){
		color = 'green';
	}else if('1' == state){
		color = 'yellow';
	}else if('2' == state){
		color = 'red';
	}else{
		color = 'white';
		Ext.getDom(key).style['display']='none';
		Ext.getDom(key).parentNode.previousSibling.style['display']='none';
	}
	Ext.getDom(key).style['background-color']=color;
}
```

数据解析完成之后直接更新到节点,本来设置样式的那段代码是不需要的,
不过,后面提出的新的需求是不需要白色的位置状态,因此这里就直接坐了一个隐藏处理了.
由于文字和圈圈在两个不同的td里面,因此需要读取设计的对应id的前面的一个对象同样隐藏.

### 第四步
接口有了,但是数据接口并没有实现,返回的数据是空的,这里就是需要我们读取数据库的数据了.

本来之前的oracle数据库是没有存储软件状态字段的,而内存数据库redis有,因此这里的话,获取数据只从redis读取.代码如下:
```java

package com.narisq.ewis.dao;

import java.util.ArrayList;
import java.util.List;

import redis.clients.jedis.Pipeline;

import com.nari.redis.RedisPoolUtilImp;
import com.narisq.ewis.base.SuperDAO;
import com.narisq.ewis.bean.SoftwareState;

public class MonitorStateDAO extends SuperDAO {

	public List<SoftwareState> queryState() throws Exception {
		//0 normal 1 offline 2 exception
		ArrayList<SoftwareState> list = new ArrayList<SoftwareState>();
		RedisPoolUtilImp rpm = RedisPoolUtilImp.getInstance();
		// Pipeline pip = rpm.getJedis().pipelined();
		SoftwareState sampleWeb = new SoftwareState();
		sampleWeb.setKeyName("Web");
		sampleWeb.setState("0");
		list.add(sampleWeb);
		
		String value = rpm.get("Rt:SoftState:Download");
//		System.out.println(value);
		if (null != value && !"".equals(value.trim())) {
			SoftwareState sample = new SoftwareState();
			sample.setKeyName("Download");
			sample.setState(value);
			list.add(sample);
		}else{
			SoftwareState sample = new SoftwareState();
			sample.setKeyName("Download");
			sample.setState("");
			list.add(sample);
		}

		value = rpm.get("Rt:SoftState:Front");
		if (null != value && !"".equals(value.trim())) {
			SoftwareState sample = new SoftwareState();
			sample.setKeyName("Front");
			sample.setState(value);
			list.add(sample);
		}else{
			SoftwareState sample = new SoftwareState();
			sample.setKeyName("Front");
			sample.setState("");
			list.add(sample);
		}
		value = rpm.get("Rt:SoftState:Npfs");
		if (null != value && !"".equals(value.trim())) {
			SoftwareState sample = new SoftwareState();
			sample.setKeyName("Npfs");
			sample.setState(value);
			list.add(sample);
		}else{
			SoftwareState sample = new SoftwareState();
			sample.setKeyName("Npfs");
			sample.setState("");
			list.add(sample);
		}
		value = rpm.get("Rt:SoftState:Upload");
		if (null != value && !"".equals(value.trim())) {
			SoftwareState sample = new SoftwareState();
			sample.setKeyName("Upload");
			sample.setState(value);
			list.add(sample);
		}else{
			SoftwareState sample = new SoftwareState();
			sample.setKeyName("Upload");
			sample.setState("");
			list.add(sample);
		}
		value = rpm.get("Rt:SoftState:IEC102");
		if (null != value && !"".equals(value.trim())) {
			SoftwareState sample = new SoftwareState();
			sample.setKeyName("IEC102");
			sample.setState(value);
			list.add(sample);
		}else{
			SoftwareState sample = new SoftwareState();
			sample.setKeyName("IEC102");
			sample.setState("");
			list.add(sample);
		}
		value = rpm.get("Rt:SoftState:IEC104");
		if (null != value && !"".equals(value.trim())) {
			SoftwareState sample = new SoftwareState();
			sample.setKeyName("IEC104");
			sample.setState(value);
			list.add(sample);
		}else{
			SoftwareState sample = new SoftwareState();
			sample.setKeyName("IEC104");
			sample.setState("");
			list.add(sample);
		}
		return list;
	}

}

```

本来没有数据的话是不打算返回数据的,但是为了防止解析异常,还是添加了没有数据的一个结果.

针对最开头的一个web状态,一般能够看到web就是正常的吧.

### 第五步

读取数据有了,但是获取到的全部为空,是因为我们还没有创建对应的key,redis添加下面的key即可:

```
Rt:SoftState:Front
Rt:SoftState:Npfs
Rt:SoftState:Upload
Rt:SoftState:Download
Rt:SoftState:IEC102
Rt:SoftState:IEC104
```

有了这些部分,大致上,每三秒即可实现一次软件状态的读取了.

更好一些的做法自然是所有的数据节点通过配置文件读取了,不过为了加快速度,
这样子做也快一些,后面有需求需要添加这些状态的话,那样就再弄了.




### 细节优化
至于其他的redis的数据更新细节什么的,就暂时不考虑在web处理了.前面的这些就是实现需要的主要思路了.



# 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/%E6%8A%80%E6%9C%AF/java/2018/07/23/company-addstate/)

## 版本记录
20180723 开始代码动工

20180801 完成项目代码

20180801 完成文章
