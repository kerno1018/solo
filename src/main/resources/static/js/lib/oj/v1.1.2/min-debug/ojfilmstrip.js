/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "promise"], function($oj$$24$$, $$$$23$$) {
  $oj$$24$$.$FilmStripPagingModel$ = function $$oj$$24$$$$FilmStripPagingModel$$() {
    this.Init();
  };
  $oj$$24$$.$Object$.$createSubclass$($oj$$24$$.$FilmStripPagingModel$, $oj$$24$$.$EventSource$, "oj.FilmStripPagingModel");
  $oj$$24$$.$FilmStripPagingModel$.prototype.Init = function $$oj$$24$$$$FilmStripPagingModel$$$Init$() {
    $oj$$24$$.$FilmStripPagingModel$.$superclass$.Init.call(this);
    this.$_page$ = -1;
    this.$_totalSize$ = 0;
    this.$_pageSize$ = -1;
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.Init", {Init:$oj$$24$$.$FilmStripPagingModel$.prototype.Init});
  $oj$$24$$.$FilmStripPagingModel$.prototype.$setTotalSize$ = function $$oj$$24$$$$FilmStripPagingModel$$$$setTotalSize$$($totalSize$$4$$) {
    this.$_totalSize$ = $totalSize$$4$$;
  };
  $oj$$24$$.$FilmStripPagingModel$.prototype.getPage = function $$oj$$24$$$$FilmStripPagingModel$$$getPage$() {
    return this.$_page$;
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.getPage", {getPage:$oj$$24$$.$FilmStripPagingModel$.prototype.getPage});
  $oj$$24$$.$FilmStripPagingModel$.prototype.setPage = function $$oj$$24$$$$FilmStripPagingModel$$$setPage$($page$$8$$, $options$$314$$) {
    $page$$8$$ = parseInt($page$$8$$, 10);
    try {
      var $prevPageCount$$ = this.getPageCount(), $prevPage$$ = this.$_page$, $prevPageSize$$ = this.$_pageSize$, $pageSize$$9$$ = $prevPageSize$$;
      $options$$314$$ && $options$$314$$.pageSize && ($pageSize$$9$$ = $options$$314$$.pageSize);
      var $newPageCount$$ = Math.ceil(this.$_totalSize$ / $pageSize$$9$$);
      if (0 > $page$$8$$ || $page$$8$$ > $newPageCount$$ - 1) {
        throw Error("JET FilmStrip: Invalid 'page' set: " + $page$$8$$);
      }
      var $bFiredBeforePageEvent$$ = !1;
      if ($page$$8$$ != $prevPage$$ || $pageSize$$9$$ != $prevPageSize$$) {
        if (!1 === this.handleEvent("beforePage", {page:$page$$8$$, previousPage:$prevPage$$})) {
          return Promise.reject(null);
        }
        $bFiredBeforePageEvent$$ = !0;
      }
      this.$_page$ = $page$$8$$;
      this.$_pageSize$ = $pageSize$$9$$;
      var $pageCount$$1$$ = this.getPageCount(), $self$$129$$ = this;
      return new Promise(function($resolve$$49$$) {
        $prevPageCount$$ != $pageCount$$1$$ && $self$$129$$.handleEvent("pageCount", {pageCount:$pageCount$$1$$, previousPageCount:$prevPageCount$$});
        $bFiredBeforePageEvent$$ && $self$$129$$.handleEvent("page", {page:$page$$8$$, previousPage:$prevPage$$});
        $resolve$$49$$(null);
      });
    } catch ($e$$94$$) {
      return Promise.reject(null);
    }
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.setPage", {setPage:$oj$$24$$.$FilmStripPagingModel$.prototype.setPage});
  $oj$$24$$.$FilmStripPagingModel$.prototype.getStartItemIndex = function $$oj$$24$$$$FilmStripPagingModel$$$getStartItemIndex$() {
    return this.$_page$ * this.$_pageSize$;
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.getStartItemIndex", {getStartItemIndex:$oj$$24$$.$FilmStripPagingModel$.prototype.getStartItemIndex});
  $oj$$24$$.$FilmStripPagingModel$.prototype.getEndItemIndex = function $$oj$$24$$$$FilmStripPagingModel$$$getEndItemIndex$() {
    return Math.min(this.getStartItemIndex() + this.$_pageSize$, this.$_totalSize$) - 1;
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.getEndItemIndex", {getEndItemIndex:$oj$$24$$.$FilmStripPagingModel$.prototype.getEndItemIndex});
  $oj$$24$$.$FilmStripPagingModel$.prototype.getPageCount = function $$oj$$24$$$$FilmStripPagingModel$$$getPageCount$() {
    return Math.ceil(this.$_totalSize$ / this.$_pageSize$);
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.getPageCount", {getPageCount:$oj$$24$$.$FilmStripPagingModel$.prototype.getPageCount});
  $oj$$24$$.$FilmStripPagingModel$.prototype.totalSize = function $$oj$$24$$$$FilmStripPagingModel$$$totalSize$() {
    return this.$_totalSize$;
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.totalSize", {totalSize:$oj$$24$$.$FilmStripPagingModel$.prototype.totalSize});
  (function() {
    function $_escapeHtml$$($text$$16$$) {
      var $jqDiv$$ = $$$$23$$("\x3cdiv\x3e\x3c/div\x3e");
      $jqDiv$$.text($text$$16$$);
      return $jqDiv$$[0].innerHTML;
    }
    function $_removeTransform$$($jqObj$$1$$) {
      $jqObj$$1$$.css("-webkit-transform", $_EMPTY_STRING$$).css("-ms-transform", $_EMPTY_STRING$$).css("transform", $_EMPTY_STRING$$);
    }
    function $_applyTransform$$($jqObj$$, $transform$$2$$) {
      $jqObj$$.css("-webkit-transform", $transform$$2$$).css("-ms-transform", $transform$$2$$).css("transform", $transform$$2$$);
    }
    $oj$$24$$.$__registerWidget$("oj.ojFilmStrip", $$$$23$$.oj.baseComponent, {defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{maxItemsPerPage:0, orientation:"horizontal", currentItem:0, arrowPlacement:"adjacent", arrowVisibility:"auto"}, _ComponentCreate:function() {
      this._super();
      var $elem$$57_options$$315$$ = this.element;
      $elem$$57_options$$315$$.addClass("oj-filmstrip oj-component").attr("tabindex", 0).attr("role", "region");
      $elem$$57_options$$315$$.uniqueId();
      $elem$$57_options$$315$$ = this.options;
      $elem$$57_options$$315$$.disabled && $oj$$24$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$);
      if ($elem$$57_options$$315$$.orientation !== $_HORIZONTAL$$ && $elem$$57_options$$315$$.orientation !== $_VERTICAL$$) {
        throw Error($_ERROR_INVALID_ORIENTATION$$ + $elem$$57_options$$315$$.orientation);
      }
      if ($elem$$57_options$$315$$.arrowPlacement !== $_ADJACENT$$ && $elem$$57_options$$315$$.arrowPlacement !== $_OVERLAY$$) {
        throw Error($_ERROR_INVALID_NAV_ARROW_PLACEMENT$$ + $elem$$57_options$$315$$.arrowPlacement);
      }
      if ($elem$$57_options$$315$$.arrowVisibility !== $_VISIBLE$$ && $elem$$57_options$$315$$.arrowVisibility !== $_HIDDEN$$ && $elem$$57_options$$315$$.arrowVisibility !== $_HOVER$$ && $elem$$57_options$$315$$.arrowVisibility !== $_AUTO$$) {
        throw Error($_ERROR_INVALID_NAV_ARROW_VISIBILITY$$ + $elem$$57_options$$315$$.arrowVisibility);
      }
      this.$touchEventNamespace$ = this.eventNamespace + "Touch";
      this.$mouseEventNamespace$ = this.eventNamespace + "Mouse";
      this.$keyEventNamespace$ = this.eventNamespace + "Key";
      this.$navArrowHoverableEventNamespace$ = this.eventNamespace + "NavArrowHoverable";
      this.$_setup$(!0);
    }, refresh:function() {
      this._super();
      this.$_setup$(!1);
    }, getItemsPerPage:function() {
      return this.$_itemsPerPage$;
    }, getPagingModel:function() {
      return this.$_pagingModel$;
    }, $_NotifyShown$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyAttached$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_setup$:function($isInit_pagingModel$$) {
      if (this.$_canCalculateSizes$()) {
        this.$_needsSetup$ = null;
        this.$_bRTL$ = "rtl" === this.$_GetReadingDirection$();
        this.$_bTouchSupported$ = $oj$$24$$.$DomUtils$.$isTouchSupported$();
        var $elem$$58_oldIsInit$$ = this.element, $self$$130$$ = this;
        $isInit_pagingModel$$ ? (this.$_itemsPerPage$ = 0, this.$_handlePageFunc$ = function $this$$_handlePageFunc$$($event$$301$$) {
          $self$$130$$.$_handlePage$($event$$301$$);
        }, this.$_pagingModel$ = new $oj$$24$$.$FilmStripPagingModel$, this.$_componentSize$ = 0, this.$_itemSize$ = -1, this.$_handleTransitionEndFunc$ = function $this$$_handleTransitionEndFunc$$() {
          $self$$130$$.$_handleTransitionEnd$();
        }, this.$_handleResizeFunc$ = function $this$$_handleResizeFunc$$() {
          $self$$130$$.$_handleResize$();
        }, this.$_bTouchSupported$ && (this.$_handleTouchStartFunc$ = function $this$$_handleTouchStartFunc$$($event$$303$$) {
          $self$$130$$.$_handleTouchStart$($event$$303$$);
        }, this.$_handleTouchMoveFunc$ = function $this$$_handleTouchMoveFunc$$($event$$304$$) {
          $self$$130$$.$_handleTouchMove$($event$$304$$);
        }, this.$_handleTouchEndFunc$ = function $this$$_handleTouchEndFunc$$($event$$305$$) {
          $self$$130$$.$_handleTouchEnd$($event$$305$$);
        }, this.$_addTouchListeners$()), this.$_handleMouseDownFunc$ = function $this$$_handleMouseDownFunc$$($event$$306$$) {
          $self$$130$$.$_handleMouseDown$($event$$306$$);
        }, this.$_handleMouseMoveFunc$ = function $this$$_handleMouseMoveFunc$$($event$$307$$) {
          $self$$130$$.$_handleMouseMove$($event$$307$$);
        }, this.$_handleMouseUpFunc$ = function $this$$_handleMouseUpFunc$$($event$$308$$) {
          $self$$130$$.$_handleMouseUp$($event$$308$$);
        }, this.$_addMouseListeners$(), this.$_handleKeyDownFunc$ = function $this$$_handleKeyDownFunc$$($event$$309$$) {
          $self$$130$$.$_handleKeyDown$($event$$309$$);
        }, this.$_addKeyListeners$()) : this.$_destroyInternal$();
        for (var $originalItems$$ = $elem$$58_oldIsInit$$.children(), $i$$323$$ = 0;$i$$323$$ < $originalItems$$.length;$i$$323$$++) {
          $oj$$24$$.Components.$subtreeDetached$($originalItems$$[$i$$323$$]);
        }
        $isInit_pagingModel$$ && ($isInit_pagingModel$$ = this.$_pagingModel$, $isInit_pagingModel$$.$setTotalSize$($originalItems$$.length), $isInit_pagingModel$$.on("page", this.$_handlePageFunc$));
        this.$_wrapChildren$();
        this.$_adjustSizes$();
        for ($i$$323$$ = 0;$i$$323$$ < $originalItems$$.length;$i$$323$$++) {
          $oj$$24$$.Components.$subtreeAttached$($originalItems$$[$i$$323$$]);
        }
        $oj$$24$$.$DomUtils$.$addResizeListener$($elem$$58_oldIsInit$$[0], this.$_handleResizeFunc$);
      } else {
        $elem$$58_oldIsInit$$ = !1, this.$_needsSetup$ && ($elem$$58_oldIsInit$$ = this.$_needsSetup$[0]), this.$_needsSetup$ = [$isInit_pagingModel$$ || $elem$$58_oldIsInit$$];
      }
    }, _destroy:function() {
      this.$_bTouchSupported$ && (this.$_removeTouchListeners$(), this.$_handleTouchEndFunc$ = this.$_handleTouchMoveFunc$ = this.$_handleTouchStartFunc$ = null);
      this.$_removeMouseListeners$();
      this.$_handleMouseUpFunc$ = this.$_handleMouseMoveFunc$ = this.$_handleMouseDownFunc$ = null;
      this.$_removeKeyListeners$();
      this.$_handleKeyDownFunc$ = null;
      this.$_destroyInternal$();
      this.$_pagingModel$.off("page", this.$_handlePageFunc$);
      this.$_handleTransitionEndFunc$ = this.$_handleResizeFunc$ = this.$_pagingModel$ = this.$_handlePageFunc$ = null;
      var $elem$$59$$ = this.element;
      $elem$$59$$.removeClass("oj-filmstrip oj-component " + $_OJ_FILMSTRIP_HOVER$$).removeAttr("tabindex role");
      $elem$$59$$.removeUniqueId();
      this._super();
    }, $_destroyInternal$:function() {
      $oj$$24$$.$DomUtils$.$removeResizeListener$(this.element[0], this.$_handleResizeFunc$);
      this.$_itemSize$ = -1;
      this.$_queuedHandleResize$ && (clearTimeout(this.$_queuedHandleResize$), this.$_queuedHandleResize$ = null);
      for (var $originalItems$$1$$ = this.$_getItems$(), $i$$324$$ = 0;$i$$324$$ < $originalItems$$1$$.length;$i$$324$$++) {
        $oj$$24$$.Components.$subtreeDetached$($originalItems$$1$$[$i$$324$$]);
      }
      this.$_clearCalculatedSizes$();
      this.$_getItemContainers$().unwrap();
      this.$_unwrapChildren$();
      for ($i$$324$$ = 0;$i$$324$$ < $originalItems$$1$$.length;$i$$324$$++) {
        $oj$$24$$.Components.$subtreeAttached$($originalItems$$1$$[$i$$324$$]);
      }
    }, _setOption:function($key$$136$$, $value$$233$$, $flags$$30$$) {
      var $options$$316$$ = this.options, $bRefresh$$ = !1, $newPageIndex$$ = -1, $pagingModel$$1$$ = this.$_pagingModel$, $oldPageIndex$$ = $pagingModel$$1$$.getPage();
      switch($key$$136$$) {
        case "disabled":
          $oj$$24$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$);
          break;
        case "orientation":
          if ($value$$233$$ !== $_HORIZONTAL$$ && $value$$233$$ !== $_VERTICAL$$) {
            throw Error($_ERROR_INVALID_ORIENTATION$$ + $value$$233$$);
          }
          $bRefresh$$ = $options$$316$$.orientation != $value$$233$$;
          break;
        case "maxItemsPerPage":
          $bRefresh$$ = $options$$316$$.maxItemsPerPage != $value$$233$$;
          break;
        case "arrowPlacement":
          if ($value$$233$$ !== $_ADJACENT$$ && $value$$233$$ !== $_OVERLAY$$) {
            throw Error($_ERROR_INVALID_NAV_ARROW_PLACEMENT$$ + $value$$233$$);
          }
          $bRefresh$$ = $options$$316$$.arrowPlacement != $value$$233$$;
          break;
        case "arrowVisibility":
          if ($value$$233$$ !== $_VISIBLE$$ && $value$$233$$ !== $_HIDDEN$$ && $value$$233$$ !== $_HOVER$$ && $value$$233$$ !== $_AUTO$$) {
            throw Error($_ERROR_INVALID_NAV_ARROW_VISIBILITY$$ + $value$$233$$);
          }
          $bRefresh$$ = $options$$316$$.arrowVisibility != $value$$233$$;
          break;
        case $_CURRENT_ITEM$$:
          if ($options$$316$$.currentItem != $value$$233$$ && ($newPageIndex$$ = this.$_findPage$($value$$233$$), 0 > $newPageIndex$$ || $newPageIndex$$ >= $pagingModel$$1$$.getPageCount())) {
            throw Error($_ERROR_CURRENT_ITEM_NOT_FOUND$$ + $value$$233$$);
          }
        ;
      }
      this._super($key$$136$$, $value$$233$$, $flags$$30$$);
      switch($key$$136$$) {
        case $_CURRENT_ITEM$$:
          -1 < $newPageIndex$$ && $newPageIndex$$ != $oldPageIndex$$ && $pagingModel$$1$$.setPage($newPageIndex$$);
      }
      $bRefresh$$ && this.$_setup$(!1);
    }, $_handleResize$:function() {
      if (!this.$_bHandlingResize$) {
        this.$_bHandlingResize$ = !0, this.$_adjustSizes$(!0), this.$_bHandlingResize$ = !1;
      } else {
        if (!this.$_queuedHandleResize$) {
          var $self$$131$$ = this;
          this.$_queuedHandleResize$ = setTimeout(function() {
            $self$$131$$.$_queuedHandleResize$ = null;
            $self$$131$$.$_handleResize$();
          }, 0);
        }
      }
    }, $_isHorizontal$:function() {
      return this.options.orientation !== $_VERTICAL$$;
    }, $_getCssPositionAttr$:function() {
      return this.$_isHorizontal$() ? this.$_bRTL$ ? "right" : "left" : "top";
    }, $_getCssSizeAttr$:function() {
      return this.$_isHorizontal$() ? "width" : "height";
    }, $_canCalculateSizes$:function() {
      var $div$$3$$ = document.createElement("div"), $elem$$61_style$$7$$ = $div$$3$$.style;
      $elem$$61_style$$7$$.position = "absolute";
      $elem$$61_style$$7$$.width = "10px";
      $elem$$61_style$$7$$.height = "10px";
      $elem$$61_style$$7$$ = this.element[0];
      $elem$$61_style$$7$$.appendChild($div$$3$$);
      var $bCanCalcSizes$$ = !1;
      try {
        $bCanCalcSizes$$ = 0 < $div$$3$$.offsetWidth && 0 < $div$$3$$.offsetHeight;
      } catch ($e$$95$$) {
      }
      $elem$$61_style$$7$$.removeChild($div$$3$$);
      return $bCanCalcSizes$$;
    }, $_wrapChildren$:function() {
      var $elem$$62$$ = this.element, $bHorizontal$$2$$ = this.$_isHorizontal$();
      $elem$$62$$.children().addClass($_OJ_FILMSTRIP_ITEM$$).wrap("\x3cdiv class\x3d'" + $_OJ_FILMSTRIP_CONTAINER$$ + " " + $_OJ_FILMSTRIP_ITEM_CONTAINER$$ + "'\x3e\x3c/div\x3e");
      var $cssAttr_pagesWrapper$$ = this.$_getCssPositionAttr$();
      this.$_pagesWrapper$ = $cssAttr_pagesWrapper$$ = $elem$$62$$.children().wrapAll("\x3cdiv class\x3d'" + $_OJ_FILMSTRIP_CONTAINER$$ + " " + $_OJ_FILMSTRIP_PAGES_CONTAINER$$ + "' style\x3d'" + $cssAttr_pagesWrapper$$ + ": 0px;'\x3e\x3c/div\x3e").parent();
      var $options$$318$$ = this.options;
      $options$$318$$.arrowVisibility !== $_HIDDEN$$ && $options$$318$$.arrowPlacement === $_ADJACENT$$ && (this.$_contentWrapper$ = $cssAttr_pagesWrapper$$.wrap("\x3cdiv class\x3d'oj-filmstrip-content-container'\x3e\x3c/div\x3e").parent());
      $elem$$62$$.addClass($_OJ_FILMSTRIP_CONTAINER$$);
      $bHorizontal$$2$$ || $elem$$62$$.addClass($_OJ_FILMSTRIP_VERTICAL$$);
      $options$$318$$.arrowVisibility !== $_HIDDEN$$ && (this.$_prevButton$ = this.$_createPrevNavArrow$(), this.$_nextButton$ = this.$_createNextNavArrow$(), this.$_navArrowsShownOnHover$() && this.$_setupNavArrowsHoverable$());
    }, $_unwrapChildren$:function() {
      var $elem$$63$$ = this.element, $originalItems$$3$$ = this.$_getItems$();
      this.$_tearDownNavArrowsHoverable$();
      this.$_prevButton$ && (this.$_UnregisterChildNode$(this.$_prevButton$), this.$_prevButton$ = null);
      this.$_nextButton$ && (this.$_UnregisterChildNode$(this.$_nextButton$), this.$_nextButton$ = null);
      var $navArrowContainers$$ = $elem$$63$$.children($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW_CONTAINER$$);
      $navArrowContainers$$ && $navArrowContainers$$.remove();
      $originalItems$$3$$.removeClass($_OJ_FILMSTRIP_ITEM$$).unwrap().unwrap();
      this.$_pagesWrapper$ = null;
      this.$_contentWrapper$ && ($originalItems$$3$$.unwrap(), this.$_contentWrapper$ = null);
      $elem$$63$$.removeClass($_OJ_FILMSTRIP_CONTAINER$$ + " " + $_OJ_FILMSTRIP_VERTICAL$$);
    }, $_setupNavArrowsHoverable$:function() {
      this.element.on("mouseenter" + this.$navArrowHoverableEventNamespace$, function($event$$310$$) {
        $$$$23$$($event$$310$$.currentTarget).hasClass("oj-disabled") || $$$$23$$($event$$310$$.currentTarget).addClass($_OJ_FILMSTRIP_HOVER$$);
      }).on("mouseleave" + this.$navArrowHoverableEventNamespace$, function($event$$311$$) {
        $$$$23$$($event$$311$$.currentTarget).removeClass($_OJ_FILMSTRIP_HOVER$$);
      });
    }, $_tearDownNavArrowsHoverable$:function() {
      this.element.off(this.$navArrowHoverableEventNamespace$);
    }, $_navArrowsShownOnHover$:function() {
      var $options$$319$$ = this.options, $arrowVisibility$$ = $options$$319$$.arrowVisibility;
      return $arrowVisibility$$ === $_HOVER$$ || $arrowVisibility$$ === $_AUTO$$ && $options$$319$$.arrowPlacement === $_OVERLAY$$;
    }, $_hasPrevPage$:function() {
      return 0 < this.$_pagingModel$.getPage();
    }, $_hasNextPage$:function() {
      var $pagingModel$$3$$ = this.$_pagingModel$;
      return $pagingModel$$3$$.getPage() < $pagingModel$$3$$.getPageCount() - 1;
    }, $_prevPage$:function() {
      if (this.$_hasPrevPage$()) {
        var $pagingModel$$4$$ = this.$_pagingModel$;
        $pagingModel$$4$$.setPage($pagingModel$$4$$.getPage() - 1);
      }
    }, $_nextPage$:function() {
      if (this.$_hasNextPage$()) {
        var $pagingModel$$5$$ = this.$_pagingModel$;
        $pagingModel$$5$$.setPage($pagingModel$$5$$.getPage() + 1);
      }
    }, $_displayNavigationArrow$:function($bShow$$, $jqNavArrow$$) {
      this.options.arrowPlacement === $_ADJACENT$$ ? $jqNavArrow$$.css("visibility", $bShow$$ ? "" : $_HIDDEN$$) : $jqNavArrow$$.parent().css("display", $bShow$$ ? "" : $_NONE$$);
    }, $_updateNavigationArrowsDisplay$:function() {
      if (this.options.arrowVisibility !== $_HIDDEN$$) {
        var $pageCount$$2_pagingModel$$6$$ = this.$_pagingModel$, $pageIndex$$ = $pageCount$$2_pagingModel$$6$$.getPage(), $pageCount$$2_pagingModel$$6$$ = $pageCount$$2_pagingModel$$6$$.getPageCount();
        this.$_displayNavigationArrow$(0 !== $pageIndex$$, this.$_prevButton$);
        this.$_displayNavigationArrow$($pageIndex$$ !== $pageCount$$2_pagingModel$$6$$ - 1, this.$_nextButton$);
      }
    }, $_createPrevNavArrow$:function() {
      var $elem$$66_label$$9$$ = this.element, $locationMarker_navArrow$$ = this.$_isHorizontal$() ? $_OJ_START$$ : $_OJ_TOP$$, $container$$15$$ = this.$_createNavigationArrowContainer$($locationMarker_navArrow$$);
      this.options.arrowPlacement === $_OVERLAY$$ ? $elem$$66_label$$9$$.append($container$$15$$) : $elem$$66_label$$9$$.prepend($container$$15$$);
      var $elem$$66_label$$9$$ = $_escapeHtml$$(this.$getTranslatedString$("labelAccArrowPreviousPage")), $tooltip$$ = $_escapeHtml$$(this.$getTranslatedString$("tipArrowPreviousPage")), $locationMarker_navArrow$$ = this.$_createNavigationArrow$($container$$15$$, $locationMarker_navArrow$$, $elem$$66_label$$9$$, $tooltip$$), $self$$132$$ = this;
      $locationMarker_navArrow$$.on("click", function() {
        $self$$132$$.$_prevPage$();
      });
      return $locationMarker_navArrow$$;
    }, $_createNextNavArrow$:function() {
      var $elem$$67_label$$10$$ = this.element, $locationMarker$$1_navArrow$$1$$ = this.$_isHorizontal$() ? $_OJ_END$$ : $_OJ_BOTTOM$$, $container$$16$$ = this.$_createNavigationArrowContainer$($locationMarker$$1_navArrow$$1$$);
      $elem$$67_label$$10$$.append($container$$16$$);
      var $elem$$67_label$$10$$ = $_escapeHtml$$(this.$getTranslatedString$("labelAccArrowNextPage")), $tooltip$$1$$ = $_escapeHtml$$(this.$getTranslatedString$("tipArrowNextPage")), $locationMarker$$1_navArrow$$1$$ = this.$_createNavigationArrow$($container$$16$$, $locationMarker$$1_navArrow$$1$$, $elem$$67_label$$10$$, $tooltip$$1$$), $self$$133$$ = this;
      $locationMarker$$1_navArrow$$1$$.on("click", function() {
        $self$$133$$.$_nextPage$();
      });
      return $locationMarker$$1_navArrow$$1$$;
    }, $_createNavigationArrowContainer$:function($locationMarker$$2$$) {
      var $container$$17$$ = $$$$23$$(document.createElement("div"));
      $container$$17$$.addClass($_OJ_FILMSTRIP_ARROW_CONTAINER$$ + " " + $locationMarker$$2$$);
      this.options.arrowPlacement === $_OVERLAY$$ && ($container$$17$$.addClass("oj-filmstrip-arrow-container-overlay"), this.$_navArrowsShownOnHover$() && $container$$17$$.addClass($_OJ_FILMSTRIP_ARROW_TRANSITION$$));
      return $container$$17$$;
    }, $_createNavigationArrow$:function($arrowElem_parentElem$$3$$, $elemId_locationMarker$$3$$, $label$$11$$, $tooltip$$2$$) {
      var $arrowId_str$$20$$ = "\x3cdiv class\x3d'" + $_OJ_FILMSTRIP_ARROW$$ + " oj-default oj-enabled " + $elemId_locationMarker$$3$$ + "' role\x3d'button' tabindex\x3d'-1'";
      $arrowElem_parentElem$$3$$.append($arrowId_str$$20$$ + ("\x3e\x3cspan class\x3d'oj-filmstrip-arrow-icon " + $elemId_locationMarker$$3$$ + " oj-component-icon'\x3e\x3c/span\x3e\x3c/div\x3e"));
      $elemId_locationMarker$$3$$ = this.element.attr("id");
      $arrowElem_parentElem$$3$$ = $arrowElem_parentElem$$3$$.children($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW$$).eq(0);
      $arrowElem_parentElem$$3$$.uniqueId();
      $arrowId_str$$20$$ = $arrowElem_parentElem$$3$$.attr("id");
      $label$$11$$ && $arrowElem_parentElem$$3$$.attr("aria-label", $label$$11$$);
      $tooltip$$2$$ && $arrowElem_parentElem$$3$$.attr("title", $tooltip$$2$$);
      $arrowElem_parentElem$$3$$.attr("aria-labelledby", $arrowId_str$$20$$ + " " + $elemId_locationMarker$$3$$);
      this._hoverable($arrowElem_parentElem$$3$$);
      this.$_activeable$($arrowElem_parentElem$$3$$);
      this.options.arrowPlacement === $_ADJACENT$$ && this.$_navArrowsShownOnHover$() && $arrowElem_parentElem$$3$$.addClass($_OJ_FILMSTRIP_ARROW_TRANSITION$$);
      return $arrowElem_parentElem$$3$$;
    }, $_getItemContainers$:function() {
      return this.$_pagesWrapper$.find($_PERIOD$$ + $_OJ_FILMSTRIP_ITEM_CONTAINER$$);
    }, $_getItems$:function() {
      return this.$_pagesWrapper$.find($_PERIOD$$ + $_OJ_FILMSTRIP_ITEM$$);
    }, $_getPages$:function() {
      return this.$_pagesWrapper$.children($_PERIOD$$ + $_OJ_FILMSTRIP_PAGE$$);
    }, $_clearCalculatedSizes$:function() {
      var $pagesWrapper$$4$$ = this.$_pagesWrapper$;
      this.$_getPages$().css($_FLEX_BASIS$$, $_EMPTY_STRING$$).css($_WEBKIT_FLEX_BASIS$$, $_EMPTY_STRING$$);
      this.$_getItemContainers$().css($_FLEX_BASIS$$, $_EMPTY_STRING$$).css($_WEBKIT_FLEX_BASIS$$, $_EMPTY_STRING$$);
      $pagesWrapper$$4$$.css(this.$_getCssSizeAttr$(), $_EMPTY_STRING$$);
    }, $_adjustSizes$:function($bNotifyAttach_contentWrapper_newPageIndex$$1$$) {
      this.$_clearCalculatedSizes$();
      var $currPage_options$$325$$ = this.options, $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ = this.$_isHorizontal$(), $fitCount_itemsPerPage$$ = $currPage_options$$325$$.maxItemsPerPage, $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ = 1 > $fitCount_itemsPerPage$$, $elem$$69_firstArrowContainer_pagingModel$$7$$ = this.element, $items$$10$$ = this.$_getItemContainers$();
      if (0 > this.$_itemSize$) {
        var $componentSize_optionItemContainer_optionItemIndex$$ = this.$_getItemIndex$($currPage_options$$325$$.currentItem), $componentSize_optionItemContainer_optionItemIndex$$ = $$$$23$$($items$$10$$[$componentSize_optionItemContainer_optionItemIndex$$]), $optionItem_pages$$2$$ = $componentSize_optionItemContainer_optionItemIndex$$.children($_PERIOD$$ + $_OJ_FILMSTRIP_ITEM$$);
        $optionItem_pages$$2$$.css($_DISPLAY$$, $_EMPTY_STRING$$);
        $oj$$24$$.Components.$subtreeShown$($optionItem_pages$$2$$[0]);
        this.$_itemSize$ = $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ ? $componentSize_optionItemContainer_optionItemIndex$$.width() : $componentSize_optionItemContainer_optionItemIndex$$.height();
      }
      $componentSize_optionItemContainer_optionItemIndex$$ = $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ ? $elem$$69_firstArrowContainer_pagingModel$$7$$.width() : $elem$$69_firstArrowContainer_pagingModel$$7$$.height();
      $currPage_options$$325$$.arrowVisibility !== $_HIDDEN$$ && $currPage_options$$325$$.arrowPlacement === $_ADJACENT$$ && ($elem$$69_firstArrowContainer_pagingModel$$7$$ = $elem$$69_firstArrowContainer_pagingModel$$7$$.children($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW_CONTAINER$$).eq(0), $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ = $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ ? $elem$$69_firstArrowContainer_pagingModel$$7$$.width() : $elem$$69_firstArrowContainer_pagingModel$$7$$.height(), 
      $componentSize_optionItemContainer_optionItemIndex$$ -= 2 * $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$);
      this.$_componentSize$ = $componentSize_optionItemContainer_optionItemIndex$$;
      $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ || ($arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ = Math.max(Math.floor($componentSize_optionItemContainer_optionItemIndex$$ / this.$_itemSize$), 1), $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ < $fitCount_itemsPerPage$$ && ($fitCount_itemsPerPage$$ = $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$));
      $fitCount_itemsPerPage$$ = $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ ? Math.max(Math.floor($componentSize_optionItemContainer_optionItemIndex$$ / this.$_itemSize$), 1) : $fitCount_itemsPerPage$$;
      $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ = $componentSize_optionItemContainer_optionItemIndex$$ / $fitCount_itemsPerPage$$;
      $items$$10$$.css($_FLEX_BASIS$$, $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ + $_PX$$).css($_WEBKIT_FLEX_BASIS$$, $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ + $_PX$$);
      $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ = Math.ceil($items$$10$$.length / $fitCount_itemsPerPage$$);
      $optionItem_pages$$2$$ = this.$_getPages$();
      $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ = !1;
      $elem$$69_firstArrowContainer_pagingModel$$7$$ = this.$_pagingModel$;
      if ($elem$$69_firstArrowContainer_pagingModel$$7$$.getPageCount() != $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ || this.$_itemsPerPage$ != $fitCount_itemsPerPage$$ || !$optionItem_pages$$2$$ || 1 > $optionItem_pages$$2$$.length) {
        $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ = !0;
        if ($bNotifyAttach_contentWrapper_newPageIndex$$1$$) {
          for (var $i$$325$$ = 0;$i$$325$$ < $items$$10$$.length;$i$$325$$++) {
            $oj$$24$$.Components.$subtreeDetached$($items$$10$$[$i$$325$$]);
          }
        }
        $optionItem_pages$$2$$ && 0 < $optionItem_pages$$2$$.length && $items$$10$$.unwrap();
        for ($i$$325$$ = 0;$i$$325$$ < $items$$10$$.length;$i$$325$$ += $fitCount_itemsPerPage$$) {
          $items$$10$$.slice($i$$325$$, $i$$325$$ + $fitCount_itemsPerPage$$).wrapAll("\x3cdiv class\x3d'" + $_OJ_FILMSTRIP_CONTAINER$$ + " " + $_OJ_FILMSTRIP_PAGE$$ + "' style\x3d'" + $_DISPLAY$$ + ": " + $_NONE$$ + ";' " + $_ARIA_HIDDEN$$ + "\x3d'true'\x3e\x3c/div\x3e");
        }
        if ($bNotifyAttach_contentWrapper_newPageIndex$$1$$) {
          for ($i$$325$$ = 0;$i$$325$$ < $items$$10$$.length;$i$$325$$++) {
            $oj$$24$$.Components.$subtreeAttached$($items$$10$$[$i$$325$$]);
          }
        }
      }
      $optionItem_pages$$2$$ = this.$_getPages$();
      $optionItem_pages$$2$$.css($_FLEX_BASIS$$, $componentSize_optionItemContainer_optionItemIndex$$ + $_PX$$).css($_WEBKIT_FLEX_BASIS$$, $componentSize_optionItemContainer_optionItemIndex$$ + $_PX$$);
      $bNotifyAttach_contentWrapper_newPageIndex$$1$$ = this.$_contentWrapper$;
      this.$_pagesWrapper$.css(this.$_getCssSizeAttr$(), $componentSize_optionItemContainer_optionItemIndex$$);
      $bNotifyAttach_contentWrapper_newPageIndex$$1$$ && $bNotifyAttach_contentWrapper_newPageIndex$$1$$.css(this.$_getCssSizeAttr$(), $componentSize_optionItemContainer_optionItemIndex$$);
      $bNotifyAttach_contentWrapper_newPageIndex$$1$$ = 0;
      if ($currPage_options$$325$$.currentItem || 0 === $currPage_options$$325$$.currentItem) {
        $bNotifyAttach_contentWrapper_newPageIndex$$1$$ = this.$_findPage$($currPage_options$$325$$.currentItem, $fitCount_itemsPerPage$$);
      }
      $elem$$69_firstArrowContainer_pagingModel$$7$$.getPageCount() != $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ || this.$_itemsPerPage$ != $fitCount_itemsPerPage$$ || $elem$$69_firstArrowContainer_pagingModel$$7$$.getPage() != $bNotifyAttach_contentWrapper_newPageIndex$$1$$ ? $elem$$69_firstArrowContainer_pagingModel$$7$$.setPage($bNotifyAttach_contentWrapper_newPageIndex$$1$$, {pageSize:$fitCount_itemsPerPage$$}) : $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ && ($currPage_options$$325$$ = 
      $elem$$69_firstArrowContainer_pagingModel$$7$$.getPage(), this.$_handlePage$({previousPage:$currPage_options$$325$$, page:$currPage_options$$325$$}));
    }, $_handlePage$:function($event$$312_pagesWrapper$$6$$) {
      var $pageIndex$$1$$ = $event$$312_pagesWrapper$$6$$.page, $prevPageIndex$$ = $event$$312_pagesWrapper$$6$$.previousPage;
      $event$$312_pagesWrapper$$6$$ = this.$_pagesWrapper$;
      var $pages$$3$$ = this.$_getPages$(), $oldPage_pageSize$$10$$ = this.$_pagingModel$.$_pageSize$, $bImmediate$$ = 0 > $prevPageIndex$$ || $prevPageIndex$$ == $pageIndex$$1$$ || this.$_itemsPerPage$ != $oldPage_pageSize$$10$$;
      this.$_itemsPerPage$ = $oldPage_pageSize$$10$$;
      $oldPage_pageSize$$10$$ = null;
      $bImmediate$$ || ($oldPage_pageSize$$10$$ = $$$$23$$($pages$$3$$[$prevPageIndex$$]));
      var $cssAttr$$1$$ = this.$_getCssPositionAttr$(), $newPage$$ = $$$$23$$($pages$$3$$[$pageIndex$$1$$]), $bPageHidden$$ = $newPage$$.is($_HIDDEN_SELECTOR$$);
      $bPageHidden$$ && this.$_unhidePage$($newPage$$);
      var $bDeferScroll$$ = this.$_bDragInit$;
      -1 < $prevPageIndex$$ && !$bImmediate$$ && ($bDeferScroll$$ = !0, $event$$312_pagesWrapper$$6$$.css(this.$_getCssSizeAttr$(), 2 * this.$_componentSize$), $pageIndex$$1$$ < $prevPageIndex$$ && $bPageHidden$$ && $event$$312_pagesWrapper$$6$$.css($cssAttr$$1$$, -this.$_componentSize$ + $_PX$$), $pageIndex$$1$$ > $prevPageIndex$$ ? ($oldPage_pageSize$$10$$.addClass($_OJ_FILMSTRIP_TRANSITION_NEXT_OLDPAGE_FROM$$), $newPage$$.addClass($_OJ_FILMSTRIP_TRANSITION_NEXT_NEWPAGE_FROM$$)) : ($oldPage_pageSize$$10$$.addClass($_OJ_FILMSTRIP_TRANSITION_PREV_OLDPAGE_FROM$$), 
      $newPage$$.addClass($_OJ_FILMSTRIP_TRANSITION_PREV_NEWPAGE_FROM$$)));
      if ($bDeferScroll$$) {
        var $self$$134$$ = this, $bDragInit$$ = this.$_bDragInit$;
        $bDragInit$$ && 0 > $prevPageIndex$$ && $pages$$3$$.filter($_VISIBLE_SELECTOR$$).addClass($_OJ_FILMSTRIP_TRANSITION$$);
        setTimeout(function() {
          $self$$134$$.$_finishHandlePage$($pageIndex$$1$$, $prevPageIndex$$, $bImmediate$$, $bDragInit$$);
        }, 25);
      } else {
        this.$_finishHandlePage$($pageIndex$$1$$, $prevPageIndex$$, $bImmediate$$);
      }
    }, $_finishHandlePage$:function($newPage$$1_pageIndex$$2_visiblePages$$1$$, $oldPage$$1_prevPageIndex$$1$$, $bImmediate$$1_pages$$4$$, $bDragInit$$1_bNext$$) {
      var $pagesWrapper$$7$$ = this.$_pagesWrapper$;
      $bImmediate$$1_pages$$4$$ || (this.$_bPageChangeTransition$ = !0, $pagesWrapper$$7$$.on("transitionend" + this.eventNamespace + " webkitTransitionEnd" + this.eventNamespace, this.$_handleTransitionEndFunc$));
      $bImmediate$$1_pages$$4$$ ? this.$_handleTransitionEnd$() : ($bImmediate$$1_pages$$4$$ = this.$_getPages$(), $bDragInit$$1_bNext$$ && $_removeTransform$$($bImmediate$$1_pages$$4$$), -1 < $oldPage$$1_prevPageIndex$$1$$ ? ($bDragInit$$1_bNext$$ = $newPage$$1_pageIndex$$2_visiblePages$$1$$ > $oldPage$$1_prevPageIndex$$1$$, $oldPage$$1_prevPageIndex$$1$$ = $$$$23$$($bImmediate$$1_pages$$4$$[$oldPage$$1_prevPageIndex$$1$$]), $newPage$$1_pageIndex$$2_visiblePages$$1$$ = $$$$23$$($bImmediate$$1_pages$$4$$[$newPage$$1_pageIndex$$2_visiblePages$$1$$]), 
      $oldPage$$1_prevPageIndex$$1$$.addClass($_OJ_FILMSTRIP_TRANSITION$$), $newPage$$1_pageIndex$$2_visiblePages$$1$$.addClass($_OJ_FILMSTRIP_TRANSITION$$), $bDragInit$$1_bNext$$ ? ($oldPage$$1_prevPageIndex$$1$$.removeClass($_OJ_FILMSTRIP_TRANSITION_NEXT_OLDPAGE_FROM$$), $newPage$$1_pageIndex$$2_visiblePages$$1$$.removeClass($_OJ_FILMSTRIP_TRANSITION_NEXT_NEWPAGE_FROM$$), $oldPage$$1_prevPageIndex$$1$$.addClass($_OJ_FILMSTRIP_TRANSITION_NEXT_OLDPAGE_TO$$), $newPage$$1_pageIndex$$2_visiblePages$$1$$.addClass($_OJ_FILMSTRIP_TRANSITION_NEXT_NEWPAGE_TO$$)) : 
      ($oldPage$$1_prevPageIndex$$1$$.removeClass($_OJ_FILMSTRIP_TRANSITION_PREV_OLDPAGE_FROM$$), $newPage$$1_pageIndex$$2_visiblePages$$1$$.removeClass($_OJ_FILMSTRIP_TRANSITION_PREV_NEWPAGE_FROM$$), $oldPage$$1_prevPageIndex$$1$$.addClass($_OJ_FILMSTRIP_TRANSITION_PREV_OLDPAGE_TO$$), $newPage$$1_pageIndex$$2_visiblePages$$1$$.addClass($_OJ_FILMSTRIP_TRANSITION_PREV_NEWPAGE_TO$$))) : $bDragInit$$1_bNext$$ && ($newPage$$1_pageIndex$$2_visiblePages$$1$$ = $bImmediate$$1_pages$$4$$.filter($_VISIBLE_SELECTOR$$), 
      $_applyTransform$$($newPage$$1_pageIndex$$2_visiblePages$$1$$, "translate3d(0, 0, 0)")));
    }, $_handleTransitionEnd$:function() {
      this.$_bPageChangeTransition$ = !1;
      var $newFirstItem_pageIndex$$3_pagesWrapper$$8$$ = this.$_pagesWrapper$, $cssAttr$$2_elem$$70_focusElem$$ = this.$_getCssPositionAttr$();
      $newFirstItem_pageIndex$$3_pagesWrapper$$8$$.off(this.eventNamespace).css(this.$_getCssSizeAttr$(), this.$_componentSize$).css($cssAttr$$2_elem$$70_focusElem$$, "0px");
      $cssAttr$$2_elem$$70_focusElem$$ = null;
      if ($oj$$24$$.$FocusUtils$.$containsFocus$($newFirstItem_pageIndex$$3_pagesWrapper$$8$$[0]) || this.$_nextButton$ && $oj$$24$$.$FocusUtils$.$containsFocus$(this.$_nextButton$) || this.$_prevButton$ && $oj$$24$$.$FocusUtils$.$containsFocus$(this.$_prevButton$)) {
        $cssAttr$$2_elem$$70_focusElem$$ = document.activeElement;
      }
      for (var $newFirstItem_pageIndex$$3_pagesWrapper$$8$$ = this.$_pagingModel$.getPage(), $firstTabStop_pages$$5$$ = this.$_getPages$(), $i$$326$$ = 0;$i$$326$$ < $firstTabStop_pages$$5$$.length;$i$$326$$++) {
        $i$$326$$ != $newFirstItem_pageIndex$$3_pagesWrapper$$8$$ && this.$_hidePage$($$$$23$$($firstTabStop_pages$$5$$[$i$$326$$]));
      }
      $firstTabStop_pages$$5$$.removeClass($_OJ_FILMSTRIP_TRANSITION$$ + " " + $_OJ_FILMSTRIP_TRANSITION_NEXT_OLDPAGE_TO$$ + " " + $_OJ_FILMSTRIP_TRANSITION_NEXT_NEWPAGE_TO$$ + " " + $_OJ_FILMSTRIP_TRANSITION_PREV_OLDPAGE_TO$$ + " " + $_OJ_FILMSTRIP_TRANSITION_PREV_NEWPAGE_TO$$);
      $_removeTransform$$($firstTabStop_pages$$5$$);
      this.$_updateNavigationArrowsDisplay$();
      $cssAttr$$2_elem$$70_focusElem$$ && $$$$23$$($cssAttr$$2_elem$$70_focusElem$$).is($_HIDDEN_SELECTOR$$) && ($cssAttr$$2_elem$$70_focusElem$$ = this.element, ($firstTabStop_pages$$5$$ = $oj$$24$$.$FocusUtils$.$getFirstTabStop$($firstTabStop_pages$$5$$[$newFirstItem_pageIndex$$3_pagesWrapper$$8$$])) ? $oj$$24$$.$FocusUtils$.$focusElement$($firstTabStop_pages$$5$$) : $oj$$24$$.$FocusUtils$.$focusElement$($cssAttr$$2_elem$$70_focusElem$$[0]));
      this.$_findPage$(this.options.currentItem) != $newFirstItem_pageIndex$$3_pagesWrapper$$8$$ && ($newFirstItem_pageIndex$$3_pagesWrapper$$8$$ = this.$_getFirstItemOnPage$($newFirstItem_pageIndex$$3_pagesWrapper$$8$$), this.option($_CURRENT_ITEM$$, $newFirstItem_pageIndex$$3_pagesWrapper$$8$$, {_context:{$writeback$:!0}}));
    }, $_getItemIndex$:function($item$$86$$) {
      var $itemIndex$$ = -1, $items$$11$$ = this.$_getItems$();
      if ("number" === typeof $item$$86$$) {
        0 <= $item$$86$$ && $item$$86$$ < $items$$11$$.length && ($itemIndex$$ = $item$$86$$);
      } else {
        if ("string" === typeof $item$$86$$ && $oj$$24$$.$DomUtils$.$isValidIdentifier$($item$$86$$)) {
          for (var $i$$327$$ = 0;$i$$327$$ < $items$$11$$.length;$i$$327$$++) {
            var $itemId$$ = $items$$11$$[$i$$327$$].id;
            if ($itemId$$ && 0 < $itemId$$.length && $itemId$$ === $item$$86$$) {
              $itemIndex$$ = $i$$327$$;
              break;
            }
          }
        }
      }
      return $itemIndex$$;
    }, $_findPage$:function($item$$87$$, $itemsPerPage$$1$$) {
      var $itemIndex$$1$$ = this.$_getItemIndex$($item$$87$$), $pageIndex$$4$$ = -1;
      -1 < $itemIndex$$1$$ && (void 0 === $itemsPerPage$$1$$ && ($itemsPerPage$$1$$ = this.$_itemsPerPage$), $pageIndex$$4$$ = Math.floor($itemIndex$$1$$ / $itemsPerPage$$1$$));
      return $pageIndex$$4$$;
    }, $_getFirstItemOnPage$:function($itemIndex$$2_pageIndex$$5$$, $items$$12_pageCount$$3$$, $firstId_itemsPerPage$$2$$) {
      var $pagingModel$$10$$ = this.$_pagingModel$;
      void 0 === $items$$12_pageCount$$3$$ && ($items$$12_pageCount$$3$$ = $pagingModel$$10$$.getPageCount());
      return 0 <= $itemIndex$$2_pageIndex$$5$$ && $itemIndex$$2_pageIndex$$5$$ < $items$$12_pageCount$$3$$ && ($items$$12_pageCount$$3$$ = this.$_getItems$(), void 0 === $firstId_itemsPerPage$$2$$ && ($firstId_itemsPerPage$$2$$ = this.$_itemsPerPage$), $itemIndex$$2_pageIndex$$5$$ *= $firstId_itemsPerPage$$2$$, $itemIndex$$2_pageIndex$$5$$ < $items$$12_pageCount$$3$$.length) ? ($firstId_itemsPerPage$$2$$ = $items$$12_pageCount$$3$$[$itemIndex$$2_pageIndex$$5$$].id) && 0 < $firstId_itemsPerPage$$2$$.length ? 
      $firstId_itemsPerPage$$2$$ : $itemIndex$$2_pageIndex$$5$$ : -1;
    }, $_hidePage$:function($page$$9$$) {
      $oj$$24$$.Components.$subtreeHidden$($page$$9$$[0]);
      $page$$9$$.css($_DISPLAY$$, $_NONE$$).attr($_ARIA_HIDDEN$$, "true");
      $page$$9$$.find($_PERIOD$$ + $_OJ_FILMSTRIP_ITEM$$).css($_DISPLAY$$, $_NONE$$);
    }, $_unhidePage$:function($page$$10$$) {
      $page$$10$$.css($_DISPLAY$$, $_EMPTY_STRING$$).removeAttr($_ARIA_HIDDEN$$);
      $page$$10$$.find($_PERIOD$$ + $_OJ_FILMSTRIP_ITEM$$).css($_DISPLAY$$, $_EMPTY_STRING$$);
      $oj$$24$$.Components.$subtreeShown$($page$$10$$[0]);
    }, $_addKeyListeners$:function() {
      this.element.on("keydown" + this.$keyEventNamespace$, this.$_handleKeyDownFunc$);
    }, $_removeKeyListeners$:function() {
      this.element.off(this.$keyEventNamespace$);
    }, $_addMouseListeners$:function() {
      this.element.on("mousedown" + this.$mouseEventNamespace$, this.$_handleMouseDownFunc$).on("mousemove" + this.$mouseEventNamespace$, this.$_handleMouseMoveFunc$).on("mouseup" + this.$mouseEventNamespace$, this.$_handleMouseUpFunc$);
    }, $_removeMouseListeners$:function() {
      this.element.off(this.$mouseEventNamespace$);
    }, $_addTouchListeners$:function() {
      this.element.on("touchstart" + this.$touchEventNamespace$, this.$_handleTouchStartFunc$).on("touchmove" + this.$touchEventNamespace$, this.$_handleTouchMoveFunc$).on("touchend" + this.$touchEventNamespace$, this.$_handleTouchEndFunc$).on("touchcancel" + this.$touchEventNamespace$, this.$_handleTouchEndFunc$);
    }, $_removeTouchListeners$:function() {
      this.element.off(this.$touchEventNamespace$);
    }, $_handleKeyDown$:function($event$$313$$) {
      var $pagingModel$$11$$ = this.$_pagingModel$, $pageIndex$$6$$ = $pagingModel$$11$$.getPage(), $newPageIndex$$2$$ = -1;
      switch($event$$313$$.keyCode) {
        case $$$$23$$.ui.keyCode.RIGHT:
          $newPageIndex$$2$$ = this.$_bRTL$ ? $pageIndex$$6$$ - 1 : $pageIndex$$6$$ + 1;
          break;
        case $$$$23$$.ui.keyCode.LEFT:
          $newPageIndex$$2$$ = this.$_bRTL$ ? $pageIndex$$6$$ + 1 : $pageIndex$$6$$ - 1;
          break;
        case $$$$23$$.ui.keyCode.DOWN:
          $newPageIndex$$2$$ = $pageIndex$$6$$ + 1;
          break;
        case $$$$23$$.ui.keyCode.UP:
          $newPageIndex$$2$$ = $pageIndex$$6$$ - 1;
          break;
        case $$$$23$$.ui.keyCode.HOME:
          $newPageIndex$$2$$ = 0;
          break;
        case $$$$23$$.ui.keyCode.END:
          $newPageIndex$$2$$ = $pagingModel$$11$$.getPageCount() - 1;
          break;
        default:
          return;
      }
      -1 < $newPageIndex$$2$$ && $newPageIndex$$2$$ < $pagingModel$$11$$.getPageCount() && $pagingModel$$11$$.setPage($newPageIndex$$2$$);
      $event$$313$$.preventDefault();
    }, $_handleMouseDown$:function($event$$314$$) {
      this.$_dragScrollStart$($event$$314$$.originalEvent);
    }, $_handleMouseMove$:function($event$$315$$) {
      this.$_dragScrollMove$($event$$315$$, $event$$315$$.originalEvent);
    }, $_handleMouseUp$:function() {
      this.$_dragScrollEnd$();
    }, $_handleTouchStart$:function($event$$317_eventTouches$$) {
      $event$$317_eventTouches$$ = $event$$317_eventTouches$$.originalEvent.touches;
      1 === $event$$317_eventTouches$$.length && this.$_dragScrollStart$($event$$317_eventTouches$$[0]);
    }, $_handleTouchMove$:function($event$$318$$) {
      this.$_dragScrollMove$($event$$318$$, $event$$318$$.originalEvent.touches[0]);
      (this.$_bTouch$ || this.$_scrolledForThisTouch$) && $event$$318$$.preventDefault();
    }, $_handleTouchEnd$:function() {
      this.$_dragScrollEnd$();
    }, $_dragScrollStart$:function($coordsObj$$) {
      1 < this.$_pagingModel$.getPageCount() && !this.$_bPageChangeTransition$ && (this.$_bTouch$ = !0, this.$_bDragInit$ = !1, this.$_touchStartCoord$ = this.$_isHorizontal$() ? $coordsObj$$.pageX : $coordsObj$$.pageY);
    }, $_initDragScroll$:function($coordsObj$$1_cssAttr$$3$$) {
      this.$_touchStartCoord$ = this.$_isHorizontal$() ? $coordsObj$$1_cssAttr$$3$$.pageX : $coordsObj$$1_cssAttr$$3$$.pageY;
      $coordsObj$$1_cssAttr$$3$$ = this.$_getCssPositionAttr$();
      var $pagesWrapper$$9$$ = this.$_pagesWrapper$, $pagingModel$$13$$ = this.$_pagingModel$, $pages$$6$$ = this.$_getPages$(), $pageCountToShow$$ = 1;
      0 < $pagingModel$$13$$.getPage() && (this.$_unhidePage$($$$$23$$($pages$$6$$[$pagingModel$$13$$.getPage() - 1])), $pagesWrapper$$9$$.css($coordsObj$$1_cssAttr$$3$$, -this.$_componentSize$ + $_PX$$), $pageCountToShow$$++);
      $pagingModel$$13$$.getPage() < $pagingModel$$13$$.getPageCount() - 1 && (this.$_unhidePage$($$$$23$$($pages$$6$$[$pagingModel$$13$$.getPage() + 1])), $pageCountToShow$$++);
      1 < $pageCountToShow$$ && $pagesWrapper$$9$$.css(this.$_getCssSizeAttr$(), $pageCountToShow$$ * this.$_componentSize$);
      this.$_touchStartScroll$ = parseInt($pagesWrapper$$9$$.css($coordsObj$$1_cssAttr$$3$$), 10);
    }, $_dragScrollMove$:function($event$$320$$, $coordsObj$$2$$) {
      if (this.$_bTouch$) {
        var $bHorizontal$$8_newPageIndex$$3$$ = this.$_isHorizontal$(), $diff_pageToHide$$ = ($bHorizontal$$8_newPageIndex$$3$$ ? $coordsObj$$2$$.pageX : $coordsObj$$2$$.pageY) - this.$_touchStartCoord$;
        if (this.$_bDragInit$) {
          var $bNext$$1$$ = $bHorizontal$$8_newPageIndex$$3$$ && this.$_bRTL$ ? 0 < $diff_pageToHide$$ : 0 > $diff_pageToHide$$, $pagingModel$$14_scrollVal_transform$$1$$ = this.$_pagingModel$, $pageIndex$$7$$ = $pagingModel$$14_scrollVal_transform$$1$$.getPage();
          if ($bNext$$1$$ && $pageIndex$$7$$ < $pagingModel$$14_scrollVal_transform$$1$$.getPageCount() - 1 || !$bNext$$1$$ && 0 < $pageIndex$$7$$) {
            var $currScroll_elem$$77_pages$$7$$ = this.element[0], $threshold$$1$$ = Math.min($_DRAG_SCROLL_THRESHOLD$$ * ($bHorizontal$$8_newPageIndex$$3$$ ? $currScroll_elem$$77_pages$$7$$.offsetWidth : $currScroll_elem$$77_pages$$7$$.offsetHeight), $_DRAG_SCROLL_MAX_THRESHOLD$$), $cssAttr$$4$$ = this.$_getCssPositionAttr$(), $pagesWrapper$$10$$ = this.$_pagesWrapper$, $currScroll_elem$$77_pages$$7$$ = this.$_getPages$();
            Math.abs($diff_pageToHide$$) >= $threshold$$1$$ ? ($bHorizontal$$8_newPageIndex$$3$$ = $bNext$$1$$ ? $pageIndex$$7$$ + 1 : $pageIndex$$7$$ - 1, this.$_getFirstItemOnPage$($bHorizontal$$8_newPageIndex$$3$$), $diff_pageToHide$$ = $bNext$$1$$ ? $pageIndex$$7$$ - 1 : $pageIndex$$7$$ + 1, -1 < $pageIndex$$7$$ && $pageIndex$$7$$ < $pagingModel$$14_scrollVal_transform$$1$$.getPageCount() && this.$_hidePage$($$$$23$$($currScroll_elem$$77_pages$$7$$[$diff_pageToHide$$])), $bNext$$1$$ && -1 < $diff_pageToHide$$ && 
            ($currScroll_elem$$77_pages$$7$$ = parseInt($pagesWrapper$$10$$.css($cssAttr$$4$$), 10), $pagesWrapper$$10$$.css($cssAttr$$4$$, $currScroll_elem$$77_pages$$7$$ + this.$_componentSize$ + $_PX$$)), $pagesWrapper$$10$$.css(this.$_getCssSizeAttr$(), 2 * this.$_componentSize$), this.$_bTouch$ = !1, $pagingModel$$14_scrollVal_transform$$1$$.setPage($bHorizontal$$8_newPageIndex$$3$$)) : ($pagingModel$$14_scrollVal_transform$$1$$ = $bHorizontal$$8_newPageIndex$$3$$ && this.$_bRTL$ ? -$diff_pageToHide$$ : 
            $diff_pageToHide$$, $pagingModel$$14_scrollVal_transform$$1$$ = $bHorizontal$$8_newPageIndex$$3$$ ? "translate3d(" + $pagingModel$$14_scrollVal_transform$$1$$ + "px, 0, 0)" : "translate3d(0, " + $pagingModel$$14_scrollVal_transform$$1$$ + "px, 0)", $_applyTransform$$($currScroll_elem$$77_pages$$7$$.filter($_VISIBLE_SELECTOR$$), $pagingModel$$14_scrollVal_transform$$1$$));
            this.$_scrolledForThisTouch$ = !0;
          }
          this.$_scrolledForThisTouch$ && ($event$$320$$.preventDefault(), $event$$320$$.stopPropagation());
        } else {
          Math.abs($diff_pageToHide$$) > $_DRAG_SCROLL_INIT_THRESHOLD$$ && (this.$_initDragScroll$($coordsObj$$2$$), this.$_bDragInit$ = !0);
        }
      }
    }, $_dragScrollEnd$:function() {
      if (this.$_bTouch$ && this.$_bDragInit$) {
        var $pageIndex$$8$$ = this.$_pagingModel$.getPage();
        this.$_handlePage$({previousPage:$pageIndex$$8$$, page:$pageIndex$$8$$});
      }
      this.$_scrolledForThisTouch$ = this.$_bDragInit$ = this.$_bTouch$ = !1;
    }, getNodeBySubId:function($locator$$30_subId$$30$$) {
      if (null == $locator$$30_subId$$30$$) {
        return this.element ? this.element[0] : null;
      }
      $locator$$30_subId$$30$$ = $locator$$30_subId$$30$$.subId;
      return "oj-filmstrip-start-arrow" === $locator$$30_subId$$30$$ ? this.widget().find($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW$$ + $_PERIOD$$ + $_OJ_START$$)[0] : "oj-filmstrip-end-arrow" === $locator$$30_subId$$30$$ ? this.widget().find($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW$$ + $_PERIOD$$ + $_OJ_END$$)[0] : "oj-filmstrip-top-arrow" === $locator$$30_subId$$30$$ ? this.widget().find($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW$$ + $_PERIOD$$ + $_OJ_TOP$$)[0] : "oj-filmstrip-bottom-arrow" === $locator$$30_subId$$30$$ ? 
      this.widget().find($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW$$ + $_PERIOD$$ + $_OJ_BOTTOM$$)[0] : null;
    }});
    var $_ADJACENT$$ = "adjacent", $_ARIA_HIDDEN$$ = "aria-hidden", $_AUTO$$ = "auto", $_DISPLAY$$ = "display", $_DRAG_SCROLL_INIT_THRESHOLD$$ = 3, $_DRAG_SCROLL_THRESHOLD$$ = .33, $_DRAG_SCROLL_MAX_THRESHOLD$$ = 100, $_EMPTY_STRING$$ = "", $_ERROR_CURRENT_ITEM_NOT_FOUND$$ = "JET FilmStrip: Value of 'currentItem' option not found: ", $_ERROR_INVALID_ORIENTATION$$ = "JET FilmStrip: Unsupported value set as 'orientation' option: ", $_ERROR_INVALID_NAV_ARROW_PLACEMENT$$ = "Unsupported value set as 'arrowPlacement' option: ", 
    $_ERROR_INVALID_NAV_ARROW_VISIBILITY$$ = "Unsupported value set as 'arrowVisibility' option: ", $_FLEX_BASIS$$ = "flex-basis", $_HIDDEN$$ = "hidden", $_HIDDEN_SELECTOR$$ = ":hidden", $_HORIZONTAL$$ = "horizontal", $_HOVER$$ = "hover", $_CURRENT_ITEM$$ = "currentItem", $_NONE$$ = "none", $_OJ_BOTTOM$$ = "oj-bottom", $_OJ_END$$ = "oj-end", $_OJ_FILMSTRIP_ARROW$$ = "oj-filmstrip-arrow", $_OJ_FILMSTRIP_ARROW_CONTAINER$$ = "oj-filmstrip-arrow-container", $_OJ_FILMSTRIP_ARROW_TRANSITION$$ = "oj-filmstrip-arrow-transition", 
    $_OJ_FILMSTRIP_CONTAINER$$ = "oj-filmstrip-container", $_OJ_FILMSTRIP_HOVER$$ = "oj-filmstrip-hover", $_OJ_FILMSTRIP_ITEM$$ = "oj-filmstrip-item", $_OJ_FILMSTRIP_ITEM_CONTAINER$$ = "oj-filmstrip-item-container", $_OJ_FILMSTRIP_PAGE$$ = "oj-filmstrip-page", $_OJ_FILMSTRIP_PAGES_CONTAINER$$ = "oj-filmstrip-pages-container", $_OJ_FILMSTRIP_TRANSITION$$ = "oj-filmstrip-transition", $_OJ_FILMSTRIP_TRANSITION_NEXT_NEWPAGE_FROM$$ = "oj-filmstrip-transition-next-newpage-from", $_OJ_FILMSTRIP_TRANSITION_NEXT_OLDPAGE_FROM$$ = 
    "oj-filmstrip-transition-next-oldpage-from", $_OJ_FILMSTRIP_TRANSITION_PREV_NEWPAGE_FROM$$ = "oj-filmstrip-transition-prev-newpage-from", $_OJ_FILMSTRIP_TRANSITION_PREV_OLDPAGE_FROM$$ = "oj-filmstrip-transition-prev-oldpage-from", $_OJ_FILMSTRIP_TRANSITION_NEXT_NEWPAGE_TO$$ = "oj-filmstrip-transition-next-newpage-to", $_OJ_FILMSTRIP_TRANSITION_NEXT_OLDPAGE_TO$$ = "oj-filmstrip-transition-next-oldpage-to", $_OJ_FILMSTRIP_TRANSITION_PREV_NEWPAGE_TO$$ = "oj-filmstrip-transition-prev-newpage-to", 
    $_OJ_FILMSTRIP_TRANSITION_PREV_OLDPAGE_TO$$ = "oj-filmstrip-transition-prev-oldpage-to", $_OJ_FILMSTRIP_VERTICAL$$ = "oj-filmstrip-vertical", $_OJ_START$$ = "oj-start", $_OJ_TOP$$ = "oj-top", $_OVERLAY$$ = "overlay", $_PERIOD$$ = ".", $_PX$$ = "px", $_VERTICAL$$ = "vertical", $_VISIBLE$$ = "visible", $_VISIBLE_SELECTOR$$ = ":visible", $_WEBKIT_FLEX_BASIS$$ = "-webkit-flex-basis", $_WARNING_DISABLED_OPTION$$ = "JET FilmStrip: 'disabled' option not supported";
  })();
});
