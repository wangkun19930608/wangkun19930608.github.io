---
layout: default
title: 代码数字
category: [技术, 编码]
comments: true
---

## 文章介绍
有时候长时间没有使用一些代码,然后就忘记了.这里整理一下之后,方便后面随时查阅,如果有需要添加的,可以随时评论下.


## ASCII介绍



### ASCII产生
在计算机中，所有的数据在存储和运算时都要使用二进制数表示（因为计算机用高电平和低电平分别表示1和0），例如，像a、b、c、d这样的52个字母（包括大写）、以及0、1等数字还有一些常用的符号（例如*、#、@等）在计算机中存储时也要使用二进制数来表示，而具体用哪些二进制数字表示哪个符号，当然每个人都可以约定自己的一套（这就叫编码），而大家如果要想互相通信而不造成混乱，那么大家就必须使用相同的编码规则，于是美国有关的标准化组织就出台了ASCII编码，统一规定了上述常用符号用哪些二进制数来表示。 

美国标准信息交换代码是由美国国家标准学会(American National Standard Institute , ANSI )制定的，标准的单字节字符编码方案，用于基于文本的数据。起始于50年代后期，在1967年定案。它最初是美国国家标准，供不同计算机在相互通信时用作共同遵守的西文字符编码标准，它已被国际标准化组织（International Organization for Standardization, ISO）定为国际标准，称为ISO 646标准。适用于所有拉丁文字字母。 

### 表达方式
ASCII 码使用指定的7 位或8 位二进制数组合来表示128 或256 种可能的字符。标准ASCII 码也叫基础ASCII码，使用7 位二进制数（剩下的1位二进制为0）来表示所有的大写和小写字母，数字0 到9、标点符号， 以及在美式英语中使用的特殊控制字符。其中：

0～31及127(共33个)是控制字符或通信专用字符（其余为可显示字符），如控制符：LF（换行）、CR（回车）、FF（换页）、DEL（删除）、BS（退格)、BEL（响铃）等；通信专用字符：SOH（文头）、EOT（文尾）、ACK（确认）等；ASCII值为8、9、10 和13 分别转换为退格、制表、换行和回车字符。它们并没有特定的图形显示，但会依不同的应用程序，而对文本显示有不同的影响。

32～126(共95个)是字符(32是空格），其中48～57为0到9十个阿拉伯数字。

65～90为26个大写英文字母，97～122号为26个小写英文字母，其余为一些标点符号、运算符号等。

同时还要注意，在标准ASCII中，其最高位(b7)用作奇偶校验位。所谓奇偶校验，是指在代码传送过程中用来检验是否出现错误的一种方法，一般分奇校验和偶校验两种。奇校验规定：正确的代码一个字节中1的个数必须是奇数，若非奇数，则在最高位b7添1；偶校验规定：正确的代码一个字节中1的个数必须是偶数，若非偶数，则在最高位b7添1。

后128个称为扩展ASCII码。许多基于x86的系统都支持使用扩展（或“高”）ASCII。扩展ASCII 码允许将每个字符的第8 位用于确定附加的128 个特殊符号字符、外来语字母和图形符号。

ASCII（American Standard Code for Information Interchange，美国信息交换标准代码）是基于拉丁字母的一套电脑编码系统，主要用于显示现代英语和其他西欧语言。它是现今最通用的单字节编码系统，并等同于国际标准ISO/IEC 646。 

请注意，ASCII是American Standard Code for Information Interchange缩写，而不是ASCⅡ(罗马数字2)，有很多人在这个地方产生误解。


### 大小规则
数字的ASCII码<大写字母的ASCII码<小写字母的ASCII码。 

### 查询ASCII技巧
方便查询ASCII码对应的字符：新建一个文本文档，按住ALT+要查询的码值（注意，这里是十进制），松开即可显示出对应字符。例如：按住ALT+97,则会显示出'a'。

### 国际问题
ASCII是美国标准，所以它不能良好满足其它讲英语国家的需要。例如英国的英镑符号（￡）在哪里？

拉丁语字母表重音符号

使用斯拉夫字母表的希腊语、希伯来语、阿拉伯语和俄语。

汉字系统的中国象形汉字，日本和朝鲜。

1967年，国际标准化组织（ISO：International Standards Organization）推荐一个ASCII的变种，

代码0x40、0x5B、0x5C、0x5D、0x7B、0x7C和0x7D“为国家使用保留”，而代码0x5E、0x60和0x7E标为

“当国内要求的特殊字符需要8、9或10个空间位置时，可用于其它图形符号”。 

### 扩展ASCII历史
1981年IBM PC ROM256个字符的字符集，即IBM扩展字符集

1985年11 Windows字符集被称作“ANSI字符集”，遵循了ANSI草案和ISO标准（ANSI/ISO8859-1-1987，简“Latin 1”。

1987年4月代码页437,字符的映像代码，在MS-DOS3.3出现。

扩展ASCII 字符是从128 到255（0x80-0xff）的字符。 [6] 

扩展ASCII不再是国际标准。

### 双字节
双字节字符集（DBCS：double-byte character set）,解决中国、日本和韩国的象形文字符和ASCII的某种兼容性。

DBCS从256代码开始，就像ASCII一样。与任何行为良好的代码页一样，最初的128个代码是ASCII。

然而，较高的128个代码中的某些总是跟随着第二个字节。

这两个字节一起（称作首字节和跟随字节）定义一个字符，通常是一个复杂的象形文字。

## 代码表
### ASCII标准表

Bin(二进制)	|	Oct(八进制)	|	Dec(十进制)	|	Hex(十六进制)	|	缩写/字符	|	解释
------------|---------------|---------------|-------------------|---------------|------------
0000 0000	|	0	|	0	|	0	|	NUL(null)	|	空字符
0000 0001	|	1	|	1	|	1	|	SOH(start of headline)	|	标题开始
0000 0010	|	2	|	2	|	2	|	STX (start of text)	|	正文开始
0000 0011	|	3	|	3	|	3	|	ETX (end of text)	|	正文结束
0000 0100	|	4	|	4	|	4	|	EOT (end of transmission)	|	传输结束
0000 0101	|	5	|	5	|	5	|	ENQ (enquiry)	|	请求
0000 0110	|	6	|	6	|	6	|	ACK (acknowledge)	|	收到通知
0000 0111	|	7	|	7	|	7	|	BEL (bell)	|	响铃
0000 1000	|	10	|	8	|	8	|	BS (backspace)	|	退格
0000 1001	|	11	|	9	|	9	|	HT (horizontal tab)	|	水平制表符
0000 1010	|	12	|	10	|	0A	|	LF (NL line feed, new line)	|	换行键
0000 1011	|	13	|	11	|	0B	|	VT (vertical tab)	|	垂直制表符
0000 1100	|	14	|	12	|	0C	|	FF (NP form feed, new page)	|	换页键
0000 1101	|	15	|	13	|	0D	|	CR (carriage return)	|	回车键
0000 1110	|	16	|	14	|	0E	|	SO (shift out)	|	不用切换
0000 1111	|	17	|	15	|	0F	|	SI (shift in)	|	启用切换
0001 0000	|	20	|	16	|	10	|	DLE (data link escape)	|	数据链路转义
0001 0001	|	21	|	17	|	11	|	DC1 (device control 1)	|	设备控制1
0001 0010	|	22	|	18	|	12	|	DC2 (device control 2)	|	设备控制2
0001 0011	|	23	|	19	|	13	|	DC3 (device control 3)	|	设备控制3
0001 0100	|	24	|	20	|	14	|	DC4 (device control 4)	|	设备控制4
0001 0101	|	25	|	21	|	15	|	NAK (negative acknowledge)	|	拒绝接收
0001 0110	|	26	|	22	|	16	|	SYN (synchronous idle)	|	同步空闲
0001 0111	|	27	|	23	|	17	|	ETB (end of trans. block)	|	结束传输块
0001 1000	|	30	|	24	|	18	|	CAN (cancel)	|	取消
0001 1001	|	31	|	25	|	19	|	EM (end of medium)	|	媒介结束
0001 1010	|	32	|	26	|	1A	|	SUB (substitute)	|	代替
0001 1011	|	33	|	27	|	1B	|	ESC (escape)	|	换码(溢出)
0001 1100	|	34	|	28	|	1C	|	FS (file separator)	|	文件分隔符
0001 1101	|	35	|	29	|	1D	|	GS (group separator)	|	分组符
0001 1110	|	36	|	30	|	1E	|	RS (record separator)	|	记录分隔符
0001 1111	|	37	|	31	|	1F	|	US (unit separator)	|	单元分隔符
0010 0000	|	40	|	32	|	20	|	(space)	|	空格
0010 0001	|	41	|	33	|	21	|	!	|	叹号
0010 0010	|	42	|	34	|	22	|	"	|	双引号
0010 0011	|	43	|	35	|	23	|	#	|	井号
0010 0100	|	44	|	36	|	24	|	$	|	美元符
0010 0101	|	45	|	37	|	25	|	%	|	百分号
0010 0110	|	46	|	38	|	26	|	&	|	和号
0010 0111	|	47	|	39	|	27	|	'	|	闭单引号
0010 1000	|	50	|	40	|	28	|	(	|	开括号
0010 1001	|	51	|	41	|	29	|	)	|	闭括号
0010 1010	|	52	|	42	|	2A	|	*	|	星号
0010 1011	|	53	|	43	|	2B	|	+	|	加号
0010 1100	|	54	|	44	|	2C	|	,	|	逗号
0010 1101	|	55	|	45	|	2D	|	-	|	减号/破折号
0010 1110	|	56	|	46	|	2E	|	.	|	句号
101111	|	57	|	47	|	2F	|	/	|	斜杠
110000	|	60	|	48	|	30	|	0	|	数字0
110001	|	61	|	49	|	31	|	1	|	数字1
110010	|	62	|	50	|	32	|	2	|	数字2
110011	|	63	|	51	|	33	|	3	|	数字3
110100	|	64	|	52	|	34	|	4	|	数字4
110101	|	65	|	53	|	35	|	5	|	数字5
110110	|	66	|	54	|	36	|	6	|	数字6
110111	|	67	|	55	|	37	|	7	|	数字7
111000	|	70	|	56	|	38	|	8	|	数字8
111001	|	71	|	57	|	39	|	9	|	数字9
111010	|	72	|	58	|	3A	|	:	|	冒号
111011	|	73	|	59	|	3B	|	;	|	分号
111100	|	74	|	60	|	3C	|	<	|	小于
111101	|	75	|	61	|	3D	|	=	|	等号
111110	|	76	|	62	|	3E	|	>	|	大于
111111	|	77	|	63	|	3F	|	?	|	问号
1000000	|	100	|	64	|	40	|	@	|	电子邮件符号
1000001	|	101	|	65	|	41	|	A	|	大写字母A
1000010	|	102	|	66	|	42	|	B	|	大写字母B
1000011	|	103	|	67	|	43	|	C	|	大写字母C
1000100	|	104	|	68	|	44	|	D	|	大写字母D
1000101	|	105	|	69	|	45	|	E	|	大写字母E
1000110	|	106	|	70	|	46	|	F	|	大写字母F
1000111	|	107	|	71	|	47	|	G	|	大写字母G
1001000	|	110	|	72	|	48	|	H	|	大写字母H
1001001	|	111	|	73	|	49	|	I	|	大写字母I
1001010	|	112	|	74	|	4A	|	J	|	大写字母J
1001011	|	113	|	75	|	4B	|	K	|	大写字母K
1001100	|	114	|	76	|	4C	|	L	|	大写字母L
1001101	|	115	|	77	|	4D	|	M	|	大写字母M
1001110	|	116	|	78	|	4E	|	N	|	大写字母N
1001111	|	117	|	79	|	4F	|	O	|	大写字母O
1010000	|	120	|	80	|	50	|	P	|	大写字母P
1010001	|	121	|	81	|	51	|	Q	|	大写字母Q
1010010	|	122	|	82	|	52	|	R	|	大写字母R
1010011	|	123	|	83	|	53	|	S	|	大写字母S
1010100	|	124	|	84	|	54	|	T	|	大写字母T
1010101	|	125	|	85	|	55	|	U	|	大写字母U
1010110	|	126	|	86	|	56	|	V	|	大写字母V
1010111	|	127	|	87	|	57	|	W	|	大写字母W
1011000	|	130	|	88	|	58	|	X	|	大写字母X
1011001	|	131	|	89	|	59	|	Y	|	大写字母Y
1011010	|	132	|	90	|	5A	|	Z	|	大写字母Z
1011011	|	133	|	91	|	5B	|	[	|	开方括号
1011100	|	134	|	92	|	5C	|	\	|	反斜杠
1011101	|	135	|	93	|	5D	|	]	|	闭方括号
1011110	|	136	|	94	|	5E	|	^	|	脱字符
1011111	|	137	|	95	|	5F	|	_	|	下划线
1100000	|	140	|	96	|	60	|	`	|	开单引号
1100001	|	141	|	97	|	61	|	a	|	小写字母a
1100010	|	142	|	98	|	62	|	b	|	小写字母b
1100011	|	143	|	99	|	63	|	c	|	小写字母c
1100100	|	144	|	100	|	64	|	d	|	小写字母d
1100101	|	145	|	101	|	65	|	e	|	小写字母e
1100110	|	146	|	102	|	66	|	f	|	小写字母f
1100111	|	147	|	103	|	67	|	g	|	小写字母g
1101000	|	150	|	104	|	68	|	h	|	小写字母h
1101001	|	151	|	105	|	69	|	i	|	小写字母i
1101010	|	152	|	106	|	6A	|	j	|	小写字母j
1101011	|	153	|	107	|	6B	|	k	|	小写字母k
1101100	|	154	|	108	|	6C	|	l	|	小写字母l
1101101	|	155	|	109	|	6D	|	m	|	小写字母m
1101110	|	156	|	110	|	6E	|	n	|	小写字母n
1101111	|	157	|	111	|	6F	|	o	|	小写字母o
1110000	|	160	|	112	|	70	|	p	|	小写字母p
1110001	|	161	|	113	|	71	|	q	|	小写字母q
1110010	|	162	|	114	|	72	|	r	|	小写字母r
1110011	|	163	|	115	|	73	|	s	|	小写字母s
1110100	|	164	|	116	|	74	|	t	|	小写字母t
1110101	|	165	|	117	|	75	|	u	|	小写字母u
1110110	|	166	|	118	|	76	|	v	|	小写字母v
1110111	|	167	|	119	|	77	|	w	|	小写字母w
1111000	|	170	|	120	|	78	|	x	|	小写字母x
1111001	|	171	|	121	|	79	|	y	|	小写字母y
1111010	|	172	|	122	|	7A	|	z	|	小写字母z
1111011	|	173	|	123	|	7B	|	{	|	开花括号
1111100	|	174	|	124	|	7C	|	&#124;	|	垂线
1111101	|	175	|	125	|	7D	|	}	|	闭花括号
1111110	|	176	|	126	|	7E	|	~	|	波浪号
1111111	|	177	|	127	|	7F	|	DEL (delete)	|	删除


### 标准键盘码

ESC键VK_ESCAPE (27)

回车键：VK_RETURN (13)

TAB键：VK_TAB (9)

Caps Lock键：VK_CAPITAL (20)

Shift键：VK_SHIFT (16)

Ctrl键：VK_CONTROL (17)

Alt键：VK_MENU (18)

空格键：VK_SPACE (32)

退格键：VK_BACK (8)

左徽标键：VK_LWIN (91)

右徽标键：VK_RWIN (92)

鼠标右键快捷键：VK_APPS (93)

Insert键：VK_INSERT (45)

Home键：VK_HOME (36)

Page Up：VK_PRIOR (33)

PageDown：VK_NEXT (34)

End键：VK_END (35)

Delete键：VK_DELETE (46)

方向键(←)：VK_LEFT (37)

方向键(↑)：VK_UP (38)

方向键(→)：VK_RIGHT (39)

方向键(↓)：VK_DOWN (40)

F1键：VK_F1 (112)

F2键：VK_F2 (113)

F3键：VK_F3 (114)

F4键：VK_F4 (115)

F5键：VK_F5 (116)

F6键：VK_F6 (117)

F7键：VK_F7 (118)

F8键：VK_F8 (119)

F9键：VK_F9 (120)

F10键：VK_F10 (121)

F11键：VK_F11 (122)

F12键：VK_F12 (123)

Num Lock键：VK_NUMLOCK (144)

小键盘0：VK_NUMPAD0 (96)

小键盘1：VK_NUMPAD1 (97)

小键盘2：VK_NUMPAD2 (98)

小键盘3：VK_NUMPAD3 (99)

小键盘4：VK_NUMPAD4 (100)


小键盘5：VK_NUMPAD5 (101)

小键盘6：VK_NUMPAD6 (102)

小键盘7：VK_NUMPAD7 (103)

小键盘8：VK_NUMPAD8 (104)


小键盘9：VK_NUMPAD9 (105)

小键盘。：VK_DECIMAL (110)

小键盘*：VK_MULTIPLY (106)

小键盘+：VK_ADD (107)

小键盘-：VK_SUBTRACT (109)


小键盘/：VK_DIVIDE (111)

Pause Break键：VK_PAUSE (19)

Scroll Lock键：VK_SCROLL (145)

### qwe键盘,abc键盘对照表

A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z
-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-
Q|W|E|R|T|Y|U|I|O|P|A|S|D|F|G|H|J|K|L|Z|X|C|V|B|N|M

### 九宫键盘对照表

|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|
--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--
21|22|23|31|32|33|41|42|43|51|52|53|61|62|63|71|72|73|74|81|82|83|91|92|93|94

### 莫尔斯电码

#### 字母

字符	|	电码符号	|	字符	|	电码符号	|	字符	|	电码符号	|	字符	|	电码符号
-	|	-	|	-	|	-	|	-	|	-	|	-	|	-
A	|	．━	|	B	|	━ ．．．	|	C	|	━ ．━ ．	|	D	|	━ ．．
E	|	．	|	F	|	．．━ ．	|	G	|	━ ━ ．	|	H	|	．．．．
I	|	．．	|	J	|	．━ ━ ━	|	K	|	━ ．━	|	L	|	．━ ．．
M	|	━ ━	|	N	|	━ ．	|	O	|	━ ━ ━	|	P	|	．━ ━ ．
Q	|	━ ━ ．━	|	R	|	．━ ．	|	S	|	．．．	|	T	|	━
U	|	．．━	|	V	|	．．．━	|	W	|	．━ ━	|	X	|	━ ．．━
Y	|	━ ．━ ━	|	Z	|	━ ━ ．．	|		|		|		|	

#### 数字

字符	|	电码符号	|	字符	|	电码符号	|	字符	|	电码符号	|	字符	|	电码符号
-	|	-	|	-	|	-	|	-	|	-	|	-	|	-
0	|	━ ━ ━ ━ ━	|	1	|	．━ ━ ━ ━	|	2	|	．．━ ━ ━	|	3	|	．．．━ ━
4	|	．．．．━	|	5	|	．．．．．	|	6	|	━ ．．．．	|	7	|	━ ━ ．．．
8	|	━ ━ ━ ．．	|	9	|	━ ━ ━ ━ ．	|		|		|		|	

#### 符号

字符	|	电码符号	|	字符	|	电码符号	|	字符	|	电码符号	|	字符	|	电码符号
-	|	-	|	-	|	-	|	-	|	-	|	-	|	-
.	|	．━ ．━ ．━	|	:	|	━ ━ ━ ．．．	|	,	|	━ ━ ．．━ ━	|	;	|	━ ．━ ．━ ．
?	|	．．━ ━ ．．	|	=	|	━ ．．．━	|	'	|	．━ ━ ━ ━ ．	|	/	|	━ ．．━ ．
!	|	━ ．━ ．━ ━	|	━	|	━ ．．．．━	|	_	|	．．━ ━ ．━	|	"	|	．━ ．．━ ．
(	|	━ ．━ ━ ．	|	)	|	━ ．━ ━ ．━	|	$	|	．．．━ ．．━	|	&	|	． ．．．
@	|	．━ ━ ．━ ．	|		|		|		|		|		|	

### HTML颜色

#### 颜色值

HTML 颜色由一个十六进制符号来定义，这个符号由红色、绿色和蓝色的值组成（RGB）。
每种颜色的最小值是0（十六进制：#00）。最大值是255（十六进制：#FF）。
这个表格给出了由三种颜色混合而成的具体效果：

<table class="reference notranslate">
  <tbody><tr>
    <th xstyle="background-color:white" width="50%">颜色(Color)</th>
    <th xstyle="background-color:white" width="25%">颜色十六进制(Color HEX)</th>
    <th xstyle="background-color:white" width="25%">颜色RGB(Color RGB)</th>
  </tr>
  <tr>
    <td bgcolor="#000000">&nbsp;</td>
    <td>#000000</td>
    <td>rgb(0,0,0)</td>
  </tr>
  <tr>
    <td bgcolor="#FF0000">&nbsp;</td>
    <td>#FF0000</td>
    <td>rgb(255,0,0)</td>
  </tr>
  <tr>
    <td bgcolor="#00FF00">&nbsp;</td>
    <td>#00FF00</td>
    <td>rgb(0,255,0)</td>
  </tr>
  <tr>
    <td bgcolor="#0000FF">&nbsp;</td>
    <td>#0000FF</td>
    <td>rgb(0,0,255)</td>
  </tr>
  <tr>
    <td bgcolor="#FFFF00">&nbsp;</td>
    <td>#FFFF00</td>
    <td>rgb(255,255,0)</td>
  </tr>
  <tr>
    <td bgcolor="#00FFFF">&nbsp;</td>
    <td>#00FFFF</td>
    <td>rgb(0,255,255)</td>
  </tr>
  <tr>
    <td bgcolor="#FF00FF">&nbsp;</td>
    <td>#FF00FF</td>
    <td>rgb(255,0,255)</td>
  </tr>
  <tr>
    <td bgcolor="#C0C0C0">&nbsp;</td>
    <td>#C0C0C0</td>
    <td>rgb(192,192,192)</td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF">&nbsp;</td>
    <td>#FFFFFF</td>
    <td>rgb(255,255,255)</td>
  </tr>
</tbody></table>

#### 颜色名

仅有 16 种颜色名被 W3C 的 HTML 4.0 标准支持，它们是：aqua、black、blue、fuchsia、gray、green、lime、maroon、navy、olive、purple、red、silver、teal、white、yellow。

如果使用其它颜色的话，就应该使用十六进制的颜色值。

单击一个颜色名或者 16 进制值，就可以查看与不同文字颜色搭配的背景颜色。[(跳转至原W3C学院)](http://www.w3school.com.cn/)

<table class="dataintable">
<tbody><tr>
<th width="25%">颜色名</th>
<th width="25%">十六进制颜色值</th>
<th width="50%">颜色</th>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=AliceBlue">AliceBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=F0F8FF">#F0F8FF</a></td>
<td style="background-color:#F0F8FF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=AntiqueWhite">AntiqueWhite</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FAEBD7">#FAEBD7</a></td>
<td style="background-color:#FAEBD7">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Aqua">Aqua</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=00FFFF">#00FFFF</a></td>
<td style="background-color:#00FFFF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Aquamarine">Aquamarine</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=7FFFD4">#7FFFD4</a></td>
<td style="background-color:#7FFFD4">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Azure">Azure</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=F0FFFF">#F0FFFF</a></td>
<td style="background-color:#F0FFFF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Beige">Beige</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=F5F5DC">#F5F5DC</a></td>
<td style="background-color:#F5F5DC">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Bisque">Bisque</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFE4C4">#FFE4C4</a></td>
<td style="background-color:#FFE4C4">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Black">Black</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=000000">#000000</a></td>
<td style="background-color:#000000">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=BlanchedAlmond">BlanchedAlmond</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFEBCD">#FFEBCD</a></td>
<td style="background-color:#FFEBCD">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Blue">Blue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=0000FF">#0000FF</a></td>
<td style="background-color:#0000FF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=BlueViolet">BlueViolet</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=8A2BE2">#8A2BE2</a></td>
<td style="background-color:#8A2BE2">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Brown">Brown</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=A52A2A">#A52A2A</a></td>
<td style="background-color:#A52A2A">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=BurlyWood">BurlyWood</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=DEB887">#DEB887</a></td>
<td style="background-color:#DEB887">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=CadetBlue">CadetBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=5F9EA0">#5F9EA0</a></td>
<td style="background-color:#5F9EA0">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Chartreuse">Chartreuse</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=7FFF00">#7FFF00</a></td>
<td style="background-color:#7FFF00">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Chocolate">Chocolate</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=D2691E">#D2691E</a></td>
<td style="background-color:#D2691E">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Coral">Coral</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FF7F50">#FF7F50</a></td>
<td style="background-color:#FF7F50">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=CornflowerBlue">CornflowerBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=6495ED">#6495ED</a></td>
<td style="background-color:#6495ED">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Cornsilk">Cornsilk</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFF8DC">#FFF8DC</a></td>
<td style="background-color:#FFF8DC">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Crimson">Crimson</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=DC143C">#DC143C</a></td>
<td style="background-color:#DC143C">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Cyan">Cyan</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=00FFFF">#00FFFF</a></td>
<td style="background-color:#00FFFF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkBlue">DarkBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=00008B">#00008B</a></td>
<td style="background-color:#00008B">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkCyan">DarkCyan</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=008B8B">#008B8B</a></td>
<td style="background-color:#008B8B">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkGoldenRod">DarkGoldenRod</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=B8860B">#B8860B</a></td>
<td style="background-color:#B8860B">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkGray">DarkGray</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=A9A9A9">#A9A9A9</a></td>
<td style="background-color:#A9A9A9">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkGreen">DarkGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=006400">#006400</a></td>
<td style="background-color:#006400">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkKhaki">DarkKhaki</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=BDB76B">#BDB76B</a></td>
<td style="background-color:#BDB76B">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkMagenta">DarkMagenta</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=8B008B">#8B008B</a></td>
<td style="background-color:#8B008B">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkOliveGreen">DarkOliveGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=556B2F">#556B2F</a></td>
<td style="background-color:#556B2F">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Darkorange">Darkorange</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FF8C00">#FF8C00</a></td>
<td style="background-color:#FF8C00">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkOrchid">DarkOrchid</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=9932CC">#9932CC</a></td>
<td style="background-color:#9932CC">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkRed">DarkRed</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=8B0000">#8B0000</a></td>
<td style="background-color:#8B0000">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkSalmon">DarkSalmon</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=E9967A">#E9967A</a></td>
<td style="background-color:#E9967A">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkSeaGreen">DarkSeaGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=8FBC8F">#8FBC8F</a></td>
<td style="background-color:#8FBC8F">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkSlateBlue">DarkSlateBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=483D8B">#483D8B</a></td>
<td style="background-color:#483D8B">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkSlateGray">DarkSlateGray</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=2F4F4F">#2F4F4F</a></td>
<td style="background-color:#2F4F4F">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkTurquoise">DarkTurquoise</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=00CED1">#00CED1</a></td>
<td style="background-color:#00CED1">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DarkViolet">DarkViolet</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=9400D3">#9400D3</a></td>
<td style="background-color:#9400D3">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DeepPink">DeepPink</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FF1493">#FF1493</a></td>
<td style="background-color:#FF1493">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DeepSkyBlue">DeepSkyBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=00BFFF">#00BFFF</a></td>
<td style="background-color:#00BFFF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DimGray">DimGray</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=696969">#696969</a></td>
<td style="background-color:#696969">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=DodgerBlue">DodgerBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=1E90FF">#1E90FF</a></td>
<td style="background-color:#1E90FF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Feldspar">Feldspar</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=D19275">#D19275</a></td>
<td style="background-color:#D19275">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=FireBrick">FireBrick</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=B22222">#B22222</a></td>
<td style="background-color:#B22222">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=FloralWhite">FloralWhite</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFFAF0">#FFFAF0</a></td>
<td style="background-color:#FFFAF0">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=ForestGreen">ForestGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=228B22">#228B22</a></td>
<td style="background-color:#228B22">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Fuchsia">Fuchsia</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FF00FF">#FF00FF</a></td>
<td style="background-color:#FF00FF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Gainsboro">Gainsboro</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=DCDCDC">#DCDCDC</a></td>
<td style="background-color:#DCDCDC">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=GhostWhite">GhostWhite</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=F8F8FF">#F8F8FF</a></td>
<td style="background-color:#F8F8FF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Gold">Gold</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFD700">#FFD700</a></td>
<td style="background-color:#FFD700">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=GoldenRod">GoldenRod</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=DAA520">#DAA520</a></td>
<td style="background-color:#DAA520">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Gray">Gray</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=808080">#808080</a></td>
<td style="background-color:#808080">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Green">Green</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=008000">#008000</a></td>
<td style="background-color:#008000">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=GreenYellow">GreenYellow</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=ADFF2F">#ADFF2F</a></td>
<td style="background-color:#ADFF2F">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=HoneyDew">HoneyDew</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=F0FFF0">#F0FFF0</a></td>
<td style="background-color:#F0FFF0">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=HotPink">HotPink</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FF69B4">#FF69B4</a></td>
<td style="background-color:#FF69B4">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=IndianRed ">IndianRed </a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=CD5C5C">#CD5C5C</a></td>
<td style="background-color:#CD5C5C">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Indigo  ">Indigo  </a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=4B0082">#4B0082</a></td>
<td style="background-color:#4B0082">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Ivory">Ivory</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFFFF0">#FFFFF0</a></td>
<td style="background-color:#FFFFF0">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Khaki">Khaki</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=F0E68C">#F0E68C</a></td>
<td style="background-color:#F0E68C">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Lavender">Lavender</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=E6E6FA">#E6E6FA</a></td>
<td style="background-color:#E6E6FA">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LavenderBlush">LavenderBlush</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFF0F5">#FFF0F5</a></td>
<td style="background-color:#FFF0F5">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LawnGreen">LawnGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=7CFC00">#7CFC00</a></td>
<td style="background-color:#7CFC00">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LemonChiffon">LemonChiffon</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFFACD">#FFFACD</a></td>
<td style="background-color:#FFFACD">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightBlue">LightBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=ADD8E6">#ADD8E6</a></td>
<td style="background-color:#ADD8E6">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightCoral">LightCoral</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=F08080">#F08080</a></td>
<td style="background-color:#F08080">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightCyan">LightCyan</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=E0FFFF">#E0FFFF</a></td>
<td style="background-color:#E0FFFF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightGoldenRodYellow">LightGoldenRodYellow</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FAFAD2">#FAFAD2</a></td>
<td style="background-color:#FAFAD2">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightGrey">LightGrey</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=D3D3D3">#D3D3D3</a></td>
<td style="background-color:#D3D3D3">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightGreen">LightGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=90EE90">#90EE90</a></td>
<td style="background-color:#90EE90">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightPink">LightPink</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFB6C1">#FFB6C1</a></td>

<td style="background-color:#FFB6C1">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightSalmon">LightSalmon</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFA07A">#FFA07A</a></td>
<td style="background-color:#FFA07A">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightSeaGreen">LightSeaGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=20B2AA">#20B2AA</a></td>
<td style="background-color:#20B2AA">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightSkyBlue">LightSkyBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=87CEFA">#87CEFA</a></td>
<td style="background-color:#87CEFA">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightSlateBlue">LightSlateBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=8470FF">#8470FF</a></td>
<td style="background-color:#8470FF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightSlateGray">LightSlateGray</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=778899">#778899</a></td>
<td style="background-color:#778899">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightSteelBlue">LightSteelBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=B0C4DE">#B0C4DE</a></td>
<td style="background-color:#B0C4DE">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LightYellow">LightYellow</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFFFE0">#FFFFE0</a></td>
<td style="background-color:#FFFFE0">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Lime">Lime</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=00FF00">#00FF00</a></td>
<td style="background-color:#00FF00">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=LimeGreen">LimeGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=32CD32">#32CD32</a></td>
<td style="background-color:#32CD32">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Linen">Linen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FAF0E6">#FAF0E6</a></td>
<td style="background-color:#FAF0E6">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Magenta">Magenta</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FF00FF">#FF00FF</a></td>
<td style="background-color:#FF00FF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Maroon">Maroon</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=800000">#800000</a></td>
<td style="background-color:#800000">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=MediumAquaMarine">MediumAquaMarine</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=66CDAA">#66CDAA</a></td>
<td style="background-color:#66CDAA">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=MediumBlue">MediumBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=0000CD">#0000CD</a></td>
<td style="background-color:#0000CD">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=MediumOrchid">MediumOrchid</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=BA55D3">#BA55D3</a></td>
<td style="background-color:#BA55D3">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=MediumPurple">MediumPurple</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=9370D8">#9370D8</a></td>
<td style="background-color:#9370D8">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=MediumSeaGreen">MediumSeaGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=3CB371">#3CB371</a></td>
<td style="background-color:#3CB371">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=MediumSlateBlue">MediumSlateBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=7B68EE">#7B68EE</a></td>
<td style="background-color:#7B68EE">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=MediumSpringGreen">MediumSpringGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=00FA9A">#00FA9A</a></td>
<td style="background-color:#00FA9A">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=MediumTurquoise">MediumTurquoise</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=48D1CC">#48D1CC</a></td>
<td style="background-color:#48D1CC">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=MediumVioletRed">MediumVioletRed</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=C71585">#C71585</a></td>
<td style="background-color:#C71585">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=MidnightBlue">MidnightBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=191970">#191970</a></td>
<td style="background-color:#191970">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=MintCream">MintCream</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=F5FFFA">#F5FFFA</a></td>
<td style="background-color:#F5FFFA">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=MistyRose">MistyRose</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFE4E1">#FFE4E1</a></td>
<td style="background-color:#FFE4E1">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Moccasin">Moccasin</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFE4B5">#FFE4B5</a></td>
<td style="background-color:#FFE4B5">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=NavajoWhite">NavajoWhite</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFDEAD">#FFDEAD</a></td>
<td style="background-color:#FFDEAD">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Navy">Navy</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=000080">#000080</a></td>
<td style="background-color:#000080">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=OldLace">OldLace</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FDF5E6">#FDF5E6</a></td>
<td style="background-color:#FDF5E6">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Olive">Olive</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=808000">#808000</a></td>
<td style="background-color:#808000">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=OliveDrab">OliveDrab</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=6B8E23">#6B8E23</a></td>
<td style="background-color:#6B8E23">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Orange">Orange</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFA500">#FFA500</a></td>
<td style="background-color:#FFA500">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=OrangeRed">OrangeRed</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FF4500">#FF4500</a></td>
<td style="background-color:#FF4500">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Orchid">Orchid</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=DA70D6">#DA70D6</a></td>
<td style="background-color:#DA70D6">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=PaleGoldenRod">PaleGoldenRod</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=EEE8AA">#EEE8AA</a></td>
<td style="background-color:#EEE8AA">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=PaleGreen">PaleGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=98FB98">#98FB98</a></td>
<td style="background-color:#98FB98">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=PaleTurquoise">PaleTurquoise</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=AFEEEE">#AFEEEE</a></td>
<td style="background-color:#AFEEEE">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=PaleVioletRed">PaleVioletRed</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=D87093">#D87093</a></td>
<td style="background-color:#D87093">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=PapayaWhip">PapayaWhip</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFEFD5">#FFEFD5</a></td>
<td style="background-color:#FFEFD5">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=PeachPuff">PeachPuff</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFDAB9">#FFDAB9</a></td>
<td style="background-color:#FFDAB9">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Peru">Peru</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=CD853F">#CD853F</a></td>
<td style="background-color:#CD853F">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Pink">Pink</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFC0CB">#FFC0CB</a></td>
<td style="background-color:#FFC0CB">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Plum">Plum</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=DDA0DD">#DDA0DD</a></td>
<td style="background-color:#DDA0DD">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=PowderBlue">PowderBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=B0E0E6">#B0E0E6</a></td>
<td style="background-color:#B0E0E6">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Purple">Purple</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=800080">#800080</a></td>
<td style="background-color:#800080">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Red">Red</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FF0000">#FF0000</a></td>
<td style="background-color:#FF0000">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=RosyBrown">RosyBrown</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=BC8F8F">#BC8F8F</a></td>
<td style="background-color:#BC8F8F">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=RoyalBlue">RoyalBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=4169E1">#4169E1</a></td>
<td style="background-color:#4169E1">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=SaddleBrown">SaddleBrown</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=8B4513">#8B4513</a></td>
<td style="background-color:#8B4513">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Salmon">Salmon</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FA8072">#FA8072</a></td>
<td style="background-color:#FA8072">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=SandyBrown">SandyBrown</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=F4A460">#F4A460</a></td>
<td style="background-color:#F4A460">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=SeaGreen">SeaGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=2E8B57">#2E8B57</a></td>
<td style="background-color:#2E8B57">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=SeaShell">SeaShell</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFF5EE">#FFF5EE</a></td>
<td style="background-color:#FFF5EE">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Sienna">Sienna</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=A0522D">#A0522D</a></td>
<td style="background-color:#A0522D">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Silver">Silver</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=C0C0C0">#C0C0C0</a></td>
<td style="background-color:#C0C0C0">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=SkyBlue">SkyBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=87CEEB">#87CEEB</a></td>
<td style="background-color:#87CEEB">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=SlateBlue">SlateBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=6A5ACD">#6A5ACD</a></td>
<td style="background-color:#6A5ACD">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=SlateGray">SlateGray</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=708090">#708090</a></td>
<td style="background-color:#708090">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Snow">Snow</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFFAFA">#FFFAFA</a></td>
<td style="background-color:#FFFAFA">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=SpringGreen">SpringGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=00FF7F">#00FF7F</a></td>
<td style="background-color:#00FF7F">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=SteelBlue">SteelBlue</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=4682B4">#4682B4</a></td>
<td style="background-color:#4682B4">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Tan">Tan</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=D2B48C">#D2B48C</a></td>
<td style="background-color:#D2B48C">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Teal">Teal</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=008080">#008080</a></td>
<td style="background-color:#008080">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Thistle">Thistle</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=D8BFD8">#D8BFD8</a></td>
<td style="background-color:#D8BFD8">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Tomato">Tomato</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FF6347">#FF6347</a></td>
<td style="background-color:#FF6347">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Turquoise">Turquoise</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=40E0D0">#40E0D0</a></td>
<td style="background-color:#40E0D0">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Violet">Violet</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=EE82EE">#EE82EE</a></td>
<td style="background-color:#EE82EE">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=VioletRed">VioletRed</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=D02090">#D02090</a></td>
<td style="background-color:#D02090">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Wheat">Wheat</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=F5DEB3">#F5DEB3</a></td>
<td style="background-color:#F5DEB3">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=White">White</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFFFFF">#FFFFFF</a></td>
<td style="background-color:#FFFFFF">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=WhiteSmoke">WhiteSmoke</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=F5F5F5">#F5F5F5</a></td>
<td style="background-color:#F5F5F5">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=Yellow">Yellow</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=FFFF00">#FFFF00</a></td>
<td style="background-color:#FFFF00">&nbsp;</td>
</tr>

<tr>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?color=YellowGreen">YellowGreen</a></td>
<td><a target="_blank" href="http://www.w3school.com.cn/tiy/color.asp?hex=9ACD32">#9ACD32</a></td>
<td style="background-color:#9ACD32">&nbsp;</td>
</tr>

</tbody></table>


#### 1600万种不同颜色
三种颜色 红，绿，蓝的组合从0到255，一共有1600万种不同颜色(256 x 256 x 256)。
在下面的颜色表中你会看到不同的结果，从0到255的红色，同时设置绿色和蓝色的值为0,随着红色的值变化，不同的值都显示了不同的颜色。

<table class="reference notranslate">
<tbody><tr>
<th width="50%">Red Light</th>
<th width="20%">Color HEX</th>
<th width="30%">Color RGB</th>
</tr>

<tr>
<td bgcolor="#000000">&nbsp;</td>
<td>#000000&nbsp;</td>
<td>rgb(0,0,0)</td>
</tr>

<tr>
<td bgcolor="#080000">&nbsp;</td>
<td>#080000</td>
<td>rgb(8,0,0)</td>
</tr>

<tr>
<td bgcolor="#100000">&nbsp;</td>
<td>#100000</td>
<td>rgb(16,0,0)</td>
</tr>

<tr>
<td bgcolor="#180000">&nbsp;</td>
<td>#180000</td>
<td>rgb(24,0,0)</td>
</tr>

<tr>
<td bgcolor="#200000">&nbsp;</td>
<td>#200000</td>
<td>rgb(32,0,0)</td>
</tr>

<tr>
<td bgcolor="#280000">&nbsp;</td>
<td>#280000</td>
<td>rgb(40,0,0)</td>
</tr>

<tr>
<td bgcolor="#300000">&nbsp;</td>
<td>#300000</td>
<td>rgb(48,0,0)</td>
</tr>

<tr>
<td bgcolor="#380000">&nbsp;</td>
<td>#380000</td>
<td>rgb(56,0,0)</td>
</tr>

<tr>
<td bgcolor="#400000">&nbsp;</td>
<td>#400000</td>
<td>rgb(64,0,0)</td>
</tr>

<tr>
<td bgcolor="#480000">&nbsp;</td>
<td>#480000</td>
<td>rgb(72,0,0)</td>
</tr>

<tr>
<td bgcolor="#500000">&nbsp;</td>
<td>#500000</td>
<td>rgb(80,0,0)</td>
</tr>

<tr>
<td bgcolor="#580000">&nbsp;</td>
<td>#580000</td>
<td>rgb(88,0,0)</td>
</tr>

<tr>
<td bgcolor="#600000">&nbsp;</td>
<td>#600000</td>
<td>rgb(96,0,0)</td>
</tr>

<tr>
<td bgcolor="#680000">&nbsp;</td>
<td>#680000</td>
<td>rgb(104,0,0)</td>
</tr>

<tr>
<td bgcolor="#700000">&nbsp;</td>
<td>#700000</td>
<td>rgb(112,0,0)</td>
</tr>

<tr>
<td bgcolor="#780000">&nbsp;</td>
<td>#780000</td>
<td>rgb(120,0,0)</td>
</tr>

<tr>
<td bgcolor="#800000">&nbsp;</td>
<td>#800000</td>
<td>rgb(128,0,0)</td>
</tr>

<tr>
<td bgcolor="#880000">&nbsp;</td>
<td>#880000</td>
<td>rgb(136,0,0)</td>
</tr>

<tr>
<td bgcolor="#900000">&nbsp;</td>
<td>#900000</td>
<td>rgb(144,0,0)</td>
</tr>

<tr>
<td bgcolor="#980000">&nbsp;</td>
<td>#980000</td>
<td>rgb(152,0,0)</td>
</tr>

<tr>
<td bgcolor="#A00000">&nbsp;</td>
<td>#A00000</td>
<td>rgb(160,0,0)</td>
</tr>

<tr>
<td bgcolor="#A80000">&nbsp;</td>
<td>#A80000</td>
<td>rgb(168,0,0)</td>
</tr>

<tr>
<td bgcolor="#B00000">&nbsp;</td>
<td>#B00000</td>
<td>rgb(176,0,0)</td>
</tr>

<tr>
<td bgcolor="#B80000">&nbsp;</td>
<td>#B80000</td>
<td>rgb(184,0,0)</td>
</tr>

<tr>
<td bgcolor="#C00000">&nbsp;</td>
<td>#C00000</td>
<td>rgb(192,0,0)</td>
</tr>

<tr>
<td bgcolor="#C80000">&nbsp;</td>
<td>#C80000</td>
<td>rgb(200,0,0)</td>
</tr>

<tr>
<td bgcolor="#D00000">&nbsp;</td>
<td>#D00000</td>
<td>rgb(208,0,0)</td>
</tr>

<tr>
<td bgcolor="#D80000">&nbsp;</td>
<td>#D80000</td>
<td>rgb(216,0,0)</td>
</tr>

<tr>
<td bgcolor="#E00000">&nbsp;</td>
<td>#E00000</td>
<td>rgb(224,0,0)</td>
</tr>

<tr>
<td bgcolor="#E80000">&nbsp;</td>
<td>#E80000</td><td>rgb(232,0,0)</td>
</tr>

<tr>
<td bgcolor="#F00000">&nbsp;</td>
<td>#F00000</td>
<td>rgb(240,0,0)</td>
</tr>

<tr>
<td bgcolor="#F80000">&nbsp;</td>
<td>#F80000</td>
<td>rgb(248,0,0)</td>
</tr>

<tr>
<td bgcolor="#FF0000">&nbsp;</td>
<td>#FF0000</td>
<td>rgb(255,0,0)</td>
</tr>

</tbody></table>


#### 灰暗色调
以下展示了灰色到黑色的渐变

<table class="reference notranslate">
<tbody><tr>
<th width="50%">Gray Shades</th>
<th width="20%">Color HEX</th>
<th width="30%">Color RGB</th>
</tr>

<tr>
<td width="50%" bgcolor="#000000">&nbsp;</td>
<td width="20%">#000000&nbsp;</td>
<td width="30%">rgb(0,0,0)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#080808">&nbsp;</td>
<td width="20%">#080808&nbsp;</td>
<td width="30%">rgb(8,8,8)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#101010">&nbsp;</td>
<td width="20%">#101010&nbsp;</td>
<td width="30%">rgb(16,16,16)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#181818">&nbsp;</td>
<td width="20%">#181818&nbsp;</td>
<td width="30%">rgb(24,24,24)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#202020">&nbsp;</td>
<td width="20%">#202020&nbsp;</td>
<td width="30%">rgb(32,32,32)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#282828">&nbsp;</td>
<td width="20%">#282828&nbsp;</td>
<td width="30%">rgb(40,40,40)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#303030">&nbsp;</td>
<td width="20%">#303030&nbsp;</td>
<td width="30%">rgb(48,48,48)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#383838">&nbsp;</td>
<td width="20%">#383838&nbsp;</td>
<td width="30%">rgb(56,56,56)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#404040">&nbsp;</td>
<td width="20%">#404040&nbsp;</td>
<td width="30%">rgb(64,64,64)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#484848">&nbsp;</td>
<td width="20%">#484848&nbsp;</td>
<td width="30%">rgb(72,72,72)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#505050">&nbsp;</td>
<td width="20%">#505050&nbsp;</td>
<td width="30%">rgb(80,80,80)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#585858">&nbsp;</td>
<td width="20%">#585858&nbsp;</td>
<td width="30%">rgb(88,88,88)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#606060">&nbsp;</td>
<td width="20%">#606060&nbsp;</td>
<td width="30%">rgb(96,96,96)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#686868">&nbsp;</td>
<td width="20%">#686868&nbsp;</td>
<td width="30%">rgb(104,104,104)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#707070">&nbsp;</td>
<td width="20%">#707070&nbsp;</td>
<td width="30%">rgb(112,112,112)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#787878">&nbsp;</td>
<td width="20%">#787878&nbsp;</td>
<td width="30%">rgb(120,120,120)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#808080">&nbsp;</td>
<td width="20%">#808080&nbsp;</td>
<td width="30%">rgb(128,128,128)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#888888">&nbsp;</td>
<td width="20%">#888888&nbsp;</td>
<td width="30%">rgb(136,136,136)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#909090">&nbsp;</td>
<td width="20%">#909090&nbsp;</td>
<td width="30%">rgb(144,144,144)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#989898">&nbsp;</td>
<td width="20%">#989898&nbsp;</td>
<td width="30%">rgb(152,152,152)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#A0A0A0">&nbsp;</td>
<td width="20%">#A0A0A0&nbsp;</td>
<td width="30%">rgb(160,160,160)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#A8A8A8">&nbsp;</td>
<td width="20%">#A8A8A8&nbsp;</td>
<td width="30%">rgb(168,168,168)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#B0B0B0">&nbsp;</td>
<td width="20%">#B0B0B0&nbsp;</td>
<td width="30%">rgb(176,176,176)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#B8B8B8">&nbsp;</td>
<td width="20%">#B8B8B8&nbsp;</td>
<td width="30%">rgb(184,184,184)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#C0C0C0">&nbsp;</td>
<td width="20%">#C0C0C0&nbsp;</td>
<td width="30%">rgb(192,192,192)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#C8C8C8">&nbsp;</td>
<td width="20%">#C8C8C8&nbsp;</td>
<td width="30%">rgb(200,200,200)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#D0D0D0">&nbsp;</td>
<td width="20%">#D0D0D0&nbsp;</td>
<td width="30%">rgb(208,208,208)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#D8D8D8">&nbsp;</td>
<td width="20%">#D8D8D8&nbsp;</td>
<td width="30%">rgb(216,216,216)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#E0E0E0">&nbsp;</td>
<td width="20%">#E0E0E0&nbsp;</td>
<td width="30%">rgb(224,224,224)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#E8E8E8">&nbsp;</td>
<td width="20%">#E8E8E8&nbsp;</td>
<td width="30%">rgb(232,232,232)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#F0F0F0">&nbsp;</td>
<td width="20%">#F0F0F0&nbsp;</td>
<td width="30%">rgb(240,240,240)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#F8F8F8">&nbsp;</td>
<td width="20%">#F8F8F8&nbsp;</td>
<td width="30%">rgb(248,248,248)&nbsp;</td>
</tr>

<tr>
<td width="50%" bgcolor="#FFFFFF">&nbsp;</td>
<td width="20%">#FFFFFF&nbsp;</td>
<td width="30%">rgb(255,255,255)&nbsp;</td>
</tr>

</tbody></table>

#### Web安全色
数年以前，当大多数计算机仅支持 256 种颜色的时候，一系列 216 种 Web 安全色作为 Web 标准被建议使用。其中的原因是，微软和 Mac 操作系统使用了 40 种不同的保留的固定系统颜色（双方大约各使用 20 种）。

我们不确定如今这么做的意义有多大，因为越来越多的计算机有能力处理数百万种颜色，不过做选择还是你自己。

最初，216 跨平台 web 安全色被用来确保：当计算机使用 256 色调色板时，所有的计算机能够正确地显示所有的颜色。

<table border="1" width="100%">
    <tbody><tr>
      <td align="center" style="color:#ffffff" bgcolor="#000000">000000</td>
      <td align="center" style="color:#ffffff" bgcolor="#000033">000033</td>
      <td align="center" style="color:#ffffff" bgcolor="#000066">000066</td>
      <td align="center" style="color:#ffffff" bgcolor="#000099">000099</td>
      <td align="center" style="color:#ffffff" bgcolor="#0000cc">0000CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#0000ff">0000FF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#003300">003300</td>
      <td align="center" style="color:#ffffff" bgcolor="#003333">003333</td>
      <td align="center" style="color:#ffffff" bgcolor="#003366">003366</td>
      <td align="center" style="color:#ffffff" bgcolor="#003399">003399</td>
      <td align="center" style="color:#ffffff" bgcolor="#0033cc">0033CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#0033ff">0033FF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#006600">006600</td>
      <td align="center" style="color:#ffffff" bgcolor="#006633">006633</td>
      <td align="center" style="color:#ffffff" bgcolor="#006666">006666</td>
      <td align="center" style="color:#ffffff" bgcolor="#006699">006699</td>
      <td align="center" style="color:#ffffff" bgcolor="#0066cc">0066CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#0066ff">0066FF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#009900">009900</td>
      <td align="center" bgcolor="#009933">009933</td>
      <td align="center" bgcolor="#009966">009966</td>
      <td align="center" bgcolor="#009999">009999</td>
      <td align="center" bgcolor="#0099cc">0099CC</td>
      <td align="center" bgcolor="#0099ff">0099FF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#00cc00">00CC00</td>
      <td align="center" bgcolor="#00cc33">00CC33</td>
      <td align="center" bgcolor="#00cc66">00CC66</td>
      <td align="center" bgcolor="#00cc99">00CC99</td>
      <td align="center" bgcolor="#00cccc">00CCCC</td>
      <td align="center" bgcolor="#00ccff">00CCFF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#00ff00">00FF00</td>
      <td align="center" bgcolor="#00ff33">00FF33</td>
      <td align="center" bgcolor="#00ff66">00FF66</td>
      <td align="center" bgcolor="#00ff99">00FF99</td>
      <td align="center" bgcolor="#00ffcc">00FFCC</td>
      <td align="center" bgcolor="#00ffff">00FFFF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#330000">330000</td>
      <td align="center" style="color:#ffffff" bgcolor="#330033">330033</td>
      <td align="center" style="color:#ffffff" bgcolor="#330066">330066</td>
      <td align="center" style="color:#ffffff" bgcolor="#330099">330099</td>
      <td align="center" style="color:#ffffff" bgcolor="#3300cc">3300CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#3300ff">3300FF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#333300">333300</td>
      <td align="center" style="color:#ffffff" bgcolor="#333333">333333</td>
      <td align="center" style="color:#ffffff" bgcolor="#333366">333366</td>
      <td align="center" style="color:#ffffff" bgcolor="#333399">333399</td>
      <td align="center" style="color:#ffffff" bgcolor="#3333cc">3333CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#3333ff">3333FF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#336600">336600</td>
      <td align="center" style="color:#ffffff" bgcolor="#336633">336633</td>
      <td align="center" style="color:#ffffff" bgcolor="#336666">336666</td>
      <td align="center" style="color:#ffffff" bgcolor="#336699">336699</td>
      <td align="center" style="color:#ffffff" bgcolor="#3366cc">3366CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#3366ff">3366FF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#339900">339900</td>
      <td align="center" bgcolor="#339933">339933</td>
      <td align="center" bgcolor="#339966">339966</td>
      <td align="center" bgcolor="#339999">339999</td>
      <td align="center" bgcolor="#3399cc">3399CC</td>
      <td align="center" bgcolor="#3399ff">3399FF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#33cc00">33CC00</td>
      <td align="center" bgcolor="#33cc33">33CC33</td>
      <td align="center" bgcolor="#33cc66">33CC66</td>
      <td align="center" bgcolor="#33cc99">33CC99</td>
      <td align="center" bgcolor="#33cccc">33CCCC</td>
      <td align="center" bgcolor="#33ccff">33CCFF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#33ff00">33FF00</td>
      <td align="center" bgcolor="#33ff33">33FF33</td>
      <td align="center" bgcolor="#33ff66">33FF66</td>
      <td align="center" bgcolor="#33ff99">33FF99</td>
      <td align="center" bgcolor="#33ffcc">33FFCC</td>
      <td align="center" bgcolor="#33ffff">33FFFF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#660000">660000</td>
      <td align="center" style="color:#ffffff" bgcolor="#660033">660033</td>
      <td align="center" style="color:#ffffff" bgcolor="#660066">660066</td>
      <td align="center" style="color:#ffffff" bgcolor="#660099">660099</td>
      <td align="center" style="color:#ffffff" bgcolor="#6600cc">6600CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#6600ff">6600FF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#663300">663300</td>
      <td align="center" style="color:#ffffff" bgcolor="#663333">663333</td>
      <td align="center" style="color:#ffffff" bgcolor="#663366">663366</td>
      <td align="center" style="color:#ffffff" bgcolor="#663399">663399</td>
      <td align="center" style="color:#ffffff" bgcolor="#6633cc">6633CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#6633ff">6633FF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#666600">666600</td>
      <td align="center" style="color:#ffffff" bgcolor="#666633">666633</td>
      <td align="center" style="color:#ffffff" bgcolor="#666666">666666</td>
      <td align="center" style="color:#ffffff" bgcolor="#666699">666699</td>
      <td align="center" style="color:#ffffff" bgcolor="#6666cc">6666CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#6666ff">6666FF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#669900">669900</td>
      <td align="center" bgcolor="#669933">669933</td>
      <td align="center" bgcolor="#669966">669966</td>
      <td align="center" bgcolor="#669999">669999</td>
      <td align="center" bgcolor="#6699cc">6699CC</td>
      <td align="center" bgcolor="#6699ff">6699FF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#66cc00">66CC00</td>
      <td align="center" bgcolor="#66cc33">66CC33</td>
      <td align="center" bgcolor="#66cc66">66CC66</td>
      <td align="center" bgcolor="#66cc99">66CC99</td>
      <td align="center" bgcolor="#66cccc">66CCCC</td>
      <td align="center" bgcolor="#66ccff">66CCFF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#66ff00">66FF00</td>
      <td align="center" bgcolor="#66ff33">66FF33</td>
      <td align="center" bgcolor="#66ff66">66FF66</td>
      <td align="center" bgcolor="#66ff99">66FF99</td>
      <td align="center" bgcolor="#66ffcc">66FFCC</td>
      <td align="center" bgcolor="#66ffff">66FFFF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#990000">990000</td>
      <td align="center" style="color:#ffffff" bgcolor="#990033">990033</td>
      <td align="center" style="color:#ffffff" bgcolor="#990066">990066</td>
      <td align="center" style="color:#ffffff" bgcolor="#990099">990099</td>
      <td align="center" style="color:#ffffff" bgcolor="#9900cc">9900CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#9900ff">9900FF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#993300">993300</td>
      <td align="center" style="color:#ffffff" bgcolor="#993333">993333</td>
      <td align="center" style="color:#ffffff" bgcolor="#993366">993366</td>
      <td align="center" style="color:#ffffff" bgcolor="#993399">993399</td>
      <td align="center" style="color:#ffffff" bgcolor="#9933cc">9933CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#9933ff">9933FF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#996600">996600</td>
      <td align="center" style="color:#ffffff" bgcolor="#996633">996633</td>
      <td align="center" style="color:#ffffff" bgcolor="#996666">996666</td>
      <td align="center" style="color:#ffffff" bgcolor="#996699">996699</td>
      <td align="center" style="color:#ffffff" bgcolor="#9966cc">9966CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#9966ff">9966FF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#999900">999900</td>
      <td align="center" bgcolor="#999933">999933</td>
      <td align="center" bgcolor="#999966">999966</td>
      <td align="center" bgcolor="#999999">999999</td>
      <td align="center" bgcolor="#9999cc">9999CC</td>
      <td align="center" bgcolor="#9999ff">9999FF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#99cc00">99CC00</td>
      <td align="center" bgcolor="#99cc33">99CC33</td>
      <td align="center" bgcolor="#99cc66">99CC66</td>
      <td align="center" bgcolor="#99cc99">99CC99</td>
      <td align="center" bgcolor="#99cccc">99CCCC</td>
      <td align="center" bgcolor="#99ccff">99CCFF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#99ff00">99FF00</td>
      <td align="center" bgcolor="#99ff33">99FF33</td>
      <td align="center" bgcolor="#99ff66">99FF66</td>
      <td align="center" bgcolor="#99ff99">99FF99</td>
      <td align="center" bgcolor="#99ffcc">99FFCC</td>
      <td align="center" bgcolor="#99ffff">99FFFF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#cc0000">CC0000</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc0033">CC0033</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc0066">CC0066</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc0099">CC0099</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc00cc">CC00CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc00ff">CC00FF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#cc3300">CC3300</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc3333">CC3333</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc3366">CC3366</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc3399">CC3399</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc33cc">CC33CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc33ff">CC33FF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#cc6600">CC6600</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc6633">CC6633</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc6666">CC6666</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc6699">CC6699</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc66cc">CC66CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#cc66ff">CC66FF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#cc9900">CC9900</td>
      <td align="center" bgcolor="#cc9933">CC9933</td>
      <td align="center" bgcolor="#cc9966">CC9966</td>
      <td align="center" bgcolor="#cc9999">CC9999</td>
      <td align="center" bgcolor="#cc99cc">CC99CC</td>
      <td align="center" bgcolor="#cc99ff">CC99FF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#cccc00">CCCC00</td>
      <td align="center" bgcolor="#cccc33">CCCC33</td>
      <td align="center" bgcolor="#cccc66">CCCC66</td>
      <td align="center" bgcolor="#cccc99">CCCC99</td>
      <td align="center" bgcolor="#cccccc">CCCCCC</td>
      <td align="center" bgcolor="#ccccff">CCCCFF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#ccff00">CCFF00</td>
      <td align="center" bgcolor="#ccff33">CCFF33</td>
      <td align="center" bgcolor="#ccff66">CCFF66</td>
      <td align="center" bgcolor="#ccff99">CCFF99</td>
      <td align="center" bgcolor="#ccffcc">CCFFCC</td>
      <td align="center" bgcolor="#ccffff">CCFFFF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#ff0000">FF0000</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff0033">FF0033</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff0066">FF0066</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff0099">FF0099</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff00cc">FF00CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff00ff">FF00FF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#ff3300">FF3300</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff3333">FF3333</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff3366">FF3366</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff3399">FF3399</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff33cc">FF33CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff33ff">FF33FF</td>
    </tr>
    <tr>
      <td align="center" style="color:#ffffff" bgcolor="#ff6600">FF6600</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff6633">FF6633</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff6666">FF6666</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff6699">FF6699</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff66cc">FF66CC</td>
      <td align="center" style="color:#ffffff" bgcolor="#ff66ff">FF66FF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#ff9900">FF9900</td>
      <td align="center" bgcolor="#ff9933">FF9933</td>
      <td align="center" bgcolor="#ff9966">FF9966</td>
      <td align="center" bgcolor="#ff9999">FF9999</td>
      <td align="center" bgcolor="#ff99cc">FF99CC</td>
      <td align="center" bgcolor="#ff99ff">FF99FF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#ffcc00">FFCC00</td>
      <td align="center" bgcolor="#ffcc33">FFCC33</td>
      <td align="center" bgcolor="#ffcc66">FFCC66</td>
      <td align="center" bgcolor="#ffcc99">FFCC99</td>
      <td align="center" bgcolor="#ffcccc">FFCCCC</td>
      <td align="center" bgcolor="#ffccff">FFCCFF</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#ffff00">FFFF00</td>
      <td align="center" bgcolor="#ffff33">FFFF33</td>
      <td align="center" bgcolor="#ffff66">FFFF66</td>
      <td align="center" bgcolor="#ffff99">FFFF99</td>
      <td align="center" bgcolor="#ffffcc">FFFFCC</td>
      <td align="center" bgcolor="#ffffff">FFFFFF</td>
    </tr>
</tbody></table>

## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/%E6%8A%80%E6%9C%AF/%E7%BC%96%E7%A0%81/2018/05/07/codeencrypt/)

### 参考文章

[ASCII_百度百科](https://baike.baidu.com/item/ASCII/309296?fr=aladdin&fromid=19660475&fromtitle=ascii%E7%A0%81%E8%A1%A8)

[摩斯密码 在线加密解密工具 - aTool在线工具](http://www.atool.org/morse.php)

[HTML 颜色 - 菜鸟教程](https://www.runoob.com/html/html-colors.html)


[HTML 颜色名 - w3school](http://www.w3school.com.cn/html/html_colornames.asp)


### 版本记录
20180507 确定主题
20180508 完成ascii表
20180509 完成键盘表,以及相关介绍
20180510 添加qwe键盘和九宫格键盘
20180511 添加莫尔斯电码表,颜色表