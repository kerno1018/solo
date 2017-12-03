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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$60$$, $$$$55$$) {
  (function() {
    $oj$$60$$.$__registerWidget$("oj.ojProgressbar", $$$$55$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{max:100, value:0, disabled:!1}, min:0, $_indeterminate$:!1, _ComponentCreate:function() {
      this._super();
      this.oldValue = this.options.value = this.$_constrainedValue$();
      this.element.addClass("oj-progressbar").attr({role:"progressbar", "aria-valuemin":this.min});
      this.$valueDiv$ = $$$$55$$("\x3cdiv class\x3d'oj-progressbar-value'\x3e\x3c/div\x3e").appendTo(this.element);
      this.$_refreshValue$();
    }, $_InitOptions$:function($originalDefaults$$19$$, $constructorOptions$$21$$) {
      var $dom_element$$122$$ = this.element;
      this._super($originalDefaults$$19$$, $constructorOptions$$21$$);
      void 0 === $constructorOptions$$21$$.max && ($dom_element$$122$$ = $dom_element$$122$$.attr("max") || void 0, null != $dom_element$$122$$ && (this.options.max = $dom_element$$122$$));
    }, $_constrainedValue$:function($newValue$$17$$) {
      void 0 === $newValue$$17$$ && ($newValue$$17$$ = this.options.value);
      this.$_indeterminate$ = -1 == $newValue$$17$$;
      "number" !== typeof $newValue$$17$$ && ($newValue$$17$$ = isNaN($newValue$$17$$) ? 0 : Number($newValue$$17$$));
      return this.$_indeterminate$ ? -1 : Math.min(this.options.max, Math.max(this.min, $newValue$$17$$));
    }, _setOptions:function($options$$393$$, $flags$$46$$) {
      var $value$$278$$ = $options$$393$$.value;
      delete $options$$393$$.value;
      this._super($options$$393$$, $flags$$46$$);
      this.options.disabled || (this.options.value = this.$_constrainedValue$($value$$278$$), this.$_refreshValue$());
    }, _setOption:function($key$$178$$, $value$$279$$, $flags$$47$$) {
      "max" === $key$$178$$ && ($value$$279$$ = Math.max(this.min, $value$$279$$));
      this._super($key$$178$$, $value$$279$$, $flags$$47$$);
    }, $_percentage$:function() {
      return this.$_indeterminate$ ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, $_refreshValue$:function() {
      var $value$$280$$ = this.options.value, $percentage$$ = this.$_percentage$();
      this.$valueDiv$.toggle(this.$_indeterminate$ || $value$$280$$ > this.min).width($percentage$$.toFixed(0) + "%");
      this.element.toggleClass("oj-progressbar-indeterminate", this.$_indeterminate$);
      this.$_indeterminate$ ? (this.element.attr({"aria-valuetext":"In Progress"}), this.element.removeAttr("aria-valuenow"), this.element.removeAttr("aria-valuemin"), this.element.removeAttr("aria-valuemax"), this.$overlayDiv$ || (this.$overlayDiv$ = $$$$55$$("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.$valueDiv$), this.$overlayDiv$.addClass("oj-indeterminate"))) : (this.element.attr({"aria-valuemax":this.options.max, "aria-valuenow":$value$$280$$}), this.$overlayDiv$ && 
      (this.$overlayDiv$.remove(), this.$overlayDiv$ = null));
    }, _destroy:function() {
      this.element.removeClass("oj-progressbar").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.$valueDiv$.remove();
    }});
  })();
});
