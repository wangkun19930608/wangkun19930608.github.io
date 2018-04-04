---
layout: default
title: 高效搜索
category: [技术, 安全]
comments: true
---

## 背景介绍
之前看到过类似的文章,但是已经忘记出处在哪儿了.今天看到这个就收藏了下了.对于快速搜索信息帮助很大!



## 文章内容
黑客去入侵一个网站的时候往往需要搜集它的很多信息，这其中包括利用网站漏洞，社工，还有就是用搜索引擎进行搜索，而常被我们利用的搜索网站——谷歌就是一个非常好的信息搜索工具，下面就给大家普及一下谷歌搜索的技巧。



### Google高级预定义搜索语法如下：

intitle：表示搜索在网页标题中出现第一个关键词的网页。例如"intitle:黑客技术 "将返回在标题中出现"黑客技术 "的所有链接。 用"allintitle: 黑客技术 Google"则会返回网页标题中同时含有 "黑客技术" 和 "Google" 的链接。

intext：返回网页的文本中出现关键词的网页。用allintext:搜索多个关键字。

inurl：返回的网页链接中包含第一个关键字的网页。

site：在某个限定的网站中搜索。

filetype：搜索特定扩展名的文件（如.doc .pdf .ppt）。黑客们往往会关注特定的文件，例如：.pwl口令文件、.tmp临时文件、.cfg配置文件、.ini系统文件、.hlp帮助文件、.dat数据文件、.log日志文件、.par交换文件等等。

link：表示返回所有链接到某个地址的网页。

related：返回连接到类似于指定网站的网页。

cache：搜索Google缓存中的网页。

info：表示搜索网站的摘要。例如"info:whu.edu.cn"仅得到一个结果。

phonebook：搜索电话号码簿，将会返回美国街道地址和电话号码列表，这无疑给挖掘个人信息的黑客带来极大的便利。

同时还可以得到住宅的全面信息，结合Google earth将会得到更详细的信息。相应的还有更小的分类搜索：

rphonebook：仅搜索住宅用户电话号码簿；

bphonebook：仅搜索商业的电话号码簿。

![img1](https://www.77169.com/wp-content/uploads/2018/04/QQ%E5%9B%BE%E7%89%8720180404084744.png)

### 另外，还有一些不常用的搜索指令。例如列表如下：

author：搜索新闻组帖子的作者。

group：搜索Google组搜索词汇帖子的题目。

msgid：搜索识别新闻组帖子的Google组信息标识符和字符串。

insubject：搜索Google组的标题行。

stocks：搜索有关一家公司的股票市场信息。

define：返回一个搜索词汇的定义。

inanchor：搜索一个HTML标记中的一个链接的文本表现形式。

daterange：搜索某个日期范围内Google做索引的网页。

### Google hacking常见的攻击规律

Google hacking主要是发现那些公告文件，安全漏洞，错误信息， 口令文件， 用户文件， 演示页面，登录页面， 安全文件， 敏感目录，商业信息，漏洞主机， 网站服务器检测等信息。攻击规律有：

* 利用"Index of"语法检索出站点的活动索引目录

Index 就是主页服务器所进行操作的一个索引目录。黑客们常利用目录获取密码文件和其他安全文件。常用的攻击语法如下：

Index of /admin 可以挖掘到安全意识不强的管理员的机密文件：

黑客往往可以快速地提取他所要的信息，其他Index of 语法列表如下：

```
Index of /passwd
Index of /password
Index of /mail
"Index of /" +passwd
"Index of /" +password.txt
"Index of /" +.htaccess
"Index of /secret"
"Index of /confidential"
"Index of /root"
"Index of /cgi-bin"
"Index of /credit-card"
"Index of /logs"
"Index of /config"
```

* 利用"inurl:"寻找易攻击的站点和服务器

（1）利用"allinurl:winnt/system32/"寻找受限目录"system32"，一旦具备 cmd.exe 执行权限，就可以控制远程的服务器。

（2）利用"allinurl:wwwboard/passwd.txt"搜寻易受攻击的服务器。

（3）利用"inurl:.bash_history"搜寻服务器的".bash_history"文件。这个文件包括超级管理员的执行命令，甚至一些敏感信息，如管理员口令序列等。

（4）利用"inurl:config.txt"搜寻服务器的"config.txt"文件，这个文件包括管理员密码和数据认证签名的hash值。

（5）其他语法的搜索。

```
inurl:admin filetype:txt
inurl:admin filetype:db
inurl:admin filetype:cfg
inurl:mysql filetype:cfg
inurl:passwd filetype:txt
inurl:iisadmin
allinurl:/scripts/cart32.exe
allinurl:/CuteNews/show_archives.php
allinurl:/phpinfo.php
allinurl:/privmsg.php
allinurl:/privmsg.php
inurl:auth_user_file.txt
inurl:orders.txt
inurl:"wwwroot/*."
inurl:adpassword.txt
inurl:webeditor.php
inurl:file_upload.php
inurl:gov filetype:xls "restricted"
index of ftp +.mdb allinurl:/cgi-bin/ +mailto
```

* 利用"intitle:"寻找易攻击的站点或服务器

（1）利用 intitle:"php shell*" "Enable stderr" filetype:php查找安装了php webshell后门的主机，并测试是否有能够直接在机器上执行命令的web shell。（ http://worldispnetwork.com/phpinfo.php）

（2）利用allintitle:"index of /admin"搜寻服务器的受限目录入口"admin"。
上面是一些简单容易了解记忆的搜索技巧，关于谷歌的搜索技巧还有很多，有兴趣的可以网上找找这类语法记住，这些技巧对你以后的黑客学习过程中有很大的作用。




## 说明
写这篇文章是了记录一些搜索资料的方法,以备后面随时需要.文章针对大多数引擎都适用,只是效果可能会有些许不同.

上面的搜索语法是谷歌搜索的，我们可以用百度搜一下也会有部分信息，有条件的可以直接用谷歌进行搜索。

文章摘自微信公众号：计算机与网络安全

这篇日志的 t.cn 短域名为：http://t.cn/Rm7O6cc
转载请注明来自华盟网，本文标题：《黑客怎样用谷歌查找信息？》


参考文章 

黑客怎样用谷歌查找信息？ | 华盟网
https://www.77169.com/html/201612.html