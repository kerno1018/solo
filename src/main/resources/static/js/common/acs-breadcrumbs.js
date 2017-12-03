define(["jquery","knockout"],function(r,e){function t(){this.storage=sessionStorage}function a(){var a=this;a.sessionStorage=new t,a.breadCrumbsArray=e.observableArray([]),a.breadCrumbsCount=e.computed(function(){return a.breadCrumbsArray().length},a),a.addBreadCrumb=function(r,e){a.breadCrumbsArray().length<1?a.breadCrumbsArray.push({url:e.path,originalUrl:r.path,parent:r.breadcrumb.parent,text:r.breadcrumb.title,level:r.breadcrumb.level}):a.breadCrumbsArray()[a.breadCrumbsArray().length-1].level<r.breadcrumb.level?a.breadCrumbsArray.push({url:e.path,originalUrl:r.path,parent:r.breadcrumb.parent,text:r.breadcrumb.title,level:r.breadcrumb.level}):a.breadCrumbsArray()[a.breadCrumbsArray().length-1].level==r.breadcrumb.level?(a.breadCrumbsArray.pop(),a.breadCrumbsArray.push({url:e.path,originalUrl:r.path,parent:r.breadcrumb.parent,text:r.breadcrumb.title,level:r.breadcrumb.level})):a.breadCrumbsArray.splice(r.breadcrumb.level)},a.resetBreadCrumbs=function(){a.breadCrumbsArray.removeAll()},a.afterRender=function(){if(a.breadCrumbsArray()[a.breadCrumbsCount()-1].level>1){var t=require.toUrl("WEB-INF/classes/navigation.json"),n=a.breadCrumbsArray()[a.breadCrumbsCount()-1],u=[n];r.getJSON(t,function(t){for(var a=t.filter(function(r){return r.breadcrumb&&"object"==typeof r.breadcrumb});null!==n.parent;)r.each(a,function(r,e){return e.id==n.parent?(u.unshift({originalUrl:e.path,url:e.path,level:e.breadcrumb.level,parent:e.breadcrumb.parent,text:e.breadcrumb.title,viewModel:e.pageFragments[0].viewModelNamePath,module:e.module}),n=u[0],!1):void 0});r.each(u,function(t,a){if(a.hasOwnProperty("viewModel")){var n=a.originalUrl;if(a.originalUrl.indexOf(":")>-1){var u=a.originalUrl.split("/");u=u.filter(function(r){return":"===r.charAt(0)})}a.viewModel=a.viewModel&&"/"!=a.viewModel[0]&&0!==a.viewModel.indexOf("modules/")?__MODULE_PREFIX__(a.module,a.viewModel):a.viewModel,require([a.viewModel],function(t){r.each(u,function(r,a){n=n.replace(a,e.unwrap(t[a.substring(1)]))}),a.url=n})}})}),window.setTimeout(function(){a.breadCrumbsArray(u)},1e3)}}}return t.prototype.toType=function(r){return{}.toString.call(r).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},t.prototype.getKey=function(r){return JSON.parse(this.storage.getItem(r))},t.prototype.setKey=function(r,e){var t=this.toType(e);/object|array/.test(t)&&(e=JSON.stringify(e)),this.storage.setItem(r,JSON.stringify(e))},t.prototype.deleteKey=function(r){this.storage.removeItem(r)},a});