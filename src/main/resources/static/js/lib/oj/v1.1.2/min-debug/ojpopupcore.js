/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "jqueryui-amd/position"], function($oj$$30$$, $$$$29$$) {
  $oj$$30$$.$PositionUtils$ = {};
  $oj$$30$$.$PositionUtils$.$normalizeHorizontalAlignment$ = function $$oj$$30$$$$PositionUtils$$$normalizeHorizontalAlignment$$($position$$23$$, $isRtl$$2$$) {
    $oj$$30$$.$Assert$.$assertObject$($position$$23$$, "position");
    for (var $target$$90$$ = $$$$29$$.extend({}, $position$$23$$), $i$$356$$ = 0;$i$$356$$ < $oj$$30$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$.length;$i$$356$$++) {
      var $propName$$4$$ = $oj$$30$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$[$i$$356$$], $align$$ = $target$$90$$[$propName$$4$$];
      $align$$ && ($target$$90$$[$propName$$4$$] = $align$$.replace("start", $isRtl$$2$$ ? "right" : "left").replace("end", $isRtl$$2$$ ? "left" : "right").replace("\x3c", $isRtl$$2$$ ? "+" : "-").replace("\x3e", $isRtl$$2$$ ? "-" : "+"));
    }
    return $target$$90$$;
  };
  $oj$$30$$.$PositionUtils$.$normalizePositionOf$ = function $$oj$$30$$$$PositionUtils$$$normalizePositionOf$$($of$$, $launcher$$9$$, $event$$398$$) {
    return "event" === $of$$ ? $event$$398$$ : null == $of$$ || "launcher" === $of$$ ? $launcher$$9$$ : $of$$;
  };
  $oj$$30$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$ = ["my", "at"];
  $oj$$30$$.$PositionUtils$.$isAligningPositionClipped$ = function $$oj$$30$$$$PositionUtils$$$isAligningPositionClipped$$() {
    return!1;
  };
  $$$$29$$.ui.position.flipcenter = {left:function $$$$$29$$$ui$position$flipcenter$left$($position$$24$$, $data$$147$$) {
    var $posLeft$$ = $position$$24$$.left;
    $$$$29$$.ui.position.flip.left.call(this, $position$$24$$, $data$$147$$);
    var $overRight_within$$ = $data$$147$$.within, $dirFactor_withinOffset$$ = $overRight_within$$.isWindow ? $overRight_within$$.scrollLeft : $overRight_within$$.offset.left, $collisionPosLeft$$ = $position$$24$$.left - $data$$147$$.collisionPosition.marginLeft, $overRight_within$$ = $collisionPosLeft$$ + $data$$147$$.collisionWidth - $overRight_within$$.width - $dirFactor_withinOffset$$;
    if (0 < $dirFactor_withinOffset$$ - $collisionPosLeft$$ || 0 < $overRight_within$$) {
      "right" === $data$$147$$.at[0] ? $posLeft$$ -= $data$$147$$.targetWidth / 2 : "left" === $data$$147$$.at[0] && ($posLeft$$ += $data$$147$$.targetWidth / 2), $dirFactor_withinOffset$$ = "rtl" === $oj$$30$$.$DomUtils$.$getReadingDirection$() ? -1 : 1, $posLeft$$ -= $data$$147$$.elemWidth / 2 * $dirFactor_withinOffset$$, $position$$24$$.left = $posLeft$$;
    }
  }, top:function $$$$$29$$$ui$position$flipcenter$top$($position$$25$$, $data$$148$$) {
    var $posTop$$ = $position$$25$$.top;
    $$$$29$$.ui.position.flip.top.call(this, $position$$25$$, $data$$148$$);
    var $within$$1_withinOffset$$1$$ = $data$$148$$.within, $within$$1_withinOffset$$1$$ = $within$$1_withinOffset$$1$$.isWindow ? $within$$1_withinOffset$$1$$.scrollTop : $within$$1_withinOffset$$1$$.offset.top, $collisionPosTop$$ = $position$$25$$.top - $data$$148$$.collisionPosition.marginTop, $overBottom$$ = $collisionPosTop$$ + $data$$148$$.collisionHeight - $data$$148$$.within.height - $within$$1_withinOffset$$1$$;
    if (0 < $within$$1_withinOffset$$1$$ - $collisionPosTop$$ || 0 < $overBottom$$) {
      "top" === $data$$148$$.at[1] ? $posTop$$ += $data$$148$$.targetHeight / 2 : "bottom" === $data$$148$$.at[1] && ($posTop$$ -= $data$$148$$.targetHeight / 2), $posTop$$ += $data$$148$$.elemHeight / 2, $position$$25$$.top = $posTop$$;
    }
  }};
  $oj$$30$$.$PopupService$ = function $$oj$$30$$$$PopupService$$() {
    this.Init();
  };
  $oj$$30$$.$Object$.$createSubclass$($oj$$30$$.$PopupService$, $oj$$30$$.$Object$, "oj.PopupService");
  $oj$$30$$.$PopupService$.prototype.Init = function $$oj$$30$$$$PopupService$$$Init$() {
    $oj$$30$$.$PopupService$.$superclass$.Init.call(this);
  };
  $oj$$30$$.$PopupService$.$getInstance$ = function $$oj$$30$$$$PopupService$$$getInstance$$() {
    $oj$$30$$.$PopupService$.$_popupService$ || ($oj$$30$$.$PopupService$.$_popupService$ = new $oj$$30$$.$PopupServiceImpl$);
    return $oj$$30$$.$PopupService$.$_popupService$;
  };
  $oj$$30$$.$PopupService$.prototype.open = function $$oj$$30$$$$PopupService$$$open$() {
    $oj$$30$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$30$$.$PopupService$.prototype.close = function $$oj$$30$$$$PopupService$$$close$() {
    $oj$$30$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$30$$.$PopupService$.prototype.$changeOptions$ = function $$oj$$30$$$$PopupService$$$$changeOptions$$() {
    $oj$$30$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$30$$.$PopupService$.prototype.$triggerOnDescendents$ = function $$oj$$30$$$$PopupService$$$$triggerOnDescendents$$() {
    $oj$$30$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$30$$.$PopupService$.prototype.destroy = function $$oj$$30$$$$PopupService$$$destroy$() {
    delete $oj$$30$$.$PopupService$.$_popupService$;
  };
  $oj$$30$$.$PopupService$.$MODALITY$ = {NONE:"none", $MODAL$:"modal", $MODELESS$:"modeless"};
  $oj$$30$$.$PopupService$.$EVENT$ = {$POPUP_REMOVE$:"ojPopupRemove", $POPUP_CLOSE$:"ojPopupClose", $POPUP_REFRESH$:"ojPopupRefresh", $POPUP_AUTODISMISS$:"ojPopupAutoDismiss"};
  $oj$$30$$.$PopupService$.$OPTION$ = {$POPUP$:"popup", $EVENTS$:"events", $MODALITY$:"modality", $LAUNCHER$:"launcher", $POSITION$:"position", $LAYER_SELECTORS$:"layerSelectors"};
  $oj$$30$$.$PopupServiceImpl$ = function $$oj$$30$$$$PopupServiceImpl$$() {
    this.Init();
  };
  $oj$$30$$.$Object$.$createSubclass$($oj$$30$$.$PopupServiceImpl$, $oj$$30$$.$PopupService$, "oj.PopupServiceImpl");
  $oj$$30$$.$PopupServiceImpl$.prototype.open = function $$oj$$30$$$$PopupServiceImpl$$$open$($layerClass_options$$348$$) {
    $oj$$30$$.$Assert$.$assertObject$($layerClass_options$$348$$);
    var $popup$$4$$ = $layerClass_options$$348$$[$oj$$30$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$30$$.$Assert$.$assertPrototype$($popup$$4$$, jQuery);
    var $launcher$$10$$ = $layerClass_options$$348$$[$oj$$30$$.$PopupService$.$OPTION$.$LAUNCHER$];
    $oj$$30$$.$Assert$.$assertPrototype$($launcher$$10$$, jQuery);
    var $position$$26$$ = $layerClass_options$$348$$[$oj$$30$$.$PopupService$.$OPTION$.$POSITION$];
    $oj$$30$$.$Assert$.$assertObjectOrNull$($position$$26$$);
    var $events$$3$$ = $layerClass_options$$348$$[$oj$$30$$.$PopupService$.$OPTION$.$EVENTS$];
    $oj$$30$$.$Assert$.$assertObject$($events$$3$$);
    var $modality$$ = $layerClass_options$$348$$[$oj$$30$$.$PopupService$.$OPTION$.$MODALITY$];
    $oj$$30$$.$Assert$.$assertStringOrNull$($modality$$);
    if (!$modality$$ || $oj$$30$$.$PopupService$.$MODALITY$.$MODELESS$ !== $modality$$ && $oj$$30$$.$PopupService$.$MODALITY$.$MODAL$ !== $modality$$) {
      $modality$$ = $oj$$30$$.$PopupService$.$MODALITY$.NONE;
    }
    $layerClass_options$$348$$ = $layerClass_options$$348$$[$oj$$30$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$];
    $oj$$30$$.$Assert$.$assertString$($layerClass_options$$348$$);
    $oj$$30$$.$DomUtils$.$setLogicalParent$($popup$$4$$, $launcher$$10$$);
    $oj$$30$$.$ZOrderUtils$.$addToAncestorLayer$($popup$$4$$, $launcher$$10$$, $events$$3$$, $modality$$, $layerClass_options$$348$$);
    $popup$$4$$.show();
    $popup$$4$$.removeAttr("aria-hidden");
    $position$$26$$ && $popup$$4$$.position($position$$26$$);
    this.$_assertEventSink$();
    $oj$$30$$.Components.$subtreeShown$($popup$$4$$[0]);
  };
  $oj$$30$$.$PopupServiceImpl$.prototype.close = function $$oj$$30$$$$PopupServiceImpl$$$close$($options$$349_popup$$5$$) {
    $oj$$30$$.$Assert$.$assertObject$($options$$349_popup$$5$$);
    $options$$349_popup$$5$$ = $options$$349_popup$$5$$[$oj$$30$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$30$$.$Assert$.$assertPrototype$($options$$349_popup$$5$$, jQuery);
    $oj$$30$$.$ZOrderUtils$.$removeFromAncestorLayer$($options$$349_popup$$5$$);
    $options$$349_popup$$5$$.hide();
    $options$$349_popup$$5$$.attr("aria-hidden", "true");
    $oj$$30$$.$DomUtils$.$setLogicalParent$($options$$349_popup$$5$$, null);
    this.$_assertEventSink$();
    $oj$$30$$.Components.$subtreeHidden$($options$$349_popup$$5$$[0]);
  };
  $oj$$30$$.$PopupServiceImpl$.prototype.$changeOptions$ = function $$oj$$30$$$$PopupServiceImpl$$$$changeOptions$$($layerClass$$1_options$$350$$) {
    $oj$$30$$.$Assert$.$assertObject$($layerClass$$1_options$$350$$);
    var $layer_popup$$6$$ = $layerClass$$1_options$$350$$[$oj$$30$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$30$$.$Assert$.$assertPrototype$($layer_popup$$6$$, jQuery);
    $layer_popup$$6$$ = $oj$$30$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer_popup$$6$$);
    $oj$$30$$.$Assert$.$assertPrototype$($layer_popup$$6$$, jQuery);
    var $events$$4_modality$$1$$ = $layerClass$$1_options$$350$$[$oj$$30$$.$PopupService$.$OPTION$.$EVENTS$];
    $oj$$30$$.$Assert$.$assertObjectOrNull$($events$$4_modality$$1$$);
    $events$$4_modality$$1$$ && $oj$$30$$.$ZOrderUtils$.$applyEvents$($layer_popup$$6$$, $events$$4_modality$$1$$);
    ($events$$4_modality$$1$$ = $layerClass$$1_options$$350$$[$oj$$30$$.$PopupService$.$OPTION$.$MODALITY$]) && $oj$$30$$.$ZOrderUtils$.$applyModality$($layer_popup$$6$$, $events$$4_modality$$1$$);
    $layerClass$$1_options$$350$$ = $layerClass$$1_options$$350$$[$oj$$30$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$];
    $oj$$30$$.$StringUtils$.$isEmptyOrUndefined$($layerClass$$1_options$$350$$) || $layer_popup$$6$$.attr("class", $layerClass$$1_options$$350$$);
  };
  $oj$$30$$.$PopupServiceImpl$.prototype.$triggerOnDescendents$ = function $$oj$$30$$$$PopupServiceImpl$$$$triggerOnDescendents$$($layer$$1_popup$$7$$, $event$$400$$, $argsArray$$1$$) {
    var $context$$82$$ = {};
    $context$$82$$.event = $event$$400$$;
    $context$$82$$.argsArray = $argsArray$$1$$;
    $layer$$1_popup$$7$$ = $oj$$30$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$1_popup$$7$$);
    $oj$$30$$.$ZOrderUtils$.$postOrderVisit$($layer$$1_popup$$7$$, this.$_triggerOnDescendentsVisitCallback$, $context$$82$$);
  };
  $oj$$30$$.$PopupServiceImpl$.prototype.$_triggerOnDescendentsVisitCallback$ = function $$oj$$30$$$$PopupServiceImpl$$$$_triggerOnDescendentsVisitCallback$$($layer$$2$$, $context$$83$$) {
    var $event$$401$$ = $context$$83$$.event, $argsArray$$2$$ = $context$$83$$.argsArray, $events$$5$$ = $oj$$30$$.$ZOrderUtils$.$getEvents$($layer$$2$$);
    $events$$5$$ && $$$$29$$.isFunction($events$$5$$[$event$$401$$]) && $events$$5$$[$event$$401$$].apply(this, $argsArray$$2$$);
    return $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$30$$.$PopupServiceImpl$.prototype.$_assertEventSink$ = function $$oj$$30$$$$PopupServiceImpl$$$$_assertEventSink$$() {
    var $docElement_hasPopupsOpen$$ = $oj$$30$$.$ZOrderUtils$.$hasPopupsOpen$(), $callbackEventFilter_simpleTapRecognizer$$ = this.$_callbackEventFilter$;
    if (!$docElement_hasPopupsOpen$$ && $callbackEventFilter_simpleTapRecognizer$$) {
      window.removeEventListener("resize", $oj$$30$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      window.removeEventListener("scroll", $oj$$30$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      $docElement_hasPopupsOpen$$ = document.documentElement;
      $docElement_hasPopupsOpen$$.removeEventListener("mousewheel", $oj$$30$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      $docElement_hasPopupsOpen$$.removeEventListener("DOMMouseScroll", $oj$$30$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      delete this.$_callbackEventFilter$;
      for (var $i$$357$$ = 0;$i$$357$$ < $oj$$30$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$.length;$i$$357$$++) {
        var $event$$402$$ = $oj$$30$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$[$i$$357$$];
        $docElement_hasPopupsOpen$$.removeEventListener($event$$402$$, $callbackEventFilter_simpleTapRecognizer$$, !0);
      }
      if ($callbackEventFilter_simpleTapRecognizer$$ = this.$_simpleTapRecognizer$) {
        $callbackEventFilter_simpleTapRecognizer$$.destroy(), delete this.$_simpleTapRecognizer$;
      }
    } else {
      if ($docElement_hasPopupsOpen$$ && !$callbackEventFilter_simpleTapRecognizer$$) {
        window.addEventListener("resize", $oj$$30$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        window.addEventListener("scroll", $oj$$30$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $docElement_hasPopupsOpen$$ = document.documentElement;
        $docElement_hasPopupsOpen$$.addEventListener("mousewheel", $oj$$30$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $docElement_hasPopupsOpen$$.addEventListener("DOMMouseScroll", $oj$$30$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $callbackEventFilter_simpleTapRecognizer$$ = this.$_callbackEventFilter$ = $$$$29$$.proxy(this.$_eventFilterCallback$, this);
        for ($i$$357$$ = 0;$i$$357$$ < $oj$$30$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$.length;$i$$357$$++) {
          $event$$402$$ = $oj$$30$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$[$i$$357$$], $docElement_hasPopupsOpen$$.addEventListener($event$$402$$, $callbackEventFilter_simpleTapRecognizer$$, !0);
        }
        $oj$$30$$.$DomUtils$.$isTouchSupported$() && (this.$_simpleTapRecognizer$ = new $oj$$30$$.$SimpleTapRecognizer$($callbackEventFilter_simpleTapRecognizer$$));
      }
    }
  };
  $oj$$30$$.$PopupServiceImpl$.prototype.$_eventFilterCallback$ = function $$oj$$30$$$$PopupServiceImpl$$$$_eventFilterCallback$$($event$$403$$) {
    var $context$$84_target$$91$$ = $$$$29$$($event$$403$$.target);
    if (!$oj$$30$$.$ZOrderUtils$.$hasPopupsOpen$()) {
      this.$_assertEventSink$();
    } else {
      if (!$oj$$30$$.$DomUtils$.$isChromeEvent$($event$$403$$) && ("focus" !== $event$$403$$.type || $context$$84_target$$91$$.is(":focusable"))) {
        var $defaultLayer$$ = $oj$$30$$.$ZOrderUtils$.$getDefaultLayer$();
        if ("keydown" === $event$$403$$.type && $oj$$30$$.$ZOrderUtils$.$hasModalDialogOpen$() && !$oj$$30$$.$DomUtils$.$isAncestor$($defaultLayer$$[0], $context$$84_target$$91$$[0])) {
          $oj$$30$$.$ZOrderUtils$.$eatEvent$($$$$29$$.Event($event$$403$$));
        } else {
          var $props$$16_targetWitinLayer$$ = $oj$$30$$.$ZOrderUtils$.$getFirstAncestorLayer$($context$$84_target$$91$$);
          if ($defaultLayer$$[0] !== $props$$16_targetWitinLayer$$[0]) {
            if (!$props$$16_targetWitinLayer$$.hasClass($oj$$30$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$)) {
              var $lastFocusLayer$$ = this.$_lastFocusLayer$;
              $lastFocusLayer$$ && $lastFocusLayer$$.removeClass($oj$$30$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$);
              $props$$16_targetWitinLayer$$.addClass($oj$$30$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$);
              this.$_lastFocusLayer$ = $props$$16_targetWitinLayer$$;
            }
          } else {
            if ($lastFocusLayer$$ = this.$_lastFocusLayer$) {
              $lastFocusLayer$$.removeClass($oj$$30$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$), delete this.$_lastFocusLayer$;
            }
          }
          if ("focus" !== $event$$403$$.type || "-1" !== $context$$84_target$$91$$.attr("tabindex")) {
            var $context$$84_target$$91$$ = {}, $props$$16_targetWitinLayer$$ = {}, $key$$141$$;
            for ($key$$141$$ in $event$$403$$) {
              $$$$29$$.isFunction($event$$403$$[$key$$141$$]) || ($props$$16_targetWitinLayer$$[$key$$141$$] = $event$$403$$[$key$$141$$]);
            }
            $context$$84_target$$91$$.event = $$$$29$$.Event($event$$403$$, $props$$16_targetWitinLayer$$);
            $oj$$30$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$, $oj$$30$$.$PopupServiceImpl$.$_redistributeVisitCallback$, $context$$84_target$$91$$);
          }
        }
      }
    }
  };
  $oj$$30$$.$PopupServiceImpl$.$_redistributeVisitCallback$ = function $$oj$$30$$$$PopupServiceImpl$$$_redistributeVisitCallback$$($layer$$3$$, $context$$85$$) {
    var $events$$6$$ = $oj$$30$$.$ZOrderUtils$.$getEvents$($layer$$3$$), $event$$404$$ = $context$$85$$.event;
    if ($events$$6$$ && $$$$29$$.isFunction($events$$6$$[$oj$$30$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$])) {
      $events$$6$$[$oj$$30$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$]($event$$404$$);
    }
    return $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$30$$.$PopupServiceImpl$.$_refreshCallback$ = function $$oj$$30$$$$PopupServiceImpl$$$_refreshCallback$$() {
    isNaN($oj$$30$$.$PopupServiceImpl$.$_refreshTimmer$) && ($oj$$30$$.$PopupServiceImpl$.$_refreshTimmer$ = window.setTimeout(function() {
      delete $oj$$30$$.$PopupServiceImpl$.$_refreshTimmer$;
      var $defaultLayer$$1$$ = $oj$$30$$.$ZOrderUtils$.$getDefaultLayer$();
      $oj$$30$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$1$$, $oj$$30$$.$PopupServiceImpl$.$_refreshVisitCallback$);
    }, $oj$$30$$.$PopupServiceImpl$.$_REFRESH_DELAY$));
  };
  $oj$$30$$.$PopupServiceImpl$.$_refreshVisitCallback$ = function $$oj$$30$$$$PopupServiceImpl$$$_refreshVisitCallback$$($layer$$4$$, $context$$86$$) {
    if (0 < $context$$86$$.level) {
      return $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$;
    }
    var $events$$7$$ = $oj$$30$$.$ZOrderUtils$.$getEvents$($layer$$4$$);
    if ($events$$7$$ && $$$$29$$.isFunction($events$$7$$[$oj$$30$$.$PopupService$.$EVENT$.$POPUP_REFRESH$])) {
      $events$$7$$[$oj$$30$$.$PopupService$.$EVENT$.$POPUP_REFRESH$]();
    }
    return $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$30$$.$PopupServiceImpl$.prototype.destroy = function $$oj$$30$$$$PopupServiceImpl$$$destroy$() {
    $oj$$30$$.$PopupServiceImpl$.$superclass$.destroy.call(this);
  };
  $oj$$30$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$ = "oj-focus-within";
  $oj$$30$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$ = ["focus", "mousedown", "keydown"];
  $oj$$30$$.$PopupServiceImpl$.$_REFRESH_DELAY$ = 100;
  $oj$$30$$.$ZOrderUtils$ = {};
  $oj$$30$$.$ZOrderUtils$.$getFirstAncestorLayer$ = function $$oj$$30$$$$ZOrderUtils$$$getFirstAncestorLayer$$($launcher$$11_parent$$38$$) {
    if (!$launcher$$11_parent$$38$$) {
      return $oj$$30$$.$ZOrderUtils$.$getDefaultLayer$();
    }
    for (;$launcher$$11_parent$$38$$ && 0 < $launcher$$11_parent$$38$$.length && $launcher$$11_parent$$38$$.attr("oj.ZOrderUtils._SURROGATE_ATTR") !== $oj$$30$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$;) {
      if ($oj$$30$$.$ZOrderUtils$.$_hasSurrogate$($launcher$$11_parent$$38$$[0])) {
        return $launcher$$11_parent$$38$$;
      }
      $launcher$$11_parent$$38$$ = $launcher$$11_parent$$38$$.parent();
    }
    return $oj$$30$$.$ZOrderUtils$.$getDefaultLayer$();
  };
  $oj$$30$$.$ZOrderUtils$.$getDefaultLayer$ = function $$oj$$30$$$$ZOrderUtils$$$getDefaultLayer$$() {
    var $defaultLayer$$2$$ = $$$$29$$("#" + $oj$$30$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$);
    if (0 < $defaultLayer$$2$$.length) {
      return $defaultLayer$$2$$;
    }
    $defaultLayer$$2$$ = $$$$29$$("\x3cdiv\x3e");
    $defaultLayer$$2$$.attr("role", "presentation");
    $defaultLayer$$2$$.attr("id", $oj$$30$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$);
    $defaultLayer$$2$$.prependTo($$$$29$$(document.body));
    return $defaultLayer$$2$$;
  };
  $oj$$30$$.$ZOrderUtils$.$addToAncestorLayer$ = function $$oj$$30$$$$ZOrderUtils$$$addToAncestorLayer$$($popup$$8$$, $ancestorLayer_launcher$$12$$, $events$$8$$, $modality$$2$$, $layerClass$$2_surrogate$$) {
    var $popupDom$$ = $popup$$8$$[0];
    if ($oj$$30$$.$ZOrderUtils$.$_hasSurrogate$($popupDom$$.parentNode)) {
      throw Error("JET Popup is already open - id: " + $popupDom$$.getAttribute("id"));
    }
    $ancestorLayer_launcher$$12$$ = $oj$$30$$.$ZOrderUtils$.$getFirstAncestorLayer$($modality$$2$$ !== $oj$$30$$.$PopupService$.$MODALITY$.NONE ? null : $ancestorLayer_launcher$$12$$);
    var $layer$$5$$ = $$$$29$$("\x3cdiv\x3e"), $popupId$$ = $popup$$8$$.attr("id");
    $oj$$30$$.$StringUtils$.$isEmptyOrUndefined$($popupId$$) ? $layer$$5$$.uniqueId() : $layer$$5$$.attr("id", [$popupId$$, "layer"].join("_"));
    $layer$$5$$.attr("role", "presentation");
    $layer$$5$$.addClass($layerClass$$2_surrogate$$);
    $popup$$8$$.after($layer$$5$$);
    $layerClass$$2_surrogate$$ = $oj$$30$$.$ZOrderUtils$.$_createSurrogate$($layer$$5$$);
    $oj$$30$$.Components.$subtreeDetached$($popupDom$$);
    $popup$$8$$.appendTo($layer$$5$$);
    $layer$$5$$.appendTo($ancestorLayer_launcher$$12$$);
    $oj$$30$$.Components.$subtreeAttached$($popupDom$$);
    $oj$$30$$.$ZOrderUtils$.$applyModality$($layer$$5$$, $modality$$2$$);
    $oj$$30$$.$ZOrderUtils$.$applyEvents$($layer$$5$$, $events$$8$$, $layerClass$$2_surrogate$$);
  };
  $oj$$30$$.$ZOrderUtils$.$applyEvents$ = function $$oj$$30$$$$ZOrderUtils$$$applyEvents$$($layer$$6$$, $events$$9$$, $surrogate$$1$$) {
    if (!$surrogate$$1$$) {
      var $surrogateId$$ = $layer$$6$$.attr($oj$$30$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
      $surrogateId$$ && ($surrogate$$1$$ = $$$$29$$("#" + $surrogateId$$));
    }
    $layer$$6$$.data($oj$$30$$.$ZOrderUtils$.$_EVENTS_DATA$, $events$$9$$);
    $surrogate$$1$$ && $events$$9$$ && $$$$29$$.isFunction($events$$9$$[$oj$$30$$.$PopupService$.$EVENT$.$POPUP_REMOVE$]) && ($surrogate$$1$$.surrogate(), $surrogate$$1$$.surrogate("option", "beforeDestroy", $events$$9$$[$oj$$30$$.$PopupService$.$EVENT$.$POPUP_REMOVE$]));
  };
  $oj$$30$$.$ZOrderUtils$.$getEvents$ = function $$oj$$30$$$$ZOrderUtils$$$getEvents$$($layer$$7$$) {
    return $layer$$7$$.data($oj$$30$$.$ZOrderUtils$.$_EVENTS_DATA$);
  };
  $oj$$30$$.$ZOrderUtils$.$_createSurrogate$ = function $$oj$$30$$$$ZOrderUtils$$$_createSurrogate$$($layer$$8$$) {
    var $surrogate$$2$$ = $$$$29$$("\x3cscript\x3e"), $layerId_surrogateId$$1$$ = $layer$$8$$.attr("id");
    $oj$$30$$.$StringUtils$.$isEmptyOrUndefined$($layerId_surrogateId$$1$$) ? $surrogate$$2$$.uniqueId() : $surrogate$$2$$.attr("id", [$layerId_surrogateId$$1$$, "surrogate"].join("_"));
    $surrogate$$2$$.insertBefore($layer$$8$$);
    $layerId_surrogateId$$1$$ = $surrogate$$2$$.attr("id");
    $layer$$8$$.attr($oj$$30$$.$ZOrderUtils$.$_SURROGATE_ATTR$, $layerId_surrogateId$$1$$);
    return $surrogate$$2$$;
  };
  $oj$$30$$.$ZOrderUtils$.$_removeSurrogate$ = function $$oj$$30$$$$ZOrderUtils$$$_removeSurrogate$$($layer$$9$$) {
    var $surrogate$$3_surrogateId$$2$$ = $layer$$9$$.attr($oj$$30$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
    $layer$$9$$.removeAttr($oj$$30$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
    $surrogate$$3_surrogateId$$2$$ = $$$$29$$("#" + $surrogate$$3_surrogateId$$2$$);
    $layer$$9$$.insertAfter($surrogate$$3_surrogateId$$2$$);
    $surrogate$$3_surrogateId$$2$$.surrogate("option", "beforeDestroy", null);
    $surrogate$$3_surrogateId$$2$$.remove();
  };
  $oj$$30$$.$ZOrderUtils$.$removeFromAncestorLayer$ = function $$oj$$30$$$$ZOrderUtils$$$removeFromAncestorLayer$$($popup$$9$$) {
    var $layer$$10$$ = $oj$$30$$.$ZOrderUtils$.$getFirstAncestorLayer$($popup$$9$$);
    $oj$$30$$.$ZOrderUtils$.$preOrderVisit$($layer$$10$$, $oj$$30$$.$ZOrderUtils$.$_closeDescendantPopupsCallback$);
    $oj$$30$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$10$$);
    $layer$$10$$.removeData($oj$$30$$.$ZOrderUtils$.$_EVENTS_DATA$);
    $layer$$10$$.removeData($oj$$30$$.$ZOrderUtils$.$_MODALITY_DATA$);
    var $popupDom$$1$$ = $popup$$9$$[0];
    $oj$$30$$.Components.$subtreeDetached$($popupDom$$1$$);
    $oj$$30$$.$ZOrderUtils$.$_removeSurrogate$($layer$$10$$);
    $oj$$30$$.$DomUtils$.unwrap($popup$$9$$, $layer$$10$$);
    $oj$$30$$.Components.$subtreeAttached$($popupDom$$1$$);
  };
  $oj$$30$$.$ZOrderUtils$.$_closeDescendantPopupsCallback$ = function $$oj$$30$$$$ZOrderUtils$$$_closeDescendantPopupsCallback$$($layer$$11$$, $context$$87$$) {
    if (0 < $context$$87$$.level) {
      return $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$;
    }
    var $events$$11$$ = $layer$$11$$.data($oj$$30$$.$ZOrderUtils$.$_EVENTS_DATA$);
    if ($events$$11$$ && $$$$29$$.isFunction($events$$11$$[$oj$$30$$.$PopupService$.$EVENT$.$POPUP_CLOSE$])) {
      $events$$11$$[$oj$$30$$.$PopupService$.$EVENT$.$POPUP_CLOSE$]();
    }
    return $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$30$$.$ZOrderUtils$.$applyModality$ = function $$oj$$30$$$$ZOrderUtils$$$applyModality$$($layer$$12$$, $modality$$3$$) {
    var $currModality$$ = $layer$$12$$.data($oj$$30$$.$ZOrderUtils$.$_MODALITY_DATA$);
    $layer$$12$$.data($oj$$30$$.$ZOrderUtils$.$_MODALITY_DATA$, $modality$$3$$);
    $oj$$30$$.$StringUtils$.$isEmptyOrUndefined$($currModality$$) ? $oj$$30$$.$PopupService$.$MODALITY$.$MODAL$ === $modality$$3$$ ? $oj$$30$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$($layer$$12$$) : $oj$$30$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$12$$) : $currModality$$ !== $modality$$3$$ && ($modality$$3$$ !== $currModality$$ && $modality$$3$$ === $oj$$30$$.$PopupService$.$MODALITY$.$MODAL$ ? $oj$$30$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$($layer$$12$$) : $oj$$30$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$12$$));
  };
  $oj$$30$$.$ZOrderUtils$.$hasModalDialogOpen$ = function $$oj$$30$$$$ZOrderUtils$$$hasModalDialogOpen$$() {
    for (var $children$$19$$ = $oj$$30$$.$ZOrderUtils$.$getDefaultLayer$().children(), $i$$358$$ = $children$$19$$.length - 1;-1 < $i$$358$$;$i$$358$$--) {
      if ($$$$29$$($children$$19$$[$i$$358$$]).hasClass($oj$$30$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$)) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$30$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$ = function $$oj$$30$$$$ZOrderUtils$$$_addOverlayToAncestorLayer$$($layer$$13$$) {
    var $overlay_overlayId$$ = $$$$29$$("\x3cdiv\x3e");
    $overlay_overlayId$$.addClass($oj$$30$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$);
    $overlay_overlayId$$.attr("role", "presentation");
    var $layerId$$1$$ = $layer$$13$$.attr("id");
    $oj$$30$$.$StringUtils$.$isEmptyOrUndefined$($layerId$$1$$) ? $overlay_overlayId$$.uniqueId() : $overlay_overlayId$$.attr("id", [$layerId$$1$$, "overlay"].join("_"));
    $layer$$13$$.before($overlay_overlayId$$);
    $overlay_overlayId$$.on("keydown keyup keypress mousedown mouseup mouseover mouseout click focusin focus", $oj$$30$$.$ZOrderUtils$.$eatEvent$);
    $overlay_overlayId$$ = $overlay_overlayId$$.attr("id");
    $layer$$13$$.attr($oj$$30$$.$ZOrderUtils$.$_OVERLAY_ATTR$, $overlay_overlayId$$);
  };
  $oj$$30$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$ = function $$oj$$30$$$$ZOrderUtils$$$_removeOverlayFromAncestorLayer$$($layer$$14$$) {
    var $overlayId$$1$$ = $layer$$14$$.attr($oj$$30$$.$ZOrderUtils$.$_OVERLAY_ATTR$);
    $oj$$30$$.$StringUtils$.$isEmptyOrUndefined$($overlayId$$1$$) || ($layer$$14$$.removeAttr($oj$$30$$.$ZOrderUtils$.$_OVERLAY_ATTR$), $$$$29$$("#" + $overlayId$$1$$).remove());
  };
  $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$ = {$ACCEPT$:0, $REJECT$:1, $COMPLETE$:2};
  $oj$$30$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$ = {$PRE_ORDER$:0, $POST_ORDER$:1};
  $oj$$30$$.$ZOrderUtils$.$postOrderVisit$ = function $$oj$$30$$$$ZOrderUtils$$$postOrderVisit$$($layer$$15$$, $callback$$102$$, $context$$88$$) {
    $context$$88$$ || ($context$$88$$ = {});
    $context$$88$$.level = 0;
    $context$$88$$.type = $oj$$30$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$POST_ORDER$;
    $oj$$30$$.$ZOrderUtils$.$_visitTree$($layer$$15$$, $callback$$102$$, $context$$88$$);
  };
  $oj$$30$$.$ZOrderUtils$.$preOrderVisit$ = function $$oj$$30$$$$ZOrderUtils$$$preOrderVisit$$($layer$$16$$, $callback$$103$$, $context$$89$$) {
    $context$$89$$ || ($context$$89$$ = {});
    $context$$89$$.level = 0;
    $context$$89$$.type = $oj$$30$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$PRE_ORDER$;
    $oj$$30$$.$ZOrderUtils$.$_visitTree$($layer$$16$$, $callback$$103$$, $context$$89$$);
  };
  $oj$$30$$.$ZOrderUtils$.$_visitTree$ = function $$oj$$30$$$$ZOrderUtils$$$_visitTree$$($children$$20_layer$$17$$, $callback$$104$$, $context$$90$$) {
    var $level$$42$$ = $context$$90$$.level;
    $children$$20_layer$$17$$ = $children$$20_layer$$17$$.children();
    for (var $i$$359$$ = $children$$20_layer$$17$$.length - 1;-1 < $i$$359$$;$i$$359$$--) {
      var $child$$17$$ = $$$$29$$($children$$20_layer$$17$$[$i$$359$$]);
      if ($oj$$30$$.$ZOrderUtils$.$_hasSurrogate$($child$$17$$[0])) {
        var $vrtn$$;
        if ($context$$90$$.type === $oj$$30$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$PRE_ORDER$) {
          $vrtn$$ = $callback$$104$$($child$$17$$, $context$$90$$);
          if ($vrtn$$ === $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
            return $vrtn$$;
          }
          if ($vrtn$$ === $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$) {
            break;
          }
        }
        $context$$90$$.level = $level$$42$$ + 1;
        $vrtn$$ = $oj$$30$$.$ZOrderUtils$.$_visitTree$($child$$17$$, $callback$$104$$, $context$$90$$);
        $context$$90$$.level = $level$$42$$;
        if ($vrtn$$ === $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
          return $vrtn$$;
        }
        if ($context$$90$$.type === $oj$$30$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$POST_ORDER$) {
          $vrtn$$ = $callback$$104$$($child$$17$$, $context$$90$$);
          if ($vrtn$$ === $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
            return $vrtn$$;
          }
          if ($vrtn$$ === $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$) {
            break;
          }
        }
      }
    }
    return $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$30$$.$ZOrderUtils$.$_hasSurrogate$ = function $$oj$$30$$$$ZOrderUtils$$$_hasSurrogate$$($element$$106$$) {
    return 1 === $element$$106$$.nodeType && $element$$106$$.hasAttribute($oj$$30$$.$ZOrderUtils$.$_SURROGATE_ATTR$) ? !0 : !1;
  };
  $oj$$30$$.$ZOrderUtils$.$hasPopupsOpen$ = function $$oj$$30$$$$ZOrderUtils$$$hasPopupsOpen$$() {
    return 0 < $oj$$30$$.$ZOrderUtils$.$getDefaultLayer$().children().length;
  };
  $oj$$30$$.$ZOrderUtils$.$getOpenPopupCount$ = function $$oj$$30$$$$ZOrderUtils$$$getOpenPopupCount$$() {
    var $context$$91$$ = {popupCount:0}, $defaultLayer$$5$$ = $oj$$30$$.$ZOrderUtils$.$getDefaultLayer$();
    $oj$$30$$.$ZOrderUtils$.$preOrderVisit$($defaultLayer$$5$$, $oj$$30$$.$ZOrderUtils$.$_openPopupCountCallback$, $context$$91$$);
    return $context$$91$$.popupCount;
  };
  $oj$$30$$.$ZOrderUtils$.$_openPopupCountCallback$ = function $$oj$$30$$$$ZOrderUtils$$$_openPopupCountCallback$$($layer$$18$$, $context$$92$$) {
    $context$$92$$.popupCount += 1;
    return $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$30$$.$ZOrderUtils$.$findOpenPopups$ = function $$oj$$30$$$$ZOrderUtils$$$findOpenPopups$$() {
    var $context$$93$$ = {}, $defaultLayer$$6_popups$$2$$ = [];
    $context$$93$$.popups = $defaultLayer$$6_popups$$2$$;
    $defaultLayer$$6_popups$$2$$ = $oj$$30$$.$ZOrderUtils$.$getDefaultLayer$();
    $oj$$30$$.$ZOrderUtils$.$preOrderVisit$($defaultLayer$$6_popups$$2$$, $oj$$30$$.$ZOrderUtils$.$_openPopupsCallback$, $context$$93$$);
    $defaultLayer$$6_popups$$2$$ = $context$$93$$.popups;
    return $$$$29$$($defaultLayer$$6_popups$$2$$);
  };
  $oj$$30$$.$ZOrderUtils$.$_openPopupsCallback$ = function $$oj$$30$$$$ZOrderUtils$$$_openPopupsCallback$$($layer$$19$$, $context$$94$$) {
    $context$$94$$.popups.push($layer$$19$$[0]);
    return $oj$$30$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$30$$.$ZOrderUtils$.$compareStackingContexts$ = function $$oj$$30$$$$ZOrderUtils$$$compareStackingContexts$$($el1$$1$$, $el2$$1$$) {
    function $describeStackingContext$$($element$$107$$, $allLevels$$) {
      for (var $positions$$ = ["absolute", "relative", "fixed"], $parents$$4$$ = $element$$107$$.parents(), $stack_tmp$$2$$ = [], $i$$361$$ = $parents$$4$$.length - 1;-1 < $i$$361$$;$i$$361$$--) {
        $stack_tmp$$2$$.push($$$$29$$($parents$$4$$[$i$$361$$]));
      }
      $parents$$4$$ = $stack_tmp$$2$$;
      $parents$$4$$.push($element$$107$$);
      for (var $stack_tmp$$2$$ = [], $level$$43$$ = 0, $i$$361$$ = 0;$i$$361$$ < $parents$$4$$.length;$i$$361$$++) {
        var $order_parent$$39$$ = $parents$$4$$[$i$$361$$], $position$$27$$ = $order_parent$$39$$.css("position"), $opacity$$1$$ = $oj$$30$$.$DomUtils$.$getCSSLengthAsFloat$($order_parent$$39$$.css("opacity")), $zindex$$ = $oj$$30$$.$DomUtils$.$getCSSLengthAsInt$($order_parent$$39$$.css("z-index")), $order_parent$$39$$ = $$$$29$$.inArray($order_parent$$39$$[0], $order_parent$$39$$.parent().children());
        -1 < $$$$29$$.inArray($position$$27$$, $positions$$) ? $stack_tmp$$2$$.push({weight:[$level$$43$$++, $zindex$$, $order_parent$$39$$], order:[$order_parent$$39$$]}) : 1 > $opacity$$1$$ ? $stack_tmp$$2$$.push({weight:[$level$$43$$++, 1, $order_parent$$39$$], order:[$order_parent$$39$$]}) : $allLevels$$ && $stack_tmp$$2$$.push({weight:[0, 0, $order_parent$$39$$], order:[$order_parent$$39$$]});
      }
      return $stack_tmp$$2$$;
    }
    function $compareSets$$($n1$$3$$, $n2$$3$$) {
      for (var $maxLen$$1$$ = Math.max($n1$$3$$.length, $n2$$3$$.length), $i$$362$$ = 0;$i$$362$$ < $maxLen$$1$$;$i$$362$$++) {
        var $e1$$1$$ = $i$$362$$ < $n1$$3$$.length ? $n1$$3$$[$i$$362$$] : -1, $e2$$1$$ = $i$$362$$ < $n2$$3$$.length ? $n2$$3$$[$i$$362$$] : -1;
        if ($e1$$1$$ !== $e2$$1$$) {
          return $e1$$1$$ < $e2$$1$$ ? -1 : 1;
        }
      }
      return 0;
    }
    $oj$$30$$.$Assert$.$assertPrototype$($el1$$1$$, jQuery);
    $oj$$30$$.$Assert$.$assertPrototype$($el2$$1$$, jQuery);
    for (var $n1$$2$$ = $describeStackingContext$$($el1$$1$$, !1), $n2$$2$$ = $describeStackingContext$$($el2$$1$$, !1), $maxLen$$ = Math.max($n1$$2$$.length, $n2$$2$$.length), $i$$360$$ = 0;$i$$360$$ < $maxLen$$;$i$$360$$++) {
      var $c$$45_e1$$ = $i$$360$$ < $n1$$2$$.length ? $n1$$2$$[$i$$360$$].weight : [-1], $e2$$ = $i$$360$$ < $n2$$2$$.length ? $n2$$2$$[$i$$360$$].weight : [-1], $c$$45_e1$$ = $compareSets$$($c$$45_e1$$, $e2$$);
      if (0 !== $c$$45_e1$$) {
        return $c$$45_e1$$;
      }
    }
    $n1$$2$$ = $describeStackingContext$$($el1$$1$$, !0);
    $n2$$2$$ = $describeStackingContext$$($el2$$1$$, !0);
    $maxLen$$ = Math.max($n1$$2$$.length, $n2$$2$$.length);
    for ($i$$360$$ = 0;$i$$360$$ < $maxLen$$;$i$$360$$++) {
      if ($c$$45_e1$$ = $i$$360$$ < $n1$$2$$.length ? $n1$$2$$[$i$$360$$].order : [-1], $e2$$ = $i$$360$$ < $n2$$2$$.length ? $n2$$2$$[$i$$360$$].order : [-1], $c$$45_e1$$ = $compareSets$$($c$$45_e1$$, $e2$$), 0 !== $c$$45_e1$$) {
        return $c$$45_e1$$;
      }
    }
    return 0;
  };
  $oj$$30$$.$ZOrderUtils$.$eatEvent$ = function $$oj$$30$$$$ZOrderUtils$$$eatEvent$$($event$$406$$) {
    $event$$406$$.stopPropagation();
    $event$$406$$.preventDefault();
  };
  $oj$$30$$.$ZOrderUtils$.$_EVENTS_DATA$ = "oj-popup-events";
  $oj$$30$$.$ZOrderUtils$.$_MODALITY_DATA$ = "oj-popup-modality";
  $oj$$30$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$ = "__oj_zorder_container";
  $oj$$30$$.$ZOrderUtils$.$_SURROGATE_ATTR$ = "data-oj-surrogate-id";
  $oj$$30$$.$ZOrderUtils$.$_OVERLAY_ATTR$ = "data-oj-overlayid";
  $oj$$30$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$ = "oj-component-overlay";
  $$$$29$$.widget("oj.surrogate", {options:{create:null, beforeDestroy:null}, _create:function() {
    this._super();
    this.element.uniqueId();
  }, _destroy:function() {
    this._trigger("beforeDestroy");
    this.element.removeUniqueId();
    this._super();
  }});
  $oj$$30$$.$SimpleTapRecognizer$ = function $$oj$$30$$$$SimpleTapRecognizer$$($tapCallback$$) {
    this.$_tapCallback$ = $tapCallback$$;
    this.Init();
  };
  $oj$$30$$.$Object$.$createSubclass$($oj$$30$$.$SimpleTapRecognizer$, $oj$$30$$.$Object$, "oj.SimpleTapRecognizer");
  $oj$$30$$.$SimpleTapRecognizer$.prototype.Init = function $$oj$$30$$$$SimpleTapRecognizer$$$Init$() {
    $oj$$30$$.$SimpleTapRecognizer$.$superclass$.Init.call(this);
    for (var $eventHandlerCallback$$ = this.$_eventHandlerCallback$ = $$$$29$$.proxy(this.$_eventHandler$, this), $docElement$$1$$ = document.documentElement, $i$$363$$ = 0;$i$$363$$ < $oj$$30$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$.length;$i$$363$$++) {
      $docElement$$1$$.addEventListener($oj$$30$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$[$i$$363$$], $eventHandlerCallback$$, !0);
    }
  };
  $oj$$30$$.$SimpleTapRecognizer$.prototype.$_eventHandler$ = function $$oj$$30$$$$SimpleTapRecognizer$$$$_eventHandler$$($event$$407$$) {
    var $tapCallback$$1$$ = this.$_tapCallback$, $eventType$$49$$ = $event$$407$$.type;
    "touchstart" === $eventType$$49$$ ? this.$_touchStartEvent$ = $event$$407$$ : "touchmove" === $eventType$$49$$ || "touchcancel" === $eventType$$49$$ ? delete this.$_touchStartEvent$ : "touchend" === $eventType$$49$$ && (this.$_touchStartEvent$ && $tapCallback$$1$$(this.$_touchStartEvent$), delete this.$_touchStartEvent$);
  };
  $oj$$30$$.$SimpleTapRecognizer$.prototype.destroy = function $$oj$$30$$$$SimpleTapRecognizer$$$destroy$() {
    delete this.$_tapCallback$;
    var $eventHandlerCallback$$1$$ = this.$_eventHandlerCallback$;
    delete this.$_eventHandlerCallback$;
    for (var $docElement$$2$$ = document.documentElement, $i$$364$$ = 0;$i$$364$$ < $oj$$30$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$.length;$i$$364$$++) {
      $docElement$$2$$.removeEventListener($oj$$30$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$[$i$$364$$], $eventHandlerCallback$$1$$, !0);
    }
  };
  $oj$$30$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$ = ["touchstart", "touchmove", "touchcancel", "touchend"];
  $oj$$30$$.$PopupLiveRegion$ = function $$oj$$30$$$$PopupLiveRegion$$() {
    this.Init();
  };
  $oj$$30$$.$Object$.$createSubclass$($oj$$30$$.$PopupLiveRegion$, $oj$$30$$.$Object$, "oj.PopupLiveRegion");
  $oj$$30$$.$PopupLiveRegion$.prototype.Init = function $$oj$$30$$$$PopupLiveRegion$$$Init$() {
    $oj$$30$$.$PopupLiveRegion$.$superclass$.Init.call(this);
    isNaN($oj$$30$$.$PopupLiveRegion$.$_refCounter$) ? $oj$$30$$.$PopupLiveRegion$.$_refCounter$ = 1 : ++$oj$$30$$.$PopupLiveRegion$.$_refCounter$;
  };
  $oj$$30$$.$PopupLiveRegion$.prototype.destroy = function $$oj$$30$$$$PopupLiveRegion$$$destroy$() {
    if (!isNaN($oj$$30$$.$PopupLiveRegion$.$_refCounter$) && (--$oj$$30$$.$PopupLiveRegion$.$_refCounter$, 1 > $oj$$30$$.$PopupLiveRegion$.$_refCounter$)) {
      var $liveRegion$$ = $$$$29$$("#" + $oj$$30$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$);
      0 < $liveRegion$$.length && $liveRegion$$.remove();
    }
  };
  $oj$$30$$.$PopupLiveRegion$.prototype.$announce$ = function $$oj$$30$$$$PopupLiveRegion$$$$announce$$($message$$34$$) {
    if (!$oj$$30$$.$StringUtils$.$isEmpty$($message$$34$$)) {
      var $liveRegion$$1$$ = $oj$$30$$.$PopupLiveRegion$.$_getLiveRegion$();
      $liveRegion$$1$$.children().remove();
      $$$$29$$("\x3cdiv\x3e").text($message$$34$$).appendTo($liveRegion$$1$$);
    }
  };
  $oj$$30$$.$PopupLiveRegion$.$_getLiveRegion$ = function $$oj$$30$$$$PopupLiveRegion$$$_getLiveRegion$$() {
    var $liveRegion$$2$$ = $$$$29$$("#" + $oj$$30$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$);
    0 === $liveRegion$$2$$.length && ($liveRegion$$2$$ = $$$$29$$("\x3cdiv\x3e"), $liveRegion$$2$$.attr({id:$oj$$30$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$, role:"log", "aria-live":"polite", "aria-relevant":"additions"}), $liveRegion$$2$$.addClass("oj-helper-hidden-accessible"), $liveRegion$$2$$.appendTo(document.body));
    return $liveRegion$$2$$;
  };
  $oj$$30$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$ = "__oj_popup_arialiveregion";
  $oj$$30$$.$PopupSkipLink$ = function $$oj$$30$$$$PopupSkipLink$$($sibling$$, $message$$35$$, $callback$$105$$, $id$$37$$) {
    $oj$$30$$.$Assert$.$assertPrototype$($sibling$$, jQuery);
    $oj$$30$$.$Assert$.$assertString$($message$$35$$);
    $oj$$30$$.$Assert$.$assertFunction$($callback$$105$$);
    $oj$$30$$.$Assert$.$assertStringOrNull$($id$$37$$);
    this.$_sibling$ = $sibling$$;
    this.$_message$ = $message$$35$$;
    this.$_callback$ = $callback$$105$$;
    this.$_id$ = $id$$37$$ ? $id$$37$$ : "";
    this.Init();
  };
  $oj$$30$$.$Object$.$createSubclass$($oj$$30$$.$PopupSkipLink$, $oj$$30$$.$Object$, "oj.PopupSkipLink");
  $oj$$30$$.$PopupSkipLink$.prototype.Init = function $$oj$$30$$$$PopupSkipLink$$$Init$() {
    $oj$$30$$.$PopupSkipLink$.$superclass$.Init.call(this);
    var $sibling$$1$$ = this.$_sibling$, $callback$$106$$ = this.$_callback$, $message$$36$$ = this.$_message$;
    delete this.$_message$;
    var $id$$38$$ = this.$_id$;
    delete this.$_id$;
    var $link$$1$$ = $$$$29$$("\x3ca\x3e").attr({tabindex:"-1", href:"#"});
    $oj$$30$$.$StringUtils$.$isEmpty$($id$$38$$) || $link$$1$$.attr("id", $id$$38$$);
    $link$$1$$.addClass("oj-helper-hidden-accessible");
    $link$$1$$.text($message$$36$$);
    $link$$1$$.insertAfter($sibling$$1$$);
    $link$$1$$.on("click", $callback$$106$$);
    $sibling$$1$$.data($oj$$30$$.$PopupSkipLink$.$_SKIPLINK_ATTR$, $link$$1$$);
  };
  $oj$$30$$.$PopupSkipLink$.prototype.destroy = function $$oj$$30$$$$PopupSkipLink$$$destroy$() {
    var $sibling$$2$$ = this.$_sibling$;
    delete this.$_sibling$;
    var $callback$$107$$ = this.$_callback$;
    delete this.$_callback$;
    if ($sibling$$2$$) {
      var $link$$2$$ = $sibling$$2$$.data($oj$$30$$.$PopupSkipLink$.$_SKIPLINK_ATTR$);
      $sibling$$2$$.removeData($oj$$30$$.$PopupSkipLink$.$_SKIPLINK_ATTR$);
      $link$$2$$ && ($link$$2$$.off("click", $callback$$107$$), $link$$2$$.remove());
    }
  };
  $oj$$30$$.$PopupSkipLink$.prototype.getLink = function $$oj$$30$$$$PopupSkipLink$$$getLink$() {
    var $sibling$$3$$ = this.$_sibling$, $link$$3$$;
    $sibling$$3$$ && ($link$$3$$ = $sibling$$3$$.data($oj$$30$$.$PopupSkipLink$.$_SKIPLINK_ATTR$));
    return $link$$3$$;
  };
  $oj$$30$$.$PopupSkipLink$.$_SKIPLINK_ATTR$ = "oj-skiplink";
});
