"use strict";
!function(t){
	function e(e){
		var a=t.i18n.getMessage(e.getAttribute("data-i18n"));
		""!==a&&(e.hasAttribute("aria-label")?e.setAttribute("aria-label",a):e.textContent=a)
	}
	var a=Array.from(document.querySelectorAll("[data-i18n]"));
	a.length>0&&a.map(e);
	var r=document.getElementById("year");
	r&&(r.textContent=(new Date).getFullYear()
)}(chrome);