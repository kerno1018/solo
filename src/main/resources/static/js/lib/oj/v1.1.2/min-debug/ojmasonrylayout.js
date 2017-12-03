/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$25$$, $$$$24$$) {
  function $MasonryLayoutCommon$$($elem$$78$$, $rtl$$2_sizeDivWrapper$$, $automationEnabled_style$$8$$, $selectors$$8_sizeDiv$$, $styles$$1$$, $callbackInfo$$) {
    null == $MasonryLayoutCommon$$.$_agentTypeAndVersion$ && ($MasonryLayoutCommon$$.$_agentTypeAndVersion$ = $MasonryLayoutCommon$$.$_getAgentTypeAndVersion$());
    this.$_elem$ = $elem$$78$$;
    this.$_rtl$ = $rtl$$2_sizeDivWrapper$$;
    this.$_automationEnabled$ = $automationEnabled_style$$8$$;
    $selectors$$8_sizeDiv$$ && $selectors$$8_sizeDiv$$.$tiles$ && (this.$_tilesSelector$ = $selectors$$8_sizeDiv$$.$tiles$);
    $styles$$1$$ && ($styles$$1$$.$transitionComponentResizeToStyleClass$ && (this.$_transitionComponentResizeToStyleClass$ = $styles$$1$$.$transitionComponentResizeToStyleClass$), $styles$$1$$.$transitionComponentResizeToFastStyleClass$ && (this.$_transitionComponentResizeToFastStyleClass$ = $styles$$1$$.$transitionComponentResizeToFastStyleClass$), $styles$$1$$.$transitionMoveToStyleClass$ && (this.$_transitionMoveToStyleClass$ = $styles$$1$$.$transitionMoveToStyleClass$), $styles$$1$$.$transitionMoveToFastStyleClass$ && 
    (this.$_transitionMoveToFastStyleClass$ = $styles$$1$$.$transitionMoveToFastStyleClass$), $styles$$1$$.$transitionHideFromStyleClass$ && (this.$_transitionHideFromStyleClass$ = $styles$$1$$.$transitionHideFromStyleClass$), $styles$$1$$.$transitionHideToStyleClass$ && (this.$_transitionHideToStyleClass$ = $styles$$1$$.$transitionHideToStyleClass$), $styles$$1$$.$transitionShowFromStyleClass$ && (this.$_transitionShowFromStyleClass$ = $styles$$1$$.$transitionShowFromStyleClass$), $styles$$1$$.$transitionShowToStyleClass$ && 
    (this.$_transitionShowToStyleClass$ = $styles$$1$$.$transitionShowToStyleClass$), $styles$$1$$.$transitionResizeToStyleClass$ && (this.$_transitionResizeToStyleClass$ = $styles$$1$$.$transitionResizeToStyleClass$));
    $callbackInfo$$ && ($callbackInfo$$.$addStyleClassName$ && (this.$_addStyleClassNameFunc$ = $callbackInfo$$.$addStyleClassName$), $callbackInfo$$.$removeStyleClassName$ && (this.$_removeStyleClassNameFunc$ = $callbackInfo$$.$removeStyleClassName$), $callbackInfo$$.$getSizeStyleClassName$ && (this.$_getSizeStyleClassNameFunc$ = $callbackInfo$$.$getSizeStyleClassName$), $callbackInfo$$.$getTileSpan$ && (this.$_getTileSpanFunc$ = $callbackInfo$$.$getTileSpan$), $callbackInfo$$.$showTileOnEndFunc$ && 
    (this.$_showTileOnEndFunc$ = $callbackInfo$$.$showTileOnEndFunc$), $callbackInfo$$.$hideTileOnEndFunc$ && (this.$_hideTileOnEndFunc$ = $callbackInfo$$.$hideTileOnEndFunc$), $callbackInfo$$.$layoutOnEndFunc$ && (this.$_layoutOnEndFunc$ = $callbackInfo$$.$layoutOnEndFunc$), $callbackInfo$$.$layoutCycleOnStartFunc$ && (this.$_layoutCycleOnStartFunc$ = $callbackInfo$$.$layoutCycleOnStartFunc$), $callbackInfo$$.$layoutCycleOnEndFunc$ && (this.$_layoutCycleOnEndFunc$ = $callbackInfo$$.$layoutCycleOnEndFunc$), 
    $callbackInfo$$.$sortTilesOriginalOrderFunc$ && (this.$_sortTilesOriginalOrderFunc$ = $callbackInfo$$.$sortTilesOriginalOrderFunc$), $callbackInfo$$.$subtreeAttached$ && (this.$_subtreeAttachedFunc$ = $callbackInfo$$.$subtreeAttached$), $callbackInfo$$.$subtreeDetached$ && (this.$_subtreeDetachedFunc$ = $callbackInfo$$.$subtreeDetached$));
    $rtl$$2_sizeDivWrapper$$ = document.createElement("div");
    $automationEnabled_style$$8$$ = $rtl$$2_sizeDivWrapper$$.style;
    $automationEnabled_style$$8$$.display = "inline-block";
    $automationEnabled_style$$8$$.overflow = "hidden";
    $automationEnabled_style$$8$$.visibility = "hidden";
    $selectors$$8_sizeDiv$$ = document.createElement("div");
    $automationEnabled_style$$8$$ = $selectors$$8_sizeDiv$$.style;
    $automationEnabled_style$$8$$.display = "inline-block";
    $rtl$$2_sizeDivWrapper$$.appendChild($selectors$$8_sizeDiv$$);
    $elem$$78$$.insertBefore($rtl$$2_sizeDivWrapper$$, $elem$$78$$.firstChild);
    this.$_sizeDivWrapper$ = $rtl$$2_sizeDivWrapper$$;
    this.$_sizeDiv$ = $selectors$$8_sizeDiv$$;
    var $self$$135$$ = this;
    this.$_handleTransitionEndFunc$ = function $this$$_handleTransitionEndFunc$$($event$$321$$) {
      $self$$135$$.$_handleTransitionEnd$($event$$321$$);
    };
    this.$_hideTilesFunc$ = function $this$$_hideTilesFunc$$() {
      $self$$135$$.$_hideTiles$();
    };
    this.$_handleHideTransitionEndFunc$ = function $this$$_handleHideTransitionEndFunc$$($event$$322$$) {
      $self$$135$$.$_handleHideTransitionEnd$($event$$322$$);
    };
    this.$_handleShowTransitionEndFunc$ = function $this$$_handleShowTransitionEndFunc$$($event$$323$$) {
      $self$$135$$.$_handleShowTransitionEnd$($event$$323$$);
    };
  }
  (function() {
    function $_getNextElement$$($currElem$$1_elem$$110_nextElem$$2$$) {
      for (;$currElem$$1_elem$$110_nextElem$$2$$;) {
        $currElem$$1_elem$$110_nextElem$$2$$ = $currElem$$1_elem$$110_nextElem$$2$$.nextSibling;
        var $bVisible$$ = !0;
        if ($currElem$$1_elem$$110_nextElem$$2$$) {
          var $style$$15$$ = $currElem$$1_elem$$110_nextElem$$2$$.style;
          !$style$$15$$ || $style$$15$$.visibility !== $_HIDDEN$$1$$ && $style$$15$$.display !== $_NONE$$1$$ || ($bVisible$$ = !1);
        }
        if ($currElem$$1_elem$$110_nextElem$$2$$ && 1 === $currElem$$1_elem$$110_nextElem$$2$$.nodeType && $bVisible$$) {
          return $currElem$$1_elem$$110_nextElem$$2$$;
        }
      }
      return null;
    }
    function $_findContainingTile$$($elem$$109$$, $rootElem$$) {
      for (var $currElem$$ = $elem$$109$$;$currElem$$;) {
        var $parentElem$$4_style$$14$$ = $currElem$$.style;
        if ($parentElem$$4_style$$14$$ && ($parentElem$$4_style$$14$$.visibility === $_HIDDEN$$1$$ || $parentElem$$4_style$$14$$.display === $_NONE$$1$$)) {
          break;
        }
        $parentElem$$4_style$$14$$ = $currElem$$.parentNode;
        if ($parentElem$$4_style$$14$$ === $rootElem$$) {
          return $currElem$$;
        }
        $currElem$$ = $parentElem$$4_style$$14$$;
      }
      return null;
    }
    function $_compareTilesOriginalOrder$$($tile1$$, $tile2$$) {
      return $tile2$$.$_jetDataMasonryOriginalOrder$ < $tile1$$.$_jetDataMasonryOriginalOrder$ ? 1 : $tile1$$.$_jetDataMasonryOriginalOrder$ < $tile2$$.$_jetDataMasonryOriginalOrder$ ? -1 : 0;
    }
    function $_sortTilesOriginalOrder$$($arTiles$$3$$) {
      $arTiles$$3$$ && $arTiles$$3$$.sort($_compareTilesOriginalOrder$$);
      return $arTiles$$3$$;
    }
    function $_getTileSpan$$($elem$$108_tile$$11$$) {
      var $span$$ = null;
      $elem$$108_tile$$11$$ = $$$$24$$($elem$$108_tile$$11$$);
      $elem$$108_tile$$11$$.hasClass("oj-masonrylayout-tile-1x1") ? $span$$ = {colSpan:1, rowSpan:1} : $elem$$108_tile$$11$$.hasClass("oj-masonrylayout-tile-2x1") ? $span$$ = {colSpan:2, rowSpan:1} : $elem$$108_tile$$11$$.hasClass("oj-masonrylayout-tile-3x1") ? $span$$ = {colSpan:3, rowSpan:1} : $elem$$108_tile$$11$$.hasClass("oj-masonrylayout-tile-1x2") ? $span$$ = {colSpan:1, rowSpan:2} : $elem$$108_tile$$11$$.hasClass("oj-masonrylayout-tile-1x3") ? $span$$ = {colSpan:1, rowSpan:3} : $elem$$108_tile$$11$$.hasClass("oj-masonrylayout-tile-2x2") ? 
      $span$$ = {colSpan:2, rowSpan:2} : $elem$$108_tile$$11$$.hasClass("oj-masonrylayout-tile-2x3") ? $span$$ = {colSpan:2, rowSpan:3} : $elem$$108_tile$$11$$.hasClass("oj-masonrylayout-tile-3x2") && ($span$$ = {colSpan:3, rowSpan:2});
      return $span$$;
    }
    function $_getSizeStyleClassName$$($elem$$107_tile$$10$$) {
      var $str$$21$$ = null;
      $elem$$107_tile$$10$$ = $$$$24$$($elem$$107_tile$$10$$);
      $elem$$107_tile$$10$$.hasClass("oj-masonrylayout-tile-1x1") ? $str$$21$$ = "oj-masonrylayout-tile-1x1" : $elem$$107_tile$$10$$.hasClass("oj-masonrylayout-tile-2x1") ? $str$$21$$ = "oj-masonrylayout-tile-2x1" : $elem$$107_tile$$10$$.hasClass("oj-masonrylayout-tile-3x1") ? $str$$21$$ = "oj-masonrylayout-tile-3x1" : $elem$$107_tile$$10$$.hasClass("oj-masonrylayout-tile-1x2") ? $str$$21$$ = "oj-masonrylayout-tile-1x2" : $elem$$107_tile$$10$$.hasClass("oj-masonrylayout-tile-1x3") ? $str$$21$$ = 
      "oj-masonrylayout-tile-1x3" : $elem$$107_tile$$10$$.hasClass("oj-masonrylayout-tile-2x2") ? $str$$21$$ = "oj-masonrylayout-tile-2x2" : $elem$$107_tile$$10$$.hasClass("oj-masonrylayout-tile-2x3") ? $str$$21$$ = "oj-masonrylayout-tile-2x3" : $elem$$107_tile$$10$$.hasClass("oj-masonrylayout-tile-3x2") && ($str$$21$$ = "oj-masonrylayout-tile-3x2");
      return $str$$21$$;
    }
    function $_removeStyleClassName$$($elem$$106$$, $styleClass$$7$$) {
      $$$$24$$($elem$$106$$).removeClass($styleClass$$7$$);
    }
    function $_addStyleClassName$$($elem$$105$$, $styleClass$$6$$) {
      $$$$24$$($elem$$105$$).addClass($styleClass$$6$$);
    }
    $oj$$25$$.$__registerWidget$("oj.ojMasonryLayout", $$$$24$$.oj.baseComponent, {defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{reorderHandle:null, beforeInsert:null, insert:null, beforeRemove:null, remove:null, beforeResize:null, resize:null, beforeReorder:null, reorder:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-masonrylayout oj-component");
      this.options.disabled && $oj$$25$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$1$$);
      this.$reorderHandleEventNamespace$ = this.eventNamespace + "ReorderHandle";
      this.$_menu$ = {};
      this.$_menu$.$usermenu$ = !1;
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemCut$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_applyMenu$();
      this.$_setup$(!0);
    }, refresh:function() {
      this._super();
      var $bRecreate$$ = "rtl" === this.$_GetReadingDirection$() !== this.$_bRTL$;
      $bRecreate$$ && this.$_destroyMLCommon$();
      this.$_setup$($bRecreate$$);
    }, $_NotifyShown$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyAttached$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyContextMenuGesture$:function($menu$$9$$, $event$$324$$, $eventType$$43$$) {
      this.$_prepareContextMenuBeforeOpen$($event$$324$$);
      this.$_OpenContextMenu$($event$$324$$, $eventType$$43$$, {launcher:$$$$24$$($event$$324$$.target).closest(":tabbable")});
    }, $_setup$:function($isInit$$1$$) {
      if (this.$_canCalculateSizes$()) {
        this.$_needsSetup$ = null;
        this.$_bRTL$ = "rtl" === this.$_GetReadingDirection$();
        this.$_bTouchSupported$ = $oj$$25$$.$DomUtils$.$isTouchSupported$();
        var $elem$$80_oldIsInit$$1$$ = this.element, $options$$329$$ = this.options;
        if ($isInit$$1$$) {
          var $self$$136$$ = this;
          this.$_showTileOnEndFunc$ = function $this$$_showTileOnEndFunc$$($elem$$81$$) {
            $self$$136$$.$_showTileOnEnd$($elem$$81$$);
          };
          this.$_hideTileOnEndFunc$ = function $this$$_hideTileOnEndFunc$$($elem$$82$$) {
            $self$$136$$.$_hideTileOnEnd$($elem$$82$$);
          };
          this.$_layoutOnEndFunc$ = function $this$$_layoutOnEndFunc$$() {
            $self$$136$$.$_layoutOnEnd$();
          };
          this.$_layoutCycleOnStartFunc$ = function $this$$_layoutCycleOnStartFunc$$() {
            $self$$136$$.$_layoutCycleOnStart$();
          };
          this.$_layoutCycleOnEndFunc$ = function $this$$_layoutCycleOnEndFunc$$() {
            $self$$136$$.$_layoutCycleOnEnd$();
          };
          if (!this.$_mlCommon$) {
            var $selectors$$9$$ = {};
            $selectors$$9$$.$tiles$ = $_TILE_SELECTOR$$;
            var $styles$$2$$ = {$transitionComponentResizeToStyleClass$:"oj-masonrylayout-transition-resize-to", $transitionComponentResizeToFastStyleClass$:"oj-masonrylayout-transition-resize-to-fast", $transitionMoveToStyleClass$:"oj-masonrylayout-tile-transition-move-to", $transitionMoveToFastStyleClass$:"oj-masonrylayout-tile-transition-move-to-fast", $transitionHideFromStyleClass$:"oj-masonrylayout-tile-transition-hide-from", $transitionHideToStyleClass$:"oj-masonrylayout-tile-transition-hide-to"};
            $styles$$2$$.$transitionShowFromStyleClass$ = $_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$;
            $styles$$2$$.$transitionShowToStyleClass$ = "oj-masonrylayout-tile-transition-show-to";
            $styles$$2$$.$transitionResizeToStyleClass$ = "oj-masonrylayout-tile-transition-resize-to";
            var $callbackInfo$$1$$ = {};
            $callbackInfo$$1$$.$addStyleClassName$ = $_addStyleClassName$$;
            $callbackInfo$$1$$.$removeStyleClassName$ = $_removeStyleClassName$$;
            $callbackInfo$$1$$.$getSizeStyleClassName$ = $_getSizeStyleClassName$$;
            $callbackInfo$$1$$.$getTileSpan$ = $_getTileSpan$$;
            $callbackInfo$$1$$.$showTileOnEndFunc$ = this.$_showTileOnEndFunc$;
            $callbackInfo$$1$$.$hideTileOnEndFunc$ = this.$_hideTileOnEndFunc$;
            $callbackInfo$$1$$.$layoutOnEndFunc$ = this.$_layoutOnEndFunc$;
            $callbackInfo$$1$$.$layoutCycleOnStartFunc$ = this.$_layoutCycleOnStartFunc$;
            $callbackInfo$$1$$.$layoutCycleOnEndFunc$ = this.$_layoutCycleOnEndFunc$;
            $callbackInfo$$1$$.$sortTilesOriginalOrderFunc$ = $_sortTilesOriginalOrder$$;
            $callbackInfo$$1$$.$subtreeAttached$ = $oj$$25$$.Components.$subtreeAttached$;
            $callbackInfo$$1$$.$subtreeDetached$ = $oj$$25$$.Components.$subtreeDetached$;
            this.$_saveTilesOriginalOrder$();
            this.$_mlCommon$ = new $MasonryLayoutCommon$$($elem$$80_oldIsInit$$1$$[0], this.$_bRTL$, "enabled" === $oj$$25$$.$Config$.$getAutomationMode$(), $selectors$$9$$, $styles$$2$$, $callbackInfo$$1$$);
          }
          this.$_handleDragStartFunc$ = function $this$$_handleDragStartFunc$$($event$$325$$) {
            $self$$136$$.$_handleDragStart$($event$$325$$);
          };
          this.$_handleDragEnterFunc$ = function $this$$_handleDragEnterFunc$$($event$$326$$) {
            $self$$136$$.$_handleDragEnter$($event$$326$$);
          };
          this.$_handleDragOverFunc$ = function $this$$_handleDragOverFunc$$($event$$327$$) {
            $self$$136$$.$_handleDragOver$($event$$327$$);
          };
          this.$_handleDragLeaveFunc$ = function $this$$_handleDragLeaveFunc$$($event$$328$$) {
            $self$$136$$.$_handleDragLeave$($event$$328$$);
          };
          this.$_handleDragEndFunc$ = function $this$$_handleDragEndFunc$$($event$$329$$) {
            $self$$136$$.$_handleDragEnd$($event$$329$$);
          };
          this.$_handleDropFunc$ = function $this$$_handleDropFunc$$($event$$330$$) {
            $self$$136$$.$_handleDrop$($event$$330$$);
          };
          $options$$329$$.reorderHandle && this.$_setupReorderHandles$();
        }
        this.$_mlCommon$.$setup$($isInit$$1$$);
        $isInit$$1$$ && (this.$_handleResizeFunc$ = function $this$$_handleResizeFunc$$() {
          $self$$136$$.$_handleResize$();
        }, $oj$$25$$.$DomUtils$.$addResizeListener$($elem$$80_oldIsInit$$1$$[0], this.$_handleResizeFunc$));
      } else {
        $elem$$80_oldIsInit$$1$$ = !1, this.$_needsSetup$ && ($elem$$80_oldIsInit$$1$$ = this.$_needsSetup$[0]), this.$_needsSetup$ = [$isInit$$1$$ || $elem$$80_oldIsInit$$1$$];
      }
    }, _destroy:function() {
      this.$_clearMenu$();
      var $elem$$83$$ = this.element;
      $oj$$25$$.$DomUtils$.$removeResizeListener$($elem$$83$$[0], this.$_handleResizeFunc$);
      this.$_handleResizeFunc$ = null;
      this.$_restoreTilesOriginalOrder$();
      for (var $children$$6$$ = this.$_getTileElements$(), $numChildren$$ = $children$$6$$.length, $i$$328$$ = 0;$i$$328$$ < $numChildren$$;$i$$328$$++) {
        delete $children$$6$$[$i$$328$$].$_jetDataMasonryOriginalOrder$;
      }
      this.$_destroyMLCommon$();
      $elem$$83$$.removeClass("oj-masonrylayout oj-component");
      this.options.reorderHandle && this.$_tearDownReorderHandles$();
      this.$_arTilesToInsert$ = this.$_layoutCycleOnEndFunc$ = this.$_layoutCycleOnStartFunc$ = this.$_layoutOnEndFunc$ = this.$_hideTileOnEndFunc$ = this.$_showTileOnEndFunc$ = this.$_handleDropFunc$ = this.$_handleDragEndFunc$ = this.$_handleDragLeaveFunc$ = this.$_handleDragOverFunc$ = this.$_handleDragEnterFunc$ = this.$_handleDragStartFunc$ = null;
      this._super();
    }, _setOption:function($key$$137$$, $value$$234$$, $flags$$31$$) {
      var $bReorderHandle$$ = !1;
      switch($key$$137$$) {
        case "reorderHandle":
          this.$_tearDownReorderHandles$();
          $bReorderHandle$$ = !0;
          break;
        case "disabled":
          $oj$$25$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$1$$);
          break;
        case "contextMenu":
          $oj$$25$$.$DomUtils$.$isTouchSupported$() || (this.$_clearMenu$(), $value$$234$$ && this.$_initMenu$($value$$234$$));
      }
      this._super($key$$137$$, $value$$234$$, $flags$$31$$);
      $bReorderHandle$$ && $value$$234$$ && this.$_setupReorderHandles$();
    }, resizeTile:function($selector$$28$$, $sizeStyleClass$$) {
      var $mlCommon$$1$$ = this.$_mlCommon$;
      $mlCommon$$1$$.$isInLayoutCycle$() && $mlCommon$$1$$.$finishLayoutCycle$();
      var $jqElem$$1$$ = $$$$24$$($selector$$28$$), $elem$$85$$ = $jqElem$$1$$[0], $prevSizeStyleClass$$ = $_getSizeStyleClassName$$($elem$$85$$);
      if ($sizeStyleClass$$ == $prevSizeStyleClass$$) {
        throw Error("JET MasonryLayout: Unable to resize child " + $selector$$28$$ + " to style class " + $sizeStyleClass$$ + " because " + $sizeStyleClass$$ + " is already applied.");
      }
      !1 !== this._trigger("beforeResize", null, {tile:$jqElem$$1$$, previousSizeStyleClass:$prevSizeStyleClass$$, sizeStyleClass:$sizeStyleClass$$}) && (this.$_arResizingTiles$ || (this.$_arResizingTiles$ = []), this.$_arResizingTiles$.push($elem$$85$$, $prevSizeStyleClass$$, $sizeStyleClass$$), $mlCommon$$1$$.resizeTile($selector$$28$$, $sizeStyleClass$$));
    }, insertTile:function($selector$$29$$, $index$$203$$) {
      var $mlCommon$$2$$ = this.$_mlCommon$;
      $mlCommon$$2$$.$isInLayoutCycle$() && $mlCommon$$2$$.$finishLayoutCycle$();
      isNaN($index$$203$$) && ($index$$203$$ = -1);
      var $jqElem$$2_style$$9$$ = $$$$24$$($selector$$29$$), $elem$$86$$ = $jqElem$$2_style$$9$$[0];
      !1 !== this._trigger("beforeInsert", null, {tile:$jqElem$$2_style$$9$$, index:$index$$203$$}) && ($elem$$86$$.$_jetDataTileInsertIndex$ = $index$$203$$, $mlCommon$$2$$.$isAnimationEnabled$() && $jqElem$$2_style$$9$$.addClass($_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$), $jqElem$$2_style$$9$$ = $elem$$86$$.style, $jqElem$$2_style$$9$$.top = "-1px", this.$_bRTL$ ? $jqElem$$2_style$$9$$.right = "-1px" : $jqElem$$2_style$$9$$.left = "-1px", this.$_insertTileOriginalOrder$($elem$$86$$, 
      $index$$203$$), $mlCommon$$2$$.$insertTileDomElem$($elem$$86$$, $index$$203$$), $oj$$25$$.Components.$subtreeAttached$($elem$$86$$), this.$_arTilesToInsert$ || (this.$_arTilesToInsert$ = []), this.$_arTilesToInsert$.push($selector$$29$$));
    }, removeTile:function($selector$$30$$) {
      var $mlCommon$$3$$ = this.$_mlCommon$;
      $mlCommon$$3$$.$isInLayoutCycle$() && $mlCommon$$3$$.$finishLayoutCycle$();
      var $jqInfolet$$ = $$$$24$$($selector$$30$$), $index$$204_infolet$$ = $jqInfolet$$[0];
      if ($oj$$25$$.$FocusUtils$.$containsFocus$($index$$204_infolet$$)) {
        var $children$$7$$ = this.$_getTileElements$(!0), $index$$204_infolet$$ = $children$$7$$.indexOf($index$$204_infolet$$);
        0 < $index$$204_infolet$$ && (this.$_deletingTileWithFocusPrev$ = $children$$7$$[$index$$204_infolet$$ - 1]);
      }
      !1 !== this._trigger("beforeRemove", null, {tile:$jqInfolet$$}) && $mlCommon$$3$$.$hideTile$($selector$$30$$);
    }, $_handleResize$:function() {
      this.$_bDragging$ || this.$_inLayoutCycle$ || this.$_mlCommon$.$resizeNotify$();
    }, $_showTileOnEnd$:function($elem$$87_eventData$$11$$) {
      var $index$$205$$ = $elem$$87_eventData$$11$$.$_jetDataTileInsertIndex$;
      delete $elem$$87_eventData$$11$$.$_jetDataTileInsertIndex$;
      $elem$$87_eventData$$11$$ = {tile:$$$$24$$($elem$$87_eventData$$11$$), index:$index$$205$$};
      this._trigger("insert", null, $elem$$87_eventData$$11$$);
    }, $_hideTileOnEnd$:function($elem$$88_eventData$$12$$) {
      $oj$$25$$.Components.$subtreeDetached$($elem$$88_eventData$$12$$);
      $elem$$88_eventData$$12$$.parentNode.removeChild($elem$$88_eventData$$12$$);
      this.$_removeTileOriginalOrder$($elem$$88_eventData$$12$$);
      $elem$$88_eventData$$12$$ = {tile:$$$$24$$($elem$$88_eventData$$12$$)};
      this._trigger("remove", null, $elem$$88_eventData$$12$$);
    }, $_layoutOnEnd$:function() {
      if (this.$_arTilesToInsert$) {
        for (var $arResizingTiles$$1_mlCommon$$5$$ = this.$_mlCommon$, $arTilesToInsert$$1_eventData$$13_prevSizeStyleClass$$1$$ = this.$_arTilesToInsert$, $i$$329$$ = 0;$i$$329$$ < $arTilesToInsert$$1_eventData$$13_prevSizeStyleClass$$1$$.length;$i$$329$$++) {
          $arResizingTiles$$1_mlCommon$$5$$.$showTile$($arTilesToInsert$$1_eventData$$13_prevSizeStyleClass$$1$$[$i$$329$$]);
        }
        this.$_arTilesToInsert$ = null;
      }
      if (this.$_arResizingTiles$) {
        $arResizingTiles$$1_mlCommon$$5$$ = this.$_arResizingTiles$;
        for ($i$$329$$ = 0;$i$$329$$ < $arResizingTiles$$1_mlCommon$$5$$.length;$i$$329$$ += 3) {
          var $arTilesToInsert$$1_eventData$$13_prevSizeStyleClass$$1$$ = $arResizingTiles$$1_mlCommon$$5$$[$i$$329$$ + 1], $sizeStyleClass$$1$$ = $arResizingTiles$$1_mlCommon$$5$$[$i$$329$$ + 2], $arTilesToInsert$$1_eventData$$13_prevSizeStyleClass$$1$$ = {tile:$$$$24$$($arResizingTiles$$1_mlCommon$$5$$[$i$$329$$]), previousSizeStyleClass:$arTilesToInsert$$1_eventData$$13_prevSizeStyleClass$$1$$, sizeStyleClass:$sizeStyleClass$$1$$};
          this._trigger("resize", null, $arTilesToInsert$$1_eventData$$13_prevSizeStyleClass$$1$$);
        }
        this.$_arResizingTiles$ = null;
      }
      this.$_bDragging$ && (this.$_bDragMoveTransition$ ? this.$_handleDragMoveTransitionEnd$() : this.$_bDragEndTransition$ && this.$_handleDragEndTransitionEnd$());
    }, $_layoutCycleOnStart$:function() {
      this.$_inLayoutCycle$ = !0;
      this.$_layoutStartActiveDomElem$ = null;
      var $activeDomElem$$ = document.activeElement;
      $activeDomElem$$ && $oj$$25$$.$DomUtils$.$isAncestor$(this.element[0], $activeDomElem$$) && (this.$_layoutStartActiveDomElem$ = $activeDomElem$$);
    }, $_layoutCycleOnEnd$:function() {
      this.$_inLayoutCycle$ = !1;
      var $children$$8_elem$$90$$ = this.element[0];
      if (this.$_layoutStartActiveDomElem$) {
        var $layoutStartActiveDomElem_tile$$ = this.$_layoutStartActiveDomElem$;
        this.$_layoutStartActiveDomElem$ = null;
        if (this.$_deletingTileWithFocusPrev$) {
          if ($layoutStartActiveDomElem_tile$$ = this.$_deletingTileWithFocusPrev$, this.$_deletingTileWithFocusPrev$ = null, $layoutStartActiveDomElem_tile$$ && $oj$$25$$.$DomUtils$.$isAncestor$($children$$8_elem$$90$$, $layoutStartActiveDomElem_tile$$)) {
            var $children$$8_elem$$90$$ = this.$_getTileElements$($children$$8_elem$$90$$, !0), $index$$206$$ = $children$$8_elem$$90$$.indexOf($layoutStartActiveDomElem_tile$$);
            0 <= $index$$206$$ && $index$$206$$ < $children$$8_elem$$90$$.length - 1 ? $oj$$25$$.$FocusUtils$.$focusFirstTabStop$($children$$8_elem$$90$$[$index$$206$$ + 1]) : $oj$$25$$.$FocusUtils$.$focusFirstTabStop$($layoutStartActiveDomElem_tile$$);
          }
        } else {
          $oj$$25$$.$DomUtils$.$isAncestor$($children$$8_elem$$90$$, $layoutStartActiveDomElem_tile$$) ? $oj$$25$$.$FocusUtils$.$focusElement$($layoutStartActiveDomElem_tile$$) : $oj$$25$$.$FocusUtils$.$focusFirstTabStop$($children$$8_elem$$90$$);
        }
      }
    }, $_destroyMLCommon$:function() {
      var $mlCommon$$6$$ = this.$_mlCommon$;
      $mlCommon$$6$$ && $mlCommon$$6$$.destroy();
      this.$_mlCommon$ = null;
    }, $_canCalculateSizes$:function() {
      var $div$$4$$ = document.createElement("div"), $elem$$91_style$$10$$ = $div$$4$$.style;
      $elem$$91_style$$10$$.width = "10px";
      $elem$$91_style$$10$$.height = "10px";
      $elem$$91_style$$10$$ = this.element[0];
      $elem$$91_style$$10$$.appendChild($div$$4$$);
      var $bCanCalcSizes$$1$$ = !1;
      try {
        $bCanCalcSizes$$1$$ = 0 < $div$$4$$.offsetWidth && 0 < $div$$4$$.offsetHeight;
      } catch ($e$$96$$) {
      }
      $elem$$91_style$$10$$.removeChild($div$$4$$);
      return $bCanCalcSizes$$1$$;
    }, $_getTileElements$:function($excludeDropSite$$) {
      for (var $children$$9$$ = this.element.children($_TILE_SELECTOR$$), $numChildren$$1$$ = $children$$9$$.length, $arChildren$$ = [], $i$$330$$ = 0;$i$$330$$ < $numChildren$$1$$;$i$$330$$++) {
        var $child$$7$$ = $children$$9$$[$i$$330$$];
        if (!$excludeDropSite$$ || $excludeDropSite$$ && $child$$7$$ !== this.$_dropSite$) {
          var $style$$11$$ = $child$$7$$.style;
          $style$$11$$.visibility !== $_HIDDEN$$1$$ && $style$$11$$.display !== $_NONE$$1$$ && $arChildren$$.push($child$$7$$);
        }
      }
      return $arChildren$$;
    }, $_saveTilesOriginalOrder$:function() {
      var $arTiles$$ = this.$_getTileElements$();
      if ($arTiles$$) {
        for (var $i$$331$$ = 0;$i$$331$$ < $arTiles$$.length;$i$$331$$++) {
          var $tile$$1$$ = $arTiles$$[$i$$331$$];
          $tile$$1$$.$_jetDataMasonryOriginalOrder$ || ($tile$$1$$.$_jetDataMasonryOriginalOrder$ = $i$$331$$ + 1);
        }
      }
    }, $_restoreTilesOriginalOrder$:function() {
      var $children$$10$$ = this.$_getTileElements$(), $sortedChildren$$ = this.$_getTileElements$();
      $_sortTilesOriginalOrder$$($sortedChildren$$);
      for (var $i$$332$$ = 0;$i$$332$$ < $children$$10$$.length;$i$$332$$++) {
        var $child$$8_sortedChildIndex$$ = $children$$10$$[$i$$332$$], $sortedChild$$ = $sortedChildren$$[$i$$332$$];
        $child$$8_sortedChildIndex$$ != $sortedChild$$ && ($oj$$25$$.Components.$subtreeDetached$($sortedChild$$), $child$$8_sortedChildIndex$$.parentNode.insertBefore($sortedChild$$, $child$$8_sortedChildIndex$$), $oj$$25$$.Components.$subtreeAttached$($sortedChild$$), $child$$8_sortedChildIndex$$ = $children$$10$$.indexOf($sortedChild$$), $child$$8_sortedChildIndex$$ > $i$$332$$ && ($children$$10$$.splice($child$$8_sortedChildIndex$$, 1), $children$$10$$.splice($i$$332$$, 0, $sortedChild$$)));
      }
    }, $_insertTileOriginalOrder$:function($insertedTile$$, $index$$207$$) {
      var $arTiles$$1$$ = this.$_getTileElements$();
      0 > $index$$207$$ && ($index$$207$$ = $arTiles$$1$$.length);
      if ($arTiles$$1$$) {
        for (var $i$$333$$ = 0;$i$$333$$ < $arTiles$$1$$.length;$i$$333$$++) {
          var $tile$$2$$ = $arTiles$$1$$[$i$$333$$];
          $tile$$2$$.$_jetDataMasonryOriginalOrder$ && $tile$$2$$.$_jetDataMasonryOriginalOrder$ >= $index$$207$$ + 1 && $tile$$2$$.$_jetDataMasonryOriginalOrder$++;
        }
      }
      $insertedTile$$.$_jetDataMasonryOriginalOrder$ = $index$$207$$ + 1;
    }, $_removeTileOriginalOrder$:function($removedTile$$) {
      if ($removedTile$$.$_jetDataMasonryOriginalOrder$) {
        var $arTiles$$2$$ = this.$_getTileElements$();
        if ($arTiles$$2$$) {
          for (var $i$$334$$ = 0;$i$$334$$ < $arTiles$$2$$.length;$i$$334$$++) {
            var $tile$$3$$ = $arTiles$$2$$[$i$$334$$];
            $tile$$3$$.$_jetDataMasonryOriginalOrder$ && $tile$$3$$.$_jetDataMasonryOriginalOrder$ > $removedTile$$.$_jetDataMasonryOriginalOrder$ && $tile$$3$$.$_jetDataMasonryOriginalOrder$--;
          }
        }
        delete $removedTile$$.$_jetDataMasonryOriginalOrder$;
      }
    }, $_initMenu$:function($newVal$$) {
      var $$m_menu$$10$$ = null, $dm_t$$1$$ = null;
      $newVal$$ || this.options.contextMenu || ($$m_menu$$10$$ = this.element.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m_menu$$10$$);
      if ($newVal$$ || this.options.contextMenu) {
        $$m_menu$$10$$ = $newVal$$ || this.options.contextMenu;
        $dm_t$$1$$ = $$$$24$$.type($$m_menu$$10$$);
        if ("function" == $dm_t$$1$$) {
          try {
            $$m_menu$$10$$ = $$m_menu$$10$$();
          } catch ($e$$97$$) {
            $$m_menu$$10$$ = null;
          }
          $dm_t$$1$$ = $$$$24$$.type($$m_menu$$10$$);
        }
        if ("string" === $dm_t$$1$$) {
          if ($$m_menu$$10$$ = $$$$24$$($$m_menu$$10$$)) {
            $$m_menu$$10$$.css("display", $_NONE$$1$$);
            $dm_t$$1$$ = this.$_menu$;
            if (!$dm_t$$1$$) {
              return;
            }
            $dm_t$$1$$.$$container$ = $$m_menu$$10$$;
            $dm_t$$1$$.$usermenu$ = !0;
          }
          this.$_menu$.$usermenu$ && $newVal$$ && this.$_applyMenu$();
        }
      }
    }, $_applyMenu$:function() {
      if (this.$_menu$ && this.$_menu$.$usermenu$ && this.options.reorderHandle) {
        var $$menuContainer$$ = this.$_menu$.$$container$, $self$$137$$ = this;
        $$menuContainer$$.on("ojselect", $$$$24$$.proxy(this.$_handleContextMenuSelect$, this));
        var $bChanged$$ = !1;
        $$menuContainer$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$24$$(this).children("a").length) {
            var $command$$12$$ = $$$$24$$(this).attr("data-oj-command").slice(17);
            $$$$24$$(this).replaceWith($self$$137$$.$_buildContextMenuItem$($command$$12$$));
            $$$$24$$(this).addClass("oj-menu-item");
            $bChanged$$ = !0;
          }
        });
        $bChanged$$ && $$menuContainer$$.ojMenu("refresh");
        this.$_menu$.$$elemCut$ = $$menuContainer$$.find("#" + $_OJMASONRYLAYOUTCUT$$);
        this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$.find("#" + $_OJMASONRYLAYOUTPASTEBEFORE$$);
        this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$.find("#" + $_OJMASONRYLAYOUTPASTEAFTER$$);
      }
    }, $_clearMenu$:function() {
      var $menu$$11$$ = this.$_menu$;
      $menu$$11$$ && $menu$$11$$.$usermenu$ && ($menu$$11$$.$usermenu$ = !1, $menu$$11$$.$$container$.off("ojselect"), $menu$$11$$.$$container$ = null);
    }, $_prepareContextMenuBeforeOpen$:function($e$$98_tile$$4$$) {
      $e$$98_tile$$4$$ = $_findContainingTile$$($e$$98_tile$$4$$.originalEvent.target, this.element[0]);
      this.$_menu$.tile = $e$$98_tile$$4$$;
      if (this.$_menu$.$usermenu$) {
        var $cutTile$$ = this.$_menu$.$cutTile$, $bRefreshMenu$$ = !1, $elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemCut$;
        if ($elemCut_elemPasteAfter_elemPasteBefore$$) {
          var $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1;
          $cutTile$$ && $e$$98_tile$$4$$ === $cutTile$$ && ($bDisable$$ = !0);
          $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        if ($elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemPasteBefore$) {
          $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1, $cutTile$$ && $e$$98_tile$$4$$ !== $cutTile$$ && $e$$98_tile$$4$$ !== $_getNextElement$$($cutTile$$) || ($bDisable$$ = !0), $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && 
          ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        if ($elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemPasteAfter$) {
          $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1, $cutTile$$ && $cutTile$$ !== $e$$98_tile$$4$$ && $cutTile$$ !== $_getNextElement$$($e$$98_tile$$4$$) || ($bDisable$$ = !0), $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && 
          ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        $bRefreshMenu$$ && this.$_menu$.$$container$.ojMenu("refresh");
      }
    }, $_buildContextMenuItem$:function($cmd_transKey$$) {
      var $id$$35$$ = $_MENU_CMD_MAP$$[$cmd_transKey$$];
      $cmd_transKey$$ = $_MENU_TRANSLATION_MAP$$[$cmd_transKey$$];
      var $label$$12$$ = $$$$24$$('\x3ca href\x3d"#"\x3e\x3c/a\x3e');
      $label$$12$$.text(this.$getTranslatedString$($cmd_transKey$$));
      $label$$12$$.wrap("\x3cli id\x3d" + $id$$35$$ + "\x3e\x3c/li\x3e");
      return $label$$12$$.parent();
    }, $_menuCut$:function($obj$$55$$) {
      $obj$$55$$ && (this.$_menu$.$cutTile$ = $obj$$55$$);
    }, $_menuPaste$:function($obj$$56$$, $pasteBefore$$) {
      if ($obj$$56$$ && this.$_menu$.$cutTile$) {
        var $cutTile$$1$$ = this.$_menu$.$cutTile$;
        this.$_menu$.$cutTile$ = !1;
        this.$_doPaste$($cutTile$$1$$, $obj$$56$$, $pasteBefore$$);
      }
    }, $_doPaste$:function($cutTile$$2$$, $nextElem_pasteTile$$, $pasteBefore$$1$$) {
      var $fromIndex$$3$$ = $cutTile$$2$$.$_jetDataMasonryOriginalOrder$ - 1, $jqCutTile$$ = $$$$24$$($cutTile$$2$$);
      if (!1 !== this._trigger("beforeReorder", null, {tile:$jqCutTile$$, fromIndex:$fromIndex$$3$$})) {
        this.$_removeTileOriginalOrder$($cutTile$$2$$);
        var $toIndex$$ = $nextElem_pasteTile$$.$_jetDataMasonryOriginalOrder$ - 1;
        $pasteBefore$$1$$ || $toIndex$$++;
        var $elem$$94$$ = this.element[0];
        $pasteBefore$$1$$ || ($nextElem_pasteTile$$ = $_getNextElement$$($nextElem_pasteTile$$));
        this.$_insertTileOriginalOrder$($cutTile$$2$$, $toIndex$$);
        $elem$$94$$.insertBefore($cutTile$$2$$, $nextElem_pasteTile$$);
        this.$_mlCommon$.$setup$(!0);
        this._trigger("reorder", null, {tile:$jqCutTile$$, fromIndex:$fromIndex$$3$$, toIndex:$toIndex$$});
      }
    }, $_handleContextMenuSelect$:function($ev$$4$$, $ui$$16$$) {
      var $id$$36$$ = $ui$$16$$ ? $ui$$16$$.item.attr("id") : void 0;
      $id$$36$$ === $_OJMASONRYLAYOUTCUT$$ ? this.$_menuCut$(this.$_menu$.tile) : $id$$36$$ === $_OJMASONRYLAYOUTPASTEBEFORE$$ ? this.$_menuPaste$(this.$_menu$.tile, !0) : $id$$36$$ === $_OJMASONRYLAYOUTPASTEAFTER$$ && this.$_menuPaste$(this.$_menu$.tile, !1);
    }, $_getTileIndex$:function($tile$$5$$) {
      var $children$$11$$ = this.$_getTileElements$(!0);
      $_sortTilesOriginalOrder$$($children$$11$$);
      for (var $numChildren$$2$$ = $children$$11$$.length, $i$$335$$ = 0;$i$$335$$ < $numChildren$$2$$;$i$$335$$++) {
        if ($children$$11$$[$i$$335$$] === $tile$$5$$) {
          return $i$$335$$;
        }
      }
      return-1;
    }, $_setupReorderHandles$:function() {
      var $elem$$95$$ = this.element;
      $elem$$95$$.find(this.options.reorderHandle).attr("draggable", "true").addClass("oj-draggable");
      $elem$$95$$.on("dragstart" + this.$reorderHandleEventNamespace$, this.$_handleDragStartFunc$).on("dragenter" + this.$reorderHandleEventNamespace$, this.$_handleDragEnterFunc$).on("dragover" + this.$reorderHandleEventNamespace$, this.$_handleDragOverFunc$).on("dragleave" + this.$reorderHandleEventNamespace$, this.$_handleDragLeaveFunc$).on("dragend" + this.$reorderHandleEventNamespace$, this.$_handleDragEndFunc$).on("drop" + this.$reorderHandleEventNamespace$, this.$_handleDropFunc$);
    }, $_tearDownReorderHandles$:function() {
      var $elem$$96$$ = this.element;
      $elem$$96$$.find(this.options.reorderHandle).removeAttr("draggable").removeClass("oj-draggable");
      $elem$$96$$.off(this.$reorderHandleEventNamespace$);
    }, $_handleDragStart$:function($event$$331_originalEvent$$5$$) {
      if (this.options.reorderHandle && !this.$_bDragging$) {
        var $tile$$6$$ = $_findContainingTile$$($event$$331_originalEvent$$5$$.target, this.element[0]);
        if ($tile$$6$$) {
          var $eventData$$15_index$$208$$ = this.$_getTileIndex$($tile$$6$$);
          $tile$$6$$.$_jetDataMasonryDragSourceIndex$ = $eventData$$15_index$$208$$;
          $eventData$$15_index$$208$$ = {tile:$$$$24$$($tile$$6$$), fromIndex:$eventData$$15_index$$208$$};
          !1 !== this._trigger("beforeReorder", null, $eventData$$15_index$$208$$) && ($event$$331_originalEvent$$5$$ = $event$$331_originalEvent$$5$$.originalEvent, this.$_dragStart$($tile$$6$$, $event$$331_originalEvent$$5$$.pageX, $event$$331_originalEvent$$5$$.pageY, $event$$331_originalEvent$$5$$.dataTransfer));
        }
      }
    }, $_handleDragEnter$:function($event$$332_originalEvent$$6$$) {
      $event$$332_originalEvent$$6$$ = $event$$332_originalEvent$$6$$.originalEvent;
      var $elemUnderPoint_relatedTarget$$ = $event$$332_originalEvent$$6$$.relatedTarget, $elem$$98$$ = this.element[0], $enteringMasonryLayout$$ = !1;
      $elemUnderPoint_relatedTarget$$ ? $enteringMasonryLayout$$ = $elem$$98$$ != $elemUnderPoint_relatedTarget$$ && !$oj$$25$$.$DomUtils$.$isAncestor$($elem$$98$$, $elemUnderPoint_relatedTarget$$) : this.$_dragLeftMasonryLayout$ && ($enteringMasonryLayout$$ = ($elemUnderPoint_relatedTarget$$ = document.elementFromPoint($event$$332_originalEvent$$6$$.clientX, $event$$332_originalEvent$$6$$.clientY)) && ($elemUnderPoint_relatedTarget$$ == $elem$$98$$ || $oj$$25$$.$DomUtils$.$isAncestor$($elem$$98$$, 
      $elemUnderPoint_relatedTarget$$)));
      $enteringMasonryLayout$$ && ((this.$_dragLeftMasonryLayout$ = !1, this.$_draggedTile$) ? this.$_dropSite$ && ($$$$24$$(this.$_dropSite$).css("display", ""), this.$_mlCommon$.$setup$(!1, !0)) : $event$$332_originalEvent$$6$$.dataTransfer.dropEffect = "none");
    }, $_handleDragOver$:function($event$$333$$) {
      var $originalEvent$$7$$ = $event$$333$$.originalEvent;
      $originalEvent$$7$$.dataTransfer.dropEffect = "move";
      this.$_dragMove$($originalEvent$$7$$.pageX, $originalEvent$$7$$.clientX, $originalEvent$$7$$.clientY);
      $event$$333$$.preventDefault();
      return!1;
    }, $_handleDragLeave$:function($elem$$99_event$$334$$) {
      var $elemUnderPoint$$1_originalEvent$$8$$ = $elem$$99_event$$334$$.originalEvent, $relatedTarget$$1$$ = $elemUnderPoint$$1_originalEvent$$8$$.relatedTarget;
      $elem$$99_event$$334$$ = this.element[0];
      var $leavingMasonryLayout$$ = !1;
      $leavingMasonryLayout$$ = $relatedTarget$$1$$ ? $elem$$99_event$$334$$ != $relatedTarget$$1$$ && !$oj$$25$$.$DomUtils$.$isAncestor$($elem$$99_event$$334$$, $relatedTarget$$1$$) : ($elemUnderPoint$$1_originalEvent$$8$$ = document.elementFromPoint($elemUnderPoint$$1_originalEvent$$8$$.clientX, $elemUnderPoint$$1_originalEvent$$8$$.clientY)) && $elemUnderPoint$$1_originalEvent$$8$$ != $elem$$99_event$$334$$ && !$oj$$25$$.$DomUtils$.$isAncestor$($elem$$99_event$$334$$, $elemUnderPoint$$1_originalEvent$$8$$);
      $leavingMasonryLayout$$ && (this.$_dragLeftMasonryLayout$ = !0, this.$_dropSite$ && ($$$$24$$(this.$_dropSite$).css("display", $_NONE$$1$$), this.$_mlCommon$.$setup$(!1, !0)));
    }, $_handleDragEnd$:function() {
      if (!this.$_bDropping$) {
        if (this.$_draggedTile$ && this.$_dropSite$) {
          var $draggedTile$$ = this.$_draggedTile$, $dropSite$$ = this.$_dropSite$;
          $oj$$25$$.$DomUtils$.$isAncestor$(this.element[0], $draggedTile$$) && ($$$$24$$($dropSite$$).css("display", ""), this.$_removeTileOriginalOrder$($dropSite$$), $dropSite$$.parentNode.removeChild($dropSite$$), $$$$24$$($draggedTile$$).css("display", ""), this.$_insertTileOriginalOrder$($draggedTile$$, $draggedTile$$.$_jetDataMasonryOriginalOrder$ - 1), this.$_mlCommon$.$setup$(!1, !0));
          delete $draggedTile$$.$_jetDataMasonryDragSourceIndex$;
        }
        this.$_dropSite$ = this.$_draggedTile$ = null;
        this.$_bMouseMoved$ = this.$_bDragMoveTransition$ = !1;
        this.$_dragOffset$ = null;
        this.$_bDragging$ = this.$_bDragEndTransition$ = !1;
      }
    }, $_handleDrop$:function($event$$336$$) {
      var $mlCommon$$11_originalEvent$$9$$ = this.$_mlCommon$;
      $mlCommon$$11_originalEvent$$9$$.$isInLayoutCycle$() && $mlCommon$$11_originalEvent$$9$$.$finishLayoutCycle$();
      $mlCommon$$11_originalEvent$$9$$ = $event$$336$$.originalEvent;
      this.$_drop$(this.$_draggedTile$, $mlCommon$$11_originalEvent$$9$$.pageX, $mlCommon$$11_originalEvent$$9$$.pageY);
      $event$$336$$.stopPropagation();
      return!1;
    }, $_dragStart$:function($tile$$7$$, $dragOffset_pageX$$1$$, $pageY$$1$$, $dataTransfer$$2$$) {
      this.$_bDragging$ = !0;
      this.$_bMouseMoved$ = this.$_bDropping$ = !1;
      this.$_draggedTile$ = $tile$$7$$;
      var $elem$$101$$ = this.element[0], $offset$$24_sizeClass_style$$12$$ = $_getSizeStyleClassName$$($tile$$7$$), $dropSite$$1$$ = this.$_dropSite$ = document.createElement("div");
      $dropSite$$1$$.$_jetDataMasonryOriginalOrder$ = $tile$$7$$.$_jetDataMasonryOriginalOrder$;
      $dropSite$$1$$.className = $offset$$24_sizeClass_style$$12$$ + " oj-drop";
      var $offset$$24_sizeClass_style$$12$$ = $dropSite$$1$$.style, $tileStyle$$ = $tile$$7$$.style;
      $offset$$24_sizeClass_style$$12$$.top = $tileStyle$$.top;
      this.$_bRTL$ ? $offset$$24_sizeClass_style$$12$$.right = $tileStyle$$.right : $offset$$24_sizeClass_style$$12$$.left = $tileStyle$$.left;
      $offset$$24_sizeClass_style$$12$$ = $$$$24$$($tile$$7$$).offset();
      $elem$$101$$.insertBefore($dropSite$$1$$, $tile$$7$$);
      this.$_dragOffset$ = $dragOffset_pageX$$1$$ = {left:$dragOffset_pageX$$1$$ - $offset$$24_sizeClass_style$$12$$.left, top:$pageY$$1$$ - $offset$$24_sizeClass_style$$12$$.top};
      $$$$24$$($tile$$7$$).addClass("oj-drag");
      $dataTransfer$$2$$.effectAllowed = "move";
      $dataTransfer$$2$$.setData("text/html", $tile$$7$$.outerHTML);
      $dataTransfer$$2$$.setDragImage($tile$$7$$, $dragOffset_pageX$$1$$.left, $dragOffset_pageX$$1$$.top);
      var $self$$138$$ = this;
      this.$_dragStartHideTileTimeout$ = setTimeout(function() {
        $tileStyle$$.display = $_NONE$$1$$;
        $$$$24$$($tile$$7$$).removeClass("oj-drag");
        $self$$138$$.$_dragStartHideTileTimeout$ = null;
        $oj$$25$$.Components.$subtreeHidden$($tile$$7$$);
      }, 0);
    }, $_dragMove$:function($bRightSide_nextElem$$1_pageX$$2$$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $clientY$$2_oldNextSibling$$) {
      this.$_bMouseMoved$ = !0;
      if (!this.$_bDragMoveTransition$) {
        var $elem$$102$$ = this.element[0];
        $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ = document.elementFromPoint($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $clientY$$2_oldNextSibling$$);
        if (($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ = $_findContainingTile$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $elem$$102$$)) && $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ !== this.$_dropSite$ && $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ !== this.$_draggedTile$) {
          var $offset$$25$$ = $$$$24$$($elem$$102$$).offset();
          $clientY$$2_oldNextSibling$$ = $_getNextElement$$(this.$_dropSite$);
          $bRightSide_nextElem$$1_pageX$$2$$ = $bRightSide_nextElem$$1_pageX$$2$$ - $offset$$25$$.left >= $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.offsetLeft + .5 * $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.offsetWidth;
          this.$_removeTileOriginalOrder$(this.$_dropSite$);
          $bRightSide_nextElem$$1_pageX$$2$$ && !this.$_bRTL$ || !$bRightSide_nextElem$$1_pageX$$2$$ && this.$_bRTL$ ? ($bRightSide_nextElem$$1_pageX$$2$$ = $_getNextElement$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$)) ? (this.$_insertTileOriginalOrder$(this.$_dropSite$, $bRightSide_nextElem$$1_pageX$$2$$.$_jetDataMasonryOriginalOrder$ - 1), $elem$$102$$.insertBefore(this.$_dropSite$, $bRightSide_nextElem$$1_pageX$$2$$)) : (this.$_insertTileOriginalOrder$(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.$_jetDataMasonryOriginalOrder$), 
          $elem$$102$$.appendChild(this.$_dropSite$)) : (this.$_insertTileOriginalOrder$(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.$_jetDataMasonryOriginalOrder$ - 1), $elem$$102$$.insertBefore(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$));
          $clientY$$2_oldNextSibling$$ !== $_getNextElement$$(this.$_dropSite$) && (this.$_bDragMoveTransition$ = this.$_mlCommon$.$setup$(!1, !0));
        }
      }
    }, $_handleDragMoveTransitionEnd$:function() {
      this.$_bDragMoveTransition$ = !1;
    }, $_drop$:function($tile$$8$$, $newLeft_pageX$$3$$, $pageY$$2$$) {
      this.$_bDropping$ = !0;
      var $elem$$103$$ = this.element[0], $dropSite$$2_style$$13$$ = this.$_dropSite$;
      this.$_dropSite$ = null;
      $oj$$25$$.Components.$subtreeDetached$($tile$$8$$);
      $elem$$103$$.replaceChild($tile$$8$$, $dropSite$$2_style$$13$$);
      $oj$$25$$.Components.$subtreeAttached$($tile$$8$$);
      $tile$$8$$.$_jetDataMasonryOriginalOrder$ = $dropSite$$2_style$$13$$.$_jetDataMasonryOriginalOrder$;
      $dropSite$$2_style$$13$$ = $tile$$8$$.style;
      $dropSite$$2_style$$13$$.display = "";
      $oj$$25$$.Components.$subtreeShown$($tile$$8$$);
      var $offset$$26$$ = $$$$24$$($elem$$103$$).offset(), $dragOffset$$1$$ = this.$_dragOffset$;
      $dropSite$$2_style$$13$$.top = $pageY$$2$$ - $dragOffset$$1$$.top - $offset$$26$$.top + $_PX$$1$$;
      $newLeft_pageX$$3$$ = $newLeft_pageX$$3$$ - $dragOffset$$1$$.left - $offset$$26$$.left;
      this.$_bRTL$ ? ($dropSite$$2_style$$13$$.right = $elem$$103$$.offsetWidth - ($newLeft_pageX$$3$$ + $$$$24$$($tile$$8$$).outerWidth(!0)) + $_PX$$1$$, $dropSite$$2_style$$13$$.left = "") : $dropSite$$2_style$$13$$.left = $newLeft_pageX$$3$$ + $_PX$$1$$;
      this.$_dragOffset$ = null;
      this.$_bMouseMoved$ ? this.$_bDragEndTransition$ = this.$_mlCommon$.$setup$(!1, !0) : this.$_handleDragEndTransitionEnd$();
    }, $_handleDragEndTransitionEnd$:function() {
      this.$_bMouseMoved$ = this.$_bDropping$ = this.$_bDragging$ = this.$_bDragEndTransition$ = !1;
      var $eventData$$16_tile$$9$$ = this.$_draggedTile$;
      this.$_draggedTile$ = null;
      var $fromIndex$$4$$ = $eventData$$16_tile$$9$$.$_jetDataMasonryDragSourceIndex$;
      delete $eventData$$16_tile$$9$$.$_jetDataMasonryDragSourceIndex$;
      var $toIndex$$1$$ = this.$_getTileIndex$($eventData$$16_tile$$9$$), $eventData$$16_tile$$9$$ = {tile:$$$$24$$($eventData$$16_tile$$9$$), fromIndex:$fromIndex$$4$$, toIndex:$toIndex$$1$$};
      this._trigger("reorder", null, $eventData$$16_tile$$9$$);
    }, getNodeBySubId:function($locator$$31$$) {
      return this._super($locator$$31$$);
    }});
    var $_PX$$1$$ = "px", $_HIDDEN$$1$$ = "hidden", $_NONE$$1$$ = "none", $_OJ_DISABLED$$ = "oj-disabled", $_TILE_SELECTOR$$ = ".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2", $_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$ = "oj-masonrylayout-tile-transition-show-from", $_WARNING_DISABLED_OPTION$$1$$ = "JET MasonryLayout: 'disabled' option not supported", 
    $_OJMASONRYLAYOUTCUT$$ = "ojmasonrylayoutcut", $_OJMASONRYLAYOUTPASTEBEFORE$$ = "ojmasonrylayoutpastebefore", $_OJMASONRYLAYOUTPASTEAFTER$$ = "ojmasonrylayoutpasteafter", $_MENU_CMD_MAP$$ = {cut:$_OJMASONRYLAYOUTCUT$$, "paste-before":$_OJMASONRYLAYOUTPASTEBEFORE$$, "paste-after":$_OJMASONRYLAYOUTPASTEAFTER$$}, $_MENU_TRANSLATION_MAP$$ = {cut:"labelCut", "paste-before":"labelPasteBefore", "paste-after":"labelPasteAfter"};
  })();
  $MasonryLayoutCommon$$.prototype.$setup$ = function $$MasonryLayoutCommon$$$$$setup$$($init$$, $reorder$$) {
    var $ret$$31$$ = !1;
    $init$$ ? ($ret$$31$$ = this.$_layout$() ? !0 : !1, this.$_reorderTilesForLayout$()) : (this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$(), this.$_transitionStart$($reorder$$), $ret$$31$$ = this.$_transitionLayout$());
    return $ret$$31$$;
  };
  $MasonryLayoutCommon$$.prototype.destroy = function $$MasonryLayoutCommon$$$$destroy$() {
    for (var $elem$$111$$ = this.$_elem$, $children$$12$$ = this.$_getTileChildren$(), $i$$336$$ = 0;$i$$336$$ < $children$$12$$.length;$i$$336$$++) {
      var $style$$16$$ = $children$$12$$[$i$$336$$].style;
      this.$_rtl$ ? $style$$16$$.right = "" : $style$$16$$.left = "";
      $style$$16$$.top = "";
    }
    $elem$$111$$.removeChild(this.$_sizeDivWrapper$);
    this.$_subtreeDetachedFunc$ = this.$_subtreeAttachedFunc$ = this.$_sortTilesOriginalOrderFunc$ = this.$_layoutCycleOnEndFunc$ = this.$_layoutCycleOnStartFunc$ = this.$_layoutOnEndFunc$ = this.$_hideTileOnEndFunc$ = this.$_showTileOnEndFunc$ = this.$_getTileSpanFunc$ = this.$_getSizeStyleClassNameFunc$ = this.$_removeStyleClassNameFunc$ = this.$_addStyleClassNameFunc$ = this.$_elem$ = this.$_arFireHideOnEnd$ = this.$_arInfoletsToHide$ = this.$_arInfoletsToShow$ = this.$_arInfoletsToResize$ = this.$_arMovedInfolets$ = 
    this.$_handleShowTransitionEndFunc$ = this.$_handleHideTransitionEndFunc$ = this.$_hideTilesFunc$ = this.$_handleTransitionEndFunc$ = this.$_sizeDiv$ = this.$_sizeDivWrapper$ = null;
  };
  $MasonryLayoutCommon$$.prototype.resizeTile = function $$MasonryLayoutCommon$$$$resizeTile$($selector$$32$$, $sizeStyleClass$$2$$) {
    var $infolet$$1$$ = this.$_elem$.querySelector($selector$$32$$);
    if ($infolet$$1$$) {
      this.$_arInfoletsToResize$ || (this.$_arInfoletsToResize$ = []);
      var $arInfoletsToResize$$ = this.$_arInfoletsToResize$;
      $arInfoletsToResize$$.push($infolet$$1$$);
      $arInfoletsToResize$$.push($sizeStyleClass$$2$$);
      this.$_resizingInfolet$ = !0;
      this.$_queueRelayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$insertTileDomElem$ = function $$MasonryLayoutCommon$$$$$insertTileDomElem$$($tileDomElem$$, $index$$209$$) {
    var $arChildren$$1$$ = this.$_getTileChildren$();
    this.$_sortTilesOriginalOrderFunc$ && this.$_sortTilesOriginalOrderFunc$($arChildren$$1$$);
    var $currChildAtIndex$$ = null;
    0 <= $index$$209$$ && $index$$209$$ < $arChildren$$1$$.length && ($currChildAtIndex$$ = $arChildren$$1$$[$index$$209$$]);
    this.$_elem$.insertBefore($tileDomElem$$, $currChildAtIndex$$);
    this.$_queueRelayout$();
  };
  $MasonryLayoutCommon$$.prototype.$showTile$ = function $$MasonryLayoutCommon$$$$$showTile$$($infolet$$2_selector$$33$$) {
    if ($infolet$$2_selector$$33$$ = this.$_elem$.querySelector($infolet$$2_selector$$33$$)) {
      this.$_arInfoletsToShow$ || (this.$_arInfoletsToShow$ = []), this.$_arInfoletsToShow$.push($infolet$$2_selector$$33$$), this.$_showingInfolets$ = !0, this.$_layoutPhase$ !== $MasonryLayoutCommon$$.$_PHASE_HIDE$ && this.$_layoutPhase$ !== $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ ? this.$_queueRelayout$() : this.$_showingInfolets$ = !1;
    }
  };
  $MasonryLayoutCommon$$.prototype.$hideTile$ = function $$MasonryLayoutCommon$$$$$hideTile$$($infolet$$3_selector$$34$$) {
    if ($infolet$$3_selector$$34$$ = this.$_elem$.querySelector($infolet$$3_selector$$34$$)) {
      this.$_arInfoletsToHide$ || (this.$_arInfoletsToHide$ = []), this.$_arInfoletsToHide$.push($infolet$$3_selector$$34$$), this.$_hidingInfolets$ = !0, this.$_queueRelayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$resizeNotify$ = function $$MasonryLayoutCommon$$$$$resizeNotify$$() {
    this.$_resizingInfolet$ || this.$_hidingInfolets$ || this.$_showingInfolets$ || (this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$(), this.$_transitionStart$(!1), this.$_transitionLayout$());
  };
  $MasonryLayoutCommon$$.prototype.$isAnimationEnabled$ = function $$MasonryLayoutCommon$$$$$isAnimationEnabled$$() {
    if (this.$_temporarilyDisableAnimation$) {
      return!1;
    }
    this.$_cachedAnimationEnabled$ || (this.$_animationEnabled$ = this.$_automationEnabled$ ? !1 : $MasonryLayoutCommon$$.$_isMinimumAgentMet$($MasonryLayoutCommon$$.$_agentTypeAndVersion$[0], $MasonryLayoutCommon$$.$_agentTypeAndVersion$[1]), this.$_cachedAnimationEnabled$ = !0);
    return this.$_animationEnabled$;
  };
  $MasonryLayoutCommon$$.prototype.$isInLayoutCycle$ = function $$MasonryLayoutCommon$$$$$isInLayoutCycle$$() {
    return null != this.$_layoutPhase$ || null != this.$_arMovedInfolets$ && 0 < this.$_arMovedInfolets$.length;
  };
  $MasonryLayoutCommon$$.prototype.$finishLayoutCycle$ = function $$MasonryLayoutCommon$$$$$finishLayoutCycle$$() {
    this.$_temporarilyDisableAnimation$ = !0;
    this.$_removeStyleClassFromTiles$(this.$_transitionMoveToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionMoveToFastStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionHideFromStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionHideToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionShowFromStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionShowToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionResizeToStyleClass$);
    this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToStyleClass$);
    this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToFastStyleClass$);
    $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$);
    $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$);
    for (var $tileChildren$$ = this.$_getTileChildren$(), $i$$337$$ = 0;$i$$337$$ < $tileChildren$$.length;$i$$337$$++) {
      var $child$$10$$ = $tileChildren$$[$i$$337$$];
      $child$$10$$.$_afrOldSizeStyleClass$ && delete $child$$10$$.$_afrOldSizeStyleClass$;
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$10$$, "transitionend", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$10$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$10$$, "transitionend", this.$_handleShowTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$10$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
    }
    this.$_hideTilesInternalTimeout$ ? (clearTimeout(this.$_hideTilesInternalTimeout$), this.$_hideTilesInternalTimeout$ = null, this.$_handleHideTransitionEnd$(null)) : this.$_showTilesTimeout$ ? (clearTimeout(this.$_showTilesTimeout$), this.$_showTilesTimeout$ = null, this.$_showTiles$()) : this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ || null != this.$_arMovedInfolets$ && 0 < this.$_arMovedInfolets$.length ? this.$_handleTransitionEnd$(null) : this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_SHOW$ && 
    this.$_handleShowTransitionEnd$(null);
    this.$_temporarilyDisableAnimation$ = !1;
  };
  $MasonryLayoutCommon$$.$_getElemSize$ = function $$MasonryLayoutCommon$$$$_getElemSize$$($elem$$116$$) {
    var $computedStyle$$ = $MasonryLayoutCommon$$.$_getComputedStyle$($elem$$116$$);
    return{$w$:$elem$$116$$.offsetWidth + ($MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginLeft) + $MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginRight)), $h$:$elem$$116$$.offsetHeight + ($MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginTop) + $MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginBottom))};
  };
  $MasonryLayoutCommon$$.$_getElemInsets$ = function $$MasonryLayoutCommon$$$$_getElemInsets$$($computedStyle$$1_elem$$117$$) {
    $computedStyle$$1_elem$$117$$ = $MasonryLayoutCommon$$.$_getComputedStyle$($computedStyle$$1_elem$$117$$);
    return{paddingLeft:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$117$$.paddingLeft), paddingRight:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$117$$.paddingRight), paddingTop:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$117$$.paddingTop), paddingBottom:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$117$$.paddingBottom), borderLeftWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$117$$.borderLeftWidth), 
    borderRightWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$117$$.borderRightWidth), borderTopWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$117$$.borderTopWidth), borderBottomWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$117$$.borderBottomWidth)};
  };
  $MasonryLayoutCommon$$.$_getComputedStyle$ = function $$MasonryLayoutCommon$$$$_getComputedStyle$$($elem$$118$$) {
    var $defView$$ = $elem$$118$$.ownerDocument.defaultView, $computedStyle$$2$$ = null;
    return $computedStyle$$2$$ = $defView$$ ? $defView$$.getComputedStyle($elem$$118$$, null) : $elem$$118$$.currentStyle;
  };
  $MasonryLayoutCommon$$.$_getCSSLengthAsInt$ = function $$MasonryLayoutCommon$$$$_getCSSLengthAsInt$$($cssLength$$2_intLength$$1$$) {
    return 0 < $cssLength$$2_intLength$$1$$.length && "auto" != $cssLength$$2_intLength$$1$$ ? ($cssLength$$2_intLength$$1$$ = parseInt($cssLength$$2_intLength$$1$$, 10), isNaN($cssLength$$2_intLength$$1$$) && ($cssLength$$2_intLength$$1$$ = 0), $cssLength$$2_intLength$$1$$) : 0;
  };
  $MasonryLayoutCommon$$.$_addBubbleEventListener$ = function $$MasonryLayoutCommon$$$$_addBubbleEventListener$$($node$$55$$, $type$$84$$, $listener$$37$$) {
    $node$$55$$.addEventListener ? $node$$55$$.addEventListener($type$$84$$, $listener$$37$$, !1) : $node$$55$$.attachEvent && $node$$55$$.attachEvent("on" + $type$$84$$, $listener$$37$$);
  };
  $MasonryLayoutCommon$$.$_removeBubbleEventListener$ = function $$MasonryLayoutCommon$$$$_removeBubbleEventListener$$($node$$56$$, $type$$85$$, $listener$$38$$) {
    $node$$56$$.removeEventListener ? $node$$56$$.removeEventListener($type$$85$$, $listener$$38$$, !1) : $node$$56$$.detachEvent && $node$$56$$.detachEvent("on" + $type$$85$$, $listener$$38$$);
  };
  $MasonryLayoutCommon$$.$_arrayIndexOf$ = function $$MasonryLayoutCommon$$$$_arrayIndexOf$$($array$$14$$, $item$$88$$) {
    if ($array$$14$$) {
      for (var $i$$338$$ = 0;$i$$338$$ < $array$$14$$.length;$i$$338$$++) {
        if ($array$$14$$[$i$$338$$] == $item$$88$$) {
          return $i$$338$$;
        }
      }
    }
    return-1;
  };
  $MasonryLayoutCommon$$.$_isMinimumAgentMet$ = function $$MasonryLayoutCommon$$$$_isMinimumAgentMet$$($actualAgentType$$, $actualAgentVersion$$) {
    var $agentRequirements$$ = ["gecko", 16, "trident", 6, "webkit", 533.1], $argCount$$ = $agentRequirements$$.length;
    if (0 == $argCount$$ % 2) {
      for (var $i$$339$$ = 0;$i$$339$$ <= $argCount$$ - 2;$i$$339$$ += 2) {
        if ($actualAgentType$$ == $agentRequirements$$[$i$$339$$]) {
          if ($actualAgentVersion$$ >= $agentRequirements$$[1 + $i$$339$$]) {
            return!0;
          }
          break;
        }
      }
    }
    return!1;
  };
  $MasonryLayoutCommon$$.$_getAgentTypeAndVersion$ = function $$MasonryLayoutCommon$$$$_getAgentTypeAndVersion$$() {
    var $versionParser$$ = $MasonryLayoutCommon$$.$_parseFloatVersion$, $agentType$$1$$ = null, $agentVersion$$1_possibleVersion$$ = -1, $userAgent$$3$$ = navigator.userAgent.toLowerCase();
    -1 != $userAgent$$3$$.indexOf("msie") || -1 != $userAgent$$3$$.indexOf("trident") ? ($agentType$$1$$ = "trident", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /trident\/(\d+[.]\d+)/), -1 == $agentVersion$$1_possibleVersion$$ && ($agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /msie (\d+\.\d+);/), -1 == $agentVersion$$1_possibleVersion$$ && ($agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /msie (\d+\.\d+)b;/)), $agentVersion$$1_possibleVersion$$ -= 
    4), null != document.documentMode && ($agentVersion$$1_possibleVersion$$ = Math.min($agentVersion$$1_possibleVersion$$, document.documentMode - 4))) : -1 != $userAgent$$3$$.indexOf("applewebkit") ? ($agentType$$1$$ = "webkit", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /applewebkit\/(\d+([.]\d+)*)/)) : -1 != $userAgent$$3$$.indexOf("gecko/") && ($agentType$$1$$ = "gecko", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$3$$, /rv:(\d+[.]\d+)/));
    return[$agentType$$1$$, $agentVersion$$1_possibleVersion$$];
  };
  $MasonryLayoutCommon$$.$_parseFloatVersion$ = function $$MasonryLayoutCommon$$$$_parseFloatVersion$$($userAgent$$4$$, $versionNumberPattern$$1$$) {
    var $matches$$4_versionString$$1$$ = $userAgent$$4$$.match($versionNumberPattern$$1$$);
    return $matches$$4_versionString$$1$$ && ($matches$$4_versionString$$1$$ = $matches$$4_versionString$$1$$[1]) ? parseFloat($matches$$4_versionString$$1$$) : -1;
  };
  $MasonryLayoutCommon$$.$_compareTilePositions$ = function $$MasonryLayoutCommon$$$$_compareTilePositions$$($pos1$$, $pos2$$) {
    return $pos1$$.$startRow$ > $pos2$$.$startRow$ ? 1 : $pos1$$.$startRow$ < $pos2$$.$startRow$ ? -1 : $pos1$$.$startCol$ > $pos2$$.$startCol$ ? 1 : $pos1$$.$startCol$ < $pos2$$.$startCol$ ? -1 : 0;
  };
  $MasonryLayoutCommon$$.prototype.$_queueRelayout$ = function $$MasonryLayoutCommon$$$$$_queueRelayout$$() {
    this.$_hideTilesTimeout$ || (this.$_layoutPhase$ ? this.$_queuedRelayout$ || (this.$_queuedRelayout$ = !0) : this.$_hideTilesTimeout$ = setTimeout(this.$_hideTilesFunc$, 0));
  };
  $MasonryLayoutCommon$$.prototype.$_getTileChildren$ = function $$MasonryLayoutCommon$$$$$_getTileChildren$$() {
    for (var $children$$13$$ = this.$_elem$.querySelectorAll(this.$_tilesSelector$), $arChildren$$2$$ = [], $i$$340$$ = 0;$i$$340$$ < $children$$13$$.length;$i$$340$$++) {
      var $child$$11$$ = $children$$13$$[$i$$340$$], $childStyle$$ = $child$$11$$.style;
      0 < $child$$11$$.offsetWidth && 0 < $child$$11$$.offsetHeight && "hidden" != $childStyle$$.visibility && $arChildren$$2$$.push($child$$11$$);
    }
    return $arChildren$$2$$;
  };
  $MasonryLayoutCommon$$.prototype.$_transitionLayout$ = function $$MasonryLayoutCommon$$$$$_transitionLayout$$() {
    var $oldMovedInfolets_ret$$32$$ = this.$_arMovedInfolets$, $newMovedInfolets$$ = this.$_layout$();
    if (this.$_arInfoletsToResize$) {
      var $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = this.$_arInfoletsToResize$;
      $newMovedInfolets$$ || ($newMovedInfolets$$ = []);
      for (var $i$$341$$ = 0;$i$$341$$ < $arInfoletsToResize$$1_calledHandleTransitionEnd$$.length;$i$$341$$ += 2) {
        var $resizedInfolet$$ = $arInfoletsToResize$$1_calledHandleTransitionEnd$$[$i$$341$$];
        0 > $MasonryLayoutCommon$$.$_arrayIndexOf$($newMovedInfolets$$, $resizedInfolet$$) && $newMovedInfolets$$.push($resizedInfolet$$);
      }
    }
    $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = !1;
    if (!$newMovedInfolets$$ || 1 > $newMovedInfolets$$.length) {
      if (!$oldMovedInfolets_ret$$32$$ || 1 > $oldMovedInfolets_ret$$32$$.length) {
        this.$_arMovedInfolets$ = null, this.$_handleTransitionEnd$(null), $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = !0;
      }
    } else {
      this.$_arMovedInfolets$ = $newMovedInfolets$$;
    }
    $oldMovedInfolets_ret$$32$$ = null != $newMovedInfolets$$ && 0 < $newMovedInfolets$$.length;
    this.$isAnimationEnabled$() || $arInfoletsToResize$$1_calledHandleTransitionEnd$$ || this.$_handleTransitionEnd$(null);
    return $oldMovedInfolets_ret$$32$$;
  };
  $MasonryLayoutCommon$$.prototype.$_layout$ = function $$MasonryLayoutCommon$$$$$_layout$$() {
    var $elem$$120_style$$17$$ = this.$_elem$, $children$$14$$ = this.$_getTileChildren$();
    this.$_sortTilesOriginalOrderFunc$ && this.$_sortTilesOriginalOrderFunc$($children$$14$$);
    var $cellSize_oldSizeStyleClass$$ = this.$_cellSize$ = null;
    this.$_cols$ = 0;
    this.$_rows$ = 1;
    this.$_occupancyMap$ = null;
    var $arMovedInfolets$$ = [], $arOldPositions$$ = [], $arCols$$ = [], $rtl$$3$$ = this.$_rtl$, $insets$$ = $MasonryLayoutCommon$$.$_getElemInsets$($elem$$120_style$$17$$), $maxColSpan$$ = 0, $arTilePositions$$ = [];
    this.$_arTilePositions$ = $arTilePositions$$;
    for (var $i$$342$$ = 0;$i$$342$$ < $children$$14$$.length;$i$$342$$++) {
      var $child$$12$$ = $children$$14$$[$i$$342$$], $childSpan$$ = this.$_getTileSpanFunc$($child$$12$$);
      ($cellSize_oldSizeStyleClass$$ = $child$$12$$.$_afrOldSizeStyleClass$) && delete $child$$12$$.$_afrOldSizeStyleClass$;
      if (!this.$_cellSize$) {
        var $r$$1_spanForCellSize_tmpDiv$$ = $childSpan$$;
        $cellSize_oldSizeStyleClass$$ && ($r$$1_spanForCellSize_tmpDiv$$ = document.createElement("div"), $r$$1_spanForCellSize_tmpDiv$$.className = $cellSize_oldSizeStyleClass$$, $r$$1_spanForCellSize_tmpDiv$$ = this.$_getTileSpanFunc$($r$$1_spanForCellSize_tmpDiv$$));
        this.$_cellSize$ = this.$_calcCellSize$($child$$12$$, $r$$1_spanForCellSize_tmpDiv$$);
      }
      $cellSize_oldSizeStyleClass$$ = this.$_cellSize$;
      this.$_occupancyMap$ || (this.$_cols$ = Math.max(Math.floor(($elem$$120_style$$17$$.offsetWidth - $insets$$.paddingLeft - $insets$$.paddingRight - $insets$$.borderLeftWidth - $insets$$.borderRightWidth) / $cellSize_oldSizeStyleClass$$.$w$), 1), this.$_initOccupancyMap$(this.$_cols$, this.$_rows$), $maxColSpan$$ = this.$_cols$);
      $childSpan$$.colSpan > $maxColSpan$$ && ($maxColSpan$$ = $childSpan$$.colSpan);
      $childSpan$$.colSpan > this.$_cols$ && ($childSpan$$.colSpan = this.$_cols$);
      for (var $childStyle$$1_next$$4$$ = !1, $r$$1_spanForCellSize_tmpDiv$$ = 0;$r$$1_spanForCellSize_tmpDiv$$ < this.$_rows$;$r$$1_spanForCellSize_tmpDiv$$++) {
        for (var $c$$42$$ = 0;$c$$42$$ < this.$_cols$;$c$$42$$++) {
          if (this.$_fits$($c$$42$$, $r$$1_spanForCellSize_tmpDiv$$, $childSpan$$)) {
            var $childStyle$$1_next$$4$$ = $child$$12$$.style, $oldPosition$$ = {top:$childStyle$$1_next$$4$$.top};
            $rtl$$3$$ ? $oldPosition$$.right = $childStyle$$1_next$$4$$.right : $oldPosition$$.left = $childStyle$$1_next$$4$$.left;
            $arOldPositions$$.push($oldPosition$$);
            this.$_position$($child$$12$$, $c$$42$$, $r$$1_spanForCellSize_tmpDiv$$, $childSpan$$, $cellSize_oldSizeStyleClass$$, $insets$$);
            $rtl$$3$$ && $arCols$$.push($c$$42$$);
            $childStyle$$1_next$$4$$ = !0;
            $arTilePositions$$.push({$startCol$:$c$$42$$, $startRow$:$r$$1_spanForCellSize_tmpDiv$$, tile:$child$$12$$});
            break;
          }
        }
        if ($childStyle$$1_next$$4$$) {
          break;
        }
        $r$$1_spanForCellSize_tmpDiv$$ === this.$_rows$ - 1 && this.$_addRow$();
      }
    }
    $cellSize_oldSizeStyleClass$$ && ($elem$$120_style$$17$$ = this.$_sizeDiv$.style, $elem$$120_style$$17$$.width = $maxColSpan$$ * $cellSize_oldSizeStyleClass$$.$w$ + "px", $elem$$120_style$$17$$.height = this.$_rows$ * $cellSize_oldSizeStyleClass$$.$h$ + "px");
    for ($i$$342$$ = 0;$i$$342$$ < $children$$14$$.length;$i$$342$$++) {
      $child$$12$$ = $children$$14$$[$i$$342$$], $childStyle$$1_next$$4$$ = $child$$12$$.style, $oldPosition$$ = $arOldPositions$$[$i$$342$$], ($rtl$$3$$ && parseInt($childStyle$$1_next$$4$$.right, 10) !== parseInt($oldPosition$$.right, 10) || !$rtl$$3$$ && parseInt($childStyle$$1_next$$4$$.left, 10) !== parseInt($oldPosition$$.left, 10) || parseInt($childStyle$$1_next$$4$$.top, 10) !== parseInt($oldPosition$$.top, 10)) && $arMovedInfolets$$.push($child$$12$$);
    }
    1 > $arMovedInfolets$$.length && ($arMovedInfolets$$ = null);
    return $arMovedInfolets$$;
  };
  $MasonryLayoutCommon$$.prototype.$_reorderTilesForLayout$ = function $$MasonryLayoutCommon$$$$$_reorderTilesForLayout$$() {
    var $arTilePositions$$1$$ = this.$_arTilePositions$;
    this.$_arTilePositions$ = null;
    for (var $arTilePositions$$1$$ = $arTilePositions$$1$$.sort($MasonryLayoutCommon$$.$_compareTilePositions$), $children$$15$$ = this.$_getTileChildren$(), $i$$343$$ = 0;$i$$343$$ < $children$$15$$.length;$i$$343$$++) {
      var $child$$13_posTileIndex$$ = $children$$15$$[$i$$343$$], $posTile$$ = $arTilePositions$$1$$[$i$$343$$].tile;
      $child$$13_posTileIndex$$ != $posTile$$ && (this.$_subtreeDetachedFunc$($posTile$$), $child$$13_posTileIndex$$.parentNode.insertBefore($posTile$$, $child$$13_posTileIndex$$), this.$_subtreeAttachedFunc$($posTile$$), $child$$13_posTileIndex$$ = $MasonryLayoutCommon$$.$_arrayIndexOf$($children$$15$$, $posTile$$), $child$$13_posTileIndex$$ > $i$$343$$ && ($children$$15$$.splice($child$$13_posTileIndex$$, 1), $children$$15$$.splice($i$$343$$, 0, $posTile$$)));
    }
  };
  $MasonryLayoutCommon$$.prototype.$_initOccupancyMap$ = function $$MasonryLayoutCommon$$$$$_initOccupancyMap$$($cols$$1$$, $rows$$10$$) {
    for (var $occupancyMap$$ = this.$_occupancyMap$ = [], $row$$48$$ = 0;$row$$48$$ < $rows$$10$$;$row$$48$$++) {
      var $arCols$$1$$ = [];
      $occupancyMap$$.push($arCols$$1$$);
      for (var $col$$3$$ = 0;$col$$3$$ < $cols$$1$$;$col$$3$$++) {
        $arCols$$1$$[$col$$3$$] = !1;
      }
    }
  };
  $MasonryLayoutCommon$$.prototype.$_addRow$ = function $$MasonryLayoutCommon$$$$$_addRow$$() {
    this.$_rows$++;
    var $arCols$$2$$ = [];
    this.$_occupancyMap$.push($arCols$$2$$);
    for (var $col$$4$$ = 0;$col$$4$$ < this.$_cols$;$col$$4$$++) {
      $arCols$$2$$[$col$$4$$] = !1;
    }
  };
  $MasonryLayoutCommon$$.prototype.$_fits$ = function $$MasonryLayoutCommon$$$$$_fits$$($col$$5$$, $row$$49$$, $childSpan$$1_rowSpan$$) {
    var $colSpan$$ = $childSpan$$1_rowSpan$$.colSpan;
    $childSpan$$1_rowSpan$$ = $childSpan$$1_rowSpan$$.rowSpan;
    for (var $r$$2$$ = $row$$49$$;$r$$2$$ < $row$$49$$ + $childSpan$$1_rowSpan$$;$r$$2$$++) {
      $r$$2$$ >= this.$_rows$ && this.$_addRow$();
      for (var $c$$43$$ = $col$$5$$;$c$$43$$ < $col$$5$$ + $colSpan$$;$c$$43$$++) {
        if ($c$$43$$ >= this.$_cols$ || this.$_occupancyMap$[$r$$2$$][$c$$43$$]) {
          return!1;
        }
      }
    }
    return!0;
  };
  $MasonryLayoutCommon$$.prototype.$_position$ = function $$MasonryLayoutCommon$$$$$_position$$($child$$14_style$$18$$, $col$$6$$, $row$$50$$, $childSpan$$2_rowSpan$$1$$, $cellSize$$1$$, $insets$$1$$) {
    var $colSpan$$1$$ = $childSpan$$2_rowSpan$$1$$.colSpan;
    $childSpan$$2_rowSpan$$1$$ = $childSpan$$2_rowSpan$$1$$.rowSpan;
    for (var $occupancyMap$$2$$ = this.$_occupancyMap$, $r$$3$$ = $row$$50$$;$r$$3$$ < $row$$50$$ + $childSpan$$2_rowSpan$$1$$;$r$$3$$++) {
      for (var $c$$44$$ = $col$$6$$;$c$$44$$ < $col$$6$$ + $colSpan$$1$$;$c$$44$$++) {
        $occupancyMap$$2$$[$r$$3$$][$c$$44$$] = !0;
      }
    }
    $child$$14_style$$18$$ = $child$$14_style$$18$$.style;
    $child$$14_style$$18$$.top = $insets$$1$$.paddingTop + $row$$50$$ * $cellSize$$1$$.$h$ + "px";
    this.$_rtl$ ? $child$$14_style$$18$$.right = $insets$$1$$.paddingRight + $col$$6$$ * $cellSize$$1$$.$w$ + "px" : $child$$14_style$$18$$.left = $insets$$1$$.paddingLeft + $col$$6$$ * $cellSize$$1$$.$w$ + "px";
  };
  $MasonryLayoutCommon$$.prototype.$_addStyleClassToTiles$ = function $$MasonryLayoutCommon$$$$$_addStyleClassToTiles$$($styleClassName$$) {
    for (var $children$$16$$ = this.$_getTileChildren$(), $i$$344$$ = 0;$i$$344$$ < $children$$16$$.length;$i$$344$$++) {
      this.$_addStyleClassNameFunc$($children$$16$$[$i$$344$$], $styleClassName$$);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_removeStyleClassFromTiles$ = function $$MasonryLayoutCommon$$$$$_removeStyleClassFromTiles$$($styleClassName$$1$$) {
    for (var $children$$17$$ = this.$_getTileChildren$(), $i$$345$$ = 0;$i$$345$$ < $children$$17$$.length;$i$$345$$++) {
      this.$_removeStyleClassNameFunc$($children$$17$$[$i$$345$$], $styleClassName$$1$$);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_transitionStart$ = function $$MasonryLayoutCommon$$$$$_transitionStart$$($reorder$$1$$) {
    this.$_layoutTransition$ || (this.$_reorderTransitionStarted$ = $reorder$$1$$, this.$isAnimationEnabled$() && (this.$_addStyleClassToTiles$($reorder$$1$$ ? this.$_transitionMoveToFastStyleClass$ : this.$_transitionMoveToStyleClass$), this.$_addStyleClassNameFunc$(this.$_sizeDiv$, $reorder$$1$$ ? this.$_transitionComponentResizeToFastStyleClass$ : this.$_transitionComponentResizeToStyleClass$), $MasonryLayoutCommon$$.$_addBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$), 
    $MasonryLayoutCommon$$.$_addBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$)), this.$_layoutTransition$ = !0);
  };
  $MasonryLayoutCommon$$.prototype.$_handleTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleTransitionEnd$$($event$$337_i$$346$$) {
    var $arInfoletsToResize$$2_doneTransitioning$$ = !0;
    if (this.$_arMovedInfolets$) {
      var $arMovedInfolets$$1$$ = this.$_arMovedInfolets$;
      if ($event$$337_i$$346$$) {
        var $target$$87$$ = $event$$337_i$$346$$.target;
        for ($event$$337_i$$346$$ = 0;$event$$337_i$$346$$ < $arMovedInfolets$$1$$.length;$event$$337_i$$346$$++) {
          if ($target$$87$$ === $arMovedInfolets$$1$$[$event$$337_i$$346$$]) {
            $arMovedInfolets$$1$$.splice($event$$337_i$$346$$, 1);
            break;
          }
        }
      } else {
        this.$isAnimationEnabled$() || ($arMovedInfolets$$1$$ = this.$_arMovedInfolets$ = []);
      }
      0 < $arMovedInfolets$$1$$.length && ($arInfoletsToResize$$2_doneTransitioning$$ = !1);
    }
    if ($arInfoletsToResize$$2_doneTransitioning$$) {
      if (this.$_arInfoletsToResize$ && ($arInfoletsToResize$$2_doneTransitioning$$ = this.$_arInfoletsToResize$, this.$_arInfoletsToResize$ = null, this.$isAnimationEnabled$())) {
        for ($event$$337_i$$346$$ = 0;$event$$337_i$$346$$ < $arInfoletsToResize$$2_doneTransitioning$$.length;$event$$337_i$$346$$ += 2) {
          this.$_removeStyleClassNameFunc$($arInfoletsToResize$$2_doneTransitioning$$[$event$$337_i$$346$$], this.$_transitionResizeToStyleClass$);
        }
      }
      this.$_reorderTransitionStarted$ ? (this.$isAnimationEnabled$() && (this.$_removeStyleClassFromTiles$(this.$_transitionMoveToFastStyleClass$), this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToFastStyleClass$)), this.$_reorderTransitionStarted$ = !1) : this.$isAnimationEnabled$() && (this.$_removeStyleClassFromTiles$(this.$_transitionMoveToStyleClass$), this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToStyleClass$));
      this.$isAnimationEnabled$() && ($MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$), $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$));
      this.$_showingInfolets$ = this.$_hidingInfolets$ = this.$_resizingInfolet$ = this.$_layoutTransition$ = !1;
      this.$_reorderTilesForLayout$();
      this.$_layoutOnEndFunc$ && this.$_layoutOnEndFunc$();
      if (this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_LAYOUT$) {
        if (this.$isAnimationEnabled$()) {
          var $self$$139$$ = this;
          this.$_showTilesTimeout$ = setTimeout(function() {
            $self$$139$$.$_showTiles$();
          }, 0);
        } else {
          this.$_showTiles$();
        }
      } else {
        this.$_layoutPhase$ || this.$_layoutCycleOnEndFunc$ && this.$_layoutCycleOnEndFunc$();
      }
    }
  };
  $MasonryLayoutCommon$$.prototype.$_calcCellSize$ = function $$MasonryLayoutCommon$$$$$_calcCellSize$$($child$$15$$, $childSpan$$3$$) {
    var $childSize$$ = $MasonryLayoutCommon$$.$_getElemSize$($child$$15$$);
    return{$w$:$childSize$$.$w$ / $childSpan$$3$$.colSpan, $h$:$childSize$$.$h$ / $childSpan$$3$$.rowSpan};
  };
  $MasonryLayoutCommon$$.prototype.$_hideTiles$ = function $$MasonryLayoutCommon$$$$$_hideTiles$$() {
    this.$_hideTilesTimeout$ && (clearTimeout(this.$_hideTilesTimeout$), this.$_hideTilesTimeout$ = null);
    this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$();
    this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_HIDE$;
    if (this.$_arInfoletsToHide$ && this.$isAnimationEnabled$()) {
      for (var $arInfoletsToHide$$1$$ = this.$_arInfoletsToHide$, $i$$347$$ = 0;$i$$347$$ < $arInfoletsToHide$$1$$.length;$i$$347$$++) {
        var $infolet$$5$$ = $arInfoletsToHide$$1$$[$i$$347$$];
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$5$$, "transitionend", this.$_handleHideTransitionEndFunc$);
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$5$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
        this.$_addStyleClassNameFunc$($infolet$$5$$, this.$_transitionHideFromStyleClass$);
      }
      var $self$$140$$ = this;
      this.$_hideTilesInternalTimeout$ = setTimeout(function() {
        for (var $i$$348$$ = 0;$i$$348$$ < $arInfoletsToHide$$1$$.length;$i$$348$$++) {
          var $infolet$$6$$ = $arInfoletsToHide$$1$$[$i$$348$$];
          $self$$140$$.$_removeStyleClassNameFunc$($infolet$$6$$, $self$$140$$.$_transitionHideFromStyleClass$);
          $self$$140$$.$_addStyleClassNameFunc$($infolet$$6$$, $self$$140$$.$_transitionHideToStyleClass$);
        }
      }, 0);
    } else {
      this.$_handleHideTransitionEnd$(null);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_handleHideTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleHideTransitionEnd$$($event$$338_infolet$$7$$) {
    this.$_hideTilesInternalTimeout$ && (clearTimeout(this.$_hideTilesInternalTimeout$), this.$_hideTilesInternalTimeout$ = null);
    if ($event$$338_infolet$$7$$) {
      $event$$338_infolet$$7$$.preventDefault();
      $event$$338_infolet$$7$$.stopPropagation();
      $event$$338_infolet$$7$$ = $event$$338_infolet$$7$$.target;
      this.$_removeStyleClassNameFunc$($event$$338_infolet$$7$$, this.$_transitionHideToStyleClass$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$338_infolet$$7$$, "transitionend", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$338_infolet$$7$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
      var $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$ = this.$_arInfoletsToHide$;
      if ($arInfoletsToHide$$2_newSizeStyleClass_style$$19$$) {
        for (var $i$$349$$ = 0;$i$$349$$ < $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$.length;$i$$349$$++) {
          var $oldSizeStyleClass$$1_tmpInfolet$$ = $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$[$i$$349$$];
          if ($oldSizeStyleClass$$1_tmpInfolet$$ === $event$$338_infolet$$7$$) {
            $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$.splice($i$$349$$, 1);
            this.$_arFireHideOnEnd$ || (this.$_arFireHideOnEnd$ = []);
            var $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$;
            $arFireHideOnEnd_arInfoletsToResize$$3$$.push($event$$338_infolet$$7$$);
            break;
          }
        }
        1 > $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$.length && (this.$_arInfoletsToHide$ = null);
      }
    } else {
      if (!this.$isAnimationEnabled$() && ($arInfoletsToHide$$2_newSizeStyleClass_style$$19$$ = this.$_arInfoletsToHide$)) {
        for ($i$$349$$ = 0;$i$$349$$ < $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$.length;$i$$349$$++) {
          $oldSizeStyleClass$$1_tmpInfolet$$ = $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$[$i$$349$$], this.$_arFireHideOnEnd$ || (this.$_arFireHideOnEnd$ = []), $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$, $arFireHideOnEnd_arInfoletsToResize$$3$$.push($oldSizeStyleClass$$1_tmpInfolet$$);
        }
        this.$_arInfoletsToHide$ = null;
      }
    }
    if (!this.$_arInfoletsToHide$) {
      if (this.$_arFireHideOnEnd$) {
        $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$;
        for ($i$$349$$ = 0;$i$$349$$ < $arFireHideOnEnd_arInfoletsToResize$$3$$.length;$i$$349$$++) {
          $event$$338_infolet$$7$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$349$$], this.$isAnimationEnabled$() && this.$_removeStyleClassNameFunc$($event$$338_infolet$$7$$, this.$_transitionHideToStyleClass$), $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$ = $event$$338_infolet$$7$$.style, this.$_rtl$ ? $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$.right = "" : $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$.left = "", $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$.top = "", 
          this.$_hideTileOnEndFunc$ && this.$_hideTileOnEndFunc$($event$$338_infolet$$7$$);
        }
        this.$_arFireHideOnEnd$ = null;
      }
      this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_LAYOUT$;
      this.$_transitionStart$(!1);
      if (this.$_arInfoletsToResize$) {
        for ($arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arInfoletsToResize$, $i$$349$$ = 0;$i$$349$$ < $arFireHideOnEnd_arInfoletsToResize$$3$$.length;$i$$349$$ += 2) {
          $event$$338_infolet$$7$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$349$$], $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$349$$ + 1], $oldSizeStyleClass$$1_tmpInfolet$$ = this.$_getSizeStyleClassNameFunc$($event$$338_infolet$$7$$), this.$_removeStyleClassNameFunc$($event$$338_infolet$$7$$, $oldSizeStyleClass$$1_tmpInfolet$$), this.$_addStyleClassNameFunc$($event$$338_infolet$$7$$, $arInfoletsToHide$$2_newSizeStyleClass_style$$19$$), 
          this.$isAnimationEnabled$() && (this.$_addStyleClassNameFunc$($event$$338_infolet$$7$$, this.$_transitionResizeToStyleClass$), $event$$338_infolet$$7$$.$_afrOldSizeStyleClass$ = $oldSizeStyleClass$$1_tmpInfolet$$);
        }
      }
      this.$_transitionLayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$_showTiles$ = function $$MasonryLayoutCommon$$$$$_showTiles$$() {
    this.$_showTilesTimeout$ && (clearTimeout(this.$_showTilesTimeout$), this.$_showTilesTimeout$ = null);
    this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_SHOW$;
    if (this.$_arInfoletsToShow$ && this.$isAnimationEnabled$()) {
      for (var $arInfoletsToShow$$1$$ = this.$_arInfoletsToShow$, $i$$350$$ = 0;$i$$350$$ < $arInfoletsToShow$$1$$.length;$i$$350$$++) {
        var $infolet$$8$$ = $arInfoletsToShow$$1$$[$i$$350$$];
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$8$$, "transitionend", this.$_handleShowTransitionEndFunc$);
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$8$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
        this.$_addStyleClassNameFunc$($infolet$$8$$, this.$_transitionShowToStyleClass$);
        this.$_removeStyleClassNameFunc$($infolet$$8$$, this.$_transitionShowFromStyleClass$);
      }
    } else {
      if (this.$_arInfoletsToShow$) {
        for ($arInfoletsToShow$$1$$ = this.$_arInfoletsToShow$, $i$$350$$ = 0;$i$$350$$ < $arInfoletsToShow$$1$$.length;$i$$350$$++) {
          $infolet$$8$$ = $arInfoletsToShow$$1$$[$i$$350$$], this.$_removeStyleClassNameFunc$($infolet$$8$$, this.$_transitionShowFromStyleClass$);
        }
      }
      this.$_handleShowTransitionEnd$(null);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_handleShowTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleShowTransitionEnd$$($event$$339_infolet$$9$$) {
    if ($event$$339_infolet$$9$$) {
      $event$$339_infolet$$9$$.preventDefault();
      $event$$339_infolet$$9$$.stopPropagation();
      $event$$339_infolet$$9$$ = $event$$339_infolet$$9$$.target;
      this.$_removeStyleClassNameFunc$($event$$339_infolet$$9$$, this.$_transitionShowToStyleClass$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$339_infolet$$9$$, "transitionend", this.$_handleShowTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$339_infolet$$9$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
      var $arInfoletsToShow$$2$$ = this.$_arInfoletsToShow$;
      if ($arInfoletsToShow$$2$$) {
        for (var $i$$351$$ = 0;$i$$351$$ < $arInfoletsToShow$$2$$.length;$i$$351$$++) {
          var $tmpInfolet$$1$$ = $arInfoletsToShow$$2$$[$i$$351$$];
          if ($tmpInfolet$$1$$ === $event$$339_infolet$$9$$) {
            $arInfoletsToShow$$2$$.splice($i$$351$$, 1);
            this.$_showTileOnEndFunc$ && this.$_showTileOnEndFunc$($event$$339_infolet$$9$$);
            break;
          }
        }
        1 > $arInfoletsToShow$$2$$.length && (this.$_arInfoletsToShow$ = null);
      }
    } else {
      if (!this.$isAnimationEnabled$() && ($arInfoletsToShow$$2$$ = this.$_arInfoletsToShow$)) {
        for ($i$$351$$ = 0;$i$$351$$ < $arInfoletsToShow$$2$$.length;$i$$351$$++) {
          $tmpInfolet$$1$$ = $arInfoletsToShow$$2$$[$i$$351$$], this.$_showTileOnEndFunc$ && this.$_showTileOnEndFunc$($tmpInfolet$$1$$);
        }
        this.$_arInfoletsToShow$ = null;
      }
    }
    this.$_arInfoletsToShow$ || (this.$_layoutPhase$ = null, this.$_layoutCycleOnEndFunc$ && this.$_layoutCycleOnEndFunc$(), this.$_queuedRelayout$ && (this.$_queuedRelayout$ = !1, this.$_queueRelayout$()));
  };
  $MasonryLayoutCommon$$.$_PHASE_HIDE$ = 1;
  $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ = 2;
  $MasonryLayoutCommon$$.$_PHASE_SHOW$ = 3;
});
