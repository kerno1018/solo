/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtDiagram"], function($oj$$37$$, $$$$36$$, $comp$$8$$, $base$$8$$, $dvt$$5$$) {
  $oj$$37$$.$__registerWidget$("oj.ojDiagram", $$$$36$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_Render$:function($isResize$$1$$) {
    this.options._logger = $oj$$37$$.$Logger$;
    this.options._templateFunction && (this.options.renderer = this.$_getTemplateRenderer$(this.options._templateFunction));
    this.options.renderer && (this.options._contextHandler = this.$_getContextHandler$());
    return this._super($isResize$$1$$);
  }, $_getTemplateRenderer$:function($templateFunction$$1$$) {
    var $thisRef$$3$$ = this;
    return function($context$$105_elem$$149$$) {
      var $dummyDiv$$1$$ = document.createElement("div");
      $dummyDiv$$1$$.style.display = "none";
      $dummyDiv$$1$$.$_dvtcontext$ = $thisRef$$3$$.$_context$;
      $thisRef$$3$$.element.append($dummyDiv$$1$$);
      $templateFunction$$1$$({parentElement:$dummyDiv$$1$$, data:$context$$105_elem$$149$$.data});
      return($context$$105_elem$$149$$ = $dummyDiv$$1$$.children[0]) && "http://www.w3.org/2000/svg" === $context$$105_elem$$149$$.namespaceURI ? ($$$$36$$($dummyDiv$$1$$).remove(), $context$$105_elem$$149$$) : $context$$105_elem$$149$$ ? $thisRef$$3$$.$_GetDvtComponent$($context$$105_elem$$149$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$4$$ = this;
    return function($parentElement$$7$$, $rootElement$$1$$, $data$$170$$, $state$$17$$, $previousState$$1$$) {
      return{component:$oj$$37$$.Components.$getWidgetConstructor$($thisRef$$4$$.element), parentElement:$parentElement$$7$$, rootElement:$rootElement$$1$$, data:$data$$170$$, state:$state$$17$$, previousState:$previousState$$1$$, id:$data$$170$$.id, type:"node", label:$data$$170$$.label};
    };
  }, renderDefaultHover:function($context$$107$$) {
    $context$$107$$.previousState && $context$$107$$.state.hovered == $context$$107$$.previousState.hovered || this.$_GetDvtComponent$(this.element).processDefaultHoverEffect($context$$107$$.id, $context$$107$$.state.hovered);
  }, renderDefaultSelection:function($context$$108$$) {
    $context$$108$$.previousState && $context$$108$$.state.selected == $context$$108$$.previousState.selected || this.$_GetDvtComponent$(this.element).processDefaultSelectionEffect($context$$108$$.id, $context$$108$$.state.selected);
  }, renderDefaultFocus:function($context$$109$$) {
    $context$$109$$.previousState && $context$$109$$.state.focused == $context$$109$$.previousState.focused || this.$_GetDvtComponent$(this.element).processDefaultFocusEffect($context$$109$$.id, $context$$109$$.state.focused);
  }, $_CreateDvtComponent$:function($context$$110$$, $callback$$113$$, $callbackObj$$7$$) {
    return $dvt$$5$$.DvtDiagram.newInstance($context$$110$$, $callback$$113$$, $callbackObj$$7$$);
  }, $_ConvertLocatorToSubId$:function($locator$$41$$) {
    var $subId$$39$$ = $locator$$41$$.subId;
    "oj-diagram-link" == $subId$$39$$ ? $subId$$39$$ = "link[" + $locator$$41$$.index + "]" : "oj-diagram-node" == $subId$$39$$ ? $subId$$39$$ = "node[" + $locator$$41$$.index + "]" : "oj-diagram-tooltip" == $subId$$39$$ && ($subId$$39$$ = "tooltip");
    return $subId$$39$$;
  }, $_ConvertSubIdToLocator$:function($subId$$40$$) {
    var $locator$$42$$ = {};
    0 == $subId$$40$$.indexOf("link") ? ($locator$$42$$.subId = "oj-diagram-link", $locator$$42$$.index = this.$_GetFirstIndex$($subId$$40$$)) : 0 == $subId$$40$$.indexOf("node") ? ($locator$$42$$.subId = "oj-diagram-node", $locator$$42$$.index = this.$_GetFirstIndex$($subId$$40$$)) : "tooltip" == $subId$$40$$ && ($locator$$42$$.subId = "oj-diagram-tooltip");
    return $locator$$42$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$10$$ = this._super();
    $styleClasses$$10$$.push("oj-diagram");
    return $styleClasses$$10$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$["oj-diagram-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-diagram-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$11$$["oj-diagram-node oj-hover"] = [{path:"styleDefaults/nodeDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/nodeDefaults/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$11$$["oj-diagram-link"] = {path:"styleDefaults/linkDefaults/color", property:"color"};
    $styleClasses$$11$$["oj-diagram-link-label"] = {path:"styleDefaults/linkDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-diagram-link oj-selected"] = {path:"styleDefaults/linkDefaults/selectionColor", property:"border-color"};
    $styleClasses$$11$$["oj-diagram-link oj-hover"] = [{path:"styleDefaults/linkDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/linkDefaults/hoverInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$11$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$14$$ = this.options.translations, $ret$$44$$ = this._super();
    $ret$$44$$["DvtUtilBundle.DIAGRAM"] = $translations$$14$$.componentName;
    return $ret$$44$$;
  }, $_HandleEvent$:function($event$$503$$) {
    ($event$$503$$ && $event$$503$$.getType ? $event$$503$$.getType() : null) === $dvt$$5$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$503$$.getSelection()) : this._super($event$$503$$);
  }, getNodeCount:function() {
    return this.$_component$.getAutomation().getNodeCount();
  }, getNode:function($nodeIndex$$) {
    return this.$_component$.getAutomation().getNode($nodeIndex$$);
  }, getLinkCount:function() {
    return this.$_component$.getAutomation().getLinkCount();
  }, getLink:function($linkIndex$$) {
    return this.$_component$.getAutomation().getLink($linkIndex$$);
  }, getContextByNode:function($context$$111_node$$107$$) {
    return($context$$111_node$$107$$ = this.getSubIdByNode($context$$111_node$$107$$)) && "oj-diagram-tooltip" !== $context$$111_node$$107$$.subId ? $context$$111_node$$107$$ : null;
  }});
});
