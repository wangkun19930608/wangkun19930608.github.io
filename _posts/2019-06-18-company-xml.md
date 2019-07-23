---
layout: default
title: e文本添加xml节点思路整理
category: [Technology , Java]
comments: true
---

## 文章介绍
公司的一个新的需求是需要在传输的文本上面做一个xml节点的添加，但是要保持之前老版本文件的兼容，新版本同样是可控制的。






# 目录

[TOC]








## 问题详情 
需要实现的功能基本是前面介绍的那个样子，具体如下：

* 为e文本首位添加xml的尖括号标记
* 同时在标记名称的位置之前加一个@符号
* 并且每一行数据前面添加一个#符号，其他不变。
* 并且保持兼容性！

更改的话，需要对应的下载软件download，读取软件ppfs和wpfs。

软件的使用环境是jdk8 ，jdk6 。

更改之前的格式如下：
```
WFarmCode,Date,Time(Asia/Shanghai),Power(kW)
XX-125-Xibei-pv-qhltgemeq,2019-06-11,06:00:00,0
XX-125-Xibei-pv-qhltgemeq,2019-06-11,06:05:00,0
##
```

更改之后的格式应为：
```
<recv_point>
@WFarmCode,Date,Time(Asia/Shanghai),Power(kW)
#XX-126-Xibei-pv-nxszseq,2018-12-17,06:00:00,0
#XX-126-Xibei-pv-nxszseq,2018-12-17,06:05:00,0
##
</recv_point>
```



## 问题解决
为了进行可控操作，只能通过配置文件进行了。

### 针对download的修改

配置文件添加的节点如下：
```xml
<xmlcharacter on = 'true' head = '@' data = '#' >recv_point</xmlcharacter>
```

添加配置之后，新建类存储相关属性。
```java
	private boolean xmlCharacterOn = false;
	private String xmlCharacter = "recv_point";//wkupdate for default value 20190702
	private String xmlCharacterHead = "@";
	private String xmlCharacterData = "#";
```

读取代码按照之前的风格，不过还是添加一下兼容处理：
```java
Element xmlCharacterElement = fileElement.element("xmlcharacter");
if (null != xmlCharacterElement) {
	String isOnString = xmlCharacterElement.attributeValue("on").trim();
	if("true".equals(isOnString)){
		downloadFileCfg.setXmlCharacterOn(true);
		String xmlCharacter = xmlCharacterElement.getText();
		downloadFileCfg.setXmlCharacter(xmlCharacter);
		String headValue = xmlCharacterElement.attributeValue("head");
		downloadFileCfg.setXmlCharacterHead(headValue);
		String dataValue = xmlCharacterElement.attributeValue("data");
		downloadFileCfg.setXmlCharacterData(dataValue);
	}else{
		downloadFileCfg.setXmlCharacterOn(false);//无需启用时候，不需要读取
	}
} else {
	LOG.log.warn(fileElement.elementTextTrim("field1") + " set with out xmlcharacter node!");
}
```

单独的日志类独立出来了，直接调用的：
```java
public class LOG {
	private static String strLoggerPath = "FtpDownloadLog4j.cfg";
	public static Logger log = null;
	static {
		if (null == log) {
			log = Logger.getLogger(LOG.class);
			PropertyConfigurator.configureAndWatch(strLoggerPath, 5);
		}
	}
}
```

在之后就是进行文本操作处理，因为操作的都是文件名，文件下载之后不会再读取，只能重新读取一次，进行文本的更改。
```java
strUnzipSourcePathFile = new File(strUnzipSourcePathFileName);
File temp = new File("temp");
if ((downloadFileInfo.m_DownloadFileCfg.isXmlCharacterOn())) {
	String xmlCharacter = downloadFileInfo.m_DownloadFileCfg.getXmlCharacter();
	String xmlCharacterHead = downloadFileInfo.m_DownloadFileCfg.getXmlCharacterHead();
	String xmlCharacterData = downloadFileInfo.m_DownloadFileCfg.getXmlCharacterData();

	try {
		BufferedReader br = new BufferedReader(new FileReader(strUnzipSourcePathFile));
		BufferedWriter bw;
		bw = new BufferedWriter(new FileWriter(temp));
		String line;
		bw.write("<" + xmlCharacter + ">");
		bw.newLine();// 跨平添的方法
		while ((line = br.readLine()) != null) {
			if (line.toLowerCase().contains("farm")) {
				bw.write(xmlCharacterHead + line);
				bw.newLine();// 跨平添的方法
			} else if (line.toLowerCase().contains(downloadFileInfo.m_DownloadFileCfg.m_EndWithCharacter)) {
				bw.write(line);
				bw.newLine();
				continue;
			} else {
				bw.write(xmlCharacterData + line);
				bw.newLine();// 跨平添的方法
			}
		}
		bw.write("</" + xmlCharacter + ">");
		br.close();
		bw.close();
		LOG.log.info("Add xml node success:"+strUnzipSourcePathFileName);
	} catch (UnsupportedEncodingException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (FileNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
}
strUnzipSourcePathFile.delete();
temp.renameTo(strUnzipSourcePathFile);
```

更新一下版本号，这个部分功能既完成。

### 针对ppfs，wpfs软件的更新

因为解析的流程大致相同，所以添加的操作大致一样了。

首先针对配置文件的修改如下，基本上是添加了之前的三个属性，不过为了方便，添加了一个结束符和开关，其他基本不变。
```xml
<NwpFile NwpType="SN" PrefixName="XX-621-Haiwai-pv-zsmlgf_Nwp_" Formate="yyyyMMdd" IdInDb="70125099"   xmlon='true' xmlcharacter='recv_point'  xmlhead='@' xmldata='#'   xmlend="##"/> 
<Short ForcastType="SN" FilePrefixName="XX-621-Haiwai-pv-zsmlgf_short_" Formate="yyyyMMdd" SaveDir="D:\\wdata\\" xmlon='true' xmlcharacter='recv_point'  xmlhead='@' xmldata='#'  xmlend="##" >
<UShort FilePrefixName="XX-621-Haiwai-pv-zsmlgf_Ushort_" SaveDir="D:\\wdata\\" xmlon='true' xmlcharacter='recv_point'  xmlhead='@' xmldata='#'  xmlend="##" >
<Long FilePrefixName="XX-621-Haiwai-pv-zsmlgf_monthly_" SaveDir="D:\\wdata\\" xmlon='true' xmlcharacter='recv_point'  xmlhead='@' xmldata='#'  xmlend="##" >
```

用户存储的类基本和前面一样：
```java
//InputFileCfg SnForecastCfg SpForecastCfg WeatherTP 
	private boolean xmlCharacterOn = false;
	private String xmlCharacter = "recv_point";//wkupdate for default value 20190702
	private String xmlCharacterHead = "@";
	private String xmlCharacterData = "#";
	private String xmlCharacterEnd = "##";
```

读取配置的话，这里使用的是之前比较老的类，为了不改动其他代码，就直接按照它的方式读取：
```java
//xml node function wkadd 20190620 use this in case the old applicatiopn 
Node xmlCharacterOnNode = att.getNamedItem("xmlon");
if (null != xmlCharacterOnNode) {
	String xmlCharacterOn = xmlCharacterOnNode.getNodeValue();
	String xmlCharacter = att.getNamedItem("xmlcharacter").getNodeValue();
	String xmlCharacterHead = att.getNamedItem("xmlhead").getNodeValue();
	String xmlCharacterData = att.getNamedItem("xmldata").getNodeValue();
	String xmlCharacterEnd = att.getNamedItem("xmlend").getNodeValue();
	//don't use if not apply
	if ("true".equals(xmlCharacterOn)) {
		newFarm.spShortForecastCfg.setXmlCharacterOn(true);
		newFarm.spShortForecastCfg.setXmlCharacter(xmlCharacter);
		newFarm.spShortForecastCfg.setXmlCharacterHead(xmlCharacterHead);
		newFarm.spShortForecastCfg.setXmlCharacterData(xmlCharacterData);
		newFarm.spShortForecastCfg.setXmlCharacterEnd(xmlCharacterEnd);
	}
} else {
	Application.GetLogger().warn(tpn.getNodeName() + " set with out xmlcharacter node!Lastest version is need!");
}
```

剩下的就是读取数据了。为了方便，直接将数据还原成之前的格式了：
```java
//用于还原处理的数据
File strUnzipSourcePathFile = new File(strFilePathName);
File tempFile = new File("temp");
boolean isNeedReXml  = inputFileCfg.isXmlCharacterOn();
if(isNeedReXml){
	String xmlCharacter = inputFileCfg.getXmlCharacter();
	String xmlCharacterHead = inputFileCfg.getXmlCharacterHead();
	String xmlCharacterData = inputFileCfg.getXmlCharacterData();
	String endChar = inputFileCfg.getXmlCharacterEnd();// 
	
	try {
		BufferedReader br = new BufferedReader(new FileReader(strUnzipSourcePathFile));
		BufferedWriter bw;
		bw = new BufferedWriter(new FileWriter(tempFile));
		String line;
		while ((line = br.readLine()) != null) {
			if (line.toLowerCase().contains(xmlCharacter)) {
				continue;
			}else if (line.toLowerCase().contains("farm")&&line.contains(xmlCharacterHead)) {
				bw.write(line.substring(xmlCharacterHead.length()));
				bw.newLine();// 跨平添的方法
			} else if (line.toLowerCase().contains(endChar)) {
				bw.write(line);
				bw.newLine();
			} else {
				bw.write(line.substring(xmlCharacterData.length()));
				bw.newLine();// 跨平添的方法
			}
		}
		br.close();
		bw.close();

		strUnzipSourcePathFile.delete();
		tempFile.renameTo(strUnzipSourcePathFile);

		Application.GetLogger().info("Add xml node success:" + strFilePathName);
	} catch (UnsupportedEncodingException e) {+
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (FileNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
}
```


不过这个因为文本这样操作不知道是否后面需要新的文本，前面的方法不可以控制，因此没有使用，而是只是在读取时候按行读取进行处理了。
```java
// sncalculate.SnFileParse.parseFile(String, SnForecastCfg)
//nwp.SnNwpFileParse.parseFile(String, InputFileCfg)
//sploadforecast.SpFileParse.parseFile(String, SpForecastCfg)
//core.WeatherForecast.ReadFile(String, StringList)
//sploadforecast.SpNwpFileParse.parseFile(String, WeatherTP)

//按句还原
boolean isNeedReXml  = weatherTP.isXmlCharacterOn();
String xmlCharacter = weatherTP.getXmlCharacter();
String xmlCharacterHead = weatherTP.getXmlCharacterHead();
String xmlCharacterData = weatherTP.getXmlCharacterData();
String endChar = weatherTP.getXmlCharacterEnd();// 
		

// the old method is need,too.wkadd 20190621
if (strContent.contains(endChar)) {
	break;
}
if(isNeedReXml){
	if (strContent.contains(xmlCharacter)) {
		continue;
	}else if(strContent.contains("farm")&&strContent.contains(xmlCharacterHead)){
		strContent = strContent.substring(xmlCharacterHead.length());
	}else  {
		strContent = strContent.substring(xmlCharacterData.length());
	}
}
```

最后更改一下版本号基本完成更新。


## 补充 

因为考虑到性能，在关闭了这个功能时候是没有读取这个配置文件的，但是后面有个位置忘记了，然后使用了未经过初始化的值，导致了空指针，然后将之前的值都初始化了一下。这个是20190702反馈的问题。
```
	//old
	private boolean xmlCharacterOn = false;
	private String xmlCharacter = "recv_point";//wkupdate for default value 20190702
	private String xmlCharacterHead = "@";
	private String xmlCharacterData = "#";
	private String xmlCharacterEnd = "##";
	//now 
	private String xmlCharacter = "recv_point";//wkupdate for default value 20190702
	private String xmlCharacterHead = "@";
	private String xmlCharacterData = "#";
	private String xmlCharacterEnd = "##";
```

有了初始值，基本其他的就没有变化了。


另外之前遇到一个问题，文本有一个特殊的结束符的问题，然后之前考虑到了，但是不全面，最后将最后的那个还原操作之修改了一处，实际上有两处，造成一个`index out of bounds `的错误，修改成现在的就好，之前的如下图所示，同样是20190702反馈的问题。

```
//warn not used!
if(isNeedReXml){
	if (strContent.contains(xmlCharacter)) {
		continue;
	}else if(strContent.toLowerCase().contains("farm")&&strContent.contains(xmlCharacterHead)){
		strContent = strContent.substring(xmlCharacterHead.length());
	}else if (strContent.contains(endChar)) {
		break;
	}else {
		strContent = strContent.substring(xmlCharacterData.length());
	}
}

```



注意一下的是，log部分之前是比较详细的，但是后面部分就只剩下两行了，后面注意一下这个问题。不知道是不是被自动优化了。
```
ERROR [2019-07-01 18:30:28:055] [短期预测线程] (ShortPlanThread.java:75)
           -java.lang.NullPointerException
java.lang.NullPointerException
	at java.lang.String.contains(String.java:2103)
	at sploadforecast.SpNwpFileParse.parseFile(SpNwpFileParse.java:68)
	at core.ShortPlanThread.ImportSpNwp(ShortPlanThread.java:524)
	at core.ShortPlanThread.importSpNWPFileList(ShortPlanThread.java:481)
	at core.ShortPlanThread.importNWP(ShortPlanThread.java:400)
	at core.ShortPlanThread.run(ShortPlanThread.java:66)
	
//-->
	
ERROR [2019-07-02 09:15:57:562] [短期预测线程] (ShortPlanThread.java:75)
	   -java.lang.NullPointerException
java.lang.NullPointerException
```




## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/java/2019/06/18/company-xml/ )


### 参考博客

无

### 版本记录
20190618 开始问题解决

20190625 完成文章

20190702 更新文章
