/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$58$$, $$$$53$$) {
  (function() {
    var $_TAIL_STYLES$$ = "oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "), $_TAIL_ALIGN_RULES$$ = {"right-top":"oj-right oj-top", "right-middle":"oj-right oj-middle", "right-bottom":"oj-right oj-bottom", "left-top":"oj-left oj-top", "left-middle":"oj-left oj-middle", "left-bottom":"oj-left oj-bottom", "center-top":"oj-center oj-top", "center-middle":"oj-center oj-bottom", "center-bottom":"oj-center oj-bottom"};
    $oj$$58$$.$__registerWidget$("oj.ojPopup", $$$$53$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{autoDismiss:"focusLoss", chrome:"default", initialFocus:"none", position:{my:"start top", at:"start bottom", of:"", collision:"flip"}, tail:"none", beforeOpen:null, open:null, beforeClose:null, close:null, focus:null}, _ComponentCreate:function() {
      this._super();
      var $rootElement$$4$$ = $$$$53$$("\x3cdiv\x3e");
      this.$_rootElement$ = $rootElement$$4$$.hide().addClass("oj-popup").attr("aria-hidden", "true");
      $rootElement$$4$$.addClass("oj-component");
      var $content$$25$$ = $$$$53$$("\x3cdiv\x3e").addClass("oj-popup-content");
      $content$$25$$.attr("role", "presentation");
      $content$$25$$.appendTo($rootElement$$4$$);
      this.element.after($rootElement$$4$$);
      this.element.appendTo($content$$25$$);
      this.element.show();
      this.$_createTail$();
      this.$_setChrome$();
      this.$_usingCallback$ = $$$$53$$.proxy(this.$_usingHandler$, this);
    }, _destroy:function() {
      this.isOpen() && this.$_closeImplicitly$();
      this.$_destroyTail$();
      delete this.$_usingCallback$;
      delete this.$_popupServiceEvents$;
      $oj$$58$$.$DomUtils$.unwrap(this.element, this.$_rootElement$);
      this.element.hide();
      var $closeDelayTimer$$2$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$2$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$2$$));
      this.$_destroyVoiceOverAssist$();
      this._super();
    }, widget:function() {
      return this.$_rootElement$;
    }, open:function($launcher$$15$$, $position$$42$$) {
      if (this.isOpen() && (this.close(), this.isOpen())) {
        return;
      }
      this.$_setLauncher$($launcher$$15$$);
      var $rootElement$$5$$ = this.$_rootElement$;
      $launcher$$15$$ = this.$_launcher$;
      $oj$$58$$.$Assert$.$assertPrototype$($rootElement$$5$$, jQuery);
      $oj$$58$$.$Assert$.$assertPrototype$($launcher$$15$$, jQuery);
      $oj$$58$$.$StringUtils$.$isEmptyOrUndefined$($rootElement$$5$$.attr("id")) && $rootElement$$5$$.attr("id", this.$_getSubId$("wrapper"));
      if (!1 !== this._trigger("beforeOpen")) {
        this.$_setPosition$($position$$42$$);
        var $options$$385_psOptions$$7_tailDecoration$$ = this.options;
        this.$_setAutoDismiss$($options$$385_psOptions$$7_tailDecoration$$.autoDismiss);
        this.$_addDescribedBy$();
        $rootElement$$5$$.attr("role", "tooltip");
        $position$$42$$ = $options$$385_psOptions$$7_tailDecoration$$.position;
        var $isRtl$$4_layerClass$$3$$ = "rtl" === this.$_GetReadingDirection$();
        $position$$42$$ = $oj$$58$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$42$$, $isRtl$$4_layerClass$$3$$);
        $isRtl$$4_layerClass$$3$$ = "oj-popup-layer";
        $options$$385_psOptions$$7_tailDecoration$$ = $options$$385_psOptions$$7_tailDecoration$$.tail;
        "none" !== $options$$385_psOptions$$7_tailDecoration$$ && ($isRtl$$4_layerClass$$3$$ += " " + ["oj-popup-tail", $options$$385_psOptions$$7_tailDecoration$$].join("-"));
        $options$$385_psOptions$$7_tailDecoration$$ = {};
        $options$$385_psOptions$$7_tailDecoration$$[$oj$$58$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$5$$;
        $options$$385_psOptions$$7_tailDecoration$$[$oj$$58$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$15$$;
        $options$$385_psOptions$$7_tailDecoration$$[$oj$$58$$.$PopupService$.$OPTION$.$POSITION$] = $position$$42$$;
        $options$$385_psOptions$$7_tailDecoration$$[$oj$$58$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
        $options$$385_psOptions$$7_tailDecoration$$[$oj$$58$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = $isRtl$$4_layerClass$$3$$;
        $oj$$58$$.$PopupService$.$getInstance$().open($options$$385_psOptions$$7_tailDecoration$$);
        this._trigger("open");
        this.$_intialFocus$();
        this.$_initVoiceOverAssist$();
        this._on($rootElement$$5$$, {keydown:this.$_keyHandler$, keyup:this.$_keyHandler$});
        $launcher$$15$$ && 0 < $launcher$$15$$.length && this._on($launcher$$15$$, {keydown:this.$_keyHandler$, keyup:this.$_keyHandler$});
      }
    }, close:function() {
      if (this.isOpen() && (!1 !== this._trigger("beforeClose") || this.$_ignoreBeforeCloseResultant$)) {
        this.$_restoreFocus$();
        var $launcher$$16_psOptions$$8$$ = this.$_launcher$, $position$$43_rootElement$$6$$ = this.$_rootElement$;
        $oj$$58$$.$Assert$.$assertPrototype$($position$$43_rootElement$$6$$, jQuery);
        $oj$$58$$.$Assert$.$assertPrototype$($launcher$$16_psOptions$$8$$, jQuery);
        this._off($position$$43_rootElement$$6$$, "keydown keyup");
        $launcher$$16_psOptions$$8$$ && 0 < $launcher$$16_psOptions$$8$$.length && this._off($launcher$$16_psOptions$$8$$, "keydown keyup");
        this.$_destroyVoiceOverAssist$();
        $launcher$$16_psOptions$$8$$ = {};
        $launcher$$16_psOptions$$8$$[$oj$$58$$.$PopupService$.$OPTION$.$POPUP$] = $position$$43_rootElement$$6$$;
        $oj$$58$$.$PopupService$.$getInstance$().close($launcher$$16_psOptions$$8$$);
        this.$_removeDescribedBy$();
        this.$_setAutoDismiss$();
        delete this.$_launcher$;
        $position$$43_rootElement$$6$$ = this.options.position;
        $position$$43_rootElement$$6$$._ofo && (delete $position$$43_rootElement$$6$$._ofo, delete $position$$43_rootElement$$6$$.of);
        this._trigger("close");
      }
    }, isOpen:function() {
      return this.$_rootElement$.is(":visible");
    }, refresh:function() {
      this._super();
      this.isOpen() && this.$_reposition$();
      var $rootElement$$7$$ = this.$_rootElement$;
      $oj$$58$$.$Assert$.$assertPrototype$($rootElement$$7$$, jQuery);
      $oj$$58$$.$PopupService$.$getInstance$().$triggerOnDescendents$($rootElement$$7$$, $oj$$58$$.$PopupService$.$EVENT$.$POPUP_REFRESH$);
    }, _setOption:function($key$$176$$, $value$$276$$) {
      var $options$$386$$ = this.options;
      switch($key$$176$$) {
        case "tail":
          $value$$276$$ !== $options$$386$$.tail && this.$_setTail$($value$$276$$);
          break;
        case "chrome":
          $value$$276$$ !== $options$$386$$.chrome && this.$_setChrome$($value$$276$$);
          break;
        case "position":
          this.$_setPosition$($value$$276$$);
          this.refresh();
          return;
        case "autoDismiss":
          this.isOpen() && $value$$276$$ !== $options$$386$$.autoDismiss && this.$_setAutoDismiss$($value$$276$$);
      }
      this._superApply(arguments);
    }, $_getRootStyle$:function() {
      return "oj-popup";
    }, $_setTail$:function($tail$$) {
      this.$_destroyTail$();
      this.$_createTail$($tail$$);
      this.$_reposition$();
    }, $_createTail$:function($tail$$1_tailDecoration$$1_tailStyle$$) {
      $tail$$1_tailDecoration$$1_tailStyle$$ = $tail$$1_tailDecoration$$1_tailStyle$$ ? $tail$$1_tailDecoration$$1_tailStyle$$ : this.options.tail;
      if ("none" !== $tail$$1_tailDecoration$$1_tailStyle$$) {
        $tail$$1_tailDecoration$$1_tailStyle$$ = ["oj-popup-tail", $tail$$1_tailDecoration$$1_tailStyle$$].join("-");
        var $options$$387_tailDom$$ = $$$$53$$("\x3cdiv\x3e").hide();
        $options$$387_tailDom$$.addClass("oj-popup-tail").addClass($tail$$1_tailDecoration$$1_tailStyle$$);
        $options$$387_tailDom$$.attr("role", "presentation");
        this.$_tailId$ = "#" + $options$$387_tailDom$$.attr("id", this.$_getSubId$("tail")).attr("id");
        var $rootElement$$8$$ = this.$_rootElement$;
        $oj$$58$$.$Assert$.$assertPrototype$($rootElement$$8$$, jQuery);
        $options$$387_tailDom$$.appendTo($rootElement$$8$$);
        $rootElement$$8$$.addClass($tail$$1_tailDecoration$$1_tailStyle$$);
        this.isOpen() && ($options$$387_tailDom$$ = {}, $options$$387_tailDom$$[$oj$$58$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$8$$, $options$$387_tailDom$$[$oj$$58$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-popup-layer " + $tail$$1_tailDecoration$$1_tailStyle$$, $oj$$58$$.$PopupService$.$getInstance$().$changeOptions$($options$$387_tailDom$$));
      }
    }, $_getTail$:function() {
      var $tailId$$ = this.$_tailId$;
      return $tailId$$ ? $$$$53$$($tailId$$) : null;
    }, $_destroyTail$:function() {
      var $rootElement$$9_tail$$2$$ = this.$_getTail$();
      $rootElement$$9_tail$$2$$ && $rootElement$$9_tail$$2$$.remove();
      delete this.$_tailId$;
      var $options$$388_tailStyle$$1$$ = ["oj-popup-tail", this.options.tail].join("-"), $rootElement$$9_tail$$2$$ = this.$_rootElement$;
      $oj$$58$$.$Assert$.$assertPrototype$($rootElement$$9_tail$$2$$, jQuery);
      $rootElement$$9_tail$$2$$.removeClass($options$$388_tailStyle$$1$$);
      this.isOpen() && ($options$$388_tailStyle$$1$$ = {}, $options$$388_tailStyle$$1$$[$oj$$58$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$9_tail$$2$$, $options$$388_tailStyle$$1$$[$oj$$58$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-popup-layer", $oj$$58$$.$PopupService$.$getInstance$().$changeOptions$($options$$388_tailStyle$$1$$));
    }, $_setChrome$:function($chrome$$1_chromeDecoration$$) {
      $chrome$$1_chromeDecoration$$ = $chrome$$1_chromeDecoration$$ ? $chrome$$1_chromeDecoration$$ : this.options.chrome;
      var $rootElement$$10$$ = this.$_rootElement$;
      $oj$$58$$.$Assert$.$assertPrototype$($rootElement$$10$$, jQuery);
      "default" === $chrome$$1_chromeDecoration$$ && $rootElement$$10$$.hasClass("oj-popup-no-chrome") ? $rootElement$$10$$.removeClass("oj-popup-no-chrome") : "none" !== $chrome$$1_chromeDecoration$$ || $rootElement$$10$$.hasClass("oj-popup-no-chrome") || $rootElement$$10$$.addClass("oj-popup-no-chrome");
    }, $_setLauncher$:function($launcher$$17$$) {
      $launcher$$17$$ ? "string" === $$$$53$$.type($launcher$$17$$) ? $launcher$$17$$ = $$$$53$$($launcher$$17$$) : 1 === $launcher$$17$$.nodeType && ($launcher$$17$$ = $$$$53$$($launcher$$17$$)) : $launcher$$17$$ = $$$$53$$(document.activeElement);
      if ($launcher$$17$$ instanceof jQuery && 1 < $launcher$$17$$.length) {
        var $rootElement$$11$$ = this.$_rootElement$;
        $oj$$58$$.$Assert$.$assertPrototype$($rootElement$$11$$, jQuery);
        for (var $i$$446$$ = 0;$i$$446$$ < $launcher$$17$$.length;$i$$446$$++) {
          var $target$$95$$ = $launcher$$17$$[0];
          if (!$oj$$58$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$11$$[0], $target$$95$$)) {
            $launcher$$17$$ = $$$$53$$($target$$95$$);
            break;
          }
        }
      } else {
        if (!($launcher$$17$$ instanceof jQuery) || $launcher$$17$$ instanceof jQuery && 0 === $launcher$$17$$.length) {
          $launcher$$17$$ = $$$$53$$(document.activeElement);
        }
      }
      $oj$$58$$.$Assert$.$assertPrototype$($launcher$$17$$, jQuery);
      this.$_launcher$ = $launcher$$17$$;
    }, $_setPosition$:function($position$$44$$) {
      var $launcher$$18_options$$389_usingCallback$$1$$ = this.options;
      $position$$44$$ && ($launcher$$18_options$$389_usingCallback$$1$$.position = $$$$53$$.extend($launcher$$18_options$$389_usingCallback$$1$$[$position$$44$$], $position$$44$$));
      $position$$44$$ = $launcher$$18_options$$389_usingCallback$$1$$.position;
      $launcher$$18_options$$389_usingCallback$$1$$ = this.$_usingCallback$;
      $oj$$58$$.$Assert$.$assertFunction$($launcher$$18_options$$389_usingCallback$$1$$);
      $$$$53$$.isFunction($position$$44$$.using) && $position$$44$$.using !== $launcher$$18_options$$389_usingCallback$$1$$ && ($position$$44$$.origUsing = $position$$44$$.using);
      $position$$44$$.using = $launcher$$18_options$$389_usingCallback$$1$$;
      $launcher$$18_options$$389_usingCallback$$1$$ = this.$_launcher$;
      $oj$$58$$.$Assert$.$assertPrototype$($launcher$$18_options$$389_usingCallback$$1$$, jQuery);
      $position$$44$$.of || ($position$$44$$.of = $launcher$$18_options$$389_usingCallback$$1$$, $position$$44$$._ofo = !0);
    }, $_usingHandler$:function($pos$$16$$, $props$$25$$) {
      var $leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $props$$25$$.element.element;
      $oj$$58$$.$Assert$.$assertPrototype$($leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$, jQuery);
      var $origUsing$$1_tail$$3$$ = this.$_getTail$();
      if ($origUsing$$1_tail$$3$$) {
        $origUsing$$1_tail$$3$$.hide();
        for (var $i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = 0;$i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ < $_TAIL_STYLES$$.length;$i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$++) {
          $origUsing$$1_tail$$3$$.removeClass($_TAIL_STYLES$$[$i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$]), $leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$.removeClass($_TAIL_STYLES$$[$i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$]);
        }
        $origUsing$$1_tail$$3$$.removeAttr("style");
        if ($props$$25$$.target && 0 === $props$$25$$.target.height && 0 === $props$$25$$.target.width && ($i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = "rtl" === this.$_GetReadingDirection$(), $i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $oj$$58$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$).my, !$oj$$58$$.$StringUtils$.$isEmptyOrUndefined$($i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$))) {
          var $i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$.split(" "), $suggestedHrule$$ = $i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[0], $suggestedVrule$$ = "middle";
          1 < $i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$.length && ($suggestedVrule$$ = "center" === $i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[1] ? "middle" : $i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[1]);
          $props$$25$$.horizontal = $suggestedHrule$$;
          $props$$25$$.vertical = $suggestedVrule$$;
        }
        $i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $_TAIL_ALIGN_RULES$$[[$props$$25$$.horizontal, $props$$25$$.vertical].join("-")];
        $oj$$58$$.$Assert$.$assertString$($i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
        $origUsing$$1_tail$$3$$.addClass($i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
        $leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$.addClass($i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
        $origUsing$$1_tail$$3$$.show();
        "left" === $props$$25$$.horizontal || "right" === $props$$25$$.horizontal ? ($i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = ($origUsing$$1_tail$$3$$.outerWidth() - 1) * ("left" === $props$$25$$.horizontal ? 1 : -1), $pos$$16$$.left += $i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$) : "center" === $props$$25$$.horizontal && ($i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = ($origUsing$$1_tail$$3$$.outerHeight() - 1) * 
        ("top" === $props$$25$$.vertical ? 1 : -1), $pos$$16$$.top += $i$$447_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
        $leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$.css($pos$$16$$);
        "center" === $props$$25$$.horizontal ? ($leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$.width(), $leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$ / 2 - $origUsing$$1_tail$$3$$.outerWidth() / 2) / $leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$ * 100), $origUsing$$1_tail$$3$$.css({left:$leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$ + 
        "%"})) : "middle" === $props$$25$$.vertical && ($leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$.height(), $leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$ / 2 - $origUsing$$1_tail$$3$$.outerHeight() / 2) / $leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$ * 100), $origUsing$$1_tail$$3$$.css({top:$leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$ + 
        "%"}));
      } else {
        $leftPercent_rootElement$$12_rootHeight_rootWidth_topPercent$$.css($pos$$16$$);
      }
      ($origUsing$$1_tail$$3$$ = this.options.position.origUsing) && $origUsing$$1_tail$$3$$($pos$$16$$, $props$$25$$);
    }, $_reposition$:function() {
      var $rootElement$$13$$ = this.$_rootElement$;
      $oj$$58$$.$Assert$.$assertPrototype$($rootElement$$13$$, jQuery);
      var $position$$46$$ = this.options.position;
      $oj$$58$$.$Assert$.$assertObject$($position$$46$$);
      var $isRtl$$6$$ = "rtl" === this.$_GetReadingDirection$();
      $rootElement$$13$$.position($oj$$58$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$46$$, $isRtl$$6$$));
    }, $_intialFocus$:function($first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$) {
      var $options$$391$$ = this.options;
      if ($first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$ || "none" !== $options$$391$$.initialFocus) {
        if ($first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$ || "firstFocusable" === $options$$391$$.initialFocus) {
          $first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$ = this.element.find(":focusable"), 0 < $first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$.length ? ($first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$ = $first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$[0], $oj$$58$$.$Assert$.$assertDomElement$($first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$), $$$$53$$($first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$).focus()) : ($first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$ = 
          this.$_rootElement$, $oj$$58$$.$Assert$.$assertPrototype$($first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$, jQuery), $first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$.attr("tabindex", "-1"), $first$$11_nodes$$8_rootElement$$14_skipOptionCheck$$.focus()), this._trigger("focus");
        }
      }
    }, $_isFocusInPopup$:function($activeElement$$2$$, $includeChildren$$) {
      $activeElement$$2$$ || ($activeElement$$2$$ = document.activeElement);
      $oj$$58$$.$Assert$.$assertDomElement$($activeElement$$2$$);
      if (!$activeElement$$2$$) {
        return!1;
      }
      var $rootElement$$15$$ = this.$_rootElement$;
      $oj$$58$$.$Assert$.$assertPrototype$($rootElement$$15$$, jQuery);
      $includeChildren$$ && ($rootElement$$15$$ = $rootElement$$15$$.parent());
      return $oj$$58$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$15$$[0], $activeElement$$2$$);
    }, $_isFocusInLauncher$:function($activeElement$$3$$) {
      $activeElement$$3$$ || ($activeElement$$3$$ = document.activeElement);
      $oj$$58$$.$Assert$.$assertDomElement$($activeElement$$3$$);
      var $launcher$$19$$ = this.$_launcher$;
      $oj$$58$$.$Assert$.$assertPrototype$($launcher$$19$$, jQuery);
      return $oj$$58$$.$DomUtils$.$isAncestorOrSelf$($launcher$$19$$[0], $activeElement$$3$$);
    }, $_restoreFocus$:function() {
      if (this.$_ignoreRestoreFocus$) {
        delete this.$_ignoreRestoreFocus$;
      } else {
        if (this.$_isFocusInPopup$(null, !0)) {
          var $launcher$$20$$ = this.$_launcher$;
          $oj$$58$$.$Assert$.$assertPrototype$($launcher$$20$$, jQuery);
          $launcher$$20$$.focus();
        }
      }
    }, $_keyHandler$:function($event$$573_launcher$$21$$) {
      if (!$event$$573_launcher$$21$$.isDefaultPrevented()) {
        var $eventType$$56_firstNode$$ = $event$$573_launcher$$21$$.type, $target$$96$$ = $event$$573_launcher$$21$$.target;
        $oj$$58$$.$Assert$.$assertDomElement$($target$$96$$);
        if ("keyup" === $eventType$$56_firstNode$$ && $event$$573_launcher$$21$$.keyCode === $$$$53$$.ui.keyCode.ESCAPE && (this.$_isFocusInPopup$($target$$96$$) || this.$_isFocusInLauncher$($target$$96$$))) {
          $event$$573_launcher$$21$$.preventDefault(), this.close();
        } else {
          if ("keydown" === $eventType$$56_firstNode$$ && 117 === $event$$573_launcher$$21$$.keyCode) {
            this.$_isFocusInPopup$($target$$96$$) ? ($event$$573_launcher$$21$$.preventDefault(), $event$$573_launcher$$21$$ = this.$_launcher$, $oj$$58$$.$Assert$.$assertPrototype$($event$$573_launcher$$21$$, jQuery), $event$$573_launcher$$21$$.focus()) : this.$_isFocusInLauncher$($target$$96$$) && ($event$$573_launcher$$21$$.preventDefault(), this.$_intialFocus$(!0));
          } else {
            if ("keydown" === $eventType$$56_firstNode$$ && $event$$573_launcher$$21$$.keyCode === $$$$53$$.ui.keyCode.TAB && this.$_isFocusInPopup$($target$$96$$)) {
              var $lastNode$$1_nodes$$9$$ = this.element.find(":tabbable");
              0 < $lastNode$$1_nodes$$9$$.length ? ($eventType$$56_firstNode$$ = $lastNode$$1_nodes$$9$$[0], $oj$$58$$.$Assert$.$assertDomElement$($eventType$$56_firstNode$$), $lastNode$$1_nodes$$9$$ = $lastNode$$1_nodes$$9$$[$lastNode$$1_nodes$$9$$.length - 1], $oj$$58$$.$Assert$.$assertDomElement$($lastNode$$1_nodes$$9$$), $eventType$$56_firstNode$$ === $target$$96$$ && $event$$573_launcher$$21$$.shiftKey ? ($event$$573_launcher$$21$$.preventDefault(), $$$$53$$($lastNode$$1_nodes$$9$$).focus()) : 
              $lastNode$$1_nodes$$9$$ !== $target$$96$$ || $event$$573_launcher$$21$$.shiftKey || ($event$$573_launcher$$21$$.preventDefault(), $$$$53$$($eventType$$56_firstNode$$).focus())) : ($event$$573_launcher$$21$$.preventDefault(), $event$$573_launcher$$21$$ = this.$_launcher$, $oj$$58$$.$Assert$.$assertPrototype$($event$$573_launcher$$21$$, jQuery), $event$$573_launcher$$21$$.focus());
            }
          }
        }
      }
    }, $_setAutoDismiss$:function($autoDismiss_rootElement$$16$$) {
      var $focusLossCallback_options$$392$$ = this.$_focusLossCallback$, $events$$16$$ = this.$_getPopupServiceEvents$();
      $focusLossCallback_options$$392$$ && (delete $events$$16$$[$oj$$58$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$], delete this.$_focusLossCallback$);
      "focusLoss" === $autoDismiss_rootElement$$16$$ && ($focusLossCallback_options$$392$$ = this.$_focusLossCallback$ = $$$$53$$.proxy(this.$_dismissalHandler$, this), $events$$16$$[$oj$$58$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $focusLossCallback_options$$392$$);
      this.isOpen() && ($autoDismiss_rootElement$$16$$ = this.$_rootElement$, $oj$$58$$.$Assert$.$assertPrototype$($autoDismiss_rootElement$$16$$, jQuery), $focusLossCallback_options$$392$$ = {}, $focusLossCallback_options$$392$$[$oj$$58$$.$PopupService$.$OPTION$.$POPUP$] = $autoDismiss_rootElement$$16$$, $focusLossCallback_options$$392$$[$oj$$58$$.$PopupService$.$OPTION$.$EVENTS$] = $events$$16$$, $oj$$58$$.$PopupService$.$getInstance$().$changeOptions$($focusLossCallback_options$$392$$));
    }, $_dismissalHandler$:function($event$$574$$) {
      var $launcher$$22$$ = this.$_launcher$, $layer$$22_rootElement$$17$$ = this.$_rootElement$;
      $oj$$58$$.$Assert$.$assertPrototype$($launcher$$22$$, jQuery);
      $oj$$58$$.$Assert$.$assertPrototype$($layer$$22_rootElement$$17$$, jQuery);
      var $layer$$22_rootElement$$17$$ = $layer$$22_rootElement$$17$$.parent(), $target$$97$$ = $event$$574$$.target;
      $oj$$58$$.$Assert$.$assertDomElement$($target$$97$$);
      var $focusSkipLink_link$$4$$ = this.$_focusSkipLink$;
      if ($focusSkipLink_link$$4$$ && ($focusSkipLink_link$$4$$ = $focusSkipLink_link$$4$$.getLink()) && $oj$$58$$.$DomUtils$.$isAncestorOrSelf$($focusSkipLink_link$$4$$[0], $target$$97$$)) {
        return;
      }
      if (!$oj$$58$$.$DomUtils$.$isAncestorOrSelf$($launcher$$22$$[0], $target$$97$$) && !$oj$$58$$.$DomUtils$.$isAncestorOrSelf$($layer$$22_rootElement$$17$$[0], $target$$97$$)) {
        if ($$$$53$$($target$$97$$).is(":focusable")) {
          if ("mousedown" === $event$$574$$.type || "touchstart" === $event$$574$$.type) {
            return;
          }
          this.$_ignoreRestoreFocus$ = !0;
        }
        this.close();
      }
    }, $_addDescribedBy$:function() {
      var $launcher$$23$$ = this.$_launcher$, $popupId$$1_rootElement$$18$$ = this.$_rootElement$;
      $oj$$58$$.$Assert$.$assertPrototype$($launcher$$23$$, jQuery);
      $oj$$58$$.$Assert$.$assertPrototype$($popupId$$1_rootElement$$18$$, jQuery);
      var $popupId$$1_rootElement$$18$$ = $popupId$$1_rootElement$$18$$.attr("id"), $describedby$$2_tokens$$5$$ = $launcher$$23$$.attr("aria-describedby"), $describedby$$2_tokens$$5$$ = $describedby$$2_tokens$$5$$ ? $describedby$$2_tokens$$5$$.split(/\s+/) : [];
      $describedby$$2_tokens$$5$$.push($popupId$$1_rootElement$$18$$);
      $describedby$$2_tokens$$5$$ = $$$$53$$.trim($describedby$$2_tokens$$5$$.join(" "));
      $launcher$$23$$.attr("aria-describedby", $describedby$$2_tokens$$5$$);
    }, $_removeDescribedBy$:function() {
      var $launcher$$24$$ = this.$_launcher$, $index$$289_popupId$$2_rootElement$$19$$ = this.$_rootElement$;
      $oj$$58$$.$Assert$.$assertPrototype$($launcher$$24$$, jQuery);
      $oj$$58$$.$Assert$.$assertPrototype$($index$$289_popupId$$2_rootElement$$19$$, jQuery);
      var $index$$289_popupId$$2_rootElement$$19$$ = $index$$289_popupId$$2_rootElement$$19$$.attr("id"), $describedby$$3_tokens$$6$$ = $launcher$$24$$.attr("aria-describedby"), $describedby$$3_tokens$$6$$ = $describedby$$3_tokens$$6$$ ? $describedby$$3_tokens$$6$$.split(/\s+/) : [], $index$$289_popupId$$2_rootElement$$19$$ = $$$$53$$.inArray($index$$289_popupId$$2_rootElement$$19$$, $describedby$$3_tokens$$6$$);
      -1 !== $index$$289_popupId$$2_rootElement$$19$$ && $describedby$$3_tokens$$6$$.splice($index$$289_popupId$$2_rootElement$$19$$, 1);
      ($describedby$$3_tokens$$6$$ = $$$$53$$.trim($describedby$$3_tokens$$6$$.join(" "))) ? $launcher$$24$$.attr("aria-describedby", $describedby$$3_tokens$$6$$) : $launcher$$24$$.removeAttr("aria-describedby");
    }, $_initVoiceOverAssist$:function() {
      var $callback$$122_isIOSVOSupported$$ = $oj$$58$$.$AgentUtils$.$getAgentInfo$().os === $oj$$58$$.$AgentUtils$.$OS$.$IOS$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_liveRegion$;
      $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ || ($closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_liveRegion$ = new $oj$$58$$.$PopupLiveRegion$);
      var $message$$37$$;
      $message$$37$$ = $callback$$122_isIOSVOSupported$$ ? this.$getTranslatedString$("none" === this.options.initialFocus ? "ariaLiveRegionInitialFocusNoneTouch" : "ariaLiveRegionInitialFocusFirstFocusableTouch") : this.$getTranslatedString$("none" === this.options.initialFocus ? "ariaLiveRegionInitialFocusNone" : "ariaLiveRegionInitialFocusFirstFocusable");
      $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$.$announce$($message$$37$$);
      if ($callback$$122_isIOSVOSupported$$) {
        if (!this.$_focusSkipLink$) {
          var $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_getSubId$("focusSkipLink"), $element$$120_launcher$$25$$ = this.$_launcher$, $callback$$122_isIOSVOSupported$$ = $$$$53$$.proxy(this.$_intialFocus$, this, !0);
          $message$$37$$ = this.$getTranslatedString$("ariaFocusSkipLink");
          this.$_focusSkipLink$ = new $oj$$58$$.$PopupSkipLink$($element$$120_launcher$$25$$, $message$$37$$, $callback$$122_isIOSVOSupported$$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$);
        }
        this.$_closeSkipLink$ || ($closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_getSubId$("closeSkipLink"), $element$$120_launcher$$25$$ = this.element, $callback$$122_isIOSVOSupported$$ = $$$$53$$.proxy(this.$_closeImplicitly$, this), $message$$37$$ = this.$getTranslatedString$("ariaCloseSkipLink"), this.$_closeSkipLink$ = new $oj$$58$$.$PopupSkipLink$($element$$120_launcher$$25$$, $message$$37$$, $callback$$122_isIOSVOSupported$$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$));
      }
    }, $_destroyVoiceOverAssist$:function() {
      var $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ = this.$_liveRegion$;
      $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ && ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$.destroy(), delete this.$_liveRegion$);
      if ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ = this.$_focusSkipLink$) {
        $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$.destroy(), delete this.$_focusSkipLink$;
      }
      if ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ = this.$_closeSkipLink$) {
        $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$.destroy(), delete this.$_closeSkipLink$;
      }
    }, $_getSubId$:function($sub$$1$$) {
      var $id$$64$$ = this.element.attr("id");
      $oj$$58$$.$StringUtils$.$isEmptyOrUndefined$($id$$64$$) && ($id$$64$$ = this.uuid);
      return[$id$$64$$, $sub$$1$$].join("_");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$17$$ = this.$_popupServiceEvents$ = {};
        $events$$17$$[$oj$$58$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$53$$.proxy(this.$_closeImplicitly$, this);
        $events$$17$$[$oj$$58$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$53$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$17$$[$oj$$58$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$53$$.proxy(this.refresh, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeImplicitly$:function() {
      this.$_ignoreBeforeCloseResultant$ = !0;
      this.close();
      delete this.$_ignoreBeforeCloseResultant$;
    }});
  })();
});
