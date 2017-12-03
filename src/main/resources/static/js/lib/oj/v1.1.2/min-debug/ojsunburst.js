/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtSunburst"], function($oj$$27$$, $$$$26$$, $comp$$6$$, $base$$6$$, $dvt$$3$$) {
  $oj$$27$$.$__registerWidget$("oj.ojSunburst", $$$$26$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null, rotateInput:null}, $_CreateDvtComponent$:function($context$$80$$, $callback$$101$$, $callbackObj$$5$$) {
    return $dvt$$3$$.DvtSunburst.newInstance($context$$80$$, $callback$$101$$, $callbackObj$$5$$);
  }, $_ConvertLocatorToSubId$:function($locator$$32$$) {
    var $subId$$31$$ = $locator$$32$$.subId;
    "oj-sunburst-node" == $subId$$31$$ ? $subId$$31$$ = "node" + this.$_GetStringFromIndexPath$($locator$$32$$.indexPath) : "oj-sunburst-tooltip" == $subId$$31$$ && ($subId$$31$$ = "tooltip");
    return $subId$$31$$;
  }, $_ConvertSubIdToLocator$:function($subId$$32$$) {
    var $locator$$33$$ = {};
    0 == $subId$$32$$.indexOf("node") ? ($locator$$33$$.subId = "oj-sunburst-node", $locator$$33$$.indexPath = this.$_GetIndexPath$($subId$$32$$)) : "tooltip" == $subId$$32$$ && ($locator$$33$$.subId = "oj-sunburst-tooltip");
    return $locator$$33$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$6$$ = this._super();
    $styleClasses$$6$$.push("oj-sunburst");
    return $styleClasses$$6$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$7$$ = this._super();
    $styleClasses$$7$$["oj-sunburst-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$7$$["oj-sunburst-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$7$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "rotateInput"];
  }, $_GetTranslationMap$:function() {
    var $translations$$12$$ = this.options.translations, $ret$$33$$ = this._super();
    $ret$$33$$["DvtSunburstBundle.COLOR"] = $translations$$12$$.labelColor;
    $ret$$33$$["DvtSunburstBundle.SIZE"] = $translations$$12$$.labelSize;
    $ret$$33$$["DvtUtilBundle.SUNBURST"] = $translations$$12$$.componentName;
    return $ret$$33$$;
  }, $_HandleEvent$:function($event$$342$$) {
    var $type$$86$$ = $event$$342$$ && $event$$342$$.getType ? $event$$342$$.getType() : null;
    $type$$86$$ === $dvt$$3$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$342$$.getSelection()) : $type$$86$$ === $dvt$$3$$.DvtSunburstRotationEvent.TYPE ? this.$_UserOptionChange$("startAngle", $event$$342$$.getStartAngle()) : $type$$86$$ === $dvt$$3$$.DvtSunburstRotationEvent.TYPE_INPUT ? this._trigger("rotateInput", null, {value:$event$$342$$.getStartAngle()}) : this._super($event$$342$$);
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.rotateCursor = $oj$$27$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/sunburst/rotate.cur");
  }, getNode:function($ret$$34_subIdPath$$) {
    $ret$$34_subIdPath$$ = this.$_component$.getAutomation().getNode($ret$$34_subIdPath$$);
    this.$_AddAutomationGetters$($ret$$34_subIdPath$$);
    return $ret$$34_subIdPath$$;
  }, getContextByNode:function($context$$81_node$$57$$) {
    return($context$$81_node$$57$$ = this.getSubIdByNode($context$$81_node$$57$$)) && "oj-sunburst-tooltip" !== $context$$81_node$$57$$.subId ? $context$$81_node$$57$$ : null;
  }});
});
