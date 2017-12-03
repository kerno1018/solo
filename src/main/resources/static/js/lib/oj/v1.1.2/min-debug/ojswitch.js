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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$49$$) {
  (function() {
    $oj$$49$$.$__registerWidget$("oj.ojSwitch", $.oj.editableValue, {version:"1.1.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:!1, readOnly:!1, required:!1, title:void 0, value:!1}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$_element2$;
    }, getNodeBySubId:function($locator$$57_subId$$54$$) {
      var $node$$117$$, $rootElement$$2$$ = this.widget();
      $node$$117$$ = null == $locator$$57_subId$$54$$ || null == $locator$$57_subId$$54$$.subId ? $rootElement$$2$$ : null;
      return $node$$117$$ || ($locator$$57_subId$$54$$ = $locator$$57_subId$$54$$.subId, "oj-switch-thumb" !== $locator$$57_subId$$54$$ && "oj-switch-track" !== $locator$$57_subId$$54$$) ? $node$$117$$ || null : $rootElement$$2$$.find("." + $locator$$57_subId$$54$$)[0];
    }, $_InitOptions$:function($originalDefaults$$15$$, $constructorOptions$$17$$) {
      var $val$$76$$;
      this._super($originalDefaults$$15$$, $constructorOptions$$17$$);
      $oj$$49$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:!1, $validateOption$:!0}, {$attribute$:"readonly", option:"readOnly", $defaultOptionValue$:!1, $validateOption$:!1, $coerceDomValue$:function() {
        return!1;
      }}, {$attribute$:"required", $defaultOptionValue$:!1, $validateOption$:!1, $coerceDomValue$:function() {
        return!1;
      }}, {$attribute$:"checked", option:"value", $defaultOptionValue$:!1, $validateOption$:!1, $coerceDomValue$:function($domValue$$2$$) {
        return $domValue$$2$$ ? !0 : !1;
      }}, {$attribute$:"title", $defaultOptionValue$:void 0}], $constructorOptions$$17$$, this);
      $val$$76$$ = this.option("value");
      this.option({readOnly:!1, required:!1, value:!!$val$$76$$}, {_context:{$writeback$:!0, $internalSet$:!0}});
    }, _ComponentCreate:function() {
      this._super();
      if (!this.element.is("input")) {
        throw Error("ojSwitch can be bound to INPUT only.");
      }
      this.$_inputElementOriginalDisplay$ = this.element.css("display");
      this.element.css("display", "none").attr("type", "checkbox").attr("checked", this.option("value")).attr("tabindex", "-1").attr("disabled", this.option("disabled")).attr("readonly", this.option("readOnly"));
      this.$_element2$ = this.element.wrap("\x3cdiv\x3e\x3c/div\x3e").parent().addClass("oj-switch oj-component oj-form-control");
      this.$_element2$.append("\x3cdiv class\x3d'oj-switch-track'\x3e\x3cdiv class\x3d'oj-switch-thumb' tabIndex\x3d'0'\x3e\x3c/div\x3e\x3c/div\x3e");
      this.$switchThumb$ = this.$_element2$.find(".oj-switch-thumb");
      this.$switchThumb$.attr("role", "switch checkbox");
      this.$_setAriaLabel$(this.element, this.$switchThumb$);
      this.$_setupEvents$();
      this.$_setup$();
    }, $_setAriaLabel$:function($elem$$153$$, $target$$94$$) {
      var $id$$53_switchLabel$$ = $elem$$153$$.prop("id"), $ariaLabelledBy$$ = $elem$$153$$.attr("aria-labelledby"), $ariaLabel$$ = $elem$$153$$.attr("aria-label");
      $ariaLabel$$ ? $target$$94$$.attr("aria-label", $ariaLabel$$) : $ariaLabelledBy$$ ? $target$$94$$.attr("aria-labelledby", $ariaLabelledBy$$) : $id$$53_switchLabel$$ && ($id$$53_switchLabel$$ = $("label[for\x3d'" + $id$$53_switchLabel$$ + "']")) && ($id$$53_switchLabel$$.attr("id") ? $target$$94$$.attr("aria-labelledby", $id$$53_switchLabel$$.attr("id")) : $target$$94$$.attr("aria-label", $($id$$53_switchLabel$$).text()));
    }, $_setup$:function() {
      var $rootElement$$3$$ = $(this.widget()), $thumbTitle$$ = this.option("title");
      void 0 !== $rootElement$$3$$ && (this.element.attr("checked", this.option("value")), $rootElement$$3$$.removeClass("oj-disabled oj-selected oj-hover oj-active"), $(this.$switchThumb$).attr("tabindex", "0"), this.option("disabled") && ($rootElement$$3$$.addClass("oj-disabled"), $(this.$switchThumb$).removeAttr("tabindex")), this.option("value") && $rootElement$$3$$.addClass("oj-selected"), void 0 !== $thumbTitle$$ && $(this.$switchThumb$).attr("title", $thumbTitle$$), $(this.$switchThumb$).attr("aria-checked", 
      this.option("value")), $(this.$switchThumb$).removeAttr("aria-disabled"), $rootElement$$3$$.removeAttr("aria-disabled"), this.$_CanSetValue$() || $(this.$switchThumb$).attr("aria-disabled", "true"));
    }, $_setupEvents$:function() {
      this.$_CanSetValue$() && this._on(this.$_element2$, this.$_switchEvents$);
      this._hoverable(this.$_element2$);
      this._focusable(this.$_element2$);
    }, $_switchEvents$:{keydown:function($event$$563$$) {
      if ($event$$563$$.which === $.ui.keyCode.ENTER || $event$$563$$.which === $.ui.keyCode.SPACE) {
        $($event$$563$$.currentTarget).addClass("oj-active"), $event$$563$$.preventDefault();
      }
    }, keyup:function($event$$564$$) {
      $event$$564$$.which !== $.ui.keyCode.ENTER && $event$$564$$.which !== $.ui.keyCode.SPACE || this.$_SetValue$(!this.option("value"), $event$$564$$);
    }, mousedown:function($event$$565$$) {
      1 === $event$$565$$.which && $($event$$565$$.currentTarget).addClass("oj-active");
    }, mouseup:function($event$$566$$) {
      1 === $event$$566$$.which && this.$_SetValue$(!this.option("value"), $event$$566$$);
    }, $touchstart$:function($event$$567$$) {
      this.$_SetValue$(!this.option("value"), $event$$567$$);
      $event$$567$$.preventDefault();
    }}, _GetDefaultStyleClass:function() {
      return "oj-switch";
    }, $_setSwitchRole$:function() {
      return "switch checkbox";
    }, _destroy:function() {
      this.$_element2$.find(".oj-switch-track").remove();
      $oj$$49$$.$DomUtils$.unwrap(this.element);
      this.$_RestoreAttributes$(this.element);
      return this._super();
    }, $_GetContentElement$:function() {
      return this.$_element2$;
    }, _setOption:function($key$$171$$, $coercedValue$$2_value$$267$$, $flags$$45$$) {
      switch($key$$171$$) {
        case "disabled":
        ;
        case "value":
          $coercedValue$$2_value$$267$$ = !!$coercedValue$$2_value$$267$$;
          break;
        case "readOnly":
        ;
        case "required":
          $coercedValue$$2_value$$267$$ = !1;
          break;
      }
      this._super($key$$171$$, $coercedValue$$2_value$$267$$, $flags$$45$$);
      this.$_setup$();
    }});
  })();
});
