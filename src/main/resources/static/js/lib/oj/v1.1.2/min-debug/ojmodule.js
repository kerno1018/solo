/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "knockout", "promise"], function($oj$$56$$, $ko$$6$$) {
  $oj$$56$$.$ModuleBinding$ = {};
  $oj$$56$$.$ModuleBinding$.$defaults$ = {viewPath:"text!views/", viewSuffix:".html", modelPath:"viewModels/", initializeMethod:"initialize", disposeMethod:"dispose", activatedHandler:"handleActivated", attachedHandler:"handleAttached", detachedHandler:"handleDetached", bindingsAppliedHandler:"handleBindingsApplied", deactivatedHandler:"handleDeactivated"};
  $goog$exportPath_$$("ModuleBinding.defaults", $oj$$56$$.$ModuleBinding$.$defaults$, $oj$$56$$);
  (function() {
    function $_invokeLifecycleListener$$($listener$$41$$, $method$$7$$, $params$$25$$) {
      if ($listener$$41$$ && $listener$$41$$[$method$$7$$]) {
        var $data$$176$$ = {element:$params$$25$$[0], valueAccessor:$params$$25$$[1]};
        2 < $params$$25$$.length && ($data$$176$$.viewModel = $params$$25$$[2], 3 < $params$$25$$.length && ($data$$176$$["boolean" === typeof $params$$25$$[3] ? "fromCache" : "cachedNodes"] = $params$$25$$[3]));
        return $ko$$6$$.ignoreDependencies($listener$$41$$[$method$$7$$], $listener$$41$$, [$data$$176$$]);
      }
    }
    function $_invokeViewModelMethod$$($model$$88$$, $handler$$53_key$$175_name$$113$$, $params$$26$$) {
      if (null != $model$$88$$ && ($handler$$53_key$$175_name$$113$$ = $oj$$56$$.$ModuleBinding$.$defaults$[$handler$$53_key$$175_name$$113$$], null != $handler$$53_key$$175_name$$113$$ && $model$$88$$ && ($handler$$53_key$$175_name$$113$$ = $model$$88$$[$handler$$53_key$$175_name$$113$$], "function" === typeof $handler$$53_key$$175_name$$113$$))) {
        var $data$$177$$ = void 0;
        $params$$26$$ && ($data$$177$$ = {element:$params$$26$$[0], valueAccessor:$params$$26$$[1]}, 2 < $params$$26$$.length && ($data$$177$$["boolean" === typeof $params$$26$$[2] ? "fromCache" : "cachedNodes"] = $params$$26$$[2]));
        return $ko$$6$$.ignoreDependencies($handler$$53_key$$175_name$$113$$, $model$$88$$, [$data$$177$$]);
      }
    }
    function $_removeAndPossiblyCacheChildren$$($node$$121$$, $cacheArray$$, $cacheHolder$$, $needsClean$$) {
      for (var $child$$23$$ = $node$$121$$.firstChild;$child$$23$$;) {
        var $next$$7$$ = $child$$23$$.nextSibling;
        $child$$23$$ !== $cacheHolder$$ && ($needsClean$$ && $ko$$6$$.cleanNode($child$$23$$), $cacheArray$$ ? ($cacheArray$$.push($child$$23$$), $cacheHolder$$.appendChild($child$$23$$)) : $node$$121$$.removeChild($child$$23$$));
        $child$$23$$ = $next$$7$$;
      }
    }
    function $_propagateSubtreeVisibilityToComponents$$($nodeArray$$, $visible$$1$$) {
      if (null != $oj$$56$$.Components) {
        for (var $i$$443$$ = 0;$i$$443$$ < $nodeArray$$.length;$i$$443$$++) {
          $visible$$1$$ ? $oj$$56$$.Components.$subtreeShown$($nodeArray$$[$i$$443$$]) : $oj$$56$$.Components.$subtreeHidden$($nodeArray$$[$i$$443$$]);
        }
      }
    }
    function $_getDomNodes$$($content$$24$$) {
      return $content$$24$$ = "string" === typeof $content$$24$$ ? $ko$$6$$.utils.parseHtmlFragment($content$$24$$) : (window.DocumentFragment ? $content$$24$$ instanceof DocumentFragment : $content$$24$$ && 11 === $content$$24$$.nodeType) ? $ko$$6$$.utils.arrayPushAll([], $content$$24$$.childNodes) : $ko$$6$$.utils.arrayPushAll([], $content$$24$$);
    }
    function $_getRequirePromise$$($module$$1$$) {
      return new Promise(function($resolve$$58$$) {
        require([$module$$1$$], function($loaded$$) {
          $resolve$$58$$($loaded$$);
        }, function() {
          throw Error("ojModule failed to load " + $module$$1$$);
        });
      });
    }
    $ko$$6$$.bindingHandlers.ojModule = {init:function $$ko$$6$$$bindingHandlers$ojModule$init$($element$$119$$, $valueAccessor$$18$$, $allBindingsAccessor$$14$$, $viewModel$$4$$, $bindingContext$$29$$) {
      function $checkPeningId$$($id$$58$$) {
        if ($id$$58$$ != $pendingViewId$$) {
          throw Error("Promise cancelled because ojModule is fetching new View and ViewModel");
        }
      }
      function $invokeModelDispose$$($model$$89$$) {
        $_invokeViewModelMethod$$($model$$89$$, "disposeMethod", [$element$$119$$, $valueAccessor$$18$$]);
      }
      var $currentViewModel$$, $cache$$1$$ = {}, $currentCacheKey$$, $pendingViewId$$ = -1, $cacheHolder$$1$$;
      $ko$$6$$.utils.domNodeDisposal.addDisposeCallback($element$$119$$, function() {
        $invokeModelDispose$$($currentViewModel$$);
        for (var $keys$$41$$ = Object.keys($cache$$1$$), $i$$444$$ = 0;$i$$444$$ < $keys$$41$$.length;$i$$444$$++) {
          $invokeModelDispose$$($cache$$1$$[$keys$$41$$[$i$$444$$]].$model$);
        }
      });
      $ko$$6$$.computed(function() {
        $pendingViewId$$++;
        var $attachPromise_value$$275$$ = $ko$$6$$.utils.unwrapObservable($valueAccessor$$18$$()), $moduleName$$, $viewName$$, $params$$27$$, $modelFactory$$, $viewFunction$$, $cacheKey$$, $lifecycleListener$$;
        "string" === typeof $attachPromise_value$$275$$ ? $moduleName$$ = $attachPromise_value$$275$$ : ($moduleName$$ = $ko$$6$$.utils.unwrapObservable($attachPromise_value$$275$$.name), $viewName$$ = $ko$$6$$.utils.unwrapObservable($attachPromise_value$$275$$.viewName), $params$$27$$ = $ko$$6$$.utils.unwrapObservable($attachPromise_value$$275$$.params), $modelFactory$$ = $ko$$6$$.utils.unwrapObservable($attachPromise_value$$275$$.viewModelFactory), $viewFunction$$ = $ko$$6$$.utils.unwrapObservable($attachPromise_value$$275$$.createViewFunction), 
        $cacheKey$$ = $ko$$6$$.utils.unwrapObservable($attachPromise_value$$275$$.cacheKey), $lifecycleListener$$ = $ko$$6$$.utils.unwrapObservable($attachPromise_value$$275$$.lifecycleListener));
        var $attachPromise_value$$275$$ = $_invokeLifecycleListener$$($lifecycleListener$$, "activated", [$element$$119$$, $valueAccessor$$18$$]), $viewPromise$$, $modelPromise$$, $cached$$2$$ = null == $cacheKey$$ ? null : $cache$$1$$[$cacheKey$$];
        if (null != $cached$$2$$) {
          delete $cache$$1$$[$cacheKey$$], $viewPromise$$ = Promise.resolve($cached$$2$$.view), $modelPromise$$ = Promise.resolve($cached$$2$$.$model$);
        } else {
          if (null != $modelFactory$$ && ($modelPromise$$ = $ko$$6$$.ignoreDependencies($modelFactory$$.createViewModel, $modelFactory$$, [$params$$27$$, $valueAccessor$$18$$])), null == $modelPromise$$ && null != $moduleName$$ && ($modelPromise$$ = $_getRequirePromise$$($oj$$56$$.$ModuleBinding$.$defaults$.modelPath + $moduleName$$)), null != $modelPromise$$ && ($modelPromise$$ = $modelPromise$$.then(function($id$$59$$, $viewModel$$5$$) {
            $checkPeningId$$($id$$59$$);
            return $viewModel$$5$$ = "function" === typeof $viewModel$$5$$ ? new $viewModel$$5$$($params$$27$$) : $_invokeViewModelMethod$$($viewModel$$5$$, "initializeMethod", [$element$$119$$, $valueAccessor$$18$$]) || $viewModel$$5$$;
          }.bind(null, $pendingViewId$$)), null != $viewFunction$$ && ($viewPromise$$ = $modelPromise$$.then(function($id$$60$$, $model$$91$$) {
            $checkPeningId$$($id$$60$$);
            var $viewMethod$$ = null == $model$$91$$ ? null : $model$$91$$[$viewFunction$$];
            return null == $viewMethod$$ ? null : $viewMethod$$();
          }.bind(null, $pendingViewId$$)))), null == $viewPromise$$) {
            if ($viewName$$ = null == $viewName$$ ? $moduleName$$ : $viewName$$, null != $viewName$$) {
              $viewPromise$$ = $_getRequirePromise$$($oj$$56$$.$ModuleBinding$.$defaults$.viewPath + $viewName$$ + $oj$$56$$.$ModuleBinding$.$defaults$.viewSuffix);
            } else {
              throw Error("View name must be specified");
            }
          }
        }
        if (null == $viewPromise$$) {
          throw Error("ojModule is missing a View");
        }
        var $modelAttachPromise$$;
        null != $modelPromise$$ && ($modelAttachPromise$$ = $modelPromise$$.then(function($id$$61$$, $viewModel$$6$$) {
          $checkPeningId$$($id$$61$$);
          return $_invokeViewModelMethod$$($viewModel$$6$$, "activatedHandler", [$element$$119$$, $valueAccessor$$18$$]);
        }.bind(null, $pendingViewId$$)));
        Promise.all([$viewPromise$$, $modelPromise$$, $attachPromise_value$$275$$, $modelAttachPromise$$]).then(function($id$$62$$, $values$$13$$) {
          if ($id$$62$$ == $pendingViewId$$) {
            var $nodes$$7$$ = $_getDomNodes$$($values$$13$$[0]), $model$$92$$ = $values$$13$$[1], $childBindingContext_fromCache_i$$445_saveInCache$$ = !1, $cachedNodeArray_j$$43_n$$37$$;
            null != $currentCacheKey$$ && ($childBindingContext_fromCache_i$$445_saveInCache$$ = !0, $cachedNodeArray_j$$43_n$$37$$ = [], $cacheHolder$$1$$ || ($cacheHolder$$1$$ = document.createElement("div"), $cacheHolder$$1$$.className = "oj-helper-module-cache", $element$$119$$.appendChild($cacheHolder$$1$$)));
            $_removeAndPossiblyCacheChildren$$($element$$119$$, $cachedNodeArray_j$$43_n$$37$$, $cacheHolder$$1$$, !$childBindingContext_fromCache_i$$445_saveInCache$$);
            0 < $pendingViewId$$ && ($_invokeLifecycleListener$$($lifecycleListener$$, "detached", [$element$$119$$, $valueAccessor$$18$$, $currentViewModel$$, $cachedNodeArray_j$$43_n$$37$$]), $_invokeViewModelMethod$$($currentViewModel$$, "detachedHandler", [$element$$119$$, $valueAccessor$$18$$, $cachedNodeArray_j$$43_n$$37$$]), $_invokeLifecycleListener$$($lifecycleListener$$, "deactivated", [$element$$119$$, $valueAccessor$$18$$, $currentViewModel$$]), $_invokeViewModelMethod$$($currentViewModel$$, 
            "deactivatedHandler", [$element$$119$$, $valueAccessor$$18$$]));
            $childBindingContext_fromCache_i$$445_saveInCache$$ ? ($_propagateSubtreeVisibilityToComponents$$($cachedNodeArray_j$$43_n$$37$$, !1), $cache$$1$$[$currentCacheKey$$] = {$model$:$currentViewModel$$, view:$cachedNodeArray_j$$43_n$$37$$}) : $invokeModelDispose$$($currentViewModel$$);
            $currentViewModel$$ = $model$$92$$;
            $currentCacheKey$$ = $cacheKey$$;
            $childBindingContext_fromCache_i$$445_saveInCache$$ = 0;
            for ($cachedNodeArray_j$$43_n$$37$$ = $nodes$$7$$.length;$childBindingContext_fromCache_i$$445_saveInCache$$ < $cachedNodeArray_j$$43_n$$37$$;$childBindingContext_fromCache_i$$445_saveInCache$$++) {
              $cacheHolder$$1$$ ? $element$$119$$.insertBefore($nodes$$7$$[$childBindingContext_fromCache_i$$445_saveInCache$$], $cacheHolder$$1$$) : $element$$119$$.appendChild($nodes$$7$$[$childBindingContext_fromCache_i$$445_saveInCache$$]);
            }
            ($childBindingContext_fromCache_i$$445_saveInCache$$ = null != $cached$$2$$) && $_propagateSubtreeVisibilityToComponents$$($nodes$$7$$, !0);
            $_invokeLifecycleListener$$($lifecycleListener$$, "attached", [$element$$119$$, $valueAccessor$$18$$, $currentViewModel$$, $childBindingContext_fromCache_i$$445_saveInCache$$]);
            $_invokeViewModelMethod$$($currentViewModel$$, "attachedHandler", [$element$$119$$, $valueAccessor$$18$$, $childBindingContext_fromCache_i$$445_saveInCache$$]);
            if (!$childBindingContext_fromCache_i$$445_saveInCache$$) {
              $childBindingContext_fromCache_i$$445_saveInCache$$ = $bindingContext$$29$$.createChildContext($model$$92$$, void 0, function($ctx$$) {
                $ctx$$.$module = $model$$92$$;
              });
              $cachedNodeArray_j$$43_n$$37$$ = 0;
              for (var $l$$18$$ = $nodes$$7$$.length;$cachedNodeArray_j$$43_n$$37$$ < $l$$18$$;$cachedNodeArray_j$$43_n$$37$$++) {
                var $node$$122$$ = $nodes$$7$$[$cachedNodeArray_j$$43_n$$37$$], $type$$100$$ = $node$$122$$.nodeType;
                1 != $type$$100$$ && 8 != $type$$100$$ || $ko$$6$$.applyBindings($childBindingContext_fromCache_i$$445_saveInCache$$, $node$$122$$);
              }
              $_invokeLifecycleListener$$($lifecycleListener$$, "bindingsApplied", [$element$$119$$, $valueAccessor$$18$$, $model$$92$$]);
              $_invokeViewModelMethod$$($model$$92$$, "bindingsAppliedHandler", [$element$$119$$, $valueAccessor$$18$$]);
            }
          }
        }.bind(null, $pendingViewId$$), function($id$$63$$, $reason$$5$$) {
          $id$$63$$ == $pendingViewId$$ && $oj$$56$$.$Logger$.error($reason$$5$$);
        }.bind(null, $pendingViewId$$));
      }, null, {$disposeWhenNodeIsRemoved$:$element$$119$$});
      return{controlsDescendantBindings:!0};
    }};
  })();
});
