console.log('This would be the main JS file.');
var issuesList;
var issuesHTML;
var titleString;


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
,{'class':'project','href':'https://wangkun19930608.github.io/MarkdownOnline/','html':'Markdown','tar':''}
,{'class':'project','href':'https://wangkun19930608.github.io/HashdownOnline','html':'Hashdown','tar':''}
,{'class':'project','href':'https://wangkun19930608.github.io/GraphvizOnline/','html':'Graphviz','tar':''}
//,{'class':'project','href':'https://wangkun19930608.github.io/game/lightgame.html','html':'灯','tar':'iframe'}
,{'class':'project','href':'javascript:load_home(\'visi3\',\'/game/lightgame.html\');','html':'灯','tar':'iframe'}
//,{'class':'project','href':'https://wangkun19930608.github.io/game/ipnone6s.html','html':'磅','tar':'iframe'}
,{'class':'project','href':'javascript:load_home(\'visi3\',\'/game/ipnone6s.html\');','html':'磅','tar':'iframe'}
]
}
,
{
'label':'关','list':
[
{'class':'about','href':'https://www.cnblogs.com/wangkun1993/','html':'园','tar':''}
,{'class':'about','href':'https://github.com/wangkun19930608/','html':'Git','tar':''}
,{'class':'about','href':'https://gitee.com/wangkun19930608','html':'Gitee','tar':''}
,{'class':'about','href':'https://coding.net/u/wangkun19930608','html':'Coding','tar':''}
,{'class':'about','href':'https://wangkun19930608.github.io/index.html','html':'GitP','tar':''}
,{'class':'about','href':'https://wangkun19930608.gitee.io/index.html','html':'GiteeP','tar':''}
,{'class':'about','href':'http://wangkun19930608.coding.me/','html':'CodingP','tar':''}
,{'class':'about','href':'https://cloud.tencent.com/developer/user/1178990','html':'TX','tar':''}
//,{'class':'about','href':'https://wangkun19930608.github.io/friends.html','html':'友','tar':'iframe'}
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
	
	var webURL = window.location.href;
    var splitFlag = "http://";
    if (webURL.substring(0, 5) == "https") {
        splitFlag = "https://";
    }
    var user = webURL.split(splitFlag)[1].split(".")[0];
    //user = 'yanghanqing';
    blogListURL = 'https://api.github.com/repos/' + user + '/' + user + '.github.io/contents/blog';
    issuesList = 'https://api.github.com/repos/' + user + '/' + user + '.github.io/issues';
    issuesHTML = 'https://github.com/' + user + '/' + user + '.github.io/issues'
    readmeURL = 'https://raw.githubusercontent.com/' + user + '/' + user + '.github.io/master/About Me.md';


    
    $("#commentsList").removeAttr('data_comments_url');
    $("#tips").html("我们不会获取您的用户名和密码,评论直接通过 HTTPS 与 Github API交互,<br>如果您开启了两步验证,请在博客的<a  target=\"_blank\" href=\"" + issuesHTML + "\">Github issues</a>下添加 Comment");

    
	
 };
 
function loadFoot(){
	
	
	var v=document.getElementById("footdiv");
	var l='<footer>Copyright (c) wangkun19930608 2014<br/>'
	+'<script type=\"text/javascript\">'
	+'var cnzz_protocol = ((\"https:\" == document.location.protocol) ? \" https://\" : \" http://\");'
	+'document.write(unescape(\"%3Cspan id=\'cnzz_stat_icon_1271464027\'%3E%3C/span%3E%3Cscript src=\'\" + cnzz_protocol + \"s13.cnzz.com/z_stat.php%3Fid%3D1271464027%26online%3D1%26show%3Dline\' type=\'text/javascript\'%3E%3C/script%3E\"));'
	+'</script>'
    +'</footer>';
	v.innerHTML=l;
	
	
	
}

function loadcomments(){
	titleString = getTitleStringNew();
	setCommentURL(issuesList, titleString);
}
 
 
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
	   h+=' width="100%" height="100%"></object>';
		var t=document.getElementById(id);
		t.style.display='block';
		t.innerHTML = h;
   };
   
   
    function fc(d){
		var k=document.getElementById('visi1');
		//var w=document.getElementById('visi2');//frame
		var z=document.getElementById('visi3');//div
		if(d==1){
			k.style.display='none';
			//w.style.display='none';
			z.style.display='block';
		}else{
			//w.style.display='none';
			k.style.display='block';
			z.style.display='none';
		}
		changeFrameHeight(); 
	};
	function changeFrameHeight(){
		var ifm= document.getElementById("visi3"); 
		ifm.style.height=(document.documentElement.clientHeight)+'px';
	};
	window.onresize=function(){  
		 changeFrameHeight();  
	} ;


function setCommentURL(issuesList, blogName) {
    $("#comments").show();
    console.log("获取并设置评论区");


    $.ajax({
        type: "GET",
        url: issuesList,
        dataType: 'json',
        async: false,
        success: function(json) {
            for (var i = 0; i < json.length; i++) {
                var title = json[i].title; // Blog title
                var comments_url = json[i].comments_url;
                if (title == blogName) {
                    console.log("该文章存在评论")
                    $('#commentsList').attr("data_comments_url", comments_url);
                    setComment(comments_url);
                    break;
                }
                $("#commentsList").children().remove();
                $("#commentsList").removeAttr('data_comments_url');

            }
        }
    });


}


function setComment(commentURL) {
    $('#commentsList').children().remove();

    $.getJSON(commentURL, function(json) {
        for (var i = 0; i < json.length; i++) {
            var avatar_url = json[i].user.avatar_url; // avatar_url
            var user = json[i].user.login;
            //var updated_at = json[i].updated_at;
            var updated_at = new Date(json[i].updated_at).toLocaleString();
            var body = json[i].body;

            // add blog list elements
            var commentHtml =
                "<li class=\"comment\">" +
                "<a class=\"pull-left\" href=\"#\"><img class=\"avatar\" src=\"" + avatar_url +
                "\" alt=\"avatar\"></a><div class=\"comment-body\"><div class=\"comment-heading\"><h4 class=\"user\">" + user +
                "</h4><h5 class=\"time\">" + updated_at +
                "</h5></div><p>" + body +
                "</p></div></li>";

            var new_obj = $(commentHtml);
            $('#commentsList').append(new_obj);

        }
    });

}

function login() {
    $('#myModal').modal();
}



function subComment() {

    var USERNAME = $("#txt_username").val();
    var PASSWORD = document.getElementById("txt_password").value; //
    var title = null;
    title = titleString;
    // 未开启评论
    if (typeof($("#commentsList").attr("data_comments_url")) == "undefined") {
        if (title == undefined || title == null || title == "") {
            return;
        }

        var createIssueJson = "{\"title\": \"" + title + "\"}";
        console.log(createIssueJson);
        $.ajax({
            type: "POST",
            url: issuesList,
            dataType: 'json',
            async: false,
            headers: {
                "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
            },
            data: createIssueJson,
            success: function() {
                console.log('开启评论成功:' + title);
                //重新遍历issue list
                setCommentURL(issuesList, title);
                console.log('重新遍历 issuesList 完成');

            }
        });
    }
    console.log("准备提交评论");
    // 已开启评论
    if (typeof($("#commentsList").attr("data_comments_url")) != "undefined") {
        var issueURL = $("#commentsList").attr("data_comments_url");
        var comment = $("#comment_txt").val();
        var commentJson = "{\"body\": \"" + comment + "\"}";
        console.log(comment);
        if (comment == "") {
            alert("评论不能为空");
            return;
        }

        $.ajax({
            type: "POST",
            url: issueURL,
            dataType: 'json',
            async: false,
            headers: {
                "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
            },
            data: commentJson,
            success: function() {
                console.log('评论成功');

                // 更新评论区
                if (title != null) {
                    setCommentURL(issuesList, title);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("账号密码错误,或者开启了两步验证");
            }
        });
    } else {
        console.log("未开启评论")
    }
}


function getTitleString() {
    var reg = new RegExp("(^|&)" + "title" + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}
function getTitleStringNew() {
	var s=window.location.pathname.split('/');
	var t;
	if(''!=s[s.length-1]){
		t=s[s.length-1];
	}else if(''!=s[s.length-2]){
		t=s[s.length-2];
	}
    if (t != null) return decodeURI(t);
    return null;
}
   
  