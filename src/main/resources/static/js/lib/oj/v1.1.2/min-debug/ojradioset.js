/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$52$$, $$$$49$$) {
  (function() {
    $oj$$52$$.$__registerWidget$("oj.ojRadioset", $$$$49$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:!1, value:void 0}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$uiRadioset$;
    }, $_InitOptions$:function($originalDefaults$$16$$, $constructorOptions$$18$$) {
      var $checkedRadio_domValue$$3$$;
      this._super($originalDefaults$$16$$, $constructorOptions$$18$$);
      $oj$$52$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"placeholder", $defaultOptionValue$:""}, {$attribute$:"required", $defaultOptionValue$:!1, $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title", $defaultOptionValue$:""}], $constructorOptions$$18$$, this);
      this.$$radios$ = this.$_findRadiosWithMatchingName$();
      void 0 === $constructorOptions$$18$$.value && ($checkedRadio_domValue$$3$$ = this.$$radios$.filter(":checked"), $checkedRadio_domValue$$3$$ = 0 === $checkedRadio_domValue$$3$$.length ? void 0 : $checkedRadio_domValue$$3$$.val(), void 0 !== $checkedRadio_domValue$$3$$ && this.option("value", $checkedRadio_domValue$$3$$, {_context:{$writeback$:!0, $internalSet$:!0}}), void 0 === this.options.value && (this.options.value = null));
    }, _ComponentCreate:function() {
      var $element$$116$$ = this.element;
      this._super();
      if ($element$$116$$.is("fieldset")) {
        throw Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");
      }
      this.$$radios$._ojRadioCheckbox();
      this.$uiRadioset$ = $element$$116$$.addClass("oj-radioset oj-component").attr("role", "radiogroup");
      this._on(this.$_events$);
    }, $_AfterCreate$:function() {
      this._super();
      this.$_setup$();
    }, $_ResetComponentState$:function() {
      this.$$radios$ = this.$_findRadiosWithMatchingName$();
      this.$$radios$.filter(".oj-radio").each(function() {
        var $disabledValue$$1$$ = void 0 !== $$$$49$$(this).attr("disabled") ? !!$$$$49$$(this).prop("disabled") : !1;
        $$$$49$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$1$$);
      });
      this.$$radios$.not(".oj-radio")._ojRadioCheckbox();
    }, Focus:function() {
      this.$_GetContentElement$().first().focus();
      return!0;
    }, $_SetDisabledDom$:function() {
    }, $_findRadiosWithMatchingName$:function() {
      var $allradios_element$$117$$ = this.element, $first$$10_name$$112$$ = $allradios_element$$117$$.find("input[type\x3dradio]:first");
      0 === $first$$10_name$$112$$.length && $oj$$52$$.$Logger$.warn("Could not find any input type\x3dradio within this element");
      $first$$10_name$$112$$ = $first$$10_name$$112$$.attr("name");
      return void 0 === $first$$10_name$$112$$ ? ($allradios_element$$117$$ = $allradios_element$$117$$.find("input[type\x3dradio]"), $allradios_element$$117$$.not("[name]")) : $allradios_element$$117$$.find("input[type\x3dradio][name\x3d" + $first$$10_name$$112$$ + "]");
    }, $_NotifyContextMenuGesture$:function($launcher$$14_menu$$27_radios$$, $event$$569$$, $eventType$$55$$) {
      $launcher$$14_menu$$27_radios$$ = this.element.find("input[type\x3dradio]");
      var $checked$$4$$ = $launcher$$14_menu$$27_radios$$.filter(":checked");
      $launcher$$14_menu$$27_radios$$ = $checked$$4$$.length ? $checked$$4$$ : $launcher$$14_menu$$27_radios$$.filter(":enabled").first();
      this.$_OpenContextMenu$($event$$569$$, $eventType$$55$$, {launcher:$launcher$$14_menu$$27_radios$$});
    }, $_setup$:function() {
      this.$_propagateDisabled$(this.options.disabled);
    }, $_events$:{change:function($event$$570$$) {
      this.$_HandleChangeEvent$($event$$570$$);
    }}, $_HandleChangeEvent$:function($event$$571$$) {
      var $submittedValue$$4$$ = this.$_GetDisplayValue$();
      this.$_SetValue$($submittedValue$$4$$, $event$$571$$, $_sValueChangeCheckFalse$$1$$);
    }, $_GetDisplayValue$:function() {
      return this.$_GetElementValue$();
    }, $_SetDisplayValue$:function($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$) {
      $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ = "[value\x3d'" + $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ + "']";
      void 0 !== $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ && void 0 !== this.$$radios$ && ($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ = this.$$radios$.filter($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$), void 0 !== $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ && 0 < $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$.length ? $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$.prop("checked") || $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$._ojRadioCheckbox("option", 
      "checked", !0) : this.$$radios$._ojRadioCheckbox("option", "checked", !1));
    }, $_GetElementValue$:function() {
      var $checkedRadio$$1$$ = this.$$radios$.filter(":checked");
      return 0 === $checkedRadio$$1$$.length ? null : $checkedRadio$$1$$.val();
    }, _GetDefaultStyleClass:function() {
      return "oj-radioset";
    }, $_GetContentElement$:function() {
      return this.$_findRadiosWithMatchingName$();
    }, $_RefreshAriaRequired$:function() {
    }, $_AriaRequiredUnsupported$:function() {
      return!0;
    }, $_propagateDisabled$:function($disabled$$10$$) {
      $disabled$$10$$ = !!$disabled$$10$$;
      this.$$radios$.each(function() {
        $$$$49$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($disabled$$10$$);
      });
      this.$$radios$._ojRadioCheckbox("refreshDisabled");
    }, _setOption:function($key$$173$$, $value$$273$$) {
      this._superApply(arguments);
      "disabled" === $key$$173$$ && this.$_propagateDisabled$($value$$273$$);
    }, getNodeBySubId:function($locator$$59_subId$$56$$) {
      var $node$$119$$ = this._super($locator$$59_subId$$56$$);
      $node$$119$$ || ($locator$$59_subId$$56$$ = $locator$$59_subId$$56$$.subId, "oj-radioset-inputs" === $locator$$59_subId$$56$$ && ($node$$119$$ = this.$$radios$.get()));
      return $node$$119$$ || null;
    }, _destroy:function() {
      var $ret$$62$$ = this._super();
      this.$$radios$ && this.$$radios$._ojRadioCheckbox("destroy");
      return $ret$$62$$;
    }});
    var $_sValueChangeCheckFalse$$1$$ = {$doValueChangeCheck$:!1};
  })();
});
