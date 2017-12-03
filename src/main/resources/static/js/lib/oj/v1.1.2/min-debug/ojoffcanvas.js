/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$23$$, $$$$22$$, $Hammer$$3$$) {
  $oj$$23$$.$OffcanvasUtils$ = {};
  $goog$exportPath_$$("OffcanvasUtils", $oj$$23$$.$OffcanvasUtils$, $oj$$23$$);
  $oj$$23$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$ = "oj-offcanvasEdge";
  $oj$$23$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$ = "oj-offcanvas";
  $oj$$23$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$ = "oj-mediaQueryListener";
  $oj$$23$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$ = "oj-offcanvasHammer";
  $oj$$23$$.$OffcanvasUtils$.$_shiftSelector$ = {start:"oj-offcanvas-shift-start", end:"oj-offcanvas-shift-end", top:"oj-offcanvas-shift-down", bottom:"oj-offcanvas-shift-up"};
  $oj$$23$$.$OffcanvasUtils$.$_drawerSelector$ = {start:"oj-offcanvas-start", end:"oj-offcanvas-end", top:"oj-offcanvas-top", bottom:"oj-offcanvas-bottom"};
  $oj$$23$$.$OffcanvasUtils$.$_isOpen$ = function $$oj$$23$$$$OffcanvasUtils$$$_isOpen$$($drawer$$) {
    return $drawer$$.hasClass("oj-offcanvas-open");
  };
  $oj$$23$$.$OffcanvasUtils$.$_getOuterWrapper$ = function $$oj$$23$$$$OffcanvasUtils$$$_getOuterWrapper$$($drawer$$1$$) {
    return $drawer$$1$$.closest(".oj-offcanvas-outer-wrapper");
  };
  $oj$$23$$.$OffcanvasUtils$.$_getAnimateWrapper$ = function $$oj$$23$$$$OffcanvasUtils$$$_getAnimateWrapper$$($offcanvas$$) {
    var $wrapper$$ = $$$$22$$($offcanvas$$.selector);
    return "push" === $offcanvas$$.displayMode ? $wrapper$$.parent() : $wrapper$$;
  };
  $oj$$23$$.$OffcanvasUtils$.$_getShiftSelector$ = function $$oj$$23$$$$OffcanvasUtils$$$_getShiftSelector$$($edge$$2$$) {
    var $selector$$23$$ = $oj$$23$$.$OffcanvasUtils$.$_shiftSelector$[$edge$$2$$];
    if (!$selector$$23$$) {
      throw "Invalid edge: " + $edge$$2$$;
    }
    return $selector$$23$$;
  };
  $oj$$23$$.$OffcanvasUtils$.$_isRTL$ = function $$oj$$23$$$$OffcanvasUtils$$$_isRTL$$() {
    return "rtl" === $oj$$23$$.$DomUtils$.$getReadingDirection$();
  };
  $oj$$23$$.$OffcanvasUtils$.$_setTransform$ = function $$oj$$23$$$$OffcanvasUtils$$$_setTransform$$($wrapper$$1$$, $transform$$) {
    $wrapper$$1$$.css({"-webkit-transform":$transform$$, "-ms-transform":$transform$$, transform:$transform$$});
  };
  $oj$$23$$.$OffcanvasUtils$.$_setTranslationX$ = function $$oj$$23$$$$OffcanvasUtils$$$_setTranslationX$$($wrapper$$2$$, $edge$$3_minus$$, $width$$26$$) {
    $edge$$3_minus$$ = "end" === $edge$$3_minus$$;
    $oj$$23$$.$OffcanvasUtils$.$_isRTL$() && ($edge$$3_minus$$ = !$edge$$3_minus$$);
    $oj$$23$$.$OffcanvasUtils$.$_setTransform$($wrapper$$2$$, "translate3d(" + ($edge$$3_minus$$ ? "-" : "") + $width$$26$$ + ", 0, 0)");
  };
  $oj$$23$$.$OffcanvasUtils$.$_setTranslationY$ = function $$oj$$23$$$$OffcanvasUtils$$$_setTranslationY$$($wrapper$$3$$, $edge$$4$$, $height$$24$$) {
    $oj$$23$$.$OffcanvasUtils$.$_setTransform$($wrapper$$3$$, "translate3d(0, " + ("bottom" === $edge$$4$$ ? "-" : "") + $height$$24$$ + ", 0)");
  };
  $oj$$23$$.$OffcanvasUtils$.$_saveEdge$ = function $$oj$$23$$$$OffcanvasUtils$$$_saveEdge$$($drawer$$2_offcanvas$$1$$) {
    var $edge$$5$$ = $drawer$$2_offcanvas$$1$$.edge;
    $drawer$$2_offcanvas$$1$$ = $$$$22$$($drawer$$2_offcanvas$$1$$.selector);
    $edge$$5$$ && $edge$$5$$.length || ($edge$$5$$ = $drawer$$2_offcanvas$$1$$.hasClass("oj-offcanvas-start") ? "start" : $drawer$$2_offcanvas$$1$$.hasClass("oj-offcanvas-end") ? "end" : $drawer$$2_offcanvas$$1$$.hasClass("oj-offcanvas-top") ? "top" : $drawer$$2_offcanvas$$1$$.hasClass("oj-offcanvas-bottom") ? "bottom" : "start");
    $$$$22$$.data($drawer$$2_offcanvas$$1$$[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$, $edge$$5$$);
    return $edge$$5$$;
  };
  $oj$$23$$.$OffcanvasUtils$.$_getEdge$ = function $$oj$$23$$$$OffcanvasUtils$$$_getEdge$$($drawer$$3$$) {
    return $$$$22$$.data($drawer$$3$$[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$);
  };
  $oj$$23$$.$OffcanvasUtils$.$_toggleClass$ = function $$oj$$23$$$$OffcanvasUtils$$$_toggleClass$$($offcanvas$$2$$, $wrapper$$4$$, $isOpen$$1_oTabIndex$$) {
    var $displayMode_wrapperClass$$ = $offcanvas$$2$$.displayMode, $drawer$$4$$ = $$$$22$$($offcanvas$$2$$.selector), $displayMode_wrapperClass$$ = "overlay" === $displayMode_wrapperClass$$ ? "oj-offcanvas-transition oj-offcanvas-overlay" : "oj-offcanvas-transition";
    $isOpen$$1_oTabIndex$$ ? ($isOpen$$1_oTabIndex$$ = $drawer$$4$$.attr("tabIndex"), void 0 !== $isOpen$$1_oTabIndex$$ && ($offcanvas$$2$$.tabIndex = $isOpen$$1_oTabIndex$$), $drawer$$4$$.addClass("oj-offcanvas-open").attr("tabIndex", "-1"), $wrapper$$4$$.addClass($displayMode_wrapperClass$$)) : ($isOpen$$1_oTabIndex$$ = $offcanvas$$2$$.tabIndex, void 0 === $isOpen$$1_oTabIndex$$ ? $drawer$$4$$.removeAttr("tabIndex") : $drawer$$4$$.attr("tabIndex", $isOpen$$1_oTabIndex$$), $drawer$$4$$.removeClass("oj-offcanvas-open"), 
    $wrapper$$4$$.removeClass($displayMode_wrapperClass$$));
  };
  $oj$$23$$.$OffcanvasUtils$.$_isAutoDismiss$ = function $$oj$$23$$$$OffcanvasUtils$$$_isAutoDismiss$$($offcanvas$$3$$) {
    return "none" != $offcanvas$$3$$.autoDismiss;
  };
  $oj$$23$$.$OffcanvasUtils$.$_onTransitionEnd$ = function $$oj$$23$$$$OffcanvasUtils$$$_onTransitionEnd$$($wrapper$$5$$, $handler$$50$$) {
    function $listener$$36$$() {
      $handler$$50$$();
      $wrapper$$5$$.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$36$$);
    }
    $wrapper$$5$$.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$36$$);
  };
  $oj$$23$$.$OffcanvasUtils$.$_registerCloseHandler$ = function $$oj$$23$$$$OffcanvasUtils$$$_registerCloseHandler$$($offcanvas$$4$$) {
    $oj$$23$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$4$$);
    if ($oj$$23$$.$OffcanvasUtils$.$_isAutoDismiss$($offcanvas$$4$$)) {
      var $drawer$$5$$ = $$$$22$$($offcanvas$$4$$.selector), $dismisHandler$$ = $offcanvas$$4$$.dismisHandler = function $$offcanvas$$4$$$dismisHandler$($event$$296$$) {
        var $target$$85$$ = $event$$296$$.target;
        $oj$$23$$.$DomUtils$.$isChromeEvent$($event$$296$$) || "focus" === $event$$296$$.type && !$$$$22$$($target$$85$$).is(":focusable") || $oj$$23$$.$DomUtils$.$isLogicalAncestorOrSelf$($drawer$$5$$[0], $target$$85$$) || $oj$$23$$.$OffcanvasUtils$.close($offcanvas$$4$$);
      }, $documentElement$$ = document.documentElement;
      $oj$$23$$.$DomUtils$.$isTouchSupported$() && $documentElement$$.addEventListener("touchstart", $dismisHandler$$, !0);
      $documentElement$$.addEventListener("mousedown", $dismisHandler$$, !0);
      $documentElement$$.addEventListener("focus", $dismisHandler$$, !0);
    }
    $oj$$23$$.$OffcanvasUtils$.$_registerSwipeHandler$($offcanvas$$4$$);
  };
  $oj$$23$$.$OffcanvasUtils$.$_unregisterCloseHandler$ = function $$oj$$23$$$$OffcanvasUtils$$$_unregisterCloseHandler$$($offcanvas$$5$$) {
    var $dismisHandler$$1$$ = $offcanvas$$5$$.dismisHandler;
    if ($dismisHandler$$1$$) {
      var $documentElement$$1$$ = document.documentElement;
      $oj$$23$$.$DomUtils$.$isTouchSupported$() && $documentElement$$1$$.removeEventListener("touchstart", $dismisHandler$$1$$, !0);
      $documentElement$$1$$.removeEventListener("mousedown", $dismisHandler$$1$$, !0);
      $documentElement$$1$$.removeEventListener("focus", $dismisHandler$$1$$, !0);
      delete $offcanvas$$5$$.dismisHandler;
      $offcanvas$$5$$.dismisHandler = null;
    }
    $oj$$23$$.$OffcanvasUtils$.$_unregisterSwipeHandler$($offcanvas$$5$$);
  };
  $oj$$23$$.$OffcanvasUtils$.$_registerSwipeHandler$ = function $$oj$$23$$$$OffcanvasUtils$$$_registerSwipeHandler$$($offcanvas$$6$$) {
    if ($oj$$23$$.$DomUtils$.$isTouchSupported$()) {
      var $selector$$24$$ = $offcanvas$$6$$.selector, $drawer$$6_drawerHammer$$ = $$$$22$$($selector$$24$$), $edge$$6$$ = $oj$$23$$.$OffcanvasUtils$.$_getEdge$($drawer$$6_drawerHammer$$), $swipeEvent$$, $options$$313$$;
      "start" == $edge$$6$$ && !$oj$$23$$.$OffcanvasUtils$.$_isRTL$() || "end" == $edge$$6$$ && $oj$$23$$.$OffcanvasUtils$.$_isRTL$() ? ($options$$313$$ = {recognizers:[[$Hammer$$3$$.Swipe, {direction:$Hammer$$3$$.DIRECTION_LEFT}]]}, $swipeEvent$$ = "swipeleft") : "start" == $edge$$6$$ && $oj$$23$$.$OffcanvasUtils$.$_isRTL$() || "end" == $edge$$6$$ && !$oj$$23$$.$OffcanvasUtils$.$_isRTL$() ? ($options$$313$$ = {recognizers:[[$Hammer$$3$$.Swipe, {direction:$Hammer$$3$$.DIRECTION_RIGHT}]]}, $swipeEvent$$ = 
      "swiperight") : "top" == $edge$$6$$ ? ($options$$313$$ = {recognizers:[[$Hammer$$3$$.Swipe, {direction:$Hammer$$3$$.DIRECTION_UP}]]}, $swipeEvent$$ = "swipeup") : "bottom" == $edge$$6$$ && ($options$$313$$ = {recognizers:[[$Hammer$$3$$.Swipe, {direction:$Hammer$$3$$.DIRECTION_DOWN}]]}, $swipeEvent$$ = "swipedown");
      $drawer$$6_drawerHammer$$ = $drawer$$6_drawerHammer$$.$ojHammer$($options$$313$$).on($swipeEvent$$, function($event$$297$$) {
        $event$$297$$.preventDefault();
        $oj$$23$$.$OffcanvasUtils$.close($offcanvas$$6$$);
      });
      $$$$22$$.data($$$$22$$($selector$$24$$)[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$, {event:$swipeEvent$$, hammer:$drawer$$6_drawerHammer$$});
    }
  };
  $oj$$23$$.$OffcanvasUtils$.$_unregisterSwipeHandler$ = function $$oj$$23$$$$OffcanvasUtils$$$_unregisterSwipeHandler$$($dHammer_drawer$$7_offcanvas$$7$$) {
    $dHammer_drawer$$7_offcanvas$$7$$ = $$$$22$$($dHammer_drawer$$7_offcanvas$$7$$.selector);
    ($dHammer_drawer$$7_offcanvas$$7$$ = $$$$22$$.data($dHammer_drawer$$7_offcanvas$$7$$[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$)) && $dHammer_drawer$$7_offcanvas$$7$$.hammer.off($dHammer_drawer$$7_offcanvas$$7$$.event);
  };
  $oj$$23$$.$OffcanvasUtils$.$_afterCloseHandler$ = function $$oj$$23$$$$OffcanvasUtils$$$_afterCloseHandler$$($offcanvas$$8$$) {
    var $drawer$$8$$ = $$$$22$$($offcanvas$$8$$.selector);
    $oj$$23$$.$OffcanvasUtils$.$_getEdge$($drawer$$8$$);
    var $wrapper$$6$$ = $oj$$23$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$8$$);
    $oj$$23$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$8$$, $wrapper$$6$$, !1);
    $oj$$23$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$8$$);
    $drawer$$8$$.trigger("ojclose", $offcanvas$$8$$);
    $$$$22$$.removeData($drawer$$8$$[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
  };
  $oj$$23$$.$OffcanvasUtils$.$_setVisible$ = function $$oj$$23$$$$OffcanvasUtils$$$_setVisible$$($selector$$25$$, $visible$$, $edge$$8$$) {
    var $drawer$$9$$ = $$$$22$$($selector$$25$$);
    ($visible$$ = !!$visible$$) && $oj$$23$$.$OffcanvasUtils$.$_isOpen$($drawer$$9$$) && $oj$$23$$.$OffcanvasUtils$.$_close$($selector$$25$$, !1);
    $drawer$$9$$.toggleClass($oj$$23$$.$OffcanvasUtils$.$_drawerSelector$[$edge$$8$$], !$visible$$);
  };
  $oj$$23$$.$OffcanvasUtils$.$setupResponsive$ = function $$oj$$23$$$$OffcanvasUtils$$$setupResponsive$$($mqListener_offcanvas$$9$$) {
    var $mqs_query$$9$$ = $mqListener_offcanvas$$9$$.query;
    if (null !== $mqs_query$$9$$) {
      var $selector$$26$$ = $mqListener_offcanvas$$9$$.selector, $mqs_query$$9$$ = window.matchMedia($mqs_query$$9$$), $edge$$9$$ = $oj$$23$$.$OffcanvasUtils$.$_saveEdge$($mqListener_offcanvas$$9$$);
      $mqListener_offcanvas$$9$$ = function $$mqListener_offcanvas$$9$$$($event$$298$$) {
        $oj$$23$$.$OffcanvasUtils$.$_setVisible$($selector$$26$$, $event$$298$$.matches, $edge$$9$$);
      };
      $mqs_query$$9$$.addListener($mqListener_offcanvas$$9$$);
      $oj$$23$$.$OffcanvasUtils$.$_setVisible$($selector$$26$$, $mqs_query$$9$$.matches, $edge$$9$$);
      $$$$22$$.data($$$$22$$($selector$$26$$)[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$, {mqList:$mqs_query$$9$$, mqListener:$mqListener_offcanvas$$9$$});
    }
  };
  $goog$exportPath_$$("OffcanvasUtils.setupResponsive", $oj$$23$$.$OffcanvasUtils$.$setupResponsive$, $oj$$23$$);
  $oj$$23$$.$OffcanvasUtils$.$tearDownResponsive$ = function $$oj$$23$$$$OffcanvasUtils$$$tearDownResponsive$$($drawer$$10_offcanvas$$10$$) {
    $drawer$$10_offcanvas$$10$$ = $$$$22$$($drawer$$10_offcanvas$$10$$.selector);
    var $mql$$ = $$$$22$$.data($drawer$$10_offcanvas$$10$$[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$);
    $mql$$ && ($mql$$.mqList.removeListener($mql$$.mqListener), $$$$22$$.removeData($drawer$$10_offcanvas$$10$$[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$));
  };
  $goog$exportPath_$$("OffcanvasUtils.tearDownResponsive", $oj$$23$$.$OffcanvasUtils$.$tearDownResponsive$, $oj$$23$$);
  $oj$$23$$.$OffcanvasUtils$.open = function $$oj$$23$$$$OffcanvasUtils$$open$($offcanvas$$11$$) {
    var $drawer$$11$$ = $$$$22$$($offcanvas$$11$$.selector), $oldOffcanvas_promise$$3$$ = $$$$22$$.data($drawer$$11$$[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    if ($oldOffcanvas_promise$$3$$) {
      if ($oldOffcanvas_promise$$3$$._closePromise) {
        return $oldOffcanvas_promise$$3$$._closePromise;
      }
      if ($oldOffcanvas_promise$$3$$._openPromise) {
        return $oldOffcanvas_promise$$3$$._openPromise;
      }
    }
    var $oldOffcanvas_promise$$3$$ = new Promise(function($resolve$$47$$, $reject$$46$$) {
      $oj$$23$$.$Assert$.$assertPrototype$($drawer$$11$$, jQuery);
      var $edge$$10$$ = $oj$$23$$.$OffcanvasUtils$.$_saveEdge$($offcanvas$$11$$), $displayMode$$1_event$$299$$ = $$$$22$$.Event("ojbeforeopen");
      $drawer$$11$$.trigger($displayMode$$1_event$$299$$, $offcanvas$$11$$);
      if (!1 === $displayMode$$1_event$$299$$.result) {
        $reject$$46$$("ojbeforeopen veto");
      } else {
        var $size$$21$$, $displayMode$$1_event$$299$$ = $offcanvas$$11$$.displayMode, $wrapper$$7$$ = $oj$$23$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$11$$);
        $oj$$23$$.$Assert$.$assertPrototype$($wrapper$$7$$, jQuery);
        var $myOffcanvas$$ = $$$$22$$.extend({}, $offcanvas$$11$$);
        $$$$22$$.data($drawer$$11$$[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$, $myOffcanvas$$);
        $oj$$23$$.$OffcanvasUtils$.$_toggleClass$($myOffcanvas$$, $wrapper$$7$$, !0);
        "start" == $edge$$10$$ || "end" == $edge$$10$$ ? ($size$$21$$ = void 0 === $size$$21$$ ? $drawer$$11$$.outerWidth(!0) + "px" : $size$$21$$, "push" == $displayMode$$1_event$$299$$ && $oj$$23$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$7$$, $edge$$10$$, $size$$21$$)) : ($size$$21$$ = void 0 === $size$$21$$ ? $drawer$$11$$.outerHeight(!0) + "px" : $size$$21$$, "push" == $displayMode$$1_event$$299$$ && $oj$$23$$.$OffcanvasUtils$.$_setTranslationY$($wrapper$$7$$, $edge$$10$$, $size$$21$$));
        window.setTimeout(function() {
          var $outerWrapper$$ = $oj$$23$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$11$$);
          $oj$$23$$.$Assert$.$assertPrototype$($outerWrapper$$, jQuery);
          $outerWrapper$$.addClass($oj$$23$$.$OffcanvasUtils$.$_getShiftSelector$($edge$$10$$));
        }, 0);
        $oj$$23$$.$OffcanvasUtils$.$_onTransitionEnd$($wrapper$$7$$, function() {
          $wrapper$$7$$.removeClass("oj-offcanvas-transition");
          $oj$$23$$.$FocusUtils$.$focusElement$($drawer$$11$$[0]);
          $drawer$$11$$.trigger("ojopen", $myOffcanvas$$);
          $oj$$23$$.$OffcanvasUtils$.$_registerCloseHandler$($myOffcanvas$$);
          $resolve$$47$$(!0);
        });
      }
    }), $nOffcanvas$$ = $$$$22$$.data($drawer$$11$$[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    $nOffcanvas$$ && ($nOffcanvas$$._openPromise = $oldOffcanvas_promise$$3$$);
    return $oldOffcanvas_promise$$3$$;
  };
  $goog$exportPath_$$("OffcanvasUtils.open", $oj$$23$$.$OffcanvasUtils$.open, $oj$$23$$);
  $oj$$23$$.$OffcanvasUtils$.close = function $$oj$$23$$$$OffcanvasUtils$$close$($offcanvas$$12$$) {
    return $oj$$23$$.$OffcanvasUtils$.$_close$($offcanvas$$12$$.selector, !0);
  };
  $goog$exportPath_$$("OffcanvasUtils.close", $oj$$23$$.$OffcanvasUtils$.close, $oj$$23$$);
  $oj$$23$$.$OffcanvasUtils$.$_close$ = function $$oj$$23$$$$OffcanvasUtils$$$_close$$($selector$$27$$, $animation$$) {
    var $drawer$$12$$ = $$$$22$$($selector$$27$$);
    $oj$$23$$.$Assert$.$assertPrototype$($drawer$$12$$, jQuery);
    var $offcanvas$$13$$ = $$$$22$$.data($drawer$$12$$[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    if ($offcanvas$$13$$ && $offcanvas$$13$$._closePromise) {
      return $offcanvas$$13$$._closePromise;
    }
    var $promise$$4$$ = new Promise(function($resolve$$48$$, $reject$$47$$) {
      if ($oj$$23$$.$OffcanvasUtils$.$_isOpen$($drawer$$12$$)) {
        $selector$$27$$ != $offcanvas$$13$$.selector && $resolve$$48$$(!0);
        var $edge$$11_shiftSelector$$ = $oj$$23$$.$OffcanvasUtils$.$_getEdge$($drawer$$12$$), $displayMode$$2$$ = $offcanvas$$13$$.displayMode, $edge$$11_shiftSelector$$ = $oj$$23$$.$OffcanvasUtils$.$_getShiftSelector$($edge$$11_shiftSelector$$), $outerWrapper$$1$$ = $oj$$23$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$12$$);
        $oj$$23$$.$Assert$.$assertPrototype$($outerWrapper$$1$$, jQuery);
        $outerWrapper$$1$$.hasClass($edge$$11_shiftSelector$$) || $resolve$$48$$(!0);
        var $event$$300_wrapper$$8$$ = $$$$22$$.Event("ojbeforeclose");
        $drawer$$12$$.trigger($event$$300_wrapper$$8$$, $offcanvas$$13$$);
        !1 === $event$$300_wrapper$$8$$.result ? $reject$$47$$("beforeClose veto") : ($event$$300_wrapper$$8$$ = $oj$$23$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$13$$), $animation$$ && $oj$$23$$.$OffcanvasUtils$.$_onTransitionEnd$($event$$300_wrapper$$8$$, function() {
          $oj$$23$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$13$$);
          $resolve$$48$$(!0);
        }), "push" == $displayMode$$2$$ && $oj$$23$$.$OffcanvasUtils$.$_setTransform$($event$$300_wrapper$$8$$, ""), $outerWrapper$$1$$.removeClass($edge$$11_shiftSelector$$), $animation$$ ? $event$$300_wrapper$$8$$.addClass("oj-offcanvas-transition") : ($oj$$23$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$13$$), $resolve$$48$$(!0)));
      } else {
        $resolve$$48$$(!0);
      }
    });
    ($offcanvas$$13$$ = $$$$22$$.data($drawer$$12$$[0], $oj$$23$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$)) && ($offcanvas$$13$$._closePromise = $promise$$4$$);
    return $promise$$4$$;
  };
  $oj$$23$$.$OffcanvasUtils$.toggle = function $$oj$$23$$$$OffcanvasUtils$$toggle$($offcanvas$$14$$) {
    var $drawer$$13$$ = $$$$22$$($offcanvas$$14$$.selector);
    $oj$$23$$.$Assert$.$assertPrototype$($drawer$$13$$, jQuery);
    return $oj$$23$$.$OffcanvasUtils$.$_isOpen$($drawer$$13$$) ? $oj$$23$$.$OffcanvasUtils$.close($offcanvas$$14$$) : $oj$$23$$.$OffcanvasUtils$.open($offcanvas$$14$$);
  };
  $goog$exportPath_$$("OffcanvasUtils.toggle", $oj$$23$$.$OffcanvasUtils$.toggle, $oj$$23$$);
});
