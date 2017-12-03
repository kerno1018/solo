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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojconveyorbelt", "jqueryui-amd/sortable", "ojs/ojtouchproxy"], function($oj$$46$$, $$$$45$$) {
  (function() {
    var $_arMenuCmdMap$$1$$ = {cut:"ojtabscut", "paste-before":"ojtabspastebefore", "paste-after":"ojtabspasteafter"}, $_arMenuKeyMap$$1$$ = {cut:"labelCut", "paste-before":"labelPasteBefore", "paste-after":"labelPasteAfter"};
    $oj$$46$$.$__registerWidget$("oj.ojTabs", $$$$45$$.oj.baseComponent, {widgetEventPrefix:"oj", delay:300, options:{selected:0, disabledTabs:null, truncation:"auto", selectOn:"click", orientation:"horizontal", edge:"top", removable:!1, reorderable:!1, beforeSelect:null, select:null, beforeDeselect:null, deselect:null, beforeRemove:null, remove:null, beforeReorder:null, reorder:null, optionChange:null}, _ComponentCreate:function() {
      var $options$$369_selectedIndex$$ = this.options;
      this._super();
      this.$running$ = !1;
      this.$_initialRender$ = !0;
      this.$_setupEdge$($options$$369_selectedIndex$$.edge);
      this.$_isOldMarkup$ = 0 == this.element.children("ul").length;
      this.$_createTabbarFromOldMarkup$();
      this.$_processTabs$();
      this.$_menu$ = {};
      this.$_menu$.$usermenu$ = !1;
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_applyMenu$();
      this.$_refresh$();
      $options$$369_selectedIndex$$ = this.$_getIndexByTabOrContentId$($options$$369_selectedIndex$$.selected);
      void 0 === $options$$369_selectedIndex$$ && ($options$$369_selectedIndex$$ = 0);
      this.$_fireSelectEvents$($options$$369_selectedIndex$$);
      this.$_initialRender$ = void 0;
    }, $_fireSelectEvents$:function($selectedIndex$$1$$) {
      this.$_isTabDisabled$($selectedIndex$$1$$) && ($selectedIndex$$1$$ = this.$_getNextEnabledTab$($selectedIndex$$1$$));
      this.$_activate$(void 0 === $selectedIndex$$1$$ ? void 0 : $$$$45$$(this.$tabs$[$selectedIndex$$1$$]));
    }, $_NotifyContextMenuGesture$:function($menu$$24_openOptions$$7$$, $event$$533$$, $eventType$$54$$) {
      if (this.$_isInATab$($event$$533$$.target) && (!this.$_touchProxy$ || !this.$_touchProxy$.$_touchMoved$)) {
        var $disabledState$$1_keyboard$$1$$ = "keyboard" === $eventType$$54$$;
        if ("contextmenu" == $event$$533$$.type || $disabledState$$1_keyboard$$1$$ || "touch" == $eventType$$54$$) {
          $menu$$24_openOptions$$7$$ = {launcher:$$$$45$$($event$$533$$.target).closest("li")}, this.$_menu$.tab = $disabledState$$1_keyboard$$1$$ ? this.$active$ : $menu$$24_openOptions$$7$$.launcher, this.$_menu$.tab ? (this.$_menu$.$usermenu$ && (this.$_menu$.$$elemPasteBefore$ || this.$_menu$.$$elemPasteAfter$) && ($disabledState$$1_keyboard$$1$$ = !this.$_menu$.$cutTab$, this.$_menu$.$$elemPasteBefore$.hasClass("oj-disabled") != $disabledState$$1_keyboard$$1$$ && ($disabledState$$1_keyboard$$1$$ ? 
          (this.$_menu$.$$elemPasteBefore$.addClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.addClass("oj-disabled")) : (this.$_menu$.$$elemPasteBefore$.removeClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.removeClass("oj-disabled")), this.$_menu$.$$container$.ojMenu("refresh"))), this.$_OpenContextMenu$($event$$533$$, $eventType$$54$$, $menu$$24_openOptions$$7$$)) : $event$$533$$.preventDefault();
        }
      }
    }, $_tabKeydown$:function($event$$534$$) {
      if (!this.$_handlePageNav$($event$$534$$)) {
        var $anchor$$3_focusedTab$$ = $$$$45$$(this.document[0].activeElement).closest("li"), $enabledTabs_selTab$$ = this.$_getEnabledTabs$(), $selectedIndex$$2$$ = $enabledTabs_selTab$$.index($anchor$$3_focusedTab$$), $length$$17$$ = $enabledTabs_selTab$$.length;
        switch($event$$534$$.keyCode) {
          case $$$$45$$.ui.keyCode.RIGHT:
          ;
          case $$$$45$$.ui.keyCode.DOWN:
            $selectedIndex$$2$$ = ($selectedIndex$$2$$ + 1) % $length$$17$$;
            break;
          case $$$$45$$.ui.keyCode.UP:
          ;
          case $$$$45$$.ui.keyCode.LEFT:
            $selectedIndex$$2$$ = ((0 == $selectedIndex$$2$$ ? $length$$17$$ : $selectedIndex$$2$$) - 1) % $length$$17$$;
            break;
          case $$$$45$$.ui.keyCode.END:
            $selectedIndex$$2$$ = $length$$17$$ - 1;
            break;
          case $$$$45$$.ui.keyCode.HOME:
            $selectedIndex$$2$$ = 0;
            break;
          case 46:
            this.options.removable && ($anchor$$3_focusedTab$$ = this.$_getCloseIcons$(this.$active$)) && ($event$$534$$.preventDefault(), this.$_removeTabHandler$({target:$anchor$$3_focusedTab$$, currentTarget:$anchor$$3_focusedTab$$, preventDefault:$$$$45$$.noop}));
            return;
          default:
            return;
        }
        $event$$534$$.preventDefault();
        clearTimeout(this.$activating$);
        $enabledTabs_selTab$$ = $$$$45$$($enabledTabs_selTab$$[$selectedIndex$$2$$]);
        $enabledTabs_selTab$$.focus();
        if (!$event$$534$$.ctrlKey) {
          $anchor$$3_focusedTab$$.attr("aria-selected", "false");
          $enabledTabs_selTab$$.attr("aria-selected", "true");
          var $idOrIndex$$ = this.$_getTabIdOrIndex$($enabledTabs_selTab$$), $self$$173$$ = this;
          this.$activating$ = this._delay(function() {
            $self$$173$$ && $self$$173$$.$tabs$ && $self$$173$$.option("selected", $idOrIndex$$, {_context:{originalEvent:$event$$534$$}});
          }, this.delay);
        }
      }
    }, $_panelKeydown$:function($event$$535$$) {
      $$$$45$$($event$$535$$.target).closest(".oj-tabs-selected").attr("id") === this.element.children(".oj-tabs-selected").attr("id") && !this.$_handlePageNav$($event$$535$$) && $event$$535$$.ctrlKey && $event$$535$$.keyCode === $$$$45$$.ui.keyCode.UP && ($event$$535$$.preventDefault(), this.$active$.focus());
    }, $_handlePageNav$:function($event$$536$$) {
      var $selectedIndex$$3$$ = this.$_getSelectedIndex$();
      if ($event$$536$$.ctrlKey && $event$$536$$.keyCode === $$$$45$$.ui.keyCode.PAGE_UP) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$3$$, !1)), !0;
      }
      if ($event$$536$$.ctrlKey && $event$$536$$.keyCode === $$$$45$$.ui.keyCode.PAGE_DOWN) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$3$$, !0)), !0;
      }
    }, $_isTabDisabled$:function($index$$256$$) {
      return 0 <= $index$$256$$ && $index$$256$$ < this.$tabs$.length ? $$$$45$$(this.$tabs$[$index$$256$$]).hasClass("oj-disabled") : !1;
    }, $_focusNextTab$:function($index$$257$$, $goingForward$$) {
      var $enabledTabs$$1_selTab$$1$$ = this.$_getEnabledTabs$(), $currentIndex$$4$$ = $enabledTabs$$1_selTab$$1$$.index(this.$tabs$[$index$$257$$]), $length$$18$$ = $enabledTabs$$1_selTab$$1$$.length, $enabledTabs$$1_selTab$$1$$ = $$$$45$$($enabledTabs$$1_selTab$$1$$[$goingForward$$ ? ($currentIndex$$4$$ + 1) % $length$$18$$ : ((0 == $currentIndex$$4$$ ? $length$$18$$ : $currentIndex$$4$$) - 1) % $length$$18$$]);
      $enabledTabs$$1_selTab$$1$$.focus();
      return $enabledTabs$$1_selTab$$1$$;
    }, $_getNextEnabledTab$:function($index$$258$$) {
      for (var $next$$6$$ = $index$$258$$ + 1, $lastTabIndex$$ = this.$tabs$.length - 1;$next$$6$$ <= $lastTabIndex$$;) {
        if (!this.$_isTabDisabled$($next$$6$$)) {
          return $next$$6$$;
        }
        $next$$6$$++;
      }
      for ($next$$6$$ = $index$$258$$ - 1;0 <= $next$$6$$;) {
        if (!this.$_isTabDisabled$($next$$6$$)) {
          return $next$$6$$;
        }
        $next$$6$$--;
      }
    }, $_isHorizontal$:function() {
      return "top" == this.options.edge || "bottom" == this.options.edge;
    }, _setOption:function($edge$$12_key$$167_selectedIndex$$4$$, $value$$258$$, $flags$$42$$) {
      "selected" === $edge$$12_key$$167_selectedIndex$$4$$ ? ($value$$258$$ = this.$_getTab$($value$$258$$), void 0 !== $value$$258$$ && this.$_activate$($value$$258$$)) : "disabledTabs" === $edge$$12_key$$167_selectedIndex$$4$$ ? Array.isArray($value$$258$$) && (this.$_setOjDisabledOnTab$($value$$258$$), $edge$$12_key$$167_selectedIndex$$4$$ = this.$_getSelectedIndex$(), this.$_isTabDisabled$($edge$$12_key$$167_selectedIndex$$4$$) && this.$_fireSelectEvents$($edge$$12_key$$167_selectedIndex$$4$$), 
      this.refresh()) : "removable" === $edge$$12_key$$167_selectedIndex$$4$$ || "truncation" === $edge$$12_key$$167_selectedIndex$$4$$ ? $value$$258$$ != this.options[$edge$$12_key$$167_selectedIndex$$4$$] && (this._super($edge$$12_key$$167_selectedIndex$$4$$, $value$$258$$, $flags$$42$$), this.refresh()) : "reorderable" === $edge$$12_key$$167_selectedIndex$$4$$ ? $value$$258$$ !== this.options.reorderable && (this._super($edge$$12_key$$167_selectedIndex$$4$$, $value$$258$$, $flags$$42$$), this.refresh()) : 
      "orientation" === $edge$$12_key$$167_selectedIndex$$4$$ ? this.$_edgeSpecified$ || ($edge$$12_key$$167_selectedIndex$$4$$ = this.$_orientationToEdge$($value$$258$$)) && this.$_setupEdge$($edge$$12_key$$167_selectedIndex$$4$$) && this.refresh() : "edge" === $edge$$12_key$$167_selectedIndex$$4$$ ? this.$_setupEdge$($value$$258$$) && (this.$_edgeSpecified$ = !0, this._super($edge$$12_key$$167_selectedIndex$$4$$, $value$$258$$, $flags$$42$$), this.refresh()) : "selectOn" === $edge$$12_key$$167_selectedIndex$$4$$ ? 
      (this.$_tearDownEvents$(!0), this._super($edge$$12_key$$167_selectedIndex$$4$$, $value$$258$$, $flags$$42$$), this.$_setupEvents$()) : ("contextMenu" === $edge$$12_key$$167_selectedIndex$$4$$ && (this.$_clearMenu$(), $value$$258$$ && this.$_initMenu$($value$$258$$)), this._super($edge$$12_key$$167_selectedIndex$$4$$, $value$$258$$, $flags$$42$$), "translations" === $edge$$12_key$$167_selectedIndex$$4$$ && $flags$$42$$ && "removeCueText" === $flags$$42$$.subkey && this.$tablist$ && this.$_getCloseIcons$(this.$tablist$).attr("aria-label", 
      $value$$258$$ ? $value$$258$$.removeCueText : ""));
    }, refresh:function() {
      this._super();
      this.$_processTabs$();
      this.$_refresh$();
    }, $_refresh$:function() {
      var $selectedPanel$$ = this.element.children(".oj-tabs-selected");
      this.$active$ = $selectedPanel$$.length ? this.$tablist$.children(".oj-selected") : $$$$45$$();
      this.$_createCloseIcons$();
      this.$_setupEvents$();
      this.$tabs$.not(this.$active$).attr({"aria-selected":"false", tabIndex:"-1"});
      this.$panels$.not(this.$_getPanelForTab$(this.$active$)).hide().attr({"aria-expanded":"false", "aria-hidden":"true"});
      this.$active$.length ? (this.$active$.addClass("oj-selected").attr({"aria-selected":"true", tabIndex:"0"}), $selectedPanel$$.show().attr("aria-expanded", "true").removeAttr("aria-hidden")) : $$$$45$$(this.$tabs$[0]).attr("tabIndex", "0");
      this.$_isHorizontal$() && (0 < this.$tabs$.length ? (this.$_truncateBeforeOverflow$(), this.$_addConveyor$()) : this.$_getTabbarWrapper$(), this.$_addFacets$());
      void 0 === this.options.selected || 0 == this.$_getSelectedIndex$() ? this.element.addClass("oj-first-child-selected") : this.element.removeClass("oj-first-child-selected");
      this.$_setupReorder$();
    }, $_addConveyor$:function() {
      var $cparent_tabsId$$ = this.$tablist$.uniqueId().attr("id");
      this.$conveyor$ = this.$_getTabbarWrapper$().parent().ojConveyorBelt({orientation:"horizontal", contentParent:"#" + $cparent_tabsId$$});
      $cparent_tabsId$$ = this.$conveyor$.parent();
      if ($cparent_tabsId$$.hasClass("oj-tabs-conveyorbelt-wrapper")) {
        var $flex$$ = "0 1 " + this.$_getConveyorWrapperMaxWidth$() + "px";
        $cparent_tabsId$$.css("flex", $flex$$);
        $cparent_tabsId$$.css("-webkit-flex", $flex$$);
        $cparent_tabsId$$.css("-ms-flex", $flex$$);
      }
    }, $_processTabs$:function() {
      var $self$$174$$ = this, $edge$$13$$ = this.options.edge;
      this.$_destroyTabBar$();
      this.$_createTabbar$();
      this.$tablist$ = this.element.children("ul").addClass("oj-tabs-nav oj-helper-clearfix").attr("role", "tablist");
      var $tabbarIndex$$ = this.$tablist$.index();
      this.element.children(".oj-tabs-facet").each(function() {
        var $facet$$ = $$$$45$$(this);
        $facet$$.index() < $tabbarIndex$$ ? $facet$$.addClass("oj-start") : $facet$$.removeClass("oj-start");
      });
      var $tabContents$$ = this.element.children(".oj-tabs-panel");
      "start" == $edge$$13$$ || "top" == $edge$$13$$ ? $$$$45$$($tabContents$$[0]).before(this.$tablist$) : $$$$45$$($tabContents$$[$tabContents$$.length - 1]).after(this.$tablist$);
      this.$tabs$ = $$$$45$$();
      this.$panels$ = $$$$45$$();
      this.$tablist$.children("li").each(function() {
        var $tab$$ = $$$$45$$(this).addClass("oj-tabs-tab").attr({role:"tab", tabIndex:"-1"}).removeAttr("aria-hidden"), $anchor$$4_anchorId_div$$9$$ = $tab$$.children();
        $anchor$$4_anchorId_div$$9$$.addClass("oj-tabs-tab-content");
        $anchor$$4_anchorId_div$$9$$ = $anchor$$4_anchorId_div$$9$$.children();
        $anchor$$4_anchorId_div$$9$$.addClass("oj-tabs-anchor").attr({role:"presentation", tabIndex:"-1"});
        $anchor$$4_anchorId_div$$9$$.children().addClass("oj-tabs-title").removeAttr("aria-hidden");
        $self$$174$$.$tabs$ = $self$$174$$.$tabs$.add($tab$$);
        var $anchor$$4_anchorId_div$$9$$ = $anchor$$4_anchorId_div$$9$$.uniqueId().attr("id"), $panelId$$ = $tab$$.attr("data-content"), $panel$$ = $self$$174$$.element.find($self$$174$$.$_sanitizeSelector$("#" + $panelId$$));
        $tab$$.attr({"aria-controls":$panelId$$, "aria-labelledby":$anchor$$4_anchorId_div$$9$$});
        $self$$174$$.$panels$ = $self$$174$$.$panels$.add($panel$$);
        $panel$$.attr("aria-labelledby", $anchor$$4_anchorId_div$$9$$).attr("role", "tabpanel");
      });
      "start" != $edge$$13$$ && "end" != $edge$$13$$ || $self$$174$$.$tablist$.addClass("oj-tabs-nav-root");
      this.$_initialRender$ && this.$_setOjDisabledOnTab$(this.options.disabledTabs);
    }, $_setupEvents$:function() {
      var $events$$15$$ = {keydown:this.$_tabKeydown$}, $enabledTabs$$2_event$$537$$ = this.options.selectOn, $selectOnClick$$ = !1;
      if ($enabledTabs$$2_event$$537$$) {
        var $self$$175$$ = this;
        $$$$45$$.each($enabledTabs$$2_event$$537$$.split(" "), function($index$$260$$, $eventName$$2$$) {
          "click" == $eventName$$2$$ && ($selectOnClick$$ = !0);
          $oj$$46$$.$DomUtils$.$isValidIdentifier$($eventName$$2$$) && ($events$$15$$[$eventName$$2$$] = $self$$175$$.$_eventHandler$);
        });
      }
      $enabledTabs$$2_event$$537$$ = this.$_getEnabledTabs$();
      this._on($enabledTabs$$2_event$$537$$, $events$$15$$);
      $selectOnClick$$ || this._on($enabledTabs$$2_event$$537$$, {click:function($e$$144$$) {
        $e$$144$$.preventDefault();
      }});
      this.$panels$.on("keydown" + this.eventNamespace, this.$_panelKeydown$.bind(this));
      if (this.options.removable) {
        var $revents$$ = {click:this.$_removeTabHandler$};
        this._on(this.$_getCloseIcons$($enabledTabs$$2_event$$537$$), $revents$$);
      }
      this._focusable($enabledTabs$$2_event$$537$$);
      this._hoverable($enabledTabs$$2_event$$537$$);
      this.$_activeable$($enabledTabs$$2_event$$537$$);
    }, $_tearDownEvents$:function($noCloseIcon$$) {
      var $enabledTabs$$3$$ = this.$_getEnabledTabs$();
      $noCloseIcon$$ || this.$_UnregisterChildNode$(this.$_getCloseIcons$($enabledTabs$$3$$));
      this.$_UnregisterChildNode$($enabledTabs$$3$$);
      this.$panels$ && this.$panels$.off("keydown" + this.eventNamespace);
    }, $_eventHandler$:function($event$$538$$) {
      var $active$$2_eventData$$25$$ = this.$active$, $tab$$1$$ = $$$$45$$($event$$538$$.currentTarget).closest("li"), $clickedIsActive$$ = $active$$2_eventData$$25$$ && $tab$$1$$[0] === $active$$2_eventData$$25$$[0], $oToContent$$ = this.$_getPanelForTab$($tab$$1$$), $oFromContent$$ = $active$$2_eventData$$25$$ && $active$$2_eventData$$25$$.length ? this.$_getPanelForTab$($active$$2_eventData$$25$$) : $$$$45$$(), $active$$2_eventData$$25$$ = {fromTab:$active$$2_eventData$$25$$, fromContent:$oFromContent$$, 
      toTab:$tab$$1$$, toContent:$oToContent$$};
      $event$$538$$.preventDefault();
      $tab$$1$$.hasClass("oj-disabled") || this.$running$ || $clickedIsActive$$ || $oFromContent$$ && $oFromContent$$.length && !1 === this._trigger("beforeDeselect", $event$$538$$, $active$$2_eventData$$25$$) || !this.$_initialRender$ && !1 === this._trigger("beforeSelect", $event$$538$$, $active$$2_eventData$$25$$) || (this.$_initialRender$ ? this.options.selected = this.$_getTabIdOrIndex$($tab$$1$$) : this.option("selected", this.$_getTabIdOrIndex$($tab$$1$$), {_context:{originalEvent:$event$$538$$, 
      $internalSet$:!0}}), this.$active$ = $tab$$1$$, $oToContent$$.addClass("oj-tabs-selected"), $oFromContent$$ && $oFromContent$$.length && $oFromContent$$.removeClass("oj-tabs-selected"), this.$_toggle$($event$$538$$, $active$$2_eventData$$25$$));
    }, $_toggle$:function($event$$539$$, $eventData$$26$$) {
      var $toTab$$ = $eventData$$26$$.toTab.closest("li"), $toShow$$ = $eventData$$26$$.toContent, $toHide$$ = $eventData$$26$$.fromContent;
      this.$running$ = !0;
      var $fromTab$$ = $eventData$$26$$.fromTab.closest("li").removeClass("oj-selected");
      $toHide$$.hide();
      0 < $toHide$$.length && $oj$$46$$.Components.$subtreeHidden$($toHide$$[0]);
      $toTab$$.addClass("oj-selected");
      this.$_isHorizontal$() && 0 < this.$tabs$.length && (0 == $toTab$$.index() ? this.element.addClass("oj-first-child-selected") : this.element.removeClass("oj-first-child-selected"));
      $toShow$$.show();
      0 < $toShow$$.length && $oj$$46$$.Components.$subtreeShown$($toShow$$[0]);
      this.$running$ = !1;
      this.$_initialRender$ || (this._trigger("deselect", $event$$539$$, $eventData$$26$$), this._trigger("select", $event$$539$$, $eventData$$26$$));
      $toHide$$.attr({"aria-expanded":"false", "aria-hidden":"true"});
      $fromTab$$.attr("aria-selected", "false");
      $toShow$$.length && $toHide$$.length ? $fromTab$$.attr("tabIndex", "-1") : $toShow$$.length && this.$tabs$.filter(function() {
        return "0" === $$$$45$$(this).attr("tabIndex");
      }).attr("tabIndex", "-1");
      $toShow$$.attr("aria-expanded", "true").removeAttr("aria-hidden");
      $toTab$$.attr({"aria-selected":"true", tabIndex:"0"});
    }, $_activate$:function($active$$3_anchor$$5$$) {
      void 0 === $active$$3_anchor$$5$$ || this.$active$ && $active$$3_anchor$$5$$[0] === this.$active$[0] || ($active$$3_anchor$$5$$ = $active$$3_anchor$$5$$.find(".oj-tabs-anchor")[0], this.$_eventHandler$({target:$active$$3_anchor$$5$$, currentTarget:$active$$3_anchor$$5$$, preventDefault:$$$$45$$.noop}));
    }, $_createCloseIcons$:function() {
      if (this.options.removable && this.$_isHorizontal$()) {
        var $removeCueText$$ = this.$getTranslatedString$("removeCueText");
        this.$_getEnabledTabs$().each(function($index$$261_rmId$$) {
          var $div$$10$$ = $$$$45$$(this).find("\x3e :first-child");
          $div$$10$$.addClass("oj-removable");
          $index$$261_rmId$$ = "ojtabs-id_rm_" + $index$$261_rmId$$;
          $$$$45$$(this).attr("aria-describedby", $index$$261_rmId$$);
          $$$$45$$("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon-nocontext oj-tabs-close-icon").attr({id:$index$$261_rmId$$, tabIndex:"-1", "aria-label":$removeCueText$$, role:"presentation"}).appendTo($div$$10$$);
        });
      }
    }, $_getEnabledTabs$:function() {
      return $$$$45$$(this.$tabs$.not(".oj-disabled"));
    }, $_getCloseIcons$:function($elem$$151$$) {
      return $elem$$151$$.find(".oj-tabs-close-icon");
    }, $_destroyTabBar$:function() {
      this.$tabs$ && this.$_tearDownEvents$();
      this.$_hasResizeListener$ && ($oj$$46$$.$DomUtils$.$removeResizeListener$(this.element[0], this.$_resizeHandler$), this.$_hasResizeListener$ = !1, this.$_originalWidth$ = void 0);
      this.$_sortable$ && ($oj$$46$$.$DomUtils$.$isTouchSupported$() && this.$_tearDownTouchReorder$(), this.$tablist$.sortable("destroy"), this.$_sortable$ = void 0);
      var $navRoot$$ = this.element.children(".oj-tabs-nav-root"), $navRootNotUL$$ = !$navRoot$$.hasClass("oj-tabs-nav");
      if (this.$tabs$ && (this.$_getCloseIcons$(this.$tabs$).remove(), $navRoot$$.length)) {
        var $afterMe$$ = $navRoot$$, $noFacet$$ = !0, $tabbar$$ = this.$tablist$;
        $navRoot$$.children().each(function() {
          var $child$$22$$ = $$$$45$$(this);
          if ($child$$22$$.hasClass("oj-tabs-conveyorbelt-wrapper")) {
            $child$$22$$ = $tabbar$$;
          } else {
            if (!$child$$22$$.hasClass("oj-tabs-facet")) {
              return;
            }
          }
          $noFacet$$ = !1;
          $afterMe$$.after($child$$22$$);
          $afterMe$$ = $child$$22$$;
        });
        $noFacet$$ && $navRootNotUL$$ && $navRoot$$.after($tabbar$$);
      }
      this.$conveyor$ && (this.$conveyor$.ojConveyorBelt("destroy"), this.$conveyor$.remove(), this.$active$ = this.$conveyor$ = null);
      $navRootNotUL$$ && $navRoot$$.remove();
      this.$tablist$ = this.$tabs$ = null;
    }, _destroy:function() {
      this.$_clearMenu$();
      this.$_isHorizontal$() ? this.element.removeClass("oj-tabs oj-component oj-tabs-horizontal oj-tabs-top oj-tabs-bottom oj-first-child-selected") : this.element.removeClass("oj-tabs oj-component oj-tabs-vertical oj-tabs-start oj-tabs-end oj-helper-clearfix");
      var $self$$177$$ = this, $tab$$2$$, $div$$11$$, $anchor$$6$$, $header$$12$$;
      this.$tabs$.each(function($index$$262$$) {
        $tab$$2$$ = $$$$45$$(this);
        $tab$$2$$.removeAttr("tabIndex").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-controls").removeAttr("aria-disabled").removeAttr("role").removeAttr("data-content").removeClass("oj-active oj-disabled oj-selected oj-tabs-gen-id oj-tabs-tab").removeUniqueId().css("display", "");
        $div$$11$$ = $tab$$2$$.children("div").removeClass("oj-tabs-tab-content");
        $anchor$$6$$ = $div$$11$$.children("a").removeClass("oj-tabs-anchor").removeAttr("tabIndex").removeAttr("role");
        $header$$12$$ = $anchor$$6$$.children();
        $header$$12$$.removeClass("oj-tabs-title").removeAttr("aria-hidden");
        $self$$177$$.$_isOldMarkup$ ? $header$$12$$.prependTo($self$$177$$.$panels$.get($index$$262$$)) : $div$$11$$.hasClass("oj-tabs-gen-div") && $anchor$$6$$.hasClass("oj-tabs-gen-a") ? ($header$$12$$.prependTo($tab$$2$$), $div$$11$$.remove()) : $anchor$$6$$.hasClass("oj-tabs-gen-a") ? ($header$$12$$.prependTo($div$$11$$), $anchor$$6$$.remove()) : $div$$11$$.hasClass("oj-tabs-gen-div") && ($anchor$$6$$.prependTo($tab$$2$$), $div$$11$$.remove());
      });
      var $tabbar$$1$$ = this.$tablist$;
      this.$_destroyTabBar$();
      $tabbar$$1$$.removeAttr("tabIndex").removeAttr("role").removeClass("oj-tabs-nav oj-tabs-nav-root oj-helper-clearfix").removeUniqueId();
      this.$_isOldMarkup$ && $tabbar$$1$$.remove();
      this.$panels$.each(function() {
        $$$$45$$(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-tabs-selected oj-tabs-gen-id oj-tabs-panel").removeUniqueId().css("display", "");
      });
      this.element.children(".oj-tabs-facet").removeClass("oj-start");
    }, $_removeTabHandler$:function($event$$540$$) {
      var $tab$$3$$ = $$$$45$$($event$$540$$.currentTarget).closest("li"), $panel$$2$$ = this.$_getPanelForTab$($tab$$3$$), $eventData$$27$$ = {tab:$tab$$3$$, content:$panel$$2$$};
      if ($tab$$3$$ && !1 !== this._trigger("beforeRemove", $event$$540$$, $eventData$$27$$)) {
        $event$$540$$.preventDefault();
        if ($tab$$3$$.hasClass("oj-selected")) {
          var $nextIndex$$1$$ = this.$_getNextEnabledTab$(this.$tabs$.index($tab$$3$$));
          void 0 === $nextIndex$$1$$ ? (this.$active$ = void 0, this.option("selected", void 0, {_context:{originalEvent:$event$$540$$, $internalSet$:!0}})) : (this.$_fireSelectEvents$($nextIndex$$1$$), this.option("selected", this.$_getTabIdOrIndex$($$$$45$$(this.$tabs$[$nextIndex$$1$$])), {_context:{originalEvent:$event$$540$$, $internalSet$:!0}}));
        }
        this.$_tearDownEvents$();
        this.$tabs$ = this.$tabs$.not($tab$$3$$);
        $tab$$3$$.remove();
        $panel$$2$$.remove();
        this.$_updateDisabledTabs$();
        this.refresh();
        this._trigger("remove", $event$$540$$, $eventData$$27$$);
      }
    }, $_wrapLi$:function($header$$13$$, $contentId$$1$$) {
      var $tab$$4$$;
      if ("li" == $header$$13$$.prop("tagName").toLowerCase()) {
        $tab$$4$$ = $header$$13$$;
        var $anchor$$7_div$$12$$ = $tab$$4$$.children("div");
        1 == $anchor$$7_div$$12$$.length && $anchor$$7_div$$12$$.hasClass("oj-tabs-tab-content") ? ($anchor$$7_div$$12$$ = $anchor$$7_div$$12$$.children("a"), 1 != $anchor$$7_div$$12$$.length && ($tab$$4$$.wrapInner("\x3ca href\x3d'#'\x3e\x3c/a\x3e"), $anchor$$7_div$$12$$.addClass("oj-tabs-gen-a"))) : ($anchor$$7_div$$12$$ = $tab$$4$$.wrapInner("\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e").children(), $anchor$$7_div$$12$$.addClass("oj-tabs-gen-div oj-tabs-tab-content"), $anchor$$7_div$$12$$.children().addClass("oj-tabs-gen-a"));
      } else {
        $tab$$4$$ = $header$$13$$.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent().parent().parent(), $tab$$4$$.addClass("oj-tabs-gen-li"), $tab$$4$$.children().addClass("oj-tabs-gen-div oj-tabs-tab-content");
      }
      $contentId$$1$$ && $tab$$4$$.attr("data-content", $contentId$$1$$);
      return $tab$$4$$;
    }, addTab:function($contentAfter_navRoot$$1_newTab_tabbar$$2$$) {
      var $tab$$5$$, $content$$22$$, $index$$264_tabAfter$$ = -1;
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$.tab && $contentAfter_navRoot$$1_newTab_tabbar$$2$$.content ? ($content$$22$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.content, $tab$$5$$ = this.$_wrapLi$($contentAfter_navRoot$$1_newTab_tabbar$$2$$.tab, this.$_getUniqueId$($content$$22$$)), void 0 !== $contentAfter_navRoot$$1_newTab_tabbar$$2$$.index && ($index$$264_tabAfter$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.index)) : ($content$$22$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$, 
      $tab$$5$$ = this.$_wrapLi$($$$$45$$($contentAfter_navRoot$$1_newTab_tabbar$$2$$).find("\x3e :first-child"), this.$_getUniqueId$($content$$22$$)));
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = this.element.children(".oj-tabs-nav-root");
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.hasClass("oj-tabs-nav") ? $contentAfter_navRoot$$1_newTab_tabbar$$2$$ : $contentAfter_navRoot$$1_newTab_tabbar$$2$$.length ? $contentAfter_navRoot$$1_newTab_tabbar$$2$$.find(".oj-tabs-nav") : this.element.children(".oj-tabs-nav");
      var $isNew$$8$$ = !1;
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$.length || ($contentAfter_navRoot$$1_newTab_tabbar$$2$$ = $$$$45$$("\x3cul\x3e"), $isNew$$8$$ = !0);
      $isNew$$8$$ && $contentAfter_navRoot$$1_newTab_tabbar$$2$$.prependTo(this.element);
      0 <= $index$$264_tabAfter$$ && $index$$264_tabAfter$$ < $contentAfter_navRoot$$1_newTab_tabbar$$2$$.children().length ? ($index$$264_tabAfter$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.children(":eq(" + $index$$264_tabAfter$$ + ")"), $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = this.element.children("#" + $index$$264_tabAfter$$.attr("aria-controls")), $index$$264_tabAfter$$.before($tab$$5$$), $contentAfter_navRoot$$1_newTab_tabbar$$2$$.before($content$$22$$)) : ($tab$$5$$.appendTo($contentAfter_navRoot$$1_newTab_tabbar$$2$$), 
      $content$$22$$.appendTo(this.element));
      this.refresh();
      0 == this.$active$.length && this.$_fireSelectEvents$(0);
      var $self$$178$$ = this;
      window.setTimeout(function() {
        $self$$178$$.$tabs$ && $tab$$5$$[0].scrollIntoView(!1);
      }, 0);
    }, $_setupTouchReorder$:function() {
      this.$_touchProxy$ = $oj$$46$$.$_TouchProxy$.$addTouchListeners$(this.$tablist$);
    }, $_tearDownTouchReorder$:function() {
      $oj$$46$$.$_TouchProxy$.$removeTouchListeners$(this.$tablist$);
    }, $_setupReorder$:function() {
      if (this.options.reorderable) {
        var $self$$179$$ = this;
        $oj$$46$$.$DomUtils$.$isTouchSupported$() && this.$_setupTouchReorder$();
        this.$tablist$.sortable({axis:$self$$179$$.$_isHorizontal$() ? "x" : "y", stop:function($event$$541$$, $ui$$38$$) {
          var $mvTab$$ = $ui$$38$$.item;
          $self$$179$$.$_doReorder$($event$$541$$, $mvTab$$, $mvTab$$.prev()) || $self$$179$$.$tablist$.sortable("cancel");
        }});
        this.$_sortable$ = !0;
      } else {
        this.$_tearDownTouchReorder$(), this.$_sortable$ = !1;
      }
    }, $_InitOptions$:function($originalDefaults$$13$$, $constructorOptions$$15$$) {
      var $edge$$14$$ = $constructorOptions$$15$$.edge;
      this.$_edgeSpecified$ = "top" == $edge$$14$$ || "bottom" == $edge$$14$$ || "start" == $edge$$14$$ || "end" == $edge$$14$$;
      this._super($originalDefaults$$13$$, $constructorOptions$$15$$);
    }, $_orientationToEdge$:function($value$$259$$) {
      return "horizontal" == $value$$259$$ ? "top" : "vertical" == $value$$259$$ ? "start" : null;
    }, $_setupEdge$:function($edge$$15$$) {
      if (this.$_initialRender$ && !this.$_edgeSpecified$ || !$edge$$15$$) {
        $edge$$15$$ = this.$_orientationToEdge$(this.options.orientation);
      }
      var $oEdge$$ = this.options.edge;
      this.element.removeClass("oj-tabs-top oj-tabs-bottom oj-tabs-start oj-tabs-end");
      switch($edge$$15$$) {
        case "top":
        ;
        case "bottom":
          !this.$panels$ || "start" != $oEdge$$ && "end" != $oEdge$$ || this.element.removeClass("oj-tabs-vertical oj-helper-clearfix");
          this.element.addClass("oj-tabs oj-component oj-tabs-horizontal");
          "bottom" == $edge$$15$$ ? this.element.addClass("oj-tabs-bottom") : this.element.addClass("oj-tabs-top");
          this.$_initialRender$ ? this.options.orientation = "horizontal" : "horizontal" != this.options.orientation && this.option("orientation", "horizontal", {_context:{$internalSet$:!0}, changed:!0});
          break;
        case "start":
        ;
        case "end":
          !this.$panels$ || "top" != $oEdge$$ && "bottom" != $oEdge$$ || this.element.removeClass("oj-tabs-horizontal");
          this.element.addClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix");
          "end" == $edge$$15$$ ? this.element.addClass("oj-tabs-end") : this.element.addClass("oj-tabs-start");
          this.$_initialRender$ ? this.options.orientation = "vertical" : "vertical" != this.options.orientation && this.option("orientation", "vertical", {_context:{$internalSet$:!0}, changed:!0});
          break;
        default:
          return!1;
      }
      this.$_initialRender$ ? this.options.edge = $edge$$15$$ : this.options.edge != $edge$$15$$ && this.option("edge", $edge$$15$$, {_context:{$internalSet$:!0}, changed:!0});
      return!0;
    }, $_getTabbarWrapper$:function() {
      var $ulParent$$ = this.$tablist$.parent();
      $ulParent$$.hasClass("oj-tabs-conveyor") || ($ulParent$$ = this.$tablist$.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"), (0 < this.element.children(".oj-tabs-facet").length ? $ulParent$$.wrap("\x3cdiv\x3e").wrap("\x3cdiv\x3e").parent().parent().addClass("oj-tabs-conveyorbelt-wrapper") : $ulParent$$).wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-nav-root").uniqueId().attr("id"));
      return $ulParent$$;
    }, $_addPrefixId$:function($elem$$152$$) {
      0 > $elem$$152$$.id.indexOf("ojtabs-id_") && $$$$45$$($elem$$152$$).attr("id", "ojtabs-id_" + $elem$$152$$.id);
    }, getNodeBySubId:function($index$$265_locator$$55$$) {
      if (null == $index$$265_locator$$55$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$52$$ = $index$$265_locator$$55$$.subId;
      $index$$265_locator$$55$$ = $index$$265_locator$$55$$.index;
      if ("oj-conveyorbelt" != $subId$$52$$ && ("number" !== typeof $index$$265_locator$$55$$ || 0 > $index$$265_locator$$55$$ || $index$$265_locator$$55$$ >= this.$panels$.length)) {
        return null;
      }
      switch($subId$$52$$) {
        case "oj-conveyorbelt":
          return this.$conveyor$ ? this.$conveyor$[0] : null;
        case "oj-tabs-panel":
          return this.$_getPanelForTab$(this.$tabs$[$index$$265_locator$$55$$])[0];
        case "oj-tabs-tab":
          return this.$tabs$[$index$$265_locator$$55$$];
        case "oj-tabs-title":
          return $$$$45$$(this.$tabs$[$index$$265_locator$$55$$]).find(".oj-tabs-title")[0];
        case "oj-tabs-close-icon":
          return $$$$45$$(this.$tabs$[$index$$265_locator$$55$$]).find("." + $subId$$52$$)[0];
      }
      return null;
    }, $_getConveyorWrapperMaxWidth$:function() {
      return this.$_originalWidth$ + 10;
    }, $_getTabsWidth$:function() {
      var $tabbar$$3$$ = this.element.find(".oj-tabs-conveyorbelt-wrapper");
      return $tabbar$$3$$.length ? $tabbar$$3$$[0].clientWidth : this.element[0].clientWidth;
    }, $_isOverflow$:function() {
      return this.$_originalWidth$ > this.$_getTabsWidth$();
    }, $_getTabMaxWidth$:function() {
      var $max$$8$$ = Math.floor(this.$_getTabsWidth$() / this.$tabs$.length);
      this.options.removable && ($max$$8$$ -= 28);
      return $max$$8$$;
    }, $_applyTabMaxWidth$:function() {
      var $maxWidth$$2$$ = this.$_getTabMaxWidth$();
      this.$tablist$.find(".oj-tabs-title").each(function() {
        $$$$45$$(this).css("max-width", "" + $maxWidth$$2$$ + "px").addClass("oj-tabs-title-overflow");
      });
    }, $_removeTabMaxWidth$:function() {
      this.$tablist$.find(".oj-tabs-title").each(function() {
        $$$$45$$(this).css("max-width", "").removeClass("oj-tabs-title-overflow");
      });
    }, $_logMessage$:function() {
    }, $_handleResize$:function() {
      this.$_isProgressive$() && (this.$_isOverflow$() ? this.$_applyTabMaxWidth$() : this.$_removeTabMaxWidth$());
    }, $_isProgressive$:function() {
      return "auto" == this.options.truncation || "progressive" == this.options.truncation;
    }, $_truncateBeforeOverflow$:function() {
      this.$_isHorizontal$() && 0 < this.$tabs$.length && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$46$$.$DomUtils$.$addResizeListener$(this.element[0], this.$_resizeHandler$), this.$_hasResizeListener$ = !0, this.$_originalWidth$ = this.$_getTabbarWrapper$()[0].scrollWidth, this.$_isProgressive$() && this.$_isOverflow$() && this.$_applyTabMaxWidth$());
    }, $_NotifyShown$:function() {
      this._super();
      this.refresh();
    }, $_NotifyAttached$:function() {
      this._super();
      this.refresh();
    }, $_buildContextMenuItem$:function($cmd$$5$$) {
      return $$$$45$$("\x3ca\x3e").text(this.$getTranslatedString$($_arMenuKeyMap$$1$$[$cmd$$5$$])).attr("href", "#").wrap("\x3cli\x3e").parent().attr("id", $_arMenuCmdMap$$1$$[$cmd$$5$$]);
    }, $_menu_cut$:function($obj$$109$$) {
      if (!$obj$$109$$ || !$obj$$109$$.length) {
        return!1;
      }
      this.$_menu$.$cutTab$ = $obj$$109$$;
    }, $_menu_paste$:function($event$$542$$, $obj$$110$$, $pasteBefore$$2$$) {
      if (!$obj$$110$$ || !$obj$$110$$.length || !this.$_menu$.$cutTab$) {
        return!1;
      }
      var $mvTab$$1$$ = this.$_menu$.$cutTab$;
      this.$_menu$.$cutTab$ = !1;
      this.$_doReorder$($event$$542$$, $mvTab$$1$$, $obj$$110$$, $pasteBefore$$2$$);
    }, $_handleContextMenuSelect$:function($ev$$8$$, $ui$$39$$) {
      var $id$$49$$ = $ui$$39$$ ? $ui$$39$$.item.attr("id") : void 0;
      "ojtabscut" === $id$$49$$ ? this.$_menu_cut$(this.$_menu$.tab) : "ojtabspastebefore" === $id$$49$$ ? this.$_menu_paste$($ev$$8$$, this.$_menu$.tab, !0) : "ojtabspasteafter" === $id$$49$$ && this.$_menu_paste$($ev$$8$$, this.$_menu$.tab, !1);
    }, $_initMenu$:function($newVal$$5$$) {
      var $$m$$2_menu$$25$$, $dm$$2_t$$18$$;
      $newVal$$5$$ || this.options.contextMenu || ($$m$$2_menu$$25$$ = this.element.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m$$2_menu$$25$$);
      if ($newVal$$5$$ || this.options.contextMenu) {
        $$m$$2_menu$$25$$ = $newVal$$5$$ || this.options.contextMenu;
        $dm$$2_t$$18$$ = $$$$45$$.type($$m$$2_menu$$25$$);
        if ("function" == $dm$$2_t$$18$$) {
          try {
            $$m$$2_menu$$25$$ = $$m$$2_menu$$25$$();
          } catch ($e$$145$$) {
            $$m$$2_menu$$25$$ = null;
          }
          $dm$$2_t$$18$$ = $$$$45$$.type($$m$$2_menu$$25$$);
        }
        if ("string" === $dm$$2_t$$18$$) {
          if ($$m$$2_menu$$25$$ = $$$$45$$($$m$$2_menu$$25$$)) {
            $$m$$2_menu$$25$$.css("display", "none");
            $dm$$2_t$$18$$ = this.$_menu$;
            if (!$dm$$2_t$$18$$) {
              return;
            }
            $dm$$2_t$$18$$.$$container$ = $$m$$2_menu$$25$$;
            $dm$$2_t$$18$$.$usermenu$ = !0;
          }
          this.$_menu$.$usermenu$ && $newVal$$5$$ && this.$_applyMenu$();
        }
      }
    }, $_applyMenu$:function() {
      if (this.$_menu$ && this.$_menu$.$usermenu$ && this.options.reorderable) {
        var $$menuContainer$$2$$ = this.$_menu$.$$container$, $self$$180$$ = this;
        $$menuContainer$$2$$.on("ojselect", $$$$45$$.proxy(this.$_handleContextMenuSelect$, this));
        var $bChanged$$2$$ = !1;
        $$menuContainer$$2$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$45$$(this).children("a").length) {
            var $command$$13$$ = $$$$45$$(this).attr("data-oj-command").slice(8);
            $$$$45$$(this).replaceWith($self$$180$$.$_buildContextMenuItem$($command$$13$$));
            $$$$45$$(this).addClass("oj-menu-item");
            $bChanged$$2$$ = !0;
          }
        });
        $bChanged$$2$$ && $$menuContainer$$2$$.ojMenu("refresh");
        this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$2$$.find("#ojtabspastebefore");
        this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$2$$.find("#ojtabspasteafter");
      }
    }, $_clearMenu$:function() {
      var $menu$$26$$ = this.$_menu$;
      $menu$$26$$ && $menu$$26$$.$usermenu$ && ($menu$$26$$.$usermenu$ = !1, $menu$$26$$.$$container$.off("ojselect"), $menu$$26$$.$$container$ = null);
    }, $_doReorder$:function($event$$543$$, $mvTab$$2$$, $prevTab$$, $pasteBefore$$3$$) {
      var $mvContent$$ = this.$_getPanelForTab$($mvTab$$2$$), $eventData$$28$$ = {tab:$mvTab$$2$$, content:$mvContent$$};
      if (!1 === this._trigger("beforeReorder", $event$$543$$, $eventData$$28$$)) {
        return!1;
      }
      var $mvInd_prevContent$$ = this.$tabs$.index($mvTab$$2$$);
      if ($prevTab$$.length) {
        if (this.$tabs$.index($prevTab$$) == $mvInd_prevContent$$) {
          return!0;
        }
        $mvInd_prevContent$$ = this.$_getPanelForTab$($prevTab$$);
        $pasteBefore$$3$$ ? ($prevTab$$.before($mvTab$$2$$), $mvInd_prevContent$$.before($mvContent$$)) : ($prevTab$$.after($mvTab$$2$$), $mvInd_prevContent$$.after($mvContent$$));
      } else {
        if (0 < this.$tabs$.length) {
          if (0 == $mvInd_prevContent$$) {
            return!0;
          }
          this.$tabs$.first().before($mvTab$$2$$);
          this.$panels$.first().before($mvContent$$);
        }
      }
      this.$_updateDisabledTabs$();
      this.refresh();
      $mvTab$$2$$.focus();
      this._trigger("reorder", $event$$543$$, $eventData$$28$$);
      return!0;
    }, $_sanitizeSelector$:function($hash$$7$$) {
      return $hash$$7$$ ? $hash$$7$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : "";
    }, $_getPanelForTab$:function($tab$$6$$) {
      return this.element.find(this.$_sanitizeSelector$("#" + $$$$45$$($tab$$6$$).attr("aria-controls")));
    }, $_getUniqueId$:function($panel$$3$$) {
      var $id$$50$$ = $panel$$3$$.attr("id");
      $id$$50$$ || ($id$$50$$ = $panel$$3$$.uniqueId().attr("id"), $panel$$3$$.addClass("oj-tabs-gen-id"));
      return $id$$50$$;
    }, $_getTab$:function($idOrIndex$$1_index$$268$$) {
      $idOrIndex$$1_index$$268$$ = this.$_getIndexByTabOrContentId$($idOrIndex$$1_index$$268$$);
      if (-1 !== $idOrIndex$$1_index$$268$$) {
        return $$$$45$$(this.$tabs$[$idOrIndex$$1_index$$268$$]);
      }
    }, $_getIndexByTabOrContentId$:function($idOrIndex$$2_selector$$38_tabOrContent$$) {
      var $index$$269$$ = -1;
      "number" === typeof $idOrIndex$$2_selector$$38_tabOrContent$$ ? 0 <= $idOrIndex$$2_selector$$38_tabOrContent$$ && $idOrIndex$$2_selector$$38_tabOrContent$$ < this.$tabs$.length && ($index$$269$$ = $idOrIndex$$2_selector$$38_tabOrContent$$) : "string" === typeof $idOrIndex$$2_selector$$38_tabOrContent$$ && ($idOrIndex$$2_selector$$38_tabOrContent$$ = this.$_sanitizeSelector$($idOrIndex$$2_selector$$38_tabOrContent$$), $oj$$46$$.$DomUtils$.$isValidIdentifier$($idOrIndex$$2_selector$$38_tabOrContent$$) && 
      ($idOrIndex$$2_selector$$38_tabOrContent$$ = this.element.find("#" + $idOrIndex$$2_selector$$38_tabOrContent$$), $idOrIndex$$2_selector$$38_tabOrContent$$.length && ($index$$269$$ = this.$tabs$.index($idOrIndex$$2_selector$$38_tabOrContent$$), -1 == $index$$269$$ && ($index$$269$$ = this.$panels$.index($idOrIndex$$2_selector$$38_tabOrContent$$)))));
      return $index$$269$$;
    }, $_getSelectedIndex$:function() {
      var $selected$$23$$ = this.options.selected;
      return "number" === typeof $selected$$23$$ ? $selected$$23$$ : this.$tabs$.index($$$$45$$("#" + $selected$$23$$));
    }, $_getTabIdOrIndex$:function($tab$$7$$) {
      if ($tab$$7$$) {
        var $id$$51$$ = $tab$$7$$.attr("id");
        return $id$$51$$ ? $id$$51$$ : this.$tabs$.index($tab$$7$$);
      }
    }, $_setOjDisabledOnTab$:function($disTabs$$) {
      var $children$$24$$ = (this.$tablist$ ? this.$tablist$ : this.element.children("ul")).children("li");
      $children$$24$$.removeClass("oj-disabled").removeAttr("aria-disabled");
      var $arr$$22$$ = [];
      if ($disTabs$$ && 0 < $disTabs$$.length) {
        for (var $id$$52$$, $tab$$8$$, $i$$428$$ = 0;$i$$428$$ < $disTabs$$.length;$i$$428$$++) {
          if ($tab$$8$$ = this.$_getTab$($disTabs$$[$i$$428$$])) {
            $tab$$8$$.addClass("oj-disabled"), $tab$$8$$.attr("aria-disabled", "true"), $tab$$8$$.find(".oj-tabs-anchor").removeAttr("href"), $id$$52$$ = $tab$$8$$.attr("id"), $arr$$22$$.push($id$$52$$ ? $id$$52$$ : $children$$24$$.index($tab$$8$$));
          }
        }
      }
      this.$_updateDisabledTabs$($arr$$22$$);
    }, $_updateDisabledTabs$:function($arr$$23$$) {
      if (!$arr$$23$$) {
        $arr$$23$$ = [];
        var $self$$181$$ = this;
        this.$tablist$.children().each(function() {
          var $tab$$9$$ = $$$$45$$(this);
          $tab$$9$$.hasClass("oj-disabled") && $arr$$23$$.push($self$$181$$.$_getTabIdOrIndex$($tab$$9$$));
        });
      }
      $oj$$46$$.$Object$.$_compareSet$(this.options.disabledTabs, $arr$$23$$) || (this.$_initialRender$ ? this.options.disabledTabs = $arr$$23$$ : this.option({disabledTabs:$arr$$23$$}, {_context:{$internalSet$:!0, $writeback$:!0}, changed:!0}));
    }, $_isInATab$:function($element$$113$$) {
      var $found$$6$$ = !1;
      this.$tabs$.each(function() {
        if (this === $element$$113$$ || $$$$45$$.contains(this, $element$$113$$)) {
          return $found$$6$$ = !0, !1;
        }
      });
      return $found$$6$$;
    }, $_createTabbar$:function() {
      var $contentIds$$ = this.$_getContentIds$(), $self$$182$$ = this, $tabbar$$5$$ = this.element.children("ul");
      0 < $tabbar$$5$$.length && $tabbar$$5$$.children("li").each(function($index$$271$$) {
        $self$$182$$.$_wrapLi$($$$$45$$(this), $contentIds$$[$index$$271$$]);
      });
    }, $_createTabbarFromOldMarkup$:function() {
      var $tabbar$$6$$ = this.element.children("ul");
      if (0 == $tabbar$$6$$.length) {
        var $self$$183$$ = this, $contentIds$$1$$ = this.$_getContentIds$(), $tabbar$$6$$ = $$$$45$$("\x3cul\x3e");
        this.element.children().each(function($index$$272$$) {
          $self$$183$$.$_wrapLi$($$$$45$$(this).find("\x3e :first-child"), $contentIds$$1$$[$index$$272$$]).appendTo($tabbar$$6$$);
        });
        $tabbar$$6$$.prependTo(this.element);
      }
    }, $_addFacets$:function() {
      var $navRoot$$3$$ = this.element.children(".oj-tabs-nav-root"), $self$$184$$ = this, $tabbarWrapper$$ = $navRoot$$3$$.children(".oj-tabs-conveyorbelt-wrapper");
      $navRoot$$3$$.index();
      this.element.children(".oj-tabs-facet").each(function() {
        var $facet$$1$$ = $$$$45$$(this), $facetId$$ = $self$$184$$.$_getUniqueId$($facet$$1$$);
        0 == $navRoot$$3$$.find("#" + $facetId$$).length && ($facet$$1$$.hasClass("oj-start") ? $tabbarWrapper$$.before($facet$$1$$) : $facet$$1$$.appendTo($navRoot$$3$$));
      });
    }, $_getContentIds$:function() {
      var $contentIds$$2$$ = [], $self$$185$$ = this;
      this.element.children(":not(ul):not(.oj-tabs-facet)").each(function() {
        var $panel$$4$$ = $$$$45$$(this);
        $panel$$4$$.addClass("oj-tabs-panel");
        $contentIds$$2$$.push($self$$185$$.$_getUniqueId$($panel$$4$$));
      });
      return $contentIds$$2$$;
    }});
  })();
});
