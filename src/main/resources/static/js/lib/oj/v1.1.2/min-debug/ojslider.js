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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "jqueryui-amd/draggable", "ojs/ojtouchproxy"], function($oj$$35$$, $$$$34$$) {
  (function() {
    $oj$$35$$.$__registerWidget$("oj.ojSlider", $$$$34$$.oj.editableValue, {defaultElement:"\x3cinput\x3e", version:"1.1.1", widgetEventPrefix:"oj", options:{distance:0, max:100, min:0, orientation:"horizontal", readOnly:!1, disabled:!1, step:1, type:"fromMin", value:0}, $_numPages$:5, $_isRTL$:function() {
      return "rtl" === $oj$$35$$.$DomUtils$.$getReadingDirection$();
    }, _ComponentCreate:function() {
      this._super();
      this.$_newMultiValue$ = [];
      this.element.removeAttr("pattern");
      this.$_dragInProgress$ = this.$_keySliding$ = !1;
      this.$_thumbIndex$ = null;
      this.$_inputtag$ = !1;
      this.element.is("INPUT") ? (this.$_inputtag$ = !0, this.element[0].style && (this.$_styleFromInputTag$ = this.element[0].style.cssText), this.$_inputElementOriginalDisplay$ = this.element.css("display"), this.element.css("display", "none"), this.$_elementWrapped$ = $$$$34$$(this.element).wrap("\x3cdiv\x3e \x3c/div\x3e").parent()) : this.$_elementWrapped$ = this.element;
      var $classes$$1$$ = "oj-slider ", $classes$$1$$ = this.$_isVertical$() ? $classes$$1$$ + "oj-slider-vertical" : $classes$$1$$ + "oj-slider-horizontal";
      this.$_elementWrapped$.addClass($classes$$1$$ + " ui-widget ui-widget-content");
      this.$_multipleThumbs$ = "range" === this.options.type ? !0 : !1;
      this.$_calculateNewMax$();
      this.$_setup$();
      this.$_setupEvents$();
    }, $_AfterCreate$:function() {
      this._super();
      this.$_makeDraggable$();
      var $ariaLabelString_label$$13$$ = this.$_GetLabelElementLocal$();
      if ($ariaLabelString_label$$13$$) {
        var $thumb$$ = this.$_elementWrapped$.find(".oj-slider-thumb"), $labelId$$ = $ariaLabelString_label$$13$$.attr("id");
        $labelId$$ || ($labelId$$ = $ariaLabelString_label$$13$$.attr("for"));
        $thumb$$.attr("aria-labelledby", $labelId$$);
        1 < $ariaLabelString_label$$13$$.length && 1 < $thumb$$.length && $thumb$$[1].attr("aria-labelledby", String($labelId$$));
      } else {
        if ($ariaLabelString_label$$13$$ = this.element.attr("aria-label")) {
          $thumb$$ = this.$_elementWrapped$.find(".oj-slider-thumb"), $thumb$$.attr("aria-label", $ariaLabelString_label$$13$$);
        }
      }
    }, $_GetLabelElementLocal$:function() {
      var $queryResult$$1$$ = this.$_getAriaLabelledByElementLocal$();
      if (null !== $queryResult$$1$$ && 0 !== $queryResult$$1$$.length) {
        return $queryResult$$1$$;
      }
      $queryResult$$1$$ = this.$_getAriaLabelForElementLocal$();
      if (null !== $queryResult$$1$$ && 0 !== $queryResult$$1$$.length) {
        return $queryResult$$1$$;
      }
    }, $_getAriaLabelForElementLocal$:function() {
      var $id$$41_spanQuery$$ = this.element.prop("id");
      if (void 0 !== $id$$41_spanQuery$$) {
        var $jqLabelQuery$$ = $$$$34$$("label[for\x3d'" + $id$$41_spanQuery$$ + "']");
        if (0 < $jqLabelQuery$$.length) {
          return $jqLabelQuery$$;
        }
        $id$$41_spanQuery$$ = "span[for\x3d'" + $id$$41_spanQuery$$ + "']";
        if (0 !== $$$$34$$($id$$41_spanQuery$$).length) {
          return $$$$34$$($id$$41_spanQuery$$);
        }
      }
      return null;
    }, $_getAriaLabelledByElementLocal$:function() {
      var $ariaId$$1_jqSpanQuery$$ = this.element.attr("aria-labelledby");
      if (void 0 !== $ariaId$$1_jqSpanQuery$$) {
        var $jqLabelQuery$$1$$ = $$$$34$$("label[id\x3d'" + $ariaId$$1_jqSpanQuery$$ + "']");
        if (0 < $jqLabelQuery$$1$$.length) {
          return $jqLabelQuery$$1$$;
        }
        $ariaId$$1_jqSpanQuery$$ = $$$$34$$("span[id\x3d'" + $ariaId$$1_jqSpanQuery$$ + "']");
        if (0 < $ariaId$$1_jqSpanQuery$$.length) {
          return $ariaId$$1_jqSpanQuery$$;
        }
      } else {
        return null;
      }
    }, widget:function() {
      return this.$_elementWrapped$;
    }, $_setup$:function() {
      this.$_createSliderContainer$();
      this.$_createBarBackground$();
      this.$_createRange$();
      this.$_createThumbs$();
      this.$_refreshValue$();
    }, $_getElementId$:function() {
      return this.element[0].id;
    }, $_getThumbId$:function($index$$223$$) {
      return this.$_getElementId$() + "-thumb" + $index$$223$$;
    }, $_getBarValueId$:function() {
      return this.$_getElementId$() + "-barValue";
    }, $_getBarBackgroundId$:function() {
      return this.$_getElementId$() + "-barBack";
    }, $_getSliderWrapperId$:function() {
      return this.$_getElementId$() + "-sliderWrapper";
    }, $_createThumbs$:function() {
      var $i$$384$$, $thumbCount$$, $thumb$$1$$ = "", $thumbClasses$$ = "class\x3d'oj-slider-thumb ui-state-default' tabindex\x3d'0' role\x3d'slider'" + ("aria-valuemin \x3d '" + this.$_valueMin$() + "' ") + ("aria-valuemax \x3d '" + this.$_valueMax$() + "' ") + "\x3e\x3c/span\x3e", $thumbs$$ = [];
      $thumbCount$$ = this.$_multipleThumbs$ ? this.options.value.length : 1;
      for ($i$$384$$ = 0;$i$$384$$ < $thumbCount$$;$i$$384$$++) {
        $thumb$$1$$ = "\x3cspan " + ("id\x3d'" + this.$_getThumbId$($i$$384$$) + "' ") + $thumbClasses$$, $thumbs$$.push($thumb$$1$$);
      }
      this.$_thumbs$ = $$$$34$$($thumbs$$.join("")).appendTo(this.$_sliderContainer$);
      this.$_thumb$ = this.$_thumbs$.eq(0);
      var $that$$13$$ = this;
      this.$_thumbs$.each(function($i$$385$$) {
        $$$$34$$(this).data("oj-slider-thumb-index", $i$$385$$);
        $that$$13$$.$_isVertical$() && $$$$34$$(this).attr("aria-orientation", "vertical");
        $that$$13$$.options.disabled ? ($$$$34$$(this).attr("aria-disabled", "true"), $$$$34$$(this).removeAttr("tabindex")) : $$$$34$$(this).removeAttr("aria-disabled");
        $that$$13$$.options.readOnly ? $$$$34$$(this).attr("title", "read only") : $$$$34$$(this).removeAttr("title");
      });
    }, $_createSliderContainer$:function() {
      var $sliderWrapperId$$1$$ = this.$_getSliderWrapperId$(), $existingSliderWrapper$$ = this.$_elementWrapped$.find("#" + $sliderWrapperId$$1$$);
      $existingSliderWrapper$$.length && $existingSliderWrapper$$.remove();
      this.$_sliderContainer$ = $$$$34$$("\x3cdiv\x3e\x3c/div\x3e");
      $$$$34$$(this.$_sliderContainer$).attr("id", $sliderWrapperId$$1$$);
      this.$_sliderContainer$.addClass("oj-slider-container");
      this.element.after(this.$_sliderContainer$);
      this.$_sliderContainer$[0].style.cssText = this.$_styleFromInputTag$;
      this.$_isVertical$() && "" == this.$_sliderContainer$[0].style.height && (this.$_sliderContainer$[0].style.height = "150px");
    }, $_createBarBackground$:function() {
      var $barId$$ = this.$_getBarBackgroundId$(), $classes$$2_existingBarBack$$ = this.$_elementWrapped$.find("#" + $barId$$);
      $classes$$2_existingBarBack$$.length && $classes$$2_existingBarBack$$.remove();
      this.$_barback$ = $$$$34$$("\x3cdiv\x3e\x3c/div\x3e");
      $classes$$2_existingBarBack$$ = "oj-slider-bar";
      $classes$$2_existingBarBack$$ = this.$_isVertical$() ? $classes$$2_existingBarBack$$ + " oj-slider-vertical" : $classes$$2_existingBarBack$$ + " oj-slider-horizontal";
      $$$$34$$(this.$_barback$).attr("id", $barId$$);
      this.$_barback$.addClass($classes$$2_existingBarBack$$);
      this.$_sliderContainer$.append(this.$_barback$);
      var $that$$14$$ = this;
      this.$_barback$.on("mousedown" + $that$$14$$.eventNamespace, function($event$$467$$) {
        $that$$14$$.$_initDragging$($event$$467$$, !1);
        $that$$14$$.$_mouseStop$($event$$467$$);
        $that$$14$$.$_refreshContainment$();
        $that$$14$$.$_getActiveThumb$().addClass("ui-state-active").focus();
      });
    }, $_createRange$:function() {
      var $options$$357$$ = this.options, $classes$$3$$ = "";
      if ($options$$357$$.type) {
        this.options.value ? this.$_multipleThumbs$ && (2 === this.options.value.length ? this.options.value = this.options.value.slice(0) : (this.options.value = [this.options.value[0], this.$_valueMax$()], this.option("value", this.options.value, {_context:{$writeback$:!0, $internalSet$:!0}}))) : (this.options.value = this.$_multipleThumbs$ ? [this.$_valueMin$(), this.$_valueMax$()] : this.$_valueMin$(), this.option("value", this.options.value, {_context:{$writeback$:!0, $internalSet$:!0}}));
        if (this.$_range$ && this.$_range$.length) {
          this.$_range$.removeClass("oj-slider-range-min oj-slider-range-max").css({left:"", top:""});
        } else {
          this.$_range$ = $$$$34$$("\x3cdiv\x3e\x3c/div\x3e");
          $$$$34$$(this.$_range$).attr("id", this.$_getBarValueId$());
          this.$_sliderContainer$.append(this.$_range$);
          var $classes$$3$$ = "oj-slider-range oj-slider-bar-value", $that$$15$$ = this;
          this.$_range$.on("mousedown" + $that$$15$$.eventNamespace, function($event$$468$$) {
            $that$$15$$.$_initDragging$($event$$468$$, !1);
            $that$$15$$.$_mouseStop$($event$$468$$);
            $that$$15$$.$_refreshContainment$();
            $that$$15$$.$_getActiveThumb$().addClass("ui-state-active").focus();
          });
        }
        this.$_range$ = this.$_sliderContainer$.find("#" + this.$_getBarValueId$());
        var $newClass$$ = "";
        "fromMin" === $options$$357$$.type ? $newClass$$ = " oj-slider-range-min" : "fromMax" === $options$$357$$.type && ($newClass$$ = " oj-slider-range-max");
        this.$_range$.addClass($classes$$3$$ + $newClass$$);
      } else {
        this.$_range$ && this.$_range$.remove(), this.$_range$ = null;
      }
    }, $_setupTouch$:function($e$$101$$) {
      this.$_touchProxy$ = $oj$$35$$.$_TouchProxy$.$addTouchListeners$($e$$101$$);
    }, $_tearDownTouch$:function($e$$102$$) {
      $oj$$35$$.$_TouchProxy$.$removeTouchListeners$($e$$102$$);
    }, $_setupEvents$:function() {
      this.$_thumbs$.toArray().forEach(function($current$$18_thumb$$4$$) {
        $current$$18_thumb$$4$$ = $$$$34$$($current$$18_thumb$$4$$);
        this.$_UnregisterChildNode$($current$$18_thumb$$4$$);
        this._on($current$$18_thumb$$4$$, this.$_thumbEvents$);
        this.$_setupTouch$($current$$18_thumb$$4$$);
        this._hoverable($current$$18_thumb$$4$$);
        this._focusable($current$$18_thumb$$4$$);
      }, this);
    }, _destroy:function() {
      this.$_thumbs$.toArray().forEach(function($current$$19_thumb$$5$$) {
        $current$$19_thumb$$5$$ = $$$$34$$($current$$19_thumb$$5$$);
        this.$_tearDownTouch$($current$$19_thumb$$5$$);
      }, this);
      this.$_sliderContainer$.remove();
      $oj$$35$$.$DomUtils$.unwrap(this.element, this.$_elementWrapped$);
      this.element.css("display", this.$_inputElementOriginalDisplay$);
      this.$_RestoreAttributes$(this.element);
      return this._super();
    }, $_initDragging$:function($event$$469$$, $fromThumb$$) {
      var $position$$30$$, $normValue$$, $distance$$, $index$$227$$, $that$$16$$ = this, $o$$11$$ = this.options;
      this.$_closestThumb$ = this.$_thumb$;
      if ($o$$11$$.disabled || $o$$11$$.readOnly) {
        return!1;
      }
      !$fromThumb$$ || this.$_multipleThumbs$ ? ($position$$30$$ = {x:$event$$469$$.pageX, y:$event$$469$$.pageY}, $normValue$$ = this.$_getNormValueFromMouse$($position$$30$$)) : $normValue$$ = this.$_getNormValueFromThumb$();
      $distance$$ = this.$_valueMax$() - this.$_valueMin$() + 1;
      this.$_multipleThumbs$ && this.$_thumbs$.each(function($i$$388$$) {
        var $thisDistance$$ = Math.abs($normValue$$ - $that$$16$$.$_getMultiValues$($i$$388$$));
        if ($distance$$ > $thisDistance$$ || $distance$$ === $thisDistance$$ && ($i$$388$$ === $that$$16$$.$_lastChangedValueIndex$ || $that$$16$$.$_getMultiValues$($i$$388$$) === $o$$11$$.min)) {
          $distance$$ = $thisDistance$$, this.$_closestThumb$ = $$$$34$$(this), $index$$227$$ = $i$$388$$;
        }
      });
      this.$_dragInProgress$ = !0;
      this.$_thumbIndex$ = $index$$227$$;
      if (this.$_closestThumb$) {
        return this.$_thumbs$.hasClass("ui-state-hover") || this.$_slide$($event$$469$$, $index$$227$$, $normValue$$), this.$_getActiveThumb$().addClass("ui-state-active").focus(), !0;
      }
    }, $_mouseStart$:function() {
      return!0;
    }, $_mouseDrag$:function() {
      var $pct$$ = 100 * this.$_getFracFromThumb$();
      this.$_multipleThumbs$ ? this.$_setRangeMultiThumb$($pct$$, this.$_thumbIndex$) : this.$_setRange$($pct$$);
      return!1;
    }, $_mouseStop$:function($event$$471$$) {
      this.$_thumbs$.removeClass("ui-state-active");
      this.$_dragInProgress$ = !1;
      var $normValue$$1$$ = this.$_getNormValueFromThumb$();
      this.$_slide$($event$$471$$, this.$_thumbIndex$, $normValue$$1$$);
      this.$_change$($event$$471$$, this.$_thumbIndex$);
      this.$_thumbIndex$ = null;
      return!1;
    }, $_isVertical$:function() {
      return "vertical" === this.options.orientation;
    }, $_getOrientationAdjustedFrac$:function($frac$$) {
      1 < $frac$$ && ($frac$$ = 1);
      0 > $frac$$ && ($frac$$ = 0);
      this.$_isVertical$() && ($frac$$ = 1 - $frac$$);
      return $frac$$;
    }, $_getNormValueFromMouse$:function($position$$31_valueTotal$$) {
      var $fracMouse$$ = this.$_getFracFromMouse$($position$$31_valueTotal$$);
      $position$$31_valueTotal$$ = this.$_valueMax$() - this.$_valueMin$();
      this.$_isRTL$() && !this.$_isVertical$() && ($fracMouse$$ = 1 - $fracMouse$$);
      return this.$_trimAlignValue$(this.$_valueMin$() + $fracMouse$$ * $position$$31_valueTotal$$);
    }, $_getFracFromMouse$:function($pixelMouse$$1_position$$32$$) {
      var $fracMouse$$1_pixelTotal$$1$$;
      this.$_isVertical$() ? ($fracMouse$$1_pixelTotal$$1$$ = this.$_barback$.height(), $pixelMouse$$1_position$$32$$ = $pixelMouse$$1_position$$32$$.y - this.$_barback$.offset().top) : ($fracMouse$$1_pixelTotal$$1$$ = this.$_barback$.width(), $pixelMouse$$1_position$$32$$ = $pixelMouse$$1_position$$32$$.x - this.$_barback$.offset().left);
      return 0 == $fracMouse$$1_pixelTotal$$1$$ ? 1 : $fracMouse$$1_pixelTotal$$1$$ = this.$_getOrientationAdjustedFrac$($pixelMouse$$1_position$$32$$ / $fracMouse$$1_pixelTotal$$1$$);
    }, $_getActiveThumb$:function() {
      return this.$_multipleThumbs$ ? $$$$34$$(this.$_thumbs$[this.$_thumbIndex$]) : this.$_thumb$;
    }, $_getFracFromThumb$:function() {
      var $fracThumb_pixelTotal$$2_thumb$$7$$, $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$12$$;
      $fracThumb_pixelTotal$$2_thumb$$7$$ = this.$_getActiveThumb$();
      this.$_isVertical$() ? ($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$12$$ = $fracThumb_pixelTotal$$2_thumb$$7$$.outerHeight() / 2, $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$12$$ = $fracThumb_pixelTotal$$2_thumb$$7$$.offset().top + $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$12$$, $fracThumb_pixelTotal$$2_thumb$$7$$ = this.$_barback$.height(), $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$12$$ -= this.$_barback$.offset().top) : ($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$12$$ = 
      $fracThumb_pixelTotal$$2_thumb$$7$$.outerWidth() / 2, $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$12$$ = $fracThumb_pixelTotal$$2_thumb$$7$$.offset().left + $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$12$$, $fracThumb_pixelTotal$$2_thumb$$7$$ = this.$_barback$.width(), $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$12$$ -= this.$_barback$.offset().left);
      return 0 == $fracThumb_pixelTotal$$2_thumb$$7$$ ? 1 : $fracThumb_pixelTotal$$2_thumb$$7$$ = this.$_getOrientationAdjustedFrac$($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$12$$ / $fracThumb_pixelTotal$$2_thumb$$7$$);
    }, $_getNormValueFromThumb$:function() {
      var $fracThumb$$1$$, $valueTotal$$1$$;
      $fracThumb$$1$$ = this.$_getFracFromThumb$();
      $valueTotal$$1$$ = this.$_valueMax$() - this.$_valueMin$();
      this.$_isRTL$() && !this.$_isVertical$() && ($fracThumb$$1$$ = 1 - $fracThumb$$1$$);
      return this.$_trimAlignValue$(this.$_valueMin$() + $fracThumb$$1$$ * $valueTotal$$1$$);
    }, $_slide$:function($event$$472$$, $index$$228$$, $newVal$$1$$) {
      var $otherVal$$;
      this.$_multipleThumbs$ ? ($otherVal$$ = this.$_getMultiValues$($index$$228$$ ? 0 : 1), 2 === this.options.value.length && (0 === $index$$228$$ && $newVal$$1$$ > $otherVal$$ || 1 === $index$$228$$ && $newVal$$1$$ < $otherVal$$) && ($newVal$$1$$ = $otherVal$$), $newVal$$1$$ !== this.$_getMultiValues$($index$$228$$) && this.$_setMultiValue$($event$$472$$, $index$$228$$, $newVal$$1$$)) : $newVal$$1$$ !== this.$_getSingleValue$() && (this.$_setSingleValue$($event$$472$$, $newVal$$1$$), this.$_inputtag$ && 
      this.element.val($newVal$$1$$));
    }, $_change$:function($event$$473$$, $index$$229$$) {
      this.$_keySliding$ || this.$_dragInProgress$ || (this.$_multipleThumbs$ ? (this.$_lastChangedValues$ = this.$_getNewValues$($index$$229$$, this.$_newMultiValue$[$index$$229$$]), this.$_SetValue$(this.$_lastChangedValues$, $event$$473$$)) : this.$_SetValue$(this.$_newValue$, $event$$473$$), this.$_lastChangedValueIndex$ = $index$$229$$);
    }, $_getSingleValue$:function() {
      return this.$_keySliding$ || this.$_dragInProgress$ ? isNaN(this.$_newValue$) ? this.$_getValueAligned$() : this.$_newValue$ : this.$_getValueAligned$();
    }, $_setSingleValue$:function($event$$474$$, $newValue$$13$$) {
      this.$_newValue$ = this.$_trimAlignValue$($newValue$$13$$);
      this.$_change$($event$$474$$, 0);
      this.$_refreshValue$();
    }, $_getMultiValues$:function($index$$230$$) {
      return this.$_multipleThumbs$ ? this.$_keySliding$ || this.$_dragInProgress$ ? $index$$230$$ !== this.$_thumbIndex$ || isNaN(this.$_newMultiValue$[$index$$230$$]) ? this.$_getValuesAligned$($index$$230$$) : this.$_newMultiValue$[$index$$230$$] : this.$_getValuesAligned$($index$$230$$) : this.$_getSingleValue$();
    }, $_setMultiValue$:function($event$$475$$, $index$$231$$, $newValue$$14$$) {
      this.$_newMultiValue$[$index$$231$$] = this.$_trimAlignValue$($newValue$$14$$);
      this.$_change$($event$$475$$, $index$$231$$);
      this.$_refreshValue$();
    }, _setOption:function($key$$144$$, $coercedValue_value$$248$$, $flags$$37$$) {
      "value" === $key$$144$$ && (Array.isArray($coercedValue_value$$248$$) ? this.$_multipleThumbs$ = !0 : (this.$_multipleThumbs$ = !1, this.$_parse$($key$$144$$, $coercedValue_value$$248$$)));
      $coercedValue_value$$248$$ = "max" === $key$$144$$ || "min" === $key$$144$$ ? this.$_parse$($key$$144$$, $coercedValue_value$$248$$) : "step" === $key$$144$$ ? this.$_parseStep$($coercedValue_value$$248$$) : $coercedValue_value$$248$$;
      "disabled" != $key$$144$$ && this._super($key$$144$$, $coercedValue_value$$248$$, $flags$$37$$);
      "readOnly" === $key$$144$$ && (this.$_elementWrapped$.toggleClass("oj-read-only", !!$coercedValue_value$$248$$), this.$_setup$());
      "disabled" === $key$$144$$ && (this.$_disableDraggable$(), this.$_elementWrapped$.toggleClass("oj-disabled", !!$coercedValue_value$$248$$), this.options.disabled = $coercedValue_value$$248$$, this.$_setup$());
      switch($key$$144$$) {
        case "orientation":
          this.$_elementWrapped$.removeClass("oj-slider-horizontal oj-slider-vertical");
          this.$_barback$.removeClass("oj-slider-horizontal oj-slider-vertical");
          this.$_isVertical$() ? (this.$_elementWrapped$.addClass("oj-slider-vertical"), this.$_barback$.addClass("oj-slider-vertical")) : (this.$_elementWrapped$.addClass("oj-slider-horizontal"), this.$_barback$.addClass("oj-slider-horizontal"));
          this.$_refreshValue$();
          this.$_thumbs$.css("horizontal" === $coercedValue_value$$248$$ ? "top" : "left", "");
          this.$_makeDraggable$();
          break;
        case "value":
          this.$_refreshValue$();
          this.$_makeDraggable$();
          break;
        case "step":
        ;
        case "min":
        ;
        case "max":
          this.$_calculateNewMax$();
          this.$_refreshValue$();
          this.$_makeDraggable$();
          break;
        case "range":
          this.$_setup$();
      }
    }, $_getValueAligned$:function() {
      var $val$$50$$ = this.options.value;
      return $val$$50$$ = this.$_trimAlignValue$($val$$50$$);
    }, $_getValuesAligned$:function($index$$232$$) {
      return this.$_trimAlignValue$(this.options.value[$index$$232$$]);
    }, $_getNewValues$:function($index$$233$$, $newValue$$15$$) {
      var $vals$$, $i$$390$$;
      $vals$$ = this.options.value.slice();
      for ($i$$390$$ = 0;$i$$390$$ < $vals$$.length;$i$$390$$ += 1) {
        $vals$$[$i$$390$$] = this.$_trimAlignValue$($vals$$[$i$$390$$]);
      }
      $index$$233$$ === this.$_thumbIndex$ && ($vals$$[$index$$233$$] = $newValue$$15$$);
      return $vals$$;
    }, $_trimAlignValue$:function($alignValue_val$$52$$) {
      if ($alignValue_val$$52$$ <= this.$_valueMin$()) {
        return this.$_valueMin$();
      }
      if ($alignValue_val$$52$$ >= this.$_valueMax$()) {
        return this.$_valueMax$();
      }
      var $step$$ = 0 < this.options.step ? this.options.step : 1, $valModStep$$ = ($alignValue_val$$52$$ - this.$_valueMin$()) % $step$$;
      $alignValue_val$$52$$ -= $valModStep$$;
      2 * Math.abs($valModStep$$) >= $step$$ && ($alignValue_val$$52$$ += 0 < $valModStep$$ ? $step$$ : -$step$$);
      return parseFloat($alignValue_val$$52$$.toFixed(5));
    }, $_calculateNewMax$:function() {
      var $min$$7$$ = this.$_valueMin$();
      this.max = 0 !== (this.options.max - $min$$7$$) / this.options.step % 1 ? this.options.max - (this.options.max - $min$$7$$) % this.options.step : this.options.max;
    }, $_valueMin$:function() {
      return this.options.min;
    }, $_valueMax$:function() {
      return this.max;
    }, $_getGrid$:function() {
      var $numIntervals_pixelInterval$$;
      $numIntervals_pixelInterval$$ = 0 < this.options.step ? (this.$_valueMax$() - this.$_valueMin$()) / this.options.step : 100;
      $numIntervals_pixelInterval$$ = (this.$_isVertical$() ? this.$_barback$.height() : this.$_barback$.width()) / $numIntervals_pixelInterval$$;
      1 > $numIntervals_pixelInterval$$ && ($numIntervals_pixelInterval$$ = 1);
      return this.$_isVertical$() ? [1, $numIntervals_pixelInterval$$] : [$numIntervals_pixelInterval$$, 1];
    }, $_getThumbsValueFrac$:function($index$$234$$) {
      return(this.$_getMultiValues$($index$$234$$) - this.$_valueMin$()) / (this.$_valueMax$() - this.$_valueMin$());
    }, $_refreshValue$:function() {
      var $valPercent$$, $value$$249$$, $valueMin$$, $valueMax$$;
      this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$20$$, $i$$391$$) {
        var $thumb$$8$$ = $$$$34$$($current$$20$$);
        $valPercent$$ = 100 * this.$_getThumbsValueFrac$($i$$391$$);
        this.$_isRTL$() && !this.$_isVertical$() && ($valPercent$$ = 100 - $valPercent$$);
        this.$_isVertical$() ? $$$$34$$($thumb$$8$$).css({top:100 - $valPercent$$ + "%"}) : $$$$34$$($thumb$$8$$).css({left:$valPercent$$ + "%"});
        $$$$34$$($thumb$$8$$).attr("aria-valuenow", this.$_getMultiValues$($i$$391$$));
        this.$_setRangeMultiThumb$($valPercent$$, $i$$391$$);
      }, this) : ($value$$249$$ = this.$_getValueAligned$(), $valueMin$$ = this.$_valueMin$(), $valueMax$$ = this.$_valueMax$(), $valPercent$$ = $valueMax$$ !== $valueMin$$ ? ($value$$249$$ - $valueMin$$) / ($valueMax$$ - $valueMin$$) * 100 : 0, this.$_isRTL$() && !this.$_isVertical$() && ($valPercent$$ = 100 - $valPercent$$), this.$_isVertical$() ? this.$_thumb$.css({top:100 - $valPercent$$ + "%"}) : this.$_thumb$.css({left:$valPercent$$ + "%"}), $$$$34$$(this.$_thumb$).attr("aria-valuenow", $value$$249$$), 
      this.$_setRange$($valPercent$$));
    }, $_setRange$:function($val$$53$$) {
      var $oRange$$ = this.options.type;
      this.$_isVertical$() ? ("fromMin" === $oRange$$ && this.$_range$.css({height:$val$$53$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({height:100 - $val$$53$$ + "%"})) : this.$_isRTL$() ? ("fromMin" === $oRange$$ && this.$_range$.css({width:100 - $val$$53$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({width:$val$$53$$ + "%"})) : ("fromMin" === $oRange$$ && this.$_range$.css({width:$val$$53$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({width:100 - $val$$53$$ + "%"}));
    }, $_setRangeMultiThumb$:function($val$$54$$, $index$$235$$) {
      var $id$$42_thumb1Pct$$ = this.$_range$.attr("id");
      if (0 == $index$$235$$) {
        switch($id$$42_thumb1Pct$$ = 100 * this.$_getThumbsValueFrac$(1), this.options.type) {
          case "fromMin":
            this.$_isVertical$() ? this.$_range$.css({height:$val$$54$$ + "%"}) : this.$_range$.css({width:$val$$54$$ + "%"});
            break;
          case "range":
            this.$_isVertical$() ? (this.$_range$.css({top:100 - $id$$42_thumb1Pct$$ + "%"}), this.$_range$.css({height:$id$$42_thumb1Pct$$ - $val$$54$$ + "%"})) : this.$_isRTL$() ? (this.$_range$.css({left:100 - $id$$42_thumb1Pct$$ + "%"}), this.$_range$.css({width:$id$$42_thumb1Pct$$ - (100 - $val$$54$$) + "%"})) : (this.$_range$.css({left:$val$$54$$ + "%"}), this.$_range$.css({width:$id$$42_thumb1Pct$$ - $val$$54$$ + "%"}));
        }
      } else {
        var $thumb0Pct$$ = 100 * this.$_getThumbsValueFrac$(0);
        switch(this.options.type) {
          case "fromMax":
            this.$_isVertical$() ? this.$_range$.css({height:100 - $val$$54$$ + "%"}) : this.$_range$.css({width:100 - $val$$54$$ + "%"});
            break;
          case "range":
            this.$_isVertical$() ? document.getElementById($id$$42_thumb1Pct$$) && (this.$_range$.css({top:100 - $val$$54$$ + "%"}), this.$_range$.css({height:$val$$54$$ - $thumb0Pct$$ + "%"})) : this.$_isRTL$() ? document.getElementById($id$$42_thumb1Pct$$) && (this.$_range$.css({left:$val$$54$$ + "%"}), this.$_range$.css({width:-$val$$54$$ + 100 - $thumb0Pct$$ + "%"})) : document.getElementById($id$$42_thumb1Pct$$) && this.$_range$.css({width:$val$$54$$ - parseInt(document.getElementById($id$$42_thumb1Pct$$).style.left, 
            10) + "%"});
        }
      }
    }, $_thumbEvents$:{keydown:function($event$$476$$) {
      var $curVal_tempVal$$, $newVal$$2$$, $step$$1$$, $index$$236$$ = $$$$34$$($event$$476$$.target).data("oj-slider-thumb-index");
      this.$_thumbIndex$ = $index$$236$$;
      switch($event$$476$$.keyCode) {
        case $$$$34$$.ui.keyCode.HOME:
        ;
        case $$$$34$$.ui.keyCode.END:
        ;
        case $$$$34$$.ui.keyCode.PAGE_UP:
        ;
        case $$$$34$$.ui.keyCode.PAGE_DOWN:
        ;
        case $$$$34$$.ui.keyCode.UP:
        ;
        case $$$$34$$.ui.keyCode.RIGHT:
        ;
        case $$$$34$$.ui.keyCode.DOWN:
        ;
        case $$$$34$$.ui.keyCode.LEFT:
          $event$$476$$.preventDefault(), this.$_keySliding$ || (this.$_keySliding$ = !0, $$$$34$$($event$$476$$.target).addClass("ui-state-active"));
      }
      $step$$1$$ = this.options.step;
      $curVal_tempVal$$ = this.$_multipleThumbs$ ? $newVal$$2$$ = this.$_getMultiValues$($index$$236$$) : $newVal$$2$$ = this.$_getSingleValue$();
      switch($event$$476$$.keyCode) {
        case $$$$34$$.ui.keyCode.HOME:
          $newVal$$2$$ = this.$_valueMin$();
          break;
        case $$$$34$$.ui.keyCode.END:
          $newVal$$2$$ = this.$_valueMax$();
          break;
        case $$$$34$$.ui.keyCode.PAGE_UP:
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$ + (this.$_valueMax$() - this.$_valueMin$()) / this.$_numPages$);
          break;
        case $$$$34$$.ui.keyCode.PAGE_DOWN:
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$ - (this.$_valueMax$() - this.$_valueMin$()) / this.$_numPages$);
          break;
        case $$$$34$$.ui.keyCode.UP:
        ;
        case $$$$34$$.ui.keyCode.RIGHT:
          if (!this.$_isRTL$() || this.$_isVertical$()) {
            if ($curVal_tempVal$$ === this.$_valueMax$()) {
              return;
            }
            $curVal_tempVal$$ += $step$$1$$;
          } else {
            if ($curVal_tempVal$$ === this.$_valueMin$()) {
              return;
            }
            $curVal_tempVal$$ -= $step$$1$$;
          }
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$);
          break;
        case $$$$34$$.ui.keyCode.DOWN:
        ;
        case $$$$34$$.ui.keyCode.LEFT:
          if (!this.$_isRTL$() || this.$_isVertical$()) {
            if ($curVal_tempVal$$ === this.$_valueMin$()) {
              return;
            }
            $curVal_tempVal$$ -= $step$$1$$;
          } else {
            if ($curVal_tempVal$$ === this.$_valueMax$()) {
              return;
            }
            $curVal_tempVal$$ += $step$$1$$;
          }
          $newVal$$2$$ = this.$_trimAlignValue$($curVal_tempVal$$);
      }
      this.$_slide$($event$$476$$, $index$$236$$, $newVal$$2$$);
    }, keyup:function($event$$477$$) {
      var $index$$237$$ = $$$$34$$($event$$477$$.target).data("oj-slider-thumb-index");
      this.$_thumbIndex$ = $index$$237$$;
      this.$_keySliding$ && (this.$_keySliding$ = !1, this.$_change$($event$$477$$, $index$$237$$), $$$$34$$($event$$477$$.target).removeClass("ui-state-active"));
      this.$_thumbIndex$ = null;
      this.$_refreshContainment$();
    }}, $_InitOptions$:function($originalDefaults$$11$$, $constructorOptions$$13$$) {
      var $opts$$35$$ = this.options, $self$$160$$ = this;
      this._superApply(arguments);
      $oj$$35$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"placeholder", $defaultOptionValue$:""}, {$attribute$:"value", $defaultOptionValue$:null}, {$attribute$:"readonly", option:"readOnly", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"required", $defaultOptionValue$:!1, $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title", $defaultOptionValue$:""}, {$attribute$:"min", $defaultOptionValue$:null}, 
      {$attribute$:"max", $defaultOptionValue$:null}, {$attribute$:"step", $defaultOptionValue$:1}], $constructorOptions$$13$$, this, function($initializedOptions$$1$$) {
        for (var $toParse$$ = ["value", "step", "min", "max"], $i$$392$$ = 0;$i$$392$$ < $toParse$$.length;$i$$392$$++) {
          var $opt$$20$$ = $toParse$$[$i$$392$$], $value$$250$$ = $opt$$20$$ in $initializedOptions$$1$$ ? $initializedOptions$$1$$[$opt$$20$$] : $opts$$35$$[$opt$$20$$];
          null != $value$$250$$ && ("step" === $opt$$20$$ ? $initializedOptions$$1$$[$opt$$20$$] = $self$$160$$.$_parseStep$($value$$250$$) : "min" === $opt$$20$$ || "max" === $opt$$20$$ ? $initializedOptions$$1$$[$opt$$20$$] = $self$$160$$.$_parse$($opt$$20$$, $value$$250$$) : "value" === $opt$$20$$ && (Array.isArray($value$$250$$) ? $initializedOptions$$1$$[$opt$$20$$] = $value$$250$$ : $initializedOptions$$1$$[$opt$$20$$] = $self$$160$$.$_parse$($opt$$20$$, $value$$250$$)));
        }
      });
      if (void 0 === $opts$$35$$.value) {
        throw Error(this.$getTranslatedString$("noValue"));
      }
      if (null != $opts$$35$$.min && null != $opts$$35$$.max) {
        if ($opts$$35$$.max < $opts$$35$$.min) {
          throw Error(this.$getTranslatedString$("maxMin"));
        }
        if ($opts$$35$$.value < $opts$$35$$.min || $opts$$35$$.value > $opts$$35$$.max) {
          throw Error(this.$getTranslatedString$("valueRange"));
        }
      }
    }, getNodeBySubId:function($barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$) {
      if (null == $barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$) {
        return this.element ? this.element[0] : null;
      }
      $barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$ = $barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$.subId;
      return "oj-slider-thumb-0" === $barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$ ? ($barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$ = "#" + this.$_getThumbId$(0), this.widget().find($barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$)[0]) : "oj-slider-thumb-1" === $barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$ ? ($barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$ = "#" + this.$_getThumbId$(1), this.widget().find($barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$)[0]) : 
      "oj-slider-bar" === $barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$ ? ($barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$ = "#" + this.$_getBarBackgroundId$(), this.widget().find($barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$)[0]) : "oj-slider-bar-value" === $barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$ ? ($barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$ = "#" + this.$_getBarValueId$(), this.widget().find($barId$$1_barValueId_locator$$38_subId$$37_thumbId$$4$$)[0]) : 
      null;
    }, getSubIdByNode:function($node$$62$$) {
      if (null != $node$$62$$) {
        if ($node$$62$$.id === this.$_getThumbId$(0) && $$$$34$$($node$$62$$).hasClass("oj-slider-thumb")) {
          return{subId:"oj-slider-thumb-0"};
        }
        if ($node$$62$$.id === this.$_getThumbId$(1) && $$$$34$$($node$$62$$).hasClass("oj-slider-thumb")) {
          return{subId:"oj-slider-thumb-1"};
        }
        if ($node$$62$$.id === this.$_getBarBackgroundId$() && $$$$34$$($node$$62$$).hasClass("oj-slider-bar")) {
          return{subId:"oj-slider-bar"};
        }
        if ($node$$62$$.id === this.$_getBarValueId$() && $$$$34$$($node$$62$$).hasClass("oj-slider-bar-value")) {
          return{subId:"oj-slider-bar-value"};
        }
      }
      return null;
    }, _GetDefaultStyleClass:function() {
      return "oj-slider";
    }, $_parse$:function($option$$29$$, $val$$55$$) {
      var $returnValue$$2$$;
      $returnValue$$2$$ = null !== $val$$55$$ ? +$val$$55$$ : $val$$55$$;
      if (isNaN($returnValue$$2$$)) {
        throw Error(this.$getTranslatedString$("optionNum", {option:$option$$29$$}));
      }
      return $returnValue$$2$$;
    }, $_parseStep$:function($parsedStep_val$$56$$) {
      if (null === $parsedStep_val$$56$$) {
        return 1;
      }
      $parsedStep_val$$56$$ = this.$_parse$("step", $parsedStep_val$$56$$);
      if (0 >= $parsedStep_val$$56$$) {
        throw Error(this.$getTranslatedString$("invalidStep"));
      }
      if (null === $parsedStep_val$$56$$ || 0 >= $parsedStep_val$$56$$) {
        $parsedStep_val$$56$$ = 1;
      }
      return $parsedStep_val$$56$$;
    }, $_getEndInterval$:function() {
      return this.$_barback$.offset().left + this.$_barback$.width();
    }, $_getStartInterval$:function() {
      return this.$_barback$.offset().left;
    }, $_getContainmentArrayRange$:function($index$$238_valFrac$$) {
      var $c$$48_y2$$1$$ = this.$_getContainmentArray$(), $x1$$3$$ = $c$$48_y2$$1$$[0], $y1$$3$$ = $c$$48_y2$$1$$[1], $x2$$1$$ = $c$$48_y2$$1$$[2], $c$$48_y2$$1$$ = $c$$48_y2$$1$$[3];
      this.$_thumb$.outerHeight();
      switch($index$$238_valFrac$$) {
        case 0:
          $index$$238_valFrac$$ = this.$_getThumbsValueFrac$(1);
          this.$_isVertical$() ? ($c$$48_y2$$1$$ = this.$_barback$.offset().top + this.$_barback$.height(), $y1$$3$$ = this.$_barback$.offset().top + (1 - $index$$238_valFrac$$) * this.$_barback$.height()) : this.$_isRTL$() ? ($x2$$1$$ = this.$_getEndInterval$(), $x1$$3$$ = $x2$$1$$ - $index$$238_valFrac$$ * this.$_barback$.width()) : $x2$$1$$ = $x1$$3$$ + $index$$238_valFrac$$ * this.$_barback$.width();
          break;
        case 1:
          $index$$238_valFrac$$ = this.$_getThumbsValueFrac$(0), this.$_isVertical$() ? ($y1$$3$$ = this.$_barback$.offset().top, $c$$48_y2$$1$$ = $y1$$3$$ + (1 - $index$$238_valFrac$$) * this.$_barback$.height()) : this.$_isRTL$() ? ($x1$$3$$ = this.$_getStartInterval$(), $x2$$1$$ = $x1$$3$$ + (1 - $index$$238_valFrac$$) * this.$_barback$.width()) : $x1$$3$$ = this.$_barback$.offset().left + $index$$238_valFrac$$ * this.$_barback$.width();
      }
      return[$x1$$3$$, $y1$$3$$, $x2$$1$$, $c$$48_y2$$1$$];
    }, $_getContainmentArray$:function() {
      var $x1$$4$$ = this.$_barback$.offset().left, $y1$$4$$;
      $y1$$4$$ = this.$_barback$.offset().top;
      var $x2$$2$$ = $x1$$4$$ + this.$_barback$.width(), $y2$$2$$ = $y1$$4$$ + this.$_barback$.height();
      return[$x1$$4$$, $y1$$4$$, $x2$$2$$, $y2$$2$$];
    }, $_callDraggable$:function($thumbParam$$, $containmentArray$$) {
      var $g$$1$$ = this.$_getGrid$(), $that$$17$$ = this;
      $thumbParam$$.draggable({axis:this.$_isVertical$() ? "y" : "x", containment:$containmentArray$$, grid:$g$$1$$, disabled:!1, start:function($event$$478$$) {
        $that$$17$$.$_initDragging$($event$$478$$, !0);
      }, drag:function($event$$479$$) {
        $that$$17$$.$_mouseDrag$($event$$479$$);
      }, stop:function($event$$480$$) {
        $that$$17$$.$_mouseStop$($event$$480$$);
        $that$$17$$.$_refreshContainment$();
      }});
    }, $_refreshContainment$:function() {
      var $containmentArray$$1$$;
      this.$_multipleThumbs$ && this.$_thumbs$.toArray().forEach(function($current$$21$$, $i$$393$$) {
        var $thumb$$9$$ = $$$$34$$($current$$21$$);
        $containmentArray$$1$$ = this.$_getContainmentArrayRange$($i$$393$$);
        $thumb$$9$$.draggable("option", "containment", $containmentArray$$1$$);
      }, this);
    }, $_makeDraggable$:function() {
      if (!this.options.disabled) {
        var $containmentArray$$2$$;
        this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$22$$, $i$$394$$) {
          var $thumb$$10$$ = $$$$34$$($current$$22$$);
          $containmentArray$$2$$ = this.$_getContainmentArrayRange$($i$$394$$);
          this.$_callDraggable$($thumb$$10$$, $containmentArray$$2$$);
        }, this) : ($containmentArray$$2$$ = this.$_getContainmentArray$(), this.$_callDraggable$(this.$_thumb$, $containmentArray$$2$$));
      }
    }, $_disableDraggable$:function() {
      this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$23_thumb$$11$$) {
        $current$$23_thumb$$11$$ = $$$$34$$($current$$23_thumb$$11$$);
        $current$$23_thumb$$11$$.is(".ui-draggable") && $current$$23_thumb$$11$$.draggable("disable");
      }, this) : this.$_thumb$.is(".ui-draggable") && this.$_thumb$.draggable("disable");
    }});
  })();
});
