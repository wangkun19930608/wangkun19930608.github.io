console.log('This would be the main JS file.');


var json=
[
{'label':'搜','list':
[
{'class':'search','href':'https://wangkun19930608.github.io/search/baidu.html','html':'百','tar':''}
,{'class':'search','href':'https://wangkun19930608.github.io/search/ying.html','html':'必','tar':''}
,{'class':'search','href':'https://wangkun19930608.github.io/search/google.html','html':'谷','tar':''}
,{'class':'search','href':'https://wangkun19930608.github.io/search/yahoo.html','html':'雅','tar':''}
,{'class':'search','href':'https://wangkun19930608.github.io/search/translate.html','html':'译','tar':''}
]
}
,
{
'label':'项','list':
[
{'class':'project','href':'https://wangkun19930608.github.io/hbut/index.html','html':'寻','tar':''}
,{'class':'project','href':'https://wangkun19930608.github.io/hbut/love.html','html':'爱','tar':''}
,{'class':'project','href':'https://wangkun19930608.github.io/game/lightgame.html','html':'灯','tar':'iframe'}
,{'class':'project','href':'https://wangkun19930608.github.io/game/ipnone6s.html','html':'磅','tar':'iframe'}
]
}
,
{
'label':'关','list':
[
{'class':'about','href':'https://www.cnblogs.com/wangkun1993/','html':'园','tar':''}
,{'class':'about','href':'https://github.com/wangkun19930608/','html':'Git','tar':''}
,{'class':'about','href':'https://wangkun19930608.github.io/index.html','html':'GP','tar':''}
,{'class':'about','href':'https://wangkun19930608.github.io/friends.html','html':'友','tar':'iframe'}
]
}
];

 function loadHeadDiv(){
 	var v=document.getElementById("headtitle");
	var l=document.createElement("label");  
	l.innerHTML='这个是我的一个个人主页,AnyProblem欢迎电邮wangkun.it@qq.com!';
	v.appendChild(l);

	for(var o in json){
		var l=document.createElement("label");  
		l.innerHTML=json[o].label;
		v.appendChild(l);
		var jsonsou=json[o].list;
		for(var o in jsonsou){
			var a=document.createElement("a");  
			a.setAttribute("class", jsonsou[o].class);
			a.setAttribute("href", jsonsou[o].href); 
			a.innerHTML=jsonsou[o].html;
			if(''!=jsonsou[o].tar){
				a.setAttribute("target", jsonsou[o].tar);
				a.setAttribute("onclick", "javascript:fc(1);");
			}
			v.appendChild(a);
		}
	}
	  
	
 }