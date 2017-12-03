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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$28$$, $$$$27$$) {
  (function() {
    function $_radioGroup$$($radio$$, $$elems$$) {
      var $name$$108_selector$$35$$ = $radio$$.name, $$radios_form$$1$$ = $radio$$.form;
      $name$$108_selector$$35$$ ? ($name$$108_selector$$35$$ = $name$$108_selector$$35$$.replace(/'/g, "\\'"), $name$$108_selector$$35$$ = ":radio[name\x3d'" + $name$$108_selector$$35$$ + "']:oj-button", $$radios_form$$1$$ = $$elems$$ ? $$elems$$.filter($name$$108_selector$$35$$) : $$radios_form$$1$$ ? $$$$27$$($$radios_form$$1$$).find($name$$108_selector$$35$$) : $$$$27$$($name$$108_selector$$35$$, $radio$$.ownerDocument).filter(function() {
        return!this.form;
      })) : $$radios_form$$1$$ = ($$elems$$ ? $$elems$$.filter($radio$$) : $$$$27$$($radio$$)).filter(":oj-button");
      return $$radios_form$$1$$;
    }
    $oj$$28$$.$__registerWidget$("oj.ojButton", $$$$27$$.oj.baseComponent, {defaultElement:"\x3cbutton\x3e", widgetEventPrefix:"oj", options:{disabled:!1, display:"all", label:null, icons:{start:null, end:null}, menu:null}, $_InitOptions$:function($originalDefaults$$9$$, $constructorOptions$$11$$) {
      this._super($originalDefaults$$9$$, $constructorOptions$$11$$);
      this.$_initButtonTypes$();
      "disabled" in $constructorOptions$$11$$ || this.option("disabled", !!this.element.prop("disabled"), {_context:{$internalSet$:!0}});
      "label" in $constructorOptions$$11$$ || (this.$keepDomLabel$ = !0, this.option("label", "inputPush" === this.type ? this.$buttonElement$.val() : this.$buttonElement$.html(), {_context:{$internalSet$:!0}}));
      !this.options.menu || $constructorOptions$$11$$.icons && void 0 !== $constructorOptions$$11$$.icons.end || this.option("icons.end", "oj-component-icon oj-button-menu-dropdown-icon", {_context:{$writeback$:!0, $internalSet$:!0}});
    }, _ComponentCreate:function() {
      function $endHandler$$() {
        $self$$147$$.$_lastTouch$ = Date.now();
        $self$$147$$.$rootElement$.removeClass($activeClass$$);
        $self$$147$$.$rootElement$.removeClass("oj-hover");
        $self$$147$$.$_toggleDefaultClasses$();
      }
      this._super();
      this.element.closest("form").unbind("reset" + $BUTTON_EVENT_NAMESPACE$$).bind("reset" + $BUTTON_EVENT_NAMESPACE$$, function() {
        var $form$$ = $$$$27$$(this);
        setTimeout(function() {
          $form$$.find(":oj-button").each(function() {
            $$$$27$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1);
          }).length || $form$$.unbind("reset" + $BUTTON_EVENT_NAMESPACE$$);
        }, 1);
      });
      this.$menuEventNamespace$ = this.eventNamespace + "menu";
      this.$_initButtonTypes2$();
      this.$hasTitle$ = !!this.$rootElement$.attr("title");
      var $self$$147$$ = this, $tabIndex$$4_toggleButton$$ = this.$_isToggle$, $activeClass$$ = $tabIndex$$4_toggleButton$$ ? "" : "oj-active";
      this.$rootElement$.addClass($BASE_CLASSES$$);
      this.document.bind("touchend" + this.eventNamespace + " touchcancel" + this.eventNamespace, $endHandler$$);
      this.$buttonElement$.bind("touchstart" + this.eventNamespace, function() {
        $self$$147$$.$_IsEffectivelyDisabled$() || ($$$$27$$(this).addClass($activeClass$$), $self$$147$$.$_toggleDefaultClasses$());
      }).bind("touchend" + this.eventNamespace + " touchcancel" + this.eventNamespace, $endHandler$$).bind("mouseenter" + this.eventNamespace, function() {
        $self$$147$$.$_IsEffectivelyDisabled$() || $self$$147$$.$_recentTouch$() || (this === $_lastActive$$ && $self$$147$$.$rootElement$.addClass("oj-active"), $self$$147$$.$rootElement$.addClass("oj-hover").removeClass("oj-default oj-focus-only"));
      }).bind("mouseleave" + this.eventNamespace, function() {
        $self$$147$$.$rootElement$.removeClass("oj-hover");
        $self$$147$$.$_IsEffectivelyDisabled$() || ($self$$147$$.$rootElement$.removeClass($activeClass$$), $self$$147$$.$_toggleDefaultClasses$());
      }).bind("click" + this.eventNamespace, function($event$$343$$) {
        var $effectivelyDisabled$$ = $self$$147$$.$_IsEffectivelyDisabled$();
        $effectivelyDisabled$$ && $event$$343$$.preventDefault();
        $effectivelyDisabled$$ && $event$$343$$.stopImmediatePropagation();
      });
      this.element.attr("role", "button").bind("focus" + this.eventNamespace, function() {
        $self$$147$$.$rootElement$.addClass("oj-focus");
        $self$$147$$.$_toggleDefaultClasses$();
      }).bind("blur" + this.eventNamespace, function() {
        $self$$147$$.$rootElement$.removeClass("oj-focus");
        $self$$147$$.$_toggleDefaultClasses$();
      });
      $tabIndex$$4_toggleButton$$ && (this.element.bind("change" + this.eventNamespace, function($event$$344$$) {
        $self$$147$$.$_applyCheckedStateFromDom$(!0);
        var $buttonset$$ = $$$$27$$(this).closest(":oj-buttonset").data("oj-ojButtonset"), $checkedState$$ = $buttonset$$ && $buttonset$$.$_getCheckedFromDom$($buttonset$$.$$buttons$);
        $buttonset$$ && void 0 !== $checkedState$$ && $buttonset$$.option("checked", $checkedState$$, {_context:{$writeback$:!0, originalEvent:$event$$344$$, $internalSet$:!0}});
      }), this.$buttonElement$.bind("mousedown" + this.eventNamespace, function() {
        $self$$147$$.$_IsEffectivelyDisabled$() || ($_lastToggleActive$$ = this, $self$$147$$.document.one("mouseup", function() {
          $_lastToggleActive$$ = null;
        }));
      }).bind("mouseup" + this.eventNamespace, function() {
        $self$$147$$.$_IsEffectivelyDisabled$() || this !== $_lastToggleActive$$ || $self$$147$$.element.focus();
      }));
      "checkbox" === this.type ? (this.$buttonElement$.bind("click" + this.eventNamespace, function() {
        if ($self$$147$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
      }), this.element.bind("keyup" + this.eventNamespace, function($event$$348$$) {
        $event$$348$$.keyCode === $$$$27$$.ui.keyCode.ENTER && ($self$$147$$.$_IsEffectivelyDisabled$() || $self$$147$$.element.click());
      })) : "radio" === this.type ? (this.$buttonElement$.bind("click" + this.eventNamespace, function() {
        if ($self$$147$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
      }), this.element.bind("keyup" + this.eventNamespace, function($event$$349$$) {
        $event$$349$$.keyCode !== $$$$27$$.ui.keyCode.ENTER || $self$$147$$.element[0].checked || $self$$147$$.$_IsEffectivelyDisabled$() || ($self$$147$$.element[0].checked = !0, $self$$147$$.element.change(), $self$$147$$.element.click());
      })) : (this.$buttonElement$.bind("mousedown" + this.eventNamespace, function($event$$350$$) {
        if ($self$$147$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
        1 !== $event$$350$$.which || $self$$147$$.$_recentTouch$() || ($$$$27$$(this).addClass("oj-active").removeClass("oj-default oj-focus-only"), $_lastActive$$ = this, $self$$147$$.document.one("mouseup", function() {
          $_lastActive$$ = null;
        }));
      }).bind("mouseup" + this.eventNamespace, function() {
        if ($self$$147$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
        $$$$27$$(this).removeClass("oj-active");
        $self$$147$$.$_toggleDefaultClasses$();
      }).bind("keydown" + this.eventNamespace, function($event$$351$$) {
        if ($self$$147$$.$_IsEffectivelyDisabled$()) {
          return!1;
        }
        var $isSpace$$ = $event$$351$$.keyCode === $$$$27$$.ui.keyCode.SPACE;
        "anchor" === $self$$147$$.type && $isSpace$$ && $event$$351$$.preventDefault();
        ($isSpace$$ || $event$$351$$.keyCode === $$$$27$$.ui.keyCode.ENTER) && $$$$27$$(this).addClass("oj-active").removeClass("oj-default oj-focus-only");
      }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
        $$$$27$$(this).removeClass("oj-active");
        $self$$147$$.$_toggleDefaultClasses$();
      }), "anchor" === this.type && ($tabIndex$$4_toggleButton$$ = this.$buttonElement$.attr("tabindex"), ("undefined" === $tabIndex$$4_toggleButton$$ || null === $tabIndex$$4_toggleButton$$ || isNaN($tabIndex$$4_toggleButton$$)) && this.$buttonElement$.attr("tabindex", "0"), this.$buttonElement$.bind("keyup" + this.eventNamespace, function($event$$352$$) {
        $event$$352$$.keyCode === $$$$27$$.ui.keyCode.SPACE && $$$$27$$(this).click();
      })));
      this.$_updateEffectivelyDisabled$();
      this.$_handleLabelAndIconsAtCreateTime$();
      this.$_setupMenuButton$();
      this.$_toggleDefaultClasses$();
    }, $_recentTouch$:function() {
      return 500 > Date.now() - this.$_lastTouch$;
    }, $_NotifyContextMenuGesture$:function($menu$$12$$, $event$$353$$, $eventType$$46$$) {
      this.$_OpenContextMenu$($event$$353$$, $eventType$$46$$, {position:{of:"keyboard" === $eventType$$46$$ ? this.$rootElement$ : $event$$353$$}});
    }, $_initButtonTypes$:function() {
      if (this.element.is("input[type\x3dcheckbox]")) {
        this.type = "checkbox", this.$_isToggle$ = !0;
      } else {
        if (this.element.is("input[type\x3dradio]")) {
          this.type = "radio", this.$_isToggle$ = !0;
        } else {
          if (this.element.is("input[type\x3dbutton],input[type\x3dsubmit],input[type\x3dreset]")) {
            this.type = "inputPush";
          } else {
            if (this.element.is("button")) {
              this.type = "button";
            } else {
              if (this.element.is("a")) {
                this.type = "anchor";
              } else {
                throw Error("JET Button not supported on this element type");
              }
            }
          }
        }
      }
      if (this.$_isToggle$) {
        var $labelSelector$$ = "label[for\x3d'" + this.element.attr("id") + "']";
        this.$buttonElement$ = this.element.siblings().filter($labelSelector$$);
      } else {
        this.$buttonElement$ = this.element;
      }
    }, $_initButtonTypes2$:function() {
      if (this.$_isToggle$) {
        this.$buttonElement$.addClass("oj-button-label");
        this.element.addClass("oj-button-input oj-helper-hidden-accessible").add(this.$buttonElement$).wrapAll("\x3cspan\x3e\x3c/span\x3e");
        this.$rootElement$ = this.element.parent();
        this.$rootElement$.addClass("oj-button-toggle");
        var $checked$$ = this.element[0].checked;
        $checked$$ && this.$rootElement$.addClass("oj-selected").removeClass("oj-default oj-focus-only");
        this.element.attr("aria-pressed", $checked$$);
      } else {
        this.$rootElement$ = this.element;
      }
    }, widget:function() {
      return this.$rootElement$;
    }, _destroy:function() {
      this.$_removeMenuBehavior$();
      this.document.off(this.eventNamespace);
      this.element.removeClass("oj-helper-hidden-accessible").removeAttr("role").removeAttr("aria-pressed");
      var $isToggle$$ = this.$_isToggle$;
      $isToggle$$ || this.$rootElement$.removeClass($BASE_CLASSES$$ + " " + $STATE_CLASSES$$ + " " + $TYPE_CLASSES$$);
      this.$buttonElement$.html(this.$buttonElement$.find(".oj-button-text").html());
      $isToggle$$ ? (this.$buttonElement$.removeClass("oj-button-label"), $oj$$28$$.$DomUtils$.unwrap(this.element)) : this.$hasTitle$ || this.$rootElement$.removeAttr("title");
      $_lastToggleActive$$ === this.$buttonElement$[0] && ($_lastToggleActive$$ = null);
    }, $_NotifyDetached$:function() {
      this.$rootElement$.removeClass("oj-active oj-hover oj-focus");
      this.$_toggleDefaultClasses$();
    }, $__setAncestorComponentDisabled$:function($disabled$$5$$) {
      this._super($disabled$$5$$);
      this.$_updateEffectivelyDisabled$();
    }, $_updateEffectivelyDisabled$:function() {
      var $effectivelyDisabled$$1$$ = this.$_IsEffectivelyDisabled$();
      this.$rootElement$.toggleClass("oj-disabled", $effectivelyDisabled$$1$$);
      this.$rootElement$.toggleClass("oj-enabled", !$effectivelyDisabled$$1$$);
      "anchor" !== this.type ? (this.element.prop("disabled", $effectivelyDisabled$$1$$), this.$rootElement$.removeAttr("aria-disabled")) : this.$rootElement$.attr("aria-disabled", $effectivelyDisabled$$1$$);
      $effectivelyDisabled$$1$$ ? (this.widget().removeClass("oj-active oj-default oj-focus-only oj-hover oj-focus"), $_lastActive$$ = null, this.$_dismissMenu$()) : this.$_toggleDefaultClasses$();
    }, _setOption:function($key$$138$$, $value$$237$$, $flags$$32$$) {
      this._super($key$$138$$, $value$$237$$, $flags$$32$$);
      switch($key$$138$$) {
        case "disabled":
          this.$_updateEffectivelyDisabled$();
          break;
        case "label":
          this.$_setLabelOption$();
          break;
        case "display":
          "inputPush" !== this.type && this.$_setDisplayOptionOnDom$();
          break;
        case "icons":
          this.$_setIconsOption$(!0);
          break;
        case "menu":
          this.$_setupMenuButton$();
      }
    }, refresh:function() {
      this._super();
      this.$_ancestorDisabled$ && !$$$$27$$(this).closest(":oj-buttonset").length && this.$__setAncestorComponentDisabled$(!1);
    }, $_applyCheckedStateFromDom$:function($wholeGroup$$) {
      "radio" === this.type ? ($wholeGroup$$ ? $_radioGroup$$(this.element[0]) : this.element).each(function() {
        var $$radioWidget$$ = $$$$27$$(this).data("oj-ojButton");
        this.checked ? ($$radioWidget$$.$rootElement$.addClass("oj-selected").removeClass("oj-default oj-focus-only"), $$radioWidget$$.element.attr("aria-pressed", "true")) : ($$radioWidget$$.$rootElement$.removeClass("oj-selected"), $$radioWidget$$.$_toggleDefaultClasses$(), $$radioWidget$$.element.attr("aria-pressed", "false"));
      }) : "checkbox" === this.type && (this.element[0].checked ? (this.$rootElement$.addClass("oj-selected").removeClass("oj-default oj-focus-only"), this.element.attr("aria-pressed", "true")) : (this.$rootElement$.removeClass("oj-selected"), this.$_toggleDefaultClasses$(), this.element.attr("aria-pressed", "false")));
    }, $_handleLabelAndIconsAtCreateTime$:function() {
      if ("inputPush" === this.type) {
        this.$_setLabelOnDomOfSpanlessButton$();
      } else {
        var $textSpan$$1$$ = this.$_setLabelOnDomAtCreateTime$(), $hasStartIcon$$ = this.$_setIconOnDom$(!0), $hasEndIcon$$ = this.$_setIconOnDom$(!1);
        this.$_setDisplayOptionOnDom$($textSpan$$1$$, $hasStartIcon$$, $hasEndIcon$$);
      }
    }, $_setLabelOnDomAtCreateTime$:function() {
      var $buttonElement$$ = this.$buttonElement$, $textSpan$$2$$ = $$$$27$$("\x3cspan class\x3d'oj-button-text'\x3e\x3c/span\x3e", this.document[0]);
      this.$keepDomLabel$ ? $textSpan$$2$$.append($buttonElement$$.contents()) : ($buttonElement$$.empty(), $textSpan$$2$$.text(this.options.label));
      $buttonElement$$.append($textSpan$$2$$);
      return $textSpan$$2$$;
    }, $_setLabelOption$:function() {
      if ("inputPush" === this.type) {
        this.$_setLabelOnDomOfSpanlessButton$();
      } else {
        var $textSpan$$3$$ = this.$buttonElement$.find(".oj-button-text");
        $textSpan$$3$$.text(this.options.label);
        this.$_setDisplayOptionOnDom$($textSpan$$3$$);
      }
    }, $_setLabelOnDomOfSpanlessButton$:function() {
      this.options.label && this.element.val(this.options.label);
    }, $_setIconsOption$:function() {
      if ("inputPush" !== this.type) {
        var $hasStartIcon$$1$$ = this.$_setIconOnDom$(!0), $hasEndIcon$$1$$ = this.$_setIconOnDom$(!1);
        this.$_setDisplayOptionOnDom$(void 0, $hasStartIcon$$1$$, $hasEndIcon$$1$$);
      }
    }, $_setIconOnDom$:function($isStart_standardIconClasses$$) {
      if ($isStart_standardIconClasses$$) {
        var $iconSpan_iconSpanSelector$$ = ".oj-button-icon.oj-start";
        $isStart_standardIconClasses$$ = "oj-button-icon oj-start";
        var $appIconClass$$ = this.options.icons.start, $lastIvar$$ = "_lastStartIcon", $pendTo$$ = "prependTo";
      } else {
        $iconSpan_iconSpanSelector$$ = ".oj-button-icon.oj-end", $isStart_standardIconClasses$$ = "oj-button-icon oj-end", $appIconClass$$ = this.options.icons.end, $lastIvar$$ = "_lastEndIcon", $pendTo$$ = "appendTo";
      }
      $iconSpan_iconSpanSelector$$ = this.$buttonElement$.find($iconSpan_iconSpanSelector$$);
      $appIconClass$$ ? ($iconSpan_iconSpanSelector$$.length ? $iconSpan_iconSpanSelector$$.removeClass(this[$lastIvar$$]) : $iconSpan_iconSpanSelector$$ = $$$$27$$("\x3cspan\x3e\x3c/span\x3e").addClass($isStart_standardIconClasses$$)[$pendTo$$](this.$buttonElement$), $iconSpan_iconSpanSelector$$.addClass($appIconClass$$)) : $iconSpan_iconSpanSelector$$.remove();
      this[$lastIvar$$] = $appIconClass$$;
      return!!$appIconClass$$;
    }, $_setDisplayOptionOnDom$:function($buttonText_textSpan$$4$$, $buttonClass_hasStartIcon$$2$$, $atLeastOneIcon_hasEndIcon$$2$$) {
      void 0 === $buttonText_textSpan$$4$$ && ($buttonText_textSpan$$4$$ = this.$buttonElement$.find(".oj-button-text"));
      void 0 === $buttonClass_hasStartIcon$$2$$ && ($buttonClass_hasStartIcon$$2$$ = !!this.options.icons.start);
      void 0 === $atLeastOneIcon_hasEndIcon$$2$$ && ($atLeastOneIcon_hasEndIcon$$2$$ = !!this.options.icons.end);
      var $multipleIcons$$ = $buttonClass_hasStartIcon$$2$$ && $atLeastOneIcon_hasEndIcon$$2$$;
      $atLeastOneIcon_hasEndIcon$$2$$ = $buttonClass_hasStartIcon$$2$$ || $atLeastOneIcon_hasEndIcon$$2$$;
      var $displayIsIcons$$ = "icons" === this.options.display;
      $atLeastOneIcon_hasEndIcon$$2$$ && $displayIsIcons$$ ? ($buttonText_textSpan$$4$$.addClass("oj-helper-hidden-accessible"), this.$hasTitle$ || ($buttonText_textSpan$$4$$ = $buttonText_textSpan$$4$$.text(), this.$rootElement$.attr("title", $$$$27$$.trim($buttonText_textSpan$$4$$)))) : ($buttonText_textSpan$$4$$.removeClass("oj-helper-hidden-accessible"), this.$hasTitle$ || this.$rootElement$.removeAttr("title"));
      $buttonClass_hasStartIcon$$2$$ = $atLeastOneIcon_hasEndIcon$$2$$ ? $displayIsIcons$$ ? $multipleIcons$$ ? "oj-button-icons-only" : "oj-button-icon-only" : $multipleIcons$$ ? "oj-button-text-icons" : $buttonClass_hasStartIcon$$2$$ ? "oj-button-text-icon-start" : "oj-button-text-icon-end" : "oj-button-text-only";
      this.$rootElement$.removeClass($TYPE_CLASSES$$).addClass($buttonClass_hasStartIcon$$2$$);
    }, $_setupMenuButton$:function() {
      if (this.options.menu && this.element.is("input")) {
        throw Error("Menu Button functionality is not supported on input elements.");
      }
      this.$_removeMenuBehavior$();
      if (this.options.menu) {
        var $self$$148$$ = this;
        this.element.attr("aria-haspopup", !0).on("keydown" + this.$menuEventNamespace$, function($event$$354$$) {
          if ($event$$354$$.which === $$$$27$$.ui.keyCode.DOWN) {
            $self$$148$$.$_showMenu$($event$$354$$, "firstItem"), $event$$354$$.preventDefault();
          } else {
            if ($event$$354$$.which === $$$$27$$.ui.keyCode.ESCAPE) {
              var $bubbleEscUp$$ = $self$$148$$.$_checkMenuParent$($self$$148$$.$rootElement$);
              $self$$148$$.$_dismissMenu$($event$$354$$);
              return $bubbleEscUp$$;
            }
          }
          return!0;
        }).on("click" + this.$menuEventNamespace$, function($event$$355$$) {
          var $menu$$13$$ = $self$$148$$.$_getMenu$();
          $menu$$13$$.$__spaceEnterDownInMenu$ || $self$$148$$.$_showMenu$($event$$355$$, "firstItem");
          $menu$$13$$.$__spaceEnterDownInMenu$ = !1;
          $event$$355$$.preventDefault();
          return!0;
        });
      }
    }, $_checkMenuParent$:function($element$$103$$) {
      return!$element$$103$$.hasClass("oj-selected");
    }, $_removeMenuBehavior$:function() {
      this.element.removeAttr("aria-haspopup").off(this.$menuEventNamespace$);
      this.$_dismissMenu$();
      this.$_menu$ && this.$_menu$.widget().off(this.$menuEventNamespace$);
      this.$_menu$ = void 0;
    }, $_getMenu$:function() {
      if (!this.$_menu$) {
        this.$_menu$ = $$$$27$$(this.options.menu).data("oj-ojMenu");
        if (!this.$_menu$) {
          throw Error('JET Button: "menu" option specified, but does not reference a valid JET Menu.');
        }
        var $self$$149$$ = this;
        this.$_menu$.widget().on("oj__dismiss" + this.$menuEventNamespace$, function($event$$356$$) {
          $self$$149$$.$_menuDismissHandler$($event$$356$$);
        }).on("ojbeforeopen" + this.$menuEventNamespace$, function($event$$357$$) {
          $self$$149$$.$_launchingMenu$ || $self$$149$$.$_menuDismissHandler$($event$$357$$);
          $self$$149$$.$_launchingMenu$ = !1;
        });
      }
      return this.$_menu$;
    }, $_showMenu$:function($event$$358$$, $focus$$) {
      this.$_IsEffectivelyDisabled$() || (this.$_launchingMenu$ = !0, this.$_getMenu$().open($event$$358$$, {launcher:this.element, initialFocus:$focus$$}), this.$_menuVisible$ = !0, this.$rootElement$.addClass("oj-selected").removeClass("oj-default oj-focus-only"));
    }, $_dismissMenu$:function($event$$359$$) {
      this.$_menuVisible$ && (this.$_menu$.$__collapseAll$($event$$359$$, !0), this.$_menu$.$__dismiss$($event$$359$$));
    }, $_menuDismissHandler$:function() {
      if ("button" === this.type || "anchor" === this.type) {
        this.$rootElement$.removeClass("oj-selected"), this.$_toggleDefaultClasses$();
      }
      this.$_menuVisible$ = !1;
    }, $_toggleDefaultClasses$:function() {
      var $defaultState$$, $focused$$7_focusedOnly$$;
      this.$rootElement$.is(".oj-hover, .oj-active, .oj-selected, .oj-disabled") ? $focused$$7_focusedOnly$$ = $defaultState$$ = !1 : ($focused$$7_focusedOnly$$ = this.$rootElement$.is(".oj-focus"), $defaultState$$ = !$focused$$7_focusedOnly$$);
      this.$rootElement$.toggleClass("oj-default", $defaultState$$);
      this.$rootElement$.toggleClass("oj-focus-only", $focused$$7_focusedOnly$$);
    }});
    $oj$$28$$.$__registerWidget$("oj.ojButtonset", $$$$27$$.oj.baseComponent, {$_items$:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a", widgetEventPrefix:"oj", options:{checked:null, focusManagement:"oneTabstop"}, $_setCheckedOnDom$:function($checked$$1$$, $$buttons$$1$$) {
      var $name$$106_type$$87_valid$$10_validRadios$$ = $$$$27$$.type($checked$$1$$), $allCheckboxes$$;
      if ("null" === $name$$106_type$$87_valid$$10_validRadios$$ || "array" === $name$$106_type$$87_valid$$10_validRadios$$) {
        $allCheckboxes$$ = $$buttons$$1$$.filter("input[type\x3dcheckbox]").length === $$buttons$$1$$.length;
      }
      if ($allCheckboxes$$ && "null" === $name$$106_type$$87_valid$$10_validRadios$$) {
        throw Error("Invalid 'checked' value set on JET Buttonset: " + $checked$$1$$);
      }
      if ("string" === $name$$106_type$$87_valid$$10_validRadios$$ || "null" === $name$$106_type$$87_valid$$10_validRadios$$) {
        ($name$$106_type$$87_valid$$10_validRadios$$ = (($name$$106_type$$87_valid$$10_validRadios$$ = $$buttons$$1$$[0].name) || 1 >= $$buttons$$1$$.length) && $$buttons$$1$$.filter("input[type\x3dradio][name\x3d" + $name$$106_type$$87_valid$$10_validRadios$$ + "]").length === $$buttons$$1$$.length && (null === $checked$$1$$ || $$buttons$$1$$.filter("[value\x3d" + $checked$$1$$ + "]").length)) && $$buttons$$1$$.each(function() {
          this.checked = this.value === $checked$$1$$;
        }), $name$$106_type$$87_valid$$10_validRadios$$ = $name$$106_type$$87_valid$$10_validRadios$$ || null === $checked$$1$$;
      } else {
        if ("array" === $name$$106_type$$87_valid$$10_validRadios$$) {
          var $last$$2$$;
          ($name$$106_type$$87_valid$$10_validRadios$$ = $allCheckboxes$$ && $checked$$1$$.concat().sort().every(function($elem$$121$$) {
            var $retVal$$15$$ = $elem$$121$$ !== $last$$2$$ && $$buttons$$1$$.filter("[value\x3d" + $elem$$121$$ + "]").length;
            $last$$2$$ = $elem$$121$$;
            return $retVal$$15$$;
          })) && $$buttons$$1$$.each(function() {
            this.checked = -1 < $checked$$1$$.indexOf(this.value);
          });
        } else {
          $name$$106_type$$87_valid$$10_validRadios$$ = !1;
        }
      }
      if (!$name$$106_type$$87_valid$$10_validRadios$$) {
        throw Error("Invalid 'checked' value set on JET Buttonset: " + $checked$$1$$);
      }
    }, $_getCheckedFromDom$:function($$buttons$$2$$) {
      var $checked$$2$$ = void 0, $isRadio$$ = null, $name$$107$$ = null;
      $$buttons$$2$$.each(function() {
        if ("input" !== this.tagName.toLowerCase()) {
          return $checked$$2$$ = void 0, !1;
        }
        var $currentIsRadio_currentType$$ = this.type.toLowerCase(), $currentName$$;
        if ("radio" === $currentIsRadio_currentType$$) {
          $currentIsRadio_currentType$$ = !0, $currentName$$ = this.name.toLowerCase();
        } else {
          if ("checkbox" === $currentIsRadio_currentType$$) {
            $currentIsRadio_currentType$$ = !1, $currentName$$ = null;
          } else {
            return $checked$$2$$ = void 0, !1;
          }
        }
        if (void 0 !== $checked$$2$$ && ($currentIsRadio_currentType$$ !== $isRadio$$ || $currentName$$ !== $name$$107$$ || $isRadio$$ && !$name$$107$$)) {
          return $checked$$2$$ = void 0, !1;
        }
        void 0 === $checked$$2$$ ? ($checked$$2$$ = $currentIsRadio_currentType$$ ? this.checked ? this.value : null : this.checked ? [this.value] : [], $isRadio$$ = $currentIsRadio_currentType$$, $name$$107$$ = $currentName$$) : this.checked && ($isRadio$$ ? $checked$$2$$ = this.value : $checked$$2$$.push(this.value));
      });
      return $checked$$2$$;
    }, $_CompareOptionValues$:function($option$$28$$, $value1$$9$$, $value2$$8$$) {
      return "checked" === $option$$28$$ ? $value1$$9$$ === $value2$$8$$ ? !0 : "array" === $$$$27$$.type($value1$$9$$) && "array" === $$$$27$$.type($value2$$8$$) && !$$$$27$$($value1$$9$$).not($value2$$8$$).length && !$$$$27$$($value2$$8$$).not($value1$$9$$).length : this._superApply(arguments);
    }, $_InitOptions$:function($originalDefaults$$10$$, $constructorOptions$$12$$) {
      this._super($originalDefaults$$10$$, $constructorOptions$$12$$);
      this.$$buttons$ = this.element.find(this.$_items$);
      if (!("checked" in $constructorOptions$$12$$)) {
        this.$initCheckedFromDom$ = !0;
        var $checked$$3$$ = this.$_getCheckedFromDom$(this.$$buttons$);
        "array" === $$$$27$$.type($checked$$3$$) && (this.options.checked = []);
        void 0 !== $checked$$3$$ && this.option("checked", $checked$$3$$, {_context:{$internalSet$:!0}});
      }
    }, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-buttonset oj-component");
      this.$_setRole$(this.options.focusManagement);
      this.$_setup$(!0);
    }, $_NotifyContextMenuGesture$:function($currentButton_menu$$14$$, $event$$361$$, $eventType$$47$$) {
      $currentButton_menu$$14$$ = this.element.find(":oj-button[tabindex\x3d0]");
      this.$_OpenContextMenu$($event$$361$$, $eventType$$47$$, {launcher:$currentButton_menu$$14$$, position:{of:"keyboard" === $eventType$$47$$ ? $currentButton_menu$$14$$.ojButton("widget") : $event$$361$$}});
    }, $_propagateDisabled$:function($disabled$$6$$) {
      $disabled$$6$$ = !!$disabled$$6$$;
      this.$$buttons$.each(function() {
        $$$$27$$(this).data("oj-ojButton").$__setAncestorComponentDisabled$($disabled$$6$$);
      });
    }, $_setRole$:function($focusManagement$$) {
      "oneTabstop" === $focusManagement$$ ? this.element.attr("role", "toolbar") : this.element.removeAttr("role");
    }, _setOption:function($key$$139$$, $value$$238$$, $flags$$33$$) {
      "disabled" === $key$$139$$ ? this.$_propagateDisabled$($value$$238$$) : "checked" === $key$$139$$ ? (this.$_setCheckedOnDom$($value$$238$$, this.$$buttons$), this.$$buttons$.each(function() {
        $$$$27$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1);
      })) : "focusManagement" === $key$$139$$ && this.$_setRole$($value$$238$$);
      this._superApply(arguments);
    }, refresh:function() {
      this._super();
      this.$_setup$(!1);
    }, $_setup$:function($isCreate$$1$$) {
      var $self$$150$$ = this;
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      $isCreate$$1$$ ? this.$initCheckedFromDom$ || this.$_setCheckedOnDom$(this.options.checked, this.$$buttons$) : this.$$buttons$ = this.element.find(this.$_items$);
      this.$$buttons$.filter(":oj-button").ojButton("refresh").each(function() {
        $$$$27$$(this).data("oj-ojButton").$_applyCheckedStateFromDom$(!1);
      }).end().not(":oj-button").ojButton().end().map(function() {
        return $$$$27$$(this).ojButton("widget")[0];
      }).removeClass("oj-buttonset-first oj-buttonset-last").filter(":first").addClass("oj-buttonset-first").end().filter(":last").addClass("oj-buttonset-last").end().end();
      this.$_propagateDisabled$(this.options.disabled);
      "oneTabstop" === this.options.focusManagement && (this.$$buttons$.unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$362$$) {
        $self$$150$$.$_handleKeyDown$($event$$362$$, $$$$27$$(this));
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$27$$(this).data("oj-ojButton").$_IsEffectivelyDisabled$() || $self$$150$$.$_setTabStop$($$$$27$$(this));
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$150$$.$_setTabStop$($$$$27$$(this));
      }), this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$27$$(this).data("oj-ojButton").$_IsEffectivelyDisabled$();
      }), this.$_initTabindexes$($isCreate$$1$$));
    }, $_initTabindexes$:function($$newTabStop_isCreate$$2$$) {
      var $$last$$ = $$$$27$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop_isCreate$$2$$ = $$newTabStop_isCreate$$2$$ || !$$last$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$;
      this.$_setTabStop$($$newTabStop_isCreate$$2$$);
    }, $_mapToTabbable$:function($$button$$) {
      var $$enabledButtons$$ = this.$$enabledButtons$;
      return $$button$$.map(function($index$$213$$, $elem$$122$$) {
        if ("radio" != $elem$$122$$.type || $elem$$122$$.checked || "" == $elem$$122$$.name) {
          return $elem$$122$$;
        }
        var $$checkedRadio$$ = $_radioGroup$$($elem$$122$$, $$enabledButtons$$).filter(":checked");
        return $$checkedRadio$$.length ? $$checkedRadio$$[0] : $elem$$122$$;
      });
    }, $_setTabStop$:function($$button$$1$$) {
      $$button$$1$$ = this.$_mapToTabbable$($$button$$1$$);
      var $button$$ = $$button$$1$$[0], $last$$3$$ = this.$_lastTabStop$;
      $button$$ !== $last$$3$$ && ($$$$27$$($last$$3$$).attr("tabindex", "-1"), $$button$$1$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$);
    }, $_handleKeyDown$:function($event$$365$$, $$button$$2$$) {
      switch($event$$365$$.which) {
        case $$$$27$$.ui.keyCode.LEFT:
        ;
        case $$$$27$$.ui.keyCode.RIGHT:
          $event$$365$$.preventDefault();
          var $$enabledButtons$$1$$ = this.$$enabledButtons$, $length$$15$$ = $$enabledButtons$$1$$.length;
          if (2 > $length$$15$$) {
            break;
          }
          var $oldIndex$$1$$ = $$enabledButtons$$1$$.index($$button$$2$$);
          $$enabledButtons$$1$$.eq(($oldIndex$$1$$ + ($event$$365$$.which == $$$$27$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$15$$) % $length$$15$$).focus();
          break;
        case $$$$27$$.ui.keyCode.UP:
        ;
        case $$$$27$$.ui.keyCode.DOWN:
          "radio" == $$button$$2$$.attr("type") && $event$$365$$.preventDefault();
      }
    }, _destroy:function() {
      this.element.removeClass("oj-buttonset oj-component").removeAttr("role");
      "oneTabstop" === this.options.focusManagement && this.$$buttons$.attr("tabindex", "0");
      this.$$buttons$.map(function() {
        return $$$$27$$(this).ojButton("widget")[0];
      }).removeClass("oj-buttonset-first oj-buttonset-last").end().ojButton("destroy");
    }});
    var $_lastActive$$, $_lastToggleActive$$, $BUTTON_EVENT_NAMESPACE$$ = ".ojButton", $BASE_CLASSES$$ = "oj-button oj-component oj-enabled oj-default", $STATE_CLASSES$$ = "oj-hover oj-active oj-selected", $TYPE_CLASSES$$ = "oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only";
  })();
});
