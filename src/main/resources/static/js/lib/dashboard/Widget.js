define(["knockout"],function(e){"use strict";var i=function(i){this.id=i.id,this.name=i.name,this.description=i.description,this.disabledForAdd=i.disabledForAdd,this.icon=i.icon,this.width=i.width||1,this.height=i.height||1,this.module=i.module,this.colorcode=i.colorcode||"#800080",this.templatePath=i.templatePath,this.viewModelPath=i.viewModelPath,this.onInitCallback=i.onInitCallback,this.widgetOptions=i.widgetOptions,this.enableConfig=i.widgetOptions&&i.widgetOptions.config&&i.widgetOptions.config.templatePath?!0:!1,this.enableHelp=i.enableHelp||!0,this.headerLink=e.observable(),this.enableHeaderLink=e.observable(!1),this.enableRefresh=i.widgetOptions&&i.widgetOptions.enableRefresh===!1?!1:!0,this.refreshInterval=i.widgetOptions&&i.widgetOptions.enableRefresh!==!1&&i.widgetOptions.refreshInterval?i.widgetOptions.refreshInterval:12e4,this.refreshIntervalId,this.privilege=i.privilege,this.service=i.service,this.category=i.category,this.refId=i.refId,this.settings=i.settings,this.widgetViewModel=e.observable(),this.x=i.xPos||-1,this.y=i.yPos||-1};return i});