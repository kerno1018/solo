/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$59$$, $$$$54$$) {
  (function() {
    $oj$$59$$.$__registerWidget$("oj.ojToolbar", $$$$54$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{}, $_InitOptions$:function($originalDefaults$$18$$, $constructorOptions$$20$$) {
      this._super($originalDefaults$$18$$, $constructorOptions$$20$$);
      "disabled" in $constructorOptions$$20$$ && $oj$$59$$.$Logger$.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.");
    }, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-toolbar oj-component").attr("role", "toolbar");
      this.$_setup$(!0);
    }, $_NotifyContextMenuGesture$:function($currentButton$$1_menu$$28$$, $event$$575$$, $eventType$$57$$) {
      $currentButton$$1_menu$$28$$ = this.element.find(":oj-button[tabindex\x3d0]");
      this.$_OpenContextMenu$($event$$575$$, $eventType$$57$$, {launcher:$currentButton$$1_menu$$28$$, position:{of:"keyboard" === $eventType$$57$$ ? $currentButton$$1_menu$$28$$.ojButton("widget") : $event$$575$$}});
    }, _setOption:function($key$$177$$, $value$$277$$) {
      "disabled" === $key$$177$$ ? $oj$$59$$.$Logger$.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.  Ignoring the call.") : this._superApply(arguments);
    }, refresh:function() {
      this._super();
      this.$_setup$(!1);
    }, $_setup$:function($isCreate$$3$$) {
      var $self$$193$$ = this;
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$$buttons$ = this.element.find(":oj-button").unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$576$$) {
        $self$$193$$.$_handleKeyDown$($event$$576$$, $$$$54$$(this));
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$54$$(this).ojButton("option", "disabled") || $self$$193$$.$_setTabStop$($$$$54$$(this));
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$193$$.$_setTabStop$($$$$54$$(this));
      });
      this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$54$$(this).ojButton("option", "disabled");
      });
      this.$_initTabindexes$($isCreate$$3$$);
    }, $_initTabindexes$:function($$newTabStop$$1_isCreate$$4$$) {
      var $$last$$1$$ = $$$$54$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop$$1_isCreate$$4$$ = $$newTabStop$$1_isCreate$$4$$ || !$$last$$1$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$1$$;
      this.$_setTabStop$($$newTabStop$$1_isCreate$$4$$);
    }, $_mapToTabbable$:function($$button$$3$$) {
      var $$enabledButtons$$2$$ = this.$$enabledButtons$;
      return $$button$$3$$.map(function($index$$291$$, $elem$$154$$) {
        if ("radio" != $elem$$154$$.type || $elem$$154$$.checked || "" == $elem$$154$$.name) {
          return $elem$$154$$;
        }
        var $$checkedRadio$$1_$radios$$inline_995_name$$inline_994$$ = $elem$$154$$.name;
        $$checkedRadio$$1_$radios$$inline_995_name$$inline_994$$ ? ($$checkedRadio$$1_$radios$$inline_995_name$$inline_994$$ = $$checkedRadio$$1_$radios$$inline_995_name$$inline_994$$.replace(/'/g, "\\'"), $$checkedRadio$$1_$radios$$inline_995_name$$inline_994$$ = $$enabledButtons$$2$$.filter(":radio[name\x3d'" + $$checkedRadio$$1_$radios$$inline_995_name$$inline_994$$ + "']:oj-button")) : $$checkedRadio$$1_$radios$$inline_995_name$$inline_994$$ = $$enabledButtons$$2$$.filter($elem$$154$$).filter(":oj-button");
        $$checkedRadio$$1_$radios$$inline_995_name$$inline_994$$ = $$checkedRadio$$1_$radios$$inline_995_name$$inline_994$$.filter(":checked");
        return $$checkedRadio$$1_$radios$$inline_995_name$$inline_994$$.length ? $$checkedRadio$$1_$radios$$inline_995_name$$inline_994$$[0] : $elem$$154$$;
      });
    }, $_setTabStop$:function($$button$$4$$) {
      $$button$$4$$ = this.$_mapToTabbable$($$button$$4$$);
      var $button$$3$$ = $$button$$4$$[0], $last$$6$$ = this.$_lastTabStop$;
      $button$$3$$ !== $last$$6$$ && ($$$$54$$($last$$6$$).attr("tabindex", "-1"), $$button$$4$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$3$$);
    }, $_handleKeyDown$:function($event$$579$$, $$button$$5$$) {
      switch($event$$579$$.which) {
        case $$$$54$$.ui.keyCode.LEFT:
        ;
        case $$$$54$$.ui.keyCode.RIGHT:
          $event$$579$$.preventDefault();
          var $$enabledButtons$$3$$ = this.$$enabledButtons$, $length$$19$$ = $$enabledButtons$$3$$.length;
          if (2 > $length$$19$$) {
            break;
          }
          var $oldIndex$$2$$ = $$enabledButtons$$3$$.index($$button$$5$$);
          $$enabledButtons$$3$$.eq(($oldIndex$$2$$ + ($event$$579$$.which == $$$$54$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$19$$) % $length$$19$$).focus();
          break;
        case $$$$54$$.ui.keyCode.UP:
        ;
        case $$$$54$$.ui.keyCode.DOWN:
          "radio" == $$button$$5$$.attr("type") && $event$$579$$.preventDefault();
      }
    }, _destroy:function() {
      this.element.removeClass("oj-toolbar oj-component").removeAttr("role");
      this.$$buttons$.attr("tabindex", "0");
    }});
  })();
});
