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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$29$$, $$$$28$$) {
  (function() {
    $oj$$29$$.$__registerWidget$("oj.ojMenu", $$$$28$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", delay:300, role:"menu", widgetEventPrefix:"oj", options:{menuSelector:"ul", openOptions:{initialFocus:"menu", launcher:null, position:{my:"start top", at:"start bottom"}}, submenuOpenOptions:{position:{my:"start top", at:"end top"}}, beforeOpen:null, select:null}, _ComponentCreate:function() {
      this._super();
      this._focusForTesting = this.$_focus$;
      this._nextForTesting = this.$_next$;
      this._selectForTesting = this.$_select$;
      this.$activeMenu$ = this.element;
      this.$mouseHandled$ = !1;
      this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role, tabIndex:"0"});
      this._on(!0, {"mousedown .oj-menu-item":function($event$$366$$) {
        this.options.disabled && $event$$366$$.preventDefault();
      }, click:function($event$$367$$) {
        this.options.disabled && $event$$367$$.preventDefault();
      }, keydown:function($event$$368$$) {
        !this.options.disabled || $event$$368$$.keyCode !== $$$$28$$.ui.keyCode.ESCAPE && $event$$368$$.keyCode !== $$$$28$$.ui.keyCode.TAB || ($event$$368$$.keyCode === $$$$28$$.ui.keyCode.TAB && $event$$368$$.preventDefault(), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$368$$));
      }});
      this.options.disabled && this.element.addClass("oj-disabled").attr("aria-disabled", "true");
      var $handleMouseEnterMenuItem$$ = function($event$$369$$) {
        var $target$$88$$ = $$$$28$$($event$$369$$.currentTarget);
        $target$$88$$.siblings().children(".oj-focus-ancestor").removeClass("oj-focus-ancestor");
        this.$_focus$($event$$369$$, $target$$88$$);
      }.bind(this);
      this._on({"mousedown .oj-menu-item \x3e a":function($event$$370$$) {
        $event$$370$$.preventDefault();
      }, "click .oj-disabled \x3e a":function($event$$371$$) {
        $event$$371$$.preventDefault();
      }, click:function() {
        this.$mouseHandled$ = !1;
      }, touchstart:function() {
        this.$touchHandled$ = !1;
      }, "click .oj-menu-item:has(a)":function($event$$374$$) {
        var $target$$89$$ = $$$$28$$($event$$374$$.target).closest(".oj-menu-item");
        !this.$mouseHandled$ && $target$$89$$.not(".oj-disabled").length && (this.$mouseHandled$ = !0, $event$$374$$.preventDefault(), this.$active$ && this.$active$.closest($target$$89$$).length && this.$active$.get(0) != $target$$89$$.get(0) || ($target$$89$$.has(".oj-menu").length ? this.$_expand$($event$$374$$) : (this.$_select$($event$$374$$), this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.$active$ && 1 === this.$active$.parents(".oj-menu").length && clearTimeout(this.$timer$)))));
      }, "mouseenter .oj-menu-item":$handleMouseEnterMenuItem$$, "touchstart .oj-menu-item":function($event$$375$$) {
        this.$touchHandled$ || (this.$touchHandled$ = !0, $handleMouseEnterMenuItem$$($event$$375$$));
      }, mouseleave:function($event$$376$$) {
        this.$_collapse$($event$$376$$, "eventSubtree");
      }, "mouseleave .oj-menu":function($event$$377$$) {
        this.$_collapse$($event$$377$$, "eventSubtree");
      }, focus:function($event$$378$$, $keepActiveItem$$) {
        if (!$keepActiveItem$$) {
          var $item$$89$$ = this.$active$ || this.element.children(".oj-menu-item").eq(0);
          this.$_focus$($event$$378$$, $item$$89$$);
        }
      }, keydown:this.$_keydown$, keyup:function($event$$379$$) {
        if ($event$$379$$.keyCode == $$$$28$$.ui.keyCode.ENTER || $event$$379$$.keyCode == $$$$28$$.ui.keyCode.SPACE) {
          this.$__spaceEnterDownInMenu$ = !1;
        }
      }});
      this.$_usingCallback$ = $$$$28$$.proxy(this.$_usingHandler$, this);
      this.$_setup$();
    }, $__contextMenuPressHoldJustEnded$:function($val$$49$$) {
      if (arguments.length) {
        $_contextMenuPressHoldJustEnded$$ = $val$$49$$;
      } else {
        return $_contextMenuPressHoldJustEnded$$;
      }
    }, $_clickAwayHandler$:function($event$$380$$) {
      if (("focus" === $event$$380$$.type || "mousedown" === $event$$380$$.type || "touchstart" === $event$$380$$.type || 93 == $event$$380$$.which || 121 == $event$$380$$.which && $event$$380$$.shiftKey || 93 == $event$$380$$.keyCode) && ("mousedown" !== $event$$380$$.type || !$_contextMenuPressHoldJustEnded$$)) {
        var $openPopupMenus$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
        $$$$28$$.each($openPopupMenus$$, function($index$$214$$, $menu$$15$$) {
          !$$$$28$$($event$$380$$.target).closest($menu$$15$$.element).length && ("keydown" === $event$$380$$.type || "mousedown" === $event$$380$$.type && 3 === $event$$380$$.which || !$$$$28$$($event$$380$$.target).closest($menu$$15$$.$_launcher$).length || $menu$$15$$.$_launcherClickShouldDismiss$ && ("mousedown" === $event$$380$$.type && 3 !== $event$$380$$.which || "touchstart" === $event$$380$$.type)) && ($menu$$15$$.$_collapse$($event$$380$$, "eventSubtree"), $menu$$15$$.$_launcher$ && $menu$$15$$.$__dismiss$($event$$380$$));
        });
      }
    }, _setOption:function($key$$140$$, $value$$239$$) {
      this._superApply(arguments);
      this.$_launcher$ || ("submenuOpenOptions" === $key$$140$$ ? this.$_submenuPosition$ = $oj$$29$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$239$$.position, this.$isRtl$) : "submenuOpenOptions.position" === $key$$140$$ && (this.$_submenuPosition$ = $oj$$29$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$239$$, this.$isRtl$)));
    }, _destroy:function() {
      this.element.is(":visible") && this.$__dismiss$();
      clearTimeout(this.$timer$);
      delete this.$timer$;
      this.element.removeAttr("aria-activedescendant").removeClass("oj-component oj-menu-icons").find(".oj-menu").addBack().removeClass("oj-menu").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var $elem$$123$$ = $$$$28$$(this);
        $elem$$123$$.data("oj-ojMenu-submenu-icon") && $elem$$123$$.remove();
      });
      this.element.find("a").removeAttr("aria-expanded");
      this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
      delete this.$_popupServiceEvents$;
      delete this.$_usingCallback$;
      var $closeDelayTimer$$1$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$1$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$1$$));
      this._super();
    }, $_keydown$:function($event$$381$$) {
      function $escape$$1$$($value$$240$$) {
        return $value$$240$$.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26");
      }
      var $match$$19_prev$$2$$, $activeItemId_character$$1$$, $skip$$1_topLevelAnchorSelector$$, $regex$$1$$, $preventDefault$$ = !0;
      switch($event$$381$$.keyCode) {
        case $$$$28$$.ui.keyCode.HOME:
          this.$_move$("first", "first", $event$$381$$);
          break;
        case $$$$28$$.ui.keyCode.END:
          this.$_move$("last", "last", $event$$381$$);
          break;
        case $$$$28$$.ui.keyCode.UP:
          this.$_previous$($event$$381$$);
          break;
        case $$$$28$$.ui.keyCode.DOWN:
          this.$_next$($event$$381$$);
          break;
        case $$$$28$$.ui.keyCode.LEFT:
        ;
        case $$$$28$$.ui.keyCode.RIGHT:
          $event$$381$$.keyCode === $$$$28$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? this.$active$ && !this.$active$.is(".oj-disabled") && this.$_expand$($event$$381$$) : this.$_collapse$($event$$381$$, "active");
          break;
        case $$$$28$$.ui.keyCode.ENTER:
        ;
        case $$$$28$$.ui.keyCode.SPACE:
          this.$_handleEnterSpace$($event$$381$$);
          this.$__spaceEnterDownInMenu$ = !0;
          var $self$$151$$ = this;
          setTimeout(function() {
            $self$$151$$.$__spaceEnterDownInMenu$ = !1;
          }, 100);
          break;
        case $$$$28$$.ui.keyCode.TAB:
          $event$$381$$.preventDefault();
          this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$381$$);
          break;
        case $$$$28$$.ui.keyCode.ESCAPE:
          this.$_launcher$ ? ($activeItemId_character$$1$$ = this.element.attr("aria-activedescendant"), $skip$$1_topLevelAnchorSelector$$ = "#" + this.element.attr("id") + "\x3e*\x3ea", $activeItemId_character$$1$$ && !$$$$28$$("#" + $activeItemId_character$$1$$).is($skip$$1_topLevelAnchorSelector$$) ? this.$_collapse$($event$$381$$, "active") : this.$_focusLauncherAndDismiss$($event$$381$$)) : this.$_collapse$($event$$381$$, "active");
          break;
        default:
          $preventDefault$$ = !1, $match$$19_prev$$2$$ = this.$previousFilter$ || "", $activeItemId_character$$1$$ = String.fromCharCode($event$$381$$.keyCode), $skip$$1_topLevelAnchorSelector$$ = !1, clearTimeout(this.$filterTimer$), $activeItemId_character$$1$$ === $match$$19_prev$$2$$ ? $skip$$1_topLevelAnchorSelector$$ = !0 : $activeItemId_character$$1$$ = $match$$19_prev$$2$$ + $activeItemId_character$$1$$, $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$19_prev$$2$$ = 
          this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$28$$(this).children("a").text());
          }), $match$$19_prev$$2$$ = $skip$$1_topLevelAnchorSelector$$ && -1 !== $match$$19_prev$$2$$.index(this.$active$.next()) ? this.$active$.nextAll(".oj-menu-item") : $match$$19_prev$$2$$, $match$$19_prev$$2$$.length || ($activeItemId_character$$1$$ = String.fromCharCode($event$$381$$.keyCode), $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$19_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$28$$(this).children("a").text());
          })), $match$$19_prev$$2$$.length ? (this.$_focus$($event$$381$$, $match$$19_prev$$2$$), 1 < $match$$19_prev$$2$$.length ? (this.$previousFilter$ = $activeItemId_character$$1$$, this.$filterTimer$ = this._delay(function() {
            delete this.$previousFilter$;
          }, 1E3)) : delete this.$previousFilter$) : delete this.$previousFilter$;
      }
      $preventDefault$$ && $event$$381$$.preventDefault();
    }, $_handleEnterSpace$:function($event$$382$$) {
      this.$active$ && !this.$active$.is(".oj-disabled") && (this.$active$.children("a[aria-haspopup\x3d'true']").length ? this.$_expand$($event$$382$$) : this.$_select$($event$$382$$));
    }, refresh:function() {
      this._super();
      this.$_setup$();
      var $element$$104$$ = this.element;
      if ($element$$104$$.is(":visible")) {
        var $position$$19$$ = $element$$104$$.data("oj-menu-position");
        $position$$19$$ && $element$$104$$.position($position$$19$$);
        $element$$104$$.find(".oj-menu").each(function() {
          var $menu$$16$$ = $$$$28$$(this);
          $menu$$16$$.is(":visible") && ($position$$19$$ = $menu$$16$$.data("oj-menu-position")) && $menu$$16$$.position($position$$19$$);
        });
      }
    }, $_setup$:function() {
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_submenuPosition$ = $oj$$29$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.submenuOpenOptions.position, this.$isRtl$);
      var $self$$152$$ = this, $children$$18_submenus$$ = this.element.find(this.options.menuSelector);
      this.element.toggleClass("oj-menu-icons", !!this.element.find(".oj-menu-item-icon").length);
      $children$$18_submenus$$.filter(":not(.oj-menu)").addClass("oj-menu").hide().attr({role:this.role, "aria-hidden":"true"}).each(function() {
        var $menu$$17$$ = $$$$28$$(this), $item$$90_itemId$$1$$ = $self$$152$$.$_getSubmenuAnchor$($menu$$17$$), $submenuIcon$$ = $$$$28$$("\x3cspan\x3e");
        $submenuIcon$$.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon", !0);
        $item$$90_itemId$$1$$.attr("aria-haspopup", "true").attr("aria-expanded", "false").prepend($submenuIcon$$);
        $item$$90_itemId$$1$$ = $item$$90_itemId$$1$$.attr("id");
        $menu$$17$$.attr("aria-labelledby", $item$$90_itemId$$1$$);
      });
      $children$$18_submenus$$ = $children$$18_submenus$$.add(this.element).children();
      $children$$18_submenus$$.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
      $children$$18_submenus$$.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role", "presentation").children("a").uniqueId().attr({tabIndex:"-1", role:"menuitem"});
      $children$$18_submenus$$.filter(":not(.oj-menu-item)").each(function() {
        var $item$$91$$ = $$$$28$$(this);
        /[^\-\u2014\u2013\s]/.test($item$$91$$.text()) || $item$$91$$.addClass("oj-menu-divider").attr("role", "separator");
      });
      $children$$18_submenus$$.filter(".oj-disabled").children("a").attr("aria-disabled", "true");
      $children$$18_submenus$$.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");
      this.$active$ && !$$$$28$$.contains(this.element[0], this.$active$[0]) && this.$_blur$();
    }, $_getSubmenuAnchor$:function($submenu$$) {
      return $submenu$$.prev("a");
    }, $_itemRole$:function() {
      return "menuitem";
    }, $_focus$:function($event$$383$$, $item$$92$$) {
      $event$$383$$ && "focus" === $event$$383$$.type || clearTimeout(this.$timer$);
      $item$$92$$ = $item$$92$$.first();
      this.$_makeActive$($item$$92$$, $event$$383$$);
      $item$$92$$.parent().closest(".oj-menu-item").children("a:first").addClass("oj-focus-ancestor");
      $event$$383$$ && "keydown" === $event$$383$$.type ? this.$_close$() : this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
      }, this.delay);
      var $nested$$1$$ = $item$$92$$.children(".oj-menu");
      $nested$$1$$.length && $event$$383$$ && /^mouse/.test($event$$383$$.type) && !this.$active$.hasClass("oj-disabled") && this.$_startOpening$($nested$$1$$);
      this.$activeMenu$ = $item$$92$$.parent();
    }, $_makeActive$:function($item$$93$$, $event$$384$$) {
      if (!$item$$93$$.is(this.$active$)) {
        var $previousItem$$ = this.$active$ ? this.$active$ : $$$$28$$(), $anchor$$2$$ = $item$$93$$.children("a");
        this.$active$ = $item$$93$$;
        this.element.attr("aria-activedescendant", $anchor$$2$$.attr("id"));
        $previousItem$$.children("a").removeClass("oj-focus");
        $anchor$$2$$.addClass("oj-focus");
        this._trigger("_activeItem", $event$$384$$, {previousItem:$previousItem$$, item:$item$$93$$, privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_removeActive$:function($event$$385$$) {
      if (this.$active$) {
        var $previousItem$$1$$ = this.$active$;
        this.$active$ = null;
        this.element.removeAttr("aria-activedescendant");
        $previousItem$$1$$.children("a").removeClass("oj-focus");
        this._trigger("_activeItem", $event$$385$$, {previousItem:$previousItem$$1$$, item:$$$$28$$(), privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_blur$:function($event$$386$$) {
      clearTimeout(this.$timer$);
      this.$_removeActive$($event$$386$$);
    }, $_focusLauncherAndDismiss$:function($event$$387$$) {
      this.$_launcher$.focus();
      this.$__dismiss$($event$$387$$);
    }, $__dismiss$:function($event$$388$$) {
      var $psOptions$$2$$ = {};
      $psOptions$$2$$[$oj$$29$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
      $oj$$29$$.$PopupService$.$getInstance$().close($psOptions$$2$$);
      this.element.removeData("oj-menu-position");
      this.$_launcher$ = void 0;
      this._trigger("__dismiss", $event$$388$$, {});
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, $_normalizeEventForPosition$:function($event$$389$$) {
      $$$$28$$.each(["pageX", "pageY"], function($index$$215$$, $pagePos$$) {
        if ($event$$389$$ && void 0 === $event$$389$$[$pagePos$$] && $event$$389$$.originalEvent) {
          var $firstTouch$$2_originalEvent$$10$$ = $event$$389$$.originalEvent, $touchList_type$$88$$ = $firstTouch$$2_originalEvent$$10$$.type;
          ($touchList_type$$88$$ = "touchstart" === $touchList_type$$88$$ || "touchmove" === $touchList_type$$88$$ ? "touches" : "touchend" === $touchList_type$$88$$ ? "changedTouches" : null) && ($firstTouch$$2_originalEvent$$10$$ = $firstTouch$$2_originalEvent$$10$$[$touchList_type$$88$$][0]) && ($event$$389$$[$pagePos$$] = $firstTouch$$2_originalEvent$$10$$[$pagePos$$]);
        }
      });
    }, open:function($event$$390$$, $initialFocus_openOptions$$5$$, $psOptions$$3_submenuOpenOptions$$1_usingCallback$$) {
      this.element.is(":visible") && this.$__dismiss$();
      $initialFocus_openOptions$$5$$ = $$$$28$$.extend({}, this.options.openOptions, $initialFocus_openOptions$$5$$);
      $initialFocus_openOptions$$5$$.position = $$$$28$$.extend({}, $initialFocus_openOptions$$5$$.position);
      $psOptions$$3_submenuOpenOptions$$1_usingCallback$$ = $$$$28$$.extend({}, this.options.submenuOpenOptions, $psOptions$$3_submenuOpenOptions$$1_usingCallback$$);
      this.$_normalizeEventForPosition$($event$$390$$);
      this.$_launcherClickShouldDismiss$ = this.$__openingContextMenu$;
      if (this._trigger("beforeOpen", $event$$390$$, {openOptions:$initialFocus_openOptions$$5$$})) {
        var $launcher$$8$$ = $initialFocus_openOptions$$5$$.launcher;
        if (($launcher$$8$$ = "string" === $$$$28$$.type($launcher$$8$$) ? $$$$28$$($launcher$$8$$) : $launcher$$8$$) && $launcher$$8$$.length) {
          var $focusFirstItem_position$$20$$ = $oj$$29$$.$PositionUtils$.$normalizeHorizontalAlignment$($initialFocus_openOptions$$5$$.position, this.$isRtl$);
          $focusFirstItem_position$$20$$.of = $oj$$29$$.$PositionUtils$.$normalizePositionOf$($focusFirstItem_position$$20$$.of, $launcher$$8$$, $event$$390$$);
          if (null == $focusFirstItem_position$$20$$.of) {
            $oj$$29$$.$Logger$.warn("position.of passed to Menu.open() is 'event', but the event is null.  Ignoring the call.");
          } else {
            var $currentMenu$$ = this.element[0], $openPopupMenus$$1$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
            $$$$28$$.each($openPopupMenus$$1$$, function($index$$216$$, $menu$$18$$) {
              $menu$$18$$.element[0] !== $currentMenu$$ && ($menu$$18$$.$_collapse$($event$$390$$, "eventSubtree"), $menu$$18$$.$_launcher$ && $menu$$18$$.$__dismiss$($event$$390$$));
            });
            this.$_submenuPosition$ = $oj$$29$$.$PositionUtils$.$normalizeHorizontalAlignment$($psOptions$$3_submenuOpenOptions$$1_usingCallback$$.position, this.$isRtl$);
            $psOptions$$3_submenuOpenOptions$$1_usingCallback$$ = this.$_usingCallback$;
            $$$$28$$.isFunction($focusFirstItem_position$$20$$.using) && $focusFirstItem_position$$20$$.using !== $psOptions$$3_submenuOpenOptions$$1_usingCallback$$ && ($focusFirstItem_position$$20$$.origUsing = $focusFirstItem_position$$20$$.using);
            $focusFirstItem_position$$20$$.using = $psOptions$$3_submenuOpenOptions$$1_usingCallback$$;
            $psOptions$$3_submenuOpenOptions$$1_usingCallback$$ = {};
            $psOptions$$3_submenuOpenOptions$$1_usingCallback$$[$oj$$29$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
            $psOptions$$3_submenuOpenOptions$$1_usingCallback$$[$oj$$29$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$8$$;
            $psOptions$$3_submenuOpenOptions$$1_usingCallback$$[$oj$$29$$.$PopupService$.$OPTION$.$POSITION$] = $focusFirstItem_position$$20$$;
            $psOptions$$3_submenuOpenOptions$$1_usingCallback$$[$oj$$29$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
            $psOptions$$3_submenuOpenOptions$$1_usingCallback$$[$oj$$29$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-menu-layer";
            $oj$$29$$.$PopupService$.$getInstance$().open($psOptions$$3_submenuOpenOptions$$1_usingCallback$$);
            this.element.data("oj-menu-position", $focusFirstItem_position$$20$$);
            $initialFocus_openOptions$$5$$ = $initialFocus_openOptions$$5$$.initialFocus;
            (($focusFirstItem_position$$20$$ = "firstItem" === $initialFocus_openOptions$$5$$) || "menu" === $initialFocus_openOptions$$5$$) && this.element.focus();
            $focusFirstItem_position$$20$$ ? this.$_focus$($event$$390$$, this.element.children().first()) : this.$_blur$($event$$390$$);
            this.$_launcher$ = $launcher$$8$$;
            $_openPopupMenus$$.push(this);
          }
        } else {
          $oj$$29$$.$Logger$.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call.");
        }
      }
    }, $_startOpening$:function($submenu$$1$$) {
      clearTimeout(this.$timer$);
      "true" === $submenu$$1$$.attr("aria-hidden") && (this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
        this.$_open$($submenu$$1$$);
      }, this.delay));
    }, $_open$:function($submenu$$2$$) {
      var $position$$21$$ = $$$$28$$.extend({of:this.$active$}, this.$_submenuPosition$);
      clearTimeout(this.$timer$);
      this.element.find(".oj-menu").not($submenu$$2$$.parents(".oj-menu")).hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      $submenu$$2$$.show().removeAttr("aria-hidden").position($position$$21$$).data("oj-menu-position", $position$$21$$);
      this.$_getSubmenuAnchor$($submenu$$2$$).attr("aria-expanded", "true");
      !this.$_launcher$ && 0 > $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.push(this);
    }, $__collapseAll$:function($event$$391$$, $all$$1$$, $delay$$3$$) {
      function $collapseMenu$$() {
        delete $self$$153$$.$timer$;
        var $currentMenu$$1$$ = $all$$1$$ ? $self$$153$$.element : $$$$28$$($event$$391$$ && $event$$391$$.target).closest($self$$153$$.element.find(".oj-menu"));
        $currentMenu$$1$$.length || ($currentMenu$$1$$ = $self$$153$$.element);
        $self$$153$$.$_close$($currentMenu$$1$$);
        $self$$153$$.$_blur$($event$$391$$);
        $self$$153$$.$activeMenu$ = $currentMenu$$1$$;
      }
      clearTimeout(this.$timer$);
      var $self$$153$$ = this;
      $delay$$3$$ ? this.$timer$ = this._delay($collapseMenu$$, $delay$$3$$) : $collapseMenu$$();
    }, $_close$:function($startMenu$$) {
      $startMenu$$ || ($startMenu$$ = this.$active$ ? this.$active$.parent() : this.element);
      var $menus$$1$$ = $startMenu$$.find(".oj-menu");
      $menus$$1$$.hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      this.$_getSubmenuAnchor$($menus$$1$$).attr("aria-expanded", "false");
      $startMenu$$.find("a.oj-focus-ancestor").removeClass("oj-focus-ancestor");
      this.$_launcher$ || 0 <= $_openPopupMenus$$.indexOf(this) && $startMenu$$ === this.element && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, $_collapse$:function($event$$392$$, $which$$) {
      if (null == $which$$ || "active" === $which$$) {
        var $newItem$$ = this.$activeMenu$ && this.$activeMenu$.closest(".oj-menu-item", this.element);
        $newItem$$ && $newItem$$.length && (this.$_close$(), this.$_focus$($event$$392$$, $newItem$$));
      } else {
        "all" === $which$$ || "eventSubtree" === $which$$ ? this.$__collapseAll$($event$$392$$, "all" === $which$$, this.delay) : $oj$$29$$.$Logger$.warn("Invalid param " + $which$$ + " passed to Menu._collapse().  Ignoring the call.");
      }
    }, $_expand$:function($event$$393$$) {
      var $newItem$$1$$ = this.$active$ && this.$active$.children(".oj-menu ").children(".oj-menu-item").first();
      $newItem$$1$$ && $newItem$$1$$.length && (this.$_open$($newItem$$1$$.parent()), this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_focus$($event$$393$$, $newItem$$1$$);
      }));
    }, $_next$:function($event$$394$$) {
      this.$_move$("next", "first", $event$$394$$);
    }, $_previous$:function($event$$395$$) {
      this.$_move$("prev", "last", $event$$395$$);
    }, $_isFirstItem$:function() {
      return this.$active$ && !this.$active$.prevAll(".oj-menu-item").length;
    }, $_isLastItem$:function() {
      return this.$active$ && !this.$active$.nextAll(".oj-menu-item").length;
    }, $_move$:function($direction$$10$$, $filter$$5$$, $event$$396$$) {
      var $next$$5$$;
      this.$active$ && ($next$$5$$ = "first" === $direction$$10$$ || "last" === $direction$$10$$ ? this.$active$["first" === $direction$$10$$ ? "prevAll" : "nextAll"](".oj-menu-item").eq(-1) : this.$active$[$direction$$10$$ + "All"](".oj-menu-item").eq(0));
      $next$$5$$ && $next$$5$$.length && this.$active$ || ($next$$5$$ = this.$activeMenu$.children(".oj-menu-item")[$filter$$5$$]());
      this.$_focus$($event$$396$$, $next$$5$$);
    }, $_select$:function($event$$397$$) {
      if (!this.$active$ && $event$$397$$ && $event$$397$$.target) {
        var $menuItem$$1_ui$$19$$ = $$$$28$$($event$$397$$.target).closest(".oj-menu-item");
        $menuItem$$1_ui$$19$$.closest(this.element).length && this.$_makeActive$($menuItem$$1_ui$$19$$, $event$$397$$);
      }
      this.$active$ ? this.$active$.has(".oj-menu").length || this.$active$.is(".oj-disabled") ? $oj$$29$$.$Logger$.warn("Selecting a disabled menu item or parent menu item is not allowed.") : ($menuItem$$1_ui$$19$$ = {item:this.$active$}, this.$__collapseAll$($event$$397$$, !0), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$397$$), this._trigger("select", $event$$397$$, $menuItem$$1_ui$$19$$)) : $oj$$29$$.$Logger$.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$2$$ = this.$_popupServiceEvents$ = {};
        $events$$2$$[$oj$$29$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$28$$.proxy(this.$_closeAll$, this);
        $events$$2$$[$oj$$29$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$28$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$2$$[$oj$$29$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$28$$.proxy(this.refresh, this);
        $events$$2$$[$oj$$29$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $$$$28$$.proxy(this.$_clickAwayHandler$, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeAll$:function() {
      this.$_close$(this.element);
      this.$__dismiss$(null);
    }, $_usingHandler$:function($pos$$10$$, $props$$14$$) {
      var $origUsing_position$$22_rootMenu$$ = $props$$14$$.element.element;
      $origUsing_position$$22_rootMenu$$.css($pos$$10$$);
      ($origUsing_position$$22_rootMenu$$ = $origUsing_position$$22_rootMenu$$.data("oj-menu-position")) && ($origUsing_position$$22_rootMenu$$ = $origUsing_position$$22_rootMenu$$.origUsing) && $origUsing_position$$22_rootMenu$$($pos$$10$$, $props$$14$$);
    }});
    var $_openPopupMenus$$ = [], $_contextMenuPressHoldJustEnded$$ = !1;
  })();
});
