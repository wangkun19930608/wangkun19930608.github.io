---
layout: default
title: 根据web界面定位数据库表的问题
category: [Technology, Web]
comments: true
---


# 背景介绍
针对现场出现一些问题，需要定位一下页面对应的数据库表的内容是否存在数据，方便排查错误，下面介绍两个方法。





















# 方法一

主要是针对现场运行的系统，我们系统都已经集成好了log的输出，在查询的界面，进行相关的查询操作之后，即可通过log的输出，找到对应的数据库表的名字，这个是最为快捷的，但是可能会有不全面的位置。

如下方的日志，很快就可以定位了。

```
2020-04-04 01:21:14.103 INFO [http-nio-8080-exec-6] com.narisq.ewis.util.LOG | SELECT * FROM fd.FD_RUN_ALARM T 

WHERE T.BEGINTIME <= TO_DATE('2020-04-04 01:21:14','yyyy-mm-dd hh24:mi:ss') AND 

T.LASTTIME >= TO_DATE('2020-04-04 01:21:14','yyyy-mm-dd hh24:mi:ss') AND 

T.WINDFARMID IN (78367000,78125000,78427000,78095000) AND 

T.DATATYPE IN (102,103,104,111,111,115,118,120,123,202,205,124,125) AND 

T.ALARMTYPE IN (0,1,3,4,5,7) 

ORDER BY WINDFARMID, DATATYPE, BEGINTIME ,ALARMTYPE
```

至于日志存在的位置，一般都是存储在tomcat的logs目录下面。windows的话，还可以直接在tomcat的终端界面进行日志查看。

# 方法二 

主要是针对研发而言，首先需要找到你所在界面的地址。

![](https://ask.qcloudimg.com/http-save/1178990/wfmszds6yd.png)

然后，根据地址找到对应的界面的源码

![](https://ask.qcloudimg.com/http-save/1178990/xsc3bu1c7t.png)

再然后找到所有接口调用的位置：

```
../action/PVDisplayPageCfg
```

```
../action/EwisDatalist
```

```
../action/PVupPanelAction
```

```
../action/PVReadXmlAction
```

```
../action/PVDisplayPageCfg
```

然后根据这些action，通过struts-config.xml定位到对应的类，上述的几个都可以定位到对应的类，然后就可以直接查询对应的数据库表字段了，但是第二个EwisDatalist这个有一些特殊。主要是它的参数特殊。

```
 ChartParamNode = XmlNodeParametersObj.CreateECodeNode("DbQueryPanelType",

        "FDScheduleElement", null);

    XmlNodeParametersObj.InsertPNode(ChartParamNode, "101", "MA", "",

        "Condition", "Value", windFarmID);
```

这里的话，是专门的一个查询数据的组件，我们需要到C:\ComponentRegistration\EWIS\ECode目录下，找到文件名字是FDScheduleElement的文件，并打开，找到DbQueryPanelType节点。

```
<ECode Name="DbQueryPanelType">

        <Component UID="101" Category="datacomponent" TimeOut="12000,12000"

                   ProxyRequest="false,101">

            <ParamXmlNode>

                <DataOperationNode>

                    <DataType Value="panels" />

                    <ReturnDataSource NameList="panels" />

                    <Fields DataSetCount="1">

                        <Field Name="type" ConvertType="string" Header="光伏板型号"

                               ColumnIndex="0" DataSetIndex="0" />

						<Field Name="area" ConvertType="double" Header="光伏板面积"

                               ColumnIndex="1" DataSetIndex="0" />

                        <Field Name="rate" ConvertType="double" Header="光伏板转换率"

                               ColumnIndex="2" DataSetIndex="0" />

                    </Fields>

                    <Condition Op="and">

                        <Condition UID="101" Field="windfarm_id" Op="=" Value="58001000"

                                   ValueType="int" />

                    </Condition>

                </DataOperationNode>

            </ParamXmlNode>

        </Component>

    </ECode>
```

然后根据这个节点的DataType  类型panels，定位到根目录下的FDDBConfig文件，找到panels对应的数据库表的名字就行。

```
<Table Name="fd_def_panel" QueryType="panels" />
```

以上就是两个数据库表的定位方法了。

# 说明


[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/web/2020/04/16/web-find-db/ )

