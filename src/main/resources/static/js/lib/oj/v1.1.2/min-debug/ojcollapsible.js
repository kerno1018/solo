/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$45$$, $$$$44$$) {
  (function() {
    var $uid$$ = 0;
    $oj$$45$$.$__registerWidget$("oj.ojCollapsible", $$$$44$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{expanded:!1, disabled:null, expandOn:"click", expandArea:"disclosureIcon", beforeExpand:null, expand:null, beforeCollapse:null, collapse:null, optionChange:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-collapsible oj-component");
      this.$_processPanels$();
      this.$_refresh$();
      this.$_initialRender$ = !0;
      var $elem$$150$$ = this.element[0];
      this.$_expandCollapseHandler$({type:this.options.expanded ? "ojexpand" : "ojcollapse", target:$elem$$150$$, currentTarget:$elem$$150$$, preventDefault:$$$$44$$.noop});
      this.$_initialRender$ = void 0;
    }, $_NotifyContextMenuGesture$:function($menu$$23$$, $event$$524$$, $eventType$$53$$) {
      this.$_OpenContextMenu$($event$$524$$, $eventType$$53$$, {launcher:this.element.find(".oj-collapsible-header-icon").first()});
    }, $_createIcons$:function() {
      var $icon$$5$$ = this.options.expanded ? "oj-collapsible-open-icon" : "oj-collapsible-close-icon";
      (this.$_isDisabled$() ? $$$$44$$("\x3cspan\x3e") : $$$$44$$("\x3ca href\x3d'#'\x3e")).addClass("oj-component-icon oj-clickable-icon-nocontext oj-collapsible-header-icon " + $icon$$5$$).attr("aria-labelledby", this.header.attr("id")).prependTo(this.header);
    }, $_destroyIcons$:function() {
      this.header.children(".oj-collapsible-header-icon").remove();
    }, _destroy:function() {
      this.$_cleanup$();
      this.element.removeClass("oj-collapsible oj-component oj-expanded oj-collapsed oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).removeAttr("tabIndex");
      this.header.removeClass("oj-collapsible-header").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
      this.$_findFirstFocusableInHeader$().removeAttr("role").removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("aria-disabled");
      this.$_destroyIcons$();
      this.content.css("display", "").removeAttr("aria-hidden").removeAttr("tabIndex").removeClass("oj-component-content oj-collapsible-content").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
    }, $_cleanup$:function() {
      this.$_tearDownEvents$();
      this.content && ($oj$$45$$.$DomUtils$.unwrap(this.content), this.$wrapper$ = null);
    }, $_isDisabled$:function() {
      return this.element.hasClass("oj-disabled");
    }, $_getExpandAreaSelector$:function() {
      return "header" == this.options.expandArea ? "\x3e .oj-collapsible-header" : "\x3e .oj-collapsible-header \x3e .oj-collapsible-header-icon";
    }, _setOption:function($key$$166$$, $value$$256$$, $flags$$41$$) {
      "expanded" === $key$$166$$ ? $value$$256$$ !== this.options.expanded && this.$_setExpanded$($value$$256$$) : "disabled" === $key$$166$$ ? (this.header.add(this.header.next()), this.element.toggleClass("oj-disabled", !!$value$$256$$)) : "expandOn" === $key$$166$$ || "expandArea" === $key$$166$$ ? (this.$_tearDownEvents$(), this._super($key$$166$$, $value$$256$$, $flags$$41$$), this.$_setupEvents$()) : this._super($key$$166$$, $value$$256$$, $flags$$41$$);
    }, $_keydown$:function($event$$525$$) {
      if (!$event$$525$$.altKey && !$event$$525$$.ctrlKey) {
        var $keyCode$$18$$ = $$$$44$$.ui.keyCode;
        switch($event$$525$$.keyCode) {
          case $keyCode$$18$$.SPACE:
          ;
          case $keyCode$$18$$.ENTER:
            this.$_toggleHandler$($event$$525$$);
        }
      }
    }, refresh:function() {
      this._super();
      this.$_cleanup$();
      this.$_processPanels$();
      this.$_destroyIcons$();
      this.$_refresh$();
    }, $_processPanels$:function() {
      this.header = this.element.children(":first-child").addClass("oj-collapsible-header");
      this.content = this.header.next().addClass("oj-collapsible-content oj-component-content");
      this.content.wrap("\x3cdiv\x3e\x3c/div\x3e");
      this.$wrapper$ = this.content.parent().addClass("oj-collapsible-wrapper");
      this.options.disabled && this.element.addClass("oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).attr("tabIndex", -1);
    }, $_refresh$:function() {
      var $focusable$$2_header$$10$$ = this.header, $content$$20$$ = this.content, $options$$367$$ = this.options, $collapsibleId$$ = "oj-collapsible-" + (this.element.attr("id") || ++$uid$$), $headerId$$ = $focusable$$2_header$$10$$.attr("id"), $contentId$$ = $content$$20$$.attr("id");
      $headerId$$ || $focusable$$2_header$$10$$.attr("id", $collapsibleId$$ + "-header");
      $contentId$$ || ($contentId$$ = $collapsibleId$$ + "-content", $content$$20$$.attr("id", $contentId$$));
      this.$_createIcons$();
      $focusable$$2_header$$10$$ = this.$_findFirstFocusableInHeader$();
      $focusable$$2_header$$10$$.attr("role", "button").attr("aria-controls", $contentId$$).attr("aria-expanded", $options$$367$$.expanded);
      this.$_isDisabled$() && $focusable$$2_header$$10$$.attr("aria-disabled", "true");
      $options$$367$$.expanded ? $content$$20$$.removeAttr("aria-hidden") : (this.$wrapper$.css({"max-height":0, "overflow-y":"hidden", display:"none"}), this.$wrapper$.css("max-height", 0), $content$$20$$.attr("aria-hidden", "true"));
      this.$_setupEvents$();
    }, $_setExpanded$:function($expanded$$12$$) {
      $expanded$$12$$ ? this.expand(!0) : this.collapse(!0);
    }, $_setupEvents$:function() {
      var $events$$14$$ = {keydown:this.$_keydown$}, $event$$526_expandArea$$ = this.options.expandOn;
      if ($event$$526_expandArea$$) {
        var $self$$171$$ = this;
        $$$$44$$.each($event$$526_expandArea$$.split(" "), function($index$$255$$, $eventName$$1$$) {
          $oj$$45$$.$DomUtils$.$isValidIdentifier$($eventName$$1$$) && ($events$$14$$[$eventName$$1$$] = $self$$171$$.$_toggleHandler$);
        });
      }
      $event$$526_expandArea$$ = this.element.find(this.$_getExpandAreaSelector$());
      this._on($event$$526_expandArea$$, $events$$14$$);
      this._on(this.$wrapper$, {transitionend:this.$_transitionEndHandler$, webkitTransitionEnd:this.$_transitionEndHandler$, otransitionend:this.$_transitionEndHandler$, oTransitionEnd:this.$_transitionEndHandler$});
      this.$_isDisabled$() || (this._on(this.element, {ojexpand:this.$_expandCollapseHandler$, ojcollapse:this.$_expandCollapseHandler$, ojfocus:this.$_focusHandler$, ojfocusout:this.$_focusHandler$}), this._hoverable($event$$526_expandArea$$), this._focusable($event$$526_expandArea$$), this.$_activeable$($event$$526_expandArea$$));
    }, $_tearDownEvents$:function() {
      this._off(this.element.find(this.$_getExpandAreaSelector$()));
      this.$wrapper$ && this._off(this.$wrapper$);
      this._off(this.element.add(this.content));
    }, $_toggleHandler$:function($event$$527$$) {
      this.$_isDisabled$() || (this.options.expanded ? this.collapse(!0, $event$$527$$) : this.expand(!0, $event$$527$$), $event$$527$$.preventDefault(), $event$$527$$.stopPropagation(), this.header.find(".oj-collapsible-header-icon").focus());
    }, $_expandCollapseHandler$:function($event$$528$$) {
      if (!this.$_isDisabled$() && $event$$528$$.target === this.element[0] && (this.$_initialRender$ || !$event$$528$$.isDefaultPrevented())) {
        var $element$$112$$ = this.element, $options$$368$$ = this.options, $content$$21$$ = this.content, $wrapper$$10$$ = this.$wrapper$, $isExpanded$$ = "ojexpand" === $event$$528$$.type;
        $event$$528$$.preventDefault();
        this.$_initialRender$ ? ($options$$368$$.expanded = $isExpanded$$) ? ($element$$112$$.removeClass("oj-collapsed"), $element$$112$$.addClass("oj-expanded"), $oj$$45$$.Components.$subtreeShown$($wrapper$$10$$[0])) : ($element$$112$$.removeClass("oj-expanded"), $element$$112$$.addClass("oj-collapsed"), $wrapper$$10$$.css("max-height", 0), $wrapper$$10$$.hide(), $oj$$45$$.Components.$subtreeHidden$($wrapper$$10$$[0])) : (this.$_changeExpandedOption$($isExpanded$$, $event$$528$$), $wrapper$$10$$.$contentHeight$ = 
        $wrapper$$10$$.outerHeight(), $isExpanded$$ ? ($wrapper$$10$$.show(), setTimeout(function() {
          $wrapper$$10$$.$contentHeight$ += $content$$21$$.outerHeight();
          $wrapper$$10$$.addClass("oj-collapsible-transition").css({"max-height":$wrapper$$10$$.$contentHeight$});
          $element$$112$$.removeClass("oj-collapsed");
          $element$$112$$.addClass("oj-expanded");
          $oj$$45$$.Components.$subtreeShown$($wrapper$$10$$[0]);
        }, 1)) : ($wrapper$$10$$.removeClass("oj-collapsible-transition"), $wrapper$$10$$.css({"max-height":$wrapper$$10$$.$contentHeight$, "overflow-y":"hidden"}), setTimeout(function() {
          $wrapper$$10$$.addClass("oj-collapsible-transition").css({"max-height":0});
          $element$$112$$.removeClass("oj-expanded");
          $element$$112$$.addClass("oj-collapsed");
          $oj$$45$$.Components.$subtreeHidden$($wrapper$$10$$[0]);
        }, 10)));
        this.header.find(".oj-collapsible-header-icon").toggleClass("oj-collapsible-open-icon", $isExpanded$$).toggleClass("oj-collapsible-close-icon", !$isExpanded$$ || !1).end();
        $isExpanded$$ ? this.content.removeAttr("aria-hidden") : this.content.attr("aria-hidden", "true");
        this.$_findFirstFocusableInHeader$().attr("aria-expanded", $isExpanded$$);
      }
    }, $_focusHandler$:function($event$$529$$) {
      if (this.$_isDisabled$()) {
        return null;
      }
      "ojfocusout" == $event$$529$$.type ? (this.$_findFirstFocusableInHeader$().attr("tabIndex", -1), $event$$529$$.preventDefault(), $event$$529$$.stopPropagation()) : "ojfocus" == $event$$529$$.type && (this.$_findFirstFocusableInHeader$().attr("tabIndex", 0).focus(), $event$$529$$.preventDefault(), $event$$529$$.stopPropagation());
    }, $_findFirstFocusableInHeader$:function() {
      return this.$_findFocusables$(this.header).first();
    }, $_findFocusables$:function($start$$53$$) {
      return this.$_isDisabled$() ? $start$$53$$.find("span") : $start$$53$$.find("a,:input");
    }, expand:function($vetoable$$4$$, $event$$530$$) {
      if (!this.$_isDisabled$()) {
        var $eventData$$23$$ = {header:this.header, content:this.content};
        $vetoable$$4$$ && !1 === this._trigger("beforeExpand", $event$$530$$, $eventData$$23$$) || this._trigger("expand", $event$$530$$, $eventData$$23$$);
      }
    }, collapse:function($vetoable$$5$$, $event$$531$$) {
      if (!this.$_isDisabled$()) {
        var $eventData$$24$$ = {header:this.header, content:this.content};
        $vetoable$$5$$ && !1 === this._trigger("beforeCollapse", $event$$531$$, $eventData$$24$$) || this._trigger("collapse", $event$$531$$, $eventData$$24$$);
      }
    }, $_transitionEndHandler$:function($event$$532$$) {
      this.$_isDisabled$() || ("max-height" == ($event$$532$$.originalEvent ? $event$$532$$.originalEvent.propertyName : null) && ($event$$532$$.preventDefault(), $event$$532$$.stopPropagation()), this.options.expanded ? this.$wrapper$.css({"max-height":9999, "overflow-y":""}) : this.$wrapper$.hide(), this.$wrapper$.removeClass("oj-collapsible-transition"));
    }, $_changeExpandedOption$:function($value$$257$$, $originalEvent$$11$$) {
      this.option("expanded", $value$$257$$, {_context:{originalEvent:$originalEvent$$11$$, $writeback$:!0, $internalSet$:!0}});
    }, getNodeBySubId:function($locator$$54_subId$$51$$) {
      if (null == $locator$$54_subId$$51$$) {
        return this.element ? this.element[0] : null;
      }
      $locator$$54_subId$$51$$ = $locator$$54_subId$$51$$.subId;
      switch($locator$$54_subId$$51$$) {
        case "oj-collapsible-content":
          return this.content[0];
        case "oj-collapsible-header":
          return this.header[0];
        case "oj-collapsible-header-icon":
          return this.header.find("." + $locator$$54_subId$$51$$)[0];
      }
      return null;
    }});
  })();
});
