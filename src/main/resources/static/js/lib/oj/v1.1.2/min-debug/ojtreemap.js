/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreemap"], function($oj$$40$$, $$$$39$$, $comp$$13$$, $base$$10$$, $dvt$$7$$) {
  $oj$$40$$.$__registerWidget$("oj.ojTreemap", $$$$39$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$113$$, $callback$$115$$, $callbackObj$$9$$) {
    return $dvt$$7$$.DvtTreemap.newInstance($context$$113$$, $callback$$115$$, $callbackObj$$9$$);
  }, $_ConvertLocatorToSubId$:function($locator$$46$$) {
    var $subId$$44$$ = $locator$$46$$.subId;
    "oj-treemap-node" == $subId$$44$$ ? $subId$$44$$ = "node" + this.$_GetStringFromIndexPath$($locator$$46$$.indexPath) : "oj-treemap-tooltip" == $subId$$44$$ && ($subId$$44$$ = "tooltip");
    return $subId$$44$$;
  }, $_ConvertSubIdToLocator$:function($subId$$45$$) {
    var $locator$$47$$ = {};
    0 == $subId$$45$$.indexOf("node") ? ($locator$$47$$.subId = "oj-treemap-node", $locator$$47$$.indexPath = this.$_GetIndexPath$($subId$$45$$)) : "tooltip" == $subId$$45$$ && ($locator$$47$$.subId = "oj-treemap-tooltip");
    return $locator$$47$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$14$$ = this._super();
    $styleClasses$$14$$.push("oj-treemap");
    return $styleClasses$$14$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$15$$ = this._super();
    $styleClasses$$15$$["oj-treemap-isolate-icon"] = {path:"_resources/isolate", property:"CSS_URL"};
    $styleClasses$$15$$["oj-treemap-isolate-icon oj-hover"] = {path:"_resources/isolateOver", property:"CSS_URL"};
    $styleClasses$$15$$["oj-treemap-isolate-icon oj-active"] = {path:"_resources/isolateDown", property:"CSS_URL"};
    $styleClasses$$15$$["oj-treemap-restore-icon"] = {path:"_resources/restore", property:"CSS_URL"};
    $styleClasses$$15$$["oj-treemap-restore-icon oj-hover"] = {path:"_resources/restoreOver", property:"CSS_URL"};
    $styleClasses$$15$$["oj-treemap-restore-icon oj-active"] = {path:"_resources/restoreDown", property:"CSS_URL"};
    $styleClasses$$15$$["oj-treemap-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-treemap-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-treemap-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-treemap-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$15$$["oj-treemap-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    $styleClasses$$15$$["oj-treemap-node-header"] = [{path:"nodeDefaults/header/backgroundColor", property:"background-color"}, {path:"nodeDefaults/header/borderColor", property:"border-top-color"}, {path:"nodeDefaults/header/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$15$$["oj-treemap-node-header oj-hover"] = [{path:"nodeDefaults/header/hoverBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/hoverOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$15$$["oj-treemap-node-header oj-selected"] = [{path:"nodeDefaults/header/selectedBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$15$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$16$$ = this.options.translations, $ret$$47$$ = this._super();
    $ret$$47$$["DvtTreemapBundle.COLOR"] = $translations$$16$$.labelColor;
    $ret$$47$$["DvtTreemapBundle.ISOLATE"] = $translations$$16$$.tooltipIsolate;
    $ret$$47$$["DvtTreemapBundle.RESTORE"] = $translations$$16$$.tooltipRestore;
    $ret$$47$$["DvtTreemapBundle.SIZE"] = $translations$$16$$.labelSize;
    $ret$$47$$["DvtUtilBundle.TREEMAP"] = $translations$$16$$.componentName;
    return $ret$$47$$;
  }, $_HandleEvent$:function($event$$508_isolatedNode$$) {
    var $isolatedNodes_type$$94$$ = $event$$508_isolatedNode$$ && $event$$508_isolatedNode$$.getType ? $event$$508_isolatedNode$$.getType() : null;
    $isolatedNodes_type$$94$$ === $dvt$$7$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$508_isolatedNode$$.getSelection()) : $isolatedNodes_type$$94$$ === $dvt$$7$$.DvtTreemapIsolateEvent.TYPE ? ($isolatedNodes_type$$94$$ = this.options.$_isolatedNodes$, $isolatedNodes_type$$94$$ || (this.options.$_isolatedNodes$ = [], $isolatedNodes_type$$94$$ = this.options.$_isolatedNodes$), ($event$$508_isolatedNode$$ = $event$$508_isolatedNode$$.getId()) ? ($isolatedNodes_type$$94$$.push($event$$508_isolatedNode$$), 
    this.$_UserOptionChange$("isolatedNode", $event$$508_isolatedNode$$)) : ($isolatedNodes_type$$94$$.pop(), this.$_UserOptionChange$("isolatedNode", 0 < $isolatedNodes_type$$94$$.length ? $isolatedNodes_type$$94$$[$isolatedNodes_type$$94$$.length] : null))) : this._super($event$$508_isolatedNode$$);
  }, getNode:function($ret$$48_subIdPath$$1$$) {
    $ret$$48_subIdPath$$1$$ = this.$_component$.getAutomation().getNode($ret$$48_subIdPath$$1$$);
    this.$_AddAutomationGetters$($ret$$48_subIdPath$$1$$);
    return $ret$$48_subIdPath$$1$$;
  }, getContextByNode:function($context$$114_node$$111$$) {
    return($context$$114_node$$111$$ = this.getSubIdByNode($context$$114_node$$111$$)) && "oj-treemap-tooltip" !== $context$$114_node$$111$$.subId ? $context$$114_node$$111$$ : null;
  }});
});
