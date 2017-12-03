define(["jquery","dialog-utils","alert-utils","user"],function(e,r,t,o){String.prototype.truncText=function(e,r){e=e?e:e=500,"undefined"==typeof r&&(r=!0);var t=this.length>e,o=t?this.substr(0,e-1).valueOf():this.valueOf();return o=r&&t?o.substr(0,o.lastIndexOf(" ")):o,t?o+"&hellip;":o},e.ajaxSetup({beforeSend:function(e){o.token&&e.setRequestHeader("Authorization","Bearer "+o.token)}});var a=e.ajax;e.ajax=function(){var e,r=arguments[0];if("object"==typeof r?e=r:"string"==typeof r&&(e=arguments[1]||{}),e.global!==!1&&"false"!==e.global){var t=e.error;e.error=function(e,r,o){n(e)?e.processed=!0:t&&t.call(this,e,r,o)}}return a.apply(this,arguments)},e(document).bind("ajaxSend",function(r,t,o){e("#loading").show()}).bind("ajaxComplete",function(){e("#loading").hide()}).bind("ajaxError ",function(e,r,t,o){s(r,t,o)});var s=function(e,r,o){if(r.global!==!1&&"false"!==r.global&&!e.processed){var a=u(e,null,o),s=(a.errorCode?"("+a.errorCode+") ":"")+a.message+(a.logRefCode?" ["+a.logRefCode+"]":"")+(a.rootCause?"<br/>"+a.rootCause:"");t.showErrorAlert(s.truncText(),null,!0)}},n=function(a){if(a.processed)return!0;var s=i(a);return!s||1001!=s.errorCode&&1003!=s.errorCode?s&&1002==s.errorCode&&(r.alertError(s.message,function(){e.ajax({type:"GET",url:"rest/userservice/user_logout",dataType:"json",contentType:"application/json; charset=utf-8"}),o.userLoggedIn(!1),o.userName(null),o.userId(null),location.origin=location.origin||location.protocol+"//"+location.hostname+(location.port?":"+location.port:""),location.href=location.hash?location.origin+location.pathname+"?redirect="+location.hash.substring(1):location.origin+location.pathname}),a.processed=!0):(t.showErrorAlert(s.message.truncText(),null,!0),a.processed=!0),a.processed},i=function(e){var r={};try{if(r=JSON.parse(e.responseText),r.errorCode)return r}catch(t){r={}}return r.httpStatus=parseInt(e.status),502==r.httpStatus||503==r.httpStatus?(r.errorCode=1001,r.message="("+r.httpStatus+") The application seems not available at this time, please try again later"):403==r.httpStatus?(r.errorCode=1002,r.message="You tried to access forbidden resource or your session has timed out, please login again!"):404==r.httpStatus?(r.errorCode=1003,r.message="The service you are trying to access is not found, please contact Oracle Support for help!"):0==r.httpStatus&&(r.errorCode=1002,r.message="There is a network issue or your session has timed out, please login again!"),r.errorCode?r:null},u=function(e,r,t){var o={};if("parsererror"==t)o.errorCode=2003,o.message="Parsing JSON Request failed";else if("timeout"==t)o.errorCode=2004,o.message="Request Time out";else if("abort"==t)o.errorCode=2005,o.message="Request was aborted by the server";else try{o=JSON.parse(e.responseText)}catch(a){o.errorCode=2006,o.message=e.responseText||"Network error detected, please try reload the page"}return o},l=function(e,r,t){var o=i(e);return o||(o=u(e,r,t)),o},c=function(e,r,t){var o=l(e,r,t);return o&&o.message?o.message:""},d=function(e,r,t){var o=l(e,r,t);return o?(o.errorCode?"("+o.errorCode+") ":"")+o.message+(o.logRefCode?" ["+o.logRefCode+"]":"")+(o.rootCause&&o.rootCause!==o.message?" - "+o.rootCause:""):""};return{getApplicationError:u,getSystemError:i,getError:l,getErrorMessage:c,getFullErrorMsg:d,htmlDecode:function(e){var r=document.createElement("div");return r.innerHTML=e,0===r.childNodes.length?"":r.childNodes[0].nodeValue},htmlEncode:function(e){var r=document.createElement("div");return r.textContent=e,r.innerHTML},selectiveHtmlDecode:function(e){for(var r=[["lt","<"],["gt",">"]],t=0,o=r.length;o>t;++t)e=e.replace(new RegExp("&"+r[t][0]+";","g"),r[t][1]);return e}}});