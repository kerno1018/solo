/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$50$$, $ko$$5$$) {
  $oj$$50$$.$KnockoutUtils$ = function $$oj$$50$$$$KnockoutUtils$$() {
  };
  $goog$exportPath_$$("KnockoutUtils", $oj$$50$$.$KnockoutUtils$, $oj$$50$$);
  $oj$$50$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$50$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$50$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$50$$.$KnockoutUtils$.$subscriptionProp$ = "oj.collectionSubscription";
  $oj$$50$$.$KnockoutUtils$.$updatingCollectionFunc$ = "oj.collectionUpdatingFunc";
  $oj$$50$$.$KnockoutUtils$.map = function $$oj$$50$$$$KnockoutUtils$$map$($m$$26$$, $callback$$120$$, $array$$17_data$$174_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$268$$) {
        $koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] || $m$$26$$.set($argProp$$, $value$$268$$);
      };
    }
    var $koObject$$, $i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$, $converted_index$$279_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if ($m$$26$$ instanceof $oj$$50$$.$Collection$) {
      $i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$ = Array($m$$26$$.$_getLength$());
      $koObject$$ = $array$$17_data$$174_updateObservable_updateObservableArrayRemove$$ ? $ko$$5$$.observableArray($i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$) : $i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$;
      $oj$$50$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$26$$);
      if ($array$$17_data$$174_updateObservable_updateObservableArrayRemove$$) {
        for ($i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$ = 0;$i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$ < $m$$26$$.$_modelIndices$.length;$i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$279_updateObservableArrayReset$$ = $m$$26$$.$_modelIndices$[$i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$], $koObject$$()[$converted_index$$279_updateObservableArrayReset$$] = $oj$$50$$.$KnockoutUtils$.map($m$$26$$.$_atInternal$($converted_index$$279_updateObservableArrayReset$$, null, !0, !1), $callback$$120$$);
        }
      } else {
        for ($i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$ = 0;$i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$ < $m$$26$$.$_modelIndices$.length;$i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$279_updateObservableArrayReset$$ = $m$$26$$.$_modelIndices$[$i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$], $koObject$$[$converted_index$$279_updateObservableArrayReset$$] = $oj$$50$$.$KnockoutUtils$.map($m$$26$$.$_atInternal$($converted_index$$279_updateObservableArrayReset$$, null, !0, !1), $callback$$120$$);
        }
      }
      $i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$ = function $$i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$$($changes$$7$$) {
        var $i$$434$$;
        try {
          if (!$koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$50$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for ($i$$434$$ = 0;$i$$434$$ < $changes$$7$$.length;$i$$434$$++) {
              var $index$$280$$ = $changes$$7$$[$i$$434$$].index, $model$$84$$ = $oj$$50$$.$KnockoutUtils$.$_getModel$($changes$$7$$[$i$$434$$].value), $status$$32$$ = $changes$$7$$[$i$$434$$].status;
              "added" === $status$$32$$ ? $index$$280$$ >= $m$$26$$.length - 1 ? $m$$26$$.add($model$$84$$) : $m$$26$$.add($model$$84$$, {at:$index$$280$$}) : "deleted" === $status$$32$$ && $m$$26$$.$_removeInternal$($model$$84$$, $index$$280$$);
            }
            $m$$26$$.comparator && ($koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$118$$, $b$$73$$) {
              return $oj$$50$$.$KnockoutUtils$.$_callSort$($a$$118$$, $b$$73$$, $m$$26$$.comparator, $m$$26$$, this);
            }), $koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] = !1);
          }
        } catch ($e$$148$$) {
          throw $e$$148$$;
        } finally {
          $koObject$$[$oj$$50$$.$KnockoutUtils$.$collUpdatingProp$] = !1;
        }
      };
      $array$$17_data$$174_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && ($koObject$$[$oj$$50$$.$KnockoutUtils$.$updatingCollectionFunc$] = $i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$, $koObject$$[$oj$$50$$.$KnockoutUtils$.$subscriptionProp$] = $koObject$$.subscribe($i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$, null, "arrayChange"));
      $array$$17_data$$174_updateObservable_updateObservableArrayRemove$$ = function $$array$$17_data$$174_updateObservable_updateObservableArrayRemove$$$($model$$85$$, $collection$$61$$, $options$$376$$) {
        var $index$$281$$;
        try {
          !$koObject$$[$oj$$50$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$61$$ instanceof $oj$$50$$.$Collection$ && ($koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$281$$ = $options$$376$$.index, $koObject$$.splice($index$$281$$, 1));
        } catch ($e$$149$$) {
          throw $e$$149$$;
        } finally {
          $koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$ = function $$i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$$($model$$86$$, $collection$$62$$, $options$$377$$) {
        var $index$$282$$, $newObservable$$;
        try {
          if (!$koObject$$[$oj$$50$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$62$$ instanceof $oj$$50$$.$Collection$ && ($koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$282$$ = $collection$$62$$.$_localIndexOf$($model$$86$$), void 0 !== $index$$282$$ && -1 < $index$$282$$)) {
            if ($newObservable$$ = $oj$$50$$.$KnockoutUtils$.map($model$$86$$, $callback$$120$$), $options$$377$$.fillIn) {
              for (var $i$$435$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$435$$ < $index$$282$$;$i$$435$$++) {
                $koObject$$.splice($i$$435$$, 0, $oj$$50$$.$KnockoutUtils$.map($collection$$62$$.$_atInternal$($i$$435$$, null, !0, !1), $callback$$120$$));
              }
              $koObject$$.splice($index$$282$$, 1, $newObservable$$);
            } else {
              $koObject$$.splice($index$$282$$, 0, $newObservable$$);
            }
          }
        } catch ($e$$150$$) {
          throw $e$$150$$;
        } finally {
          $koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $converted_index$$279_updateObservableArrayReset$$ = function $$converted_index$$279_updateObservableArrayReset$$$($collection$$63$$) {
        try {
          !$koObject$$[$oj$$50$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$63$$ instanceof $oj$$50$$.$Collection$ && ($koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$5$$.isObservable($koObject$$) ? ($koObject$$[$oj$$50$$.$KnockoutUtils$.$subscriptionProp$] && $koObject$$[$oj$$50$$.$KnockoutUtils$.$subscriptionProp$].dispose(), $koObject$$.removeAll(), $koObject$$[$oj$$50$$.$KnockoutUtils$.$updatingCollectionFunc$] && $koObject$$.subscribe($koObject$$[$oj$$50$$.$KnockoutUtils$.$updatingCollectionFunc$], 
          null, "arrayChange")) : $koObject$$ = []);
        } catch ($e$$151$$) {
          throw $e$$151$$;
        } finally {
          $koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$64$$) {
        try {
          !$koObject$$[$oj$$50$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$64$$ instanceof $oj$$50$$.$Collection$ && ($koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$119$$, $b$$74$$) {
            return $oj$$50$$.$KnockoutUtils$.$_callSort$($a$$119$$, $b$$74$$, $m$$26$$.comparator, $collection$$64$$, this);
          }));
        } catch ($e$$152$$) {
          throw $e$$152$$;
        } finally {
          $koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$26$$.$OnInternal$($oj$$50$$.$Events$.$EventType$.ADD, $i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$26$$.$OnInternal$($oj$$50$$.$Events$.$EventType$.REMOVE, $array$$17_data$$174_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$26$$.$OnInternal$($oj$$50$$.$Events$.$EventType$.RESET, $converted_index$$279_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$26$$.$OnInternal$($oj$$50$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0);
    } else {
      if (void 0 === $m$$26$$) {
        return;
      }
      $koObject$$ = {};
      $array$$17_data$$174_updateObservable_updateObservableArrayRemove$$ = $m$$26$$.attributes;
      $i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$ = null;
      for ($i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$ in $array$$17_data$$174_updateObservable_updateObservableArrayRemove$$) {
        $array$$17_data$$174_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$) && ($converted_index$$279_updateObservableArrayReset$$ = $ko$$5$$.observable($m$$26$$.get($i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$] = $converted_index$$279_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = 
        $_makeUpdateModel$$($i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$), $updateModel_updateObservableArraySort$$.$_prop$ = $i$$433_prealloc_prop$$72_updateCollection_updateObservableArrayAdd$$, $converted_index$$279_updateObservableArrayReset$$.subscribe && $converted_index$$279_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$));
      }
      $array$$17_data$$174_updateObservable_updateObservableArrayRemove$$ = function $$array$$17_data$$174_updateObservable_updateObservableArrayRemove$$$($model$$87$$) {
        var $attrs$$23$$, $prop$$73$$;
        try {
          for ($prop$$73$$ in $koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$23$$ = $model$$87$$.$changedAttributes$(), $attrs$$23$$) {
            if ($attrs$$23$$.hasOwnProperty($prop$$73$$)) {
              $koObject$$[$prop$$73$$]($model$$87$$.get($prop$$73$$));
            }
          }
        } catch ($e$$153$$) {
          throw $e$$153$$;
        } finally {
          $koObject$$[$oj$$50$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$26$$.$OnInternal$($oj$$50$$.$Events$.$EventType$.CHANGE, $array$$17_data$$174_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$50$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$26$$);
      $callback$$120$$ && $callback$$120$$($koObject$$);
    }
    return $koObject$$;
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$50$$.$KnockoutUtils$.map, $oj$$50$$);
  $oj$$50$$.$KnockoutUtils$.$_getModel$ = function $$oj$$50$$$$KnockoutUtils$$$_getModel$$($val$$77$$) {
    return $val$$77$$ instanceof $oj$$50$$.$Model$ ? $val$$77$$ : $val$$77$$.hasOwnProperty($oj$$50$$.$KnockoutUtils$.$internalObjectProperty$) ? $val$$77$$[$oj$$50$$.$KnockoutUtils$.$internalObjectProperty$] : $val$$77$$;
  };
  $oj$$50$$.$KnockoutUtils$.$_callSort$ = function $$oj$$50$$$$KnockoutUtils$$$_callSort$$($a$$120$$, $b$$75$$, $comparator$$15$$, $collection$$65$$, $caller$$8$$) {
    return $oj$$50$$.$Collection$.$SortFunc$($oj$$50$$.$KnockoutUtils$.$_getModel$($a$$120$$), $oj$$50$$.$KnockoutUtils$.$_getModel$($b$$75$$), $comparator$$15$$, $collection$$65$$, $caller$$8$$);
  };
  $oj$$50$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$50$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$6$$, $value$$269$$) {
    Object.defineProperty($object$$6$$, $oj$$50$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$269$$, enumerable:!1});
  };
});
