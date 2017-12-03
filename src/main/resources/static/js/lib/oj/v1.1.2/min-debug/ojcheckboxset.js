/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$38$$, $$$$37$$) {
  (function() {
    $oj$$38$$.$__registerWidget$("oj.ojCheckboxset", $$$$37$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:!1, value:void 0}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$uiCheckboxset$;
    }, $_InitOptions$:function($originalDefaults$$12$$, $constructorOptions$$14$$) {
      var $checkedValues$$ = [], $selectedCheckbox$$;
      this._super($originalDefaults$$12$$, $constructorOptions$$14$$);
      $oj$$38$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"title", $defaultOptionValue$:""}, {$attribute$:"placeholder", $defaultOptionValue$:""}, {$attribute$:"required", $defaultOptionValue$:!1, $coerceDomValue$:!0, $validateOption$:!0}], $constructorOptions$$14$$, this);
      this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$();
      void 0 === $constructorOptions$$14$$.value && ($selectedCheckbox$$ = this.$$checkboxes$.filter(":checked"), 0 < $selectedCheckbox$$.length && ($selectedCheckbox$$.each(function() {
        $checkedValues$$.push($$$$37$$(this).val());
      }), this.option("value", $checkedValues$$, {_context:{$writeback$:!0, $internalSet$:!0}})), void 0 === this.options.value && (this.options.value = []));
    }, _ComponentCreate:function() {
      this._super();
      if (this.element.is("fieldset")) {
        throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");
      }
      this.$$checkboxes$._ojRadioCheckbox();
      this.$uiCheckboxset$ = this.element.addClass("oj-checkboxset oj-component").attr("role", "group");
      this._on(this.$_events$);
      this.$_setup$();
    }, $_ResetComponentState$:function() {
      this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$();
      this.$$checkboxes$.filter(".oj-checkbox").each(function() {
        var $disabledValue$$ = void 0 !== $$$$37$$(this).attr("disabled") ? !!$$$$37$$(this).prop("disabled") : !1;
        $$$$37$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$);
      });
      this.$$checkboxes$.not(".oj-checkbox")._ojRadioCheckbox();
    }, Focus:function() {
      this.$_GetContentElement$().first().focus();
      return!0;
    }, $_SetDisabledDom$:function() {
    }, $_findCheckboxesWithMatchingName$:function() {
      var $allcheckboxes_first$$8_name$$110$$ = this.element.find("input[type\x3dcheckbox]:first");
      0 === $allcheckboxes_first$$8_name$$110$$.length && $oj$$38$$.$Logger$.warn("Could not find any input type\x3dcheckbox within this element");
      $allcheckboxes_first$$8_name$$110$$ = $allcheckboxes_first$$8_name$$110$$.attr("name");
      return void 0 === $allcheckboxes_first$$8_name$$110$$ ? ($allcheckboxes_first$$8_name$$110$$ = this.element.find("input[type\x3dcheckbox]"), $allcheckboxes_first$$8_name$$110$$.not("[name]")) : this.element.find("input[type\x3dcheckbox][name\x3d" + $allcheckboxes_first$$8_name$$110$$ + "]");
    }, $_NotifyContextMenuGesture$:function($launcher$$13_menu$$21$$, $event$$504$$, $eventType$$51$$) {
      $launcher$$13_menu$$21$$ = this.element.find("input[type\x3dcheckbox]:tabbable").first();
      this.$_OpenContextMenu$($event$$504$$, $eventType$$51$$, {launcher:$launcher$$13_menu$$21$$});
    }, $_setup$:function() {
      this.$_propagateDisabled$(this.options.disabled);
    }, $_events$:{change:function($event$$505$$) {
      this.$_HandleChangeEvent$($event$$505$$);
    }}, $_HandleChangeEvent$:function($event$$506$$) {
      var $submittedValue$$3$$ = this.$_GetDisplayValue$();
      this.$_SetValue$($submittedValue$$3$$, $event$$506$$, $_sValueChangeCheckFalse$$);
    }, $_GetDisplayValue$:function() {
      return this.$_GetElementValue$();
    }, $_SetDisplayValue$:function($checkedBoxes$$) {
      var $checkboxWithMatchingValue_displayValue$$8_valueFilter$$;
      this.$$checkboxes$._ojRadioCheckbox("option", "checked", !1);
      if (null != $checkedBoxes$$) {
        for (var $i$$423$$ = 0;$i$$423$$ < $checkedBoxes$$.length;$i$$423$$++) {
          $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ = $checkedBoxes$$[$i$$423$$], $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ = "[value\x3d'" + $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ + "']", $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ = this.$$checkboxes$.filter($checkboxWithMatchingValue_displayValue$$8_valueFilter$$), void 0 !== $checkboxWithMatchingValue_displayValue$$8_valueFilter$$ && 0 < $checkboxWithMatchingValue_displayValue$$8_valueFilter$$.length && 
          ($checkboxWithMatchingValue_displayValue$$8_valueFilter$$.prop("checked") || $checkboxWithMatchingValue_displayValue$$8_valueFilter$$._ojRadioCheckbox("option", "checked", !0));
        }
      }
    }, $_GetElementValue$:function() {
      var $checkedValues$$1$$ = [], $selectedCheckbox$$1$$ = this.$$checkboxes$.filter(":checked");
      if (0 === $selectedCheckbox$$1$$.length) {
        return[];
      }
      $selectedCheckbox$$1$$.each(function() {
        $checkedValues$$1$$.push($$$$37$$(this).val());
      });
      return $checkedValues$$1$$;
    }, _GetDefaultStyleClass:function() {
      return "oj-checkboxset";
    }, $_GetContentElement$:function() {
      return this.$_findCheckboxesWithMatchingName$();
    }, $_RefreshAriaRequired$:function() {
    }, $_AriaRequiredUnsupported$:function() {
      return!0;
    }, $_propagateDisabled$:function($disabled$$7$$) {
      $disabled$$7$$ = !!$disabled$$7$$;
      this.$$checkboxes$.each(function() {
        $$$$37$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($disabled$$7$$);
      });
      this.$$checkboxes$._ojRadioCheckbox("refreshDisabled");
    }, _setOption:function($key$$154$$, $value$$253$$, $flags$$39$$) {
      this._super($key$$154$$, $value$$253$$, $flags$$39$$);
      "disabled" === $key$$154$$ && this.$_propagateDisabled$($value$$253$$);
    }, getNodeBySubId:function($locator$$43_subId$$41$$) {
      var $node$$109$$ = this._super($locator$$43_subId$$41$$);
      return $node$$109$$ || ($locator$$43_subId$$41$$ = $locator$$43_subId$$41$$.subId, "oj-checkboxset-inputs" !== $locator$$43_subId$$41$$) ? $node$$109$$ || null : this.$$checkboxes$.get();
    }, _destroy:function() {
      var $ret$$45$$ = this._super();
      this.$$checkboxes$ && this.$$checkboxes$._ojRadioCheckbox("destroy");
      return $ret$$45$$;
    }});
    var $_sValueChangeCheckFalse$$ = {$doValueChangeCheck$:!1};
  })();
});
