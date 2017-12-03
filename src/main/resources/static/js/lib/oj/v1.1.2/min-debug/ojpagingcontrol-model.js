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
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojpagingcontrol", "ojs/ojknockout-model"], function($oj$$26$$, $$$$25$$, $ko$$4$$) {
  $oj$$26$$.$CollectionPagingDataSource$ = function $$oj$$26$$$$CollectionPagingDataSource$$($collection$$34$$) {
    this.$collection$ = $collection$$34$$;
    this.current = 0;
    this.Init();
    this.$dataWindow$ = [];
    this.$_setPageSize$(10);
  };
  $goog$exportPath_$$("CollectionPagingDataSource", $oj$$26$$.$CollectionPagingDataSource$, $oj$$26$$);
  $oj$$26$$.$Object$.$createSubclass$($oj$$26$$.$CollectionPagingDataSource$, $oj$$26$$.$DataSource$, "oj.CollectionPagingDataSource");
  $oj$$26$$.$CollectionPagingDataSource$.prototype.Init = function $$oj$$26$$$$CollectionPagingDataSource$$$Init$() {
    $oj$$26$$.$CollectionPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.Init", {Init:$oj$$26$$.$CollectionPagingDataSource$.prototype.Init});
  $oj$$26$$.$CollectionPagingDataSource$.prototype.$_getSize$ = function $$oj$$26$$$$CollectionPagingDataSource$$$$_getSize$$() {
    return this.$_hasMore$() ? this.$currentPageSize$ : this.totalSize() - this.current;
  };
  $oj$$26$$.$CollectionPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$26$$$$CollectionPagingDataSource$$$$_refreshDataWindow$$() {
    this.$dataWindow$ = Array(this.$_getSize$());
    var $self$$142$$ = this;
    return this.$collection$.$IterativeAt$(this.current, this.current + this.$dataWindow$.length).then(function($array$$15$$) {
      for (var $i$$352$$ = 0;$i$$352$$ < $array$$15$$.length;$i$$352$$++) {
        $self$$142$$.$dataWindow$[$i$$352$$] = $array$$15$$[$i$$352$$];
      }
      $self$$142$$.$_refreshObservableDataWindow$();
      $self$$142$$.$_endIndex$ = $self$$142$$.$_startIndex$ + $self$$142$$.$dataWindow$.length - 1;
    });
  };
  $oj$$26$$.$CollectionPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$26$$$$CollectionPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$353$$ = 0;$i$$353$$ < this.$dataWindow$.length;$i$$353$$++) {
        this.$observableDataWindow$.push($oj$$26$$.$KnockoutUtils$.map(this.$dataWindow$[$i$$353$$]));
      }
    }
  };
  $oj$$26$$.$CollectionPagingDataSource$.prototype.$getWindow$ = function $$oj$$26$$$$CollectionPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$26$$.$CollectionPagingDataSource$.prototype.$getWindow$});
  $oj$$26$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$26$$$$CollectionPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$4$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$26$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$26$$.$CollectionPagingDataSource$.prototype.getPage = function $$oj$$26$$$$CollectionPagingDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getPage", {getPage:$oj$$26$$.$CollectionPagingDataSource$.prototype.getPage});
  $oj$$26$$.$CollectionPagingDataSource$.prototype.setPage = function $$oj$$26$$$$CollectionPagingDataSource$$$setPage$($value$$235$$, $options$$335$$) {
    $options$$335$$ = $options$$335$$ || {};
    $value$$235$$ = parseInt($value$$235$$, 10);
    try {
      $oj$$26$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$235$$, previousPage:this.$_page$});
    } catch ($err$$17$$) {
      return Promise.reject(null);
    }
    this.pageSize = null != $options$$335$$.pageSize ? $options$$335$$.pageSize : this.pageSize;
    $options$$335$$.startIndex = $value$$235$$ * this.pageSize;
    var $previousPage$$3$$ = this.$_page$;
    this.$_page$ = $value$$235$$;
    this.$_startIndex$ = $options$$335$$.startIndex;
    var $self$$143$$ = this;
    return new Promise(function($resolve$$50$$, $reject$$49$$) {
      $self$$143$$.$_fetchInternal$($options$$335$$).then(function() {
        $oj$$26$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call($self$$143$$, $oj$$26$$.$PagingModel$.$EventType$.PAGE, {page:$self$$143$$.$_page$, previousPage:$previousPage$$3$$});
        $resolve$$50$$(null);
      }, function() {
        $self$$143$$.$_page$ = $previousPage$$3$$;
        $self$$143$$.$_startIndex$ = $self$$143$$.$_page$ * $self$$143$$.pageSize;
        $reject$$49$$(null);
      });
    });
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.setPage", {setPage:$oj$$26$$.$CollectionPagingDataSource$.prototype.setPage});
  $oj$$26$$.$CollectionPagingDataSource$.prototype.getStartItemIndex = function $$oj$$26$$$$CollectionPagingDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$26$$.$CollectionPagingDataSource$.prototype.getStartItemIndex});
  $oj$$26$$.$CollectionPagingDataSource$.prototype.getEndItemIndex = function $$oj$$26$$$$CollectionPagingDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$26$$.$CollectionPagingDataSource$.prototype.getEndItemIndex});
  $oj$$26$$.$CollectionPagingDataSource$.prototype.getPageCount = function $$oj$$26$$$$CollectionPagingDataSource$$$getPageCount$() {
    var $totalSize$$5$$ = this.totalSize();
    return-1 == $totalSize$$5$$ ? -1 : Math.ceil($totalSize$$5$$ / this.pageSize);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getPageCount", {getPageCount:$oj$$26$$.$CollectionPagingDataSource$.prototype.getPageCount});
  $oj$$26$$.$CollectionPagingDataSource$.prototype.fetch = function $$oj$$26$$$$CollectionPagingDataSource$$$fetch$($options$$336$$) {
    var $opts$$30$$ = $options$$336$$ || {};
    if (void 0 !== $opts$$30$$.pageSize && void 0 !== $opts$$30$$.startIndex) {
      if (!this.$_hasMore$()) {
        return this.$_processSuccess$(null), Promise.resolve();
      }
      this.$currentPageSize$ = $opts$$30$$.startIndex + $opts$$30$$.pageSize;
      var $self$$144$$ = this;
      return this.$_refreshDataWindow$().then(function() {
        $self$$144$$.$_processSuccess$(null);
      });
    }
    return this.$_fetchInternal$($options$$336$$);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.fetch", {fetch:$oj$$26$$.$CollectionPagingDataSource$.prototype.fetch});
  $oj$$26$$.$CollectionPagingDataSource$.prototype.$_fetchInternal$ = function $$oj$$26$$$$CollectionPagingDataSource$$$$_fetchInternal$$($options$$337$$) {
    var $opts$$31$$ = $options$$337$$ || {};
    void 0 !== $opts$$31$$.startIndex && (this.current = $opts$$31$$.startIndex);
    void 0 !== $opts$$31$$.pageSize && (this.$currentPageSize$ = this.pageSize = $opts$$31$$.pageSize);
    var $self$$145$$ = this;
    return new Promise(function($resolve$$51$$) {
      try {
        $self$$145$$.$collection$.fetch({success:function() {
          $self$$145$$.$_refreshDataWindow$().then(function() {
            $self$$145$$.$_processSuccess$($opts$$31$$);
            $resolve$$51$$({data:$self$$145$$.$getWindow$(), startIndex:$self$$145$$.current});
          });
        }});
      } catch ($e$$99$$) {
        $self$$145$$.$_refreshDataWindow$().then(function() {
          $self$$145$$.$_processSuccess$($opts$$31$$);
          $resolve$$51$$({data:$self$$145$$.$getWindow$(), startIndex:$self$$145$$.current});
        });
      }
    });
  };
  $oj$$26$$.$CollectionPagingDataSource$.prototype.$_processSuccess$ = function $$oj$$26$$$$CollectionPagingDataSource$$$$_processSuccess$$($options$$338_opts$$32$$) {
    $options$$338_opts$$32$$ = $options$$338_opts$$32$$ || {};
    $options$$338_opts$$32$$.silent || this.handleEvent("sync", {data:this.$getWindow$(), startIndex:this.current});
    $options$$338_opts$$32$$.success && $options$$338_opts$$32$$.success();
  };
  $oj$$26$$.$CollectionPagingDataSource$.prototype.handleEvent = function $$oj$$26$$$$CollectionPagingDataSource$$$handleEvent$($eventType$$44$$, $event$$340$$) {
    return $oj$$26$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$44$$, $event$$340$$);
  };
  $oj$$26$$.$CollectionPagingDataSource$.prototype.$_hasMore$ = function $$oj$$26$$$$CollectionPagingDataSource$$$$_hasMore$$() {
    return this.current + this.$currentPageSize$ < this.totalSize();
  };
  $oj$$26$$.$CollectionPagingDataSource$.prototype.$_setPageSize$ = function $$oj$$26$$$$CollectionPagingDataSource$$$$_setPageSize$$($n$$22$$) {
    this.$currentPageSize$ = this.pageSize = $n$$22$$;
  };
  $oj$$26$$.$CollectionPagingDataSource$.prototype.size = function $$oj$$26$$$$CollectionPagingDataSource$$$size$() {
    var $w$$6$$ = this.$getWindow$();
    return $w$$6$$ ? $w$$6$$.length : 0;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.size", {size:$oj$$26$$.$CollectionPagingDataSource$.prototype.size});
  $oj$$26$$.$CollectionPagingDataSource$.prototype.totalSize = function $$oj$$26$$$$CollectionPagingDataSource$$$totalSize$() {
    return this.$collection$.length;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.totalSize", {totalSize:$oj$$26$$.$CollectionPagingDataSource$.prototype.totalSize});
  $oj$$26$$.$ArrayPagingDataSource$ = function $$oj$$26$$$$ArrayPagingDataSource$$($data$$146$$) {
    this.data = $data$$146$$;
    this.current = 0;
    this.Init();
    this.$_setPageSize$(10);
  };
  $goog$exportPath_$$("ArrayPagingDataSource", $oj$$26$$.$ArrayPagingDataSource$, $oj$$26$$);
  $oj$$26$$.$Object$.$createSubclass$($oj$$26$$.$ArrayPagingDataSource$, $oj$$26$$.$DataSource$, "oj.ArrayPagingDataSource");
  $oj$$26$$.$ArrayPagingDataSource$.prototype.Init = function $$oj$$26$$$$ArrayPagingDataSource$$$Init$() {
    $oj$$26$$.$ArrayPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.Init", {Init:$oj$$26$$.$ArrayPagingDataSource$.prototype.Init});
  $oj$$26$$.$ArrayPagingDataSource$.prototype.$_getSize$ = function $$oj$$26$$$$ArrayPagingDataSource$$$$_getSize$$() {
    return this.$_hasMore$() ? this.$currentPageSize$ : this.totalSize() - this.current;
  };
  $oj$$26$$.$ArrayPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$26$$$$ArrayPagingDataSource$$$$_refreshDataWindow$$($options$$339$$) {
    $options$$339$$ = $options$$339$$ || {};
    this.$dataWindow$ = Array(this.$_getSize$());
    for (var $i$$354$$ = 0;$i$$354$$ < this.$dataWindow$.length;$i$$354$$++) {
      this.$dataWindow$[$i$$354$$] = this.data[this.current + $i$$354$$];
    }
    this.$_refreshObservableDataWindow$();
    this.$_endIndex$ = this.$_startIndex$ + this.$dataWindow$.length - 1;
    $options$$339$$.silent || this.handleEvent("sync", {data:this.$dataWindow$, startIndex:this.current});
  };
  $oj$$26$$.$ArrayPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$26$$$$ArrayPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$355$$ = 0;$i$$355$$ < this.$dataWindow$.length;$i$$355$$++) {
        this.$observableDataWindow$.push(this.$dataWindow$[$i$$355$$]);
      }
    }
  };
  $oj$$26$$.$ArrayPagingDataSource$.prototype.handleEvent = function $$oj$$26$$$$ArrayPagingDataSource$$$handleEvent$($eventType$$45$$, $event$$341$$) {
    return $oj$$26$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$45$$, $event$$341$$);
  };
  $oj$$26$$.$ArrayPagingDataSource$.prototype.$getWindow$ = function $$oj$$26$$$$ArrayPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$26$$.$ArrayPagingDataSource$.prototype.$getWindow$});
  $oj$$26$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$26$$$$ArrayPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$4$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$26$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$26$$.$ArrayPagingDataSource$.prototype.getPage = function $$oj$$26$$$$ArrayPagingDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getPage", {getPage:$oj$$26$$.$ArrayPagingDataSource$.prototype.getPage});
  $oj$$26$$.$ArrayPagingDataSource$.prototype.setPage = function $$oj$$26$$$$ArrayPagingDataSource$$$setPage$($value$$236$$, $options$$340$$) {
    $options$$340$$ = $options$$340$$ || {};
    $value$$236$$ = parseInt($value$$236$$, 10);
    try {
      $oj$$26$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$236$$, previousPage:this.$_page$});
    } catch ($err$$18$$) {
      return Promise.reject(null);
    }
    this.pageSize = null != $options$$340$$.pageSize ? $options$$340$$.pageSize : this.pageSize;
    $options$$340$$.startIndex = $value$$236$$ * this.pageSize;
    var $previousPage$$4$$ = this.$_page$;
    this.$_page$ = $value$$236$$;
    this.$_startIndex$ = $options$$340$$.startIndex;
    var $self$$146$$ = this;
    return new Promise(function($resolve$$52$$, $reject$$51$$) {
      $self$$146$$.$_fetchInternal$($options$$340$$).then(function() {
        $oj$$26$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call($self$$146$$, $oj$$26$$.$PagingModel$.$EventType$.PAGE, {page:$self$$146$$.$_page$, previousPage:$previousPage$$4$$});
        $resolve$$52$$(null);
      }, function() {
        $self$$146$$.$_page$ = $previousPage$$4$$;
        $self$$146$$.$_startIndex$ = $self$$146$$.$_page$ * $self$$146$$.pageSize;
        $reject$$51$$(null);
      });
    });
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.setPage", {setPage:$oj$$26$$.$ArrayPagingDataSource$.prototype.setPage});
  $oj$$26$$.$ArrayPagingDataSource$.prototype.getStartItemIndex = function $$oj$$26$$$$ArrayPagingDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$26$$.$ArrayPagingDataSource$.prototype.getStartItemIndex});
  $oj$$26$$.$ArrayPagingDataSource$.prototype.getEndItemIndex = function $$oj$$26$$$$ArrayPagingDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$26$$.$ArrayPagingDataSource$.prototype.getEndItemIndex});
  $oj$$26$$.$ArrayPagingDataSource$.prototype.getPageCount = function $$oj$$26$$$$ArrayPagingDataSource$$$getPageCount$() {
    var $totalSize$$6$$ = this.totalSize();
    return-1 == $totalSize$$6$$ ? -1 : Math.ceil($totalSize$$6$$ / this.pageSize);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getPageCount", {getPageCount:$oj$$26$$.$ArrayPagingDataSource$.prototype.getPageCount});
  $oj$$26$$.$ArrayPagingDataSource$.prototype.fetch = function $$oj$$26$$$$ArrayPagingDataSource$$$fetch$($options$$341_opts$$33$$) {
    $options$$341_opts$$33$$ = $options$$341_opts$$33$$ || {};
    if (void 0 !== $options$$341_opts$$33$$.pageSize && void 0 !== $options$$341_opts$$33$$.startIndex) {
      if (!this.$_hasMore$()) {
        return Promise.resolve();
      }
      this.$currentPageSize$ = $options$$341_opts$$33$$.startIndex + $options$$341_opts$$33$$.pageSize;
    }
    this.$_refreshDataWindow$(null);
    return Promise.resolve();
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.fetch", {fetch:$oj$$26$$.$ArrayPagingDataSource$.prototype.fetch});
  $oj$$26$$.$ArrayPagingDataSource$.prototype.$_fetchInternal$ = function $$oj$$26$$$$ArrayPagingDataSource$$$$_fetchInternal$$($options$$342$$) {
    var $opts$$34$$ = $options$$342$$ || {};
    void 0 !== $opts$$34$$.startIndex && (this.current = $opts$$34$$.startIndex);
    void 0 !== $opts$$34$$.pageSize && (this.$currentPageSize$ = this.pageSize = $opts$$34$$.pageSize);
    this.$_refreshDataWindow$($options$$342$$);
    return Promise.resolve({data:this.$dataWindow$, startIndex:this.current});
  };
  $oj$$26$$.$ArrayPagingDataSource$.prototype.$_hasMore$ = function $$oj$$26$$$$ArrayPagingDataSource$$$$_hasMore$$() {
    return this.current + this.$currentPageSize$ < this.totalSize();
  };
  $oj$$26$$.$ArrayPagingDataSource$.prototype.$_setPageSize$ = function $$oj$$26$$$$ArrayPagingDataSource$$$$_setPageSize$$($n$$23$$) {
    this.$currentPageSize$ = this.pageSize = $n$$23$$;
    this.$_refreshDataWindow$(null);
  };
  $oj$$26$$.$ArrayPagingDataSource$.prototype.totalSize = function $$oj$$26$$$$ArrayPagingDataSource$$$totalSize$() {
    return this.data.length;
  };
});
