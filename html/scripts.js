(function(e,h){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=h;if(h){return}var u=e.document,r=u.documentElement,i=[],k=[],p=[],o={},g=30,f=u.getElementsByTagName("head")[0]||r,b=f.getElementsByTagName("link"),d=[],a=function(){var B=b,w=B.length,z=0,y,x,A,v;for(;z<w;z++){y=B[z],x=y.href,A=y.media,v=y.rel&&y.rel.toLowerCase()==="stylesheet";if(!!x&&v&&!o[x]){if(y.styleSheet&&y.styleSheet.rawCssText){m(y.styleSheet.rawCssText,x,A);o[x]=true}else{if(!/^([a-zA-Z]+?:(\/\/)?)/.test(x)||x.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:x,media:A})}}}}t()},t=function(){if(d.length){var v=d.shift();n(v.href,function(w){m(w,v.href,v.media);o[v.href]=true;t()})}},m=function(G,v,x){var E=G.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),H=E&&E.length||0,v=v.substring(0,v.lastIndexOf("/")),w=function(I){return I.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+v+"$2$3")},y=!H&&x,B=0,A,C,D,z,F;if(v.length){v+="/"}if(y){H=1}for(;B<H;B++){A=0;if(y){C=x;k.push(w(G))}else{C=E[B].match(/@media ([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&w(RegExp.$2))}z=C.split(",");F=z.length;for(;A<F;A++){D=z[A];i.push({media:D.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:k.length-1,minw:D.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1),maxw:D.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1)})}}j()},l,q,j=function(E){var v="clientWidth",x=r[v],D=u.compatMode==="CSS1Compat"&&x||u.body[v]||x,z={},C=u.createDocumentFragment(),B=b[b.length-1],w=(new Date()).getTime();if(E&&l&&w-l<g){clearTimeout(q);q=setTimeout(j,g);return}else{l=w}for(var y in i){var F=i[y];if(!F.minw&&!F.maxw||(!F.minw||F.minw&&D>=F.minw)&&(!F.maxw||F.maxw&&D<=F.maxw)){if(!z[F.media]){z[F.media]=[]}z[F.media].push(k[F.rules])}}for(var y in p){if(p[y]&&p[y].parentNode===f){f.removeChild(p[y])}}for(var y in z){var G=u.createElement("style"),A=z[y].join("\n");G.type="text/css";G.media=y;if(G.styleSheet){G.styleSheet.cssText=A}else{G.appendChild(u.createTextNode(A))}C.appendChild(G);p.push(G)}f.insertBefore(C,B.nextSibling)},n=function(v,x){var w=c();if(!w){return}w.open("GET",v,true);w.onreadystatechange=function(){if(w.readyState!=4||w.status!=200&&w.status!=304){return}x(w.responseText)};if(w.readyState==4){return}w.send(null)},c=(function(){var v=false;try{v=new XMLHttpRequest()}catch(w){v=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return v}})();a();respond.update=a;function s(){j(true)}if(e.addEventListener){e.addEventListener("resize",s,false)}else{if(e.attachEvent){e.attachEvent("onresize",s)}}})(this,(function(f){if(f.matchMedia){return true}var e,i=document,c=i.documentElement,g=c.firstElementChild||c.firstChild,h=!i.body,d=i.body||i.createElement("body"),b=i.createElement("div"),a="only all";b.id="mq-test-1";b.style.cssText="position:absolute;top:-99em";d.appendChild(b);b.innerHTML='_<style media="'+a+'"> #mq-test-1 { width: 9px; }</style>';if(h){c.insertBefore(d,g)}b.removeChild(b.firstChild);e=b.offsetWidth==9;if(h){c.removeChild(d)}else{d.removeChild(b)}return e})(this));

$(document).ready(function(){

	$("#ej").click(function() {
	  $("#ej").css("color", "black");
	  $("#ej").css("background-color", "white");
	  });

	$("#kj").click(function() {
	  $("#kj").css("color", "orange");
	  $("#kj").css("background-color", "blue");
	  });

	$("#pj").click(function() {
	  $("#pj").css("color", "#CC8899");
	  $("#pj").css("background-color", "#FF73DF");
	  });

	$("#hh").click(function() {
	  $("#hh").css("color", "purple");
	  $("#hh").css("background-color", "green");
	  });

	$("#mt").click(function() {
	  $("#mt").css("color", "red");
	  $("#mt").css("background-color", "yellow");
	  });

	$("#rk").click(function() {
	  $("#rk").css("color", "silver");
	  $("#rk").css("background-color", "#FF4493");
	  });


	});
});