"use strict";
!function(e,t){
	try{
		var n=new URL(e.top.location.href),
		a=n.searchParams.get("url");
		if(null!==a){
		var r=t.getElementById("domain");
		r.textContent=new URL(a).hostname,
		r.classList.add("domain")}
	}catch(o){}
	t.body.addEventListener("contextmenu",function(e){
		return e.preventDefault(),!1});
	try{
		var c=new URL(window.top.location.href);
		chrome.runtime.sendMessage({cmd:"track_page_view",path:c.pathname+c.search})
	}catch(o){}}(window,document);