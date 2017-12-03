/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$44$$) {
  $oj$$44$$.$CollectionTreeDataSource$ = function $$oj$$44$$$$CollectionTreeDataSource$$($options$$359$$) {
    $options$$359$$ = $options$$359$$ || {};
    this.$rootCollection$ = $options$$359$$.root;
    this.$childCollectionCallback$ = $options$$359$$.childCollectionCallback;
    this.$parseMetadata$ = $options$$359$$.parseMetadata;
    this.$sortkey$ = null;
    this.$sortdir$ = "none";
    this.$cache$ = {};
    $oj$$44$$.$CollectionTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionTreeDataSource", $oj$$44$$.$CollectionTreeDataSource$, $oj$$44$$);
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$parseMetadata$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$parseMetadata$$($model$$59$$) {
    return{key:$model$$59$$.idAttribute + "\x3d" + $model$$59$$.id};
  };
  $oj$$44$$.$Object$.$createSubclass$($oj$$44$$.$CollectionTreeDataSource$, $oj$$44$$.$TreeDataSource$, "oj.CollectionTreeDataSource");
  $oj$$44$$.$CollectionTreeDataSource$.prototype.Init = function $$oj$$44$$$$CollectionTreeDataSource$$$Init$() {
    $oj$$44$$.$CollectionTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.Init", {Init:$oj$$44$$.$CollectionTreeDataSource$.prototype.Init});
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$getChildCount$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$getChildCount$$($parent$$45$$) {
    var $childColl$$ = this.$cache$[$parent$$45$$];
    if ($childColl$$ && 0 < $childColl$$.length) {
      return $childColl$$.length;
    }
    this.$getChildCollection$($parent$$45$$, {success:function($coll$$3$$) {
      return $coll$$3$$.length;
    }});
    return-1;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$44$$.$CollectionTreeDataSource$.prototype.$getChildCount$});
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$getChildCollection$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$getChildCollection$$($key$$157$$, $callbacks$$47$$) {
    this.$fetchChildren$($key$$157$$, null, {success:function($nodeSet$$35$$) {
      $callbacks$$47$$.success($nodeSet$$35$$.$collection$);
    }, error:$callbacks$$47$$.error});
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCollection", {$getChildCollection$:$oj$$44$$.$CollectionTreeDataSource$.prototype.$getChildCollection$});
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$fetchChildren$$($parent$$46$$, $range$$23$$, $callbacks$$48$$) {
    $range$$23$$ = $range$$23$$ || {};
    var $start$$49$$ = $range$$23$$.start ? $range$$23$$.start : 0, $count$$49$$ = $range$$23$$.count ? $range$$23$$.count : -1;
    if (null === $parent$$46$$) {
      this.$FetchCollection$(null, $start$$49$$, $count$$49$$, $callbacks$$48$$, null);
    } else {
      var $self$$165$$ = this;
      this.$_getModelForId$(this.$rootCollection$, $parent$$46$$, 0).then(function($collection$$35_parentModel$$) {
        if ($collection$$35_parentModel$$) {
          $collection$$35_parentModel$$ = $self$$165$$.$GetChildCollection$($collection$$35_parentModel$$.$model$);
          try {
            $self$$165$$.$FetchCollection$($collection$$35_parentModel$$, $start$$49$$, $count$$49$$, $callbacks$$48$$, $parent$$46$$);
          } catch ($error$$44$$) {
            $callbacks$$48$$ && $callbacks$$48$$.error && $callbacks$$48$$.error({status:$error$$44$$.message});
          }
        } else {
          $callbacks$$48$$ && $callbacks$$48$$.error && $callbacks$$48$$.error($parent$$46$$);
        }
      });
    }
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$44$$.$CollectionTreeDataSource$.prototype.$fetchChildren$});
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$ModelAdded$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$ModelAdded$$($event$$520_model$$60$$, $collection$$36_parents$$5$$, $options$$361$$) {
    var $index$$243$$ = 0;
    $options$$361$$ && $options$$361$$.at && ($index$$243$$ = $options$$361$$.at);
    $collection$$36_parents$$5$$ = this.$_getParentChain$($collection$$36_parents$$5$$);
    $event$$520_model$$60$$ = this.$_createEvent$(this, "insert", $index$$243$$, $collection$$36_parents$$5$$, this.$_putModelInNodeSet$(null != $collection$$36_parents$$5$$ && 0 < $collection$$36_parents$$5$$.length ? $collection$$36_parents$$5$$[$collection$$36_parents$$5$$.length - 1] : null, $event$$520_model$$60$$));
    this.handleEvent("change", $event$$520_model$$60$$);
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$ModelRemoved$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$ModelRemoved$$($event$$521_model$$61$$, $collection$$37$$, $options$$362$$) {
    var $index$$244$$ = 0;
    $options$$362$$ && $options$$362$$.index && ($index$$244$$ = $options$$362$$.index);
    this.$_removeCollectionFromCache$($event$$521_model$$61$$);
    $event$$521_model$$61$$ = this.$_createEvent$(this, "delete", $index$$244$$, this.$_getParentChain$($collection$$37$$), null);
    this.handleEvent("change", $event$$521_model$$61$$);
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$ModelUpdated$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$ModelUpdated$$($event$$522_model$$62$$) {
    var $collectionForModel$$ = this.$_getCollectionForModel$($event$$522_model$$62$$), $index$$245$$ = null, $parents$$6$$ = null;
    $collectionForModel$$ && ($index$$245$$ = $collectionForModel$$.index, $parents$$6$$ = this.$_getParentChain$($collectionForModel$$.$collection$));
    $event$$522_model$$62$$ = this.$_createEvent$(this, "update", $index$$245$$, $parents$$6$$, this.$_putModelInNodeSet$(null != $parents$$6$$ && 0 < $parents$$6$$.length ? $parents$$6$$[$parents$$6$$.length - 1] : null, $event$$522_model$$62$$));
    this.handleEvent("change", $event$$522_model$$62$$);
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$CollectionRefreshed$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$CollectionRefreshed$$($collection$$38_event$$523$$) {
    $collection$$38_event$$523$$ = this.$_createEvent$(this, "refresh", null, this.$_getParentChain$($collection$$38_event$$523$$), null);
    this.handleEvent("refresh", $collection$$38_event$$523$$);
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_putModelInNodeSet$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_putModelInNodeSet$$($parent$$49$$, $model$$63$$) {
    var $collection$$39$$ = new $oj$$44$$.$Collection$;
    $collection$$39$$.add($model$$63$$);
    return this.$_getNodeSet$($collection$$39$$, $parent$$49$$, 0, 1);
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_getParentChain$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_getParentChain$$($coll$$4_collection$$40$$) {
    var $parents$$7$$ = [], $parent$$50$$ = null;
    do {
      $parent$$50$$ = this.$_getParentOfCollection$($coll$$4_collection$$40$$), null !== $parent$$50$$ && ($parent$$50$$ !== $oj$$44$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ && $parents$$7$$.unshift($parent$$50$$), $coll$$4_collection$$40$$ = this.$_getCollectionOfKey$($parent$$50$$));
    } while (null != $parent$$50$$);
    return $parents$$7$$;
  };
  $oj$$44$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ = "%!@ROOT%#@!";
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_getCacheKey$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_getCacheKey$$($model$$64$$) {
    var $key$$158$$ = $model$$64$$ instanceof $oj$$44$$.$Model$ ? this.$parseMetadata$($model$$64$$).key : $model$$64$$;
    return $model$$64$$ ? $key$$158$$ : $oj$$44$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$;
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$__getParentsChildCollectionFromCache$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$__getParentsChildCollectionFromCache$$($model$$65$$) {
    return this.$cache$[this.$_getCacheKey$($model$$65$$)];
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_setCollectionInCache$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_setCollectionInCache$$($model$$66$$, $collection$$41$$) {
    $collection$$41$$.on($oj$$44$$.$Events$.$EventType$.ADD, this.$ModelAdded$, this);
    $collection$$41$$.on($oj$$44$$.$Events$.$EventType$.REMOVE, this.$ModelRemoved$, this);
    $collection$$41$$.on($oj$$44$$.$Events$.$EventType$.CHANGE, this.$ModelUpdated$, this);
    $collection$$41$$.on($oj$$44$$.$Events$.$EventType$.SYNC, this.$CollectionRefreshed$, this);
    this.$cache$[this.$_getCacheKey$($model$$66$$)] = $collection$$41$$;
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_removeCollectionFromCache$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_removeCollectionFromCache$$($key$$159_model$$67$$) {
    $key$$159_model$$67$$ = this.$_getCacheKey$($key$$159_model$$67$$);
    for (var $prop$$67$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$67$$) && $prop$$67$$ === $key$$159_model$$67$$) {
        this.$cache$[$key$$159_model$$67$$].off(null, null, this);
        delete this.$cache$[$key$$159_model$$67$$];
        break;
      }
    }
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_keyInCollection$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_keyInCollection$$($key$$160$$, $collection$$42$$) {
    for (var $count$$50$$ = $collection$$42$$.length, $i$$426$$ = 0;$i$$426$$ < $count$$50$$;$i$$426$$++) {
      var $currKey$$1$$ = this.$_getCacheKey$($collection$$42$$.at($i$$426$$));
      if ($key$$160$$ === $currKey$$1$$) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_getCollectionForModel$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_getCollectionForModel$$($model$$68$$) {
    for (var $prop$$68$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$68$$)) {
        for (var $collection$$43$$ = this.$cache$[$prop$$68$$], $i$$427$$ = 0;$i$$427$$ < $collection$$43$$.length;$i$$427$$++) {
          if ($collection$$43$$.at($i$$427$$) === $model$$68$$) {
            return{index:$i$$427$$, $collection$:$collection$$43$$};
          }
        }
      }
    }
    return null;
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_getCollectionOfKey$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_getCollectionOfKey$$($key$$161$$) {
    for (var $prop$$69$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$69$$)) {
        var $collection$$44$$ = this.$cache$[$prop$$69$$];
        if (this.$_keyInCollection$($key$$161$$, $collection$$44$$)) {
          return $collection$$44$$;
        }
      }
    }
    return null;
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_getParentOfCollection$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_getParentOfCollection$$($collection$$45$$) {
    for (var $prop$$70$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$70$$) && this.$cache$[$prop$$70$$] === $collection$$45$$) {
        return $prop$$70$$;
      }
    }
    return null;
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$GetChildCollection$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$GetChildCollection$$($parentModel$$1$$) {
    var $cached$$ = !0, $collection$$46$$ = this.$__getParentsChildCollectionFromCache$($parentModel$$1$$);
    $collection$$46$$ || ($cached$$ = !1, $collection$$46$$ = this.$childCollectionCallback$(this.$rootCollection$, $parentModel$$1$$), null != $collection$$46$$ && (this.$_applySortToCollection$($collection$$46$$), this.$_setCollectionInCache$($parentModel$$1$$, $collection$$46$$)));
    return{$collection$:$collection$$46$$, $cached$:$cached$$};
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_createEvent$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_createEvent$$($source$$12$$, $operation$$6$$, $index$$246$$, $parent$$51$$, $data$$172$$) {
    return{source:$source$$12$$, operation:$operation$$6$$, index:$index$$246$$, parent:$parent$$51$$, data:$data$$172$$};
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$FetchCollection$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$FetchCollection$$($collection$$47$$, $start$$50$$, $count$$51$$, $callbacks$$49$$, $parent$$52$$) {
    var $self$$166$$ = this;
    null === $collection$$47$$ && (($collection$$47$$ = this.$__getParentsChildCollectionFromCache$(null)) ? $collection$$47$$ = {$collection$:$collection$$47$$, $cached$:!0} : ($collection$$47$$ = {$collection$:$self$$166$$.$rootCollection$, $cached$:!1}, $self$$166$$.$_setCollectionInCache$(null, this.$rootCollection$)));
    $collection$$47$$ && $self$$166$$.$_fetch$($collection$$47$$, function($coll$$5$$) {
      $callbacks$$49$$.success && $callbacks$$49$$.success($self$$166$$.$_getNodeSet$($coll$$5$$, $parent$$52$$, $start$$50$$, $count$$51$$));
    }, $callbacks$$49$$.error);
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_getNodeSet$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_getNodeSet$$($collection$$48$$, $parent$$53$$, $start$$51$$, $count$$52$$) {
    return new $oj$$44$$.$CollectionNodeSet$($parent$$53$$, $collection$$48$$, this, $start$$51$$, $count$$52$$);
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_scanForKey$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_scanForKey$$($collection$$49$$, $key$$162$$) {
    var $self$$167$$ = this;
    return new Promise(function($resolve$$53$$) {
      function $checkNext$$($index$$247$$, $collection$$50$$, $key$$163$$) {
        $index$$247$$ < $collection$$50$$.length ? $collection$$50$$.at($index$$247$$, {deferred:!0}).then(function($model$$69$$) {
          if ($model$$69$$) {
            var $parse$$5$$ = $self$$167$$.$parseMetadata$($model$$69$$);
            if ($key$$163$$ === $parse$$5$$.key) {
              $resolve$$53$$($model$$69$$);
              return;
            }
          }
          $index$$247$$++;
          $checkNext$$($index$$247$$, $collection$$50$$, $key$$163$$);
        }) : $resolve$$53$$(null);
      }
      $checkNext$$(0, $collection$$49$$, $key$$162$$);
    });
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_getModelForId$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_getModelForId$$($collection$$51$$, $key$$164$$, $depth$$25$$) {
    var $self$$168$$ = this;
    return new Promise(function($resolve$$54$$) {
      $self$$168$$.$_scanForKey$($collection$$51$$, $key$$164$$).then(function($model$$70$$) {
        function $getNextCollection$$($index$$248$$, $tds$$) {
          if ($index$$248$$ < $max$$7$$) {
            var $childColl$$1$$ = $tds$$.$GetChildCollection$($collection$$51$$.at($index$$248$$));
            $childColl$$1$$.$collection$ ? $tds$$.$_fetch$($childColl$$1$$, function($fetchColl$$) {
              $tds$$.$_getModelForId$($fetchColl$$, $key$$164$$, $depth$$25$$ + 1).then(function($childModel$$) {
                $childModel$$ ? $resolve$$54$$($childModel$$) : ($index$$248$$++, $getNextCollection$$($index$$248$$, $tds$$));
              });
            }, null) : ($index$$248$$++, $getNextCollection$$($index$$248$$, $tds$$));
          } else {
            $resolve$$54$$(null);
          }
        }
        if ($model$$70$$) {
          $resolve$$54$$({$model$:$model$$70$$, depth:$depth$$25$$});
        } else {
          var $max$$7$$ = $collection$$51$$.length;
          $getNextCollection$$(0, $self$$168$$);
        }
      });
    });
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_fetch$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_fetch$$($collectionCacheObj$$, $success$$15$$, $error$$45$$) {
    $collectionCacheObj$$.$cached$ ? $success$$15$$($collectionCacheObj$$.$collection$) : (this.$sortkey$ && "none" !== this.$sortkey$ && ($collectionCacheObj$$.$collection$.$comparator$ = this.$sortkey$, $collectionCacheObj$$.$collection$.$sortDirection$ = this.$sortdir$), 0 < $collectionCacheObj$$.$collection$.length || !$collectionCacheObj$$.$collection$.$IsUrlBased$() ? $success$$15$$($collectionCacheObj$$.$collection$) : $collectionCacheObj$$.$collection$.fetch({success:function($fetchColl$$1$$) {
      $success$$15$$($fetchColl$$1$$);
    }, error:$error$$45$$}));
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$fetchDescendants$$($parent$$54$$, $callbacks$$50$$) {
    var $self$$169$$ = this;
    null === $parent$$54$$ ? this.$FetchCollection$(null, 0, -1, {success:function($nodeSet$$36$$) {
      $nodeSet$$36$$.$FetchDescendants$({success:function() {
        $callbacks$$50$$.success && $callbacks$$50$$.success($nodeSet$$36$$);
      }});
    }}, null) : this.$_getModelForId$(this.$rootCollection$, $parent$$54$$, 0).then(function($collection$$52_parentModel$$2$$) {
      $collection$$52_parentModel$$2$$ && ($collection$$52_parentModel$$2$$ = $self$$169$$.$GetChildCollection$($collection$$52_parentModel$$2$$.$model$), $self$$169$$.$FetchCollection$($collection$$52_parentModel$$2$$, 0, -1, {success:function($nodeSet$$37$$) {
        $nodeSet$$37$$.$FetchDescendants$({success:function() {
          $callbacks$$50$$.success && $callbacks$$50$$.success($nodeSet$$37$$);
        }});
      }}, $parent$$54$$));
    });
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$44$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$44$$.$CollectionTreeDataSource$.prototype.sort = function $$oj$$44$$$$CollectionTreeDataSource$$$sort$($criteria$$14$$, $callbacks$$51$$) {
    var $key$$165$$ = $criteria$$14$$.key, $dir$$1$$ = $criteria$$14$$.direction, $needSort$$2$$ = !1;
    $key$$165$$ !== this.$sortkey$ && (this.$sortkey$ = $key$$165$$, $needSort$$2$$ = !0);
    $dir$$1$$ !== this.$sortdir$ && (this.$sortdir$ = $dir$$1$$, $needSort$$2$$ = !0);
    if ($needSort$$2$$) {
      "none" === this.$sortdir$ && (this.$cache$ = {});
      for (var $prop$$71$$ in this.$cache$) {
        this.$cache$.hasOwnProperty($prop$$71$$) && this.$_applySortToCollection$(this.$cache$[$prop$$71$$]);
      }
    }
    $callbacks$$51$$ && $callbacks$$51$$.success && $callbacks$$51$$.success();
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.sort", {sort:$oj$$44$$.$CollectionTreeDataSource$.prototype.sort});
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$_applySortToCollection$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$_applySortToCollection$$($collection$$54$$) {
    $collection$$54$$.comparator = this.$sortkey$;
    $collection$$54$$.sortDirection = "ascending" === this.$sortdir$ ? 1 : -1;
    $collection$$54$$.sort();
  };
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$getSortCriteria$$() {
    return{key:this.$sortkey$, direction:this.$sortdir$};
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$44$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$44$$.$CollectionTreeDataSource$.prototype.move = function $$oj$$44$$$$CollectionTreeDataSource$$$move$() {
    $oj$$44$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.move", {move:$oj$$44$$.$CollectionTreeDataSource$.prototype.move});
  $oj$$44$$.$CollectionTreeDataSource$.prototype.$moveOK$ = function $$oj$$44$$$$CollectionTreeDataSource$$$$moveOK$$() {
    return "invalid";
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$44$$.$CollectionTreeDataSource$.prototype.$moveOK$});
  $oj$$44$$.$CollectionTreeDataSource$.prototype.getCapability = function $$oj$$44$$$$CollectionTreeDataSource$$$getCapability$($feature$$16$$) {
    return "sort" === $feature$$16$$ ? "default" : "move" === $feature$$16$$ ? "none" : "batchFetch" === $feature$$16$$ || "fetchDescendants" === $feature$$16$$ ? "disable" : null;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getCapability", {getCapability:$oj$$44$$.$CollectionTreeDataSource$.prototype.getCapability});
  $oj$$44$$.$CollectionNodeSet$ = function $$oj$$44$$$$CollectionNodeSet$$($parentKey$$13$$, $collection$$55$$, $treeDataSource$$2$$, $start$$52$$, $count$$53$$) {
    this.$parentKey$ = $parentKey$$13$$;
    this.$collection$ = $collection$$55$$;
    this.$childNodeSet$ = [];
    this.$treeDataSource$ = $treeDataSource$$2$$;
    this.start = $start$$52$$ < $collection$$55$$.length ? $start$$52$$ : $collection$$55$$.length - 1;
    this.count = -1 === $count$$53$$ ? $collection$$55$$.length : Math.min($collection$$55$$.length, $count$$53$$);
  };
  $goog$exportPath_$$("CollectionNodeSet", $oj$$44$$.$CollectionNodeSet$, $oj$$44$$);
  $oj$$44$$.$CollectionNodeSet$.prototype.$FetchDescendants$ = function $$oj$$44$$$$CollectionNodeSet$$$$FetchDescendants$$($callbacks$$53$$) {
    this.$_fetchDescendants$(this).then(function() {
      $callbacks$$53$$.success && $callbacks$$53$$.success();
    });
  };
  $oj$$44$$.$CollectionNodeSet$.prototype.$_fetchDescendants$ = function $$oj$$44$$$$CollectionNodeSet$$$$_fetchDescendants$$($nodeSet$$38$$) {
    return new Promise(function($resolve$$55$$) {
      function $nextNode$$($index$$249$$) {
        $index$$249$$ < $count$$54$$ ? $nodeSet$$38$$.$FetchChildNodeSet$($index$$249$$, {success:function($childNodeSet$$1$$) {
          null !== $childNodeSet$$1$$ ? $nodeSet$$38$$.$_fetchDescendants$($childNodeSet$$1$$).then(function() {
            $nextNode$$($index$$249$$ + 1);
          }) : $nextNode$$($index$$249$$ + 1);
        }}) : $resolve$$55$$(void 0);
      }
      var $count$$54$$ = $nodeSet$$38$$.$getCount$();
      $nextNode$$(0);
    });
  };
  $oj$$44$$.$CollectionNodeSet$.prototype.$FetchChildNodeSet$ = function $$oj$$44$$$$CollectionNodeSet$$$$FetchChildNodeSet$$($index$$250$$, $callbacks$$54$$) {
    var $model$$71_parentKey$$14$$ = this.$collection$.at($index$$250$$);
    if (this.$treeDataSource$.$parseMetadata$($model$$71_parentKey$$14$$).leaf) {
      this.$childNodeSet$[$index$$250$$] = null, $callbacks$$54$$.success(null);
    } else {
      var $collection$$56$$ = this.$treeDataSource$.$GetChildCollection$($model$$71_parentKey$$14$$), $model$$71_parentKey$$14$$ = this.$treeDataSource$.$parseMetadata$($model$$71_parentKey$$14$$).key, $self$$170$$ = this;
      this.$treeDataSource$.$FetchCollection$($collection$$56$$, 0, -1, {success:function($nodeSet$$39$$) {
        $self$$170$$.$childNodeSet$[$index$$250$$] = $nodeSet$$39$$;
        $callbacks$$54$$.success($nodeSet$$39$$);
      }}, $model$$71_parentKey$$14$$);
    }
  };
  $oj$$44$$.$CollectionNodeSet$.prototype.getParent = function $$oj$$44$$$$CollectionNodeSet$$$getParent$() {
    return this.$parentKey$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getParent", {getParent:$oj$$44$$.$CollectionNodeSet$.prototype.getParent});
  $oj$$44$$.$CollectionNodeSet$.prototype.$getStart$ = function $$oj$$44$$$$CollectionNodeSet$$$$getStart$$() {
    return this.start;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getStart", {$getStart$:$oj$$44$$.$CollectionNodeSet$.prototype.$getStart$});
  $oj$$44$$.$CollectionNodeSet$.prototype.$getCount$ = function $$oj$$44$$$$CollectionNodeSet$$$$getCount$$() {
    return this.count;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getCount", {$getCount$:$oj$$44$$.$CollectionNodeSet$.prototype.$getCount$});
  $oj$$44$$.$CollectionNodeSet$.prototype.getData = function $$oj$$44$$$$CollectionNodeSet$$$getData$($index$$251$$) {
    this.$_checkRange$($index$$251$$);
    return this.$collection$.at($index$$251$$).attributes;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getData", {getData:$oj$$44$$.$CollectionNodeSet$.prototype.getData});
  $oj$$44$$.$CollectionNodeSet$.prototype.$_checkRange$ = function $$oj$$44$$$$CollectionNodeSet$$$$_checkRange$$($index$$252$$) {
    if ($index$$252$$ < this.start || $index$$252$$ > this.start + this.count) {
      throw "Out of range";
    }
  };
  $oj$$44$$.$CollectionNodeSet$.prototype.getMetadata = function $$oj$$44$$$$CollectionNodeSet$$$getMetadata$($index$$253_model$$72_parse$$7$$) {
    this.$_checkRange$($index$$253_model$$72_parse$$7$$);
    var $metadata$$14$$ = {};
    $index$$253_model$$72_parse$$7$$ = this.$collection$.at($index$$253_model$$72_parse$$7$$);
    $index$$253_model$$72_parse$$7$$ = this.$treeDataSource$.$parseMetadata$($index$$253_model$$72_parse$$7$$);
    $metadata$$14$$.key = $index$$253_model$$72_parse$$7$$.key;
    $metadata$$14$$.leaf = $index$$253_model$$72_parse$$7$$.leaf;
    $metadata$$14$$.depth = $index$$253_model$$72_parse$$7$$.depth;
    return $metadata$$14$$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getMetadata", {getMetadata:$oj$$44$$.$CollectionNodeSet$.prototype.getMetadata});
  $oj$$44$$.$CollectionNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$44$$$$CollectionNodeSet$$$$getChildNodeSet$$($index$$254$$) {
    this.$_checkRange$($index$$254$$);
    return this.$childNodeSet$[$index$$254$$];
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$44$$.$CollectionNodeSet$.prototype.$getChildNodeSet$});
});
