---
layout: default
title: 手动添加节假日日期功能的实现
category: [Technology , JAVA]
comments: true
---

## 文章介绍
现场需要手动添加节假日日期，然后生成特殊版本的预报文本。因为假期时候，员工一般也是需要放假，所以就生成一个时间长一些的文本了。






# 目录

[TOC]








## 问题分析

首先确定是在web一个单独的界面用来展示节假日，然后可以添加修改所有的选项，最后需要和老的系统兼容。

需要修改的的有wpfs和web部分，根据场站的需要，进行节假的预测需要先设计一下数据库。

为了存储这些必要的信息，根据数据库定义，设计数据库表如下，三个主要字段，一个备用字段。

```
CREATE TABLE "FD"."FD_DEF_HOLIDAY" (
"NAME" VARCHAR2(40) NULL ,
"TIME" DATE NULL ,
"LENGTH" NUMBER NULL ,
"MORE" VARCHAR2(200) NULL 
)
NOCOMPRESS
;
```





## 问题解决

### WPFS的更新 
有了数据库和字段之后，就开始正常进行开发了。考虑到之前的逻辑是通过读取专门的配置文件，存储到一个hashmap中。

我们可以新增的话，就自动读取数据库中所有的节假日信息，然后通过hashmap的自动去重功能，达到新增节假日，而又不重复的目的。

基本上，在读取之前的话添加如下代码即可：
```
//holidayDictionary为所有节假日的一个集合
List<Holiday> dbHoliday = new LinkedList<Holiday>();
dbHoliday = HolidayQuery.getAllHolidays();
for (Holiday holiday : dbHoliday) {
	holidayDictionary.put(holiday.time, holiday);
}
```

然后就是获取节假日了实现了，基本一个查库解决：

```
 public static List<Holiday> getAllHolidays() {
        
        Holiday holiday = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        Connection conn = null;
        
        List <Holiday> tlist = new LinkedList<Holiday>();
        try {
            conn = DatabaseMng.GetLocalDBConnection();
            String strSql = "select * " + " from FD_DEF_HOLIDAY ";
            ps = conn.prepareStatement(strSql);
            rs = ps.executeQuery();
            while (rs.next()) {
                holiday = new Holiday();
                String fname = rs.getString("name");
                holiday.name = fname;
                Timestamp ftime = rs.getTimestamp("time");
                Calendar ftimeCal = Calendar.getInstance();
                ftimeCal.setTimeInMillis(ftime.getTime());
                String ftiemString =Holiday.timeFormat(ftimeCal);
                
                holiday.time = ftiemString;
                String flength = rs.getString("length");
                holiday.length = flength;
                tlist.add(holiday);
            }
            
        } catch (SQLException e) {
            
            Application.logger.error(e, e);
        } catch (ClassNotFoundException e) {
            
            Application.logger.error(e, e);
        } finally {
            try {
                
                if (null != rs)
                    rs.close();
                if (null != ps)
                    ps.close();
                if (null != conn)
                    conn.close();
            } catch (SQLException e) {
                
                Application.logger.error(e, e);
            }
        }
        
        return tlist;
    }
```


基本上有了这些也就完成了，不过一般哪些区域需要使用这个功能的话，可能就需要获取一下就好了。

```
// 平时上送3天的数据，长假上送假期加假期后第一个工作日的数据
Calendar calTheoryUpload = Calendar.getInstance();
int eFileDataTimeLength = 3;
if (HolidayMgr.getInstance().oneDayBeforeLongHoliday(calTheoryUpload)) {            
	eFileDataTimeLength = HolidayMgr.getInstance().getLengthBeforeHoliday(calTheoryUpload);
}
```



### WEB部分的更新

这边的话，首先写一个界面，专门用来修改holiady的配置，直接复刻一份其他参数设计的页面即可，比方说用EngineType。

然后添加一个界面的显示部分：
```
///SHEWIS144/WebRoot/WindForecast/jsCommon/data/MenuData.js
if ("true" == displayPageConfig.Holiday.On) {

        var ParSetPage = {
            text : "节假日设置",
            url : serverMapPath() + "/Schedule/Holiday.html",
            icon : '../jsCommon/images/menu-show.gif',
            hrefTarget : '_self'
        };
        UserMenu.itemdata.push(ParSetPage);
    }
```

这里显示的话，对应的配置文件位置同样需要更改一下：
```
<SystemManage On="true" />
		<ParSet On="true"/>
		<UserManage On="true"/>
		<UserOperate On="true"/>
		<SystemRun On="true"/>
		<EngineType On="true"/>
		<Holiday On="true"/>
		<Draughtfan On="true"/>
```


然后就是查询数据与修改数据了，首先添加接口：
```
<action path="/upHolidayAction" type="com.narisq.ewis.struts.upHolidayAction" />
```

然后就是实现了：
```

package com.narisq.ewis.struts;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.narisq.ewis.constants.NsfConstants;
import com.narisq.ewis.dao.HolidayDAO;
import com.narisq.ewis.util.WriteFile;

public class upHolidayAction extends BaseAction {
    private final HolidayDAO dao= new HolidayDAO();
    
    public ActionForward execute(ActionMapping mapping, ActionForm form, HttpServletRequest request,
        HttpServletResponse response) throws Exception {
        
    	response.setCharacterEncoding("UTF-8");
        request.setCharacterEncoding("UTF-8");
        String strDataParams = new String(request.getParameter("DATAPARAM"));
        // 58017000##2012-07-04 00:15:00##nari##20##20##&&
        System.out.println("Recive ReForecast data:" + strDataParams);
        String[] arParam = strDataParams.split("@@");
        int iRet = 0;
        int iRet1 = 0;
        String type = arParam[0];
        String holidayDate = "";
        String holidayLength = "";
        String holidayName = "";
        String more = "";
        String windFarm = "";
        
        // 如果主机数据库连接不存在，则重新连接数据库
        if (!dao.mainIsConn()) {
            dao.getMainConnection();
        }
        if (dao.mainIsConn()) {
            if("queryAll".equals(type)){
                more = arParam[1];
                String array = dao.queryAll(dao.conn,more);
                PrintWriter out = response.getWriter();
                out.print(array);
            }
            else if ("insert".equals(type)) {
                holidayDate = arParam[1];
                holidayName = arParam[2];
                holidayLength= arParam[3];
                more = arParam[4];
                iRet = dao.insert(dao.conn, holidayDate, holidayName,holidayLength , more);
                if (iRet >= 1) {
                    System.out.println("插入成功！");
                    // 如果备机数据库连接不存在，则重新连接数据库
                    if (dao.isSlave.equals(NsfConstants.IS_SLAVE_TRUE)) {
                        // 如果备机数据库连接不存在，则重新连接数据库
                        if (!dao.slaveIsConn()) {
                            dao.getSlaveConnection();
                        }
                        if (dao.slaveIsConn()) {
                            iRet1 = dao.insert(dao.connSlave, holidayDate, holidayName,holidayLength, more);
                            if (iRet1 != 1) {
                                System.out.println("插入备份数据库出错！");
                            }
                        } else {
                            System.out.println("备机数据库连接不存在！");
                        }
                         if (iRet1 != 1) {
                         // 备机同步失败，写以上1个SQL语句的E文本
                         String conent = this.insertUserManage(holidayDate, holidayLength, holidayName, more);
                         WriteFile.writerDataFile(conent);
                         }
                    }
                }
            } else if ("delete".equals(type)) {
                holidayDate = arParam[1];//get name in real wkadd 20190624
                iRet = dao.delete(dao.conn, holidayDate);
                if (iRet >= 1) {
                    System.out.println("删除成功！");
                    if (dao.isSlave.equals(NsfConstants.IS_SLAVE_TRUE)) {
                        // 如果备机数据库连接不存在，则重新连接数据库
                        if (!dao.slaveIsConn()) {
                            dao.getSlaveConnection();
                        }
                        
                        if (dao.slaveIsConn()) {
                            iRet1 = dao.delete(dao.connSlave, holidayDate);
                            if (iRet1 != 1) {
                                System.out.println("删除备份数据库出错！");
                            }
                        } else {
                            System.out.println("备机数据库连接不存在！");
                        }
                        if (iRet1 != 1) {
                            // 备机同步失败，写以上1个SQL语句的E文本
                            String conent = this.deleteUserMange(holidayDate);
                            WriteFile.writerDataFile(conent);
                            }
                    }
                }
            } else if ("update".equals(type)) {
                holidayDate = arParam[1];
                holidayLength = arParam[3];
                holidayName = arParam[2];
                more = arParam[4];
                iRet = dao.update(dao.conn, holidayDate, holidayLength, holidayName,more);
                if (iRet >= 1) {
                    System.out.println("修改成功！");
                    if (dao.isSlave.equals(NsfConstants.IS_SLAVE_TRUE)) {
                        // 如果备机数据库连接不存在，则重新连接数据库
                        if (!dao.slaveIsConn()) {
                            dao.getSlaveConnection();
                        }
                        
                        if (dao.slaveIsConn()) {
                            iRet1 = dao.update(dao.connSlave, holidayDate, holidayLength, holidayName,more);
                            if (iRet1 != 1) {
                                System.out.println("修改备份数据库出错！");
                            }
                        } else {
                            System.out.println("备机数据库连接不存在！");
                        }
                        if (iRet1 != 1) {
                            // 备机同步失败，写以上1个SQL语句的E文本
                            String conent = this.updateUserManage(holidayDate, holidayLength, holidayName);
                            WriteFile.writerDataFile(conent);
                            }
                    }
                }
            } else if ("query".equals(type)) {
                holidayDate = arParam[1];
                more = arParam[2];
                iRet = dao.loginCheck(dao.conn, holidayDate, more);
                if (iRet >= 1) {
                    System.out.println("节假日已经存在！");
                    PrintWriter out = response.getWriter();
                    out.print("yes");
                }
            } 
        } else {
            System.out.println("主机数据库连接不存在！");
        }
        return null;
    }
    
    public String insertUserManage(String types, String rateCapacity, String hubheight, String windfarm_id) {
        StringBuffer writerSql = new StringBuffer(1024);
        writerSql.append("<InsertOperate>                                        \n");
        writerSql.append("<TableName>FD_DEF_TYPE</TableName>                     \n");
        writerSql.append("<TableFieldList>                                       \n");
        
        writerSql.append("      <TableField Name=\"TYPE\" Type=\"string\" />   \n");
        writerSql.append("      <TableField Name=\"RATECAPACITY\" Type=\"double\" /> \n");
        writerSql.append("      <TableField Name=\"HUBHEIGHT\" Type=\"int\" />   \n");
        writerSql.append("      <TableField Name=\"FARMID\" Type=\"int\" /> \n");
        
        writerSql.append("</TableFieldList>                                      \n");
        writerSql.append("<ValueParamList>                                       \n");
        writerSql.append("<ValueParam>                                           \n");
        
        writerSql.append("      <ValueElement Value=\"" + types + "\"/>         \n");
        writerSql.append("      <ValueElement Value=\"" + rateCapacity + "\"/>       \n");
        writerSql.append("      <ValueElement Value=\"" + hubheight + "\"/>      \n");
        writerSql.append("      <ValueElement Value=\"" + windfarm_id + "\"/>    \n");
        
        writerSql.append("</ValueParam>                                          \n");
        writerSql.append("</ValueParamList>                                      \n");
        writerSql.append("</InsertOperate>                                       \n\n");
        
        return writerSql.toString();
    }
    
    public String updateUserManage(String types, String ratecapacity, String hubheight) {
        StringBuffer writerSql = new StringBuffer(1024);
        writerSql.append("<UpdateOperate>                                        \n");
        writerSql.append("<TableName>FD_DEF_TYPE</TableName>                     \n");
        writerSql.append("<TableFieldList>                                       \n");
        
        writerSql.append("      <TableField Name=\"RATECAPACITY\" Type=\"double\" /> \n");
        writerSql.append("      <TableField Name=\"BESIMPLE\" Type=\"int\" />   \n");
        
        writerSql.append("</TableFieldList>                                      \n");
        writerSql.append("<ValueParamList>                                       \n");
        writerSql.append("<ValueParam>                                           \n");
        
        writerSql.append("      <ValueElement Value=\"" + ratecapacity + "\"/>       \n");
        writerSql.append("      <ValueElement Value=\"" + hubheight + "\"/>      \n");
        
        writerSql.append("</ValueParam>                                          \n");
        writerSql.append("</ValueParamList>                                      \n");
        writerSql.append("      <Condition> DISPATCHID=\"" + types + "\"</Condition>    \n");
        writerSql.append("</UpdateOperate>                                       \n\n");
        
        return writerSql.toString();
    }
    
    public String deleteUserMange(String dispatchid) {
        StringBuffer writerSql = new StringBuffer(1024);
        writerSql.append("<DeleteOperate>                                        \n");
        writerSql.append("<TableName>FD_DEF_TYPE</TableName>                     \n");
        writerSql.append("<Condition>DISPATCHID=" + dispatchid + "</Condition>               \n");
        writerSql.append("</DeleteOperate>                                       \n\n");
        return writerSql.toString();
    }
}







/**
 * 
 */
package com.narisq.ewis.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

import com.narisq.ewis.base.DBconnectionFactory;
import com.narisq.ewis.base.SuperDAO;

/**
 * @author Administrator
 * 
 */
public class HolidayDAO extends SuperDAO {

	public int insert(Connection curConn, String date, String name,
			String length, String more) throws SQLException {

		String strSql = "INSERT INTO "
				+ DBconnectionFactory.getInstance().getSchema()
				+ "FD_DEF_HOLIDAY  VALUES('"
				+ name + "',TO_DATE('" + date + "', 'yyyy-mm-dd')," + length + ","
				+ more + ")";

		int ret = 0;
		ResultSet rs = null;
		PreparedStatement curPs = null;
		try {
			curPs = curConn.prepareStatement(strSql);
			ret = curPs.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				closeStatment(curPs, rs);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return ret;
	}

	public int update(Connection curConn, String date, String length,
			String name, String more) throws SQLException {

		String strSql = "update  "
				+ DBconnectionFactory.getInstance().getSchema()
				+ "FD_DEF_HOLIDAY set length=" + length
				+ ",time=TO_DATE('"+date+"', 'yyyy-mm-dd')"  + ",more=" + more + " where name= '" + name + "'";

		int ret = 0;
		ResultSet rs = null;
		PreparedStatement curPs = null;
		try {
			curPs = curConn.prepareStatement(strSql);
			ret = curPs.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				closeStatment(curPs, rs);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return ret;
	}

	public int delete(Connection curConn, String type) throws SQLException {

		String strSql = "delete from "
				+ DBconnectionFactory.getInstance().getSchema()
				+ "FD_DEF_HOLIDAY where name='" + type + "'";

		int ret = 0;
		ResultSet rs = null;
		PreparedStatement curPs = null;
		try {
			curPs = curConn.prepareStatement(strSql);
			ret = curPs.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				closeStatment(curPs, rs);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return ret;
	}

	public int query(Connection curConn, String type) throws SQLException {

		String strSql = "select * from "
				+ DBconnectionFactory.getInstance().getSchema()
				+ "FD_DEF_HOLIDAY where type='" + type + "'";

		int ret = 0;
		ResultSet rs = null;
		PreparedStatement curPs = null;
		try {
			curPs = curConn.prepareStatement(strSql);
			rs = curPs.executeQuery();
			if (rs.next()) {
				return 1;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				closeStatment(curPs, rs);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return ret;
	}

	public String queryAll(Connection curConn, String windId)
			throws SQLException {
		String strSql = "select type from "
				+ DBconnectionFactory.getInstance().getSchema()
				+ "FD_DEF_TYPE  where windfarmid = " + windId
				+ " order by farmid";
		String str = "";
		ResultSet rs = null;
		PreparedStatement curPs = null;
		try {
			curPs = curConn.prepareStatement(strSql);
			rs = curPs.executeQuery();
			while (rs.next()) {
				str += rs.getString("type") + "##";
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				closeStatment(curPs, rs);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return str;
	}

	public int loginCheck(Connection curConn, String date, String windId)
			throws SQLException {

		String strSql = "select * from "
				+ DBconnectionFactory.getInstance().getSchema()
				+ "FD_DEF_HOLIDAY where Time = TO_DATE(?, 'yyyy-mm-dd') ";

		int ret = 0;
		ResultSet rs = null;
		PreparedStatement curPs = null;
		try {
			curPs = curConn.prepareStatement(strSql);
			curPs.setString(1, date);
			rs = curPs.executeQuery();
			if (rs.next()) {
				return 1;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				closeStatment(curPs, rs);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return ret;
	}
}

```
其他的增删改查的操作就是和前面的那个一样了，只是需要修改一下对应的ID。

目前为止的部分就完成了，不过还没有弄完，加载时候是通过另外的一个组件进行的查询了，因此还需要处理一下：

```
"<ECode Name="FDScheduleElement::DbQueryHoliday"><P E="Condition" UID="101" OP="MA" EN="" A="Value" V="58286000"/></ECode>"


	<ECode Name="DbQueryHoliday">
        <Component UID="101" Category="datacomponent" TimeOut="12000,12000"
                   ProxyRequest="false,101">
            <ParamXmlNode>
                <DataOperationNode>
                    <DataType Value="holidays" />
                    <ReturnDataSource NameList="holidays" />
                    <Fields DataSetCount="1">
                        <Field Name="Name" ConvertType="string" Header="假期名称"
                               ColumnIndex="0" DataSetIndex="0" />
                        <Field Name="to_char(Time,'yyyy-mm-dd')" ConvertType="string" Header="假期时间"
                               ColumnIndex="1" DataSetIndex="0" />
                        <Field Name="Length" ConvertType="double" Header="假日长度"
                               ColumnIndex="2" DataSetIndex="0" />
                        <Field Name="More" ConvertType="string" Header="备注信息"
                               ColumnIndex="3" DataSetIndex="0" />
                    </Fields>

                    <Condition Op="and">
                        <Condition UID="101" Field="1" Op="!=" Value="58001000"
                                   ValueType="int" />
                    </Condition>


                </DataOperationNode>
            </ParamXmlNode>
        </Component>
    </ECode>
	
	
	//最后加载数据
	 var requestConfig = {
        url : '../action/EwisDatalist',
        timeout : 60000,
        params : {
            DATAPARAM : value,
            Random : Math.round(Math.random() * 200)
        },
        success : function(response) {
            if (response.responseText !== undefined) {

                // 取出数据
                var responseObject = Ext.decode(response.responseText);
                var cm = generalGrid.createColumnModel(responseObject);
                var ds = generalGrid.createDS(responseObject);
                cm = new Ext.grid.ColumnModel(
                    [
                        {
                            header : '节假日',
                            dataIndex : '0'
                        },
                        {
                            header : '时间',
                            dataIndex : '1'
                            //renderer : function(value) {
                            //return "*******";
                            //}
                        }, {
                        header : '假期长度',
                        dataIndex : '2'

                        }, {
                            header : '备注',
                            dataIndex : '2'

                         } ]);
                displayDeal(cm, ds);

                if (Ext.getCmp('gridForm') != null)
                    Ext.getCmp('gridForm').destroy();

                gridForm = generalGrid.createUserGrid("gridForm", "", document
                    .getElementById("center").offsetHeight, document
                    .getElementById("center").offsetWidth, ds, cm, title);

            }
        },
        failure : function() {

            Ext.MessageBox.hide();
            alert("调用服务失败！");
        }
    }
```


这个部分完成，基本就全部完成了。

## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/java/2019/06/21/company-holiday-function/ )


### 参考博客

无

### 版本记录
20190611 需求分析

20190625 问题解决

20190916 完成文章
