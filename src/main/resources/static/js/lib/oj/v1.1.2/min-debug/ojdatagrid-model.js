/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$47$$) {
  $oj$$47$$.$CollectionCellSet$ = function $$oj$$47$$$$CollectionCellSet$$($startRow$$3$$, $endRow$$2$$, $startColumn$$3$$, $endColumn$$2$$, $columns$$19$$) {
    $oj$$47$$.$Assert$.$assertNumber$($startRow$$3$$, null);
    $oj$$47$$.$Assert$.$assertNumber$($endRow$$2$$, null);
    $oj$$47$$.$Assert$.$assertNumber$($startColumn$$3$$, null);
    $oj$$47$$.$Assert$.$assertNumber$($endColumn$$2$$, null);
    $oj$$47$$.$Assert$.$assertArrayOrNull$($columns$$19$$);
    this.$m_startRow$ = $startRow$$3$$;
    this.$m_endRow$ = $endRow$$2$$;
    this.$m_startColumn$ = $startColumn$$3$$;
    this.$m_endColumn$ = $endColumn$$2$$;
    this.$m_columns$ = $columns$$19$$;
  };
  $goog$exportPath_$$("CollectionCellSet", $oj$$47$$.$CollectionCellSet$, $oj$$47$$);
  $oj$$47$$.$CollectionCellSet$.prototype.$setModels$ = function $$oj$$47$$$$CollectionCellSet$$$$setModels$$($models$$15$$) {
    $oj$$47$$.$Assert$.$assertArray$($models$$15$$);
    null != $models$$15$$ && $models$$15$$.length === this.$getCount$("row") && (this.$m_models$ = $models$$15$$);
  };
  $oj$$47$$.$CollectionCellSet$.prototype.getData = function $$oj$$47$$$$CollectionCellSet$$$getData$($indexes$$21$$) {
    var $model$$73$$;
    $model$$73$$ = this.$_getModel$($indexes$$21$$);
    return null == $model$$73$$ ? null : $model$$73$$.get(this.$m_columns$[$indexes$$21$$.column]);
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getData", {getData:$oj$$47$$.$CollectionCellSet$.prototype.getData});
  $oj$$47$$.$CollectionCellSet$.prototype.getMetadata = function $$oj$$47$$$$CollectionCellSet$$$getMetadata$($indexes$$22$$) {
    var $model$$74$$;
    $model$$74$$ = this.$_getModel$($indexes$$22$$);
    return null == $model$$74$$ ? null : {keys:{row:$oj$$47$$.$CollectionDataGridUtils$.$_getModelKey$($model$$74$$), column:this.$m_columns$[$indexes$$22$$.column]}};
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getMetadata", {getMetadata:$oj$$47$$.$CollectionCellSet$.prototype.getMetadata});
  $oj$$47$$.$CollectionCellSet$.prototype.$_getModel$ = function $$oj$$47$$$$CollectionCellSet$$$$_getModel$$($column$$27_indexes$$23$$) {
    var $row$$51$$;
    if (null == this.$m_models$) {
      return null;
    }
    $oj$$47$$.$Assert$.$assertObject$($column$$27_indexes$$23$$);
    $row$$51$$ = $column$$27_indexes$$23$$.row;
    $column$$27_indexes$$23$$ = $column$$27_indexes$$23$$.column;
    $oj$$47$$.$Assert$.assert($row$$51$$ >= this.$m_startRow$ && $row$$51$$ <= this.$m_endRow$ && $column$$27_indexes$$23$$ >= this.$m_startColumn$ && $column$$27_indexes$$23$$ <= this.$m_endColumn$);
    return this.$m_models$[$row$$51$$ - this.$m_startRow$];
  };
  $oj$$47$$.$CollectionCellSet$.prototype.$getCount$ = function $$oj$$47$$$$CollectionCellSet$$$$getCount$$($axis$$48$$) {
    return "row" === $axis$$48$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$48$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCount", {$getCount$:$oj$$47$$.$CollectionCellSet$.prototype.$getCount$});
  $oj$$47$$.$CollectionCellSet$.prototype.getStartRow = function $$oj$$47$$$$CollectionCellSet$$$getStartRow$() {
    return this.$m_startRow$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartRow", {getStartRow:$oj$$47$$.$CollectionCellSet$.prototype.getStartRow});
  $oj$$47$$.$CollectionCellSet$.prototype.$getEndRow$ = function $$oj$$47$$$$CollectionCellSet$$$$getEndRow$$() {
    return this.$m_endRow$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndRow", {$getEndRow$:$oj$$47$$.$CollectionCellSet$.prototype.$getEndRow$});
  $oj$$47$$.$CollectionCellSet$.prototype.getStartColumn = function $$oj$$47$$$$CollectionCellSet$$$getStartColumn$() {
    return this.$m_startColumn$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartColumn", {getStartColumn:$oj$$47$$.$CollectionCellSet$.prototype.getStartColumn});
  $oj$$47$$.$CollectionCellSet$.prototype.$getEndColumn$ = function $$oj$$47$$$$CollectionCellSet$$$$getEndColumn$$() {
    return this.$m_endColumn$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndColumn", {$getEndColumn$:$oj$$47$$.$CollectionCellSet$.prototype.$getEndColumn$});
  $oj$$47$$.$CollectionCellSet$.prototype.$getColumns$ = function $$oj$$47$$$$CollectionCellSet$$$$getColumns$$() {
    return this.$m_columns$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getColumns", {$getColumns$:$oj$$47$$.$CollectionCellSet$.prototype.$getColumns$});
  $oj$$47$$.$CollectionDataGridUtils$ = function $$oj$$47$$$$CollectionDataGridUtils$$() {
  };
  $oj$$47$$.$CollectionDataGridUtils$.$_getModelKey$ = function $$oj$$47$$$$CollectionDataGridUtils$$$_getModelKey$$($model$$75$$) {
    var $key$$168$$;
    $key$$168$$ = $model$$75$$.$GetId$();
    null == $key$$168$$ && ($key$$168$$ = $model$$75$$.$GetCid$());
    return $key$$168$$;
  };
  $oj$$47$$.$CollectionHeaderSet$ = function $$oj$$47$$$$CollectionHeaderSet$$($start$$54$$, $end$$18$$, $headers$$5$$, $rowHeader$$2$$) {
    $oj$$47$$.$Assert$.$assertNumber$($start$$54$$, null);
    $oj$$47$$.$Assert$.$assertNumber$($end$$18$$, null);
    $oj$$47$$.$Assert$.$assertArrayOrNull$($headers$$5$$);
    this.$m_start$ = $start$$54$$;
    this.$m_end$ = $end$$18$$;
    this.$m_headers$ = $headers$$5$$;
    this.$m_rowHeader$ = $rowHeader$$2$$;
  };
  $goog$exportPath_$$("CollectionHeaderSet", $oj$$47$$.$CollectionHeaderSet$, $oj$$47$$);
  $oj$$47$$.$CollectionHeaderSet$.prototype.$setModels$ = function $$oj$$47$$$$CollectionHeaderSet$$$$setModels$$($models$$16$$) {
    $oj$$47$$.$Assert$.$assertArray$($models$$16$$);
    null != $models$$16$$ && $models$$16$$.length === this.$getCount$() && (this.$m_models$ = $models$$16$$);
  };
  $oj$$47$$.$CollectionHeaderSet$.prototype.getData = function $$oj$$47$$$$CollectionHeaderSet$$$getData$($index$$273$$, $level$$44$$) {
    var $model$$76$$;
    $oj$$47$$.$Assert$.assert($index$$273$$ <= this.$m_end$ && $index$$273$$ >= this.$m_start$, "index out of bounds");
    $oj$$47$$.$Assert$.assert(null == $level$$44$$ || 0 == $level$$44$$, "level out of bounds");
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $model$$76$$ = this.$m_models$[$index$$273$$ - this.$m_start$];
      return $model$$76$$.get(this.$m_rowHeader$);
    }
    return this.$m_headers$[$index$$273$$];
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getData", {getData:$oj$$47$$.$CollectionHeaderSet$.prototype.getData});
  $oj$$47$$.$CollectionHeaderSet$.prototype.getMetadata = function $$oj$$47$$$$CollectionHeaderSet$$$getMetadata$($index$$274$$, $level$$45$$) {
    var $model$$77$$;
    $oj$$47$$.$Assert$.assert($index$$274$$ <= this.$m_end$ && $index$$274$$ >= this.$m_start$, "index out of bounds");
    $oj$$47$$.$Assert$.assert(null == $level$$45$$ || 0 == $level$$45$$, "level out of bounds");
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $model$$77$$ = this.$m_models$[$index$$274$$ - this.$m_start$];
      return{key:$oj$$47$$.$CollectionDataGridUtils$.$_getModelKey$($model$$77$$)};
    }
    return{key:this.getData($index$$274$$, $level$$45$$)};
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getMetadata", {getMetadata:$oj$$47$$.$CollectionHeaderSet$.prototype.getMetadata});
  $oj$$47$$.$CollectionHeaderSet$.prototype.$getLevelCount$ = function $$oj$$47$$$$CollectionHeaderSet$$$$getLevelCount$$() {
    return 0 < this.$getCount$() ? 1 : 0;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$47$$.$CollectionHeaderSet$.prototype.$getLevelCount$});
  $oj$$47$$.$CollectionHeaderSet$.prototype.$getExtent$ = function $$oj$$47$$$$CollectionHeaderSet$$$$getExtent$$($index$$275$$, $level$$46$$) {
    $oj$$47$$.$Assert$.assert($index$$275$$ <= this.$m_end$ && $index$$275$$ >= this.$m_start$, "index out of bounds");
    $oj$$47$$.$Assert$.assert(null == $level$$46$$ || 0 == $level$$46$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getExtent", {$getExtent$:$oj$$47$$.$CollectionHeaderSet$.prototype.$getExtent$});
  $oj$$47$$.$CollectionHeaderSet$.prototype.$getDepth$ = function $$oj$$47$$$$CollectionHeaderSet$$$$getDepth$$($index$$276$$, $level$$47$$) {
    $oj$$47$$.$Assert$.assert($index$$276$$ <= this.$m_end$ && $index$$276$$ >= this.$m_start$, "index out of bounds");
    $oj$$47$$.$Assert$.assert(null == $level$$47$$ || 0 == $level$$47$$, "level out of bounds");
    return 1;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getDepth", {$getDepth$:$oj$$47$$.$CollectionHeaderSet$.prototype.$getDepth$});
  $oj$$47$$.$CollectionHeaderSet$.prototype.$getCount$ = function $$oj$$47$$$$CollectionHeaderSet$$$$getCount$$() {
    return Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCount", {$getCount$:$oj$$47$$.$CollectionHeaderSet$.prototype.$getCount$});
  $oj$$47$$.$CollectionHeaderSet$.prototype.$getStart$ = function $$oj$$47$$$$CollectionHeaderSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getStart", {$getStart$:$oj$$47$$.$CollectionHeaderSet$.prototype.$getStart$});
  $oj$$47$$.$CollectionHeaderSet$.prototype.$getEnd$ = function $$oj$$47$$$$CollectionHeaderSet$$$$getEnd$$() {
    return this.$m_end$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getEnd", {$getEnd$:$oj$$47$$.$CollectionHeaderSet$.prototype.$getEnd$});
  $oj$$47$$.$CollectionHeaderSet$.prototype.$getHeaders$ = function $$oj$$47$$$$CollectionHeaderSet$$$$getHeaders$$() {
    return this.$m_headers$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getHeaders", {$getHeaders$:$oj$$47$$.$CollectionHeaderSet$.prototype.$getHeaders$});
  $oj$$47$$.$CollectionHeaderSet$.prototype.$getRowHeader$ = function $$oj$$47$$$$CollectionHeaderSet$$$$getRowHeader$$() {
    return this.$m_rowHeader$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getRowHeader", {$getRowHeader$:$oj$$47$$.$CollectionHeaderSet$.prototype.$getRowHeader$});
  $oj$$47$$.$CollectionDataGridDataSource$ = function $$oj$$47$$$$CollectionDataGridDataSource$$($collection$$57$$, $options$$372$$) {
    this.$collection$ = $collection$$57$$;
    null != $options$$372$$ && (this.$rowHeader$ = $options$$372$$.rowHeader, this.columns = $options$$372$$.columns);
    $oj$$47$$.$CollectionDataGridDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionDataGridDataSource", $oj$$47$$.$CollectionDataGridDataSource$, $oj$$47$$);
  $oj$$47$$.$Object$.$createSubclass$($oj$$47$$.$CollectionDataGridDataSource$, $oj$$47$$.$DataGridDataSource$, "oj.CollectionDataGridDataSource");
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.Init = function $$oj$$47$$$$CollectionDataGridDataSource$$$Init$() {
    $oj$$47$$.$CollectionDataGridDataSource$.$superclass$.Init.call(this);
    this.$pendingHeaderCallback$ = {};
    this.$_registerEventListeners$();
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.Init", {Init:$oj$$47$$.$CollectionDataGridDataSource$.prototype.Init});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_registerEventListeners$$() {
    this.$collection$.on("add", this.$_handleModelAdded$.bind(this));
    this.$collection$.on("remove", this.$_handleModelDeleted$.bind(this));
    this.$collection$.on("change", this.$_handleModelChanged$.bind(this));
    this.$collection$.on("refresh", this.$_handleCollectionRefresh$.bind(this));
    this.$collection$.on("reset", this.$_handleCollectionReset$.bind(this));
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_isDataAvailable$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_isDataAvailable$$() {
    return null != this.data;
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$getCount$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$getCount$$($axis$$49$$) {
    var $totalSize$$10$$;
    void 0 == this.precision && (this.precision = {});
    if ("row" == $axis$$49$$) {
      $totalSize$$10$$ = this.$_totalSize$();
      if (-1 === $totalSize$$10$$ || 0 === $totalSize$$10$$ && (!this.$_isDataAvailable$() || 0 < this.$_size$())) {
        return this.precision[$axis$$49$$] = "estimate", -1;
      }
      this.precision[$axis$$49$$] = "exact";
      return this.$_size$();
    }
    if ("column" == $axis$$49$$) {
      if (null != this.columns) {
        return this.precision[$axis$$49$$] = "exact", this.columns.length;
      }
      this.precision[$axis$$49$$] = "estimate";
      return-1;
    }
    return 0;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCount", {$getCount$:$oj$$47$$.$CollectionDataGridDataSource$.prototype.$getCount$});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$getCountPrecision$$($axis$$50$$) {
    null != this.precision && null != this.precision[$axis$$50$$] || this.$getCount$($axis$$50$$);
    return this.precision[$axis$$50$$];
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$47$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$fetchHeaders$$($headerRange$$9$$, $callbacks$$55$$, $callbackObjects$$24$$) {
    var $axis$$51$$, $callback$$119$$;
    null != $callbacks$$55$$ && ($axis$$51$$ = $headerRange$$9$$.axis, $callback$$119$$ = {}, $callback$$119$$.$headerRange$ = $headerRange$$9$$, $callback$$119$$.callbacks = $callbacks$$55$$, $callback$$119$$.$callbackObjects$ = $callbackObjects$$24$$, this.$pendingHeaderCallback$[$axis$$51$$] = $callback$$119$$);
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$47$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_handleHeaderFetchSuccess$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_handleHeaderFetchSuccess$$($headerRange$$10$$, $callbacks$$56$$, $callbackObjects$$25$$, $actualRange_end$$19$$) {
    var $axis$$52$$, $start$$55$$, $count$$55$$, $headerSet$$7$$;
    $axis$$52$$ = $headerRange$$10$$.axis;
    $start$$55$$ = $headerRange$$10$$.start;
    $count$$55$$ = $headerRange$$10$$.count;
    $oj$$47$$.$Assert$.assert("row" === $axis$$52$$ || "column" === $axis$$52$$);
    $oj$$47$$.$Assert$.assert(0 < $count$$55$$);
    if ("column" === $axis$$52$$) {
      null != this.columns ? ($actualRange_end$$19$$ = Math.min(this.columns.length, $start$$55$$ + $count$$55$$), $headerSet$$7$$ = new $oj$$47$$.$CollectionHeaderSet$($start$$55$$, $actualRange_end$$19$$, this.columns)) : $headerSet$$7$$ = new $oj$$47$$.$ArrayHeaderSet$($start$$55$$, $start$$55$$, $axis$$52$$, null);
    } else {
      if ("row" === $axis$$52$$) {
        if (null != this.$rowHeader$) {
          null != $actualRange_end$$19$$ && ($count$$55$$ = $actualRange_end$$19$$.count);
          $actualRange_end$$19$$ = Math.min(this.$_size$(), $start$$55$$ + $count$$55$$);
          $headerSet$$7$$ = new $oj$$47$$.$CollectionHeaderSet$($start$$55$$, $actualRange_end$$19$$, this.columns, this.$rowHeader$);
          this.$_resolveModels$($start$$55$$, $actualRange_end$$19$$, $headerSet$$7$$, $headerRange$$10$$, $callbacks$$56$$, $callbackObjects$$25$$);
          return;
        }
        $headerSet$$7$$ = new $oj$$47$$.$ArrayHeaderSet$($start$$55$$, $start$$55$$, $axis$$52$$, null);
      }
    }
    null != $callbacks$$56$$ && $callbacks$$56$$.success && $callbacks$$56$$.success.call($callbackObjects$$25$$.success, $headerSet$$7$$, $headerRange$$10$$);
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_getRanges$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_getRanges$$($cellRanges$$5$$) {
    var $i$$429$$, $cellRange$$6$$, $rowStart$$4$$, $rowCount$$8$$, $colStart$$1$$, $colCount$$1$$;
    for ($i$$429$$ = 0;$i$$429$$ < $cellRanges$$5$$.length;$i$$429$$ += 1) {
      $cellRange$$6$$ = $cellRanges$$5$$[$i$$429$$], $oj$$47$$.$Assert$.assert("row" === $cellRange$$6$$.axis || "column" === $cellRange$$6$$.axis), $oj$$47$$.$Assert$.assert(0 < $cellRange$$6$$.count), "row" === $cellRange$$6$$.axis ? ($rowStart$$4$$ = $cellRange$$6$$.start, $rowCount$$8$$ = $cellRange$$6$$.count) : "column" === $cellRange$$6$$.axis && ($colStart$$1$$ = $cellRange$$6$$.start, $colCount$$1$$ = $cellRange$$6$$.count);
    }
    return{rowStart:$rowStart$$4$$, rowCount:$rowCount$$8$$, colStart:$colStart$$1$$, colCount:$colCount$$1$$};
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_handleCellFetchSuccess$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_handleCellFetchSuccess$$($cellRanges$$6$$, $callbacks$$57$$, $callbackObjects$$26$$, $actualRange$$1_rowEnd$$1$$) {
    var $cellSet$$6_colEnd$$1_ranges$$, $rowStart$$5$$, $colStart$$2$$;
    $cellSet$$6_colEnd$$1_ranges$$ = this.$_getRanges$($cellRanges$$6$$);
    $rowStart$$5$$ = $cellSet$$6_colEnd$$1_ranges$$.rowStart;
    $actualRange$$1_rowEnd$$1$$ = null != $actualRange$$1_rowEnd$$1$$ ? Math.min(this.$_size$(), $rowStart$$5$$ + $actualRange$$1_rowEnd$$1$$.count) : Math.min(this.$_size$(), $rowStart$$5$$ + $cellSet$$6_colEnd$$1_ranges$$.rowCount);
    $colStart$$2$$ = $cellSet$$6_colEnd$$1_ranges$$.colStart;
    $cellSet$$6_colEnd$$1_ranges$$ = Math.min(null == this.columns ? 0 : this.columns.length, $colStart$$2$$ + $cellSet$$6_colEnd$$1_ranges$$.colCount);
    $cellSet$$6_colEnd$$1_ranges$$ = new $oj$$47$$.$CollectionCellSet$($rowStart$$5$$, $actualRange$$1_rowEnd$$1$$, $colStart$$2$$, $cellSet$$6_colEnd$$1_ranges$$, this.columns);
    this.$_resolveModels$($rowStart$$5$$, $actualRange$$1_rowEnd$$1$$, $cellSet$$6_colEnd$$1_ranges$$, $cellRanges$$6$$, $callbacks$$57$$, $callbackObjects$$26$$);
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_resolveModels$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_resolveModels$$($i$$430_rowStart$$6$$, $rowEnd$$2$$, $set$$4$$, $ranges$$1$$, $callbacks$$58$$, $callbackObjects$$27$$) {
    var $promises$$;
    for ($promises$$ = [];$i$$430_rowStart$$6$$ < $rowEnd$$2$$;$i$$430_rowStart$$6$$++) {
      $promises$$.push(this.$collection$.at($i$$430_rowStart$$6$$, {deferred:!0}));
    }
    Promise.all($promises$$).then(function($models$$17$$) {
      $set$$4$$.$setModels$($models$$17$$);
      $callbacks$$58$$.success.call($callbackObjects$$27$$.success, $set$$4$$, $ranges$$1$$);
    });
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$fetchCells$$($cellRanges$$7$$, $callbacks$$59$$, $callbackObjects$$28$$) {
    null != $callbacks$$59$$ && (this.$pendingCellCallback$ = {}, this.$pendingCellCallback$.$cellRanges$ = $cellRanges$$7$$, this.$pendingCellCallback$.callbacks = $callbacks$$59$$, this.$pendingCellCallback$.$callbackObjects$ = $callbackObjects$$28$$);
    this.$_fetchCells$($cellRanges$$7$$);
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$47$$.$CollectionDataGridDataSource$.prototype.$fetchCells$});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderCallbacks$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_processPendingHeaderCallbacks$$($axis$$53$$) {
    var $pendingCallback$$, $headerRange$$11$$, $callbacks$$60$$, $callbackObjects$$29$$, $actualRange$$2$$;
    $pendingCallback$$ = this.$pendingHeaderCallback$[$axis$$53$$];
    null != $pendingCallback$$ && ($headerRange$$11$$ = $pendingCallback$$.$headerRange$, $callbacks$$60$$ = $pendingCallback$$.callbacks, $callbackObjects$$29$$ = $pendingCallback$$.$callbackObjects$, "row" === $axis$$53$$ && ($actualRange$$2$$ = $pendingCallback$$.$actualRange$), this.$_handleHeaderFetchSuccess$($headerRange$$11$$, $callbacks$$60$$, $callbackObjects$$29$$, $actualRange$$2$$), this.$pendingHeaderCallback$[$axis$$53$$] = null);
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellCallbacks$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_processPendingCellCallbacks$$() {
    this.$_handleCellFetchSuccess$(this.$pendingCellCallback$.$cellRanges$, this.$pendingCellCallback$.callbacks, this.$pendingCellCallback$.$callbackObjects$, this.$pendingCellCallback$.$actualRange$);
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_fetchCells$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_fetchCells$$($cellRanges$$9_ranges$$2$$) {
    var $rowStart$$7$$;
    $cellRanges$$9_ranges$$2$$ = this.$_getRanges$($cellRanges$$9_ranges$$2$$);
    $rowStart$$7$$ = $cellRanges$$9_ranges$$2$$.rowStart;
    this.$collection$.$setRangeLocal$($rowStart$$7$$, $cellRanges$$9_ranges$$2$$.rowCount).then(function($actual$$6$$) {
      this.data = !0;
      var $first$$9$$ = this.$collection$.at($rowStart$$7$$, {deferred:!0});
      this.$_setActualCallbackRanges$($actual$$6$$.start, $actual$$6$$.count);
      null != $first$$9$$ && void 0 === this.columns ? $first$$9$$.then(function($model$$78$$) {
        this.$_setupColumns$($model$$78$$);
        this.$_fetchCellsComplete$();
      }.bind(this)) : this.$_fetchCellsComplete$();
    }.bind(this), function($e$$146$$) {
      this.$_fetchCellsError$($e$$146$$);
    }.bind(this));
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsError$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_fetchCellsError$$($error$$46$$) {
    $oj$$47$$.$Logger$.error($error$$46$$);
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderErrorCallbacks$("column", $error$$46$$), this.$_processPendingHeaderErrorCallbacks$("row", $error$$46$$));
    null != this.$pendingCellCallback$ && this.$_processPendingCellErrorCallbacks$($error$$46$$);
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderErrorCallbacks$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_processPendingHeaderErrorCallbacks$$($axis$$54$$, $error$$47$$) {
    var $headerRange$$12_pendingCallback$$1$$, $callbacks$$62$$, $callbackObjects$$31$$;
    $headerRange$$12_pendingCallback$$1$$ = this.$pendingHeaderCallback$[$axis$$54$$];
    null != $headerRange$$12_pendingCallback$$1$$ && ($callbacks$$62$$ = $headerRange$$12_pendingCallback$$1$$.callbacks, $callbackObjects$$31$$ = $headerRange$$12_pendingCallback$$1$$.$callbackObjects$, $headerRange$$12_pendingCallback$$1$$ = $headerRange$$12_pendingCallback$$1$$.$headerRange$, $callbacks$$62$$.error && $callbacks$$62$$.error.call($callbackObjects$$31$$.error, $error$$47$$, $headerRange$$12_pendingCallback$$1$$), this.$pendingHeaderCallback$[$axis$$54$$] = null);
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellErrorCallbacks$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_processPendingCellErrorCallbacks$$($error$$48$$) {
    var $callbacks$$63$$, $callbackObjects$$32$$, $cellRanges$$10$$;
    $callbacks$$63$$ = this.$pendingCellCallback$.callbacks;
    $callbackObjects$$32$$ = this.$pendingCellCallback$.$callbackObjects$;
    $cellRanges$$10$$ = this.$pendingCellCallback$.$cellRanges$;
    $callbacks$$63$$.error && $callbacks$$63$$.error.call($callbackObjects$$32$$.error, $error$$48$$, $cellRanges$$10$$);
    this.$pendingCellCallback$ = null;
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsComplete$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_fetchCellsComplete$$() {
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderCallbacks$("column"), this.$_processPendingHeaderCallbacks$("row"));
    null != this.$pendingCellCallback$ && this.$_processPendingCellCallbacks$();
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_setActualCallbackRanges$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_setActualCallbackRanges$$($start$$56$$, $count$$56$$) {
    var $actualRange$$4$$ = {start:$start$$56$$, count:$count$$56$$};
    null != this.$pendingHeaderCallback$.row && (this.$pendingHeaderCallback$.row.$actualRange$ = $actualRange$$4$$);
    null != this.$pendingCellCallback$ && (this.$pendingCellCallback$.$actualRange$ = $actualRange$$4$$);
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_setupColumns$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_setupColumns$$($model$$79$$) {
    this.columns = $model$$79$$.keys();
    -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1);
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.keys = function $$oj$$47$$$$CollectionDataGridDataSource$$$keys$($indexes$$24$$) {
    var $rowIndex$$10$$, $columnIndex$$4$$, $rowKey$$38$$, $columnKey$$5$$, $atPromise$$, $self$$186$$;
    $rowIndex$$10$$ = $indexes$$24$$.row;
    $columnIndex$$4$$ = $indexes$$24$$.column;
    $self$$186$$ = this;
    return new Promise(function($resolve$$56$$) {
      $atPromise$$ = $self$$186$$.$collection$.at($rowIndex$$10$$, {deferred:!0});
      null != $atPromise$$ ? $atPromise$$.then(function($rowModel$$) {
        $rowKey$$38$$ = $oj$$47$$.$CollectionDataGridUtils$.$_getModelKey$($rowModel$$);
        null == $self$$186$$.columns && $self$$186$$.$_setupColumns$($rowModel$$);
        $columnKey$$5$$ = $self$$186$$.columns[$columnIndex$$4$$];
        $resolve$$56$$({row:null == $rowKey$$38$$ ? null : $rowKey$$38$$, column:null == $columnKey$$5$$ ? null : $columnKey$$5$$});
      }.bind($self$$186$$)) : $resolve$$56$$({row:null, column:null});
    });
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.keys", {keys:$oj$$47$$.$CollectionDataGridDataSource$.prototype.keys});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$indexes$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$indexes$$($keys$$40$$) {
    var $rowKey$$39$$, $columnKey$$6$$, $columnIndex$$5$$, $self$$187$$;
    $rowKey$$39$$ = $keys$$40$$.row;
    $columnKey$$6$$ = $keys$$40$$.column;
    $self$$187$$ = this;
    return new Promise(function($resolve$$57$$) {
      $self$$187$$.$collection$.indexOf($rowKey$$39$$, {deferred:!0}).then(function($rowIndex$$11$$) {
        null == $self$$187$$.columns ? $self$$187$$.$collection$.first(1, {deferred:!0}).then(function($model$$80$$) {
          $self$$187$$.$_setupColumns$($model$$80$$);
          $columnIndex$$5$$ = $self$$187$$.columns.indexOf($columnKey$$6$$);
          $resolve$$57$$({row:$rowIndex$$11$$, column:$columnIndex$$5$$});
        }.bind($self$$187$$)) : ($columnIndex$$5$$ = $self$$187$$.columns.indexOf($columnKey$$6$$), $resolve$$57$$({row:$rowIndex$$11$$, column:$columnIndex$$5$$}));
      }.bind($self$$187$$));
    });
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.indexes", {$indexes$:$oj$$47$$.$CollectionDataGridDataSource$.prototype.$indexes$});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.getCapability = function $$oj$$47$$$$CollectionDataGridDataSource$$$getCapability$($feature$$17$$) {
    return "sort" === $feature$$17$$ ? "column" : "move" === $feature$$17$$ ? "row" : null;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCapability", {getCapability:$oj$$47$$.$CollectionDataGridDataSource$.prototype.getCapability});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.sort = function $$oj$$47$$$$CollectionDataGridDataSource$$$sort$($axis$$55_criteria$$15$$, $callbacks$$64$$, $callbackObjects$$33$$) {
    var $comparator$$14$$, $direction$$11$$, $key$$169$$;
    null == $callbackObjects$$33$$ && ($callbackObjects$$33$$ = {});
    null == $axis$$55_criteria$$15$$ ? this.$_resetSortOrder$($callbacks$$64$$, $callbackObjects$$33$$) : ($direction$$11$$ = $axis$$55_criteria$$15$$.direction, $key$$169$$ = $axis$$55_criteria$$15$$.key, $axis$$55_criteria$$15$$ = $axis$$55_criteria$$15$$.axis, "column" === $axis$$55_criteria$$15$$ ? (this.$collection$.$IsVirtual$() ? (this.$collection$.comparator = $key$$169$$, this.$collection$.sortDirection = "ascending" === $direction$$11$$ ? 1 : -1) : ("ascending" === $direction$$11$$ && ($comparator$$14$$ = 
    function $$comparator$$14$$$($a$$116$$, $b$$71$$) {
      var $as$$2$$, $bs$$2$$;
      $a$$116$$ = $a$$116$$.get($key$$169$$);
      $b$$71$$ = $b$$71$$.get($key$$169$$);
      $as$$2$$ = isNaN($a$$116$$);
      $bs$$2$$ = isNaN($b$$71$$);
      $a$$116$$ instanceof Date && ($a$$116$$ = $a$$116$$.toISOString(), $as$$2$$ = !0);
      $b$$71$$ instanceof Date && ($b$$71$$ = $b$$71$$.toISOString(), $bs$$2$$ = !0);
      return $as$$2$$ && $bs$$2$$ ? $a$$116$$ < $b$$71$$ ? -1 : $a$$116$$ === $b$$71$$ ? 0 : 1 : $as$$2$$ ? 1 : $bs$$2$$ ? -1 : $a$$116$$ - $b$$71$$;
    }), "descending" === $direction$$11$$ && ($comparator$$14$$ = function $$comparator$$14$$$($a$$117$$, $b$$72$$) {
      var $as$$3$$, $bs$$3$$;
      $a$$117$$ = $a$$117$$.get($key$$169$$);
      $b$$72$$ = $b$$72$$.get($key$$169$$);
      $as$$3$$ = isNaN($a$$117$$);
      $bs$$3$$ = isNaN($b$$72$$);
      $a$$117$$ instanceof Date && ($a$$117$$ = $a$$117$$.toISOString());
      $b$$72$$ instanceof Date && ($b$$72$$ = $b$$72$$.toISOString());
      return $as$$3$$ && $bs$$3$$ ? $a$$117$$ > $b$$72$$ ? -1 : $a$$117$$ === $b$$72$$ ? 0 : 1 : $as$$3$$ ? -1 : $bs$$3$$ ? 1 : $b$$72$$ - $a$$117$$;
    }), this.$collection$.comparator = $comparator$$14$$), this.$collection$.sort(), null != $callbacks$$64$$ && null != $callbacks$$64$$.success && $callbacks$$64$$.success.call($callbackObjects$$33$$.success)) : null != $callbacks$$64$$ && null != $callbacks$$64$$.error && $callbacks$$64$$.error.call($callbackObjects$$33$$.error, "Axis value not supported"));
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.sort", {sort:$oj$$47$$.$CollectionDataGridDataSource$.prototype.sort});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_resetSortOrder$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_resetSortOrder$$($callbacks$$65$$, $callbackObjects$$34$$) {
    this.$collection$.comparator = null;
    this.$collection$.reset();
    null != $callbacks$$65$$ && null != $callbacks$$65$$.success && $callbacks$$65$$.success.call($callbackObjects$$34$$.success);
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.move = function $$oj$$47$$$$CollectionDataGridDataSource$$$move$($moveKey$$2$$, $atKey$$2$$, $position$$41$$, $callbacks$$66$$, $callbackObjects$$35$$) {
    var $indexPromise$$;
    this.$collection$.get($moveKey$$2$$, {deferred:!0}).then(function($moveModel$$) {
      null == $atKey$$2$$ ? (this.$collection$.remove($moveModel$$), this.$collection$.add($moveModel$$), null != $callbacks$$66$$ && null != $callbacks$$66$$.success && $callbacks$$66$$.success.call($callbackObjects$$35$$.success)) : ($moveKey$$2$$ === $atKey$$2$$ ? ($indexPromise$$ = this.$collection$.indexOf($atKey$$2$$, {deferred:!0}), this.$collection$.remove($moveModel$$)) : (this.$collection$.remove($moveModel$$), $indexPromise$$ = this.$collection$.indexOf($atKey$$2$$, {deferred:!0})), $indexPromise$$.then(function($newIndex$$2$$) {
        this.$collection$.add($moveModel$$, {at:$newIndex$$2$$, $force$:!0});
        null != $callbacks$$66$$ && null != $callbacks$$66$$.success && $callbacks$$66$$.success.call($callbackObjects$$35$$.success);
      }.bind(this)));
    }.bind(this));
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.move", {move:$oj$$47$$.$CollectionDataGridDataSource$.prototype.move});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_getModelEvent$$($operation$$7$$, $rowKey$$40$$, $columnKey$$7$$, $rowIndex$$12$$, $columnIndex$$6$$) {
    var $event$$544$$ = {source:this};
    $event$$544$$.operation = $operation$$7$$;
    $event$$544$$.keys = {row:$rowKey$$40$$, column:$columnKey$$7$$};
    $event$$544$$.indexes = {row:$rowIndex$$12$$, column:$columnIndex$$6$$};
    return $event$$544$$;
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_handleModelAdded$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_handleModelAdded$$($model$$81$$) {
    var $event$$545$$, $rowKey$$41$$;
    this.$collection$.indexOf($model$$81$$, {deferred:!0}).then(function($index$$277$$) {
      $rowKey$$41$$ = $oj$$47$$.$CollectionDataGridUtils$.$_getModelKey$($model$$81$$);
      $event$$545$$ = this.$_getModelEvent$("insert", $rowKey$$41$$, null, $index$$277$$, -1);
      this.handleEvent("change", $event$$545$$);
    }.bind(this));
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_handleModelDeleted$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_handleModelDeleted$$($model$$82$$, $collection$$59$$, $args$$21$$) {
    this.handleEvent("change", this.$_getModelEvent$("delete", $oj$$47$$.$CollectionDataGridUtils$.$_getModelKey$($model$$82$$), null, $args$$21$$.index, -1));
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_handleModelChanged$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_handleModelChanged$$($model$$83$$) {
    var $event$$547$$, $rowKey$$43$$;
    this.$collection$.indexOf($model$$83$$, {deferred:!0}).then(function($index$$278$$) {
      $rowKey$$43$$ = $oj$$47$$.$CollectionDataGridUtils$.$_getModelKey$($model$$83$$);
      $event$$547$$ = this.$_getModelEvent$("update", $rowKey$$43$$, null, $index$$278$$, -1);
      this.handleEvent("change", $event$$547$$);
    }.bind(this));
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionRefresh$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_handleCollectionRefresh$$() {
    this.data = null;
    this.handleEvent("change", this.$_getModelEvent$("refresh", null, null));
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionReset$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_handleCollectionReset$$() {
    this.data = null;
    this.handleEvent("change", this.$_getModelEvent$("reset", null, null));
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_size$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_size$$() {
    return this.$collection$.size();
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$_totalSize$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$_totalSize$$() {
    return void 0 === this.$collection$.totalResults ? -1 : this.$collection$.totalResults;
  };
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$getCollection$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$getCollection$$() {
    return this.$collection$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCollection", {$getCollection$:$oj$$47$$.$CollectionDataGridDataSource$.prototype.$getCollection$});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$getColumns$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$47$$.$CollectionDataGridDataSource$.prototype.$getColumns$});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$ = function $$oj$$47$$$$CollectionDataGridDataSource$$$$getRowHeader$$() {
    return this.$rowHeader$;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getRowHeader", {$getRowHeader$:$oj$$47$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$});
  $oj$$47$$.$CollectionDataGridDataSource$.prototype.getData = function $$oj$$47$$$$CollectionDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$47$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getData", {getData:$oj$$47$$.$CollectionDataGridDataSource$.prototype.getData});
});
