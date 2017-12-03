define(["knockout","jquery"],function(t,e){"use strict";t.bindingHandlers.tooltipster={init:function(n,a,s,i,o){function l(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}var r=e(n),d=t.utils.unwrapObservable(a()),u=d.template||!1,c=d.data||!1,l=l(),p={theme:"tooltipster-shadow",autoClose:d.autoClose||!1,interactive:!0,trigger:d.trigger||"click",contentAsHTML:!0,functionReady:function(n,a){c?t.applyBindingsToNode(e("#"+l)[0],{template:{name:u,data:c,afterRender:function(){e(".tooltipstered").tooltipster("hide"),e("#"+l+" .close").click(function(){n.tooltipster("hide")}),a.hover(function(){n.addClass("visible")},function(){n.removeClass("visible")}),n.tooltipster("show"),n.tooltipster("reposition"),n.tooltipster("reposition")}}}):t.applyBindings(i,e("#"+l)[0])}};return u!==!1&&(p.content=c?"<div id="+l+"><!-- ko template: { name: template, data: data } --><!-- /ko --></div>":e("#"+u).html()),e.extend(p,d.options),r.tooltipster(p),t.utils.domNodeDisposal.addDisposeCallback(n,function(){e(n).tooltipster("destroy")}),{controlsDescendantBindings:!1}}},t.bindingHandlers.truncate={update:function(n,a,s,i,o){var n=e(n),l=t.utils.unwrapObservable(a()),r=l.options||null,d=r?r.length:10,u=r&&r.tooltip===!1?!1:!0,c=t.unwrap(l.data),p=c;r&&c&&c.length>d&&(p=c.substring(0,d),p+="...",u&&e(n).tooltipster({theme:"tooltipster-shadow",content:c})),e(n).text(p)}},t.bindingHandlers.advancedChecked={init:function(e,n,a){t.bindingHandlers.checked.init(e,n,a)},update:function(e,n,a){var s=t.utils.unwrapObservable(n());e.indeterminate="partial"==s}},t.bindingHandlers.slideToggle={update:function(n,a,s,i,o){var l=a(),r=s(),d=t.utils.unwrapObservable(l),u=r.slideDuration||400;0==d?(e(n).find(".toggle-icon").removeClass("fa-caret-right").addClass("fa-caret-down"),e(n).closest(".panel").find(".panel-body").slideDown(u).addClass("in")):(e(n).closest(".panel").find(".panel-body").slideUp(u).removeClass("in"),e(n).find(".toggle-icon").removeClass("fa-caret-down").addClass("fa-caret-right"))}},t.bindingHandlers.truncatedList={update:function(n,a,s,i,o){var l=a(),r=t.utils.unwrapObservable(l),d=r.options||null,u=d?d.show:5,c=t.unwrap(r.data);if(c.length>u){var p=c.slice(0,u),h=c.length-p.length+" More",v=e('<a class="see-more" href="javascript:void(0);" data-less="'+p.join(", ")+'" data-more="'+c.join(", ")+'">'+h+"</a>");e(n).text(p.join(", ")+" ").append(v[0]),e(v[0]).on("click",function(){var t=e(this).data("more")+" ",n=e(this).data("less")+" ";e(this).hasClass("see-more")?(e(this).removeClass("see-more").addClass("see-less"),e(this).html("less"),e(this).parent().contents()[0].textContent=t):(e(this).removeClass("see-less").addClass("see-more"),e(this).html(h),e(this).parent().contents()[0].textContent=n)})}else e(n).text(c.join(", "))}},t.bindingHandlers.radioGroup={init:function(n,a,s,i,o){var l,r,d,u;if(d=a(),!t.isWriteableObservable(d))throw"You must pass an observable or writeable computed";r=e(n),l=r.hasClass("btn")?r:e(".btn",r),u=s(),l.each(function(){var n,a,s;return a=this,n=e(a),s=u.radioValue||n.attr("data-value")||n.attr("value")||n.text(),n.on("click",function(){d(t.utils.unwrapObservable(s))}),t.computed({disposeWhenNodeIsRemoved:a,read:function(){n.toggleClass("active",d()===t.utils.unwrapObservable(s))}})})}}});