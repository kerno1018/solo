!function(n,i){"use strict";n.extend(i.ext.buttons,{colvis:function(n,i){return{extend:"collection",text:function(n){return n.i18n("buttons.colvis","Column visibility")},className:"buttons-colvis",buttons:[{extend:"columnsToggle",columns:i.columns}]}},columnsToggle:function(n,i){var o=n.columns(i.columns).indexes().map(function(n){return{extend:"columnToggle",columns:n}}).toArray();return o},columnToggle:function(n,i){return{extend:"columnVisibility",columns:i.columns}},columnsVisibility:function(n,i){var o=n.columns(i.columns).indexes().map(function(n){return{extend:"columnVisibility",columns:n,visibility:i.visibility}}).toArray();return o},columnVisibility:{columns:null,text:function(n,i,o){return o._columnText(n,o.columns)},className:"buttons-columnVisibility",action:function(n,i,o,t){var s=i.column(t.columns);s.visible(void 0!==t.visibility?t.visibility:!s.visible())},init:function(n,i,o){var t=this,s=n.column(o.columns);n.on("column-visibility.dt"+o.namespace,function(n,i,s,e){s===o.columns&&t.active(e)}).on("column-reorder.dt"+o.namespace,function(s,e,l){var c=n.column(o.columns);i.text(o._columnText(n,o.columns)),t.active(c.visible())}),this.active(s.visible())},destroy:function(n,i,o){n.off("column-visibility.dt"+o.namespace).off("column-reorder.dt"+o.namespace)},_columnText:function(n,i){var o=n.column(i).index();return n.settings()[0].aoColumns[o].sTitle.replace(/\n/g," ").replace(/<.*?>/g,"").replace(/^\s+|\s+$/g,"")}},colvisRestore:{className:"buttons-colvisRestore",text:function(n){return n.i18n("buttons.colvisRestore","Restore visibility")},init:function(n,i,o){o._visOriginal=n.columns().indexes().map(function(i){return n.column(i).visible()}).toArray()},action:function(n,i,o,t){i.columns().every(function(n){this.visible(t._visOriginal[n])})}},colvisGroup:{className:"buttons-colvisGroup",action:function(n,i,o,t){i.columns(t.show).visible(!0),i.columns(t.hide).visible(!1)},show:[],hide:[]}})}(jQuery,jQuery.fn.dataTable);