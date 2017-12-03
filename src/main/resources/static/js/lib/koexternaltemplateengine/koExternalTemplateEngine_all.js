!function(e,t){var n={};e.trafficCop=function(t,a){var r,l=t;if(2===arguments.length&&(l=e.extend(!0,a,{url:t})),r=JSON.stringify(l),r in n)for(i in{success:1,error:1,complete:1})n[r][i](l[i]);else n[r]=e.ajax(l).always(function(){delete n[r]});return n[r]}}(jQuery),function(e,t,n){var a={templates:{},storeTemplate:function(e,t){this.templates[e]=t},getTemplate:function(e){return this.templates[e]},purge:function(){this.templates={}}},r={templateIds:[],storeTemplate:function(e,t){var n=document.getElementById(e);null===n&&(this.templateIds.push(e),n=document.createElement("script"),n.type="text/html",n.id=e,document.body.appendChild(n)),n.text=t},getTemplate:function(e){return document.getElementById(e)},purge:function(){for(var e=0;e<this.templateIds.length;e++)document.body.removeChild(document.getElementById(this.templateIds[e]));this.templateIds=[]}},l="<div class='infuser-error'>The template <a href='{TEMPLATEURL}'>{TEMPLATEID}</a> could not be loaded. {STATUS}</div>",o=function(e,t,n){return l.replace("{STATUS}",e).replace("{TEMPLATEID}",t).replace("{TEMPLATEURL}",n)},i=[],u={getTemplatePath:function(e){var t=e.templatePrefix+e.templateId+e.templateSuffix;return e.templateUrl===n||""===e.templateUrl?t:e.templateUrl+"/"+t},templateGetSuccess:function(e,t){return function(n){p.store.storeTemplate(e,n),t(p.store.getTemplate(e))}},templateGetError:function(t,n,a){return function(r){-1===e.inArray(t,i)&&i.push(t);var l=o("HTTP Status code: "+r.status,t,n);p.store.storeTemplate(t,l),a(p.store.getTemplate(t))}},getAjaxOptions:function(e){}},p={storageOptions:{hash:a,script:r},store:a,defaults:{templateUrl:"",templateSuffix:".html",templatePrefix:"",ajax:{async:!0,dataType:"html",type:"GET"},target:function(e){return"#"+e},loadingTemplate:{content:'<div class="infuser-loading">Loading...</div>',transitionIn:function(t,n){var a=e(t);a.hide(),a.html(n),a.fadeIn()},transitionOut:function(t){e(t).html("")}},postRender:function(e){},preRender:function(e,t){},render:function(t,n){var a=e(t);0===a.children().length?a.append(e(n)):a.children().replaceWith(e(n))},bindingInstruction:function(e,t){return e},useLoadingTemplate:!0},get:function(t,n){var a,r=e.extend({},p.defaults,"object"==typeof t?t:{templateId:t});r.ajax.url=u.getTemplatePath(r),a=p.store.getTemplate(r.ajax.url),a&&-1===e.inArray(r.ajax.url,i)?n(a):(r.ajax.success=u.templateGetSuccess(r.ajax.url,n),r.ajax.error=u.templateGetError(r.templateId,r.ajax.url,n),e.trafficCop(r.ajax))},getSync:function(t){var n,a,r=e.extend({},p.defaults,"object"==typeof t?t:{templateId:t},{ajax:{async:!1}});return r.ajax.url=u.getTemplatePath(r),n=p.store.getTemplate(r.ajax.url),n&&-1===e.inArray(r.ajax.url,i)||(a=null,r.ajax.success=function(e){a=e},r.ajax.error=function(t){-1===e.inArray(r.ajax.url)&&i.push(r.ajax.url),a=o("HTTP Status code: exception.status",r.templateId,r.ajax.url)},e.ajax(r.ajax),null===a?a=o("An unknown error occurred.",r.templateId,r.ajax.url):(p.store.storeTemplate(r.ajax.url,a),n=p.store.getTemplate(r.ajax.url))),n},infuse:function(t,a){var r=e.extend({},p.defaults,"object"==typeof t?t:a,"string"==typeof t?{templateId:t}:n),l="function"==typeof r.target?r.target(t):r.target;r.useLoadingTemplate&&r.loadingTemplate.transitionIn(l,r.loadingTemplate.content),p.get(r,function(e){var t=e;r.preRender(l,t),t=r.bindingInstruction(t,r.model),r.useLoadingTemplate&&r.loadingTemplate.transitionOut(l),r.render(l,t),r.postRender(l)})}};t.infuser=p}(jQuery,window),define(["knockout"],function(e){!function(e,t,n,a,r){var l=function(e,n){var l,o=this;o.templateId=e,o.loaded=!1,o.template=t.observable(a.defaults.useLoadingTemplate?a.defaults.loadingTemplate.content:r),o.template.data={},o.options=t.utils.extend({},n),o.options.templateId=e,o.options&&o.options.afterRender&&(l=o.options.afterRender,n.afterRender=function(){o.loaded&&l.apply(o.options,arguments)})};t.utils.extend(l.prototype,{data:function(e,t){return 1===arguments.length?("precompiled"===e&&this.template(),this.template.data[e]):void(this.template.data[e]=t)},text:function(e){return this.loaded||this.getTemplate(),0===arguments.length?this.template():void this.template(arguments[0])},getTemplate:function(){var e=this;a.get(e.options,function(t){e.data("precompiled",null),e.template(t),e.loaded=!0})}});var o=function(e){var n=e?new e:new t.nativeTemplateEngine;return n.templates={},n.makeTemplateSource=function(e,a,r){if("string"==typeof e){var o=document.getElementById(e);return o?new t.templateSources.domElement(o):(n.templates[e]||(n.templates[e]=new l(e,r)),n.templates[e])}return 1==e.nodeType||8==e.nodeType?new t.templateSources.anonymousTemplate(e):void 0},n.renderTemplate=function(e,t,a){var r=n.makeTemplateSource(e,t,a);return n.renderTemplateSource(r,t,a)},n};t.KoExternalTemplateEngine=o,t.setTemplateEngine(n.tmpl&&n.tmpl.tag.tmpl.open.toString().indexOf("__")>=0?new o(t.jqueryTmplTemplateEngine):new o)}(window,e,jQuery,infuser)});