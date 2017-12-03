/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore", "jqueryui-amd/draggable"], function($oj$$34$$, $$$$33$$) {
  (function() {
    var $mouseHandled$$ = !1;
    $$$$33$$(document).mouseup(function() {
      $mouseHandled$$ = !1;
    });
    $oj$$34$$.$__registerWidget$("oj.ojResizable", $$$$33$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{cancel:"input,textarea,button,select,option", distance:1, delay:0, maxHeight:null, maxWidth:null, minHeight:10, minWidth:10, alsoResize:!1, animate:!1, animateDuration:"slow", animateEasing:"swing", containment:!1, ghost:!1, grid:!1, handles:"e,s,se", helper:!1, resize:null, start:null, stop:null}, $_mouseInit$:function() {
      var $that$$1$$ = this;
      this.element.bind("mousedown." + this.widgetName, function($event$$426$$) {
        return $that$$1$$.$_mouseDown$($event$$426$$);
      }).bind("click." + this.widgetName, function($event$$427$$) {
        if (!0 === $$$$33$$.data($event$$427$$.target, $that$$1$$.widgetName + ".preventClickEvent")) {
          return $$$$33$$.removeData($event$$427$$.target, $that$$1$$.widgetName + ".preventClickEvent"), $event$$427$$.stopImmediatePropagation(), !1;
        }
      });
    }, $_mouseDestroy$:function() {
      this.element.unbind("." + this.widgetName);
      this.$_mouseMoveDelegate$ && this.document.unbind("mousemove." + this.widgetName, this.$_mouseMoveDelegate$).unbind("mouseup." + this.widgetName, this.$_mouseUpDelegate$);
    }, $_mouseDown$:function($event$$428$$) {
      if (!$mouseHandled$$) {
        this.$_mouseStarted$ && this.$_mouseUp$($event$$428$$);
        this.$_mouseDownEvent$ = $event$$428$$;
        var $that$$2$$ = this, $btnIsLeft$$ = 1 === $event$$428$$.which, $elIsCancel$$ = "string" === typeof this.options.cancel && $event$$428$$.target.nodeName ? $$$$33$$($event$$428$$.target).closest(this.options.cancel).length : !1;
        if (!$btnIsLeft$$ || $elIsCancel$$ || !this.$_mouseCapture$($event$$428$$)) {
          return!0;
        }
        (this.$mouseDelayMet$ = !this.options.delay) || setTimeout(function() {
          $that$$2$$.$mouseDelayMet$ = !0;
        }, this.options.delay);
        if (this.$_mouseDistanceMet$($event$$428$$) && this.$mouseDelayMet$ && (this.$_mouseStarted$ = !1 !== this.$_mouseStart$($event$$428$$), !this.$_mouseStarted$)) {
          return $event$$428$$.preventDefault(), !0;
        }
        !0 === $$$$33$$.data($event$$428$$.target, this.widgetName + ".preventClickEvent") && $$$$33$$.removeData($event$$428$$.target, this.widgetName + ".preventClickEvent");
        this.$_mouseMoveDelegate$ = function $this$$_mouseMoveDelegate$$($event$$429$$) {
          return $that$$2$$.$_mouseMove$($event$$429$$);
        };
        this.$_mouseUpDelegate$ = function $this$$_mouseUpDelegate$$($event$$430$$) {
          return $that$$2$$.$_mouseUp$($event$$430$$);
        };
        this.document.bind("mousemove." + this.widgetName, this.$_mouseMoveDelegate$).bind("mouseup." + this.widgetName, this.$_mouseUpDelegate$);
        $event$$428$$.preventDefault();
        return $mouseHandled$$ = !0;
      }
    }, $_mouseMove$:function($event$$431$$) {
      if ($$$$33$$.ui.$ie$ && (!document.documentMode || 9 > document.documentMode) && !$event$$431$$.button || !$event$$431$$.which) {
        return this.$_mouseUp$($event$$431$$);
      }
      if (this.$_mouseStarted$) {
        return this.$_mouseDrag$($event$$431$$), $event$$431$$.preventDefault();
      }
      this.$_mouseDistanceMet$($event$$431$$) && this.$mouseDelayMet$ && ((this.$_mouseStarted$ = !1 !== this.$_mouseStart$(this.$_mouseDownEvent$, $event$$431$$)) ? this.$_mouseDrag$($event$$431$$) : this.$_mouseUp$($event$$431$$));
      return!this.$_mouseStarted$;
    }, $_mouseUp$:function($event$$432$$) {
      this.document.unbind("mousemove." + this.widgetName, this.$_mouseMoveDelegate$).unbind("mouseup." + this.widgetName, this.$_mouseUpDelegate$);
      this.$_mouseStarted$ && (this.$_mouseStarted$ = !1, $event$$432$$.target === this.$_mouseDownEvent$.target && $$$$33$$.data($event$$432$$.target, this.widgetName + ".preventClickEvent", !0), this.$_mouseStop$($event$$432$$));
      return $mouseHandled$$ = !1;
    }, $_mouseDistanceMet$:function($event$$433$$) {
      return Math.max(Math.abs(this.$_mouseDownEvent$.pageX - $event$$433$$.pageX), Math.abs(this.$_mouseDownEvent$.pageY - $event$$433$$.pageY)) >= this.options.distance;
    }, $_mouseDelayMet$:function() {
      return this.$mouseDelayMet$;
    }, $_num$:function($value$$244$$) {
      return parseInt($value$$244$$, 10) || 0;
    }, $_isNumber$:function($value$$245$$) {
      return!isNaN(parseInt($value$$245$$, 10));
    }, $_hasScroll$:function($el$$11$$, $a$$107$$) {
      if ("hidden" === $$$$33$$($el$$11$$).css("overflow")) {
        return!1;
      }
      var $scroll$$13$$ = $a$$107$$ && "left" === $a$$107$$ ? "scrollLeft" : "scrollTop", $has$$ = !1;
      if (0 < $el$$11$$[$scroll$$13$$]) {
        return!0;
      }
      $el$$11$$[$scroll$$13$$] = 1;
      $has$$ = 0 < $el$$11$$[$scroll$$13$$];
      $el$$11$$[$scroll$$13$$] = 0;
      return $has$$;
    }, _ComponentCreate:function() {
      this._super();
      var $n$$24_o$$, $i$$378$$, $handle$$19$$, $axis$$46$$, $hname$$, $that$$3$$ = this;
      $n$$24_o$$ = this.options;
      this.element.addClass("oj-resizable");
      $$$$33$$.extend(this, {$originalElement$:this.element, $_proportionallyResizeElements$:[], $_helper$:null});
      this.handles = $n$$24_o$$.handles || ($$$$33$$(".oj-resizable-handle", this.element).length ? {$n$:".oj-resizable-n", $e$:".oj-resizable-e", $s$:".oj-resizable-s", $w$:".oj-resizable-w", $se$:".oj-resizable-se", $sw$:".oj-resizable-sw", $ne$:".oj-resizable-ne", $nw$:".oj-resizable-nw"} : "e,s,se");
      if (this.handles.constructor === String) {
        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), $n$$24_o$$ = this.handles.split(","), this.handles = {}, $i$$378$$ = 0;$i$$378$$ < $n$$24_o$$.length;$i$$378$$++) {
          $handle$$19$$ = $$$$33$$.trim($n$$24_o$$[$i$$378$$]), $hname$$ = "oj-resizable-" + $handle$$19$$, $axis$$46$$ = $$$$33$$("\x3cdiv class\x3d'oj-resizable-handle " + $hname$$ + "'\x3e\x3c/div\x3e"), this.handles[$handle$$19$$] = ".oj-resizable-" + $handle$$19$$, this.element.append($axis$$46$$);
        }
      }
      this.$_renderAxis$ = function $this$$_renderAxis$$() {
        for (var $i$$379$$ in this.handles) {
          this.handles[$i$$379$$].constructor === String && (this.handles[$i$$379$$] = this.element.children(this.handles[$i$$379$$]).first().show());
        }
      };
      this.$_renderAxis$();
      this.$_handles$ = $$$$33$$(".oj-resizable-handle", this.element);
      this.$_handles$.mouseover(function() {
        $that$$3$$.$resizing$ || (this.className && ($axis$$46$$ = this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)), $that$$3$$.axis = $axis$$46$$ && $axis$$46$$[1] ? $axis$$46$$[1] : "se");
      });
      this.$_mouseInit$();
    }, _destroy:function() {
      this.$_mouseDestroy$();
      $$$$33$$(this.$originalElement$).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove();
      return this;
    }, $_mouseCapture$:function($event$$434$$) {
      var $i$$380$$, $handle$$20$$, $capture$$ = !1;
      for ($i$$380$$ in this.handles) {
        if ($handle$$20$$ = $$$$33$$(this.handles[$i$$380$$])[0], $handle$$20$$ === $event$$434$$.target || $$$$33$$.contains($handle$$20$$, $event$$434$$.target)) {
          $capture$$ = !0;
        }
      }
      return!this.options.disabled && $capture$$;
    }, $_mouseStart$:function($event$$435$$) {
      var $curleft_iniPos$$, $curtop$$, $cursor_o$$1$$;
      $cursor_o$$1$$ = this.options;
      $curleft_iniPos$$ = this.element.position();
      var $el$$12$$ = this.element;
      this.$resizing$ = !0;
      /absolute/.test($el$$12$$.css("position")) ? $el$$12$$.css({position:"absolute", top:$el$$12$$.css("top"), left:$el$$12$$.css("left")}) : $el$$12$$.is(".oj-draggable") && $el$$12$$.css({position:"absolute", top:$curleft_iniPos$$.top, left:$curleft_iniPos$$.left});
      this.$_renderProxy$();
      $curleft_iniPos$$ = this.$_num$(this.helper.css("left"));
      $curtop$$ = this.$_num$(this.helper.css("top"));
      $cursor_o$$1$$.containment && ($curleft_iniPos$$ += $$$$33$$($cursor_o$$1$$.containment).scrollLeft() || 0, $curtop$$ += $$$$33$$($cursor_o$$1$$.containment).scrollTop() || 0);
      this.offset = this.helper.offset();
      this.position = {left:$curleft_iniPos$$, top:$curtop$$};
      this.size = {width:$el$$12$$.width(), height:$el$$12$$.height()};
      this.$originalSize$ = {width:$el$$12$$.width(), height:$el$$12$$.height()};
      this.$originalPosition$ = {left:$curleft_iniPos$$, top:$curtop$$};
      this.$sizeDiff$ = {width:$el$$12$$.outerWidth() - $el$$12$$.width(), height:$el$$12$$.outerHeight() - $el$$12$$.height()};
      this.$originalMousePosition$ = {left:$event$$435$$.pageX, top:$event$$435$$.pageY};
      this.$aspectRatio$ = this.$originalSize$.width / this.$originalSize$.height || 1;
      $cursor_o$$1$$ = $$$$33$$(".oj-resizable-" + this.axis).css("cursor");
      $$$$33$$("body").css("cursor", "auto" === $cursor_o$$1$$ ? this.axis + "-resize" : $cursor_o$$1$$);
      $el$$12$$.addClass("oj-resizable-resizing");
      this.$_propagate$("start", $event$$435$$);
      this.$_alsoresize_start$($event$$435$$);
      this.$_containment_start$($event$$435$$);
      return!0;
    }, $_mouseDrag$:function($event$$436$$) {
      var $data$$151_dx$$4$$, $el$$13$$ = this.helper, $props$$19$$ = {}, $dy$$4_smp$$ = this.$originalMousePosition$;
      $data$$151_dx$$4$$ = $event$$436$$.pageX - $dy$$4_smp$$.left || 0;
      var $dy$$4_smp$$ = $event$$436$$.pageY - $dy$$4_smp$$.top || 0, $trigger$$ = this.$_change$[this.axis];
      this.$prevPosition$ = {top:this.position.top, left:this.position.left};
      this.$prevSize$ = {width:this.size.width, height:this.size.height};
      if (!$trigger$$) {
        return!1;
      }
      $data$$151_dx$$4$$ = $trigger$$.apply(this, [$event$$436$$, $data$$151_dx$$4$$, $dy$$4_smp$$]);
      this.$_updateVirtualBoundaries$($event$$436$$.shiftKey);
      $event$$436$$.shiftKey && ($data$$151_dx$$4$$ = this.$_updateRatio$($data$$151_dx$$4$$, $event$$436$$));
      $data$$151_dx$$4$$ = this.$_respectSize$($data$$151_dx$$4$$, $event$$436$$);
      this.$_updateCache$($data$$151_dx$$4$$);
      this.$_propagate$("resize", $event$$436$$);
      this.$_alsoresize_resize$($event$$436$$, this.ui());
      this.$_containment_resize$($event$$436$$, this.ui());
      this.position.top !== this.$prevPosition$.top && ($props$$19$$.top = this.position.top + "px");
      this.position.left !== this.$prevPosition$.left && ($props$$19$$.left = this.position.left + "px");
      this.size.width !== this.$prevSize$.width && ($props$$19$$.width = this.size.width + "px");
      this.size.height !== this.$prevSize$.height && ($props$$19$$.height = this.size.height + "px");
      $el$$13$$.css($props$$19$$);
      !this.$_helper$ && this.$_proportionallyResizeElements$.length && this.$_proportionallyResize$();
      $$$$33$$.isEmptyObject($props$$19$$) || this._trigger("resize", $event$$436$$, this.ui());
      return!1;
    }, $_mouseStop$:function($event$$437$$) {
      this.$resizing$ = !1;
      $$$$33$$("body").css("cursor", "auto");
      this.element.removeClass("oj-resizable-resizing");
      this.$_propagate$("stop", $event$$437$$);
      this.$_alsoresize_stop$($event$$437$$);
      this.$_containment_stop$($event$$437$$);
      return!1;
    }, $_updateVirtualBoundaries$:function($forceAspectRatio_pMinWidth$$) {
      var $pMaxWidth$$, $pMinHeight$$, $pMaxHeight$$, $b$$69_o$$3$$;
      $b$$69_o$$3$$ = this.options;
      $b$$69_o$$3$$ = {minWidth:this.$_isNumber$($b$$69_o$$3$$.minWidth) ? $b$$69_o$$3$$.minWidth : 0, maxWidth:this.$_isNumber$($b$$69_o$$3$$.maxWidth) ? $b$$69_o$$3$$.maxWidth : Infinity, minHeight:this.$_isNumber$($b$$69_o$$3$$.minHeight) ? $b$$69_o$$3$$.minHeight : 0, maxHeight:this.$_isNumber$($b$$69_o$$3$$.maxHeight) ? $b$$69_o$$3$$.maxHeight : Infinity};
      $forceAspectRatio_pMinWidth$$ && ($forceAspectRatio_pMinWidth$$ = $b$$69_o$$3$$.minHeight * this.$aspectRatio$, $pMinHeight$$ = $b$$69_o$$3$$.minWidth / this.$aspectRatio$, $pMaxWidth$$ = $b$$69_o$$3$$.maxHeight * this.$aspectRatio$, $pMaxHeight$$ = $b$$69_o$$3$$.maxWidth / this.$aspectRatio$, $forceAspectRatio_pMinWidth$$ > $b$$69_o$$3$$.minWidth && ($b$$69_o$$3$$.minWidth = $forceAspectRatio_pMinWidth$$), $pMinHeight$$ > $b$$69_o$$3$$.minHeight && ($b$$69_o$$3$$.minHeight = $pMinHeight$$), 
      $pMaxWidth$$ < $b$$69_o$$3$$.maxWidth && ($b$$69_o$$3$$.maxWidth = $pMaxWidth$$), $pMaxHeight$$ < $b$$69_o$$3$$.maxHeight && ($b$$69_o$$3$$.maxHeight = $pMaxHeight$$));
      this.$_vBoundaries$ = $b$$69_o$$3$$;
    }, $_updateCache$:function($data$$152$$) {
      this.offset = this.helper.offset();
      this.$_isNumber$($data$$152$$.left) && (this.position.left = $data$$152$$.left);
      this.$_isNumber$($data$$152$$.top) && (this.position.top = $data$$152$$.top);
      this.$_isNumber$($data$$152$$.height) && (this.size.height = $data$$152$$.height);
      this.$_isNumber$($data$$152$$.width) && (this.size.width = $data$$152$$.width);
    }, $_updateRatio$:function($data$$153$$) {
      var $cpos$$ = this.position, $csize$$ = this.size, $a$$109$$ = this.axis;
      this.$_isNumber$($data$$153$$.height) ? $data$$153$$.width = $data$$153$$.height * this.$aspectRatio$ : this.$_isNumber$($data$$153$$.width) && ($data$$153$$.height = $data$$153$$.width / this.$aspectRatio$);
      "sw" === $a$$109$$ && ($data$$153$$.left = $cpos$$.left + ($csize$$.width - $data$$153$$.width), $data$$153$$.top = null);
      "nw" === $a$$109$$ && ($data$$153$$.top = $cpos$$.top + ($csize$$.height - $data$$153$$.height), $data$$153$$.left = $cpos$$.left + ($csize$$.width - $data$$153$$.width));
      return $data$$153$$;
    }, $_respectSize$:function($data$$154$$) {
      var $o$$4$$ = this.$_vBoundaries$, $a$$110_ch$$2$$ = this.axis, $ismaxw$$ = this.$_isNumber$($data$$154$$.width) && $o$$4$$.maxWidth && $o$$4$$.maxWidth < $data$$154$$.width, $ismaxh$$ = this.$_isNumber$($data$$154$$.height) && $o$$4$$.maxHeight && $o$$4$$.maxHeight < $data$$154$$.height, $isminw$$ = this.$_isNumber$($data$$154$$.width) && $o$$4$$.minWidth && $o$$4$$.minWidth > $data$$154$$.width, $isminh$$ = this.$_isNumber$($data$$154$$.height) && $o$$4$$.minHeight && $o$$4$$.minHeight > 
      $data$$154$$.height, $dw$$ = this.$originalPosition$.left + this.$originalSize$.width, $dh$$ = this.position.top + this.size.height, $cw$$ = /sw|nw|w/.test($a$$110_ch$$2$$), $a$$110_ch$$2$$ = /nw|ne|n/.test($a$$110_ch$$2$$);
      $isminw$$ && ($data$$154$$.width = $o$$4$$.minWidth);
      $isminh$$ && ($data$$154$$.height = $o$$4$$.minHeight);
      $ismaxw$$ && ($data$$154$$.width = $o$$4$$.maxWidth);
      $ismaxh$$ && ($data$$154$$.height = $o$$4$$.maxHeight);
      $isminw$$ && $cw$$ && ($data$$154$$.left = $dw$$ - $o$$4$$.minWidth);
      $ismaxw$$ && $cw$$ && ($data$$154$$.left = $dw$$ - $o$$4$$.maxWidth);
      $isminh$$ && $a$$110_ch$$2$$ && ($data$$154$$.top = $dh$$ - $o$$4$$.minHeight);
      $ismaxh$$ && $a$$110_ch$$2$$ && ($data$$154$$.top = $dh$$ - $o$$4$$.maxHeight);
      $data$$154$$.width || $data$$154$$.height || $data$$154$$.left || !$data$$154$$.top ? $data$$154$$.width || $data$$154$$.height || $data$$154$$.top || !$data$$154$$.left || ($data$$154$$.left = null) : $data$$154$$.top = null;
      return $data$$154$$;
    }, $_proportionallyResize$:function() {
      if (this.$_proportionallyResizeElements$.length) {
        var $i$$381$$, $j$$40$$, $borders$$, $paddings$$, $prel$$, $element$$109$$ = this.helper || this.element;
        for ($i$$381$$ = 0;$i$$381$$ < this.$_proportionallyResizeElements$.length;$i$$381$$++) {
          $prel$$ = this.$_proportionallyResizeElements$[$i$$381$$];
          if (!this.$borderDif$) {
            for (this.$borderDif$ = [], $borders$$ = [$prel$$.css("borderTopWidth"), $prel$$.css("borderRightWidth"), $prel$$.css("borderBottomWidth"), $prel$$.css("borderLeftWidth")], $paddings$$ = [$prel$$.css("paddingTop"), $prel$$.css("paddingRight"), $prel$$.css("paddingBottom"), $prel$$.css("paddingLeft")], $j$$40$$ = 0;$j$$40$$ < $borders$$.length;$j$$40$$++) {
              this.$borderDif$[$j$$40$$] = (parseInt($borders$$[$j$$40$$], 10) || 0) + (parseInt($paddings$$[$j$$40$$], 10) || 0);
            }
          }
          $prel$$.css({height:$element$$109$$.height() - this.$borderDif$[0] - this.$borderDif$[2] || 0, width:$element$$109$$.width() - this.$borderDif$[1] - this.$borderDif$[3] || 0});
        }
      }
    }, $_renderProxy$:function() {
      this.element.offset();
      this.helper = this.element;
    }, $_change$:{e:function($event$$438$$, $dx$$5$$) {
      return{width:this.$originalSize$.width + $dx$$5$$};
    }, w:function($event$$439$$, $dx$$6$$) {
      return{left:this.$originalPosition$.left + $dx$$6$$, width:this.$originalSize$.width - $dx$$6$$};
    }, n:function($event$$440$$, $dx$$7$$, $dy$$5$$) {
      return{top:this.$originalPosition$.top + $dy$$5$$, height:this.$originalSize$.height - $dy$$5$$};
    }, s:function($event$$441$$, $dx$$8$$, $dy$$6$$) {
      return{height:this.$originalSize$.height + $dy$$6$$};
    }, se:function($event$$442$$, $dx$$9$$, $dy$$7$$) {
      return $$$$33$$.extend(this.$_change$.s.apply(this, arguments), this.$_change$.e.apply(this, [$event$$442$$, $dx$$9$$, $dy$$7$$]));
    }, sw:function($event$$443$$, $dx$$10$$, $dy$$8$$) {
      return $$$$33$$.extend(this.$_change$.s.apply(this, arguments), this.$_change$.w.apply(this, [$event$$443$$, $dx$$10$$, $dy$$8$$]));
    }, ne:function($event$$444$$, $dx$$11$$, $dy$$9$$) {
      return $$$$33$$.extend(this.$_change$.n.apply(this, arguments), this.$_change$.e.apply(this, [$event$$444$$, $dx$$11$$, $dy$$9$$]));
    }, nw:function($event$$445$$, $dx$$12$$, $dy$$10$$) {
      return $$$$33$$.extend(this.$_change$.n.apply(this, arguments), this.$_change$.w.apply(this, [$event$$445$$, $dx$$12$$, $dy$$10$$]));
    }}, $_propagate$:function($n$$25$$, $event$$446$$) {
      "resize" !== $n$$25$$ && this._trigger($n$$25$$, $event$$446$$, this.ui());
    }, $_alsoresize_start$:function() {
      function $_store$$($exp$$3$$) {
        $$$$33$$($exp$$3$$).each(function() {
          var $el$$15$$ = $$$$33$$(this);
          $el$$15$$.data("oj-resizable-alsoresize", {width:parseInt($el$$15$$.width(), 10), height:parseInt($el$$15$$.height(), 10), left:parseInt($el$$15$$.css("left"), 10), top:parseInt($el$$15$$.css("top"), 10)});
        });
      }
      var $o$$6$$ = this.options;
      "object" !== typeof $o$$6$$.alsoResize || $o$$6$$.alsoResize.parentNode ? $_store$$($o$$6$$.alsoResize) : $o$$6$$.alsoResize.length ? ($o$$6$$.alsoResize = $o$$6$$.alsoResize[0], $_store$$($o$$6$$.alsoResize)) : $$$$33$$.each($o$$6$$.alsoResize, function($exp$$4$$) {
        $_store$$($exp$$4$$);
      });
    }, $_alsoresize_resize$:function($event$$447$$, $ui$$20$$) {
      function $_alsoResize$$($exp$$5$$, $c$$46$$) {
        $$$$33$$($exp$$5$$).each(function() {
          var $el$$16$$ = $$$$33$$(this), $start$$48$$ = $$$$33$$(this).data("oj-resizable-alsoresize"), $style$$30$$ = {};
          $$$$33$$.each($c$$46$$ && $c$$46$$.length ? $c$$46$$ : $el$$16$$.parents($ui$$20$$.$originalElement$[0]).length ? ["width", "height"] : ["width", "height", "top", "left"], function($i$$382$$, $prop$$65$$) {
            var $sum$$ = ($start$$48$$[$prop$$65$$] || 0) + ($delta$$5$$[$prop$$65$$] || 0);
            $sum$$ && 0 <= $sum$$ && ($style$$30$$[$prop$$65$$] = $sum$$ || null);
          });
          $el$$16$$.css($style$$30$$);
        });
      }
      var $o$$7$$ = this.options, $os$$1$$ = this.$originalSize$, $op$$ = this.$originalPosition$, $delta$$5$$ = {height:this.size.height - $os$$1$$.height || 0, width:this.size.width - $os$$1$$.width || 0, top:this.position.top - $op$$.top || 0, left:this.position.left - $op$$.left || 0};
      "object" !== typeof $o$$7$$.alsoResize || $o$$7$$.alsoResize.nodeType ? $_alsoResize$$($o$$7$$.alsoResize, null) : $$$$33$$.each($o$$7$$.alsoResize, function($exp$$6$$, $c$$47$$) {
        $_alsoResize$$($exp$$6$$, $c$$47$$);
      });
    }, $_alsoresize_stop$:function() {
      $$$$33$$(this).removeData("oj-resizable-alsoresize");
    }, $_containment_start$:function() {
      var $element$$110$$, $p$$7$$, $co_oc$$, $ch$$3_height$$28$$, $cw$$1_width$$30$$, $that$$7$$ = this, $ce_el$$17$$ = $that$$7$$.element;
      $co_oc$$ = $that$$7$$.options.containment;
      if ($ce_el$$17$$ = $co_oc$$ instanceof $$$$33$$ ? $co_oc$$.get(0) : /parent/.test($co_oc$$) ? $ce_el$$17$$.parent().get(0) : $co_oc$$) {
        $that$$7$$.$containerElement$ = $$$$33$$($ce_el$$17$$), /document/.test($co_oc$$) || $co_oc$$ === document ? ($that$$7$$.$containerOffset$ = {left:0, top:0}, $that$$7$$.$containerPosition$ = {left:0, top:0}, $that$$7$$.$parentData$ = {element:$$$$33$$(document), left:0, top:0, width:$$$$33$$(document).width(), height:$$$$33$$(document).height() || document.body.parentNode.scrollHeight}) : ($element$$110$$ = $$$$33$$($ce_el$$17$$), $p$$7$$ = [], $$$$33$$(["Top", "Right", "Left", "Bottom"]).each(function($i$$383$$, 
        $name$$109$$) {
          $p$$7$$[$i$$383$$] = $that$$7$$.$_num$($element$$110$$.css("padding" + $name$$109$$));
        }), $that$$7$$.$containerOffset$ = $element$$110$$.offset(), $that$$7$$.$containerPosition$ = $element$$110$$.position(), $that$$7$$.$containerSize$ = {height:$element$$110$$.innerHeight() - $p$$7$$[3], width:$element$$110$$.innerWidth() - $p$$7$$[1]}, $co_oc$$ = $that$$7$$.$containerOffset$, $ch$$3_height$$28$$ = $that$$7$$.$containerSize$.height, $cw$$1_width$$30$$ = $that$$7$$.$containerSize$.width, $cw$$1_width$$30$$ = $that$$7$$.$_hasScroll$($ce_el$$17$$, "left") ? $ce_el$$17$$.scrollWidth : 
        $cw$$1_width$$30$$, $ch$$3_height$$28$$ = $that$$7$$.$_hasScroll$($ce_el$$17$$) ? $ce_el$$17$$.scrollHeight : $ch$$3_height$$28$$, $that$$7$$.$parentData$ = {element:$ce_el$$17$$, left:$co_oc$$.left, top:$co_oc$$.top, width:$cw$$1_width$$30$$, height:$ch$$3_height$$28$$});
      }
    }, $_containment_resize$:function($event$$448$$, $ui$$21$$) {
      var $o$$9_woset$$, $co$$1_hoset$$, $cop_isParent$$, $cp_isOffsetRelative$$;
      $o$$9_woset$$ = this.options;
      $co$$1_hoset$$ = this.$containerOffset$;
      $cp_isOffsetRelative$$ = this.position;
      var $pRatio$$ = $event$$448$$.shiftKey;
      $cop_isParent$$ = {top:0, left:0};
      var $ce$$1$$ = this.$containerElement$, $continueResize$$ = !0;
      $ce$$1$$[0] !== document && /static/.test($ce$$1$$.css("position")) && ($cop_isParent$$ = $co$$1_hoset$$);
      $cp_isOffsetRelative$$.left < (this.$_helper$ ? $co$$1_hoset$$.left : 0) && (this.size.width += this.$_helper$ ? this.position.left - $co$$1_hoset$$.left : this.position.left - $cop_isParent$$.left, $pRatio$$ && (this.size.height = this.size.width / this.$aspectRatio$, $continueResize$$ = !1), this.position.left = $o$$9_woset$$.helper ? $co$$1_hoset$$.left : 0);
      $cp_isOffsetRelative$$.top < (this.$_helper$ ? $co$$1_hoset$$.top : 0) && (this.size.height += this.$_helper$ ? this.position.top - $co$$1_hoset$$.top : this.position.top, $pRatio$$ && (this.size.width = this.size.height * this.$aspectRatio$, $continueResize$$ = !1), this.position.top = this.$_helper$ ? $co$$1_hoset$$.top : 0);
      this.offset.left = this.$parentData$.left + this.position.left;
      this.offset.top = this.$parentData$.top + this.position.top;
      $o$$9_woset$$ = Math.abs((this.$_helper$ ? this.offset.left - $cop_isParent$$.left : this.offset.left - $co$$1_hoset$$.left) + this.$sizeDiff$.width);
      $co$$1_hoset$$ = Math.abs((this.$_helper$ ? this.offset.top - $cop_isParent$$.top : this.offset.top - $co$$1_hoset$$.top) + this.$sizeDiff$.height);
      $cop_isParent$$ = this.$containerElement$.get(0) === this.element.parent().get(0);
      $cp_isOffsetRelative$$ = /relative|absolute/.test(this.$containerElement$.css("position"));
      $cop_isParent$$ && $cp_isOffsetRelative$$ && ($o$$9_woset$$ -= Math.abs(this.$parentData$.left));
      $o$$9_woset$$ + this.size.width >= this.$parentData$.width && (this.size.width = this.$parentData$.width - $o$$9_woset$$, $pRatio$$ && (this.size.height = this.size.width / this.$aspectRatio$, $continueResize$$ = !1));
      $co$$1_hoset$$ + this.size.height >= this.$parentData$.height && (this.size.height = this.$parentData$.height - $co$$1_hoset$$, $pRatio$$ && (this.size.width = this.size.height * this.$aspectRatio$, $continueResize$$ = !1));
      $continueResize$$ || (this.position.left = $ui$$21$$.$prevPosition$.left, this.position.top = $ui$$21$$.$prevPosition$.top, this.size.width = $ui$$21$$.$prevSize$.width, this.size.height = $ui$$21$$.$prevSize$.height);
    }, $_containment_stop$:function() {
      var $o$$10$$ = this.options, $co$$2$$ = this.$containerOffset$, $cop$$1$$ = this.$containerPosition$, $ce$$2$$ = this.$containerElement$, $h$$7_helper$$ = $$$$33$$(this.helper), $ho$$ = $h$$7_helper$$.offset(), $w$$8$$ = $h$$7_helper$$.outerWidth() - this.$sizeDiff$.width, $h$$7_helper$$ = $h$$7_helper$$.outerHeight() - this.$sizeDiff$.height;
      this.$_helper$ && !$o$$10$$.animate && /relative/.test($ce$$2$$.css("position")) && $$$$33$$(this).css({left:$ho$$.left - $cop$$1$$.left - $co$$2$$.left, width:$w$$8$$, height:$h$$7_helper$$});
      this.$_helper$ && !$o$$10$$.animate && /static/.test($ce$$2$$.css("position")) && $$$$33$$(this).css({left:$ho$$.left - $cop$$1$$.left - $co$$2$$.left, width:$w$$8$$, height:$h$$7_helper$$});
    }, ui:function() {
      return{$originalElement$:this.$originalElement$, element:this.element, helper:this.helper, position:this.position, size:this.size, $originalSize$:this.$originalSize$, $originalPosition$:this.$originalPosition$, $prevSize$:this.$prevSize$, $prevPosition$:this.$prevPosition$};
    }});
  })();
  (function() {
    $oj$$34$$.$__registerWidget$("oj.ojDialog", $$$$33$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{cancelBehavior:"icon", dragAffordance:"title-bar", initialVisibility:"hide", modality:"modal", position:{my:"center", at:"center", of:window, collision:"fit", $using$:function($pos$$11$$) {
      var $topOffset$$ = $$$$33$$(this).css($pos$$11$$).offset().top;
      0 > $topOffset$$ && $$$$33$$(this).css("top", $pos$$11$$.top - $topOffset$$);
    }}, resizeBehavior:"resizable", role:"dialog", title:null, beforeClose:null, beforeOpen:null, close:null, focus:null, open:null, resize:null, resizeStart:null, resizeStop:null}, _ComponentCreate:function() {
      this._super();
      this.$originalCss$ = {display:this.element[0].style.display, width:this.element[0].style.width, height:this.element[0].style.height};
      this.$originalPosition$ = {parent:this.element.parent(), index:this.element.parent().children().index(this.element)};
      this.$originalTitle$ = this.element.attr("title");
      this.options.title = this.options.title || this.$originalTitle$;
      this.$_createWrapper$();
      this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.$uiDialog$);
      this.$userDefinedDialogHeader$ = !1;
      if (this.element.find(".oj-dialog").length) {
        var $that$$10$$ = this;
        this.element.find(".oj-dialog-header").each(function($index$$221$$, $li$$1$$) {
          var $dialogHeader$$ = $$$$33$$($li$$1$$);
          if (!$dialogHeader$$.closest(".oj-dialog-body").length) {
            return $that$$10$$.$_userDefinedHeader$ = $dialogHeader$$, $that$$10$$.$userDefinedDialogHeader$ = !0, !1;
          }
        });
      } else {
        this.$_userDefinedHeader$ = this.element.find(".oj-dialog-header"), this.$_userDefinedHeader$.length && (this.$userDefinedDialogHeader$ = !0);
      }
      this.$userDefinedDialogHeader$ ? (this.$_createPlaceHolderHeader$(this.$_userDefinedHeader$), this.$_userDefinedHeader$.prependTo(this.$uiDialog$), "icon" === this.options.cancelBehavior && (this.$_createCloseButton$(this.$_userDefinedHeader$), this.$_userDefinedTitle$ = this.$_userDefinedHeader$.find(".oj-dialog-title"), this.$_userDefinedTitle$.length && this.$_userDefinedTitle$.insertAfter(this.$uiDialogTitlebarCloseWrapper$))) : this.$_createTitlebar$();
      this.$uiDialogFooter$ = this.element.children(".oj-dialog-footer");
      this.$_createPlaceHolderFooter$(this.$uiDialogFooter$);
      this.$uiDialogFooter$.length && (this.$uiDialogFooter$.addClass("oj-helper-clearfix"), this.$uiDialogFooter$.appendTo(this.$uiDialog$));
      "title-bar" === this.options.dragAffordance && $$$$33$$.fn.draggable && this.$_makeDraggable$();
      this.$_hasResizeListener$ = !1;
      this.$_handleResizeFcn$ = this.$_resizeBody$.bind(this);
      this.$uiDialog$.length && ($oj$$34$$.$DomUtils$.$addResizeListener$(this.$uiDialog$[0], this.$_handleResizeFcn$, 30), this.$_hasResizeListener$ = !0);
      this.$_isOpen$ = !1;
    }, $_AfterCreateEvent$:function() {
      "show" === this.options.initialVisibility && this.open();
    }, _destroy:function() {
      this.$_delayId$ && window.clearTimeout(this.$_delayId$);
      this.isOpen() && this.$_closeImplicitly$();
      this.$_hasResizeListener$ && ($oj$$34$$.$DomUtils$.$removeResizeListener$(this.$uiDialog$[0], this.$_handleResizeFcn$), this.$_hasResizeListener$ = !1);
      var $header$$8_isDraggable$$ = this.$uiDialog$.hasClass("oj-draggable");
      this.$uiDialog$.draggable && $header$$8_isDraggable$$ && this.$uiDialog$.draggable("destroy");
      this.$_resizableComponent$ && (this.$_resizableComponent$("destroy"), this.$_resizableComponent$ = null);
      this.$uiDialogFooter$.length && (this.$uiDialogFooter$.removeClass("oj-helper-clearfix"), $$$$33$$("#" + this.$_placeHolderFooterId$).replaceWith(this.$uiDialogFooter$));
      this.$_destroyCloseButton$();
      this.$userDefinedDialogHeader$ && ($header$$8_isDraggable$$ = this.$uiDialog$.find(".oj-dialog-header")) && $$$$33$$("#" + this.$_placeHolderHeaderId$).replaceWith($header$$8_isDraggable$$);
      this.$uiDialogTitle$ && (this.$uiDialogTitle$.remove(), this.$uiDialogTitle$ = null);
      this.element.removeUniqueId().removeClass("oj-dialog-content oj-dialog-default-content").css(this.$originalCss$);
      this.$uiDialog$ && this.$uiDialog$.stop(!0, !0);
      this.element.unwrap();
      this.$originalTitle$ && this.element.attr("title", this.$originalTitle$);
      this.$uiDialogTitlebar$ && (this.$uiDialogTitlebar$.remove(), this.$uiDialogTitlebar$ = null);
      delete this.$_popupServiceEvents$;
      delete this.$_isOpen$;
      this._super();
    }, widget:function() {
      return this.$uiDialog$;
    }, disable:$$$$33$$.noop, enable:$$$$33$$.noop, close:function($event$$449$$) {
      if (this.isOpen() && (!1 !== this._trigger("beforeClose", $event$$449$$) || this.$_ignoreBeforeCloseResultant$)) {
        this.$_isOpen$ = !1;
        this.$_focusedElement$ = null;
        this.opener.filter(":focusable").focus().length || $$$$33$$(this.document[0].activeElement).blur();
        var $psOptions$$4$$ = {};
        $psOptions$$4$$[$oj$$34$$.$PopupService$.$OPTION$.$POPUP$] = this.$uiDialog$;
        $oj$$34$$.$PopupService$.$getInstance$().close($psOptions$$4$$);
        this._trigger("close", $event$$449$$);
      }
    }, isOpen:function() {
      return this.$_isOpen$;
    }, open:function($event$$450_psOptions$$5$$) {
      !1 !== this._trigger("beforeOpen", $event$$450_psOptions$$5$$) && (this.isOpen() || (this.$_isOpen$ = !0, this.opener = $$$$33$$(this.document[0].activeElement), this.$_size$(), "resizable" === this.options.resizeBehavior && this.$_makeResizable$(), $event$$450_psOptions$$5$$ = {}, $event$$450_psOptions$$5$$[$oj$$34$$.$PopupService$.$OPTION$.$POPUP$] = this.$uiDialog$, $event$$450_psOptions$$5$$[$oj$$34$$.$PopupService$.$OPTION$.$LAUNCHER$] = this.opener, $event$$450_psOptions$$5$$[$oj$$34$$.$PopupService$.$OPTION$.$POSITION$] = 
      this.options.position, $event$$450_psOptions$$5$$[$oj$$34$$.$PopupService$.$OPTION$.$MODALITY$] = this.options.modality, $event$$450_psOptions$$5$$[$oj$$34$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$(), $event$$450_psOptions$$5$$[$oj$$34$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-dialog-layer", $oj$$34$$.$PopupService$.$getInstance$().open($event$$450_psOptions$$5$$), this._trigger("open")), this.$_focusTabbable$());
    }, refresh:function() {
      this._super();
      this.$_size$();
      this.$_resizeBody$();
    }, $_focusTabbable$:function() {
      var $hasFocus$$ = this.$_focusedElement$;
      $hasFocus$$ && 0 < $hasFocus$$.length && $oj$$34$$.$DomUtils$.$isAncestorOrSelf$(this.$uiDialog$[0], $hasFocus$$[0]) || ($hasFocus$$ || ($hasFocus$$ = this.element.find("[autofocus]")), $hasFocus$$.length || ($hasFocus$$ = this.element.find(":tabbable")), $hasFocus$$.length || this.$uiDialogFooter$.length && ($hasFocus$$ = this.$uiDialogFooter$.find(":tabbable")), $hasFocus$$.length || this.$uiDialogTitlebarClose$ && ($hasFocus$$ = this.$uiDialogTitlebarClose$.filter(":tabbable")), $hasFocus$$.length || 
      ($hasFocus$$ = this.$uiDialog$), $hasFocus$$.eq(0).focus(), this._trigger("focus"));
    }, _keepFocus:function($activeElement$$inline_946_event$$451$$) {
      $activeElement$$inline_946_event$$451$$.preventDefault();
      $activeElement$$inline_946_event$$451$$ = this.document[0].activeElement;
      this.$uiDialog$[0] === $activeElement$$inline_946_event$$451$$ || $$$$33$$.contains(this.$uiDialog$[0], $activeElement$$inline_946_event$$451$$) || this.$_focusTabbable$();
    }, $_isNumber$:function($value$$246$$) {
      return!isNaN(parseInt($value$$246$$, 10));
    }, $_createWrapper$:function() {
      this.$_isResizing$ = !1;
      this.element.uniqueId();
      this.$_elementId$ = this.element.attr("id");
      this.$_wrapperId$ = "ojDialogWrapper-" + this.$_elementId$;
      this.$uiDialog$ = $$$$33$$("\x3cdiv\x3e");
      this.$uiDialog$.addClass("oj-dialog oj-component").hide().attr({tabIndex:-1, role:this.options.role, id:this.$_wrapperId$});
      this.$uiDialog$.insertBefore(this.element);
      this._on(this.$uiDialog$, {keyup:function() {
      }, keydown:function($event$$453$$) {
        if ("none" != this.options.cancelBehavior && !$event$$453$$.isDefaultPrevented() && $event$$453$$.keyCode && $event$$453$$.keyCode === $$$$33$$.ui.keyCode.ESCAPE) {
          $event$$453$$.preventDefault(), $event$$453$$.stopImmediatePropagation(), this.close($event$$453$$);
        } else {
          if ($event$$453$$.keyCode === $$$$33$$.ui.keyCode.TAB && "modeless" !== this.options.modality) {
            var $tabbables$$ = this.$uiDialog$.find(":tabbable"), $first$$7_index$$222$$ = $tabbables$$.filter(":first"), $last$$4$$ = $tabbables$$.filter(":last");
            $event$$453$$.shiftKey ? $event$$453$$.shiftKey && ($event$$453$$.target === $first$$7_index$$222$$[0] || $event$$453$$.target === this.$uiDialog$[0] ? ($last$$4$$.focus(), $event$$453$$.preventDefault()) : ($first$$7_index$$222$$ = $tabbables$$.index(document.activeElement), 1 == $first$$7_index$$222$$ && $tabbables$$[0] && ($tabbables$$[0].focus(), $event$$453$$.preventDefault()))) : $event$$453$$.target === $last$$4$$[0] || $event$$453$$.target === this.$uiDialog$[0] ? ($first$$7_index$$222$$.focus(), 
            $event$$453$$.preventDefault()) : ($first$$7_index$$222$$ = $tabbables$$.index(document.activeElement), 0 == $first$$7_index$$222$$ && $tabbables$$[1] && ($tabbables$$[1].focus(), $event$$453$$.preventDefault()));
          }
        }
      }});
      this.element.find("[aria-describedby]").length || this.$uiDialog$.attr({"aria-describedby":this.element.uniqueId().attr("id")});
    }, $_destroyCloseButton$:function() {
      this.$uiDialogTitlebarCloseWrapper$ && (this.$uiDialogTitlebarCloseWrapper$.remove(), this.$uiDialogTitlebarClose$ = this.$uiDialogTitlebarCloseWrapper$ = null);
    }, $_createCloseButton$:function($domDestination$$) {
      this.$uiDialogTitlebarCloseWrapper$ = $$$$33$$("\x3cdiv\x3e").addClass("oj-dialog-header-close-wrapper").attr("tabindex", "1").attr("aria-label", "close").attr("role", "button").appendTo($domDestination$$);
      this.$uiDialogTitlebarClose$ = $$$$33$$("\x3cspan\x3e").addClass("oj-component-icon oj-clickable-icon oj-dialog-close-icon").attr("alt", "close icon").prependTo(this.$uiDialogTitlebarCloseWrapper$);
      this._on(this.$uiDialogTitlebarCloseWrapper$, {click:function($event$$454$$) {
        $event$$454$$.preventDefault();
        $event$$454$$.stopImmediatePropagation();
        this.close($event$$454$$);
      }, mousedown:function($event$$455$$) {
        $$$$33$$($event$$455$$.currentTarget).addClass("oj-active");
      }, mouseup:function($event$$456$$) {
        $$$$33$$($event$$456$$.currentTarget).removeClass("oj-active");
      }, mouseenter:function($event$$457$$) {
        $$$$33$$($event$$457$$.currentTarget).addClass("oj-hover");
      }, mouseleave:function($currTarget$$7_event$$458$$) {
        $currTarget$$7_event$$458$$ = $currTarget$$7_event$$458$$.currentTarget;
        $$$$33$$($currTarget$$7_event$$458$$).removeClass("oj-hover");
        $$$$33$$($currTarget$$7_event$$458$$).removeClass("oj-active");
      }, keyup:function($event$$459$$) {
        if ($event$$459$$.keyCode && $event$$459$$.keyCode === $$$$33$$.ui.keyCode.SPACE || $event$$459$$.keyCode === $$$$33$$.ui.keyCode.ENTER) {
          $event$$459$$.preventDefault(), $event$$459$$.stopImmediatePropagation(), this.close($event$$459$$);
        }
      }});
    }, $_createTitlebar$:function() {
      var $uiDialogTitle$$;
      this.$uiDialogTitlebar$ = $$$$33$$("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix").prependTo(this.$uiDialog$);
      this._on(this.$uiDialogTitlebar$, {mousedown:function($event$$460$$) {
        $$$$33$$($event$$460$$.target).closest(".oj-dialog-close-icon") || this.$uiDialog$.focus();
      }});
      "icon" === this.options.cancelBehavior && this.$_createCloseButton$(this.$uiDialogTitlebar$);
      $uiDialogTitle$$ = $$$$33$$("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").appendTo(this.$uiDialogTitlebar$);
      this.$_title$($uiDialogTitle$$);
      this.$uiDialog$.attr({"aria-labelledby":$uiDialogTitle$$.attr("id")});
    }, $_title$:function($title$$10$$) {
      this.options.title || $title$$10$$.html("\x26#160;");
      $title$$10$$.text(this.options.title);
    }, $_makeDraggable$:function() {
      function $filteredUi$$($ui$$22$$) {
        return{position:$ui$$22$$.position, offset:$ui$$22$$.offset};
      }
      var $that$$11$$ = this, $options$$354$$ = this.options;
      this.$uiDialog$.draggable({$addClasses$:!1, cancel:".oj-dialog-content, .oj-dialog-header-close", handle:".oj-dialog-header", containment:"document", start:function($event$$461$$, $ui$$23$$) {
        $$$$33$$(this).addClass("oj-dialog-dragging");
        $that$$11$$.$_blockFrames$();
        $that$$11$$._trigger("dragStart", $event$$461$$, $filteredUi$$($ui$$23$$));
      }, drag:function($event$$462$$, $ui$$24$$) {
        $that$$11$$._trigger("drag", $event$$462$$, $filteredUi$$($ui$$24$$));
      }, stop:function($event$$463$$, $ui$$25$$) {
        $options$$354$$.position = [$ui$$25$$.position.left - $that$$11$$.document.scrollLeft(), $ui$$25$$.position.top - $that$$11$$.document.scrollTop()];
        $$$$33$$(this).removeClass("oj-dialog-dragging");
        $that$$11$$.$_unblockFrames$();
        $that$$11$$._trigger("dragStop", $event$$463$$, $filteredUi$$($ui$$25$$));
      }});
      this.$uiDialog$.addClass("oj-draggable");
    }, $_makeResizable$:function() {
      function $filteredUi$$1$$($ui$$26$$) {
        return{originalPosition:$ui$$26$$.$originalPosition$, originalSize:$ui$$26$$.$originalSize$, position:$ui$$26$$.position, size:$ui$$26$$.size};
      }
      var $that$$12$$ = this;
      this.$uiDialog$.css("position");
      this.$_resizableComponent$ = this.$uiDialog$.ojResizable.bind(this.$uiDialog$);
      this.$_resizableComponent$({cancel:".oj-dialog-content", containment:"document", handles:"n,e,s,w,se,sw,ne,nw", start:function($event$$464$$, $ui$$27$$) {
        $that$$12$$.$_isResizing$ = !0;
        $$$$33$$(this).addClass("oj-dialog-resizing");
        $that$$12$$.$_blockFrames$();
        $that$$12$$._trigger("resizeStart", $event$$464$$, $filteredUi$$1$$($ui$$27$$));
      }, resize:function($event$$465$$, $ui$$28$$) {
        $that$$12$$._trigger("resize", $event$$465$$, $filteredUi$$1$$($ui$$28$$));
      }, stop:function($event$$466$$, $ui$$29$$) {
        $that$$12$$.$_isResizing$ = !1;
        $$$$33$$(this).removeClass("oj-dialog-resizing");
        $that$$12$$.$_unblockFrames$();
        $that$$12$$._trigger("resizeStop", $event$$466$$, $filteredUi$$1$$($ui$$29$$));
      }});
    }, $_position$:function() {
      var $isRtl$$3_position$$29$$ = "rtl" === this.$_GetReadingDirection$(), $isRtl$$3_position$$29$$ = $oj$$34$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $isRtl$$3_position$$29$$);
      this.$uiDialog$.position($isRtl$$3_position$$29$$);
      this.$_positionDescendents$();
    }, $_positionDescendents$:function() {
      $oj$$34$$.$PopupService$.$getInstance$().$triggerOnDescendents$(this.$uiDialog$, $oj$$34$$.$PopupService$.$EVENT$.$POPUP_REFRESH$);
    }, _setOption:function($isDraggable$$1_key$$143$$, $value$$247$$, $flags$$36$$) {
      var $isResizable_psOptions$$6_uiDialog$$;
      $isResizable_psOptions$$6_uiDialog$$ = this.$uiDialog$;
      if ("disabled" !== $isDraggable$$1_key$$143$$) {
        switch(this._super($isDraggable$$1_key$$143$$, $value$$247$$, $flags$$36$$), $isDraggable$$1_key$$143$$) {
          case "dragAffordance":
            ($isDraggable$$1_key$$143$$ = $isResizable_psOptions$$6_uiDialog$$.hasClass("oj-draggable")) && "none" === $value$$247$$ && ($isResizable_psOptions$$6_uiDialog$$.draggable("destroy"), this.$uiDialog$.removeClass("oj-draggable"));
            $isDraggable$$1_key$$143$$ || "title-bar" !== $value$$247$$ || this.$_makeDraggable$();
            break;
          case "position":
            this.$_position$();
            break;
          case "resizeBehavior":
            $isResizable_psOptions$$6_uiDialog$$ = !1;
            this.$_resizableComponent$ && ($isResizable_psOptions$$6_uiDialog$$ = !0);
            $isResizable_psOptions$$6_uiDialog$$ && "resizable" != $value$$247$$ && (this.$_resizableComponent$("destroy"), this.$_resizableComponent$ = null);
            $isResizable_psOptions$$6_uiDialog$$ || "resizable" !== $value$$247$$ || this.$_makeResizable$();
            break;
          case "title":
            this.$_title$(this.$uiDialogTitlebar$.find(".oj-dialog-title"));
            break;
          case "role":
            $isResizable_psOptions$$6_uiDialog$$.attr("role", $value$$247$$);
            break;
          case "modality":
            this.isOpen() && ($isResizable_psOptions$$6_uiDialog$$ = {}, $isResizable_psOptions$$6_uiDialog$$[$oj$$34$$.$PopupService$.$OPTION$.$POPUP$] = this.$uiDialog$, $isResizable_psOptions$$6_uiDialog$$[$oj$$34$$.$PopupService$.$OPTION$.$MODALITY$] = $value$$247$$, $oj$$34$$.$PopupService$.$getInstance$().$changeOptions$($isResizable_psOptions$$6_uiDialog$$));
            break;
          case "cancelBehavior":
            "none" === $value$$247$$ || "escape" === $value$$247$$ ? this.$_destroyCloseButton$() : "icon" === $value$$247$$ && (this.$userDefinedDialogHeader$ ? (this.$_destroyCloseButton$(), this.$_createCloseButton$(this.$_userDefinedHeader$), this.$_userDefinedTitle$ = this.$_userDefinedHeader$.find(".oj-dialog-title"), this.$_userDefinedTitle$.length && this.$_userDefinedTitle$.insertAfter(this.$uiDialogTitlebarCloseWrapper$)) : (this.$_destroyCloseButton$(), this.$_createCloseButton$(this.$uiDialogTitlebar$), 
            this.$standardTitle$ = this.$uiDialogTitlebar$.find(".oj-dialog-title"), this.$standardTitle$.length && this.$standardTitle$.insertAfter(this.$uiDialogTitlebarCloseWrapper$)));
        }
      }
    }, $_resizeBody$:function() {
      var $bodyHeight_hasPctHeight$$ = !1;
      this.$uiDialog$.length && this.$uiDialog$[0].style.height && ($bodyHeight_hasPctHeight$$ = this.$uiDialog$[0].style.height.indexOf("%"));
      this.$_isResizing$ && $bodyHeight_hasPctHeight$$ && ($bodyHeight_hasPctHeight$$ = this.$_getBodyHeight$(), this.element.css({height:$bodyHeight_hasPctHeight$$}));
    }, $_getBodyHeight$:function() {
      this.$_delayId$ = null;
      var $headerHeight$$ = (this.$userDefinedDialogHeader$ ? this.$_userDefinedHeader$ : this.$uiDialogTitlebar$).outerHeight(), $footerHeight$$ = 0;
      this.$uiDialogFooter$.length && ($footerHeight$$ = this.$uiDialogFooter$.outerHeight());
      return this.$uiDialog$.height() - $headerHeight$$ - $footerHeight$$;
    }, $_measureDialogHeight$:function() {
      var $tempE$$ = $$$$33$$("\x3cdiv\x3e");
      this.$_cssHeight$ = this.$uiDialog$.css("height");
      "auto" != this.$_cssHeight$ ? ($tempE$$.height(this.$_cssHeight$), this.$_cssHeightNumeric$ = $tempE$$.height(), this.$_isNumber$(this.$_cssHeightNumeric$) && (this.$_cssHeightNumeric$ = Math.ceil(this.$_cssHeightNumeric$))) : this.$_cssHeightNumeric$ = "auto";
      $tempE$$.remove();
    }, $_size$:function() {
      this.$_measureDialogHeight$();
      var $heightValue$$ = this.$uiDialog$[0].style.height, $widthValue$$ = this.$uiDialog$[0].style.width, $minHeightValue$$ = this.$uiDialog$[0].style.minHeight, $maxHeightValue$$ = this.$uiDialog$[0].style.maxHeight;
      this.element.css({width:"auto", minHeight:0, maxHeight:"none", height:0});
      var $nonContentHeight$$;
      $nonContentHeight$$ = this.$uiDialog$.css({minHeight:0, maxHeight:"none", height:"auto"}).outerHeight();
      this.element.css({width:"", minHeight:"", maxHeight:"", height:""});
      this.$uiDialog$.css({width:$widthValue$$});
      this.$uiDialog$.css({height:$heightValue$$});
      this.$uiDialog$.css({minHeight:$minHeightValue$$});
      this.$uiDialog$.css({maxHeight:$maxHeightValue$$});
      "auto" != $heightValue$$ && "" != $heightValue$$ && this.element.height(Math.max(0, this.$_cssHeightNumeric$ + 0 - $nonContentHeight$$));
    }, $_blockFrames$:function() {
      this.$iframeBlocks$ = this.document.find("iframe").map(function() {
        var $iframe$$ = $$$$33$$(this), $offset$$27$$ = $iframe$$.offset();
        return $$$$33$$("\x3cdiv\x3e").css({width:$iframe$$.outerWidth(), height:$iframe$$.outerHeight()}).appendTo($iframe$$.parent()).offset($offset$$27$$)[0];
      });
    }, $_unblockFrames$:function() {
      this.$iframeBlocks$ && (this.$iframeBlocks$.remove(), delete this.$iframeBlocks$);
    }, $_createPlaceHolderFooter$:function($domElement$$) {
      this.$_placeHolderFooterId$ = "ojDialogPlaceHolderFooter-" + this.$_elementId$;
      this.$_placeHolderFooter$ = $$$$33$$("\x3cdiv\x3e").hide().attr({id:this.$_placeHolderFooterId$});
      this.$_placeHolderFooter$.insertBefore($domElement$$);
    }, $_createPlaceHolderHeader$:function($domElement$$1$$) {
      this.$_placeHolderHeaderId$ = "ojDialogPlaceHolderHeader-" + this.$_elementId$;
      this.$_placeHolderHeader$ = $$$$33$$("\x3cdiv\x3e").hide().attr({id:this.$_placeHolderHeaderId$});
      this.$_placeHolderHeader$.insertBefore($domElement$$1$$);
    }, getNodeBySubId:function($dotSubId_locator$$37_subId$$36$$) {
      if (null == $dotSubId_locator$$37_subId$$36$$) {
        return this.element ? this.element[0] : null;
      }
      $dotSubId_locator$$37_subId$$36$$ = $dotSubId_locator$$37_subId$$36$$.subId;
      switch($dotSubId_locator$$37_subId$$36$$) {
        case "oj-dialog":
        ;
        case "oj-dialog-header":
        ;
        case "oj-dialog-body":
        ;
        case "oj-dialog-footer":
        ;
        case "oj-dialog-content":
        ;
        case "oj-dialog-header-close-wrapper":
        ;
        case "oj-dialog-close-icon":
        ;
        case "oj-resizable-n":
        ;
        case "oj-resizable-e":
        ;
        case "oj-resizable-s":
        ;
        case "oj-resizable-w":
        ;
        case "oj-resizable-se":
        ;
        case "oj-resizable-sw":
        ;
        case "oj-resizable-ne":
        ;
        case "oj-resizable-nw":
          return $dotSubId_locator$$37_subId$$36$$ = "." + $dotSubId_locator$$37_subId$$36$$, this.widget().find($dotSubId_locator$$37_subId$$36$$)[0];
      }
      return null;
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$12$$ = this.$_popupServiceEvents$ = {};
        $events$$12$$[$oj$$34$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$33$$.proxy(this.$_closeImplicitly$, this);
        $events$$12$$[$oj$$34$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$33$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$12$$[$oj$$34$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$33$$.proxy(this.$_positionDescendents$, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeImplicitly$:function() {
      this.$_ignoreBeforeCloseResultant$ = !0;
      this.close();
      delete this.$_ignoreBeforeCloseResultant$;
    }});
  })();
});
