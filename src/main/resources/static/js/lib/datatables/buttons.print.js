!function(t,e){"use strict";var o=document.createElement("a"),n=function(e){var n,r=t(e).clone()[0];return"link"===r.nodeName.toLowerCase()&&(o.href=r.href,n=o.host,-1===n.indexOf("/")&&(n+="/"),r.href=o.protocol+"//"+n+o.pathname+o.search),r.outerHTML};e.ext.buttons.print={className:"buttons-print",text:function(t){return t.i18n("buttons.print","Print")},action:function(e,o,r,a){var i=o.buttons.exportData(a.exportOptions),s=function(t,e){for(var o="<tr>",n=0,r=t.length;r>n;n++)o+="<"+e+">"+t[n]+"</"+e+">";return o+"</tr>"},u='<table class="'+o.table().node().className+'">';a.header&&(u+="<thead>"+s(i.header,"th")+"</thead>"),u+="<tbody>";for(var c=0,l=i.body.length;l>c;c++)u+=s(i.body[c],"td");u+="</tbody>",a.footer&&(u+="<thead>"+s(i.footer,"th")+"</thead>");var d=window.open("",""),h=a.title.replace("*",t("title").text());d.document.close();var f="<title>"+h+"</title>";t("style, link").each(function(){f+=n(this)}),t(d.document.head).html(f),t(d.document.body).html("<h1>"+h+"</h1><div>"+a.message+"</div>"+u),a.customize&&a.customize(d),setTimeout(function(){a.autoPrint&&(d.print(),d.close())},250)},title:"*",message:"",exportOptions:{},header:!0,footer:!1,autoPrint:!0,customize:null}}(jQuery,jQuery.fn.dataTable);