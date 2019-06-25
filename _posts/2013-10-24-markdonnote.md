---
layout: default
title: 使用 Markdown
category: [技术, markdown]
comments: true
---

# 为什么使用 Markdown

* 看上去不错  
* 既然看上去不错，为什么不试试呢 
* 文章作为笔记,方便后面随时查阅 




# 目录

[TOC]










# 如何使用 Markdonw

## 1. 标题级别

### 效果

这是 H1 一级标题
======
这是 H2 二级标题
------
# 这是 H1 一级标题
## 这是 H2 二级标题
### 这是 H3 三级标题
#### 这是 H4 四级标题
##### 这是 H5 五级标题
###### 这是 H6 六级标题

### 代码
```
这是 H1 一级标题
======
这是 H2 二级标题
------
# 这是 H1 一级标题
## 这是 H2 二级标题
### 这是 H3 三级标题
#### 这是 H4 四级标题
##### 这是 H5 五级标题
###### 这是 H6 六级标题
```

---

## 2. 列表

### 效果

* 项目1
  * 子项目1.1
  * 子项目1.2
    * 子项目1.2.1
* 项目2
* 项目3

+ 项目1
  + 子项目1.1
  + 子项目1.2
    + 子项目1.2.1
+ 项目2
+ 项目3

- 项目1
  - 子项目1.1
  - 子项目1.2
    - 子项目1.2.1
- 项目2
- 项目3

### 代码 (注意星号与文字之间的空格)

```
* 项目1
  * 子项目1.1
  * 子项目1.2
    * 子项目1.2.1
* 项目2
* 项目3

+ 项目1
  + 子项目1.1
  + 子项目1.2
    + 子项目1.2.1
+ 项目2
+ 项目3

- 项目1
  - 子项目1.1
  - 子项目1.2
    - 子项目1.2.1
- 项目2
- 项目3
```


### 效果

1. 有序列表1
2. 有序列表2
3. 有序列表3


### 代码 (注意点号与文字之间的空格)
```
1. 有序列表1
2. 有序列表2
3. 有序列表3
```

---

## 3. 引用

### 行内代码引用

#### 效果

来试试 `Markdown` 吧

#### 代码

```
来试试 `Markdown` 吧
```


### 代码块引用

#### 效果

```python
def hello():
    print 'hello, world'
```

#### 代码

    ```python
    def hello():
        print 'hello, world'
    ```


### 文字引用

#### 效果

> 春 眠 不 觉 晓，
> 处 处 闻 啼 鸟。  
> 夜 来 风 雨 声，
> 花 落 知 多 少。

#### 代码(需要换行可在句末加两个空格)

```
> 春 眠 不 觉 晓，
> 处 处 闻 啼 鸟。  
> 夜 来 风 雨 声，
> 花 落 知 多 少。
```


#### 效果

> 春 眠 不 觉 晓，
处 处 闻 啼 鸟。  
夜 来 风 雨 声，
花 落 知 多 少。

#### 代码(需要换行可在句末加两个空格)

```
> 春 眠 不 觉 晓，
处 处 闻 啼 鸟。  
夜 来 风 雨 声，
花 落 知 多 少。
```


#### 效果
    春 眠 不 觉 晓，
    处 处 闻 啼 鸟。
    夜 来 风 雨 声，
    花 落 知 多 少。

#### 代码 (行首四个空格, 末尾无需空格)
```
    春 眠 不 觉 晓，
    处 处 闻 啼 鸟。
    夜 来 风 雨 声，
    花 落 知 多 少。
```

---

## 4. 文字

### 斜体

#### 效果

这是一个*斜体*

#### 代码

    这是一个*斜体*

### 粗体

#### 效果

这是一个**粗体**

#### 代码

    这是一个**粗体**
	
### 删除线

#### 效果

这是一个~~删除线~~

#### 代码

    这是一个~~删除线~~

---

## 5. 链接

### 网页链接

#### 效果

参见Wiki词条[Markdown](http://zh.wikipedia.org/wiki/Markdown)

#### 代码

    参见Wiki词条[Markdown](http://zh.wikipedia.org/wiki/Markdown)
	
#### 效果

[链接名称](链接地址)
[链接名称][1]
[1] : 链接地址
	
#### 代码
```markdown
[链接名称](链接地址)
[链接名称][1]
[1] : 链接地址
```

### 图片

#### 效果

![Wikipedia_logo](http://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png)

#### 代码

    ![Wikipedia_logo](http://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png)

---

## 6. 公式

### 效果

这是行内公式`!$ \Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,. $`

```mathjax!
$$\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.$$
```



### 代码

```
这是行内公式`!$ \Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,. $`


```mathjax!
$$\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.$$
```

```


公式可以通过MathJax支持, 右击公式有惊喜。  
另外，注意如果 markdown 的render 是 redcarpet, `LaTex` 中下划线与Markdown中冲突，所以需要做转义处理

如果不想做转义处理，可以尝试更改 markdown 的 render, 我现在用的是 redcarpet,可以改成 kramdown. 如果用的是　jekyll 基于　markdown 搭建博客，可以在　_config.yml 中设置 render，参考　[jekyll configuration](http://jekyllrb.com/docs/configuration/). 感谢评论中 Wead Hsu 提出这一点。


另外，有的　render 在解释文章时可能会出问题，换一个　render 可能就解决了，可以自己实验一下。

## 7. 目录

### 效果

[TOC]

### 代码

    [TOC]

上下都需要换行一行.


	
## 8. 表格

### 效果 

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

### 代码

```markdown
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
```

### 效果

|First Header  | Second Header ||
|First Header  | Second Header | Third Header|
|------------- | -------------|-------------|
表身1Content Cell  | Merge Content Cell||
Content Cell  | Content Cell| Content Cell|

表身2Content Cell  | Merge Content Cell||
Content Cell  | Content Cell| Content Cell|
[表格标题]


### 代码

```
|First Header  | Second Header ||
|First Header  | Second Header | Third Header|
|------------- | -------------|-------------|
表身1Content Cell  | Merge Content Cell||
Content Cell  | Content Cell| Content Cell|

表身2Content Cell  | Merge Content Cell||
Content Cell  | Content Cell| Content Cell|
[表格标题]
```	


## 9.  扩展的文字格式

### 效果

++插入的文字++

==被记号的文字==

上角文字: 19^th^

下角文字: H~2~O

### 代码

```markdown
++插入的文字++

==被记号的文字==

上角文字: 19^th^

下角文字: H~2~O
```

## 10.印刷字替换
系统将自动替换下列文字，转换成排版系统使用的符号

### 效果

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

### 代码

```markdown
(c) (C) (r) (R) (tm) (TM) (p) (P) +-
```




## 11. 缩写定义

### 效果 

The HTML specification
is maintained by the W3C.
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium

### 代码
```markdown
The HTML specification
is maintained by the W3C.
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
```


## 12. 待办事项

### 效果
- [ ] 未完成事项
- [ ] 未完成事项
- [x] 完成事项
- [X] 完成事项

### 代码 

```markdown
- [ ] 未完成事项
- [ ] 未完成事项
- [x] 完成事项
- [X] 完成事项
```

## 13. 脚注

### 效果

脚注[^1x]
[^1x]: 脚注的用法

### 代码

```markdown
脚注[^1x]
[^1x]: 脚注的用法
```


## 14. 定义

### 效果
: 一种水果
: 一种品牌，计算机，手持设备
桔子
: 一种水果


### 代码

```markdown
苹果
: 一种水果
: 一种品牌，计算机，手持设备
桔子
: 一种水果
```


## 15. 流程图 ([语法](http://adrai.github.io/flowchart.js/))

### 效果

```flow
st=>start: 开始
e=>end: 结束
op=>operation: 操作步骤
cond=>condition: 是 或者 否?

st->op->cond
cond(yes)->e
cond(no)->op
```

### 代码

````markdown
```flow
st=>start: 开始
e=>end: 结束
op=>operation: 操作步骤
cond=>condition: 是 或者 否?

st->op->cond
cond(yes)->e
cond(no)->op
```
````


## 16. 序列图 ([语法](https://github.com/bramp/js-sequence-diagrams/blob/master/src/grammar.jison))

### 效果

```sequence
小明->小李: 你好 小李, 最近怎么样?
Note right of 小李: 小李想了想
小李-->小明: 还是老样子
```
### 代码

````markdown
```sequence
小明->小李: 你好 小李, 最近怎么样?
Note right of 小李: 小李想了想
小李-->小明: 还是老样子
```
````




# 其他


## 特别感谢 
感谢[Cmd Markdown](http://www.zybuluo.com/mdeditor?url=http://www.zybuluo.com/static/editor/md-help.markdown)教我使用Markdown


## 参考文章

[Md2All完整教程请参考](https://www.cnblogs.com/garyyan/p/8329343.html )

[小书匠语法使用手册_小书匠](http://markdown.xiaoshujiang.com/ )

## 版本信息

20131024 完成初稿

20180627 添加toc,以及格式

20180821 添加删除线