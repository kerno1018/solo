/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTagCloud"], function($oj$$61$$, $$$$56$$, $comp$$17$$, $base$$14$$, $dvt$$11$$) {
  $oj$$61$$.$__registerWidget$("oj.ojTagCloud", $$$$56$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$123$$, $callback$$123$$, $callbackObj$$14$$) {
    return $dvt$$11$$.DvtTagCloud.newInstance($context$$123$$, $callback$$123$$, $callbackObj$$14$$);
  }, $_ConvertLocatorToSubId$:function($locator$$63$$) {
    var $subId$$60$$ = $locator$$63$$.subId;
    "oj-tagcloud-item" == $subId$$60$$ ? $subId$$60$$ = "item[" + $locator$$63$$.index + "]" : "oj-tagcloud-tooltip" == $subId$$60$$ && ($subId$$60$$ = "tooltip");
    return $subId$$60$$;
  }, $_ConvertSubIdToLocator$:function($subId$$61$$) {
    var $locator$$64$$ = {};
    0 == $subId$$61$$.indexOf("item") ? ($locator$$64$$.subId = "oj-tagcloud-item", $locator$$64$$.index = this.$_GetFirstIndex$($subId$$61$$)) : "tooltip" == $subId$$61$$ && ($locator$$64$$.subId = "oj-tagcloud-tooltip");
    return $locator$$64$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$23$$ = this._super();
    $styleClasses$$23$$.push("oj-tagcloud");
    return $styleClasses$$23$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$24$$ = this._super();
    $styleClasses$$24$$["oj-tagcloud"] = {path:"styleDefaults/style", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$24$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$22$$ = this.options.translations, $ret$$69$$ = this._super();
    $ret$$69$$["DvtUtilBundle.TAG_CLOUD"] = $translations$$22$$.componentName;
    return $ret$$69$$;
  }, $_HandleEvent$:function($event$$580$$) {
    ($event$$580$$ && $event$$580$$.getType ? $event$$580$$.getType() : null) === $dvt$$11$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$580$$.getSelection()) : this._super($event$$580$$);
  }, getItem:function($index$$292$$) {
    return this.$_component$.getAutomation().getItem($index$$292$$);
  }, getItemCount:function() {
    return this.$_component$.getAutomation().getItemCount();
  }, getContextByNode:function($context$$124_node$$124$$) {
    return($context$$124_node$$124$$ = this.getSubIdByNode($context$$124_node$$124$$)) && "oj-tagcloud-tooltip" !== $context$$124_node$$124$$.subId ? $context$$124_node$$124$$ : null;
  }});
});
