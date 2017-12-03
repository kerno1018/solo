/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$55$$, $$$$51$$) {
  $oj$$55$$.$__registerWidget$("oj._ojRadioCheckbox", $$$$51$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:null, checked:null, type:null}, label:function() {
    void 0 === this.$$label$ && (this.$$label$ = this.$_getLabelsForElement$());
    return this.$$label$;
  }, refresh:function() {
    this._super();
    this.$_setup$();
  }, refreshDisabled:function() {
    this.$_renderDisabled$();
  }, widget:function() {
    return this.$uiRadioCheckbox$;
  }, $_InitOptions$:function($originalDefaults$$17$$, $constructorOptions$$19$$) {
    var $checkedFromDom_disabledFromDom$$;
    this._super($originalDefaults$$17$$, $constructorOptions$$19$$);
    "checked" in $constructorOptions$$19$$ || (this.$initCheckedFromDom$ = !0, $checkedFromDom_disabledFromDom$$ = !!this.element.prop("checked"), this.option("checked", $checkedFromDom_disabledFromDom$$, {_context:{$internalSet$:!0}}));
    if ("boolean" !== typeof this.options.checked) {
      throw Error("checked option must be a boolean");
    }
    "disabled" in $constructorOptions$$19$$ || ($checkedFromDom_disabledFromDom$$ = !!this.element.prop("disabled"), this.option("disabled", $checkedFromDom_disabledFromDom$$, {_context:{$internalSet$:!0}}));
    if ("boolean" !== typeof this.options.disabled) {
      throw Error("disabled option must be a boolean");
    }
    "type" in $constructorOptions$$19$$ || this.option("type", this.element.prop("type"), {_context:{$internalSet$:!0}});
  }, _ComponentCreate:function() {
    this._super();
    var $type$$98$$ = this.options.type;
    "checkbox" == $type$$98$$ ? (this.$uiRadioCheckbox$ = this.element.addClass("oj-checkbox oj-component"), this.$$label$ = this.$_getLabelsForElement$(), this.$$label$.addClass("oj-checkbox-label")) : "radio" == $type$$98$$ && (this.$uiRadioCheckbox$ = this.element.addClass("oj-radio oj-component"), this.$$label$ = this.$_getLabelsForElement$(), this.$$label$.addClass("oj-radio-label"));
    var $self$$192$$ = this;
    this._hoverable(this.element);
    this._focusable(this.element);
    this.$_activeable$(this.element);
    $$$$51$$.each($self$$192$$.$$label$, function() {
      $self$$192$$._hoverable(this);
      $self$$192$$._focusable(this);
      $self$$192$$.$_activeable$(this);
    });
    this.$_setup$();
  }, $_SaveAttributes$:function($element$$118$$) {
    this.$_savedClasses$ = $element$$118$$.attr("class");
  }, $_RestoreAttributes$:function() {
    this.$_savedClasses$ ? this.element.attr("class", this.$_savedClasses$) : this.element.removeAttr("class");
  }, $_setup$:function() {
    this.$_renderDisabled$();
    this.$initCheckedFromDom$ || this.$_setCheckedOnDom$(this.options.checked);
    this.element.toggleClass("oj-selected", this.options.checked);
  }, $_setCheckedOnDom$:function($checked$$5$$) {
    this.element.prop("checked", !!$checked$$5$$);
  }, $_renderDisabled$:function() {
    this.$_IsEffectivelyDisabled$() ? (this.element.prop("disabled", !0).removeAttr("aria-disabled").removeClass("oj-enabled").addClass("oj-disabled"), this.$$label$.removeClass("oj-enabled").addClass("oj-disabled")) : (this.element.prop("disabled", !1).removeAttr("aria-disabled").removeClass("oj-disabled").addClass("oj-enabled"), this.$$label$.addClass("oj-enabled").removeClass("oj-disabled"));
  }, _setOption:function($key$$174$$, $value$$274$$) {
    this._superApply(arguments);
    "disabled" === $key$$174$$ && ($value$$274$$ = !!$value$$274$$, this.$_renderDisabled$($value$$274$$));
    "checked" === $key$$174$$ && (this.$_setCheckedOnDom$($value$$274$$), this.element.toggleClass("oj-selected", $value$$274$$));
  }, $_getLabelsForElement$:function() {
    var $labelClosestParent$$ = this.element.closest("label"), $labelForQuery$$ = "label[for\x3d'" + this.element.prop("id") + "']";
    return $labelClosestParent$$.add($$$$51$$($labelForQuery$$));
  }, getNodeBySubId:function($locator$$60_subId$$57$$) {
    var $node$$120$$ = this._super($locator$$60_subId$$57$$);
    $node$$120$$ || ($locator$$60_subId$$57$$ = $locator$$60_subId$$57$$.subId, "oj-radiocheckbox-input" === $locator$$60_subId$$57$$ && ($node$$120$$ = this.element[0]), "oj-radiocheckbox-label" === $locator$$60_subId$$57$$ && ($node$$120$$ = this.label()[0]));
    return $node$$120$$ || null;
  }, _destroy:function() {
    var $ret$$63$$ = this._super(), $type$$99$$ = this.options.type;
    "checkbox" == $type$$99$$ ? this.$$label$.removeClass("oj-enabled oj-disabled oj-checkbox-label") : "radio" == $type$$99$$ && this.$$label$.removeClass("oj-enabled oj-disabled oj-radio-label");
    return $ret$$63$$;
  }});
});
