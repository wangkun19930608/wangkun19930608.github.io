---
layout: default
title: 超短期预测断点部分解决
category: [Technology, Bug]
comments: true
---


# 文章背景
FJ的现场有个区域的位置的超短期预测出现断点的状况，需要解决，似乎过程记录如下。








# 目录

[TOC]









# 原因分析

通过分析发回来的现场的日志信息，发现缺少的超短期预测的部分，是因为一些预测的时间超过一分钟导致的，然后导致一个状态位没有重置，因此跳过了那个区间。

部分日志摘要如下：

```
 INFO [2018-10-12 16:30:13:750] [超短期预测线程] (FuJian_EFile.java:296)
           -生成超短期预测功率E文本成功！
DEBUG [2018-10-12 16:30:13:750] [超短期预测线程] (FuJian_EFile.java:297)
           -<!Entity=福建	type=新能源	time='2018-10-12 16:30:13'>
<system>
@	序号	地区	系统	可读时间
#	0	'福建'	'd5000'	'2018-10-12 16:30:13'
</system>
<EFJ_CDQ_RESULT_UP>
@	序号	标识ID	风场ID	上报日期	预测时间	值	值	值	值	值	值	值	值	值	值	值	值	值	值	值	值	SYS_DATE
#	1	1	113997366155018556	2018-10-12	2018-10-12 16:45:00	24.7757	24.9615	25.1913	25.4290	25.6678	25.9056	25.8834	25.8101	25.7369	25.6637	25.5085	25.3382	25.1670	24.9968	24.6356	24.2354	SYSDATE
</EFJ_CDQ_RESULT_UP>
####
 INFO [2018-10-12 16:30:25:177] [超短期预测线程] (FuJian_EFile.java:296)
           -生成超短期预测功率E文本成功！
DEBUG [2018-10-12 16:30:25:177] [超短期预测线程] (FuJian_EFile.java:297)
           -<!Entity=福建	type=新能源	time='2018-10-12 16:30:25'>
<system>
@	序号	地区	系统	可读时间
#	0	'福建'	'd5000'	'2018-10-12 16:30:25'
</system>
<EFJ_CDQ_RESULT_UP>
@	序号	标识ID	风场ID	上报日期	预测时间	值	值	值	值	值	值	值	值	值	值	值	值	值	值	值	值	SYS_DATE
#	1	1	113997366155018556	2018-10-12	2018-10-12 16:45:00	24.7757	24.9615	25.1913	25.4290	25.6678	25.9056	25.8834	25.8101	25.7369	25.6637	25.5085	25.3382	25.1670	24.9968	24.6356	24.2354	SYSDATE
</EFJ_CDQ_RESULT_UP>
####
 INFO [2018-10-12 16:30:43:052] [超短期预测线程] (FuJianOld_EFile.java:378)
           -生成超短期预测功率E文本成功！
DEBUG [2018-10-12 16:30:43:053] [超短期预测线程] (FuJianOld_EFile.java:379)
           -<UltraShortTermForcast::梅岭 time='2018-10-12_16:45' cap='48.0'>

@顺序	预测出力值	开机容量
#1	24.776	48.000
#2	24.961	48.000
#3	25.191	48.000
#4	25.429	48.000
#5	25.668	48.000
#6	25.906	48.000
#7	25.883	48.000
#8	25.810	48.000
#9	25.737	48.000
#10	25.664	48.000
#11	25.508	48.000
#12	25.338	48.000
#13	25.167	48.000
#14	24.997	48.000
#15	24.636	48.000
#16	24.235	48.000

</UltraShortTermForcast::梅岭>
####
 INFO [2018-10-12 16:30:59:030] [超短期预测线程] (UltraShortPlanThread.java:91)
           -本次超短期计算成功，耗时：178756毫秒
```

# 问题代码

代码接下来附上，从代码可以看到，计算时候，是通过获取时间时间的分钟数是否小于1重置标志位，然后到达指定时刻之后，来进行计算的，由于一些原因，不能整体更换代码，只能做一些小修改了。

```
while (Application.IsRunning()) {
			try {
				Calendar CurrentTime = Calendar.getInstance();
				int nCurrentMinute = CurrentTime.get(Calendar.MINUTE);
				int nMinuteOff = nCurrentMinute % CDQTIMEINTERVAL;
				if (nMinuteOff < 1) {
					m_UsCalced = false;
				}
				// 从第12分钟开始功率预测
				if (!(nMinuteOff < calculateOffsetTime) && (false == m_UsCalced)) {
					Application.m_Logger.info("开始进行超短期计算");
					StringList stringList = new StringList();
					WindFarmList farmList = ConfigMng.GetInstance().m_WindFarmList;
					for (WindFarm windfarm : farmList) {

						// 如果该风电场采用Wpfs解析的方式接入测风塔数据
						if (true == windfarm.towerFileCfgList.fileCheckOn) {

							for (FileNameCfg fileNameCfg : windfarm.towerFileCfgList) {
								String temp = "";
								int hour = CurrentTime.get(Calendar.HOUR);
								if (hour < 10)
									temp = "0" + hour;
								else
									temp = String.valueOf(hour);
								nCurrentMinute = (nCurrentMinute/CDQTIMEINTERVAL+1)*CDQTIMEINTERVAL - 
										RealtimeTowerThread.CFTTIMEINTERVAL*2;
								if (nCurrentMinute < 10)
									temp = temp + "0" + nCurrentMinute;
								else
									temp += String.valueOf(nCurrentMinute);
								stringList.add(fileNameCfg.strPreName + temp);
							}
							
							if (false == Application.isImportDataBase(stringList)) {
								
								Application.m_Logger.error("测风塔文件未入库： " + stringList);
							}
						}
					}
					
					long startTime = System.nanoTime();
					nCurrentMinute = CurrentTime.get(Calendar.MINUTE);
					CurrentTime.set(Calendar.MINUTE, 0);
					CurrentTime.set(Calendar.SECOND, 0);
					CurrentTime.set(Calendar.MILLISECOND, 0);
					if (true==advanceCalc) {
						
						CurrentTime.add(Calendar.MINUTE, (nCurrentMinute/CDQTIMEINTERVAL+1)*CDQTIMEINTERVAL);
					} else {
						
						CurrentTime.add(Calendar.MINUTE, (nCurrentMinute/CDQTIMEINTERVAL)*CDQTIMEINTERVAL);
					}
						
					m_UsCalced = Calculate(CurrentTime);
					long estimatedTime = (System.nanoTime() - startTime) / 1000000L;
					if (m_UsCalced) {
						Application.m_Logger.info("本次超短期计算成功，耗时："
								+ estimatedTime + "毫秒");
					} else {
						Application.m_Logger.info("本次超短期计算失败，耗时："
								+ estimatedTime + "毫秒");
					}
				}
				Application.ThreadSleep(10000);

			} catch (Exception e) {

				e.printStackTrace();
				Application.m_Logger.error(e, e);
				this.checkAccess();
			}
		}
```

# 解决方案

看懂了代码，想要解决这个问题，其实只要更改一个参数就行，把1分钟那儿改成，计算之前的时间都给重置标志位就行，

不过，和经理商讨之后，这段代码还是有点绕，让人难以理解，稍微改动了下，容易理解一些。

最后的代码如下：
```
while (Application.IsRunning()) {
			try {

				Calendar CurrentTime = Calendar.getInstance();

				int nCurrentMinute = CurrentTime.get(Calendar.MINUTE);
				int nMinuteOff = nCurrentMinute % CDQTIMEINTERVAL;

				if (nMinuteOff < 1 ||nMinuteOff < calculateOffsetTime) {//"第一分钟做标记"
				//if (nMinuteOff < 1) {//"第一分钟做标记"

					m_UsCalced = false;
				}
				// 从第12分钟开始功率预测
				if (!(nMinuteOff < calculateOffsetTime) && (false == m_UsCalced)) {

					Application.m_Logger.info("开始进行超短期计算");

					StringList stringList = new StringList();
					WindFarmList farmList = ConfigMng.GetInstance().m_WindFarmList;
					for (WindFarm windfarm : farmList) {

						// 如果该风电场采用Wpfs解析的方式接入测风塔数据
						if (true == windfarm.towerFileCfgList.fileCheckOn) {

							for (FileNameCfg fileNameCfg : windfarm.towerFileCfgList) {
								String temp = "";
								int hour = CurrentTime.get(Calendar.HOUR);
								if (hour < 10)
									temp = "0" + hour;
								else
									temp = String.valueOf(hour);
								nCurrentMinute = (nCurrentMinute/CDQTIMEINTERVAL+1)*CDQTIMEINTERVAL - 
										RealtimeTowerThread.CFTTIMEINTERVAL*2;
								if (nCurrentMinute < 10)
									temp = temp + "0" + nCurrentMinute;
								else
									temp += String.valueOf(nCurrentMinute);
								stringList.add(fileNameCfg.strPreName + temp);
							}
							
							if (false == Application.isImportDataBase(stringList)) {
								
								Application.m_Logger.error("测风塔文件未入库： " + stringList);
							}
						}
					}
					
					long startTime = System.nanoTime();
					nCurrentMinute = CurrentTime.get(Calendar.MINUTE);
					CurrentTime.set(Calendar.MINUTE, 0);
					CurrentTime.set(Calendar.SECOND, 0);
					CurrentTime.set(Calendar.MILLISECOND, 0);
					if (true==advanceCalc) {
						
						CurrentTime.add(Calendar.MINUTE, (nCurrentMinute/CDQTIMEINTERVAL+1)*CDQTIMEINTERVAL);
					} else {
						
						CurrentTime.add(Calendar.MINUTE, (nCurrentMinute/CDQTIMEINTERVAL)*CDQTIMEINTERVAL);
					}
						
					m_UsCalced = Calculate(CurrentTime);
					long estimatedTime = (System.nanoTime() - startTime) / 1000000L;
					if (m_UsCalced) {
						Application.m_Logger.info("本次超短期计算成功，耗时："
								+ estimatedTime + "毫秒");
					} else {
						Application.m_Logger.info("本次超短期计算失败，耗时："
								+ estimatedTime + "毫秒");
					}
				}

				Application.ThreadSleep(10000);

			} catch (Exception e) {

				e.printStackTrace();
				Application.m_Logger.error(e, e);
				this.checkAccess();
			}
		}
```
# 测试

测试就只是烤机了，毕竟逻辑上面是通的，也不应该有异常数据了。

然而不行的是10.24，10.25，烤机是从10.23开始的，这个是什么鬼？

结果分析日志发现，24和25中午莫名所有程序停止，下意识的问下是不是谁在中午休息时候懂了电脑的休眠按钮。
一问还真是。。。然后发现还有一段时间也存在休眠的状况，然后其他时间一切正常了。

测试基本这样子就完毕了，只等测试到最后时间发到现场了。





# 说明

这份程序不是最新版本的程序，一些老的需要优化的就没动了，毕竟已经在新版本上面弄了，重复劳动太心累了。


[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/bug/2018/10/23/company-ultra/ )

## 参考文章

无

## 版本记录

20181023 完成文章

20181026 添加测试部分


