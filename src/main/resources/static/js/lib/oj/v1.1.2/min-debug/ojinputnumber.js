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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojbutton"], function($oj$$48$$, $$$$47$$) {
  $oj$$48$$.$__registerWidget$("oj.ojInputNumber", $$$$47$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:$oj$$48$$.$Validation$.$converterFactory$($oj$$48$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER).createConverter(), max:null, min:null, placeholder:void 0, rawValue:void 0, readOnly:!1, step:1, value:null}, getNodeBySubId:function($locator$$56$$) {
    var $node$$115$$ = this._superApply(arguments), $subId$$53$$;
    $node$$115$$ || ($subId$$53$$ = $locator$$56$$.subId, "oj-inputnumber-up" === $subId$$53$$ && ($node$$115$$ = this.widget().find(".oj-inputnumber-up")[0]), "oj-inputnumber-down" === $subId$$53$$ && ($node$$115$$ = this.widget().find(".oj-inputnumber-down")[0]), "oj-inputnumber-input" === $subId$$53$$ && ($node$$115$$ = this.widget().find(".oj-inputnumber-input")[0]));
    return $node$$115$$ || null;
  }, refresh:function() {
    this._super();
    this.$_setup$();
  }, stepDown:function($steps$$) {
    this.$_step$($steps$$, !1);
  }, stepUp:function($steps$$1$$) {
    this.$_step$($steps$$1$$, !0);
  }, widget:function() {
    return this.$uiInputNumber$;
  }, $_InitOptions$:function($originalDefaults$$14$$, $constructorOptions$$16$$) {
    var $opts$$40$$ = this.options, $self$$188$$ = this;
    this._superApply(arguments);
    $oj$$48$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"placeholder", $defaultOptionValue$:""}, {$attribute$:"value", $defaultOptionValue$:null}, {$attribute$:"readonly", option:"readOnly", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"required", $defaultOptionValue$:!1, $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title", $defaultOptionValue$:""}, {$attribute$:"min", $defaultOptionValue$:null}, 
    {$attribute$:"max", $defaultOptionValue$:null}, {$attribute$:"step", $defaultOptionValue$:1}], $constructorOptions$$16$$, this, function($initializedOptions$$2$$) {
      for (var $toParse$$1$$ = ["value", "step", "min", "max"], $i$$431$$ = 0;$i$$431$$ < $toParse$$1$$.length;$i$$431$$++) {
        var $opt$$21$$ = $toParse$$1$$[$i$$431$$], $value$$260$$ = $opt$$21$$ in $initializedOptions$$2$$ ? $initializedOptions$$2$$[$opt$$21$$] : $opts$$40$$[$opt$$21$$];
        null != $value$$260$$ && ($initializedOptions$$2$$[$opt$$21$$] = "step" === $opt$$21$$ ? $self$$188$$.$_parseStep$($value$$260$$) : $self$$188$$.$_parse$($opt$$21$$, $value$$260$$));
      }
    });
    if (void 0 === $opts$$40$$.value) {
      throw Error("ojInputNumber has no value");
    }
    if (null != $opts$$40$$.min && null != $opts$$40$$.max && $opts$$40$$.max < $opts$$40$$.min) {
      throw Error("ojInputNumber's max must not be less than min");
    }
  }, _ComponentCreate:function() {
    var $node$$116$$ = this.element;
    this._super();
    this.$_draw$();
    $node$$116$$.removeAttr("pattern");
    this.$_inputNumberDefaultValidators$ = {};
    this.$_setup$();
    this._on(this.$_events$);
  }, $_AfterSetOption$:function($option$$31$$, $previous$$1$$, $flags$$43$$) {
    this._superApply(arguments);
    switch($option$$31$$) {
      case "min":
      ;
      case "max":
        this.$_Refresh$($option$$31$$, this.options[$option$$31$$]);
    }
  }, _setOption:function($key$$170$$, $value$$261$$, $flags$$44$$) {
    var $coercedValue$$1$$;
    $coercedValue$$1$$ = "value" === $key$$170$$ || "max" === $key$$170$$ || "min" === $key$$170$$ ? this.$_parse$($key$$170$$, $value$$261$$) : "step" === $key$$170$$ ? this.$_parseStep$($value$$261$$) : $value$$261$$;
    this._super($key$$170$$, $coercedValue$$1$$, $flags$$44$$);
    if ("max" === $key$$170$$ || "min" === $key$$170$$) {
      this.$_createRangeValidator$(), this.$_AfterSetOptionValidators$();
    }
    "disabled" === $key$$170$$ && this.element.prop("disabled", !!$value$$261$$);
    "readOnly" === $key$$170$$ && (this.element.prop("readonly", !!$value$$261$$), this.$_refreshStateTheming$("readOnly", this.options.readOnly), this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly));
  }, _destroy:function() {
    var $ret$$60$$ = this._super();
    this.$upButton$.ojButton("destroy");
    this.$downButton$.ojButton("destroy");
    this.$upButton$.remove();
    this.$downButton$.remove();
    this.$downButton$ = this.$upButton$ = null;
    $oj$$48$$.$DomUtils$.unwrap(this.element, this.$uiInputNumber$);
    clearTimeout(this.$timer$);
    return $ret$$60$$;
  }, $_Refresh$:function($name$$111$$, $value$$262$$, $forceDisplayValueRefresh$$1$$) {
    this._superApply(arguments);
    var $valueMinMax$$ = "value" === $name$$111$$ || "max" === $name$$111$$ || "min" === $name$$111$$, $valueMinMaxDisabled$$ = $valueMinMax$$ || "disabled" === $name$$111$$, $valuenow$$;
    $valueMinMaxDisabled$$ && ($valuenow$$ = this.$_getConvertedDisplayValue$());
    $valueMinMax$$ && this.$_refreshAriaMinMaxValue$($valuenow$$);
    $valueMinMaxDisabled$$ && this.$_updateButtons$($valuenow$$);
  }, $_GetConverter$:function() {
    return this.options.converter ? this._superApply(arguments) : $$$$47$$.oj.ojInputNumber.prototype.options.converter;
  }, $_GetImplicitValidators$:function() {
    var $ret$$61$$ = this._superApply(arguments);
    null == this.options.min && null == this.options.max || this.$_createRangeValidator$();
    return $$$$47$$.extend(this.$_inputNumberDefaultValidators$, $ret$$61$$);
  }, _GetDefaultStyleClass:function() {
    return "oj-inputnumber";
  }, $_events$:{input:function($event$$550$$) {
    this.$_SetRawValue$($event$$550$$, this.element.val());
  }, keydown:function($event$$551$$) {
    $event$$551$$.keyCode === $$$$47$$.ui.keyCode.ENTER ? (this.$_blurEnterSetValue$($event$$551$$), $event$$551$$.preventDefault()) : this.$_start$() && this.$_keydown$($event$$551$$) && $event$$551$$.preventDefault();
  }, keyup:function($event$$552$$) {
    this.$_stop$($event$$552$$);
  }, focus:function() {
    this.$previous$ = this.element.val();
  }, blur:function($event$$553$$) {
    this.$cancelBlur$ ? delete this.$cancelBlur$ : this.$_blurEnterSetValue$($event$$553$$);
  }, "mousedown .oj-inputnumber-button":function($event$$554$$) {
    function $checkFocus$$1$$() {
      this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.$previous$ = $previous$$2$$, this._delay(function() {
        this.$previous$ = $previous$$2$$;
      }));
    }
    var $previous$$2$$;
    $previous$$2$$ = this.element[0] === this.document[0].activeElement ? this.$previous$ : this.element.val();
    $event$$554$$.preventDefault();
    $checkFocus$$1$$.call(this);
    this.$cancelBlur$ = !0;
    this._delay(function() {
      delete this.$cancelBlur$;
      $checkFocus$$1$$.call(this);
    });
    this.$_start$();
    this.$_repeat$(null, $$$$47$$($event$$554$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$554$$);
  }, "mouseup .oj-inputnumber-button":function($event$$555$$) {
    this.$_stop$($event$$555$$);
  }, "mouseenter .oj-inputnumber-button":function($event$$556$$) {
    $$$$47$$($event$$556$$.currentTarget).hasClass("oj-active") && (this.$_start$(), this.$_repeat$(null, $$$$47$$($event$$556$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$556$$));
  }, "mouseleave .oj-inputnumber-button":function($event$$557$$) {
    this.$_stop$($event$$557$$);
  }}, $_BUNDLE_KEY$:{$_TOOLTIP_DECREMENT$:"tooltipDecrement", $_TOOLTIP_INCREMENT$:"tooltipIncrement"}, $_OPTION_TO_CSS_MAPPING$:{readOnly:"oj-read-only"}, $_setup$:function() {
    var $incrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_INCREMENT$), $decrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_DECREMENT$), $valuenow$$1$$ = this.$_getConvertedDisplayValue$();
    this.$upButton$.ojButton({label:$incrementString$$});
    this.$downButton$.ojButton({label:$decrementString$$});
    this.$_refreshAriaMinMaxValue$($valuenow$$1$$);
    this.$_updateButtons$($valuenow$$1$$);
    "boolean" === typeof this.options.readOnly && this.element.prop("readonly", this.options.readOnly);
    this.$_refreshStateTheming$("readOnly", this.options.readOnly);
    this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly);
  }, $_createOjButton$:function() {
    this.$upButton$ = this.$uiInputNumber$.find(".oj-inputnumber-up").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-up-icon"}});
    this.$downButton$ = this.$uiInputNumber$.find(".oj-inputnumber-down").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-down-icon"}});
  }, $_draw$:function() {
    var $element$$114$$ = this.element, $uiInputNumber$$ = this.$uiInputNumber$ = $element$$114$$.addClass("oj-inputnumber-input").wrap("\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e").parent().append("\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e").wrap("\x3cdiv class\x3d'oj-inputnumber oj-component'\x3e\x3c/div\x3e").parent();
    this.saveType = $element$$114$$.prop("type");
    $element$$114$$.attr("type", "text");
    $uiInputNumber$$.find(".oj-inputnumber-button").attr("tabIndex", "-1").attr("aria-hidden", !0);
    this.$_createOjButton$();
  }, $_keydown$:function($event$$558$$) {
    var $keyCode$$20$$ = $$$$47$$.ui.keyCode;
    switch($event$$558$$.keyCode) {
      case $keyCode$$20$$.UP:
        return this.$_repeat$(null, 1, $event$$558$$), !0;
      case $keyCode$$20$$.DOWN:
        return this.$_repeat$(null, -1, $event$$558$$), !0;
    }
    return!1;
  }, $_uiInputNumberHtml$:function() {
    return "\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e";
  }, $_buttonHtml$:function() {
    return "\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e";
  }, $_start$:function() {
    return this.$spinning$ = !0;
  }, $_repeat$:function($i$$432$$, $steps$$2$$, $event$$559$$) {
    $i$$432$$ = $i$$432$$ || 500;
    clearTimeout(this.$timer$);
    this.$timer$ = this._delay(function() {
      this.$_repeat$(40, $steps$$2$$, $event$$559$$);
    }, $i$$432$$);
    this.$_spin$($steps$$2$$ * this.options.step, $event$$559$$);
  }, $_spin$:function($step$$2$$, $event$$560$$) {
    var $value$$263$$ = this.$_getConvertedDisplayValue$(), $value$$263$$ = this.$_adjustValue$($value$$263$$, $step$$2$$);
    this.$_SetValue$($value$$263$$, $event$$560$$, this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$);
  }, $_precision$:function() {
    var $opts$$41_precision$$1$$ = this.options, $minOpt$$ = $opts$$41_precision$$1$$.min, $opts$$41_precision$$1$$ = this.$_precisionOf$($opts$$41_precision$$1$$.step);
    null != $minOpt$$ && ($opts$$41_precision$$1$$ = Math.max($opts$$41_precision$$1$$, this.$_precisionOf$($minOpt$$)));
    return $opts$$41_precision$$1$$;
  }, $_precisionOf$:function($num$$9_str$$24$$) {
    $num$$9_str$$24$$ = $num$$9_str$$24$$.toString();
    var $decimal$$ = $num$$9_str$$24$$.indexOf(".");
    return-1 === $decimal$$ ? 0 : $num$$9_str$$24$$.length - $decimal$$ - 1;
  }, $_adjustValue$:function($value$$264$$, $step$$3$$) {
    var $aboveMin_newValue$$16$$, $stepBase$$, $options$$373_precision$$2$$ = this.options, $minOpt$$1_validMax$$ = $options$$373_precision$$2$$.min, $stepOpt$$ = $options$$373_precision$$2$$.step, $maxOpt$$ = $options$$373_precision$$2$$.max, $options$$373_precision$$2$$ = this.$_precision$();
    $stepBase$$ = null != $minOpt$$1_validMax$$ ? $minOpt$$1_validMax$$ : 0;
    $aboveMin_newValue$$16$$ = $value$$264$$ - $stepBase$$;
    var $rounded$$1$$ = Math.round($aboveMin_newValue$$16$$ / $stepOpt$$) * $stepOpt$$, $rounded$$1$$ = parseFloat($rounded$$1$$.toFixed($options$$373_precision$$2$$));
    $rounded$$1$$ !== $aboveMin_newValue$$16$$ ? ($aboveMin_newValue$$16$$ = 0 > $step$$3$$ ? Math.ceil($aboveMin_newValue$$16$$ / $stepOpt$$) * $stepOpt$$ : Math.floor($aboveMin_newValue$$16$$ / $stepOpt$$) * $stepOpt$$, $aboveMin_newValue$$16$$ = $stepBase$$ + $aboveMin_newValue$$16$$ + $step$$3$$) : $aboveMin_newValue$$16$$ = $value$$264$$ + $step$$3$$;
    $aboveMin_newValue$$16$$ = parseFloat($aboveMin_newValue$$16$$.toFixed($options$$373_precision$$2$$));
    return null != $minOpt$$1_validMax$$ && $aboveMin_newValue$$16$$ < $minOpt$$1_validMax$$ ? $minOpt$$1_validMax$$ : null != $maxOpt$$ && $aboveMin_newValue$$16$$ > $maxOpt$$ ? ($minOpt$$1_validMax$$ = Math.floor(($maxOpt$$ - $stepBase$$) / $stepOpt$$) * $stepOpt$$ + $stepBase$$, $minOpt$$1_validMax$$ = parseFloat($minOpt$$1_validMax$$.toFixed($options$$373_precision$$2$$))) : $aboveMin_newValue$$16$$;
  }, $_stop$:function() {
    this.$spinning$ && (clearTimeout(this.$timer$), this.$spinning$ = !1);
  }, $_updateButtons$:function($valuenow$$2$$) {
    var $options$$374$$ = this.options, $minOpt$$2$$ = $options$$374$$.min, $maxOpt$$1$$ = $options$$374$$.max;
    if (this.$uiInputNumber$) {
      var $downButton$$ = this.$downButton$, $upButton$$ = this.$upButton$;
      $options$$374$$.disabled || void 0 === $valuenow$$2$$ ? ($downButton$$.ojButton("disable"), $upButton$$.ojButton("disable")) : null != $maxOpt$$1$$ && $valuenow$$2$$ >= $maxOpt$$1$$ ? ($downButton$$.ojButton("enable"), $upButton$$.ojButton("disable")) : (null != $minOpt$$2$$ && $valuenow$$2$$ <= $minOpt$$2$$ ? $downButton$$.ojButton("disable") : $downButton$$.ojButton("enable"), $upButton$$.ojButton("enable"));
    }
  }, $_getConvertedDisplayValue$:function() {
    var $value$$265$$, $displayValue$$9$$;
    try {
      $displayValue$$9$$ = this.$_GetDisplayValue$() || 0, $value$$265$$ = this.$_parseValue$($displayValue$$9$$);
    } catch ($e$$147$$) {
      $value$$265$$ = void 0;
    }
    return $value$$265$$;
  }, $_blurEnterSetValue$:function($event$$562$$) {
    var $val$$73$$ = this.element.val();
    this.$_stop$();
    var $valuenow$$3$$ = this.$_getConvertedDisplayValue$();
    this.$_refreshAriaMinMaxValue$($valuenow$$3$$);
    this.$_updateButtons$($valuenow$$3$$);
    this.$_SetValue$($val$$73$$, $event$$562$$);
  }, $_createRangeValidator$:function() {
    var $hint$$8_options$$375_translations$$20$$ = this.options, $minOpt$$3_numberRangeOptions$$ = $hint$$8_options$$375_translations$$20$$.min, $maxOpt$$2$$ = $hint$$8_options$$375_translations$$20$$.max, $messageSummary$$1_reqTrans$$1$$ = ($hint$$8_options$$375_translations$$20$$ = $hint$$8_options$$375_translations$$20$$.translations) ? $hint$$8_options$$375_translations$$20$$.numberRange || {} : {}, $hintMin$$, $hintMax$$, $hintInRange$$3$$, $messageDetailRangeOverflow$$2$$, $messageDetailRangeUnderflow$$2$$, 
    $messageSummaryRangeOverflow$$2$$, $messageSummaryRangeUnderflow$$2$$, $hint$$8_options$$375_translations$$20$$ = $messageSummary$$1_reqTrans$$1$$.hint || {}, $messageDetail$$1$$ = $messageSummary$$1_reqTrans$$1$$.messageDetail || {}, $messageSummary$$1_reqTrans$$1$$ = $messageSummary$$1_reqTrans$$1$$.messageSummary || {};
    null !== $hint$$8_options$$375_translations$$20$$ && ($hintMin$$ = $hint$$8_options$$375_translations$$20$$.min || null, $hintMax$$ = $hint$$8_options$$375_translations$$20$$.max || null, $hintInRange$$3$$ = $hint$$8_options$$375_translations$$20$$.inRange || null);
    null !== $messageDetail$$1$$ && ($messageDetailRangeOverflow$$2$$ = $messageDetail$$1$$.rangeOverflow || null, $messageDetailRangeUnderflow$$2$$ = $messageDetail$$1$$.rangeUnderflow || null);
    null !== $messageSummary$$1_reqTrans$$1$$ && ($messageSummaryRangeOverflow$$2$$ = $messageSummary$$1_reqTrans$$1$$.rangeOverflow || null, $messageSummaryRangeUnderflow$$2$$ = $messageSummary$$1_reqTrans$$1$$.rangeUnderflow || null);
    $minOpt$$3_numberRangeOptions$$ = {min:null != $minOpt$$3_numberRangeOptions$$ ? $minOpt$$3_numberRangeOptions$$ : void 0, max:null != $maxOpt$$2$$ ? $maxOpt$$2$$ : void 0, hint:{min:$hintMin$$ || null, max:$hintMax$$ || null, inRange:$hintInRange$$3$$ || null}, messageDetail:{rangeOverflow:$messageDetailRangeOverflow$$2$$ || null, rangeUnderflow:$messageDetailRangeUnderflow$$2$$ || null}, messageSummary:{rangeOverflow:$messageSummaryRangeOverflow$$2$$ || null, rangeUnderflow:$messageSummaryRangeUnderflow$$2$$ || 
    null}, converter:this.$_GetConverter$()};
    this.$_inputNumberDefaultValidators$[$oj$$48$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE] = $oj$$48$$.$Validation$.$validatorFactory$($oj$$48$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE).createValidator($minOpt$$3_numberRangeOptions$$);
  }, $_parse$:function($option$$32$$, $val$$74$$) {
    var $returnValue$$3$$;
    $returnValue$$3$$ = null !== $val$$74$$ ? +$val$$74$$ : $val$$74$$;
    if (isNaN($returnValue$$3$$)) {
      throw Error("ojInputNumber's " + $option$$32$$ + " option is not a number");
    }
    return $returnValue$$3$$;
  }, $_parseStep$:function($parsedStep$$1_val$$75$$) {
    if (null === $parsedStep$$1_val$$75$$) {
      return 1;
    }
    $parsedStep$$1_val$$75$$ = this.$_parse$("step", $parsedStep$$1_val$$75$$);
    if (0 >= $parsedStep$$1_val$$75$$) {
      throw Error("Invalid step for ojInputNumber; step must be \x3e 0");
    }
    if (null === $parsedStep$$1_val$$75$$ || 0 >= $parsedStep$$1_val$$75$$) {
      $parsedStep$$1_val$$75$$ = 1;
    }
    return $parsedStep$$1_val$$75$$;
  }, $_refreshStateTheming$:function($option$$33$$, $value$$266$$) {
    -1 != Object.keys(this.$_OPTION_TO_CSS_MAPPING$).indexOf($option$$33$$) && this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$33$$], !!$value$$266$$);
  }, $_refreshRoleSpinbutton$:function($option$$34$$, $readOnly$$2$$) {
    $readOnly$$2$$ ? this.element.removeAttr("role") : this.element.attr("role", "spinbutton");
  }, $_refreshAriaMinMaxValue$:function($valuenow$$4$$) {
    var $element$$115$$ = this.element, $valuetext$$ = $element$$115$$.val();
    $element$$115$$.attr({"aria-valuemin":this.options.min, "aria-valuemax":this.options.max, "aria-valuenow":$valuenow$$4$$});
    this.$_CompareOptionValues$("value", "" + $valuenow$$4$$, $valuetext$$) || $element$$115$$.attr({"aria-valuetext":$valuetext$$});
  }, $_step$:function($steps$$3$$, $up$$) {
    this.$_start$();
    $up$$ ? this.$_spin$(($steps$$3$$ || 1) * this.options.step) : this.$_spin$(($steps$$3$$ || 1) * -this.options.step);
    this.$_stop$();
  }});
});
