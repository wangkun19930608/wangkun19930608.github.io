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
,{'class':'about','href':'javascript:load_home(\'visi3\',\'/game/lightgame.html\');','html':'友','tar':'iframe'}
,{'class':'project','href':'https://wangkun19930608.github.io/game/ipnone6s.html','html':'磅','tar':'iframe'}
,{'class':'about','href':'javascript:load_home(\'visi3\',\'/game/ipnone6s.html\');','html':'友','tar':'iframe'}
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
,{'class':'about','href':'javascript:load_home(\'visi3\',\'/friends.html\');','html':'友','tar':'iframe'}
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
				/*a.setAttribute("onclick", 'load_home('+jsonsou[o].href+')');*/
				a.setAttribute("onclick", 'fc(1)');
			}
			v.appendChild(a);
		}
	}
	  
	
 };
 
 
  function load_home() {
	document.getElementById("visi3").innerHTML = '<object type="text/html" data="https://www.baidu.com/" width="100%" height="100%"></object>';
  };
   function load_home(url) {
	   var h='<object type="text/html" data=';
	   h+=url;
	   h+=' width="100%" height="100%"></object>'
		document.getElementById("visi3").innerHTML = h;
   };
   function load_home(id,url) {
	   var h='<object type="text/html" data=';
	   h+=url;
	   h+=' width="100%" height="100%"></object>'
		document.getElementById(id).innerHTML = h;
   };
   
   
    function fc(d){
		var k=document.getElementById('visi1'),w=document.getElementById('visi2');z=document.getElementById('visi2');
		if(d==1){
			k.style.display='none';
			w.style.display='none';
			z.style.display='block';
		}else{
			w.style.display='none';
			k.style.display='block';
			z.style.display='none';
		}
		changeFrameHeight(); 
	};
	function changeFrameHeight(){
		var ifm= document.getElementById("visi2"); 
		ifm.style.height=(document.documentElement.clientHeight)+'px';
	};
	window.onresize=function(){  
		 changeFrameHeight();  
	} ;
   
   
  