---
layout: default
title: 数字递归输出
category: C/C++
comments: true
---

#  数字递归输出
一个朋友遇到一个不是很熟悉的问题,对于新手或许有些帮助,没有其他检验操作,只是递归.



## 详情
* 题目1要求将一个正整数按序输出,要去使用递归.
eg.input 12345
output 1-2-3-4-5

```c
#include <stdio.h>  
#include <stdlib.h>  
#include <math.h>  

int fn(int n)  
{  
    
	int s=0;
	int y=0;
	s=n/10;
	y=n%10;
	if(s!=0)
	{
		fn(s);
		printf("-%d",y);
	}
	else
	{
		printf("%d",y);
	}
}


int main()  
{  
    int m=1234;  
	fn(m);
    return 0;  
}  
```

* 题目2要求根据输入的数据,直到?截至,然后通过递归倒序输出.
eg. input 1234567?
output 7654321

```c
#include"iostream"
using namespace std;

void fn(char* s){
	char *p=s+1;
	if(*s!='\0'){
		fn(p);
		cout<<*s;
	}
	
}

int main(){
	char a[100];
	int i=0;
	cin>>a[i];
	char t;
	while(a[i]!='?')
	{
		cin>>a[++i];
	}
	a[i]='\0';
	char *p=a;
	fn(p);	
	return 0;
}
```





