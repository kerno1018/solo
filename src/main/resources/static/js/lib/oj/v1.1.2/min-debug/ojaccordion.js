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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojcollapsible"], function($oj$$42$$, $$$$41$$) {
  (function() {
    $oj$$42$$.$__registerWidget$("oj.ojAccordion", $$$$41$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{multiple:!1, expanded:null, beforeExpand:null, expand:null, beforeCollapse:null, collapse:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-accordion oj-component").attr("role", "group");
      this.options.expanded = this.$_expandedIndexToId$(this.options.expanded);
      this.$_refresh$();
    }, $_NotifyContextMenuGesture$:function($menu$$22$$, $event$$510$$, $eventType$$52$$) {
      this.$_OpenContextMenu$($event$$510$$, $eventType$$52$$, {launcher:this.element.find(".oj-collapsible-header-icon").first()});
    }, _destroy:function() {
      this.element.removeClass("oj-accordion oj-component").removeAttr("role");
      this.element.children().removeClass("oj-accordion-collapsible");
      this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy");
    }, _setOption:function($key$$156$$, $value$$255$$, $flags$$40$$) {
      if ("multiple" === $key$$156$$) {
        !1 == $value$$255$$ && !0 == this.options.multiple && this.element.children(".oj-expanded").first().siblings(".oj-collapsible").ojCollapsible("collapse", !1);
      } else {
        if ("expanded" === $key$$156$$) {
          this.$_setExpandedOption$($value$$255$$);
          return;
        }
      }
      this._super($key$$156$$, $value$$255$$, $flags$$40$$);
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, $_refresh$:function() {
      this.$_makeCollapsible$();
      this._setOption("disabled", this.options.disabled);
      this.$_internalSetExpanded$ = !0;
      this._setOption("expanded", this.options.expanded);
      this.$_internalSetExpanded$ = !1;
      this.$_setupEvents$();
    }, $_makeCollapsible$:function() {
      this.element.children(":oj-collapsible").each(function() {
        $$$$41$$(this).ojCollapsible("option", "expandArea", "header");
      });
      this.$collapsibles$ = this.element.children().not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible");
    }, $_setupEvents$:function() {
      var $events$$13$$ = {keydown:this.$_keydown$, ojbeforeexpand:this.$_beforeExpandHandler$, ojexpand:this.$_expandHandler$, ojbeforecollapse:this.$_beforeCollapseHandler$, ojcollapse:this.$_collapseHandler$};
      this._off(this.$collapsibles$);
      this._on(this.$collapsibles$, $events$$13$$);
    }, $_keydown$:function($event$$511$$) {
      if (!$event$$511$$.altKey && !$event$$511$$.ctrlKey && ($$$$41$$($event$$511$$.target).hasClass("oj-collapsible-header") || $$$$41$$($event$$511$$.target).hasClass("oj-collapsible-header-icon"))) {
        var $keyCode$$17$$ = $$$$41$$.ui.keyCode, $enabledCollapsibles$$ = this.$collapsibles$.not(".oj-disabled"), $length$$16$$ = $enabledCollapsibles$$.length, $target$$93$$ = $$$$41$$($event$$511$$.target).closest(".oj-collapsible"), $currentIndex$$3$$ = $enabledCollapsibles$$.index($target$$93$$), $toFocus$$ = !1;
        if (0 <= $currentIndex$$3$$) {
          switch($event$$511$$.keyCode) {
            case $keyCode$$17$$.RIGHT:
            ;
            case $keyCode$$17$$.DOWN:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$3$$ + 1) % $length$$16$$];
              break;
            case $keyCode$$17$$.LEFT:
            ;
            case $keyCode$$17$$.UP:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$3$$ - 1 + $length$$16$$) % $length$$16$$];
              break;
            case $keyCode$$17$$.HOME:
              $toFocus$$ = $enabledCollapsibles$$[0];
              break;
            case $keyCode$$17$$.END:
              $toFocus$$ = $enabledCollapsibles$$[$length$$16$$ - 1];
          }
        }
        $toFocus$$ && ($target$$93$$ && $$$$41$$($target$$93$$).trigger("ojfocusout"), $$$$41$$($toFocus$$).trigger("ojfocus"), $event$$511$$.preventDefault());
      }
    }, $_findTargetSiblings$:function($closestCollapsible_event$$512$$) {
      return!this.options.multiple && ($closestCollapsible_event$$512$$ = $$$$41$$($closestCollapsible_event$$512$$.target).closest(".oj-collapsible"), $closestCollapsible_event$$512$$.parent().is(":oj-ojAccordion")) ? $closestCollapsible_event$$512$$.siblings(".oj-collapsible.oj-expanded").map(function() {
        return $$$$41$$(this).data("oj-ojCollapsible");
      }) : $$$$41$$();
    }, $_beforeExpandHandler$:function($event$$513$$) {
      if (!this.$_isTargetMyCollapsible$($event$$513$$)) {
        return!0;
      }
      var $result$$62$$, $self$$162$$ = this, $newData$$1$$;
      this.$_findTargetSiblings$($event$$513$$).each(function() {
        var $beforeCollapsedData_collapsible$$ = this.element;
        $newData$$1$$ = $self$$162$$.$_initEventData$($beforeCollapsedData_collapsible$$, $$$$41$$($event$$513$$.target));
        $beforeCollapsedData_collapsible$$ = {header:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-header"), content:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-content")};
        return $result$$62$$ = this._trigger("beforeCollapse", $event$$513$$, $beforeCollapsedData_collapsible$$);
      });
      $newData$$1$$ || ($newData$$1$$ = $self$$162$$.$_initEventData$(null, $$$$41$$($event$$513$$.target)));
      this.options.multiple || this._trigger("beforeExpand", $event$$513$$, $newData$$1$$);
      return $result$$62$$;
    }, $_expandHandler$:function($event$$514$$, $eventData$$18$$) {
      if (this.$_isTargetMyCollapsible$($event$$514$$) && !this.$_duringSetExpandedOption$) {
        var $newData$$2$$, $self$$163$$ = this;
        this.$_findTargetSiblings$($event$$514$$).each(function() {
          this.collapse(!1, $event$$514$$, $eventData$$18$$);
          $newData$$2$$ = $self$$163$$.$_initEventData$(this.element, $$$$41$$($event$$514$$.target));
        });
        $newData$$2$$ || ($newData$$2$$ = $self$$163$$.$_initEventData$(null, $$$$41$$($event$$514$$.target)));
        this.options.multiple || this._trigger("expand", $event$$514$$, $newData$$2$$);
        this.$_updateExpanded$();
      }
    }, $_beforeCollapseHandler$:function($event$$515$$, $eventData$$19$$) {
      return this.$_isTargetMyCollapsible$($event$$515$$) && !this.options.multiple ? this._trigger("beforeCollapse", $event$$515$$, this.$_initCollapseEventData$($event$$515$$, $eventData$$19$$)) : !0;
    }, $_collapseHandler$:function($event$$516$$, $eventData$$20$$) {
      if (!this.$_duringSetExpandedOption$ && this.$_isTargetMyCollapsible$($event$$516$$)) {
        var $newData$$3$$ = this.$_initCollapseEventData$($event$$516$$, $eventData$$20$$);
        this.options.multiple || this._trigger("collapse", $event$$516$$, $newData$$3$$);
        this.$_updateExpanded$();
      }
    }, $_initEventData$:function($fromC$$, $toC$$) {
      return{fromCollapsible:$fromC$$, toCollapsible:$toC$$};
    }, $_initCollapseEventData$:function($event$$517$$, $eventData$$22$$) {
      var $newData$$4$$;
      if ($eventData$$22$$.toCollapsible) {
        $newData$$4$$ = $eventData$$22$$;
      } else {
        if ($event$$517$$.originalEvent && $event$$517$$.originalEvent.target) {
          var $collapsible$$1$$ = $$$$41$$($event$$517$$.originalEvent.target);
          $collapsible$$1$$.hasClass("oj-collapsible") && ($newData$$4$$ = this.$_initEventData$($$$$41$$($event$$517$$.target), $collapsible$$1$$));
        }
        $newData$$4$$ || ($newData$$4$$ = this.$_initEventData$($$$$41$$($event$$517$$.target), null));
      }
      return $newData$$4$$;
    }, $_isTargetMyCollapsible$:function($event$$518$$) {
      return $$$$41$$($event$$518$$.target).is(this.$collapsibles$);
    }, $_updateExpanded$:function() {
      var $cid$$9$$, $result$$63$$ = [];
      this.$collapsibles$.each(function($index$$239$$) {
        $$$$41$$(this).ojCollapsible("option", "expanded") && ($cid$$9$$ = $$$$41$$(this).attr("id"), $result$$63$$.push($cid$$9$$ ? $cid$$9$$ : $index$$239$$));
      });
      $oj$$42$$.$Object$.$_compareSet$(this.options.expanded, $result$$63$$) || this.option("expanded", $result$$63$$, {_context:{$internalSet$:!0, $writeback$:!0}});
    }, $_expandedIndexToId$:function($expanded$$10$$) {
      if (Array.isArray($expanded$$10$$)) {
        var $id$$48$$, $newExp$$ = [];
        this.element.children().each(function($index$$240$$) {
          ($id$$48$$ = $$$$41$$(this).attr("id")) ? -1 != $expanded$$10$$.indexOf($id$$48$$) ? $newExp$$.push($id$$48$$) : -1 != $expanded$$10$$.indexOf($index$$240$$) && $newExp$$.push($id$$48$$) : -1 != $expanded$$10$$.indexOf($index$$240$$) && $newExp$$.push($index$$240$$);
        });
        !this.options.multiple && 1 < $newExp$$.length && ($newExp$$ = [$newExp$$[$newExp$$.length - 1]]);
        return $newExp$$;
      }
      return null;
    }, $_setExpandedOption$:function($expanded$$11$$) {
      this.$_internalSetExpanded$ || ($expanded$$11$$ = this.$_expandedIndexToId$($expanded$$11$$));
      if ($expanded$$11$$) {
        var $self$$164$$ = this, $child$$21$$, $childId$$1$$, $parentExp$$, $iexp$$ = 0;
        this.$collapsibles$.each(function($index$$241$$) {
          $child$$21$$ = $$$$41$$(this);
          $childId$$1$$ = $child$$21$$.attr("id");
          $parentExp$$ = !1;
          $childId$$1$$ ? $childId$$1$$ == $expanded$$11$$[$iexp$$] && ($parentExp$$ = !0) : $index$$241$$ == $expanded$$11$$[$iexp$$] && ($parentExp$$ = !0);
          $parentExp$$ && $iexp$$++;
          $child$$21$$.ojCollapsible("option", "expanded") !== $parentExp$$ && ($oj$$42$$.$Logger$.warn("JET Accordion: override collapsible " + $index$$241$$ + " expanded setting"), $self$$164$$.$_duringSetExpandedOption$ = !0, $child$$21$$.ojCollapsible("option", "expanded", $parentExp$$), $self$$164$$.$_duringSetExpandedOption$ = !1);
        });
      }
      this.$_updateExpanded$();
    }, getNodeBySubId:function($collapsible$$2_index$$242_locator$$51$$) {
      if (null == $collapsible$$2_index$$242_locator$$51$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$48$$ = $collapsible$$2_index$$242_locator$$51$$.subId;
      $collapsible$$2_index$$242_locator$$51$$ = $collapsible$$2_index$$242_locator$$51$$.index;
      if ("number" !== typeof $collapsible$$2_index$$242_locator$$51$$ || 0 > $collapsible$$2_index$$242_locator$$51$$ || $collapsible$$2_index$$242_locator$$51$$ >= this.$collapsibles$.length) {
        return null;
      }
      $collapsible$$2_index$$242_locator$$51$$ = this.$collapsibles$[$collapsible$$2_index$$242_locator$$51$$];
      switch($subId$$48$$) {
        case "oj-accordion-content":
          $subId$$48$$ = "oj-collapsible-content";
          break;
        case "oj-accordion-header":
          $subId$$48$$ = "oj-collapsible-header";
          break;
        case "oj-accordion-header-icon":
          $subId$$48$$ = "oj-collapsible-header-icon";
          break;
        case "oj-accordion-collapsible":
          return $collapsible$$2_index$$242_locator$$51$$;
        default:
          return null;
      }
      return $$$$41$$($collapsible$$2_index$$242_locator$$51$$).ojCollapsible("getNodeBySubId", {subId:$subId$$48$$});
    }});
  })();
});
