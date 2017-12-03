/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$36$$, $$$$35$$) {
  (function() {
    function $_addKeyFilter$$($obj$$57$$) {
      $_aKeyHandlerStack$$.push($obj$$57$$);
      $$$$35$$($obj$$57$$.$_selector$).keydown($_KeyFilterHandler$$);
    }
    function $_KeyFilterHandler$$($e$$103$$) {
      var $s$$10$$ = "";
      $oj$$36$$.$DomUtils$.$isMetaKeyPressed$($e$$103$$) ? $s$$10$$ += "ctrl+" : $e$$103$$.shiftKey && ($s$$10$$ += "shift+");
      var $key$$146$$ = $e$$103$$.which;
      switch($key$$146$$) {
        case 32:
          $s$$10$$ += "space";
          break;
        case 37:
          $s$$10$$ += "left";
          break;
        case 38:
          $s$$10$$ += "up";
          break;
        case 39:
          $s$$10$$ += "right";
          break;
        case 40:
          $s$$10$$ += "down";
          break;
        case 46:
          $s$$10$$ += "del";
          break;
        case 33:
          $s$$10$$ += "pgup";
          break;
        case 34:
          $s$$10$$ += "pgdn";
          break;
        case 35:
          $s$$10$$ += "end";
          break;
        case 36:
          $s$$10$$ += "home";
          break;
        case 56:
          $s$$10$$ = "*";
          break;
        case 113:
        ;
        case 121:
          $s$$10$$ += "f" + (1 - (112 - $key$$146$$));
      }
      if (0 !== $s$$10$$.length && "shift+" != $s$$10$$ && "ctrl+" != $s$$10$$) {
        var $retHandler$$ = null;
        $$$$35$$.each($_aKeyHandlerStack$$, function($i$$396$$, $obj$$58$$) {
          if ($obj$$58$$.$_this$.$_data$.ui.$focused$) {
            return $obj$$58$$.$_this$.$_data$.ui.$touchEvent$ = !1, "shift+f10" == $s$$10$$ ? $obj$$58$$.$_this$.$_data$.menu.$activenode$ = $obj$$58$$.$_this$.$_data$.ui.$hovered$ : $obj$$58$$.$_handler$[$s$$10$$] && ($e$$103$$.preventDefault(), $retHandler$$ = $obj$$58$$.$_handler$[$s$$10$$].call($obj$$58$$.$_this$, $e$$103$$)), !1;
          }
        });
        if (null != $retHandler$$) {
          return $retHandler$$;
        }
      }
    }
    function $_removeKeyFilter$$($selector$$36$$) {
      $$$$35$$.each($_aKeyHandlerStack$$, function($i$$397$$) {
        if ($_aKeyHandlerStack$$[$i$$397$$].$_selector$ === $selector$$36$$) {
          return $$$$35$$($selector$$36$$).off("keydown"), $_aKeyHandlerStack$$[$i$$397$$] = null, $_aKeyHandlerStack$$.splice($i$$397$$, 1), !1;
        }
      });
    }
    function $_addSheet$$($opts$$36$$) {
      var $tmp$$3$$ = !1, $isNew$$7$$ = !0;
      $opts$$36$$.$str$ && ($opts$$36$$.title && ($tmp$$3$$ = $$$$35$$("style[id\x3d'" + $opts$$36$$.title + "-stylesheet']")[0]), $tmp$$3$$ ? $isNew$$7$$ = !1 : ($tmp$$3$$ = document.createElement("style"), $tmp$$3$$.setAttribute("type", "text/css"), $opts$$36$$.title && $tmp$$3$$.setAttribute("id", $opts$$36$$.title + "-stylesheet")), $tmp$$3$$.styleSheet ? $isNew$$7$$ ? (document.getElementsByTagName("head")[0].appendChild($tmp$$3$$), $tmp$$3$$.styleSheet.cssText = $opts$$36$$.$str$) : $tmp$$3$$.styleSheet.cssText = 
      $tmp$$3$$.styleSheet.cssText + " " + $opts$$36$$.$str$ : ($tmp$$3$$.appendChild(document.createTextNode($opts$$36$$.$str$)), document.getElementsByTagName("head")[0].appendChild($tmp$$3$$)));
    }
    var $_arMenuCmdMap$$ = {cut:"ojtreecut", copy:"ojtreecopy", paste:"ojtreepaste", remove:"ojtreeremove", rename:"ojtreerename"}, $_arMenuKeyMap$$ = {cut:"labelCut", copy:"labelCopy", paste:"labelPaste", remove:"labelRemove", rename:"labelRename"}, $scrollbar_width$$, $e1$$2$$, $e2$$2$$;
    $$$$35$$(function() {
      /msie/.test(navigator.userAgent.toLowerCase()) ? ($e1$$2$$ = $$$$35$$('\x3ctextarea cols\x3d"10" rows\x3d"2"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $e2$$2$$ = $$$$35$$('\x3ctextarea cols\x3d"10" rows\x3d"2" style\x3d"overflow: hidden;"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $scrollbar_width$$ = $e1$$2$$.width() - $e2$$2$$.width(), $e1$$2$$.add($e2$$2$$).remove()) : ($e1$$2$$ = $$$$35$$("\x3cdiv /\x3e").css({width:100, 
      height:100, overflow:"auto", position:"absolute", top:-1E3, left:0}).prependTo("body").append("\x3cdiv /\x3e").find("div").css({width:"100%", height:200}), $scrollbar_width$$ = 100 - $e1$$2$$.width(), $e1$$2$$.parent().remove());
    });
    var $_aKeyHandlerStack$$ = [], $_instance$$ = -1;
    $oj$$36$$.$__registerWidget$("oj.ojTree", $$$$35$$.oj.baseComponent, {widgetEventPrefix:"oj", defaultElement:"\x3cdiv\x3e", options:{dnd:{reorder:"disable"}, expandParents:!1, initExpanded:null, $initLoaded$:[], selection:[], selectionMode:"single", selectedParentCollapse:!1, selectedParentExpand:!0, selectPrevOnDelete:!1, data:null, emptyText:null, icons:!0, types:null, before:null, collapse:null, create:null, collapseAll:null, cut:null, dehover:null, remove:null, destroy:null, expand:null, 
    expandAll:null, hover:null, loaded:null, move:null, optionChange:null, paste:null, refresh:null, rename:null}, collapse:function($node$$63$$, $skipAnim$$) {
      var $dur$$ = ($skipAnim$$ = $skipAnim$$ || !1) ? 0 : this.$_animDuration$;
      $node$$63$$ = this.$_getNode$($node$$63$$);
      if (!$node$$63$$.length || -1 === $node$$63$$ || !$node$$63$$.hasClass("oj-expanded") || this.$_data$.$core$.locked || $node$$63$$.hasClass("oj-disabled")) {
        return!1;
      }
      var $rslt$$ = this.$_emitEvent$({obj:$node$$63$$, func:"collapse"}, "before");
      if ("boolean" != typeof $rslt$$ || $rslt$$) {
        $node$$63$$.removeClass("oj-expanded").addClass("oj-collapsed").attr("aria-expanded", "false"), $$$$35$$($node$$63$$.children()[0]).removeClass("oj-selected").addClass("oj-default"), !$skipAnim$$ && $dur$$ ? this.$_slide$($node$$63$$, !0) : this.$_transitionEnd$($$$$35$$($node$$63$$.children("UL")[0]), $node$$63$$);
      }
    }, $_slide$:function($node$$64$$, $bSlideUp$$) {
      var $$ul$$, $hNow$$, $hFinal$$;
      $$ul$$ = $$$$35$$($node$$64$$.children("ul"));
      this.$_isSafari$ ? $$ul$$[0].addEventListener("webkitTransitionEnd", this.$_proxyTransitionEndHandler$) : $$ul$$[0].addEventListener("transitionend", this.$_proxyTransitionEndHandler$);
      $bSlideUp$$ ? ($hNow$$ = $$ul$$[0].offsetHeight, $hFinal$$ = 0) : ($hNow$$ = 0, $hFinal$$ = this.$_getElemHeight$($$ul$$[0]));
      $$ul$$.css("max-height", $hNow$$ + "px");
      $$ul$$.css("overflow", "hidden");
      $bSlideUp$$ || ($$ul$$[0].style.display = "block");
      setTimeout(function() {
        $$ul$$.addClass("oj-tree-transition");
        $$ul$$.css("max-height", $hFinal$$ + "px");
      }, 20);
    }, $_getElemHeight$:function($el$$18$$) {
      var $parent$$40$$, $nextSib$$, $h$$8$$, $disp$$, $div$$6$$ = $$$$35$$("\x3cdiv style\x3d'position: absolute'\x3e");
      $parent$$40$$ = $el$$18$$.parentNode;
      $nextSib$$ = $el$$18$$.nextSibling;
      $parent$$40$$.removeChild($el$$18$$);
      $disp$$ = $el$$18$$.style.display;
      $el$$18$$.style.display = "block";
      $div$$6$$.append($el$$18$$);
      this.$_$container$[0].appendChild($div$$6$$[0]);
      $h$$8$$ = $el$$18$$.offsetHeight || $el$$18$$.scrollHeight;
      $el$$18$$.style.display = $disp$$;
      this.$_$container$[0].removeChild($div$$6$$[0]);
      $div$$6$$[0].removeChild($el$$18$$);
      $nextSib$$ ? $parent$$40$$.insertBefore($el$$18$$, $nextSib$$) : $parent$$40$$.appendChild($el$$18$$);
      return $h$$8$$ + 10;
    }, $_transitionEndHandler$:function($$ul$$1_e$$104$$) {
      $$ul$$1_e$$104$$ = $$$$35$$($$ul$$1_e$$104$$.target);
      var $node$$65$$ = $$ul$$1_e$$104$$.closest("li");
      this.$_isSafari$ ? $$ul$$1_e$$104$$[0].removeEventListener("webkitTransitionEnd", this.$_proxyTransitionEndHandler$) : $$ul$$1_e$$104$$[0].removeEventListener("transitionend", this.$_proxyTransitionEndHandler$);
      $$ul$$1_e$$104$$.removeClass("oj-tree-transition");
      this.$_transitionEnd$($$ul$$1_e$$104$$, $node$$65$$);
    }, $_transitionEnd$:function($$ul$$2$$, $node$$66$$) {
      $node$$66$$.hasClass("oj-collapsed") ? ($$ul$$2$$[0].style.display = "none", $$ul$$2$$.css("max-height", ""), this.$_emitEvent$({obj:$node$$66$$}, "collapse"), this.after_close($node$$66$$)) : ($$ul$$2$$[0].style.display = "block", $$ul$$2$$.css("max-height", ""), this.$_emitEvent$({obj:$node$$66$$}, "expand"), this.after_open($node$$66$$));
    }, collapseAll:function($node$$67$$, $anim$$) {
      var $origTarg$$ = $node$$67$$ ? $node$$67$$ : -1, $_this$$1$$ = this;
      if (!this.$_data$.$core$.locked && (($node$$67$$ = $node$$67$$ ? this.$_getNode$($node$$67$$) : this.$_$container$) && -1 !== $origTarg$$ && ($origTarg$$ = $node$$67$$), $node$$67$$ && -1 !== $origTarg$$ || ($node$$67$$ = this.$_$container_ul$), !$node$$67$$.hasClass("oj-disabled"))) {
        var $subject$$;
        -1 !== $origTarg$$ && this.isExpanded($node$$67$$) && ($subject$$ = $node$$67$$[0]);
        var $objs$$ = $node$$67$$.find("li.oj-expanded");
        $objs$$.length && $objs$$.each(function() {
          $_this$$1$$.collapse(this, !$anim$$);
        });
        $subject$$ && (this.collapse($subject$$, !$anim$$), $objs$$.splice(0, 0, $subject$$));
        $objs$$.length && this.$_emitEvent$({obj:$objs$$, targ:$origTarg$$}, "collapseAll");
      }
    }, expand:function($node$$68$$, $skipAnim$$1$$) {
      this.$_expand$($node$$68$$, !1, $skipAnim$$1$$);
    }, expanded:function($nodes$$, $skipAnim$$2$$) {
      var $exlr$$, $exlen$$, $_this$$2$$ = this;
      if ($nodes$$ && "array" === $$$$35$$.type($nodes$$)) {
        if (this.$_data$.$core$.locked) {
          return null;
        }
        $exlen$$ = $nodes$$.length;
        $$$$35$$.each($nodes$$, function($i$$398$$, $val$$57$$) {
          $_this$$2$$.$_expand$($val$$57$$, !1, $skipAnim$$2$$);
        });
        return null;
      }
      $nodes$$ = this.$_$container_ul$.find("li.oj-expanded");
      $exlen$$ = $nodes$$.length;
      $exlr$$ = [];
      for (var $n$$26$$ = 0;$n$$26$$ < $exlen$$;$n$$26$$++) {
        $exlr$$.push($nodes$$[$n$$26$$]);
      }
      return $$$$35$$($exlr$$);
    }, expandAll:function($node$$69$$, $anim$$1$$) {
      this.$_expandAll$($node$$69$$, $anim$$1$$);
    }, toggleExpand:function($node$$70$$, $skipAnim$$3$$) {
      if (($node$$70$$ = this.$_getNode$($node$$70$$)) && $node$$70$$.length && -1 !== $node$$70$$ && !$node$$70$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if ($node$$70$$.hasClass("oj-collapsed")) {
          return this.expand($node$$70$$, $skipAnim$$3$$);
        }
        if ($node$$70$$.hasClass("oj-expanded")) {
          return this.collapse($node$$70$$, $skipAnim$$3$$);
        }
      }
    }, deselect:function($node$$71$$) {
      var $prevSelections$$ = this.options.selection.slice(0);
      this.$_deselect$($node$$71$$);
      this.$_fireOptionChangeEvent$("selection", $prevSelections$$, null, null);
    }, deselectAll:function($context$$102$$) {
      if (!this.$_data$.$core$.locked) {
        var $prevSelections$$1$$ = this.options.selection.slice(0);
        this.$_deselectAll$($context$$102$$);
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$1$$, null, null);
      }
    }, select:function($node$$72$$) {
      this.$_select$($node$$72$$, !0);
    }, toggleSelect:function($node$$73$$) {
      $node$$73$$ = this.$_getNode$($node$$73$$);
      if (!$node$$73$$.length || $node$$73$$.hasClass("oj-disabled") || this.$_data$.$core$.locked) {
        return!1;
      }
      this.isSelected($node$$73$$) ? this.deselect($node$$73$$) : this.$_select$($node$$73$$, !0);
      return!0;
    }, isCollapsed:function($node$$74$$) {
      return($node$$74$$ = this.$_getNode$($node$$74$$)) && -1 !== $node$$74$$ && $node$$74$$.hasClass("oj-collapsed");
    }, isExpanded:function($node$$75$$) {
      return($node$$75$$ = this.$_getNode$($node$$75$$)) && -1 !== $node$$75$$ && $node$$75$$.hasClass("oj-expanded");
    }, isLeaf:function($node$$76$$) {
      return this.$_isLeaf$($node$$76$$);
    }, isSelected:function($n$$27_node$$77$$) {
      $n$$27_node$$77$$ = this.$_getNode$($n$$27_node$$77$$);
      var $r$$4$$ = !1;
      $n$$27_node$$77$$ && $n$$27_node$$77$$.length && this.$_data$.ui.selected && ($r$$4$$ = 0 <= this.$_data$.ui.selected.index($n$$27_node$$77$$));
      return $r$$4$$;
    }, create:function($refnode$$, $position$$33$$, $data$$155$$) {
      return this.$_createNode$($refnode$$, $position$$33$$, $data$$155$$);
    }, remove:function($node$$78$$) {
      $node$$78$$ = this.$_getNode$($node$$78$$);
      if (!$node$$78$$.length || $node$$78$$.hasClass("oj-disabled") || this.$_data$.$core$.locked) {
        return!1;
      }
      var $p$$8_rslt$$1$$ = this.$_emitEvent$({obj:$node$$78$$, func:"remove"}, "before");
      if ("boolean" == typeof $p$$8_rslt$$1$$ && !$p$$8_rslt$$1$$) {
        return!1;
      }
      this.$__rollback$();
      var $p$$8_rslt$$1$$ = this.$_getParent$($node$$78$$), $prev$$3$$ = $$$$35$$([]), $t$$2$$ = this, $sib$$ = this.$_getPrev$($node$$78$$);
      $node$$78$$.each(function() {
        $prev$$3$$ = $prev$$3$$.add($t$$2$$.$_getPrev$(this));
      });
      $node$$78$$ = $node$$78$$.detach();
      -1 !== $p$$8_rslt$$1$$ && 0 === $p$$8_rslt$$1$$.find("\x3e ul \x3e li").length && $p$$8_rslt$$1$$.removeClass("oj-expanded oj-collapsed").addClass("oj-tree-leaf").removeAttr("aria-expanded");
      this.$_cleanNode$($p$$8_rslt$$1$$);
      this.$_emitEvent$({obj:$node$$78$$, prev:$sib$$, parent:$p$$8_rslt$$1$$}, "remove");
      return $node$$78$$;
    }, getText:function($node$$79$$) {
      $node$$79$$ = this.$_getNode$($node$$79$$);
      if (!$node$$79$$.length) {
        return!1;
      }
      $node$$79$$ = $node$$79$$.children("a:eq(0)");
      $node$$79$$ = $node$$79$$.find("span:eq(0)");
      return $node$$79$$[0].textContent;
    }, rename:function($node$$80$$, $text$$17$$) {
      this.$_rename_node$($node$$80$$, $text$$17$$);
    }, hover:function($node$$81$$) {
      if (!this.$_data$.menu.$activenode$ && ($node$$81$$ = this.$_getNode$($node$$81$$), $node$$81$$.length && !$node$$81$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked && !$node$$81$$.hasClass("oj-hover"))) {
        var $rslt$$2$$ = this.$_emitEvent$({obj:$node$$81$$, func:"hover"}, "before");
        if ("boolean" != typeof $rslt$$2$$ || $rslt$$2$$) {
          $node$$81$$.hasClass("oj-hover") || this.dehover(), this.$_data$.ui.$hovered$ = $node$$81$$.children("a").addClass("oj-hover").parent(), this.$_$container_ul$.attr("aria-activedescendant", this.$_data$.ui.$hovered$.attr("id")), this.$_fix_scroll$($node$$81$$), this.$_emitEvent$({obj:$node$$81$$}, "hover");
        }
      }
    }, dehover:function() {
      if (!this.$_data$.menu.$activenode$) {
        var $obj$$59$$ = this.$_data$.ui.$hovered$, $p$$9$$;
        if ($obj$$59$$ && $obj$$59$$.length && !$obj$$59$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
          $p$$9$$ = $obj$$59$$.find("a.oj-hover");
          if (!$p$$9$$.length && ($p$$9$$ = this.$_$container_ul$.find("a.oj-hover"), !$p$$9$$.length)) {
            return;
          }
          $p$$9$$.removeClass("oj-hover").parent();
          this.$_$container_ul$.removeAttr("aria-activedescendant");
          this.$_data$.ui.$hovered$ = null;
          void 0 != $obj$$59$$.attr("id") && this.$_emitEvent$({obj:$obj$$59$$}, "dehover");
        }
      }
    }, getPath:function($node$$82$$, $idMode$$) {
      var $p$$10$$ = [], $_this$$3$$ = this;
      $node$$82$$ = this.$_getNode$($node$$82$$);
      if (-1 === $node$$82$$ || !$node$$82$$ || !$node$$82$$.length) {
        return!1;
      }
      $node$$82$$.parentsUntil(".oj-tree", "li").each(function() {
        $p$$10$$.push($idMode$$ ? this.id : $_this$$3$$.getText(this));
      });
      $p$$10$$.reverse();
      $p$$10$$.push($idMode$$ ? $node$$82$$.attr("id") : this.getText($node$$82$$));
      return $p$$10$$;
    }, getRoot:function() {
      return this.$_$container$.children("ul:eq(0)");
    }, refresh:function($node$$83$$) {
      this._super();
      this.$_data$.$core$.locked || this.$_refresh$($node$$83$$ ? $node$$83$$ : -1);
    }, move:function($node$$84$$, $refnode$$1$$, $position$$34$$, $iscopy$$) {
      this.$_moveNode$($node$$84$$, $refnode$$1$$, $position$$34$$, $iscopy$$);
    }, getType:function($node$$85$$) {
      return this.$_getType$($node$$85$$);
    }, setType:function($node$$86$$, $str$$22$$) {
      return this.$_setType$($node$$86$$, $str$$22$$);
    }, getNodeBySubId:function($locator$$39$$) {
      return $locator$$39$$ ? this.$_processSubId$($locator$$39$$) : this.element ? this.element[0] : null;
    }, getParent:function($l$$10_node$$87$$) {
      return($l$$10_node$$87$$ = this.$_getParent$($l$$10_node$$87$$)) && 0 < $l$$10_node$$87$$.length ? $l$$10_node$$87$$ : null;
    }, getPrevSibling:function($l$$11_node$$88$$) {
      return($l$$11_node$$88$$ = this.$_getPrev$($l$$11_node$$88$$, !0)) && 0 < $l$$11_node$$88$$.length ? $l$$11_node$$88$$ : null;
    }, getNextSibling:function($l$$12_node$$89$$) {
      return($l$$12_node$$89$$ = this.$_getNext$($l$$12_node$$89$$, !0)) && 0 < $l$$12_node$$89$$.length ? $l$$12_node$$89$$ : null;
    }, getChildren:function($l$$13_node$$90$$) {
      return($l$$13_node$$90$$ = this.$_getChildren$($l$$13_node$$90$$ ? $l$$13_node$$90$$ : -1)) && 0 < $l$$13_node$$90$$.length ? $l$$13_node$$90$$ : null;
    }, _ComponentCreate:function() {
      this._super();
      this.$_index$ = this.$_newIndex$();
      this.$_elemId$ = this.element.attr("id");
      void 0 === this.$_elemId$ && (this.$_elemId$ = "oj-tree-" + this.$_getIndex$(), this.element.attr("id", this.$_elemId$));
      this.$_elemId$ = "#" + this.$_elemId$;
      this.$_$container$ = this.element;
      this.$_$container_ul$ = null;
      this.$_data$ = {};
      this.$_tds$ = null;
      this.$_isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_isTouch$ = $oj$$36$$.$DomUtils$.$isTouchSupported$();
      this.$_initTree$();
      if (this.$_animDuration$ = this.$_getAnimDuration$()) {
        this.$_isSafari$ = "safari" == $oj$$36$$.$AgentUtils$.$getAgentInfo$().browser, this.$_proxyTransitionEndHandler$ = $$$$35$$.proxy(this.$_transitionEndHandler$, this);
      }
      this.$_start$();
    }, _destroy:function() {
      this.$_clearTree$();
      this.$_data$.html.$markup_ul$ && (this.$_$container$.append(this.$_data$.html.$markup_ul$), this.$_data$.html.$markup_div$.remove(), this.$_data$.html.$markup_div$ = !1, this.$_data$.html.$useExistingMarkup$ = !1);
      this.$_data$.$ds$.type = 0;
      this._super();
    }, _setOption:function($key$$147$$, $newval$$, $flags$$38$$) {
      var $val$$58$$;
      if ("selection" === $key$$147$$) {
        $newval$$ = "string" == typeof $newval$$ ? [$newval$$] : $newval$$ && $newval$$.length ? $newval$$ : [], this.$_data$.$core$.$suppressSelectEvent$ = !0, this.$_handleSelectionOptionChange$($newval$$), this.$_data$.$core$.$suppressSelectEvent$ = !1, $newval$$ = this.$_getSelected$();
      } else {
        if ("selectionMode" === $key$$147$$) {
          "none" === $newval$$ ? $val$$58$$ = 0 : "single" === $newval$$ ? $val$$58$$ = 1 : "multiple" === $newval$$ ? $val$$58$$ = -1 : ($val$$58$$ = 0, $newval$$ = "none"), $val$$58$$ != this.$_data$.$core$.$selectMode$ && (this.$_data$.$core$.$selectMode$ = $val$$58$$);
        } else {
          if ("icons" === $key$$147$$) {
            "boolean" == $$$$35$$.type($newval$$) && $newval$$ != this.$_data$.$themes$.icons && ((this.$_data$.$themes$.icons = $newval$$) ? this.$_showIcons$() : this.$_hideIcons$());
          } else {
            if ("contextMenu" === $key$$147$$) {
              this.$_clearMenu$(), $newval$$ && this.$_initMenu$($newval$$);
            } else {
              if ("disabled" === $key$$147$$) {
                this.$_handleDisabledChanged$($newval$$);
              } else {
                if ("data" === $key$$147$$) {
                  this._super($key$$147$$, $newval$$, $flags$$38$$);
                  this.$_initDSOpts$();
                  this.$_initDataSource$();
                  this.$_initExpandedOpts$();
                  this.$_loadNodes$();
                  return;
                }
                if ("dnd" === $key$$147$$) {
                  this._super($key$$147$$, $newval$$, $flags$$38$$);
                  this.$_initDnDOpts$();
                  return;
                }
                "emptyText" == $key$$147$$ && ($newval$$ = this.$_escapeHtml$($newval$$));
              }
            }
          }
        }
      }
      this._super($key$$147$$, $newval$$, $flags$$38$$);
    }, $_CompareOptionValues$:function($option$$30$$, $value1$$10$$, $value2$$9$$) {
      return "selection" === $option$$30$$ ? this.$_compareSelectionValues$($value1$$10$$, $value2$$9$$) : this._superApply(arguments);
    }, $_compareSelectionValues$:function($value1$$11$$, $value2$$10$$) {
      var $i$$399$$, $j$$41$$, $id$$43$$, $len$$19$$, $len2$$, $bDiff$$ = !1, $bInList$$ = !1;
      $len$$19$$ = $value1$$11$$ && $value1$$11$$.length ? $value1$$11$$.length : 0;
      $len2$$ = $value2$$10$$ && $value2$$10$$.length ? $value2$$10$$.length : 0;
      if ($len$$19$$ !== $len2$$) {
        $bDiff$$ = !0;
      } else {
        if (0 == $len$$19$$ && 0 === $len2$$) {
          $bDiff$$ = !1;
        } else {
          for ($i$$399$$ = 0;$i$$399$$ < $len$$19$$;$i$$399$$++) {
            $id$$43$$ = $$$$35$$($value1$$11$$[$i$$399$$]).attr("id");
            $bInList$$ = !1;
            for ($j$$41$$ = 0;$j$$41$$ < $len2$$;$j$$41$$++) {
              if ($id$$43$$ == $$$$35$$($value2$$10$$[$j$$41$$]).attr("id")) {
                $bInList$$ = !0;
                break;
              }
            }
            if (!$bInList$$) {
              $bDiff$$ = !0;
              break;
            }
          }
        }
      }
      return!$bDiff$$;
    }, $_clearTree$:function() {
      var $n$$28$$ = this.$_getIndex$();
      this.$_$container$.unbind(".oj-tree").undelegate(".oj-tree").removeData("oj-tree-instance-id").find("[class^\x3d'oj-tree']").addBack().attr("class", function() {
        return this.className.replace(/oj-tree[^ ]*|$/ig, "");
      });
      var $cl$$ = this.$_$container$.attr("class"), $cl$$ = $cl$$.trim();
      0 === $cl$$.length && this.$_$container$.removeAttr("class");
      $_removeKeyFilter$$(this.$_$container_ul$);
      $$$$35$$(document).unbind(".oj-tree-" + $n$$28$$).undelegate(".oj-tree-" + $n$$28$$);
      this.$_$container_ul$.remove();
      this.$_$container_ul$ = null;
    }, $_getNode$:function($obj$$60$$, $allow_multiple$$) {
      if ("undefined" === typeof $obj$$60$$ || null === $obj$$60$$) {
        return $allow_multiple$$ ? this.$_data$.ui.selected : this.$_data$.ui.$lastSelected$;
      }
      var $$obj$$ = $$$$35$$($obj$$60$$, this.$_$container$);
      if ($$obj$$.is(".oj-tree") || -1 === $obj$$60$$) {
        return-1;
      }
      $$obj$$ = $$obj$$.closest("li", this.$_$container$);
      return $$obj$$.length ? $$obj$$ : !1;
    }, $_getPrev$:function($obj$$61$$, $strict$$) {
      $obj$$61$$ = this.$_getNode$($obj$$61$$);
      if (-1 === $obj$$61$$) {
        return this.$_$container$.find("\x3e ul \x3e li:last-child");
      }
      if (!$obj$$61$$.length) {
        return!1;
      }
      if ($strict$$) {
        return 0 < $obj$$61$$.prevAll("li").length ? $obj$$61$$.prevAll("li:eq(0)") : !1;
      }
      if ($obj$$61$$.prev("li").length) {
        for ($obj$$61$$ = $obj$$61$$.prev("li").eq(0);$obj$$61$$.hasClass("oj-expanded");) {
          $obj$$61$$ = $obj$$61$$.children("ul:eq(0)").children("li:last");
        }
        return $obj$$61$$;
      }
      var $o$$12$$ = $obj$$61$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$12$$.length ? $o$$12$$ : !1;
    }, $_getNext$:function($obj$$62$$, $strict$$1$$) {
      $obj$$62$$ = this.$_getNode$($obj$$62$$);
      return-1 === $obj$$62$$ ? this.$_$container$.find("\x3e ul \x3e li:first-child") : $obj$$62$$.length ? $strict$$1$$ ? 0 < $obj$$62$$.nextAll("li").size() ? $obj$$62$$.nextAll("li:eq(0)") : !1 : $obj$$62$$.hasClass("oj-expanded") ? $obj$$62$$.find("li:eq(0)") : 0 < $obj$$62$$.nextAll("li").size() ? $obj$$62$$.nextAll("li:eq(0)") : $obj$$62$$.parentsUntil(".oj-tree", "li").next("li").eq(0) : !1;
    }, $_getParent$:function($o$$13_obj$$63$$) {
      $o$$13_obj$$63$$ = this.$_getNode$($o$$13_obj$$63$$);
      if (-1 == $o$$13_obj$$63$$ || !$o$$13_obj$$63$$.length) {
        return!1;
      }
      $o$$13_obj$$63$$ = $o$$13_obj$$63$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$13_obj$$63$$.length ? $o$$13_obj$$63$$ : -1;
    }, $_getChildren$:function($obj$$64$$) {
      $obj$$64$$ = this.$_getNode$($obj$$64$$);
      return-1 === $obj$$64$$ ? this.$_$container$.children("ul:eq(0)").children("li") : $obj$$64$$.length ? $obj$$64$$.children("ul:eq(0)").children("li") : !1;
    }, $_isLeaf$:function($node$$91$$) {
      return($node$$91$$ = this.$_getNode$($node$$91$$)) && -1 !== $node$$91$$ && $node$$91$$.hasClass("oj-tree-leaf");
    }, $_getNodeElem$:function($el$$19_node$$92$$) {
      $el$$19_node$$92$$ = this.$_$container_ul$.find($el$$19_node$$92$$);
      var $ret$$38$$ = !1;
      $el$$19_node$$92$$ && $el$$19_node$$92$$.length && 0 < $el$$19_node$$92$$.length && $$$$35$$($el$$19_node$$92$$).is("li") && ($ret$$38$$ = $el$$19_node$$92$$);
      return $ret$$38$$;
    }, $_reference$:function($node$$93$$, $o$$14$$) {
      var $ctor$$2_div$$7$$ = $node$$93$$.parents("div").eq(0);
      ($ctor$$2_div$$7$$ = $oj$$36$$.Components.$getWidgetConstructor$($ctor$$2_div$$7$$)) && $o$$14$$ && $ctor$$2_div$$7$$("getCI", $o$$14$$);
      return this;
    }, getCI:function($o$$15$$) {
      $o$$15$$.$ot$ = this;
    }, $_applyDefaults$:function($to$$3$$, $from$$3$$) {
      void 0 != $to$$3$$ && void 0 != $from$$3$$ && $$$$35$$.each($from$$3$$, function($prop$$66$$, $val$$59$$) {
        void 0 == $to$$3$$[$prop$$66$$] && ($to$$3$$[$prop$$66$$] = $val$$59$$);
      });
    }, $_handleDisabledChanged$:function($newval$$1$$) {
      var $curState$$;
      "undefined" !== typeof $newval$$1$$ && (($curState$$ = this.$_$container_ul$.hasClass("oj-disabled")) || ($curState$$ = !1), $curState$$ != $newval$$1$$ && ($newval$$1$$ ? (this.$_$container_ul$.addClass("oj-disabled"), this.$_$container_ul$.prop("disabled", !0)) : (this.$_$container_ul$.removeClass("oj-disabled"), this.$_$container_ul$.prop("disabled", !1)), this.$_treeDisable$($newval$$1$$)));
    }, $_treeDisable$:function($lstate$$) {
      $lstate$$ ? (this.$_data$.$core$.locked = !0, this.$_data$.ui.opacity = this.$_$container$.children("ul").css("opacity"), this.$_$container_ul$.addClass("oj-disabled").css("opacity", "0.9")) : (this.$_data$.$core$.locked = !1, this.$_$container_ul$.removeClass("oj-disabled").css("opacity", this.$_data$.ui.opacity));
    }, $_handleSelectionOptionChange$:function($aSelected_newSels$$) {
      var $sels$$ = $aSelected_newSels$$.slice(0), $cur$$2$$ = [], $_this$$5$$ = this, $$elem$$, $id$$44$$, $inList$$, $len$$20$$;
      $$$$35$$.grep($sels$$, function($node$$94$$, $i$$400$$) {
        if ($$elem$$ = $_this$$5$$.$_getNodeElem$($node$$94$$)) {
          $cur$$2$$.push($$elem$$), $sels$$[$i$$400$$] = $$elem$$[0];
        } else {
          return!1;
        }
        return!0;
      });
      $aSelected_newSels$$ = this.$_getSelected$();
      $$$$35$$.each($aSelected_newSels$$, function($i$$401$$, $node$$95$$) {
        $len$$20$$ = $cur$$2$$.length;
        $id$$44$$ = $$$$35$$($node$$95$$).attr("id");
        $inList$$ = !1;
        for ($i$$401$$ = 0;$i$$401$$ < $len$$20$$;$i$$401$$++) {
          if ($id$$44$$ == $cur$$2$$[$i$$401$$].attr("id")) {
            $inList$$ = !0;
            break;
          }
        }
        $inList$$ || $_this$$5$$.$_deselect$($node$$95$$);
      });
      this.$_setSelected$($cur$$2$$, null);
    }, $_prepare_move$:function($o$$16$$, $r$$5$$, $pos$$13$$, $cb$$1$$, $is_cb$$) {
      var $p$$11$$ = {};
      $r$$5$$ = -1 !== $r$$5$$ && $r$$5$$ ? this.$_getNode$($r$$5$$) : -1;
      this.$_reference$($o$$16$$, $p$$11$$);
      $p$$11$$.$rt$ = this;
      $p$$11$$.$o$ = $p$$11$$.$ot$.$_getNode$($o$$16$$);
      $p$$11$$.$r$ = $r$$5$$;
      $p$$11$$.$p$ = "undefined" === typeof $pos$$13$$ || !1 === $pos$$13$$ ? "last" : $pos$$13$$;
      if (!$is_cb$$ && this.$_data$.$core$.$prepared_move$.$o$ && this.$_data$.$core$.$prepared_move$.$o$[0] === $p$$11$$.$o$[0] && this.$_data$.$core$.$prepared_move$.$r$[0] === $p$$11$$.$r$[0] && this.$_data$.$core$.$prepared_move$.$p$ === $p$$11$$.$p$) {
        $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$);
      } else {
        if (-1 !== $p$$11$$.$r$ && $p$$11$$.$r$) {
          if (!/^(before|after)$/.test($p$$11$$.$p$) && !this.$_is_loaded$($p$$11$$.$r$)) {
            return this.$_load_node$($p$$11$$.$r$, function() {
              this.$_prepare_move$($o$$16$$, $r$$5$$, $pos$$13$$, $cb$$1$$, !0);
            });
          }
          switch($p$$11$$.$p$) {
            case "before":
              $p$$11$$.$cp$ = $p$$11$$.$r$.index();
              $p$$11$$.$cr$ = $p$$11$$.$rt$.$_getParent$($p$$11$$.$r$);
              break;
            case "after":
              $p$$11$$.$cp$ = $p$$11$$.$r$.index() + 1;
              $p$$11$$.$cr$ = $p$$11$$.$rt$.$_getParent$($p$$11$$.$r$);
              break;
            case "inside":
            ;
            case "first":
              $p$$11$$.$cp$ = 0;
              $p$$11$$.$cr$ = $p$$11$$.$r$;
              break;
            case "last":
              $p$$11$$.$cp$ = $p$$11$$.$r$.find(" \x3e ul \x3e li").length;
              $p$$11$$.$cr$ = $p$$11$$.$r$;
              break;
            default:
              $p$$11$$.$cp$ = $p$$11$$.$p$, $p$$11$$.$cr$ = $p$$11$$.$r$;
          }
        } else {
          switch($p$$11$$.$cr$ = -1, $p$$11$$.$p$) {
            case "first":
            ;
            case "before":
            ;
            case "inside":
              $p$$11$$.$cp$ = 0;
              break;
            case "after":
            ;
            case "last":
              $p$$11$$.$cp$ = $p$$11$$.$rt$.$_$container$.find(" \x3e ul \x3e li").length;
              break;
            default:
              $p$$11$$.$cp$ = $p$$11$$.$p$;
          }
        }
        $p$$11$$.$np$ = -1 == $p$$11$$.$cr$ ? $p$$11$$.$rt$.$_$container$ : $p$$11$$.$cr$;
        $p$$11$$.$op$ = $p$$11$$.$ot$.$_getParent$($p$$11$$.$o$);
        $p$$11$$.$cop$ = $p$$11$$.$o$.index();
        -1 === $p$$11$$.$op$ && ($p$$11$$.$op$ = $p$$11$$.$ot$ ? $p$$11$$.$ot$.$_$container$ : this.$_$container$);
        !/^(before|after)$/.test($p$$11$$.$p$) && $p$$11$$.$op$ && $p$$11$$.$np$ && $p$$11$$.$op$[0] === $p$$11$$.$np$[0] && $p$$11$$.$o$.index() < $p$$11$$.$cp$ && $p$$11$$.$cp$++;
        $p$$11$$.$or$ = $p$$11$$.$np$.find(" \x3e ul \x3e li:nth-child(" + ($p$$11$$.$cp$ + 1) + ")");
        this.$_data$.$core$.$prepared_move$ = $p$$11$$;
        $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$, "prepare_move");
      }
    }, check_move:function() {
      var $obj$$65$$ = this.$_data$.$core$.$prepared_move$, $ret$$39$$ = !0, $r$$6$$;
      $r$$6$$ = -1 === $obj$$65$$.$r$ ? this.$_$container$ : $obj$$65$$.$r$;
      if (!$obj$$65$$ || !$obj$$65$$.$o$ || $obj$$65$$.$or$[0] === $obj$$65$$.$o$[0] || !$obj$$65$$.$r$) {
        return!1;
      }
      if (!$obj$$65$$.$cy$) {
        if ($obj$$65$$.$op$ && $obj$$65$$.$np$ && $obj$$65$$.$op$[0] === $obj$$65$$.$np$[0] && $obj$$65$$.$cp$ - 1 === $obj$$65$$.$o$.index()) {
          return!1;
        }
        $obj$$65$$.$o$.each(function() {
          if (-1 !== $r$$6$$.parentsUntil(".oj-tree", "li").addBack().index(this)) {
            return $ret$$39$$ = !1;
          }
        });
      }
      return $ret$$39$$;
    }, $_rename_node$:function($node$$96$$, $text$$18$$) {
      var $t$$3$$;
      $node$$96$$ = this.$_getNode$($node$$96$$);
      this.$__rollback$();
      $t$$3$$ = this.getText($node$$96$$);
      if ($node$$96$$ && $node$$96$$.length) {
        var $rslt$$3$$ = this.$_emitEvent$({obj:$node$$96$$, func:"rename", title:$text$$18$$, prevTitle:$t$$3$$}, "before");
        if ("boolean" == typeof $rslt$$3$$ && !$rslt$$3$$) {
          return;
        }
      }
      $node$$96$$ && $node$$96$$.length && this.$_set_text$.apply(this, Array.prototype.slice.call(arguments)) && this.$_emitEvent$({obj:$node$$96$$, title:$text$$18$$, prevTitle:$t$$3$$}, "rename");
    }, $_moveNode$:function($obj$$66$$, $d$$8_o$$17_ref$$3$$, $position$$35$$, $is_copy$$, $is_prepared$$, $skip_check$$) {
      $is_prepared$$ || ($obj$$66$$ = this.$_getNode$($obj$$66$$));
      if (!($obj$$66$$.hasClass && $obj$$66$$.hasClass("oj-disabled") || this.$_data$.$core$.locked)) {
        if (!$is_prepared$$) {
          return this.$_prepare_move$($obj$$66$$, $d$$8_o$$17_ref$$3$$, $position$$35$$, function($p$$12$$) {
            $p$$12$$.$ot$ === $p$$12$$.$rt$ || $p$$12$$.$cy$ || $p$$12$$.$ot$.deselect($p$$12$$.$o$);
            this.$_moveNode$($p$$12$$, !1, !1, $is_copy$$, !0, $skip_check$$);
          });
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0);
        if (!$skip_check$$ && !this.check_move()) {
          return!1;
        }
        this.$__rollback$();
        $d$$8_o$$17_ref$$3$$ = !1;
        $is_copy$$ ? ($d$$8_o$$17_ref$$3$$ = $obj$$66$$.$o$.clone(!0), $d$$8_o$$17_ref$$3$$.find("*[id]").addBack().each(function() {
          this.id && (this.id = "copy_" + this.id);
        })) : $d$$8_o$$17_ref$$3$$ = $obj$$66$$.$o$;
        $obj$$66$$.$or$.length ? $obj$$66$$.$or$.before($d$$8_o$$17_ref$$3$$) : ($obj$$66$$.$np$.children("ul").length || $$$$35$$("\x3cul /\x3e").appendTo($obj$$66$$.$np$), $obj$$66$$.$np$.children("ul:eq(0)").append($d$$8_o$$17_ref$$3$$));
        try {
          $obj$$66$$.$ot$.$_cleanNode$($obj$$66$$.$op$), $obj$$66$$.$rt$.$_cleanNode$($obj$$66$$.$np$), $obj$$66$$.$op$.find("\x3e ul \x3e li").length || $obj$$66$$.$op$.removeClass("oj-expanded oj-collapsed").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
        } catch ($e$$105$$) {
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0, this.$_data$.$core$.$prepared_move$.$oc$ = $d$$8_o$$17_ref$$3$$);
        $d$$8_o$$17_ref$$3$$ = $$$$35$$.extend(!0, {}, this.$_data$.$core$.$prepared_move$);
        $d$$8_o$$17_ref$$3$$.obj = $obj$$66$$.$o$;
        this.$_emitEvent$($d$$8_o$$17_ref$$3$$, "move");
        return this.$_data$.$core$.$prepared_move$;
      }
    }, $_getMove$:function() {
      return this.$_data$.$crrm$.$prepared_move$;
    }, $_getType$:function($node$$97$$) {
      var $n$$29$$ = null;
      this.options.types && ($n$$29$$ = this.$_getNode$($node$$97$$));
      return $n$$29$$ && $n$$29$$.length ? $n$$29$$.attr(this.options.types.attr) || "default" : !1;
    }, $_setType$:function($node$$98$$, $str$$23$$) {
      var $s$$11$$ = this.options.types, $tattr$$, $ret$$40$$ = !1;
      $node$$98$$ = this.$_getNode$($node$$98$$);
      $s$$11$$ && $node$$98$$ && -1 != $node$$98$$ && $node$$98$$.length && $str$$23$$ && ($tattr$$ = $s$$11$$.attr) && $s$$11$$[$str$$23$$] && ($node$$98$$.attr($tattr$$, $str$$23$$), $node$$98$$.addClass("oj-tree-type"), $ret$$40$$ = !0);
      return $ret$$40$$;
    }, $_check$:function($rule$$3$$, $obj$$67$$, $opts$$37$$) {
      $obj$$67$$ = this.$_getNode$($obj$$67$$);
      var $v$$3$$ = !1, $ty$$ = this.$_getType$($obj$$67$$), $d$$9$$ = 0, $_this$$6$$ = this, $s$$12$$ = this.$_getOptions$().types, $data$$156$$ = !1;
      if (-1 === $obj$$67$$) {
        if ($s$$12$$[$rule$$3$$]) {
          $v$$3$$ = $s$$12$$[$rule$$3$$];
        } else {
          return;
        }
      } else {
        if (!1 === $ty$$) {
          return;
        }
        ($data$$156$$ = this.$_data$.types.$defaults$.useData ? $obj$$67$$.data("oj-tree") : !1) && $data$$156$$.types && "undefined" !== typeof $data$$156$$.types[$rule$$3$$] ? $v$$3$$ = $data$$156$$.types[$rule$$3$$] : $s$$12$$.types[$ty$$] && "undefined" !== typeof $s$$12$$.types[$ty$$][$rule$$3$$] ? $v$$3$$ = $s$$12$$.types[$ty$$][$rule$$3$$] : $s$$12$$.types["default"] && "undefined" !== typeof $s$$12$$.types["default"][$rule$$3$$] && ($v$$3$$ = $s$$12$$.types["default"][$rule$$3$$]);
      }
      $$$$35$$.isFunction($v$$3$$) && ($v$$3$$ = $v$$3$$.call(this, $obj$$67$$));
      var $md$$ = this.$_data$.types.$defaults$.maxDepth;
      "maxDepth" === $rule$$3$$ && -1 !== $obj$$67$$ && !1 !== $opts$$37$$ && -2 !== this.$_data$.types.$defaults$.maxDepth && 0 !== $v$$3$$ && $obj$$67$$.children("a:eq(0)").parentsUntil(".oj-tree", "li").each(function($i$$402$$) {
        if (-1 !== $md$$ && 0 >= $md$$ - ($i$$402$$ + 1)) {
          return $v$$3$$ = 0, !1;
        }
        $d$$9$$ = 0 === $i$$402$$ ? $v$$3$$ : $_this$$6$$.$_check$($rule$$3$$, this, !1);
        if (-1 !== $d$$9$$ && 0 >= $d$$9$$ - ($i$$402$$ + 1)) {
          return $v$$3$$ = 0, !1;
        }
        0 <= $d$$9$$ && ($d$$9$$ - ($i$$402$$ + 1) < $v$$3$$ || 0 > $v$$3$$) && ($v$$3$$ = $d$$9$$ - ($i$$402$$ + 1));
        0 <= $md$$ && ($md$$ - ($i$$402$$ + 1) < $v$$3$$ || 0 > $v$$3$$) && ($v$$3$$ = $md$$ - ($i$$402$$ + 1));
      });
      return $v$$3$$;
    }, $_cleanNode$:function($obj$$68$$) {
      $obj$$68$$ = $obj$$68$$ && -1 != $obj$$68$$ ? $$$$35$$($obj$$68$$) : this.$_$container_ul$;
      $obj$$68$$ = $obj$$68$$.is("li") ? $obj$$68$$.find("li").addBack() : $obj$$68$$.find("li");
      $obj$$68$$.removeClass("oj-tree-last").addClass("oj-tree-node").addClass("oj-draggable").filter("li:last-child").addClass("oj-tree-last").end().filter(":has(li)").not(".oj-expanded").removeClass("oj-tree-leaf").addClass("oj-collapsed").attr("aria-expanded", "false");
      $obj$$68$$.not(".oj-expanded, .oj-collapsed").addClass("oj-tree-leaf").children("ul").remove();
      var $typeAttr$$ = this.options.types ? this.options.types.attr : !1;
      $obj$$68$$.find("li");
      var $disc$$, $t$$5$$;
      $$$$35$$.each($obj$$68$$, function() {
        $t$$5$$ = $$$$35$$(this);
        $disc$$ = $t$$5$$.find("\x3e ins");
        1 < $disc$$.length && ($disc$$ = $$$$35$$($disc$$[0]));
        $t$$5$$.hasClass("oj-tree-leaf") ? ($disc$$.removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), $disc$$.addClass("oj-tree-icon")) : ($disc$$.addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), $disc$$.removeClass("oj-tree-node-icon"));
        $typeAttr$$ && $t$$5$$.attr($typeAttr$$) && $t$$5$$.addClass("oj-tree-type");
      });
    }, $_createNode$:function($obj$$69$$, $position$$36$$, $js$$, $callback$$109$$, $is_loaded$$) {
      $obj$$69$$ = $obj$$69$$ || -1;
      $obj$$69$$ = this.$_getNode$($obj$$69$$);
      if (-1 !== $obj$$69$$ && !$obj$$69$$.length) {
        return!1;
      }
      $position$$36$$ = "undefined" === typeof $position$$36$$ ? "last" : $position$$36$$;
      var $d$$10$$ = $$$$35$$("\x3cli /\x3e"), $tmp$$4$$;
      if (!$is_loaded$$ && !this.$_is_loaded$($obj$$69$$)) {
        return this.$_load_node$($obj$$69$$, function() {
          this.$_createNode$($obj$$69$$, $position$$36$$, $js$$, $callback$$109$$, !0);
        }), !1;
      }
      this.$__rollback$();
      "string" === typeof $js$$ && ($js$$ = {data:$js$$});
      $js$$ || ($js$$ = {});
      $js$$.attr && $d$$10$$.attr($js$$.attr);
      $js$$.metadata && $d$$10$$.data($js$$.metadata);
      $js$$.state && $d$$10$$.addClass("expanded" === $js$$.state ? "oj-expanded" : "oj-collapsed");
      $js$$.data || ($js$$.data = void 0 !== $js$$.title ? $js$$.title : this.$_getString$("labelNewNode"));
      $$$$35$$.isArray($js$$.data) || ($tmp$$4$$ = $js$$.data, $js$$.data = [], $js$$.data.push($tmp$$4$$));
      var $sp$$2$$;
      $$$$35$$.each($js$$.data, function($i$$404$$, $m$$23$$) {
        $tmp$$4$$ = $$$$35$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$35$$.isFunction($m$$23$$) && ($m$$23$$ = $m$$23$$.call(this, $js$$));
        $sp$$2$$ = $$$$35$$("\x3cspan class\x3d'oj-tree-title'\x3e");
        "string" == typeof $m$$23$$ ? ($sp$$2$$[0].textContent = $m$$23$$, $tmp$$4$$.attr("href", "#")) : ($m$$23$$.attr || ($m$$23$$.attr = {}), $m$$23$$.attr.href || ($m$$23$$.attr.href = "#"), $sp$$2$$[0].textContent = $m$$23$$, $m$$23$$.language && $tmp$$4$$.addClass($m$$23$$.language));
        $tmp$$4$$.append($sp$$2$$);
        $tmp$$4$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-node-icon oj-component-icon'\x3e\x26#160;\x3c/ins\x3e");
        !$m$$23$$.icon && $js$$.icon && ($m$$23$$.icon = $js$$.icon);
        $m$$23$$.icon && (-1 === $m$$23$$.icon.indexOf("/") ? $tmp$$4$$.children("ins").addClass($m$$23$$.icon) : $tmp$$4$$.children("ins").css("background", "url('" + $m$$23$$.icon + "') center center no-repeat"));
        $d$$10$$.append($tmp$$4$$);
      });
      $d$$10$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default'\x3e\x26#160;\x3c/ins\x3e");
      -1 === $obj$$69$$ && ($obj$$69$$ = this.$_$container$, "before" === $position$$36$$ && ($position$$36$$ = "first"), "after" === $position$$36$$ && ($position$$36$$ = "last"));
      switch($position$$36$$) {
        case "before":
          $obj$$69$$.before($d$$10$$);
          $tmp$$4$$ = this.$_getParent$($obj$$69$$);
          break;
        case "after":
          $obj$$69$$.after($d$$10$$);
          $tmp$$4$$ = this.$_getParent$($obj$$69$$);
          break;
        case "inside":
        ;
        case "first":
          $obj$$69$$.children("ul").length || $obj$$69$$.append("\x3cul /\x3e");
          $obj$$69$$.children("ul").prepend($d$$10$$);
          $tmp$$4$$ = $obj$$69$$;
          break;
        case "last":
          $obj$$69$$.children("ul").length || $obj$$69$$.append("\x3cul /\x3e");
          $obj$$69$$.children("ul").append($d$$10$$);
          $tmp$$4$$ = $obj$$69$$;
          break;
        default:
          $obj$$69$$.children("ul").length || $obj$$69$$.append("\x3cul /\x3e"), $position$$36$$ || ($position$$36$$ = 0), $tmp$$4$$ = $obj$$69$$.children("ul").children("li").eq($position$$36$$), $tmp$$4$$.length ? $tmp$$4$$.before($d$$10$$) : $obj$$69$$.children("ul").append($d$$10$$), $tmp$$4$$ = $obj$$69$$;
      }
      if (-1 === $tmp$$4$$ || $tmp$$4$$.get(0) === this.$_$container$.get(0)) {
        $tmp$$4$$ = -1;
      }
      this.$_cleanNode$($tmp$$4$$);
      this.$_emitEvent$({obj:$d$$10$$, parent:$tmp$$4$$}, "create");
      $callback$$109$$ && $callback$$109$$.call(this, $d$$10$$);
      return $d$$10$$;
    }, $_expand$:function($obj$$70$$, $callback$$110$$, $skipAnim$$4$$) {
      $obj$$70$$ = this.$_getNode$($obj$$70$$);
      if (!$obj$$70$$ || !$obj$$70$$.length) {
        return!1;
      }
      $skipAnim$$4$$ = $skipAnim$$4$$ || !1;
      if (!$obj$$70$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if (!$obj$$70$$.hasClass("oj-collapsed")) {
          return $callback$$110$$ && $callback$$110$$.call(), !1;
        }
        var $dur$$1_rslt$$4$$ = this.$_emitEvent$({obj:$obj$$70$$, func:"expand"}, "before");
        if ("boolean" != typeof $dur$$1_rslt$$4$$ || $dur$$1_rslt$$4$$) {
          var $dur$$1_rslt$$4$$ = $skipAnim$$4$$ ? 0 : this.$_animDuration$, $t$$6$$ = this;
          this.$_is_loaded$($obj$$70$$) ? (this.options.expandParents && $obj$$70$$.parentsUntil(".oj-tree", ".oj-collapsed").each(function() {
            $t$$6$$.$_expand$(this, !1, !0);
          }), $obj$$70$$.removeClass("oj-collapsed").addClass("oj-expanded").attr("aria-expanded", "true").children("a").removeClass("oj-tree-loading"), $$$$35$$($obj$$70$$.children()[0]).removeClass("oj-selected").addClass("oj-default"), !$skipAnim$$4$$ && $dur$$1_rslt$$4$$ ? this.$_slide$($obj$$70$$, !1) : this.$_transitionEnd$($$$$35$$($obj$$70$$.children("UL")[0]), $obj$$70$$), $callback$$110$$ && $callback$$110$$.call()) : ($obj$$70$$.children("a").addClass("oj-tree-loading"), this.$_load_node$($obj$$70$$, 
          function() {
            $t$$6$$.$_expand$($obj$$70$$, $callback$$110$$, $skipAnim$$4$$);
          }, $callback$$110$$));
        }
      }
    }, $_expandAll$:function($obj$$71$$, $animate$$13$$, $original_obj$$) {
      var $origTarg$$1$$ = $obj$$71$$ ? $obj$$71$$ : -1;
      ($obj$$71$$ = $obj$$71$$ ? this.$_getNode$($obj$$71$$) : -1) && -1 !== $obj$$71$$ ? $origTarg$$1$$ = $obj$$71$$ : $obj$$71$$ = this.$_$container_ul$;
      $original_obj$$ ? $obj$$71$$ = $obj$$71$$.find("li.oj-collapsed") : ($original_obj$$ = $obj$$71$$, $obj$$71$$ = $obj$$71$$.is(".oj-collapsed") ? $obj$$71$$.find("li.oj-collapsed").addBack() : $obj$$71$$.find("li.oj-collapsed"));
      var $_this$$8$$ = this;
      $obj$$71$$.each(function() {
        var $__this$$ = this;
        $_this$$8$$.$_is_loaded$(this) ? $_this$$8$$.$_expand$(this, !1, !$animate$$13$$) : $_this$$8$$.expand(this, function() {
          $_this$$8$$.$_expandAll$($__this$$, $animate$$13$$, $original_obj$$);
        }, !$animate$$13$$);
      });
      0 === $original_obj$$.find("li.oj-collapsed").length && this.$_emitEvent$({obj:$obj$$71$$, targ:$origTarg$$1$$}, "expandAll");
    }, $_select$:function($node$$99$$, $bRet_check$$, $e$$106$$) {
      var $selectMode$$ = this.$_data$.$core$.$selectMode$;
      if (0 == $selectMode$$) {
        return!1;
      }
      $node$$99$$ = this.$_getNode$($node$$99$$);
      if (-1 == $node$$99$$ || !$node$$99$$ || !$node$$99$$.length || $node$$99$$.hasClass("oj-disabled") || this.$_data$.$core$.locked) {
        return!1;
      }
      $e$$106$$ && "touchend" == $e$$106$$.type || (this.$_data$.ui.$touchEvent$ = !1);
      var $isSelected$$ = this.isSelected($node$$99$$);
      if (!$isSelected$$) {
        var $prevSelections$$2_rslt$$5$$ = this.$_emitEvent$({obj:$node$$99$$, func:"select"}, "before");
        if ("boolean" == typeof $prevSelections$$2_rslt$$5$$ && !$prevSelections$$2_rslt$$5$$) {
          return!1;
        }
      }
      var $prevSelections$$2_rslt$$5$$ = this.options.selection.slice(0), $s$$14$$ = this.options, $isMultiple_selMultMod$$ = this.$_data$.ui.$defaults$.selectMultipleModifier, $isRange_selRangeMod$$ = this.$_data$.ui.$defaults$.selectRangeModifier, $disSelChildren$$ = this.$_data$.ui.$defaults$.disableSelectingChildren, $isMultiple_selMultMod$$ = "on" == $isMultiple_selMultMod$$ || !1 !== $isMultiple_selMultMod$$ && $e$$106$$ && $oj$$36$$.$DomUtils$.$isMetaKeyPressed$($e$$106$$), $isRange_selRangeMod$$ = 
      !1 !== $isRange_selRangeMod$$ && $e$$106$$ && $e$$106$$[$isRange_selRangeMod$$ + "Key"] && this.$_data$.ui.$lastSelected$ && this.$_data$.ui.$lastSelected$[0] !== $node$$99$$[0] && this.$_data$.ui.$lastSelected$.parent()[0] === $node$$99$$.parent()[0], $proceed$$ = !0, $t$$7$$ = this;
      if ($bRet_check$$) {
        if ($disSelChildren$$ && $isMultiple_selMultMod$$ && ($node$$99$$.parentsUntil(".oj-tree", "li").children("a.oj-selected").length || $node$$99$$.children("ul").find("a.oj-selected:eq(0)").length)) {
          return!1;
        }
        $proceed$$ = !1;
        switch(!0) {
          case $isRange_selRangeMod$$:
            this.$_data$.ui.$lastSelected$.addClass("oj-tree-last-selected");
            $node$$99$$ = $node$$99$$[$node$$99$$.index() < this.$_data$.ui.$lastSelected$.index() ? "nextUntil" : "prevUntil"](".oj-tree-last-selected").addBack();
            -1 == $selectMode$$ || $node$$99$$.length < $selectMode$$ ? (this.$_data$.ui.$lastSelected$.removeClass("oj-tree-last-selected"), this.$_data$.ui.selected.each(function() {
              this !== $t$$7$$.$_data$.ui.$lastSelected$[0] && $t$$7$$.$_deselect$(this);
            }), $isSelected$$ = !1, $proceed$$ = !0) : $proceed$$ = !1;
            break;
          case this.$_data$.ui.$touchEvent$ && -1 == $selectMode$$:
            this.$_data$.ui.$touchEvent$ = !1;
            this.toggleSelect($node$$99$$);
            $proceed$$ = !1;
            break;
          case $isSelected$$ && !$isMultiple_selMultMod$$:
            if (!$e$$106$$) {
              break;
            }
            this.$_deselectAll$();
            this.$_data$.ui.$spacebar$ || ($isSelected$$ = !1);
            $proceed$$ = !0;
            break;
          case !$isSelected$$ && !$isMultiple_selMultMod$$:
            $e$$106$$ ? this.$_data$.ui.selected && 1 == this.$_data$.ui.selected.length ? this.$_deselect$(this.$_data$.ui.selected) : this.$_deselectAll$(this.$_data$.ui.selected) : 1 === $selectMode$$ ? this.$_deselect$(this.$_data$.ui.selected) : 1 < $selectMode$$ && this.$_deselectAll$();
            $proceed$$ = !0;
            break;
          case $isSelected$$ && $isMultiple_selMultMod$$:
            this.deselect($node$$99$$);
            break;
          case !$isSelected$$ && $isMultiple_selMultMod$$:
            if (-1 == $selectMode$$ || this.$_data$.ui.selected.length + 1 <= $selectMode$$) {
              $proceed$$ = !0;
            }
          ;
        }
      }
      $bRet_check$$ = !1;
      $proceed$$ && !$isSelected$$ && ($isRange_selRangeMod$$ || (this.$_data$.ui.$lastSelected$ = $node$$99$$), $node$$99$$.children("a").addClass("oj-selected"), $node$$99$$.attr("aria-selected", "true"), $bRet_check$$ = !0, $s$$14$$.selectedParentExpand && $node$$99$$.parents(".oj-collapsed").each(function() {
        $t$$7$$.$_expand$(this, !1, !0);
      }), this.$_data$.ui.selected = this.$_data$.ui.selected.add($node$$99$$), this.$_fix_scroll$($node$$99$$.eq(0)), this.$_data$.$core$.$suppressSelectEvent$ || this.$_fireOptionChangeEvent$("selection", $prevSelections$$2_rslt$$5$$, null, $e$$106$$));
      return $bRet_check$$;
    }, $_deselect$:function($node$$100$$) {
      $node$$100$$ = this.$_getNode$($node$$100$$);
      if (!$node$$100$$.length) {
        return!1;
      }
      $node$$100$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || !this.isSelected($node$$100$$) || ($node$$100$$.children("a").removeClass("oj-selected"), $node$$100$$.removeAttr("aria-selected"), this.$_data$.ui.selected = this.$_data$.ui.selected.not($node$$100$$), this.$_data$.ui.$lastSelected$ && this.$_data$.ui.$lastSelected$.length && this.$_data$.ui.$lastSelected$.get(0) === $node$$100$$.get(0) && (this.$_data$.ui.$lastSelected$ = this.$_data$.ui.selected.eq(0)));
    }, $_deselectAll$:function($context$$103_ret$$41$$) {
      if (!this.$_data$.$core$.locked && ($context$$103_ret$$41$$ = $context$$103_ret$$41$$ ? $$$$35$$($context$$103_ret$$41$$).find("a.oj-selected").parent() : this.$_$container$.find("a.oj-selected").parent(), $context$$103_ret$$41$$.not(".oj-disabled"), 0 !== $context$$103_ret$$41$$.length)) {
        var $_this$$9$$ = this;
        $$$$35$$.each($context$$103_ret$$41$$, function() {
          $_this$$9$$.$_deselect$(this);
        });
      }
    }, $_setSelected$:function($nodes$$2$$, $e$$107$$) {
      if (this.$_data$.$core$.locked) {
        return null;
      }
      if ($nodes$$2$$ && 0 < $nodes$$2$$.length) {
        var $_this$$10$$ = this;
        $$$$35$$.each($nodes$$2$$, function($i$$405$$, $val$$61$$) {
          $val$$61$$ && $_this$$10$$.$_select$($val$$61$$, !0, $e$$107$$);
        });
      }
    }, $_handleNodeTapClick$:function($event$$481$$) {
      $event$$481$$.preventDefault();
      $event$$481$$.currentTarget.blur();
      $$$$35$$($event$$481$$.currentTarget).hasClass("oj-tree-loading") || (this.$_setFocus$(), this.$_select$($event$$481$$.currentTarget, !0, $event$$481$$) && this.$_$container_ul$.focus());
      this.$_data$.ui.$touchEvent$ = !1;
    }, $_disclosureHover$:function($elem$$147$$, $bHover$$) {
      $elem$$147$$ = $$$$35$$($elem$$147$$);
      if (!$elem$$147$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        var $par$$ = $elem$$147$$.parent(), $bClosed$$ = $par$$.hasClass("oj-collapsed");
        if ($par$$.hasClass("oj-expanded") || $bClosed$$) {
          $bHover$$ ? ($elem$$147$$.addClass("oj-hover"), $elem$$147$$.removeClass("oj-default"), $elem$$147$$.removeClass("oj-selected")) : ($elem$$147$$.removeClass("oj-hover"), $elem$$147$$.addClass("oj-default"));
        }
      }
    }, $_refresh$:function($node$$101$$) {
      this.$_refresh_core$($node$$101$$);
    }, $_refresh_core$:function($node$$102$$) {
      var $origTarg$$3$$ = $node$$102$$ ? $node$$102$$ : -1, $_this$$11$$ = this;
      this.$_save_opened$();
      $node$$102$$ || ($node$$102$$ = -1);
      ($node$$102$$ = this.$_getNode$($node$$102$$)) ? $origTarg$$3$$ = $node$$102$$ : $node$$102$$ = -1;
      -1 !== $node$$102$$ ? $node$$102$$.children("UL").remove() : (this.$_$container_ul$.empty(), this.$_processExistingMarkup$());
      this.$_load_node$($node$$102$$, function() {
        $_this$$11$$.$_emitEvent$({obj:$origTarg$$3$$}, "refresh");
        $_this$$11$$.$_reload_nodes$();
      });
    }, $_refresh_ui$:function($obj$$72$$) {
      this.saveSelected();
      this.$_refresh_core$($obj$$72$$);
    }, after_open:function($obj$$73$$) {
      this.$_emitEvent$({obj:$obj$$73$$}, "after_open", !0);
    }, after_close:function($obj$$74$$) {
      this.$_emitEvent$({obj:$obj$$74$$}, "after_close", !0);
    }, $_reopen$:function() {
      var $_this$$12$$ = this;
      this.$_data$.$core$.$toExpand$.length && $$$$35$$.each(this.$_data$.$core$.$toExpand$, function($i$$406$$, $val$$62$$) {
        $_this$$12$$.$_expand$($val$$62$$, !1, !0);
      });
      this.$_emitEvent$({}, "reopen", !0);
    }, $_getSelected$:function($context$$104_sel$$2$$) {
      var $ar$$1$$, $i$$407$$, $len$$21$$;
      $context$$104_sel$$2$$ = $context$$104_sel$$2$$ ? $$$$35$$($context$$104_sel$$2$$).find("a.oj-selected").parent() : this.$_data$.ui.selected;
      $ar$$1$$ = [];
      $len$$21$$ = $context$$104_sel$$2$$.length;
      for ($i$$407$$ = 0;$i$$407$$ < $len$$21$$;$i$$407$$++) {
        $ar$$1$$.push($context$$104_sel$$2$$[$i$$407$$]);
      }
      return $ar$$1$$;
    }, $_set_text$:function($obj$$75$$, $val$$63$$) {
      $obj$$75$$ = this.$_getNode$($obj$$75$$);
      if (!$obj$$75$$.length) {
        return!1;
      }
      $obj$$75$$ = $obj$$75$$.children("a:eq(0)");
      $obj$$75$$ = $obj$$75$$.find("span:eq(0)");
      this.$_emitEvent$({obj:$obj$$75$$, name:$val$$63$$}, "set_text", !0);
      return $obj$$75$$[0].textContent = $val$$63$$;
    }, $_loadNodes$:function() {
      0 !== this.$_data$.$ds$.type && -1 !== this.$_data$.$ds$.type ? this.$_load_node$(-1, function() {
        this.$_loaded$();
        this.$_reload_nodes$();
      }) : (this.$_applyEmptyText$(), this.$_loaded$());
    }, $_load_node$:function($obj$$76$$) {
      this.$_emitEvent$({obj:$obj$$76$$}, "load_node", !0);
    }, $_is_loaded$:function() {
      return!0;
    }, $_load_node_DS$:function($obj$$78$$, $s_call$$, $e_call$$) {
      var $_this$$13$$ = this;
      this.$_load_node_tree$($obj$$78$$, function() {
        $_this$$13$$.$_emitEvent$({obj:$_this$$13$$.$_getNode$($obj$$78$$)}, "load_node", !0);
        $s_call$$.call(this);
      }, $e_call$$);
    }, $_is_loaded_DS$:function($obj$$79$$) {
      $obj$$79$$ = this.$_getNode$($obj$$79$$);
      return-1 === $obj$$79$$ || !$obj$$79$$ || $obj$$79$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$79$$.children("ul").children("li").length;
    }, $_refresh_DS$:function($obj$$80$$) {
      ($obj$$80$$ = this.$_getNode$($obj$$80$$)) && -1 !== $obj$$80$$ && $obj$$80$$.removeData("oj-tree-children");
      return this.$_refresh_ui$($obj$$80$$);
    }, $_load_node_J$:function($obj$$81$$, $s_call$$1$$, $e_call$$1$$) {
      var $_this$$14$$ = this;
      this.$_load_node_json$($obj$$81$$, function() {
        $_this$$14$$.$_emitEvent$({obj:$_this$$14$$.$_getNode$($obj$$81$$)}, "load_node", !0);
        $s_call$$1$$.call(this);
      }, $e_call$$1$$);
    }, $_is_loaded_J$:function($obj$$82$$) {
      var $s$$15$$ = this.options.data;
      $obj$$82$$ = this.$_getNode$($obj$$82$$);
      return-1 == $obj$$82$$ || !$obj$$82$$ || !$s$$15$$.ajax && !this.$_data$.$ds$.$progressiveRender$ && !$$$$35$$.isFunction($s$$15$$.data) || $obj$$82$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$82$$.children("ul").children("li").length;
    }, $_load_node_H$:function($obj$$83$$, $s_call$$2$$, $e_call$$2$$) {
      var $_this$$15$$ = this;
      this.$_load_node_html$($obj$$83$$, function() {
        $_this$$15$$.$_emitEvent$({obj:$_this$$15$$.$_getNode$($obj$$83$$)}, "load_node", !0);
        $s_call$$2$$.call(this);
      }, $e_call$$2$$);
    }, $_is_loaded_H$:function($obj$$84$$) {
      var $s$$16$$ = this.options.data, $data$$157$$ = null, $ajax$$ = null;
      $s$$16$$ && ($data$$157$$ = $s$$16$$.data || null, $ajax$$ = $s$$16$$.ajax || null);
      $obj$$84$$ = this.$_getNode$($obj$$84$$);
      return-1 == $obj$$84$$ || !$obj$$84$$ || !$ajax$$ && !$$$$35$$.isFunction($data$$157$$) || $obj$$84$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$84$$.children("ul").children("li").size();
    }, reselect:function() {
      var $_this$$16$$ = this, $s$$17$$ = this.$_data$.ui.$to_select$, $s$$17$$ = $$$$35$$.map($$$$35$$.makeArray($s$$17$$), function($n$$30$$) {
        return "#" + $n$$30$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      $$$$35$$.each($s$$17$$, function($i$$408$$, $val$$64$$) {
        $val$$64$$ && "#" !== $val$$64$$ && $_this$$16$$.select($val$$64$$);
      });
      this.$_data$.ui.selected = this.$_data$.ui.selected.filter(function() {
        return this.parentNode;
      });
      this.$_emitEvent$(null, "reselect", !0);
    }, saveSelected:function() {
      var $_this$$17$$ = this;
      this.$_data$.ui.$to_select$ = [];
      this.$_data$.ui.selected.each(function() {
        this.id && $_this$$17$$.$_data$.ui.$to_select$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
      this.$_emitEvent$(this.$_data$.ui.$to_select$, "savedselected", !0);
    }, rollback:function($rb$$1$$) {
      $rb$$1$$ && $$$$35$$.isArray($rb$$1$$);
    }, get_rollback:function() {
      this.$_emitEvent$(null, "get_rollback", !0);
      return{$i$:this.$_getIndex$(), $h$:this.$_$container$.children("ul").clone(!0), $d$:this.data};
    }, $_load_node_tree$:function($obj$$85$$, $s_call$$3$$) {
      var $d$$11_rslt$$6$$ = this.$_JsonDSToJson$($obj$$85$$ && -1 != $obj$$85$$ ? $obj$$85$$[0].id : $obj$$85$$ ? $obj$$85$$ : -1, $obj$$85$$);
      if ($d$$11_rslt$$6$$.success && $d$$11_rslt$$6$$.$js$) {
        var $$u_bTree$$ = !$obj$$85$$ || -1 === $obj$$85$$, $s$$18$$ = this.options.data;
        if ($s$$18$$.data && !$s$$18$$.ajax || $s$$18$$.data && $s$$18$$.ajax && $$u_bTree$$) {
          $$u_bTree$$ && (($d$$11_rslt$$6$$ = this.$_parseJson$($d$$11_rslt$$6$$.$js$, $obj$$85$$)) ? (this.$_$container_ul$.empty().append($d$$11_rslt$$6$$.children()), this.$_cleanNode$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty()), $s_call$$3$$ && $s_call$$3$$.call(this);
        } else {
          if (!$s$$18$$.data && $s$$18$$.ajax || $s$$18$$.data && $s$$18$$.ajax && !$$u_bTree$$) {
            ($d$$11_rslt$$6$$ = this.$_parseJson$($d$$11_rslt$$6$$.$js$, $obj$$85$$)) ? ($$u_bTree$$ ? ($$u_bTree$$ = this.$_$container_ul$, $$u_bTree$$.empty().append($d$$11_rslt$$6$$.children()), $$u_bTree$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u_bTree$$.attr("aria-multiselectable", !0)) : ($obj$$85$$.append($d$$11_rslt$$6$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$85$$.removeData("oj-tree-is-loading")), 
            this.$_cleanNode$($obj$$85$$), $s_call$$3$$ && $s_call$$3$$.call(this)) : $$u_bTree$$ ? this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$3$$ && $s_call$$3$$.call(this)) : ($obj$$85$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$85$$.removeData("oj-tree-is-loading"), $s$$18$$.correct_state && (this.$_correct_state$($obj$$85$$), $s_call$$3$$ && $s_call$$3$$.call(this)));
          }
        }
      }
    }, $_JsonDSToJson$:function($parentKey$$12$$, $node$$103$$) {
      var $arJson$$ = [], $ds$$ = this.$_tds$, $cc$$, $range$$22$$ = {}, $rslt$$7$$ = {success:!1, $js$:null};
      -1 == $parentKey$$12$$ && ($parentKey$$12$$ = null, $range$$22$$.start = 0);
      $cc$$ = $ds$$.$getChildCount$($parentKey$$12$$);
      0 < $cc$$ && ($range$$22$$.count = $cc$$, $ds$$.$fetchChildren$($parentKey$$12$$, $range$$22$$, {success:$$$$35$$.proxy(function($jns$$) {
        for (var $c$$49$$ = $jns$$.$getCount$(), $attr$$18_n$$31_r$$7$$, $i$$409$$ = 0;$i$$409$$ < $c$$49$$;$i$$409$$++) {
          $node$$103$$ = {};
          ($attr$$18_n$$31_r$$7$$ = $jns$$.getData($i$$409$$)) && ($node$$103$$.attr = $attr$$18_n$$31_r$$7$$);
          $node$$103$$.title = $jns$$.$m_nodes$[$i$$409$$].title;
          $attr$$18_n$$31_r$$7$$.$metadata$ && ($node$$103$$.metadata = $jns$$.$m_nodes$[$i$$409$$].metadata);
          var $key$$148$$ = $node$$103$$.attr.id;
          $attr$$18_n$$31_r$$7$$ = $ds$$.$getChildCount$($key$$148$$);
          0 < $attr$$18_n$$31_r$$7$$ && ($attr$$18_n$$31_r$$7$$ = this.$_JsonDSToJson$($key$$148$$, $node$$103$$), $node$$103$$.children = $attr$$18_n$$31_r$$7$$.$js$);
          $arJson$$.push($node$$103$$);
        }
        $rslt$$7$$.success = !0;
        $rslt$$7$$.$js$ = $arJson$$;
      }, this), error:function() {
        $rslt$$7$$.success = !1;
      }}));
      return $rslt$$7$$;
    }, $_refresh_json$:function($obj$$86$$) {
      $obj$$86$$ = this.$_getNode$($obj$$86$$);
      if (!this.$_data$.$core$.locked) {
        var $bTree$$1$$ = !$obj$$86$$ || -1 !== $obj$$86$$ || !$obj$$86$$.length;
        if ($bTree$$1$$ || !$obj$$86$$.hasClass("oj-disabled")) {
          var $s$$19$$ = this.options.data.json;
          !$bTree$$1$$ && this.$_data$.$ds$.$progressiveUnload$ && ($$$$35$$.isFunction($s$$19$$.data) || $s$$19$$.ajax) && $obj$$86$$.removeData("oj-tree-children");
          return this.$_refresh_ui$($obj$$86$$);
        }
      }
    }, $_load_node_json$:function($obj$$87$$, $s_call$$4$$, $e_call$$4$$) {
      function $success_func$$() {
      }
      function $error_func$$() {
      }
      var $d$$12_s$$20$$ = this.$_getOptions$().data, $data$$158$$ = $d$$12_s$$20$$ && $d$$12_s$$20$$.data || null, $ajax$$1$$ = $d$$12_s$$20$$ && $d$$12_s$$20$$.ajax || null;
      !$d$$12_s$$20$$ || $data$$158$$ || $ajax$$1$$ || ($data$$158$$ = $d$$12_s$$20$$);
      if (($obj$$87$$ = this.$_getNode$($obj$$87$$)) && -1 !== $obj$$87$$ && (this.$_data$.$ds$.$progressiveRender$ || this.$_data$.$ds$.$progressiveUnload$) && !$obj$$87$$.is(".oj-expanded, .oj-tree-leaf") && 0 === $obj$$87$$.children("ul").children("li").length && $obj$$87$$.data("oj-tree-children")) {
        if ($d$$12_s$$20$$ = this.$_parseJson$($obj$$87$$.data("oj-tree-children"), $obj$$87$$)) {
          $obj$$87$$.append($d$$12_s$$20$$), this.$_data$.$ds$.$progressiveUnload$ || $obj$$87$$.removeData("oj-tree-children");
        }
        this.$_cleanNode$($obj$$87$$);
        $s_call$$4$$ && $s_call$$4$$.call(this);
      } else {
        if ($obj$$87$$ && -1 !== $obj$$87$$) {
          if ($obj$$87$$.data("oj-tree-is-loading")) {
            return;
          }
          $obj$$87$$.data("oj-tree-is-loading", !0);
        }
        switch(!0) {
          case !$data$$158$$ && !$ajax$$1$$:
            throw "ojTree - neither data nor ajax settings supplied.";;
          case $$$$35$$.isFunction($data$$158$$):
            $data$$158$$.call(this, $obj$$87$$, $$$$35$$.proxy(function($d$$13$$) {
              ($d$$13$$ = this.$_parseJson$($d$$13$$, $obj$$87$$)) ? (-1 !== $obj$$87$$ && $obj$$87$$ ? ($obj$$87$$.append($d$$13$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading")) : this.$_$container_ul$.empty().append($d$$13$$.children()), this.$_cleanNode$($obj$$87$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : (-1 !== $obj$$87$$ && $obj$$87$$ ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading"), 
              this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$87$$)) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty(), $e_call$$4$$ && $e_call$$4$$.call(this));
            }, this));
            break;
          case !!$data$$158$$ && !$ajax$$1$$ || !!$data$$158$$ && !!$ajax$$1$$ && (!$obj$$87$$ || -1 === $obj$$87$$):
            $obj$$87$$ && -1 != $obj$$87$$ || (($d$$12_s$$20$$ = this.$_parseJson$($data$$158$$, $obj$$87$$)) ? (this.$_$container_ul$.empty().append($d$$12_s$$20$$.children()), this.$_cleanNode$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty());
            $s_call$$4$$ && $s_call$$4$$.call(this);
            break;
          case !$data$$158$$ && !!$ajax$$1$$ || !!$data$$158$$ && !!$ajax$$1$$ && $obj$$87$$ && -1 !== $obj$$87$$:
            $error_func$$ = function $$error_func$$$($x$$54$$, $status$$30$$, $e$$108$$) {
              var $ef$$ = this.$_getOptions$().data.ajax.error;
              $ef$$ && $ef$$.call(this, $status$$30$$, $e$$108$$, $x$$54$$);
              -1 != $obj$$87$$ && $obj$$87$$.length ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading"), "success" === $status$$30$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$87$$)) : ("error" == $status$$30$$ || "success" === $status$$30$$ && this.$_data$.$ds$.$correctState$) && this.$_$container_ul$.empty();
              $e_call$$4$$ && $e_call$$4$$.call(this);
            }, $success_func$$ = function $$success_func$$$($d$$14$$, $status$$31_tempd$$, $$u$$1_x$$55$$) {
              var $sf$$ = this.$_getOptions$().data.ajax.success;
              $sf$$ && ($d$$14$$ = $sf$$.call(this, $d$$14$$, $status$$31_tempd$$, $$u$$1_x$$55$$) || $d$$14$$);
              if ("string" == typeof $d$$14$$) {
                $status$$31_tempd$$ = $d$$14$$.replace(/^[\s\n]+$/, "");
                try {
                  $status$$31_tempd$$ = $$$$35$$.parseJSON($status$$31_tempd$$);
                } catch ($err$$19$$) {
                  $status$$31_tempd$$ = null;
                }
                if (!$status$$31_tempd$$) {
                  return $error_func$$.call(this, $$u$$1_x$$55$$, "Bad JSON", "");
                }
              }
              ($d$$14$$ = this.$_parseJson$($d$$14$$, $obj$$87$$)) ? (-1 !== $obj$$87$$ && $obj$$87$$ ? ($obj$$87$$.append($d$$14$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading")) : ($$u$$1_x$$55$$ = this.$_$container_ul$, $$u$$1_x$$55$$.empty().append($d$$14$$.children()), $$u$$1_x$$55$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u$$1_x$$55$$.attr("aria-multiselectable", 
              !0)), this.$_cleanNode$($obj$$87$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : -1 !== $obj$$87$$ && $obj$$87$$ ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$87$$), $s_call$$4$$ && $s_call$$4$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$4$$ && $s_call$$4$$.call(this));
            }, $d$$12_s$$20$$.ajax.context = this, $d$$12_s$$20$$.ajax.error = $error_func$$, $d$$12_s$$20$$.ajax.success = $success_func$$, $d$$12_s$$20$$.dataType || ($d$$12_s$$20$$.ajax.dataType = "json"), $$$$35$$.isFunction($d$$12_s$$20$$.ajax.url) && ($d$$12_s$$20$$.ajax.url = $d$$12_s$$20$$.ajax.url.call(this, $obj$$87$$)), $$$$35$$.isFunction($d$$12_s$$20$$.ajax.data) && ($d$$12_s$$20$$.ajax.data = $d$$12_s$$20$$.ajax.data.call(this, $obj$$87$$)), $$$$35$$.ajax($d$$12_s$$20$$.ajax);
        }
      }
    }, $_parseJson$:function($js$$1$$, $obj$$88_ul2$$, $isRecurse_ul1$$) {
      var $d$$15$$ = !1, $tmp$$5$$, $i$$410$$, $j$$42$$, $title$$11$$;
      if (!$js$$1$$) {
        return $d$$15$$;
      }
      this.$_data$.$ds$.$progressiveUnload$ && $obj$$88_ul2$$ && -1 !== $obj$$88_ul2$$ && $obj$$88_ul2$$.data("oj-tree-children", $d$$15$$);
      if ("string" == typeof $js$$1$$) {
        try {
          $js$$1$$ = $$$$35$$.parseJSON($js$$1$$);
        } catch ($err$$20$$) {
          $js$$1$$ = [];
        }
      }
      if ($$$$35$$.isArray($js$$1$$)) {
        $d$$15$$ = $$$$35$$("\x3cul\x3e");
        if (!$js$$1$$.length) {
          return!1;
        }
        $i$$410$$ = 0;
        for ($j$$42$$ = $js$$1$$.length;$i$$410$$ < $j$$42$$;$i$$410$$++) {
          $tmp$$5$$ = this.$_parseJson$($js$$1$$[$i$$410$$], $obj$$88_ul2$$, !0), $tmp$$5$$.length && ($d$$15$$ = $d$$15$$.append($tmp$$5$$));
        }
        $d$$15$$ = $d$$15$$.children();
      } else {
        "string" == typeof $js$$1$$ && ($js$$1$$ = {data:$js$$1$$});
        $title$$11$$ = "string" == typeof $js$$1$$.title ? $js$$1$$.title : " ";
        $d$$15$$ = $$$$35$$("\x3cli role\x3d'treeitem' /\x3e");
        $js$$1$$.attr && (this.$_data$.types.$defType$ && !$js$$1$$.attr.type && ($js$$1$$.attr.type = "oj-tree-deftype", $d$$15$$.addClass("oj-tree-type")), $d$$15$$.attr($js$$1$$.attr));
        $js$$1$$.metadata && $d$$15$$.data($js$$1$$.metadata);
        ($js$$1$$.state || $js$$1$$.children && 0 === $js$$1$$.children.length) && $d$$15$$.addClass("expanded" === $js$$1$$.state ? "oj-expanded" : "oj-collapsed");
        $js$$1$$.data || ($js$$1$$.data = {dummy:0});
        var $bIns$$ = !1, $sp$$3$$;
        $tmp$$5$$ = $$$$35$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$35$$.each($js$$1$$.data, function($i$$411$$, $m$$24$$) {
          $$$$35$$.isFunction($m$$24$$) && ($m$$24$$ = $m$$24$$.call(this, $js$$1$$));
          "string" != typeof $m$$24$$ && ("attr" == $i$$411$$ ? $tmp$$5$$.attr($m$$24$$) : "style" == $i$$411$$ && $tmp$$5$$.css($m$$24$$), "language" == $i$$411$$ && $tmp$$5$$.addClass($m$$24$$));
          $bIns$$ || ($sp$$3$$ = $$$$35$$("\x3cspan class\x3d'oj-tree-title'\x3e"), $sp$$3$$[0].textContent = $title$$11$$, $tmp$$5$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-node-icon oj-component-icon'\x3e\x26#160;\x3c/ins\x3e", $sp$$3$$), $bIns$$ = !0);
          !$m$$24$$.icon && $js$$1$$.icon && ($m$$24$$.icon = $js$$1$$.icon);
          $m$$24$$.icon && (-1 === $m$$24$$.icon.indexOf("/") ? $tmp$$5$$.children("ins").addClass($m$$24$$.icon) : $tmp$$5$$.children("ins").css("background", "url('" + $m$$24$$.icon + "') center center no-repeat"));
        });
        $d$$15$$.append($tmp$$5$$);
        $d$$15$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default'\x3e\x26#160;\x3c/ins\x3e");
        $js$$1$$.children && (this.$_data$.$ds$.$progressiveRender$ && "expanded" !== $js$$1$$.state ? $d$$15$$.addClass("oj-collapsed").attr("aria-expanded", "false").data("oj-tree-children", $js$$1$$.children) : (this.$_data$.$ds$.$progressiveUnload$ && $d$$15$$.data("oj-tree-children", $js$$1$$.children), $$$$35$$.isArray($js$$1$$.children) && $js$$1$$.children.length && ($tmp$$5$$ = this.$_parseJson$($js$$1$$.children, $obj$$88_ul2$$, !0), $tmp$$5$$.length && ($obj$$88_ul2$$ = $$$$35$$("\x3cul role\x3d'group' /\x3e"), 
        $obj$$88_ul2$$.append($tmp$$5$$), $d$$15$$.append($obj$$88_ul2$$)))));
      }
      $isRecurse_ul1$$ || ($isRecurse_ul1$$ = $$$$35$$("\x3cul /\x3e"), $isRecurse_ul1$$.append($d$$15$$), $d$$15$$ = $isRecurse_ul1$$);
      return $d$$15$$;
    }, $_correct_state$:function($obj$$89$$) {
      $obj$$89$$ = this.$_getNode$($obj$$89$$);
      if (!$obj$$89$$ || -1 === $obj$$89$$) {
        return!1;
      }
      $obj$$89$$.removeClass("oj-collapsed oj-expanded").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
      $obj$$89$$.find("ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").addClass("oj-tree-icon");
      this.$_emitEvent$({obj:$obj$$89$$}, "correct_state", !0);
    }, $_loaded$:function() {
      this.$_emitEvent$(null, "loaded");
    }, $_load_node_html$:function($obj$$90$$, $s_call$$5$$, $e_call$$5$$) {
      function $success_func$$1$$() {
      }
      function $error_func$$1$$() {
      }
      var $d$$16_s$$21$$ = this.$_getOptions$().data, $data$$159$$ = $d$$16_s$$21$$ && $d$$16_s$$21$$.data || null, $ajax$$2$$ = $d$$16_s$$21$$ && $d$$16_s$$21$$.ajax || null;
      if (($obj$$90$$ = this.$_getNode$($obj$$90$$)) && -1 !== $obj$$90$$) {
        if ($obj$$90$$.data("oj-tree-is-loading")) {
          return;
        }
        $obj$$90$$.data("oj-tree-is-loading", !0);
      }
      switch(!0) {
        case !$data$$159$$ && !$ajax$$2$$ && $d$$16_s$$21$$ && "string" === typeof $d$$16_s$$21$$:
          this.$_loadHtmlString$($d$$16_s$$21$$, $obj$$90$$, $s_call$$5$$, $e_call$$5$$);
          break;
        case $$$$35$$.isFunction($data$$159$$):
          $data$$159$$.call(this, $obj$$90$$, $$$$35$$.proxy(function($d$$17$$) {
            this.$_loadHtmlString$($d$$17$$, $obj$$90$$, $s_call$$5$$, $e_call$$5$$);
          }, this));
          break;
        case !$data$$159$$ && !$ajax$$2$$:
          $obj$$90$$ && -1 != $obj$$90$$ || (this.$_$container_ul$.empty().append(this.$_data$.html.$cloneMarkup$).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon' \x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li").children("ins:first-child").addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && this.$_addDefType$(this.$_$container_ul$), this.$_cleanNode$(), 
          this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", -1));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !!$data$$159$$ && !$ajax$$2$$ || !!$data$$159$$ && !!$ajax$$2$$ && (!$obj$$90$$ || -1 === $obj$$90$$):
          $obj$$90$$ && -1 != $obj$$90$$ || ($d$$16_s$$21$$ = $$$$35$$($data$$159$$), $d$$16_s$$21$$.is("ul") || ($d$$16_s$$21$$ = $$$$35$$("\x3cul /\x3e").append($d$$16_s$$21$$)), this.$_$container_ul$.empty().append($d$$16_s$$21$$.children()).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && 
          this.$_addDefType$(this.$_$container_ul$), this.$_cleanNode$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", "-1"));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !$data$$159$$ && !!$ajax$$2$$ || !!$data$$159$$ && !!$ajax$$2$$ && $obj$$90$$ && -1 !== $obj$$90$$:
          $obj$$90$$ = this.$_getNode$($obj$$90$$), $error_func$$1$$ = function $$error_func$$1$$$($x$$56$$, $t$$8$$, $e$$109$$) {
            var $ef$$1$$ = this.$_getOptions$().data.ajax.error;
            $ef$$1$$ && $ef$$1$$.call(this, $x$$56$$, $t$$8$$, $e$$109$$);
            -1 != $obj$$90$$ && $obj$$90$$.length ? ($obj$$90$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$90$$.removeData("oj-tree-is-loading"), "success" === $t$$8$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$90$$)) : "success" === $t$$8$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
            $e_call$$5$$ && $e_call$$5$$.call(this);
          }, $success_func$$1$$ = function $$success_func$$1$$$($d$$18_parent$$41$$, $nodes$$3_t$$9$$, $x$$57$$) {
            var $sf$$1$$ = this.$_getOptions$().data.ajax.success;
            $sf$$1$$ && ($d$$18_parent$$41$$ = $sf$$1$$.call(this, $d$$18_parent$$41$$, $nodes$$3_t$$9$$, $x$$57$$) || $d$$18_parent$$41$$);
            if ("" === $d$$18_parent$$41$$ || $d$$18_parent$$41$$ && $d$$18_parent$$41$$.toString && "" === $d$$18_parent$$41$$.toString().replace(/^[\s\n]+$/, "")) {
              return $error_func$$1$$.call(this, $x$$57$$, $nodes$$3_t$$9$$, "");
            }
            if ($d$$18_parent$$41$$) {
              $d$$18_parent$$41$$ = $$$$35$$($d$$18_parent$$41$$);
              $d$$18_parent$$41$$.is("ul") || ($d$$18_parent$$41$$ = $$$$35$$("\x3cul /\x3e").append($d$$18_parent$$41$$));
              -1 != $obj$$90$$ && $obj$$90$$ ? ($obj$$90$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), this.$_removeEmptyUL$($obj$$90$$), $obj$$90$$.append($d$$18_parent$$41$$).children("ul").find("li, a").filter(function() {
                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
              }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$90$$.removeData("oj-tree-is-loading"), $obj$$90$$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$18_parent$$41$$ = $obj$$90$$) : 
              (this.$_$container_ul$.empty().append($d$$18_parent$$41$$.children()).find("li, a").filter(function() {
                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
              }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$18_parent$$41$$ = this.$_$container_ul$);
              this.$_handleHtmlParentNoChildren$($d$$18_parent$$41$$);
              this.$_insertHtmlTextSpan$($d$$18_parent$$41$$);
              $nodes$$3_t$$9$$ = $d$$18_parent$$41$$.children("UL");
              if (1 <= $nodes$$3_t$$9$$.length) {
                $nodes$$3_t$$9$$ = $nodes$$3_t$$9$$.first().find("span.oj-tree-title");
                var $_this$$18$$ = this;
                $$$$35$$.each($nodes$$3_t$$9$$, function() {
                  this.textContent = $_this$$18$$.$_escapeHtml$(this.textContent);
                });
              }
              this.$_data$.types.$defType$ && $d$$18_parent$$41$$ && this.$_addDefType$(this.$_$container_ul$);
              this.$_cleanNode$($obj$$90$$);
              $s_call$$5$$ && $s_call$$5$$.call(this);
            } else {
              $obj$$90$$ && -1 !== $obj$$90$$ ? ($obj$$90$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$90$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$90$$), $s_call$$5$$ && $s_call$$5$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$5$$ && $s_call$$5$$.call(this)), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem")
              ;
            }
          }, $d$$16_s$$21$$.ajax.context = this, $d$$16_s$$21$$.ajax.error = $error_func$$1$$, $d$$16_s$$21$$.ajax.success = $success_func$$1$$, $d$$16_s$$21$$.ajax.dataType || ($d$$16_s$$21$$.ajax.dataType = "html"), $$$$35$$.isFunction($d$$16_s$$21$$.ajax.url) && ($d$$16_s$$21$$.ajax.url = $d$$16_s$$21$$.ajax.url.call(this, $obj$$90$$)), $$$$35$$.isFunction($d$$16_s$$21$$.ajax.data) && ($d$$16_s$$21$$.ajax.data = $d$$16_s$$21$$.ajax.data.call(this, $obj$$90$$)), $$$$35$$.ajax($d$$16_s$$21$$.ajax);
      }
    }, $_handleHtmlParentNoChildren$:function($lazy$$1_parent$$42$$) {
      $lazy$$1_parent$$42$$ = $lazy$$1_parent$$42$$.find($lazy$$1_parent$$42$$.is("ul") ? "li ul" : "ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      $$$$35$$.each($lazy$$1_parent$$42$$, function() {
        $$$$35$$(this).closest("li").addClass("oj-collapsed");
      });
    }, $_removeEmptyUL$:function($l$$14_parent$$43$$) {
      $l$$14_parent$$43$$ = $l$$14_parent$$43$$.find("ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      0 < $l$$14_parent$$43$$.length && $l$$14_parent$$43$$.remove();
    }, $_loadHtmlString$:function($nodes$$4_parent$$44_s$$22$$, $obj$$91$$, $s_call$$6$$) {
      if ($nodes$$4_parent$$44_s$$22$$ && "" !== $nodes$$4_parent$$44_s$$22$$ && $nodes$$4_parent$$44_s$$22$$.toString && "" !== $nodes$$4_parent$$44_s$$22$$.toString().replace(/^[\s\n]+$/, "")) {
        $nodes$$4_parent$$44_s$$22$$ = $$$$35$$($nodes$$4_parent$$44_s$$22$$);
        $nodes$$4_parent$$44_s$$22$$.is("ul") || ($nodes$$4_parent$$44_s$$22$$ = $$$$35$$("\x3cul /\x3e").append($nodes$$4_parent$$44_s$$22$$));
        -1 != $obj$$91$$ && $obj$$91$$ ? ($obj$$91$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$91$$.append($nodes$$4_parent$$44_s$$22$$).children("ul").find("li, a").filter(function() {
          return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
        }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$91$$.removeData("oj-tree-is-loading"), $nodes$$4_parent$$44_s$$22$$ = $obj$$91$$, this.$_addDefType$(this.$obj$)) : (this.$_$container_ul$.empty().append($nodes$$4_parent$$44_s$$22$$.children()).find("li, a").filter(function() {
          return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
        }).prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $nodes$$4_parent$$44_s$$22$$ = this.$_$container_ul$, 
        this.$_addDefType$(this.$_$container_ul$));
        $nodes$$4_parent$$44_s$$22$$ && this.$_insertHtmlTextSpan$($nodes$$4_parent$$44_s$$22$$);
        $nodes$$4_parent$$44_s$$22$$ = $nodes$$4_parent$$44_s$$22$$.children("UL");
        if (1 <= $nodes$$4_parent$$44_s$$22$$.length) {
          $nodes$$4_parent$$44_s$$22$$ = $nodes$$4_parent$$44_s$$22$$.first().find("span.oj-tree-title");
          var $_this$$19$$ = this;
          $$$$35$$.each($nodes$$4_parent$$44_s$$22$$, function() {
            this.textContent = $_this$$19$$.$_escapeHtml$(this.textContent);
          });
        }
        this.$_cleanNode$($obj$$91$$);
        $s_call$$6$$ && $s_call$$6$$.call(this);
      } else {
        $obj$$91$$ && -1 !== $obj$$91$$ ? ($obj$$91$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$91$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$91$$), $s_call$$6$$ && $s_call$$6$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$6$$ && $s_call$$6$$.call(this));
      }
    }, $_insertHtmlTextSpan$:function($elem$$148$$) {
      $$$$35$$.each($elem$$148$$.find("li a"), function($i$$412$$, $val$$65$$) {
        var $ih$$ = $val$$65$$.innerHTML, $ih$$ = $ih$$.replace("ins\x3e", "ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e");
        $val$$65$$.innerHTML = $ih$$ + "\x3c/span\x3e";
      });
    }, $_addDefType$:function($obj$$92$$) {
      var $s$$23$$, $typeAttr$$1$$;
      this.$_data$.types.$defType$ && ($typeAttr$$1$$ = ($s$$23$$ = this.options.types) ? $s$$23$$.attr : this.$_data$.types.$defaults$.attr, $$$$35$$.each($obj$$92$$.find("li"), function($i$$413$$, $val$$66$$) {
        $val$$66$$ = $$$$35$$($val$$66$$);
        $val$$66$$.attr($typeAttr$$1$$) || $val$$66$$.attr($typeAttr$$1$$, "oj-tree-deftype").addClass("oj-tree-type");
      }));
    }, $_dnd_prepare$:function() {
      var $a$$111_vars$$ = this.$_data$.dnd.$vars$;
      if ($a$$111_vars$$.$r$ && $a$$111_vars$$.$r$.length) {
        this.$_data$.dnd.off = $a$$111_vars$$.$r$.offset();
        this.$_isRtl$ && (this.$_data$.dnd.off.right = this.$_data$.dnd.off.left + $a$$111_vars$$.$r$.width() - $a$$111_vars$$.$r$.find("\x3ea").width() - 14);
        this.$_data$.dnd.$targ_ml_width$ = $a$$111_vars$$.$r$.find("a").width();
        if (this.$_data$.dnd.$foreign$) {
          return $a$$111_vars$$ = this.options.dnd.drag_check.call(this, {o:$a$$111_vars$$.$o$, r:$a$$111_vars$$.$r$}), this.$_data$.dnd.after = $a$$111_vars$$.after, this.$_data$.dnd.before = $a$$111_vars$$.before, this.$_data$.dnd.inside = $a$$111_vars$$.inside, this.$_data$.dnd.$prepared$ = !0, this.$_dnd_show$();
        }
        this.$_prepare_move$($a$$111_vars$$.$o$, $a$$111_vars$$.$r$, "before");
        this.$_data$.dnd.before = this.check_move();
        this.$_prepare_move$($a$$111_vars$$.$o$, $a$$111_vars$$.$r$, "after");
        this.$_data$.dnd.after = this.check_move();
        this.$_is_loaded$($a$$111_vars$$.$r$) ? (this.$_prepare_move$($a$$111_vars$$.$o$, $a$$111_vars$$.$r$, "inside"), this.$_data$.dnd.inside = this.check_move()) : this.$_data$.dnd.inside = !1;
        this.$_data$.dnd.$prepared$ = !0;
        return this.$_dnd_show$();
      }
    }, $_dnd_show$:function() {
      var $dnd_mLeft$$ = this.$_data$.dnd, $isParent$$1_lineTop_o$$18$$ = !1, $mlLeft_pos$$14$$;
      if ($dnd_mLeft$$.$prepared$) {
        var $isParent$$1_lineTop_o$$18$$ = ["before", "inside", "after"], $r$$8$$ = !1, $ctl$$ = $dnd_mLeft$$.$ctl$, $vars$$1$$ = $dnd_mLeft$$.$vars$, $isParent$$1_lineTop_o$$18$$ = $dnd_mLeft$$.$w$ < this.$_data$.$core$.$li_height$ / 3 ? ["before", "inside", "after"] : $dnd_mLeft$$.$w$ <= 2 * this.$_data$.$core$.$li_height$ / 3 ? $dnd_mLeft$$.$w$ < this.$_data$.$core$.$li_height$ / 2 ? ["inside", "before", "after"] : ["inside", "after", "before"] : ["after", "inside", "before"];
        $$$$35$$.each($isParent$$1_lineTop_o$$18$$, $$$$35$$.proxy(function($i$$414$$, $val$$67$$) {
          if (this.$_data$.dnd[$val$$67$$]) {
            return $ctl$$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), this.$_$container$.removeClass("oj-invalid-drop"), $r$$8$$ = $val$$67$$, !1;
          }
        }, this));
        !1 === $r$$8$$ ? ($ctl$$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid"), $vars$$1$$.$r$.addClass("oj-invalid-drop")) : $vars$$1$$.$r$.removeClass("oj-invalid-drop").addClass("oj-valid-drop");
        $mlLeft_pos$$14$$ = this.$_isRtl$ ? this.$_data$.dnd.off.right - 18 : this.$_data$.dnd.off.left + 5;
        $isParent$$1_lineTop_o$$18$$ = !this.isLeaf($vars$$1$$.$r$);
        $dnd_mLeft$$ = this.$_isRtl$ ? $mlLeft_pos$$14$$ + this.$_data$.dnd.$targ_ml_width$ + 18 : $mlLeft_pos$$14$$;
        $mlLeft_pos$$14$$ = this.$_isRtl$ ? $dnd_mLeft$$ - this.$_data$.dnd.$ml_width$ : $mlLeft_pos$$14$$ + 8;
        switch($r$$8$$) {
          case "before":
            $isParent$$1_lineTop_o$$18$$ = this.$_data$.dnd.off.top - 3;
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + "px", top:$isParent$$1_lineTop_o$$18$$ - 7 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$mlLeft_pos$$14$$ + "px", top:$isParent$$1_lineTop_o$$18$$ + "px"}).show();
            break;
          case "after":
            $isParent$$1_lineTop_o$$18$$ = this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ - 3;
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + "px", top:$isParent$$1_lineTop_o$$18$$ - 2 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$mlLeft_pos$$14$$ + "px", top:$isParent$$1_lineTop_o$$18$$ + 6 + "px"}).show();
            break;
          case "inside":
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + (this.$_isRtl$ ? $isParent$$1_lineTop_o$$18$$ ? -4 : 0 : 4) + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ / 2 - 8 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
            break;
          default:
            $vars$$1$$.$m$.hide(), $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
        }
        return $vars$$1$$.$last_pos$ = $r$$8$$;
      }
    }, $_dnd_enter$:function($obj$$93_openTimeout_s$$24$$) {
      var $dnd$$1$$ = this.$_data$.dnd, $vars$$2$$ = $dnd$$1$$.$vars$;
      $dnd$$1$$.$mto$ && (clearTimeout($dnd$$1$$.$mto$), $dnd$$1$$.$mto$ = !1);
      $dnd$$1$$.$prepared$ = !1;
      $vars$$2$$.$r$ = this.$_getNode$($obj$$93_openTimeout_s$$24$$);
      $obj$$93_openTimeout_s$$24$$ = this.options.dnd;
      var $checkTimeout$$ = $obj$$93_openTimeout_s$$24$$.check_timeout;
      $checkTimeout$$ ? ($dnd$$1$$.$to1$ && clearTimeout($dnd$$1$$.$to1$), $dnd$$1$$.$to1$ = setTimeout($$$$35$$.proxy(this.$_dnd_prepare$, this), $checkTimeout$$)) : this.$_dnd_prepare$();
      ($obj$$93_openTimeout_s$$24$$ = $obj$$93_openTimeout_s$$24$$.open_timeout) ? ($dnd$$1$$.$to2$ && clearTimeout($dnd$$1$$.$to2$), $vars$$2$$.$r$ && $vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-collapsed") && ($dnd$$1$$.$to2$ = setTimeout($$$$35$$.proxy(this.$_dnd_open$, this), $obj$$93_openTimeout_s$$24$$))) : $vars$$2$$.$r$ && $vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-collapsed") && this.$_dnd_open$();
    }, $_dnd_leave$:function($e$$110$$) {
      var $dnd$$2$$ = this.$_data$.dnd, $vars$$3$$ = this.$_data$.dnd.$vars$;
      $dnd$$2$$.after = !1;
      $dnd$$2$$.before = !1;
      $dnd$$2$$.inside = !1;
      this.$_data$.dnd.$ctl$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid");
      this.$_$container$.addClass("oj-invalid-drop");
      $vars$$3$$.$o$ && $vars$$3$$.$o$.removeClass("oj-valid-drop").removeClass("oj-invalid-drop");
      $vars$$3$$.$r$ && $vars$$3$$.$r$.removeClass("oj-valid-drop").removeClass("oj-invalid-drop");
      $vars$$3$$.$m$.hide();
      $vars$$3$$.$ml$ && $vars$$3$$.$ml$.hide();
      $vars$$3$$.$r$ && $vars$$3$$.$r$[0] === $e$$110$$.target.parentNode && ($dnd$$2$$.$to1$ && (clearTimeout($dnd$$2$$.$to1$), $dnd$$2$$.$to1$ = !1), $dnd$$2$$.$to2$ && (clearTimeout($dnd$$2$$.$to2$), $dnd$$2$$.$to2$ = !1));
    }, $_dnd_open$:function() {
      var $vars$$4$$ = this.$_data$.dnd.$vars$;
      this.$_data$.dnd.$to2$ = !1;
      this.expand($vars$$4$$.$r$, $$$$35$$.proxy(this.$_dnd_prepare$, this), !0);
    }, $_dnd_finish$:function($e$$111$$) {
      var $dnd$$3$$ = this.$_data$.dnd, $vars$$5$$ = this.$_data$.dnd.$vars$;
      $dnd$$3$$.$foreign$ ? ($dnd$$3$$.after || $dnd$$3$$.before || $dnd$$3$$.inside) && this.options.dnd.drag_finish.call(this, {o:$vars$$5$$.$o$, r:$vars$$5$$.$r$, p:$vars$$5$$.$last_pos$}) : (this.$_dnd_prepare$(), this.$_moveNode$($vars$$5$$.$o$, $vars$$5$$.$r$, $vars$$5$$.$last_pos$, $e$$111$$[this.options.dnd.copy_modifier + "Key"]));
      $vars$$5$$.$o$ && $vars$$5$$.$o$.removeClass("oj-drag").removeClass("oj-invalid-drop").removeClass("oj-valid-drop");
      $vars$$5$$.$o$ = !1;
      $vars$$5$$.$r$ = !1;
      $vars$$5$$.$m$.hide();
      $vars$$5$$.$ml$ && $vars$$5$$.$ml$.hide();
    }, $_start_drag$:function($obj$$94$$, $e$$112$$) {
      var $dnd$$4$$ = this.$_data$.dnd, $vars$$6$$ = this.$_data$.dnd.$vars$;
      $vars$$6$$.$o$ = this.$_getNode$($obj$$94$$);
      if (!$vars$$6$$.$o$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        this.$_data$.ui && this.isSelected($vars$$6$$.$o$) && ($vars$$6$$.$o$ = this.$_getNode$(null, !0));
        var $dt$$ = 1 < $vars$$6$$.$o$.length ? this.$_getString$("labelMultiSelection") : this.getText($vars$$6$$.$o$), $cnt$$ = this.$_$container$, $dt$$ = $dt$$.replace(/</ig, "\x26lt;").replace(/>/ig, "\x26gt;");
        $vars$$6$$.$o$.addClass("oj-drag");
        this.$_drag_start$($e$$112$$, {$jstree$:!0, $obj$:$vars$$6$$.$o$}, "\x3cspan\x3e" + $dt$$ + "\x3c/span\x3e");
        this.$_data$.$themes$ && ($vars$$6$$.$m$ && $vars$$6$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $dnd$$4$$.$ctl$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
        $dnd$$4$$.$cof$ = $cnt$$.offset();
        $dnd$$4$$.$cw$ = parseInt($cnt$$.width(), 10);
        $dnd$$4$$.ch = parseInt($cnt$$.height(), 10);
        $dnd$$4$$.$active$ = !0;
      }
    }, $_drag_start$:function($e$$113$$, $data$$160$$, $html$$2$$) {
      var $ctl$$1$$ = this.$_data$.dnd.$ctl$;
      $ctl$$1$$.$is_drag$ && this.$_drag_stop$();
      try {
        $e$$113$$.currentTarget.unselectable = "on", $e$$113$$.currentTarget.onselectstart = function $$e$$113$$$currentTarget$onselectstart$() {
          return!1;
        }, $e$$113$$.currentTarget.style && ($e$$113$$.currentTarget.style.MozUserSelect = "none");
      } catch ($err$$21$$) {
      }
      $ctl$$1$$.$init_x$ = $e$$113$$.pageX;
      $ctl$$1$$.$init_y$ = $e$$113$$.pageY;
      $ctl$$1$$.$user_data$ = $data$$160$$;
      $ctl$$1$$.$is_down$ = !0;
      $ctl$$1$$.helper = $$$$35$$("\x3cdiv class\x3d'oj-tree-title oj-drag' style\x3d'top:-2000px' /\x3e").html($html$$2$$);
      $$$$35$$(document).bind("mousemove", this.$_drag$.bind(this));
      $$$$35$$(document).bind("mouseup", this.$_drag_stop$.bind(this));
      return!1;
    }, $_drag$:function($e$$114$$) {
      var $ctl$$2$$ = this.$_data$.dnd.$ctl$, $$title_vars$$7$$ = this.$_data$.dnd.$vars$;
      if ($ctl$$2$$.$is_down$) {
        if (!$ctl$$2$$.$is_drag$) {
          if (5 < Math.abs($e$$114$$.pageX - $ctl$$2$$.$init_x$) || 5 < Math.abs($e$$114$$.pageY - $ctl$$2$$.$init_y$)) {
            $ctl$$2$$.helper.appendTo("body"), $ctl$$2$$.$is_drag$ = !0, $$$$35$$(document).triggerHandler("drag_start.ojtreeu", [{event:$e$$114$$, data:$ctl$$2$$.$user_data$}]);
          } else {
            return;
          }
        }
        if ("mousemove" === $e$$114$$.type) {
          var $d$$19_l$$15$$ = $$$$35$$(document), $horizDisp_t$$10$$ = $d$$19_l$$15$$.scrollTop(), $d$$19_l$$15$$ = $d$$19_l$$15$$.scrollLeft();
          20 > $e$$114$$.pageY - $horizDisp_t$$10$$ ? ($$title_vars$$7$$.$sti$ && "down" === $$title_vars$$7$$.$dir1$ && (clearInterval($$title_vars$$7$$.$sti$), $$title_vars$$7$$.$sti$ = void 0), $$title_vars$$7$$.$sti$ || ($$title_vars$$7$$.$dir1$ = "up", $$title_vars$$7$$.$sti$ = setInterval(function() {
            $$$$35$$(document).scrollTop($$$$35$$(document).scrollTop() - $ctl$$2$$.$scroll_spd$);
          }, 150))) : $$title_vars$$7$$.$sti$ && "up" === $$title_vars$$7$$.$dir1$ && (clearInterval($$title_vars$$7$$.$sti$), $$title_vars$$7$$.$sti$ = void 0);
          20 > $$$$35$$(window).height() - ($e$$114$$.pageY - $horizDisp_t$$10$$) ? ($$title_vars$$7$$.$sti$ && "up" === $$title_vars$$7$$.$dir1$ && (clearInterval($$title_vars$$7$$.$sti$), $$title_vars$$7$$.$sti$ = void 0), $$title_vars$$7$$.$sti$ || ($$title_vars$$7$$.$dir1$ = "down", $$title_vars$$7$$.$sti$ = setInterval(function() {
            $$$$35$$(document).scrollTop(Number($$$$35$$(document).scrollTop()) + $ctl$$2$$.$scroll_spd$);
          }, 150))) : $$title_vars$$7$$.$sti$ && "down" === $$title_vars$$7$$.$dir1$ && (clearInterval($$title_vars$$7$$.$sti$), $$title_vars$$7$$.$sti$ = void 0);
          20 > $e$$114$$.pageX - $d$$19_l$$15$$ ? ($$title_vars$$7$$.$sli$ && "right" === $$title_vars$$7$$.$dir2$ && (clearInterval($$title_vars$$7$$.$sli$), $$title_vars$$7$$.$sli$ = void 0), $$title_vars$$7$$.$sli$ || ($$title_vars$$7$$.$dir2$ = "left", $$title_vars$$7$$.$sli$ = setInterval(function() {
            $$$$35$$(document).scrollLeft($$$$35$$(document).scrollLeft() - $ctl$$2$$.$scroll_spd$);
          }, 150))) : $$title_vars$$7$$.$sli$ && "left" === $$title_vars$$7$$.$dir2$ && (clearInterval($$title_vars$$7$$.$sli$), $$title_vars$$7$$.$sli$ = void 0);
          20 > $$$$35$$(window).width() - ($e$$114$$.pageX - $d$$19_l$$15$$) ? ($$title_vars$$7$$.$sli$ && "left" === $$title_vars$$7$$.$dir2$ && (clearInterval($$title_vars$$7$$.$sli$), $$title_vars$$7$$.$sli$ = void 0), $$title_vars$$7$$.$sli$ || ($$title_vars$$7$$.$dir2$ = "right", $$title_vars$$7$$.$sli$ = setInterval(function() {
            $$$$35$$(document).scrollLeft(Number($$$$35$$(document).scrollLeft()) + $ctl$$2$$.$scroll_spd$);
          }, 150))) : $$title_vars$$7$$.$sli$ && "right" === $$title_vars$$7$$.$dir2$ && (clearInterval($$title_vars$$7$$.$sli$), $$title_vars$$7$$.$sli$ = void 0);
        }
        $horizDisp_t$$10$$ = $ctl$$2$$.$helper_horiz$;
        this.$_isRtl$ && $$title_vars$$7$$.$o$ && ($$title_vars$$7$$ = $$title_vars$$7$$.$o$.find("span.oj-tree-title:first")) && 0 < $$title_vars$$7$$.length && ($horizDisp_t$$10$$ = -$horizDisp_t$$10$$ - $$title_vars$$7$$[0].offsetWidth);
        $ctl$$2$$.helper.css({left:$e$$114$$.pageX + $horizDisp_t$$10$$ + "px", top:$e$$114$$.pageY + $ctl$$2$$.$helper_top$ + "px"});
        $$$$35$$(document).triggerHandler("drag.ojtreeu", [{event:$e$$114$$, data:$ctl$$2$$.$user_data$}]);
      }
    }, $_drag_stop$:function($e$$115$$) {
      var $vars$$8$$ = this.$_data$.dnd.$vars$, $ctl$$3$$ = this.$_data$.dnd.$ctl$;
      $vars$$8$$.$sli$ && clearInterval($vars$$8$$.$sli$);
      $vars$$8$$.$sti$ && clearInterval($vars$$8$$.$sti$);
      $vars$$8$$.$o$ && $vars$$8$$.$o$.removeClass("oj-drag").removeClass("oj-invalid-drop").removeClass("oj-valid-drop");
      $$$$35$$(document).unbind("mousemove", this.$_drag$.bind(this));
      $$$$35$$(document).unbind("mouseup", this.$_drag_stop$.bind(this));
      $$$$35$$(document).triggerHandler("drag_stop.ojtreeu", [{event:$e$$115$$ ? $e$$115$$ : {}, data:$ctl$$3$$.$user_data$}]);
      $ctl$$3$$.helper.remove();
      $ctl$$3$$.$init_x$ = 0;
      $ctl$$3$$.$init_y$ = 0;
      $ctl$$3$$.$user_data$ = {};
      $ctl$$3$$.$is_down$ = !1;
      $ctl$$3$$.$is_drag$ = !1;
      this.$_$container$.removeClass("oj-invalid-drop");
    }, $_save_opened$:function() {
      var $_this$$20$$ = this;
      this.$_data$.$core$.$toExpand$ = [];
      this.$_$container_ul$.find("li.oj-expanded").each(function() {
        this.id && $_this$$20$$.$_data$.$core$.$toExpand$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
    }, $_reload_nodes$:function($bIsCallback$$) {
      var $_this$$21$$ = this, $bDone$$ = !0, $current$$24$$ = [], $remaining$$1$$ = [], $n$$32$$, $id$$45$$;
      $bIsCallback$$ || (this.$_data$.$core$.$reopen$ = !1, this.$_data$.$core$.$refreshing$ = !0);
      this.$_isOptExpandAll$() && (this.$_data$.$core$.$toExpand$ = [], this.$_$container_ul$.find("li.oj-collapsed").each(function() {
        $id$$45$$ = "#" + $$$$35$$(this).attr("id");
        $_this$$21$$.isExpanded($id$$45$$) || $_this$$21$$.$_data$.$core$.$toExpand$.push($id$$45$$);
      }));
      this.$_data$.$core$.$toExpand$ = $$$$35$$.map($$$$35$$.makeArray(this.$_data$.$core$.$toExpand$), function($n$$33$$) {
        return "#" + $n$$33$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      this.$_data$.$core$.$toLoad$ = $$$$35$$.map($$$$35$$.makeArray(this.$_data$.$core$.$toLoad$), function($n$$34$$) {
        return "#" + $n$$34$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      this.$_data$.$core$.$toExpand$.length && (this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.concat(this.$_data$.$core$.$toExpand$), this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.reduce(function($a$$112$$, $b$$70$$) {
        0 > $a$$112$$.indexOf($b$$70$$) && $a$$112$$.push($b$$70$$);
        return $a$$112$$;
      }, []));
      this.$_data$.$core$.$toLoad$.length && ($$$$35$$.each(this.$_data$.$core$.$toLoad$, function($i$$415$$, $val$$68$$) {
        if ("#" == $val$$68$$) {
          return!0;
        }
        $n$$32$$ = $_this$$21$$.$_$container$.find($val$$68$$);
        $n$$32$$.length ? $_this$$21$$.isExpanded($val$$68$$) || $current$$24$$.push($val$$68$$) : $remaining$$1$$.push($val$$68$$);
      }), $current$$24$$.length && (this.$_data$.$core$.$toLoad$ = $remaining$$1$$, $$$$35$$.each($current$$24$$, function($i$$416$$, $val$$69$$) {
        $_this$$21$$.$_is_loaded$($val$$69$$) || ($_this$$21$$.$_load_node$($val$$69$$, function() {
          $_this$$21$$.$_reload_nodes$(!0);
        }, function() {
          $_this$$21$$.$_reload_nodes$(!0);
        }), $bDone$$ = !1);
      })));
      this.$_data$.$core$.$toExpand$.length && $$$$35$$.each(this.$_data$.$core$.$toExpand$, function($i$$417$$, $val$$70$$) {
        $_this$$21$$.isExpanded($val$$70$$) || $_this$$21$$.$_expand$($val$$70$$, !1, !0);
      });
      $bDone$$ && (this.$_data$.$core$.$reopen$ && clearTimeout(this.$_data$.$core$.$reopen$), this.$_data$.$core$.$reopen$ = setTimeout(function() {
        $_this$$21$$.$_emitEvent$({}, "reload_nodes", !0);
      }, 50), this.$_data$.$core$.$refreshing$ = !1, this.$_reopen$());
    }, setTheme:function($theme_name$$, $theme_url$$) {
      if (!$theme_name$$) {
        return!1;
      }
      $theme_url$$ || ($theme_url$$ = this.$_data$.$themes$.$_themes$ + $theme_name$$ + "/style.css");
      -1 == $$$$35$$.inArray($theme_url$$, this.$_data$.$themes$.$themes_loaded$) && ($_addSheet$$({url:$theme_url$$}), this.$_data$.$themes$.$themes_loaded$.push($theme_url$$));
      this.$_data$.$themes$.$theme$ != $theme_name$$ && (this.$_$container$.removeClass("oj-tree-" + this.$_data$.$themes$.$theme$), this.$_data$.$themes$.$theme$ = $theme_name$$);
      this.$_$container$.addClass("oj-tree-" + $theme_name$$);
      this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
      this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
    }, isIcons:function() {
      return this.$_data$.$themes$.icons;
    }, $_showIcons$:function() {
      this.$_data$.$themes$.icons = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-icons");
    }, $_hideIcons$:function() {
      this.$_data$.$themes$.icons = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-icons");
    }, toggleIcons:function() {
    }, $_enableKeys$:function() {
      this.$_data$.keys.$enabled$ = !0;
    }, $_initTree$:function() {
      this.$_initData$();
      this.$_initCoreOpts$();
      this.$_initDSOpts$(!0);
      this.$_initTypeOpts$();
      this.$_initDnDOpts$();
      this.$_initCore$();
      this.$_initUI$();
      this.$_initThemes$();
      this.$_initDataSource$();
      this.$_initTypes$();
      this.$_initDnD$();
      this.$_initMenu$();
    }, $_emitEvent$:function($data$$161$$, $evname$$, $bInternal$$) {
      if ($evname$$ && "string" === $$$$35$$.type($evname$$) && (!0 !== this.$_data$.$core$.locked || "unlock" === $evname$$ || "isLocked" === $evname$$ || "lock" === $evname$$)) {
        var $func$$9_inst$$, $args$$19_bContinue$$ = Array.prototype.slice.call(arguments);
        $func$$9_inst$$ = this.$_$container$;
        var $isBefore$$ = "before" === $evname$$, $isPublic$$ = $bInternal$$ ? !1 : !0;
        $isPublic$$ || ($evname$$ = "_tree" + $evname$$);
        var $eventdata$$ = {};
        $eventdata$$.item = $data$$161$$ ? $data$$161$$.obj : void 0;
        $eventdata$$.inst = $func$$9_inst$$;
        $isBefore$$ ? ($func$$9_inst$$ = $data$$161$$.func, $eventdata$$.func = $func$$9_inst$$, $eventdata$$.args = $args$$19_bContinue$$, "rename" === $func$$9_inst$$ && ($eventdata$$.title = $data$$161$$.title, $eventdata$$.prevTitle = $data$$161$$.prevTitle)) : $isPublic$$ && ("move" == $evname$$ ? ($eventdata$$.position = $data$$161$$.$p$, $eventdata$$.reference = $data$$161$$.$r$, $eventdata$$.data = $data$$161$$) : "rename" == $evname$$ ? ($eventdata$$.title = $data$$161$$.title, $eventdata$$.prevTitle = 
        $data$$161$$.prevTitle) : "remove" == $evname$$ ? ($eventdata$$.parent = $data$$161$$.parent, $eventdata$$.prev = $data$$161$$.prev) : "delete" == $evname$$ ? ($eventdata$$.prev = $data$$161$$.prev, $eventdata$$.parent = $data$$161$$.parent) : "expandAll" === $evname$$ || "collapseAll" === $evname$$ || "deselectAll" === $evname$$ ? $eventdata$$.targ = $data$$161$$.targ : "loaded" === $evname$$ && ($eventdata$$.item = -1));
        if ($isPublic$$) {
          if ($args$$19_bContinue$$ = this._trigger($evname$$, new $$$$35$$.Event("oj" + $evname$$), $eventdata$$), $isBefore$$) {
            return "undefined" != typeof $args$$19_bContinue$$ && ($args$$19_bContinue$$ = $args$$19_bContinue$$ ? !0 : !1), $args$$19_bContinue$$;
          }
        } else {
          this.$_$container$.trigger($evname$$, $eventdata$$);
        }
      }
    }, $_fireOptionChangeEvent$:function($key$$149$$, $prevVal$$, $newVal$$3$$, $origEvent$$) {
      "selection" === $key$$149$$ && (null == $newVal$$3$$ && ($newVal$$3$$ = this.$_getSelected$()), this.$_compareSelectionValues$($prevVal$$, $newVal$$3$$) || this.option($key$$149$$, $newVal$$3$$, {_context:{originalEvent:$origEvent$$, $internalSet$:!0}, changed:!0}));
    }, $__rollback$:function() {
      return this.get_rollback();
    }, $_start$:function() {
      this.$_isRtl$ && this.$_$container$.addClass("oj-tree-rtl").css("direction", "rtl");
      this.$_$container$.html("\x3cul role\x3d'tree' tabindex\x3d'0' class\x3d'oj-tree-list' style\x3d'outline:none'" + (-1 === this.$_data$.$core$.$selectMode$ ? " aria-multiselectable\x3d'true'" : "") + "\x3e\x3cli class\x3d'oj-tree-last oj-tree-leaf'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e\x3ca class\x3d'oj-tree-loading' href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e" + this.$_getString$("stateLoading") + "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e");
      this.$_$container_ul$ = this.$_$container$.children("ul:eq(0)");
      this.$_$container$.data("oj-tree-instance-id", this.$_getIndex$());
      this.$_data$.$core$.$li_height$ = this.$_$container_ul$.find("li.oj-collapsed, li.oj-tree-leaf").eq(0).height() || 18;
      this.$_isTouch$ && this.$_$container$.delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "touchend.ojtree", $$$$35$$.proxy(function($event$$482_trgt$$) {
        $event$$482_trgt$$.preventDefault();
        $event$$482_trgt$$ = $$$$35$$($event$$482_trgt$$.target);
        this.toggleExpand($event$$482_trgt$$);
      }, this));
      this.$_$container$.delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "click.ojtree", $$$$35$$.proxy(function($event$$483_trgt$$1$$) {
        $event$$483_trgt$$1$$ = $$$$35$$($event$$483_trgt$$1$$.target);
        this.toggleExpand($event$$483_trgt$$1$$);
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mousedown", $$$$35$$.proxy(function($event$$484$$) {
        this.$_data$.ui.$disclosureClick$ = !0;
        $$$$35$$($event$$484$$.target).removeClass("oj-default").removeClass("oj-hover").addClass("oj-selected");
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mouseup", $$$$35$$.proxy(function($event$$485$$) {
        $$$$35$$($event$$485$$.target).removeClass("oj-selected").addClass("oj-default");
      }, this)).bind("mousedown.ojtree", $$$$35$$.proxy(function() {
        this.$_setFocus$();
      }, this)).bind("dblclick.ojtree", function() {
        var $sel$$3$$;
        if (document.selection && document.selection.empty) {
          document.selection.empty();
        } else {
          if (window.getSelection) {
            $sel$$3$$ = window.getSelection();
            try {
              $sel$$3$$.removeAllRanges(), $sel$$3$$.collapse(document.getElementsByTagName("body")[0], 0);
            } catch ($err$$22$$) {
            }
          }
        }
      });
      this.$_$container_ul$.focus($$$$35$$.proxy(function() {
        if (this.$_data$.ui.$disclosureClick$) {
          this.$_data$.ui.$disclosureClick$ = !1;
        } else {
          this.$_data$.ui.$focused$ = !0;
          var $n$$35$$;
          this.$_data$.ui.$lastHovered$ ? (this.$_data$.ui.$hovered$ = this.$_data$.ui.$lastHovered$, $n$$35$$ = this.$_data$.ui.$hovered$) : this.$_data$.ui.$lastSelected$ && 0 < this.$_data$.ui.$lastSelected$.length ? (this.$_data$.ui.$hovered$ = this.$_data$.ui.$lastSelected$, $n$$35$$ = this.$_data$.ui.$hovered$) : $n$$35$$ = this.$_$container_ul$.find("li:first");
          $n$$35$$ && (this.hover($n$$35$$), this.$_data$.ui.$lastHovered$ = null, this.$_$container_ul$.find("a.oj-selected").removeClass("oj-tree-inactive"));
        }
      }, this)).blur($$$$35$$.proxy(function() {
        this.$_data$.ui.$focused$ = !1;
        this.$_data$.ui.$lastHovered$ = this.$_data$.ui.$hovered$;
        this.$_data$.ui.$lastHovered$ && this.dehover(this.$_data$.ui.$hovered$);
        this.$_$container_ul$.find("a.oj-selected").addClass("oj-tree-inactive");
      }, this));
      this.$_emitEvent$({}, "init", !0);
      this.$_loadNodes$();
      this.$_data$.menu.$usermenu$ && this.$_applyMenu$();
      $_addKeyFilter$$({$_handler$:this.$_keyHandler$, $_selector$:this.$_$container_ul$, $_this$:this});
      this.$_enableKeys$();
    }, $_initCore$:function() {
      this.$_data$.$core$.locked = !1;
      this.$_$container$.addClass("oj-tree oj-tree-" + this.$_getIndex$());
      this.$_$container$.css("outline", "none");
      this.$_$container$.css("MozUserSelect", "none");
      this.$_$container$.css("WebkitTouchCallout", "none");
      this.$_$container$.css("WebkitUserSelect", "none");
      this.$_$container$.css("WebkitTapHighlightColor", "rgba(0,0,0,0)");
    }, $_initUI$:function() {
      this.$_data$.ui.selected = $$$$35$$();
      this.$_data$.ui.$lastSelected$ = !1;
      this.$_data$.ui.$hovered$ = null;
      var $a$$113$$ = this.options.selection;
      $a$$113$$ && "array" === $$$$35$$.type($a$$113$$) && 0 < $a$$113$$.length && (this.$_data$.ui.$to_select$ = $a$$113$$, this.options.selection = []);
      this.$_isTouch$ && this.$_$container$.delegate(".oj-tree-list a", "touchend.ojtree", $$$$35$$.proxy(function($event$$487$$) {
        this.$_data$.ui.$touchEvent$ = !0;
        this.$_handleNodeTapClick$($event$$487$$);
        $$$$35$$($event$$487$$.currentTarget).hasClass("oj-tree-loading") || this.dehover();
      }, this));
      this.$_$container$.delegate(".oj-tree-list a", "click.ojtree", $$$$35$$.proxy(function($event$$488$$) {
        this.$_data$.ui.$touchEvent$ = !1;
        this.$_handleNodeTapClick$($event$$488$$);
      }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$35$$.proxy(function($event$$489$$) {
        $$$$35$$($event$$489$$.currentTarget).hasClass("oj-tree-loading") || this.hover($event$$489$$.target);
      }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$35$$.proxy(function($event$$490$$) {
        $$$$35$$($event$$490$$.currentTarget).hasClass("oj-tree-loading") || this.dehover($event$$490$$.target);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseenter.ojtree", $$$$35$$.proxy(function($event$$491$$) {
        $$$$35$$($event$$491$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$491$$.target, !0);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseleave.ojtree", $$$$35$$.proxy(function($event$$492$$) {
        $$$$35$$($event$$492$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$492$$.target, !1);
      }, this)).bind("_treereopen", $$$$35$$.proxy(function() {
        this.reselect();
      }, this)).bind("_treeget_rollback", $$$$35$$.proxy(function() {
        this.dehover();
        this.saveSelected();
      }, this)).bind("ojcollapse", $$$$35$$.proxy(function($event$$493$$, $ui$$33$$) {
        var $obj$$95$$ = this.$_getNode$($ui$$33$$.item), $clk$$ = $obj$$95$$ && $obj$$95$$.length ? $obj$$95$$.children("ul").find("a.oj-selected") : $$$$35$$();
        !1 !== this.options.selectedParentCollapse && $clk$$.length && $clk$$.each(function() {
          this.deselect(this);
          "selectParent" === this.options.selectedParentCollapse && this.select($obj$$95$$);
        });
      }, this)).bind("ojremove", $$$$35$$.proxy(function($event$$494$$, $ui$$34$$) {
        var $s$$25$$ = this.options.selectPrevOnDelete, $clk$$1_obj$$96$$ = this.$_getNode$($ui$$34$$.item), $clk$$1_obj$$96$$ = $clk$$1_obj$$96$$ && $clk$$1_obj$$96$$.length ? $clk$$1_obj$$96$$.find("a.oj-selected") : [], $_this$$23$$ = this, $n$$36$$;
        $clk$$1_obj$$96$$.each(function() {
          $_this$$23$$.deselect(this);
          $_this$$23$$.$_data$.ui.$lastHovered$ && ($n$$36$$ = $_this$$23$$.$_getNode$(this)) && $_this$$23$$.$_data$.ui.$lastHovered$.attr("id") == $n$$36$$.attr("id") && ($_this$$23$$.$_data$.ui.$lastHovered$ = null);
        });
        $s$$25$$ && $clk$$1_obj$$96$$.length && $ui$$34$$.prev && $ui$$34$$.prev.each(function() {
          if (this.parentNode) {
            return $_this$$23$$.select(this), !1;
          }
        });
      }, this)).bind("ojmove", $$$$35$$.proxy(function($event$$495$$, $ui$$35$$) {
        var $data$$162$$ = $ui$$35$$.data, $copy$$1_p$$13$$ = $data$$162$$.$cy$;
        $copy$$1_p$$13$$ && $data$$162$$.$oc$ && ($data$$162$$.$oc$.find("a.oj-selected").removeClass("oj-selected"), $data$$162$$.$oc$.removeAttr("aria-selected"));
        $data$$162$$.$ot$ === $data$$162$$.$rt$ || $copy$$1_p$$13$$ || ($copy$$1_p$$13$$ = $data$$162$$.$ot$.$_data$.ui, $copy$$1_p$$13$$.$lastHovered$ && ($data$$162$$.$o$.attr("id") == $copy$$1_p$$13$$.$lastHovered$.attr("id") && ($copy$$1_p$$13$$.$lastHovered$ = null), $copy$$1_p$$13$$.$lastSelected$ && $data$$162$$.$o$.attr("id") == $copy$$1_p$$13$$.$lastSelected$.attr("id") && ($copy$$1_p$$13$$.$lastSelected$ = null)));
      }, this));
    }, $_initDataSource$:function() {
      this.$_initTreeData$();
      this.$_initJsonData$();
      this.$_initHtmlData$();
    }, $_initTreeData$:function() {
      1 === this.$_data$.$ds$.type && (this.$_tds$ = this.options.data || null, this.$_load_node$ = this.$_load_node_DS$, this.$_is_loaded$ = this.$_is_loaded_DS$, this.$_refresh$ = this.$_refresh_DS$);
    }, $_initJsonData$:function() {
      3 === this.$_data$.$ds$.type && (this.$_data$.$ds$.$progressiveUnload$ && this.$_$container$.bind("_treeafter_close", function($e$$118$$, $ui$$36$$) {
        $ui$$36$$.item.children("ul").remove();
      }), this.$_load_node$ = this.$_load_node_J$, this.$_is_loaded$ = this.$_is_loaded_J$, this.$_refresh$ = this.$_refresh_json$);
    }, $_initHtmlData$:function() {
      4 === this.$_data$.$ds$.type && (this.$_processExistingMarkup$(), this.$_load_node$ = this.$_load_node_H$, this.$_is_loaded$ = this.$_is_loaded_H$, this.$_refresh$ = this.$_refresh_ui$);
    }, $_processExistingMarkup$:function() {
      this.$_data$.html.$useExistingMarkup$ && (this.$_data$.html.$markup_ul$ || (this.$_data$.html.$markup_ul$ = this.$_$container$.find(" \x3e ul"), this.$_data$.html.$markup_div$ = $$$$35$$("\x3cdiv id\x3d'oj-tree-existing-markup-" + this.$_getIndex$() + "' style\x3d'display:none'\x3e").append(this.$_data$.html.$markup_ul$), this.$_$container$.after(this.$_data$.html.$markup_div$)), this.$_data$.html.$markup$ = this.$_data$.html.$markup_ul$.find(" \x3e li"), this.$_data$.html.$cloneMarkup$ = this.$_data$.html.$markup$.clone(!0), 
      this.$_data$.html.$cloneMarkup$.find("li").addBack().contents().filter(function() {
        return 3 == this.nodeType;
      }).remove());
    }, $_initThemes$:function() {
      !1 === this.$_data$.$themes$.$_themes$ && $$$$35$$("script").each(function() {
        if (this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/)) {
          return this.$_data$.$themes$.$_themes$ = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + "themes/", !1;
        }
      });
      !1 === this.$_data$.$themes$.$_themes$ && (this.$_data$.$themes$.$_themes$ = "themes/");
      this.$_$container$.bind("_treeinit", $$$$35$$.proxy(function() {
        var $s$$26$$ = this.options;
        this.$_data$.$themes$.$dots$ = $s$$26$$.dots;
        this.$_data$.$themes$.icons = $s$$26$$.icons;
        this.setTheme(this.$_data$.$themes$.$theme$, this.$_data$.$themes$.url);
      }, this)).bind("ojloaded", $$$$35$$.proxy(function() {
        this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
        this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
      }, this));
    }, $_initTypes$:function() {
      var $s$$27$$ = this.options.types;
      $s$$27$$ && this.$_$container$.bind("_treeinit", $$$$35$$.proxy(function() {
        var $types$$ = $$$$35$$.extend(!0, {}, $s$$27$$.types), $attr$$19$$ = $s$$27$$.attr || this.$_data$.types.$defaults$.attr, $icons_css$$ = "", $_this$$24$$ = this;
        $$$$35$$.each($types$$, function($i$$418$$, $tp$$) {
          $$$$35$$.each($tp$$, function($k$$11$$) {
            /^(maxDepth|maxChildren|icon|validChildren)$/.test($k$$11$$) || $_this$$24$$.$_data$.types.$attachTo$.push($k$$11$$);
          });
          var $ot$$ = typeof $tp$$.icon;
          if ("undefined" === $ot$$) {
            $ot$$ = typeof $tp$$.image;
            if ("boolean" === $ot$$ && !$tp$$.image) {
              $tp$$.image = "ojt$none";
            } else {
              if (!$tp$$.image && !$tp$$.position) {
                return!0;
              }
            }
            $tp$$.icon = {};
            $tp$$.image && ($tp$$.icon.image = $tp$$.image, delete $tp$$.image);
            void 0 !== $tp$$.position && ($tp$$.icon.position = $tp$$.position, delete $tp$$.position);
          }
          if ($tp$$.icon.image || $tp$$.icon.position) {
            "default" == $i$$418$$ ? ($_this$$24$$.$_data$.types.$defType$ = !0, $icons_css$$ += ".oj-tree-" + $_this$$24$$.$_getIndex$() + " .oj-tree-list li.oj-tree-type a \x3e .oj-tree-node-icon { ", $icons_css$$ += $_this$$24$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ", $icons_css$$ += ".oj-tree-" + $_this$$24$$.$_getIndex$() + " .oj-tree-list li[" + $attr$$19$$ + '\x3d"oj-tree-deftype"].oj-tree-type \x3e a ins.oj-tree-node-icon { ') : $tp$$.icon.image && ($icons_css$$ += ".oj-tree-" + 
            $_this$$24$$.$_getIndex$() + " .oj-tree-list li[" + $attr$$19$$ + '\x3d"' + $i$$418$$ + '"].oj-tree-type \x3e a \x3e ins.oj-tree-node-icon { '), $icons_css$$ += $_this$$24$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ";
          }
        });
        "" !== $icons_css$$ && $_addSheet$$({$str$:$icons_css$$, title:"oj-tree-types"});
      }, this)).bind("ojbefore", $$$$35$$.proxy(function($e$$119$$, $data$$163$$) {
        var $d$$20_o$$19_s$$28$$, $ty$$1$$, $func$$10$$ = $data$$163$$.func, $item$$95$$ = $data$$163$$.item;
        if (($d$$20_o$$19_s$$28$$ = ($d$$20_o$$19_s$$28$$ = this.$_data$.types.$defaults$.useData ? this.$_getNode$($item$$95$$) : !1) && -1 !== $d$$20_o$$19_s$$28$$ && $d$$20_o$$19_s$$28$$.length ? $d$$20_o$$19_s$$28$$.data("oj-tree") : !1) && $d$$20_o$$19_s$$28$$.types && !1 === $d$$20_o$$19_s$$28$$[$func$$10$$] || -1 !== $$$$35$$.inArray($func$$10$$, this.$_data$.types.$attachTo$) && $data$$163$$.item && ($data$$163$$.item.tagName || $data$$163$$.item.jquery) && ($d$$20_o$$19_s$$28$$ = this.options.types.types, 
        $ty$$1$$ = this.$_getType$($item$$95$$), ($d$$20_o$$19_s$$28$$[$ty$$1$$] && "undefined" !== typeof $d$$20_o$$19_s$$28$$[$ty$$1$$][$func$$10$$] || $d$$20_o$$19_s$$28$$["default"] && "undefined" !== typeof $d$$20_o$$19_s$$28$$["default"][$func$$10$$]) && !1 === this.$_check$($func$$10$$, $item$$95$$))) {
          return $e$$119$$.stopImmediatePropagation(), !1;
        }
      }, this));
    }, $_addTypeCss$:function($tp$$1$$) {
      var $css$$1$$ = "", $css$$1$$ = "ojt$none" !== $tp$$1$$.icon.image ? $css$$1$$ + (" background-image:url(" + $tp$$1$$.icon.image + "); ") : $css$$1$$ + " background-image:none; ";
      return $css$$1$$ = $tp$$1$$.icon.position ? $css$$1$$ + (" background-position:" + $tp$$1$$.icon.position + "; ") : $css$$1$$ + " background-position:0 0; ";
    }, $_initDnD$:function() {
      if (this.$_data$.dnd.reorder) {
        var $s$$29_vars$$9$$ = this.$_data$.dnd.$vars$;
        $s$$29_vars$$9$$.$m$ = $$$$35$$("\x3cdiv class\x3d'oj-tree-drop-marker'\x3e\x3cspan class\x3d'oj-tree-drop-ptr oj-component-icon'\x3e\x26#160;\x3c/span\x3e\x3c/div\x3e").hide().bind("mouseleave mouseenter", $$$$35$$.proxy(function($e$$120$$) {
          var $vars$$10$$ = this.$_data$.dnd.$vars$;
          $vars$$10$$.$m$.hide();
          $vars$$10$$.$ml$.hide();
          $e$$120$$.preventDefault();
          $e$$120$$.stopImmediatePropagation();
          return!1;
        }, this)).appendTo("body");
        $s$$29_vars$$9$$.$ml$ = $$$$35$$("\x3cdiv /\x3e").addClass("oj-tree-drop-marker-line").hide().bind("mouseup", function($e$$121$$) {
          var $vars$$11$$ = this.$_data$.dnd.$vars$;
          if ($vars$$11$$.$r$ && $vars$$11$$.$r$.length) {
            return $vars$$11$$.$r$.children("a").trigger($e$$121$$), $e$$121$$.preventDefault(), $e$$121$$.stopImmediatePropagation(), !1;
          }
        }).bind("mouseleave", $$$$35$$.proxy(function($e$$122$$) {
          var $vars$$12$$ = this.$_data$.dnd.$vars$, $rt$$ = $$$$35$$($e$$122$$.relatedTarget);
          if (($rt$$.is(".oj-tree") || 0 === $rt$$.closest(".oj-tree").length) && $vars$$12$$.$r$ && $vars$$12$$.$r$.length) {
            return $vars$$12$$.$r$.children("a").trigger($e$$122$$), $vars$$12$$.$m$.hide(), $vars$$12$$.$ml$.hide(), $e$$122$$.preventDefault(), $e$$122$$.stopImmediatePropagation(), !1;
          }
        }, this)).appendTo("body");
        this.$_data$.dnd.$ml_width$ = $s$$29_vars$$9$$.$ml$.width();
        $$$$35$$(document).bind("drag_start.ojtreeu", $$$$35$$.proxy(function($e$$123$$, $data$$164$$) {
          var $vars$$13$$ = this.$_data$.dnd.$vars$;
          $data$$164$$.data.$jstree$ && ($vars$$13$$.$m$.show(), $vars$$13$$.$ml$ && $vars$$13$$.$ml$.show());
        }, this));
        $$$$35$$(document).bind("drag_stop.ojtreeu", $$$$35$$.proxy(function($e$$124$$, $data$$165$$) {
          var $vars$$14$$ = this.$_data$.dnd.$vars$;
          $data$$165$$.data.$jstree$ && ($vars$$14$$.$m$.hide(), $vars$$14$$.$ml$ && $vars$$14$$.$ml$.hide());
        }, this));
        this.$_$container$.bind("mouseenter.ojtree", $$$$35$$.proxy(function($dc_e$$125_tr$$1$$) {
          var $ctl$$4$$ = this.$_data$.dnd.$ctl$, $vars$$15$$ = this.$_data$.dnd.$vars$;
          if ($ctl$$4$$.$is_drag$ && $ctl$$4$$.$user_data$.$jstree$ && (this.options.themes && ($vars$$15$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$15$$.$ml$ && $vars$$15$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $ctl$$4$$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$)), $dc_e$$125_tr$$1$$.currentTarget === $dc_e$$125_tr$$1$$.target && $ctl$$4$$.$user_data$.$obj$ && $$$$35$$($ctl$$4$$.$user_data$.$obj$).length && $$$$35$$($ctl$$4$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== 
          $dc_e$$125_tr$$1$$.target)) {
            if ($dc_e$$125_tr$$1$$ = this.$_reference$($dc_e$$125_tr$$1$$.target), $dc_e$$125_tr$$1$$.data.dnd.$foreign$) {
              if ($dc_e$$125_tr$$1$$ = $dc_e$$125_tr$$1$$.options.dnd.drag_check.call(this, {o:$vars$$15$$.$o$, r:$dc_e$$125_tr$$1$$.$_$container$, is_root:!0}), !0 === $dc_e$$125_tr$$1$$ || !0 === $dc_e$$125_tr$$1$$.inside || !0 === $dc_e$$125_tr$$1$$.before || !0 === $dc_e$$125_tr$$1$$.after) {
                $ctl$$4$$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), this.$_$container$.removeClass("oj-invalid-drop"), $vars$$15$$.$o$ && $vars$$15$$.$o$.removeClass("oj-invalid-drop").addClass("oj-valid-drop");
              }
            } else {
              $dc_e$$125_tr$$1$$.$_prepare_move$($vars$$15$$.$o$, $dc_e$$125_tr$$1$$.$_$container$, "last"), $dc_e$$125_tr$$1$$.check_move() && ($ctl$$4$$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), this.$_$container$.removeClass("oj-invalid-drop"), $vars$$15$$.$o$ && $vars$$15$$.$o$.removeClass("oj-invalid-drop").addClass("oj-valid-drop"));
            }
          }
        }, this)).bind("mouseup.ojtree", $$$$35$$.proxy(function($dc$$1_e$$126$$) {
          var $vars$$16$$ = this.$_data$.dnd.$vars$, $ctl$$5_tr$$2$$ = this.$_data$.dnd.$ctl$;
          $ctl$$5_tr$$2$$.$is_drag$ && $ctl$$5_tr$$2$$.$user_data$.$jstree$ && $dc$$1_e$$126$$.currentTarget === $dc$$1_e$$126$$.target && $ctl$$5_tr$$2$$.$user_data$.$obj$ && $$$$35$$($ctl$$5_tr$$2$$.$user_data$.$obj$).length && $$$$35$$($ctl$$5_tr$$2$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== $dc$$1_e$$126$$.target && ($ctl$$5_tr$$2$$ = this.$_reference$($dc$$1_e$$126$$.currentTarget), $ctl$$5_tr$$2$$.data.dnd.foreign ? ($dc$$1_e$$126$$ = $ctl$$5_tr$$2$$.$_getOptions$().dnd.drag_check.call(this, 
          {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$2$$.$_$container$, is_root:!0}), !0 !== $dc$$1_e$$126$$ && !0 !== $dc$$1_e$$126$$.inside && !0 !== $dc$$1_e$$126$$.before && !0 !== $dc$$1_e$$126$$.after || $ctl$$5_tr$$2$$.$_getOptions$().dnd.drag_finish.call(this, {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$2$$.$_$container$, is_root:!0})) : $ctl$$5_tr$$2$$.$_moveNode$($vars$$16$$.$o$, $ctl$$5_tr$$2$$.$_$container$, "last", $dc$$1_e$$126$$[$ctl$$5_tr$$2$$.options.dnd.copy_modifier + "Key"]));
        }, this)).bind("mouseleave.ojtree", $$$$35$$.proxy(function($e$$127$$) {
          var $ctl$$6$$ = this.$_data$.dnd.$ctl$;
          if ($e$$127$$.relatedTarget && $$$$35$$($e$$127$$.relatedTarget).hasClass("oj-tree-drop-marker-line")) {
            return!1;
          }
          $ctl$$6$$.$is_drag$ && $ctl$$6$$.$user_data$.$jstree$ && (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$to1$ && clearTimeout(this.$_data$.dnd.$to1$), this.$_data$.dnd.$to2$ && clearTimeout(this.$_data$.dnd.$to2$), $ctl$$6$$.helper.children("ins").hasClass("oj-tree-drop-ok") && ($ctl$$6$$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid"), this.$_$container$.addClass("oj-invalid-drop"), 
          this.$_data$.dnd.$vars$.$o$ && this.$_data$.dnd.$vars$.$o$.removeClass("oj-valid-drop").removeClass("oj-invalid-drop")));
        }, this)).bind("mousemove.ojtree", $$$$35$$.proxy(function($e$$128$$) {
          var $ctl$$7$$ = this.$_data$.dnd.$ctl$;
          if ($ctl$$7$$.$is_drag$ && $ctl$$7$$.$user_data$.$jstree$) {
            var $cnt$$1$$ = this.$_$container$[0];
            $e$$128$$.pageX + 24 > this.$_data$.dnd.$cof$.left + this.$_data$.dnd.$cw$ ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$35$$.proxy(function() {
              this.scrollLeft += $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : $e$$128$$.pageX - 24 < this.$_data$.dnd.$cof$.left ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$35$$.proxy(function() {
              this.scrollLeft -= $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$);
            $e$$128$$.pageY + 24 > this.$_data$.dnd.$cof$.top + this.$_data$.dnd.ch ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$35$$.proxy(function() {
              this.scrollTop += $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : $e$$128$$.pageY - 24 < this.$_data$.dnd.$cof$.top ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$35$$.proxy(function() {
              this.scrollTop -= $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$);
          }
        }, this)).bind("scroll.ojtree", $$$$35$$.proxy(function() {
          var $ctl$$8$$ = this.$_data$.dnd.$ctl$, $vars$$17$$ = this.$_data$.dnd.$vars$;
          $ctl$$8$$.$is_drag$ && $ctl$$8$$.$user_data$.$jstree$ && $vars$$17$$.$m$ && $vars$$17$$.$ml$ && ($vars$$17$$.$m$.hide(), $vars$$17$$.$ml$.hide());
        }, this)).delegate(".oj-tree-list a", "mousedown.ojtree", $$$$35$$.proxy(function($e$$130$$) {
          if (1 === $e$$130$$.which) {
            return this.$_start_drag$($e$$130$$.currentTarget, $e$$130$$), !1;
          }
        }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$35$$.proxy(function($e$$131$$) {
          var $ctl$$9$$ = this.$_data$.dnd.$ctl$;
          $ctl$$9$$.$is_drag$ && $ctl$$9$$.$user_data$.$jstree$ && this.$_dnd_enter$($e$$131$$.currentTarget);
        }, this)).delegate(".oj-tree-list a", "mousemove.ojtree", $$$$35$$.proxy(function($e$$132$$) {
          var $ctl$$10$$ = this.$_data$.dnd.$ctl$, $vars$$18$$ = this.$_data$.dnd.$vars$;
          $ctl$$10$$.$is_drag$ && $ctl$$10$$.$user_data$.$jstree$ && ($vars$$18$$.$r$ && $vars$$18$$.$r$.length && $vars$$18$$.$r$.children("a")[0] === $e$$132$$.currentTarget || this.$_dnd_enter$($e$$132$$.currentTarget), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$35$$($e$$132$$.target).offset()), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$35$$($e$$132$$.target).offset()), this.$_data$.dnd.$w$ = ($e$$132$$.pageY - (this.$_data$.dnd.off.top || 
          0)) % this.$_data$.$core$.$li_height$, 0 > this.$_data$.dnd.$w$ && (this.$_data$.dnd.$w$ += this.$_data$.$core$.$li_height$), this.$_dnd_show$());
        }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$35$$.proxy(function($e$$133$$) {
          var $ctl$$11$$ = this.$_data$.dnd.$ctl$, $vars$$19$$ = this.$_data$.dnd.$vars$;
          if ($ctl$$11$$.$is_drag$ && $ctl$$11$$.$user_data$.$jstree$) {
            if ($e$$133$$.relatedTarget && $$$$35$$($e$$133$$.relatedTarget).hasClass("oj-tree-drop-marker-line")) {
              return!1;
            }
            $vars$$19$$.$m$ && $vars$$19$$.$m$.hide();
            $vars$$19$$.$ml$ && $vars$$19$$.$ml$.hide();
            this.$_data$.dnd.$mto$ = setTimeout(function($t$$11$$) {
              return function() {
                $t$$11$$.$_dnd_leave$($e$$133$$);
              };
            }(this), 0);
          }
        }, this)).delegate(".oj-tree-list a", "mouseup.ojtree", $$$$35$$.proxy(function($e$$134$$) {
          var $ctl$$12$$ = this.$_data$.dnd.$ctl$;
          $ctl$$12$$.$is_drag$ && $ctl$$12$$.$user_data$.$jstree$ && this.$_dnd_finish$($e$$134$$);
        }, this));
        $$$$35$$(document).bind("drag_stop.ojtreeu", $$$$35$$.proxy(function() {
          var $dnd$$5$$ = this.$_data$.dnd, $vars$$20$$ = this.$_data$.dnd.$vars$;
          $dnd$$5$$.$to1$ && clearTimeout($dnd$$5$$.$to1$);
          $dnd$$5$$.$to2$ && clearTimeout($dnd$$5$$.$to2$);
          $dnd$$5$$.$i1$ && clearInterval($dnd$$5$$.$i1$);
          $dnd$$5$$.$i2$ && clearInterval($dnd$$5$$.$i2$);
          $dnd$$5$$.after = !1;
          $dnd$$5$$.before = !1;
          $dnd$$5$$.inside = !1;
          $dnd$$5$$.off = !1;
          $dnd$$5$$.$prepared$ = !1;
          $dnd$$5$$.$w$ = !1;
          $dnd$$5$$.$to1$ = !1;
          $dnd$$5$$.$to2$ = !1;
          $dnd$$5$$.$i1$ = !1;
          $dnd$$5$$.$i2$ = !1;
          $dnd$$5$$.$active$ = !1;
          $dnd$$5$$.$foreign$ = !1;
          $vars$$20$$.$m$ && $vars$$20$$.$m$.css({top:"-2000px"});
          $vars$$20$$.$ml$ && $vars$$20$$.$ml$.css({top:"-2000px"});
        }, this)).bind("drag_start.ojtreeu", $$$$35$$.proxy(function($e$$135$$, $data$$166$$) {
          if ($data$$166$$.data.$jstree$) {
            var $et$$ = $$$$35$$($data$$166$$.event.target);
            $et$$.closest(".jstree").hasClass("oj-tree-" + this.$_getIndex$()) && this.$_dnd_enter$($et$$);
          }
        }, this));
        $s$$29_vars$$9$$ = this.options.dnd;
        $s$$29_vars$$9$$.drag_target && $$$$35$$(document).delegate($s$$29_vars$$9$$.drag_target, "mousedown.ojtree-" + this.$_getIndex$(), $$$$35$$.proxy(function($e$$136$$) {
          var $cnt$$2_ctl$$13$$ = this.$_data$.dnd.$ctl$, $dnd$$6$$ = this.$_data$.dnd, $vars$$21$$ = this.$_data$.dnd.$vars$;
          $vars$$21$$.$o$ = $e$$136$$.target;
          this.$_drag_start$($e$$136$$, {$jstree$:!0, $obj$:$e$$136$$.target}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $$$$35$$($e$$136$$.target).text());
          this.$_data$.$themes$ && ($vars$$21$$.$m$ && $vars$$21$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$21$$.$ml$ && $vars$$21$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $cnt$$2_ctl$$13$$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
          $cnt$$2_ctl$$13$$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid");
          this.$_$container$.addClass("oj-invalid-drop");
          $vars$$21$$.$o$ && $vars$$21$$.$o$.removeClass("oj-valid-drop").addClass("oj-invalid-drop");
          $cnt$$2_ctl$$13$$ = this.$_$container$;
          $dnd$$6$$.$cof$ = $cnt$$2_ctl$$13$$.offset();
          $dnd$$6$$.$cw$ = parseInt($cnt$$2_ctl$$13$$.width(), 10);
          $dnd$$6$$.ch = parseInt($cnt$$2_ctl$$13$$.height(), 10);
          $dnd$$6$$.$foreign$ = !0;
          $e$$136$$.preventDefault();
        }, this));
        $s$$29_vars$$9$$.drop_target && $$$$35$$(document).delegate($s$$29_vars$$9$$.drop_target, "mouseenter.ojtree-" + this.$_getIndex$(), $$$$35$$.proxy(function($e$$137$$) {
          var $dnd$$7$$ = this.$_data$.dnd, $vars$$22$$ = this.$_data$.dnd.$vars$;
          $dnd$$7$$.$active$ && this.options.dnd.drop_check.call(this, {o:$vars$$22$$.$o$, r:$$$$35$$($e$$137$$.target), e:$e$$137$$}) && ($dnd$$7$$.$ctl$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), this.$_$container$.removeClass("oj-invalid-drop"), $vars$$22$$.$o$ && $vars$$22$$.$o$.removeClass("oj-invalid-drop").addClass("oj-valid-drop"));
        }, this)).delegate($s$$29_vars$$9$$.drop_target, "mouseleave.ojtree-" + this.$_getIndex$(), $$$$35$$.proxy(function() {
          this.$_data$.dnd.$active$ && (this.$_data$.dnd.$ctl$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid"), this.$_$container$.addClass("oj-invalid-drop"));
        }, this)).delegate($s$$29_vars$$9$$.drop_target, "mouseup.ojtree-" + this.$_getIndex$(), $$$$35$$.proxy(function($e$$139$$) {
          var $vars$$23$$ = this.$_data$.dnd.$vars$;
          this.$_data$.dnd.$active$ && this.$_data$.dnd.$ctl$.helper.children("ins").hasClass("oj-tree-drop-ok") && this.options.dnd.drop_finish.call(this, {o:$vars$$23$$.$o$, r:$$$$35$$($e$$139$$.target), e:$e$$139$$});
        }, this));
      }
    }, $_initDnDOpts$:function() {
      this.$_data$.dnd.reorder = !1;
      var $opts$$38$$ = this.options.dnd, $bFixup$$ = !0;
      "object" === typeof $opts$$38$$ && ($opts$$38$$ = $opts$$38$$.reorder, "string" === typeof $opts$$38$$ && ("enable" === $opts$$38$$ ? (this.$_data$.dnd.reorder = !0, $bFixup$$ = !1) : "disable" == $opts$$38$$ && ($bFixup$$ = !1)));
      this.$_data$.dnd.reorder ? (this.options.dnd = {}, this.$_applyDefaults$(this.options.dnd, this.$_data$.dnd.$defaults$), this.options.dnd.reorder = "enable") : $bFixup$$ && (this.options.dnd = {reorder:"disable"});
    }, $_initKeys$:function() {
    }, $_initMenu$:function($newVal$$4$$) {
      var $$m$$1_menu$$19$$, $dm$$1_t$$12$$;
      $newVal$$4$$ || this.options.contextMenu || ($$m$$1_menu$$19$$ = this.$_$container$.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m$$1_menu$$19$$);
      if ($newVal$$4$$ || this.options.contextMenu) {
        $$m$$1_menu$$19$$ = $newVal$$4$$ || this.options.contextMenu;
        $dm$$1_t$$12$$ = $$$$35$$.type($$m$$1_menu$$19$$);
        if ("function" == $dm$$1_t$$12$$) {
          try {
            $$m$$1_menu$$19$$ = $$m$$1_menu$$19$$();
          } catch ($e$$140$$) {
            $$m$$1_menu$$19$$ = null;
          }
          $dm$$1_t$$12$$ = $$$$35$$.type($$m$$1_menu$$19$$);
        }
        if ("string" === $dm$$1_t$$12$$) {
          if ($$m$$1_menu$$19$$ = $$$$35$$($$m$$1_menu$$19$$)) {
            $$m$$1_menu$$19$$.css("display", "none"), $dm$$1_t$$12$$ = this.$_data$.menu, $dm$$1_t$$12$$.$$container$ = $$m$$1_menu$$19$$, $dm$$1_t$$12$$.$usermenu$ = !0;
          }
          this.$_data$.menu.$usermenu$ && $newVal$$4$$ && this.$_applyMenu$();
        }
      }
    }, $_handleContextMenuSelect$:function($ev$$5$$, $ui$$37$$) {
      if (!$ui$$37$$.inst && this.$_data$.menu.$treeDivId$ == this.$_elemId$.substr(1)) {
        var $id$$46$$ = $ui$$37$$ ? $ui$$37$$.item.attr("id") : void 0;
        "ojtreecopy" === $id$$46$$ ? this.$_crrm_copy$(this.$_data$.menu.$node$) : "ojtreecut" === $id$$46$$ ? this.$_crrm_cut$(this.$_data$.menu.$node$) : "ojtreepaste" === $id$$46$$ ? this.$_crrm_paste$(this.$_data$.menu.$node$) : "ojtreeremove" === $id$$46$$ ? this.isSelected(this.$_data$.menu.$node$) ? this.$_crrm_remove$() : this.$_crrm_remove$(this.$_data$.menu.$node$) : "ojtreerename" === $id$$46$$ ? this.$_crrm_rename$(this.$_data$.menu.$node$) : "ojtreecreate" === $id$$46$$ && this.$_crrm_create$(this.$_data$.menu.$node$);
      }
    }, $_NotifyContextMenuGesture$:function($menu$$20_openOptions$$6$$, $event$$496$$, $eventType$$50$$) {
      var $disabledState_keyboard$$ = "keyboard" === $eventType$$50$$;
      if ("contextmenu" == $event$$496$$.type || $disabledState_keyboard$$ || "touch" == $eventType$$50$$) {
        this.$_data$.menu.$node$ = $disabledState_keyboard$$ ? this.$_data$.ui.$hovered$ : $$$$35$$($event$$496$$.target);
        var $textElem$$ = this.$_data$.menu.$node$.find(".oj-tree-title")[0];
        this.$_data$.menu.$activenode$ = null;
        this.$_data$.menu.$node$ ? (this.$_data$.menu.$treeDivId$ = this.$_data$.menu.$node$.closest("div").attr("id"), $menu$$20_openOptions$$6$$ = {launcher:this.$_$container_ul$}, $disabledState_keyboard$$ && ($menu$$20_openOptions$$6$$.position = {of:$textElem$$}), this.$_data$.menu.$usermenu$ && this.$_data$.menu.$$elemPaste$ && ($disabledState_keyboard$$ = !this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$, !!this.$_data$.menu.$$elemPaste$.hasClass("oj-disabled") != $disabledState_keyboard$$ && 
        ($disabledState_keyboard$$ ? this.$_data$.menu.$$elemPaste$.addClass("oj-disabled") : this.$_data$.menu.$$elemPaste$.removeClass("oj-disabled"), this.$_data$.menu.$$container$.ojMenu("refresh"))), this.$_OpenContextMenu$($event$$496$$, $eventType$$50$$, $menu$$20_openOptions$$6$$)) : $event$$496$$.preventDefault();
      }
    }, $_initCoreOpts$:function() {
      var $val$$71$$ = this.options.selectionMode, $val$$71$$ = void 0 == $val$$71$$ ? "single" : $val$$71$$;
      "none" === $val$$71$$ ? $val$$71$$ = 0 : "single" === $val$$71$$ ? $val$$71$$ = 1 : "multiple" === $val$$71$$ && ($val$$71$$ = -1);
      this.$_data$.$core$.$selectMode$ = $val$$71$$;
      this.$_data$.$themes$.icons = this.options.icons;
      this.$_initExpandedOpts$();
      this.$_data$.$core$.$toLoad$ = this.options.initLoaded;
    }, $_initUIOpts$:function() {
    }, $_initDSOpts$:function($bInit$$2$$) {
      var $s$$30$$ = this.options.data, $dt$$1_ot$$2$$;
      this.$_data$.$ds$.type = 0;
      this.$_data$.html.$useExistingMarkup$ = !1;
      this.$_data$.html.$cloneMarkup$ = !1;
      if ($s$$30$$) {
        if ($dt$$1_ot$$2$$ = $$$$35$$.type($s$$30$$), "string" === $dt$$1_ot$$2$$) {
          this.$_isHtml$($s$$30$$) ? this.$_data$.$ds$.type = 4 : this.$_data$.$ds$.type = 3;
        } else {
          if ("array" === $dt$$1_ot$$2$$) {
            this.$_data$.$ds$.type = 3;
          } else {
            if ("object" === $dt$$1_ot$$2$$) {
              try {
                $s$$30$$ instanceof $oj$$36$$.$JsonTreeDataSource$ && (this.$_data$.$ds$.type = 1);
              } catch ($e$$141$$) {
                this.$_data$.$ds$.type = -1;
              }
              if (1 !== this.$_data$.$ds$.type) {
                try {
                  $s$$30$$ instanceof $oj$$36$$.$CollectionTreeDataSource$ && (this.$_data$.$ds$.type = 2);
                } catch ($e$$142$$) {
                  this.$_data$.$ds$.type = -1;
                }
              }
              1 !== this.$_data$.$ds$.type && 2 !== this.$_data$.$ds$.type && ($s$$30$$.data || $s$$30$$.ajax) && (($dt$$1_ot$$2$$ = $s$$30$$.dataType) ? "json" === $dt$$1_ot$$2$$ ? this.$_data$.$ds$.type = 3 : "html" === $dt$$1_ot$$2$$ && (this.$_data$.$ds$.type = 4) : ($s$$30$$.dataType = "json", this.$_data$.$ds$.type = 3));
            }
          }
        }
      }
      $bInit$$2$$ && 0 == this.$_data$.$ds$.type && 0 < this.$_$container$.find("ul").length && (this.$_data$.$ds$.type = 4, this.$_data$.html.$useExistingMarkup$ = !0);
    }, $_initTreeDSOpts$:function() {
    }, $_initJsonOpts$:function() {
    }, $_initHtmlOpts$:function() {
    }, $_initMenuOpts$:function() {
    }, $_initTypeOpts$:function() {
      var $o$$20$$ = this.options.types;
      "object" === typeof $o$$20$$ && this.$_applyDefaults$($o$$20$$, {attr:this.$_data$.types.$defaults$.attr});
    }, $_initExpandedOpts$:function() {
      this.$_data$.$core$.$toExpand$ = this.$_varCopy$(this.options, "initExpanded");
      null == this.$_data$.$core$.$toExpand$ && (this.$_data$.$core$.$toExpand$ = []);
    }, $_initData$:function() {
      var $data$$167$$ = this.$_data$;
      $data$$167$$.$core$ = {$initLoaded$:[], $selectMode$:1, $load_open$:!1, $li_height$:0, $notify_plugins$:!1, $toExpand$:!1, $toLoad$:!1, $prepared_move$:{}, $suppressSelectEvent$:!1, $strings$:{}};
      $data$$167$$.ui = {selected:$$$$35$$(), $lastSelected$:!1, $hovered$:null, $lastHovered$:null, $disclosureClick$:!1, $to_select$:null, opacity:1, $spacebar$:!1, $focused$:!1, $animDurDiv$:null, $touchEvent$:!1};
      $data$$167$$.ui.$defaults$ = {selectMultipleModifier:"ctrl", selectRangeModifier:"shift", disableSelectingChildren:!1};
      $data$$167$$.$crrm$ = {};
      $data$$167$$.$crrm$.$cp_nodes$ = !1;
      $data$$167$$.$crrm$.$ct_nodes$ = !1;
      $data$$167$$.$crrm$.$defaults$ = {inputWidthLimit:200, move:{alwaysCopy:!1, openOnMove:!0, defaultPosition:"last", checkMove:function $$data$$167$$$$crrm$$$defaults$$move$checkMove$() {
        return!0;
      }}};
      $data$$167$$.$crrm$.$prepared_move$ = {};
      $data$$167$$.$ds$ = {};
      $data$$167$$.$ds$.$progressiveRender$ = !1;
      $data$$167$$.$ds$.$progressiveUnload$ = !1;
      $data$$167$$.$ds$.$correctState$ = !0;
      $data$$167$$.$ds$.type = 0;
      $data$$167$$.$json$ = {};
      $data$$167$$.$json$.$defaults$ = {data:!1, ajax:!1};
      $data$$167$$.html = {};
      $data$$167$$.html.$defaults$ = {data:!1, ajax:!1};
      $data$$167$$.html.$useExistingMarkup$ = !1;
      $data$$167$$.html.$markup_ul$ = !1;
      $data$$167$$.html.$markup_div$ = !1;
      $data$$167$$.html.$markup$ = !1;
      $data$$167$$.html.$cloneMarkup$ = !1;
      $data$$167$$.$themes$ = {};
      $data$$167$$.$themes$.icons = !0;
      $data$$167$$.$themes$.$dots$ = !1;
      $data$$167$$.$themes$.$theme$ = "default";
      $data$$167$$.$themes$.url = !1;
      $data$$167$$.$themes$.$themes_loaded$ = [];
      $data$$167$$.$themes$.$_themes$ = !1;
      $data$$167$$.types = {};
      $data$$167$$.types.$attachTo$ = [];
      $data$$167$$.types.$defType$ = !1;
      $data$$167$$.types.$defaults$ = {maxChildren:-1, maxDepth:-1, validChildren:"all", useData:!1, attr:"type", types:{"default":{maxChildren:-1, maxDepth:-1, validChildren:"all"}}};
      $data$$167$$.menu = {};
      $data$$167$$.menu.$usermenu$ = !1;
      $data$$167$$.menu.$$container$ = !1;
      $data$$167$$.menu.$$elemPaste$ = !1;
      $data$$167$$.menu.$node$ = !1;
      $data$$167$$.menu.$activenode$ = !1;
      $data$$167$$.keys = {};
      $data$$167$$.keys.$enabled$ = !0;
      $data$$167$$.keys.bound = [];
      $data$$167$$.dnd = {};
      $data$$167$$.dnd.reorder = !1;
      $data$$167$$.dnd.$active$ = !1;
      $data$$167$$.dnd.after = !1;
      $data$$167$$.dnd.inside = !1;
      $data$$167$$.dnd.before = !1;
      $data$$167$$.dnd.off = !1;
      $data$$167$$.dnd.$prepared$ = !1;
      $data$$167$$.dnd.$w$ = 0;
      $data$$167$$.dnd.$to1$ = !1;
      $data$$167$$.dnd.$to2$ = !1;
      $data$$167$$.dnd.$cof$ = !1;
      $data$$167$$.dnd.$cw$ = !1;
      $data$$167$$.dnd.ch = !1;
      $data$$167$$.dnd.$i1$ = !1;
      $data$$167$$.dnd.$i2$ = !1;
      $data$$167$$.dnd.$mto$ = !1;
      $data$$167$$.dnd.$ml_width$ = 100;
      $data$$167$$.dnd.$targ_ml_width$ = 100;
      $data$$167$$.dnd.$defaults$ = {copy_modifier:"ctrl", check_timeout:100, open_timeout:500, drop_target:".oj-tree-drop", drop_check:function $$data$$167$$$dnd$$defaults$$drop_check$() {
        return!0;
      }, drop_finish:$$$$35$$.noop, drag_target:".oj-tree-draggable", drag_finish:$$$$35$$.noop, drag_check:function $$data$$167$$$dnd$$defaults$$drag_check$() {
        return{after:!1, before:!1, inside:!0};
      }};
      $data$$167$$.dnd.$vars$ = {};
      $data$$167$$.dnd.$vars$.$o$ = !1;
      $data$$167$$.dnd.$vars$.$r$ = !1;
      $data$$167$$.dnd.$vars$.$m$ = !1;
      $data$$167$$.dnd.$vars$.$ml$ = !1;
      $data$$167$$.dnd.$vars$.$sli$ = void 0;
      $data$$167$$.dnd.$vars$.$sti$ = void 0;
      $data$$167$$.dnd.$vars$.$dir1$ = !1;
      $data$$167$$.dnd.$vars$.$dir2$ = !1;
      $data$$167$$.dnd.$vars$.$last_pos$ = !1;
      $data$$167$$.dnd.$ctl$ = {};
      $data$$167$$.dnd.$ctl$.$is_down$ = !1;
      $data$$167$$.dnd.$ctl$.$is_drag$ = !1;
      $data$$167$$.dnd.$ctl$.helper = !1;
      $data$$167$$.dnd.$ctl$.$scroll_spd$ = 10;
      $data$$167$$.dnd.$ctl$.$init_x$ = 0;
      $data$$167$$.dnd.$ctl$.$init_y$ = 0;
      $data$$167$$.dnd.$ctl$.$threshold$ = 5;
      $data$$167$$.dnd.$ctl$.$helper_horiz$ = 15;
      $data$$167$$.dnd.$ctl$.$helper_top$ = 5;
      $data$$167$$.dnd.$ctl$.$user_data$ = {};
    }, $_fix_scroll$:function($obj$$97_t$$13$$) {
      var $c$$50$$ = this.$_$container$[0];
      $c$$50$$.scrollHeight > $c$$50$$.offsetHeight && ($obj$$97_t$$13$$ = this.$_getNode$($obj$$97_t$$13$$)) && -1 !== $obj$$97_t$$13$$ && $obj$$97_t$$13$$.length && $obj$$97_t$$13$$.is(":visible") && ($obj$$97_t$$13$$ = $obj$$97_t$$13$$.offset().top - this.$_$container$.offset().top, 0 > $obj$$97_t$$13$$ && ($c$$50$$.scrollTop = $c$$50$$.scrollTop + $obj$$97_t$$13$$ - 1), $obj$$97_t$$13$$ + this.$_data$.$core$.$li_height$ + ($c$$50$$.scrollWidth > $c$$50$$.offsetWidth ? $scrollbar_width$$ : 0) > 
      $c$$50$$.offsetHeight && ($c$$50$$.scrollTop += $obj$$97_t$$13$$ - $c$$50$$.offsetHeight + this.$_data$.$core$.$li_height$ + 1 + ($c$$50$$.scrollWidth > $c$$50$$.offsetWidth ? $scrollbar_width$$ : 0)));
    }, $_setFocus$:function() {
    }, $_unsetFocus$:function() {
    }, $_newIndex$:function() {
      return++$_instance$$;
    }, $_getIndex$:function() {
      return this.$_index$;
    }, $_getOptions$:function() {
      return $$$$35$$.extend(!0, {}, this.options);
    }, $_getContainer$:function() {
      return this.$_$container$;
    }, $_keyHandler$:{up:function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "ctrl+up":function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "shift+up":function() {
      this.select(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, down:function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "ctrl+down":function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "shift+down":function() {
      this.select(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, left:function() {
      var $o$$27$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$27$$ && ($o$$27$$.hasClass("oj-expanded") ? this.collapse($o$$27$$) : this.hover(this.$_getPrev$($o$$27$$)));
      return!1;
    }, "ctrl+left":function() {
      var $o$$28$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$28$$ && ($o$$28$$.hasClass("oj-expanded") ? this.collapse($o$$28$$) : this.hover(this.$_getPrev$($o$$28$$)));
      return!1;
    }, "shift+left":function() {
      var $o$$29$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$29$$ && ($o$$29$$.hasClass("oj-expanded") ? this.collapse($o$$29$$) : this.hover(this.$_getPrev$($o$$29$$)));
      return!1;
    }, right:function() {
      var $o$$30$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$30$$ && $o$$30$$.length && ($o$$30$$.hasClass("oj-collapsed") ? this.expand($o$$30$$) : this.hover(this.$_getNext$($o$$30$$)));
      return!1;
    }, "ctrl+right":function() {
      var $o$$31$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$31$$ && $o$$31$$.length && ($o$$31$$.hasClass("oj-collapsed") ? this.expand($o$$31$$) : this.hover(this.$_getNext$($o$$31$$)));
      return!1;
    }, "shift+right":function() {
      var $o$$32$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$32$$ && $o$$32$$.length && ($o$$32$$.hasClass("oj-collapsed") ? this.expand($o$$32$$) : this.hover(this.$_getNext$($o$$32$$)));
      return!1;
    }, space:function() {
      this.$_data$.ui.$hovered$ && (this.$_data$.ui.$spacebar$ = !0, this.$_data$.ui.$hovered$.children("a:eq(0)").click(), this.$_data$.ui.$spacebar$ = !1);
      return!1;
    }, home:function() {
      this.hover(this.$_$container_ul$.find("li:first"));
      return!1;
    }, end:function() {
      var $a$$114$$ = this.$_$container_ul$.find("li.oj-tree-last:visible");
      $a$$114$$ && $a$$114$$.length && this.hover($a$$114$$[$a$$114$$.length - 1]);
      return!1;
    }, "*":function() {
      this.$_$container_ul$.find("a");
      this.$_expandAll$(-1, !1);
      return!1;
    }, "ctrl+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$6$$ = $$$$35$$.Event("click");
        $ev$$6$$.ctrlKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$6$$);
      }
      return!1;
    }, "shift+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$7$$ = $$$$35$$.Event("click");
        $ev$$7$$.shiftKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$7$$);
      }
      return!1;
    }, "shift+home":function($event$$499$$) {
      var $prevSelections$$3$$, $hover$$1$$ = this.$_data$.ui.$hovered$;
      if ($hover$$1$$) {
        var $bContinue$$1$$ = !0, $_this$$25$$ = this, $nodes$$5$$ = this.$_$container_ul$.find("li:visible");
        this.$_data$.$core$.$suppressSelectEvent$ = !0;
        $prevSelections$$3$$ = this.options.selection.slice(0);
        $hover$$1$$ = $hover$$1$$[0];
        $$$$35$$.each($nodes$$5$$, function($i$$419$$, $node$$104$$) {
          $node$$104$$ == $hover$$1$$ && ($bContinue$$1$$ = !1);
          $_this$$25$$.$_select$($node$$104$$, !0);
          return $bContinue$$1$$;
        });
        this.$_data$.$core$.$suppressSelectEvent$ = !1;
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$3$$, null, $event$$499$$);
      }
      return!1;
    }, "shift+pgdn":function($event$$500$$) {
      var $prevSelections$$4$$, $hover$$2$$ = this.$_data$.ui.$lastSelected$ || this.$_data$.ui.$hovered$;
      if ($hover$$2$$) {
        var $bFound$$ = !1, $_this$$26$$ = this, $l$$17$$ = this.$_$container_ul$.find("li:visible");
        this.$_data$.$core$.$suppressSelectEvent$ = !0;
        $prevSelections$$4$$ = this.options.selection.slice(0);
        $hover$$2$$ = $hover$$2$$[0];
        $$$$35$$.each($l$$17$$, function($i$$420$$, $node$$105$$) {
          $bFound$$ || ($bFound$$ = $node$$105$$ == $hover$$2$$);
          $bFound$$ && !$_this$$26$$.isSelected($node$$105$$) && $_this$$26$$.$_select$($node$$105$$, !0);
          return!0;
        });
        this.$_data$.$core$.$suppressSelectEvent$ = !1;
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$4$$, null, $event$$500$$);
      }
      return!1;
    }, f2:function() {
      this.$_crrm_rename$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$);
      return!1;
    }, del:function() {
      this.remove(this.$_data$.ui.$hovered$ || this.$_getNode$(null));
      return!1;
    }}, $_applyMenu$:function() {
      if (this.$_data$.menu.$usermenu$) {
        var $$menuContainer$$1$$ = this.$_data$.menu.$$container$, $_this$$27$$ = this;
        $$menuContainer$$1$$.on("ojselect", $$$$35$$.proxy(this.$_handleContextMenuSelect$, this));
        var $bChanged$$1$$ = !1;
        $$menuContainer$$1$$.find("[data-oj-command]").each(function() {
          var $cmd$$1$$;
          0 === $$$$35$$(this).children("a").length && ($cmd$$1$$ = $$$$35$$(this).attr("data-oj-command").split("oj-tree-"), $$$$35$$(this).replaceWith($_this$$27$$.$_buildContextMenuItem$($cmd$$1$$[$cmd$$1$$.length - 1])), $$$$35$$(this).hasClass("oj-menu-divider") && $$$$35$$(this).removeClass("oj-menu-divider").addClass("oj-menu-item"), $bChanged$$1$$ = !0);
        });
        $bChanged$$1$$ && $$menuContainer$$1$$.ojMenu("refresh");
        this.$_data$.menu.$$elemPaste$ = $$menuContainer$$1$$.find("#ojtreepaste");
      }
    }, $_clearMenu$:function() {
      var $um$$ = this.$_data$.menu;
      $um$$.$usermenu$ && ($um$$.$usermenu$ = !1, $um$$.$$container$.off("ojselect"), $um$$.$$container$ = null);
    }, $_buildContextMenuItem$:function($cmd$$2$$) {
      return $$$$35$$(this.$_buildContextMenuListItem$($cmd$$2$$));
    }, $_buildContextMenuListItem$:function($cmd$$3$$) {
      return "\x3cli id\x3d" + $_arMenuCmdMap$$[$cmd$$3$$] + "\x3e" + this.$_buildContextMenuLabel$($cmd$$3$$) + "\x3c/li\x3e";
    }, $_buildContextMenuLabel$:function($cmd$$4$$) {
      return'\x3ca href\x3d"#"\x3e' + this.$_getString$($_arMenuKeyMap$$[$cmd$$4$$]) + "\x3c/a\x3e";
    }, $_crrm_cut$:function($obj$$98$$) {
      $obj$$98$$ = this.$_getNode$($obj$$98$$, !0);
      if (!$obj$$98$$ || !$obj$$98$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$cp_nodes$ = !1;
      this.$_data$.$crrm$.$ct_nodes$ = $obj$$98$$;
      this.$_emitEvent$({obj:$obj$$98$$}, "cut");
    }, $_crrm_copy$:function($obj$$99$$) {
      $obj$$99$$ = this.$_getNode$($obj$$99$$, !0);
      if (!$obj$$99$$ || !$obj$$99$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ = !1;
      this.$_data$.$crrm$.$cp_nodes$ = $obj$$99$$;
      this.$_emitEvent$({obj:$obj$$99$$}, "copy");
    }, $_crrm_paste$:function($obj$$100$$) {
      $obj$$100$$ = this.$_getNode$($obj$$100$$);
      if (!$obj$$100$$ || !$obj$$100$$.length) {
        return!1;
      }
      var $nodes$$6$$ = this.$_data$.$crrm$.$ct_nodes$ ? this.$_data$.$crrm$.$ct_nodes$ : this.$_data$.$crrm$.$cp_nodes$;
      if (!this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$100$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$100$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$cp_nodes$ && this.$_crrm_move_node$(this.$_data$.$crrm$.$cp_nodes$, $obj$$100$$, !1, !0);
      this.$_emitEvent$({obj:$obj$$100$$, nodes:$nodes$$6$$}, "paste");
    }, $_crrm_move_node$:function($obj$$101$$, $ref$$4$$, $position$$37$$, $is_copy$$1$$, $is_prepared$$1$$, $skip_check$$1$$) {
      var $s$$31$$ = this.$_data$.$crrm$.$defaults$.move;
      if (!$is_prepared$$1$$) {
        return "undefined" === typeof $position$$37$$ && ($position$$37$$ = $s$$31$$.defaultPosition), "inside" !== $position$$37$$ || $s$$31$$.defaultPosition.match(/^(before|after)$/) || ($position$$37$$ = $s$$31$$.defaultPosition), this.$_moveNode$($obj$$101$$, $ref$$4$$, $position$$37$$, $is_copy$$1$$, !1, $skip_check$$1$$);
      }
      if (!0 === $s$$31$$.alwaysCopy || "multitree" === $s$$31$$.alwaysCopy && $obj$$101$$.$rt$.$_getIndex$() !== $obj$$101$$.$ot$.$_getIndex$()) {
        $is_copy$$1$$ = !0;
      }
      this.$_moveNode$($obj$$101$$, $ref$$4$$, $position$$37$$, $is_copy$$1$$, !0, $skip_check$$1$$);
    }, $_crrm_remove$:function($obj$$102$$) {
      $obj$$102$$ = this.$_getNode$($obj$$102$$, !0);
      this.$__rollback$();
      this.remove($obj$$102$$);
    }, $_crrm_rename$:function($obj$$103$$) {
      $obj$$103$$ = this.$_getNode$($obj$$103$$);
      this.$__rollback$();
      this.$_crrm_showInput$($obj$$103$$, function() {
      });
    }, $_crrm_showInput$:function($obj$$105$$, $callback$$111$$) {
      $obj$$105$$ = this.$_getNode$($obj$$105$$);
      var $rtl$$4$$ = this.$_isRtl$, $w$$9$$ = this.$_data$.$crrm$.$defaults$.inputWidthLimit, $w1$$ = $obj$$105$$.children("ins").width(), $w2$$ = $obj$$105$$.find("\x3e a:visible \x3e ins").width() * $obj$$105$$.find("\x3e a:visible \x3e ins").length, $t$$15$$ = this.getText($obj$$105$$), $_this$$28$$ = this, $h1$$ = $$$$35$$("\x3cdiv /\x3e", {css:{position:"absolute", top:"-200px", left:$rtl$$4$$ ? "0px" : "-1000px", visibility:"hidden"}}).appendTo("body"), $h2$$ = $obj$$105$$.css("position", 
      "relative").append($$$$35$$("\x3cinput /\x3e", {value:$t$$15$$, "class":"oj-tree-rename-input", css:{padding:"0", border:"1px solid silver", position:"absolute", left:$rtl$$4$$ ? "auto" : $w1$$ + $w2$$ + 4 + "px", right:$rtl$$4$$ ? $w1$$ + $w2$$ + 4 + "px" : "auto", top:"0px", height:this.$_data$.$core$.$li_height$ - 2 + "px", lineHeight:this.$_data$.$core$.$li_height$ - 2 + "px", width:"150px"}, blur:$$$$35$$.proxy(function() {
        var $i$$421$$ = $obj$$105$$.children(".oj-tree-rename-input"), $v$$5$$ = $i$$421$$.val();
        "" === $v$$5$$ && ($v$$5$$ = $t$$15$$);
        $h1$$.remove();
        $i$$421$$.remove();
        this.$_set_text$($obj$$105$$, $t$$15$$);
        this.$_rename_node$($obj$$105$$, $v$$5$$);
        $callback$$111$$.call(this, $obj$$105$$, $v$$5$$, $t$$15$$);
        $obj$$105$$.css("position", "");
      }, this), keyup:function($event$$501_key$$151$$) {
        $event$$501_key$$151$$ = $event$$501_key$$151$$.keyCode || $event$$501_key$$151$$.which;
        if (!$_this$$28$$.$_done$) {
          return $_this$$28$$.$_done$ = !0, !1;
        }
        27 == $event$$501_key$$151$$ ? ($_this$$28$$.$_done$ = !1, this.value = $t$$15$$, this.blur()) : 13 == $event$$501_key$$151$$ ? ($_this$$28$$.$_done$ = !1, this.blur()) : $h2$$.width(Math.min($h1$$.text("pW" + this.value).width(), $w$$9$$));
      }, keypress:function($event$$502$$) {
        if (13 == ($event$$502$$.keyCode || $event$$502$$.which)) {
          return!1;
        }
      }})).children(".oj-tree-rename-input");
      this.$_set_text$($obj$$105$$, "");
      $h1$$.css({fontFamily:$h2$$.css("fontFamily") || "", fontSize:$h2$$.css("fontSize") || "", fontWeight:$h2$$.css("fontWeight") || "", fontStyle:$h2$$.css("fontStyle") || "", fontStretch:$h2$$.css("fontStretch") || "", fontVariant:$h2$$.css("fontVariant") || "", letterSpacing:$h2$$.css("letterSpacing") || "", wordSpacing:$h2$$.css("wordSpacing") || ""});
      $h2$$.width(Math.min($h1$$.text("pW" + $h2$$[0].value).width(), $w$$9$$))[0].select();
    }, $_crrm_create$:function($obj$$106$$, $position$$38$$, $js$$2$$, $callback$$112$$, $skip_rename$$) {
      var $_this$$29$$ = this;
      ($obj$$106$$ = this.$_getNode$($obj$$106$$)) || ($obj$$106$$ = -1);
      this.$__rollback$();
      return this.$_createNode$($obj$$106$$, $position$$38$$, $js$$2$$, function($t$$17$$) {
        var $p$$14$$ = this.$_getParent$($t$$17$$), $pos$$15$$ = $$$$35$$($t$$17$$).index();
        $callback$$112$$ && $callback$$112$$.call(this, $t$$17$$);
        $p$$14$$.length && $p$$14$$.hasClass("oj-collapsed") && this.expand($p$$14$$, !1, !0);
        $skip_rename$$ ? $_this$$29$$.$_emitEvent$({obj:$t$$17$$, name:this.getText($t$$17$$), parent:$p$$14$$, position:$pos$$15$$}) : this.$_crrm_showInput$($t$$17$$, function($obj$$107$$, $new_name$$1$$) {
          $_this$$29$$.$_emitEvent$({obj:$obj$$107$$, name:$new_name$$1$$, parent:$p$$14$$, position:$pos$$15$$});
        });
      });
    }, $_isHtml$:function($s$$32$$) {
      if (!$s$$32$$ || 3 > $s$$32$$.length) {
        return!1;
      }
      $s$$32$$ = $s$$32$$.trim();
      return "\x3c" === $s$$32$$.charAt(0);
    }, $_applyEmptyText$:function() {
      var $txt$$ = this.options.emptyText;
      "string" !== typeof $txt$$ && ($txt$$ = this.$_getString$("labelNoData"));
      if ($txt$$ && 0 < $txt$$.length) {
        var $$u$$2$$ = this.$_$container_ul$, $$d$$ = $$$$35$$("\x3cli class\x3d'oj-tree-empty'\x3e\x3c/li\x3e");
        $$d$$[0].textContent = $txt$$;
        $$u$$2$$.empty().append($$d$$);
      }
    }, $_processSubId$:function($locator$$40_sNode$$) {
      var $c$$51_i$$422_subId$$38$$, $node$$106$$, $a$$115_sKey$$;
      $a$$115_sKey$$ = null;
      var $ret$$42$$;
      $locator$$40_sNode$$ && ($c$$51_i$$422_subId$$38$$ = $locator$$40_sNode$$.subId);
      if (!$c$$51_i$$422_subId$$38$$) {
        return null;
      }
      $a$$115_sKey$$ = $c$$51_i$$422_subId$$38$$.split("[");
      if (3 === $a$$115_sKey$$.length && ($a$$115_sKey$$[0] = $a$$115_sKey$$[0].trim(), "oj-tree-node" === $a$$115_sKey$$[0] && ($a$$115_sKey$$[1] = $a$$115_sKey$$[1].trim(), $c$$51_i$$422_subId$$38$$ = $a$$115_sKey$$[1].charAt(0), $c$$51_i$$422_subId$$38$$ = $a$$115_sKey$$[1].indexOf($c$$51_i$$422_subId$$38$$, 1), 0 <= $c$$51_i$$422_subId$$38$$ && ($locator$$40_sNode$$ = $a$$115_sKey$$[1].substring(1, $c$$51_i$$422_subId$$38$$).trim(), $a$$115_sKey$$[2] = $a$$115_sKey$$[2].trim(), $c$$51_i$$422_subId$$38$$ = 
      $a$$115_sKey$$[2].charAt(0), $c$$51_i$$422_subId$$38$$ = $a$$115_sKey$$[2].indexOf($c$$51_i$$422_subId$$38$$, 1), 0 <= $c$$51_i$$422_subId$$38$$)))) {
        $a$$115_sKey$$ = $a$$115_sKey$$[2].substring(1, $c$$51_i$$422_subId$$38$$).trim();
        try {
          $node$$106$$ = this.$_getNode$($locator$$40_sNode$$);
        } catch ($e$$143$$) {
          $node$$106$$ = null;
        }
        if ($a$$115_sKey$$ && $node$$106$$ && -1 !== $node$$106$$) {
          switch($a$$115_sKey$$) {
            case "icon":
              this.$_data$.$themes$.icons && ($ret$$42$$ = $node$$106$$.find(" \x3e a \x3e ins:eq(0)"));
              break;
            case "link":
              $ret$$42$$ = $node$$106$$.find(" \x3e a:eq(0)");
              break;
            case "disclosure":
              this.$_isLeaf$($node$$106$$) || ($ret$$42$$ = $node$$106$$.find(" \x3e ins:eq(0)"));
              break;
            case "title":
              $ret$$42$$ = $node$$106$$.find(" \x3e a \x3e span");
          }
        }
      }
      return $ret$$42$$ ? $ret$$42$$.length ? $ret$$42$$[0] : null : null;
    }, $_hideDots$:function() {
      this.$_data$.$themes$.$dots$ = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-dots");
    }, $_showDots$:function() {
      this.$_data$.$themes$.$dots$ = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-dots");
    }, $_isOptExpandAll$:function() {
      var $s$$33$$ = this.options.initExpanded;
      return $s$$33$$ && "all" == $s$$33$$ || $$$$35$$.isArray($s$$33$$) && $s$$33$$.length && "all" == $s$$33$$[0];
    }, $_getString$:function($key$$153$$) {
      var $oStrings$$ = this.$_data$.$core$.$strings$, $s$$34$$;
      $s$$34$$ = $oStrings$$[$key$$153$$];
      $s$$34$$ || ($s$$34$$ = this.$getTranslatedString$($key$$153$$), $s$$34$$ = this.$_escapeHtml$($s$$34$$), $oStrings$$[$key$$153$$] = $s$$34$$);
      return $s$$34$$;
    }, $_escapeHtml$:function($text$$19$$) {
      var $div$$8$$ = document.createElement("div");
      $$$$35$$($div$$8$$).text($text$$19$$);
      return $div$$8$$.textContent;
    }, $_getAnimDuration$:function() {
      var $ret$$43$$ = 0, $span$$2_val$$72$$, $$div_c$$52_s$$35$$;
      window.getComputedStyle && ($$div_c$$52_s$$35$$ = this.$_data$.ui.$animDurDiv$, $$div_c$$52_s$$35$$ || ($$div_c$$52_s$$35$$ = $$$$35$$("\x3cdiv id\x3d'ojtree-comp-animduration'\x3e\x3cspan class\x3d'oj-tree-transition'\x3edummy\x3c/span\x3e\x3c/div\x3e"), this.$_data$.ui.$animDurDiv$ = $$div_c$$52_s$$35$$, $$$$35$$("body").append($$div_c$$52_s$$35$$)), $span$$2_val$$72$$ = $$div_c$$52_s$$35$$[0].childNodes[0], $span$$2_val$$72$$ = window.getComputedStyle($span$$2_val$$72$$), $span$$2_val$$72$$ = 
      $span$$2_val$$72$$.transitionDuration ? $span$$2_val$$72$$.transitionDuration : $span$$2_val$$72$$["-webkit-transition-duration"] ? $span$$2_val$$72$$["-webkit-transition-duration"] : 0, $$div_c$$52_s$$35$$.detach(), "string" == typeof $span$$2_val$$72$$ && 1 < $span$$2_val$$72$$.length && ($$div_c$$52_s$$35$$ = $span$$2_val$$72$$.charAt($span$$2_val$$72$$.length - 1).toLowerCase(), "s" == $$div_c$$52_s$$35$$ ? ($span$$2_val$$72$$ = $span$$2_val$$72$$.substring(0, $span$$2_val$$72$$.length - 
      1), $span$$2_val$$72$$ = parseFloat($span$$2_val$$72$$), isNaN($span$$2_val$$72$$) || ($ret$$43$$ = 1E3 * $span$$2_val$$72$$)) : 2 < $span$$2_val$$72$$.length && ($$div_c$$52_s$$35$$ = $span$$2_val$$72$$.substring($span$$2_val$$72$$.length - 2).toLowerCase(), "ms" == $$div_c$$52_s$$35$$ && ($span$$2_val$$72$$ = parseFloat($span$$2_val$$72$$), isNaN($span$$2_val$$72$$) || ($ret$$43$$ = $span$$2_val$$72$$)))));
      return $ret$$43$$;
    }, $_varCopy$:function($obj$$108$$, $s$$36$$) {
      var $o$$33$$ = {};
      $o$$33$$[$s$$36$$] = $obj$$108$$[$s$$36$$];
      return $$$$35$$.extend(!0, {}, $o$$33$$)[$s$$36$$];
    }});
  })();
});
