requirejs.config(
    {
        "baseUrl": "",
        "waitSeconds": 300,
        "paths": {
            "promise": "js/lib/es6-promise/promise.min",
            "ojs": "js/lib/oj/v2.0.0/min",
            "ojL10n": "js/lib/oj/v2.0.0/ojL10n",
            "ojtranslations": "js/lib/oj/v2.0.0/resources",
            "ojdnd": "js/lib/dnd-polyfill/dnd-polyfill-1.0.0.min",
            "hammerjs": "js/lib/hammer/hammer-2.0.4.min",
            "signals": "js/lib/js-signals/signals.min",
            "crossroads": "js/lib/crossroads/crossroads.min",
            "ckeditor": "js/lib/ckeditor/ckeditor",
            "history": "js/lib/history/history.iegte8.min",
            "knockout": "js/lib/knockout/knockout",
            "knockout.mapping": "js/lib/knockout.mapping/knockout.mapping-latest",
            "ko-binding-utils": "js/common/ko-binding-utils",
            "knockout-validation": "js/lib/knockout/knockout.validation",
            "bootstrap-file-upload": "js/lib/bootstrap/bootstrap.file-input",
            "jquery": "js/lib/jquery/jquery.min",
            "jquery.autosize": "js/lib/jquery/jquery.autosize.min",
            "jqueryui-amd": "js/lib/jquery/jqueryui-amd.min",
            "jqueryxml2js": "js/lib/jquery/jquery.xml2json",
            "jqueryjson2xml": "js/lib/jquery/jquery.json2xml",
            "bootstrap": "js/lib/bootstrap/bootstrap.min",
            "text": "js/lib/require/text.min",
            "koext": "js/lib/koexternaltemplateengine/koExternalTemplateEngine_all",
            "knockout-amd-helpers": "js/lib/knockout-amd-helpers/knockout-amd-helpers.min",
            "sammy": "js/lib/sammy/sammy-min",
            "chart-util": "js/common/chart-util",
            "sql-service": "js/common/sql-service",
            "date-picker": "js/lib/datepicker/bootstrap-datetimepicker",
            "date-util": "js/common/date-util",
            "moment": "js/lib/moment/moment.min",
            "moment-timezone": "js/lib/moment/moment-timezone-all-years",
            "kogrid": "js/lib/kogrid/koGrid-2.1.1",
            "metismenu": "js/lib/metisMenu/jquery.metisMenu",
            "acs-nav": "js/lib/acs/acs-nav",
            "retina": "js/lib/retina/retina-1.1.0.min",
            "pnotify": "js/lib/pnotify/pnotify.custom",
            "google-code-prettify": "js/lib/prettify/prettify",
            "prettify-sql": "js/lib/prettify/lang-sql",
            "pace": "js/lib/pace/pace.min",
            "jPages": "js/lib/pagination/jPages.min",
            "user": "js/common/user",
            "user-validation": "js/common/user-validation",
            "dialog-utils": "js/common/dialog-utils",
            "modal-utils": "js/common/modal-utils",
            "alert-utils": "js/common/alert-util",
            "httputils": "js/common/httputils",
            "truncate-utils": "js/common/truncate-utils",
            "debug_option": "debug_option",
            "ko-validation-util": "js/common/ko-validation-util",
            "onresourceload": "js/common/onresourceload",
            "dlmenu": "js/lib/dlmenu/jquery.dlmenu",
            "Modernizr": "js/lib/dlmenu/modernizr.custom",
            "datatables": "js/lib/datatables/jquery.dataTables",
            "dataTables.buttons": "js/lib/datatables/dataTables.buttons.min",
            "buttons.html5": "js/lib/datatables/buttons.html5.min",
            "jszip": "js/lib/datatables/jszip.min",
            "buttons.colVis": "js/lib/datatables/buttons.colVis.min",
            "buttons.print": "js/lib/datatables/buttons.print.min",
            "datatables-knockout": "js/lib/datatables/datatables.knockout",
            "datatables-responsive": "js/lib/datatables/dataTables.responsive",
            "tooltipster": "js/lib/tooltipster/jquery.tooltipster",
            "i18n": "js/lib/i18n/i18n.min",
            "nls/strings":"js/base/nls/strings",
            "resource-bundle": "js/common/resource-bundle",
            "acs-components": "js/common/acs-components",
            "acs-resource": "js/common/acs-resource",
            "suggest": "js/common/maggicsuggest/magicsuggest.min",
            "mockjax": "js/lib/mockjax/jquery.mockjax",
            "mock_rules": "test/mock_rules",
            "Modal": "js/lib/Modal/Modal",
            "jquery-ui": "js/lib/jquery/jquery-ui.custom.min",
            "cache-lib": "js/common/cache",
            "acs-cache": "js/common/acs-cache",
            "underscore": "js/lib/underscore/underscore-min",
            "gridstack": "js/lib/gridstack/gridstack",
            "bootstrap-select": "js/lib/bootstrap/bootstrap-select",
            "html-utils": "<%=base_base%>/js/html-utils",
            "tablesearch": "js/lib/datatables/datatables.advsearch",
            "jquery.mark" : "js/lib/jquery/jquery.mark.min",
            "chosen": "js/lib/chosen/chosen.jquery",
            "signal-emitter": "js/lib/js-signals/signal-emitter",
            "iframe-height": "js/lib/iframe-height/iframeheight.min",
            "jsdiff": "js/lib/jsdiff/jsdiff.min",
            "index":"js/index"
        },
        "packages": [{
            "name": "acs-customer-picker",
            "location": "js/common/acs-business-components",
            "main": "acs-customer-picker"
        }],
        "shim": {
            "koext": {
                "deps": ["jquery", "knockout"]
            },
            "jquery": {
                "exports": ["jQuery", "$"]
            },
            "jquery.autosize": {
                "deps": ["jquery"]
            },
            "bootstrap": {
                "deps": ["jquery"]
            },
            "suggest": {
                "deps": ["jquery"]
            },
            "sammy": {
                "deps": ["jquery"],
                "exports": "Sammy"
            },
            "date-picker": {
                "deps": ["jquery"]
            },
            "prettify-sql": {
                "deps": ["google-code-prettify"],
                "exports": "prettify-sql"
            },
            "retina": {},
            "kogrid": {
                "deps": ["jquery"]
            },
            "crossroads": {
                "deps": ["signals"],
                "exports": "crossroads"
            },
            "Modernizr": {
                "exports": "Modernizr"
            },
            "dlmenu": {
                "deps": ["jquery", "Modernizr"]
            },
            "tablesearch": {
                "deps": ["jquery", "datatables"]
            },
            "dataTables.buttons": {
                "deps": ["jquery", "datatables"]
            },
            "buttons.html5": {
                "deps": ["dataTables.buttons"]
            },
            "buttons.colVis": {
                "deps": ["dataTables.buttons"]
            },
            "buttons.print": {
                "deps": ["dataTables.buttons"]
            },
            "tooltipster": {
                "deps": ["jquery"],
                "exports": "tooltipster"
            },
            "acs-resource": {
                "deps": ["jquery"]
            },
            "mockjax": {
                "deps": ["jquery"]
            },
            "jPages": {
                "deps": ["jquery"]
            },
            "bootstrap-select": {
                "deps": ["jquery", "bootstrap"]
            },
            "jPages": {
                "deps": ["jquery"]
            },
            "iframe-height": {
                "deps": ["jquery"]
            }
        },
        "wrapShim": true
    }
);
define(['jquery','knockout','index','sammy','koext'],function($, ko, id, Sammy,koext){
           // ko.bindingHandlers.module.baseDir = "js";
           // ko.amdTemplateEngine.defaultPath = "templates";
        infuser.defaults.templateUrl = "";
        infuser.defaults.templateSuffix = ".tmpl.html";
    var self = this;
    self.routeConfig = {};
    self.configRoute = function(data){
        if(typeof data == 'string'){
            data = $.parseJSON(data);
        }
        $.each(data,function(idx,item){
            self.routeConfig[item.path] = item;
        });
    };
    $.getJSON(require.toUrl("../navigation.json"),function(data){
        self.configRoute(data);
    }).done(function(){
        Sammy(function() {
            var sammyContext = this;
            // define a 'get' route that will be triggered at '#/path'
            var handler = function(){
                var context = this;
                var hash = '#' + context.path.split('#')[1];
                var rt = self.routeConfig[hash];
                $.each(rt.pageFragments,function(i,fragement){
                    $(fragement.scope).each(function(idx,scope){
                        require([fragement.vmPath],function(vm){
                            var path = fragement.templatePath;
                            var deferred = $.Deferred();
                            deferred.done(function(){
                                ko.applyBindingsToNode(scope,{template:{
                                    name:path,
                                    data:vm,
                                    afterRender:typeof vm[fragement.afterRender] == 'function' ? vm[fragement.afterRender]:null }});
                            });

                            if(typeof vm[fragement.init] == 'function'){
                                var promise = vm[fragement.init](context);
                                if(promise && typeof promise.then == 'function'){
                                    promise.done(function(){
                                        deferred.resolve();
                                    });
                                }else{
                                    deferred.resolve();
                                }
                            }else{
                                deferred.resolve();
                            }

                        });
                    });
                });
            }
            for(var path in self.routeConfig){
                sammyContext.route('get',path,handler);
            }
            this.get('/index.html', function () { });
        }).run();
        ko.applyBindings(new id());
    });

});
