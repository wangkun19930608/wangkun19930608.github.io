---
layout: default
title: 工作笔记
category: [技术, 工作笔记]
comments: true
---

## 前段时间完成的一个项目的笔记
过程还算顺利,但是为了方便后面有需要的同事进行学习,就简单做了一下过程的笔记.方便后面有需要的同事进行查看.



##具体的需求
原文如下:
```
各新能源场站必须添加超短期预测曲线监视界面，要求 3 月 31日前完成。
16 条预测曲线（15 分钟、30 分钟、45 分钟，……，240 分钟）
与实际出力在同一界面显示，场站值班人员必须会看预测曲线出力，省调
值班人员会不定时询问场站值班人员，不清楚者将按照调度违纪考核，严
重者吊销持证上岗证。
```

任务分配,差不多设计的任务都在我这儿了,现场学习的就不是我的任务了,至于具体的场站因为公司的缘故不便透漏,直说设计了.

通过经理的会议与分析,除了这个16条曲线外,另外还要添加96条曲线,针对96次预测的数据进行选择性展示.
没有具体的开发文档,说是可以直接新建一个页面进行存储也行.于是在原来的位置直接新建的一个页面,找到这个位置不轻松啊.
```
//位置在\Web\PVForecast(s)\WebRoot\PVForecast\jsCommon\data\MenuData.js
//别问为什么在js写的菜单,之前来到这儿我就奇怪很多天了.全部都是js写的页面.
id : "menuInternalDataConnection",
	name : "光伏电站功率信息",
	itemdata : [{
				text : "日有功过程线",
				url : serverMapPath() + "/Power/PowerFigureF.html",
				icon : '../jsCommon/images/menu-show.gif',
				hrefTarget:'_self'
			},{
				text : "预测\\实际功率\\理论功率对比曲线",
				url : serverMapPath() + "/Power/ContrastPowerFigureF.html",
				icon : '../jsCommon/images/menu-show.gif',
				hrefTarget:'_self'
			},{//新加20180314
				text : "超短期\\实际功率\\理论功率对比曲线",
				url : serverMapPath() + "/Power/ContrastUShortRealtimeTheory.html",
				icon : '../jsCommon/images/menu-show.gif',
				hrefTarget:'_self'
			},{
				text : "实际\\预测辐照度、实际\\预测功率对比曲线",
				url : serverMapPath() + "/Power/ContrastLists.html",
				icon : '../jsCommon/images/menu-show.gif',
				hrefTarget:'_self'
			}]
```

这里找到之后,添加一条还算轻松,有了连接之后,需要把对应的页面也同样添加出来,同样直接复制的页面ContrastPowerFigureF.html.和对应的ContrastUShortRealtimeTheory.js.
复制之后,页面需要修改的位置有对应的js需要修改,如下:
```
 <script type="text/javascript" src="ContrastUShortRealtimeTheory.js">
```

针对js部分,需要修改的就不少了.这里就简单做一个分析了.
```
//之前的数据显示菜单
var LineType = ['日前预测', '今日实测', '超短期预测(15分钟)', '超短期预测(1小时)', '超短期预测(4小时)','测光法应发理论功率','测光法可发理论功率','样板机法应发理论功率','样板机法可发理论功率'];

//现在的数据显示菜单
var LineType = ['日前预测', '今日实测', '超短期预测功率', '超短期预测单次发布','测光法应发理论功率','测光法可发理论功率','样板机法应发理论功率','样板机法可发理论功率'];
```

菜单现在是有了,为了方便的显示数据,就只是将其中的一条默认显示出来了,代码对比如下:
```
//之前的代码
		if(LineType[i].contains('日前预测') || LineType[i].contains('今日实测') ||  LineType[i].contains('超短期预测(15分钟)') || LineType[i].contains('样板机法可发理论功率')){
        	obj.checked = true;
        } else{
        	obj.checked = false;
        }
//现在的代码
        if(LineType[i].contains('日前预测') || LineType[i].contains('今日实测') ||  LineType[i].contains('超短期预测功率') || LineType[i].contains('样板机法可发理论功率')){
        	obj.checked = true;
        } else{
        	obj.checked = false;
        }
```

菜单现在是有了,但是具体的是选择的哪一条呢?还是没有选择的位置,于是需要两个选择框,为了和风格对应,只能选择本身的js带有的组件进行设计了,最后添加如下的代码总算是完成了.
```
 var comboData = [//这里要是数据不多,我肯定直接复制几遍了
//                     ['超短期预测第15分钟', '0'],
//                     ['超短期预测第30分钟', '1'],
                 ];
    for(var i=0;i<16;i++){
    	var singleCombo=['超短期预测第'+(i+1)+'个点('+(i+1)*15+'分钟)', i];
    	comboData[i]=singleCombo;
    }
     MyEWISUtilObj.CreateCombox(comboData, comboSelectFunction);
                 //设置默认值
     combo.setValue('超短期预测第一个点(15分钟)');
     
     var comboDataInDay = [];
     for(var i=0;i<96;i++){
    	 var hour=parseInt(i/4);
    	 var minute=i%4*15;
    	 var newHour=hour<10?'0'+hour:hour;
    	 var newMinute=minute==0?'00':minute;
     	var singleCombo=['超短期第'+(i+1)+'次预测('+newHour+':'+newMinute+')', i];
     	comboDataInDay[i]=singleCombo;
     }
      MyEWISUtilObj.CreateComboxInDay(comboDataInDay, comboInDaySelectFunction);
                  //设置默认值
      var now=new Date();
      var hour=now.getHours();
      var minuteInFour=parseInt(now.getMinutes()/15);
      selectTypeInDay=hour*4+minuteInFour+1;
      var newHour=hour<10?'0'+hour:hour;
      var newMinute=minuteInFour==0?'00':minuteInFour*15;
      comboInDay.setValue('超短期第'+selectTypeInDay+'次预测('+newHour+':'+newMinute+')');//为了方便格式化日期输出我也是拼了
```

这里需要留意一下的是CreateComboxInDay方法是重载的,有几个js有同样的方法,但是都不能完成设计,因为他们用的是一个全局变量传递的参数.
```
//原来的方法
//创建选择Combox
		CreateCombox:function(comboData,comboSelectFunction){
			
			var store=new Ext.data.SimpleStore({
				fields:['text','id'],
				data:comboData
			});
			combo=new Ext.form.ComboBox({
				id:'comboxType',
				editable:false,
				store:store,
				displayField:'text',
				valueField:'id',
				typeAhead:true,
				mode:'local',
				triggerAction:'all',
				//emptyText:'选择要显示的类型',
				emptyText:'',
				selsectOnFocus:true,
				renderTo:'west',
				width:200,
				frame:true,
				resizable:false,
				listeners:{
					'select':comboSelectFunction
				}
			});				
		},	

//重载之后的新的方法,基本没有变化,就是一个全局变量的变化()
//创建选择Combox
		CreateComboxInDay:function(comboData,comboSelectFunction){
			
			var store=new Ext.data.SimpleStore({
				fields:['text','id'],
				data:comboData
			});
			comboInDay=new Ext.form.ComboBox({
				id:'comboxTypeInDay',
				editable:false,
				store:store,
				displayField:'text',
				valueField:'id',
				typeAhead:true,
				mode:'local',
				triggerAction:'all',
				//emptyText:'选择要显示的类型',
				emptyText:'',
				selsectOnFocus:true,
				renderTo:'west',
				width:200,
				frame:true,
				resizable:false,
				listeners:{
					'select':comboSelectFunction
				}
			});				
		},	
```

控件现在是有了,需要添加选择他们之后的一个方法,默认的显示的是第一个点和当前的时间点了,点击的响应函数如下:
```
//两个全局变量进行所选定的条目的存储了.
function comboSelectFunction() {
    //grid 中根据后续点号使用filter过滤grid中的数据
    selectType = this.selectedIndex;
}

function comboInDaySelectFunction() {
    //grid 中根据后续点号使用filter过滤grid中的数据
    selectTypeInDay = this.selectedIndex;
}
```

条目变化存储完毕之后,需要处理的就是点击查询之后的响应方法了,本来有一套自主查询的组建的,不过被前面部分开发人员改成了手动的查询,我也只能顺着下来继续了.
```
//原本的请求方法
url: '../action/ManyDatalist',
        params: {
			'beginDate':bY,
			'endDate':eY,
			'planpowerID':WindFarmCfg.WindFarms[selectedFarmIndex].ID,
			'uplanpowerID': WindFarmCfg.WindFarms[selectedFarmIndex].UPlanPower.ID,
			'rtpowerID':WindFarmCfg.WindFarms[selectedFarmIndex].RTPower.ID,
			'planPowerType' : WindFarmCfg.WindFarms[selectedFarmIndex].PlanPower.Type,
    		'uPlanPowerType':WindFarmCfg.WindFarms[selectedFarmIndex].UPlanPower.Type,
            Random: Math.round(Math.random() * 200)
        },

//这个只是发送请求的部分,不过主要的区别也是在这里了.
url: '../action/ManyUSDatalist',
        params: {
			'beginDate':bY,
			'endDate':eY,
			'planpowerID':WindFarmCfg.WindFarms[selectedFarmIndex].ID,
			'uplanpowerID': WindFarmCfg.WindFarms[selectedFarmIndex].UPlanPower.ID,
			'rtpowerID':WindFarmCfg.WindFarms[selectedFarmIndex].RTPower.ID,
			'planPowerType' : WindFarmCfg.WindFarms[selectedFarmIndex].PlanPower.Type,
    		'uPlanPowerType':WindFarmCfg.WindFarms[selectedFarmIndex].UPlanPower.Type,
    		'indexIn16':selectType,
    		'indexIn96':selectTypeInDay,
            Random: Math.round(Math.random() * 200)
        },
```

到了这里,不错了,就是再把接口重新写一遍,不能更改原来的,毕竟原来的业务还是需要正常运行.添加接口直接在配置文件处理了
```
  	<action path="/ManyDatalist" type="com.narisq.ewis.struts.ManyDatalistAction" />
  	<action path="/ManyUSDatalist" type="com.narisq.ewis.struts.ManyUSDatalistAction" />
```

新的方法和旧的差不多,就是根据自己的参数进行解析数据和存储数据了,新的方法的主要改动如下:
```
int indexIn16 = Integer.valueOf(request.getParameter("indexIn16").trim());
int indexIn96 = Integer.valueOf(request.getParameter("indexIn96").trim());

Map<String, Double> ss16pDataMap = new HashMap<String, Double>();// 共计96个点,有16条组合
Map<String, Double> ss96pDataMap = new HashMap<String, Double>();// 共计16个点,有96组不同组合

ss16pDataMap.put(simpleDateFormat.format(beginDate), -99d);
ss96pDataMap.put(simpleDateFormat.format(beginDate), -99d);
				
List<Double> ss16pData = manyDatalistDAO.getSuperShort16PowerList(	linesVO, ss16pDataMap, markDate,indexIn16);
JSONArray superShort16Power = JSONArray.fromObject(ss16pData,config);
ParamDataSetObjList.put("superShort16Power", superShort16Power);

List<Double> ss96pData = manyDatalistDAO.getSuperShort96PowerList(linesVO, ss96pDataMap, markDate,indexIn96);
JSONArray superShort96Power = JSONArray.fromObject(ss96pData,config);
ParamDataSetObjList.put("superShort96Power", superShort96Power);

//一条查询语句大致如下了,不过我想你应该不会看的,太乱了.
int point = indexIn96;
StringBuffer sb = new StringBuffer();
sb.append(" select round(load,3) as sp, to_char(ybtime, 'yyyy-mm-dd hh24:mi:ss') as timekey");
sb.append(" from fd_plan_load");
sb.append(" where (((((ybtime > to_date('" + linesVO.getbY()+ "', 'yyyy-mm-dd hh24-mi-ss') and");
sb.append(" ybtime <= to_date('" + linesVO.geteY()+ "', 'yyyy-mm-dd hh24-mi-ss')) and");
sb.append(" fbtime = to_date('" + linesVO.getbY()+ "', 'yyyy-mm-dd hh24-mi-ss') + " + 15 * point + " / 24 / 60)) and");
sb.append(" engineid in (" + linesVO.getUplanpowerID()+ ")) and type = " + linesVO.getuPlanPowerType() + ")");
sb.append(" order by ybtime");
System.out.println();
System.out.println("_______________超短期预测功率第"+indexIn96+"个(总96)数据SQL如下：");
System.out.println(sb.toString());
return sb.toString();
```

到这里的话,目前数据都返回过来了,但是还没有进行数据的显示,不过好在组件方便扩展,还算顺利.添加到扩展的代码如下:
```
switch (checkedType[i]) {
	case 0:
		arr = beforePlanArray;
		break;
	case 1:
		arr = rtArray;
		break;
	case 2:
		arr = ushortPlanArray16;
		break;
	case 3:
		arr = ushortPlanArray96;
		break;
	case 4:
		arr = theoryLoadCgfAllArray;
		break;
	case 5:
		arr = theoryLoadCgfArray;
		break;
	case 6:
		arr = theoryLoadYbjAllArray;
		break;
	case 7:
		arr = theoryLoadYbjArray;
		break;
}

//片段节选
if (LineType[checkedType[i]] == '超短期预测功率') {
	var DataSetStyle = [
		{
			"name": "color",
			"value": "07F856"
		},
		{
			"name": "anchorBorderColor",
			"value": "07F856"
		},
		{
			"name": "anchorBgColor",
			"value": "07F856"
		}
	];

	myFusionChart.addAttributes(ds, DataSetStyle);

}
if (LineType[checkedType[i]] == '超短期预测单次发布') {
	var DataSetStyle = [
		{
			"name": "color",
			"value": "000000"
		},
		{
			"name": "anchorBorderColor",
			"value": "000000"
		},
		{
			"name": "anchorBgColor",
			"value": "000000"
		}
	];

	myFusionChart.addAttributes(ds, DataSetStyle);

}
```

到这里,大致功能就已经实现了.


## 说明

过程看起来还算顺利,不过其中还是遇到不少需要解决的问题,尤其是时间处理需要小心,不小心就错位了,或者不是按照自己需要的格式输出了.

由于代码属于公司,很多代码都是节选的,所以不能单独运行了.




