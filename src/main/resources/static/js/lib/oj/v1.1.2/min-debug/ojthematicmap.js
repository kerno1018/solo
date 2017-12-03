/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtThematicMap"], function($oj$$32$$, $$$$31$$, $comp$$7$$, $base$$7$$, $dvt$$4$$) {
  $oj$$32$$.$__registerWidget$("oj.ojThematicMap", $$$$31$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{load:null, optionChange:null}, $_currentLocale$:"", $_loadedBasemaps$:[], $_supportedLocales$:{ar:"ar", cs:"cs", da:"da", de:"de", el:"el", es:"es", fi:"fi", fr:"fr", "fr-ca":"fr_CA", he:"iw", hu:"hu", it:"it", ja:"ja", ko:"ko", nl:"nl", no:"no", pl:"pl", pt:"pt_BR", "pt-pt":"pt", ro:"ro", ru:"ru", sk:"sk", sv:"sv", th:"th", tr:"tr", "zh-hans":"zh_CN", "zh-hant":"zh_TW"}, _ComponentCreate:function() {
    this.$_checkBasemaps$ = [];
    this.$_initiallyRendered$ = !1;
    this.$_dataLayersToUpdate$ = [];
    this._super();
  }, $_CreateDvtComponent$:function($context$$95$$, $callback$$108$$, $callbackObj$$6$$) {
    return $dvt$$4$$.DvtThematicMap.newInstance($context$$95$$, $callback$$108$$, $callbackObj$$6$$);
  }, $_ConvertLocatorToSubId$:function($locator$$35$$) {
    var $subId$$34$$ = $locator$$35$$.subId;
    "oj-thematicmap-area" == $subId$$34$$ ? $subId$$34$$ = $locator$$35$$.dataLayer + ":area[" + $locator$$35$$.index + "]" : "oj-thematicmap-marker" == $subId$$34$$ ? $subId$$34$$ = $locator$$35$$.dataLayer + ":marker[" + $locator$$35$$.index + "]" : "oj-thematicmap-tooltip" == $subId$$34$$ && ($subId$$34$$ = "tooltip");
    return $subId$$34$$;
  }, $_ConvertSubIdToLocator$:function($subId$$35$$) {
    var $locator$$36$$ = {};
    0 < $subId$$35$$.indexOf(":area") ? ($locator$$36$$.subId = "oj-thematicmap-area", $locator$$36$$.dataLayer = $subId$$35$$.substring(0, $subId$$35$$.indexOf(":")), $locator$$36$$.index = this.$_GetFirstIndex$($subId$$35$$)) : 0 < $subId$$35$$.indexOf(":marker") ? ($locator$$36$$.subId = "oj-thematicmap-marker", $locator$$36$$.dataLayer = $subId$$35$$.substring(0, $subId$$35$$.indexOf(":")), $locator$$36$$.index = this.$_GetFirstIndex$($subId$$35$$)) : "tooltip" == $subId$$35$$ && ($locator$$36$$.subId = 
    "oj-thematicmap-tooltip");
    return $locator$$36$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$8$$ = this._super();
    $styleClasses$$8$$.push("oj-thematicmap");
    return $styleClasses$$8$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$9$$ = this._super();
    $styleClasses$$9$$["oj-dvtbase oj-thematicmap"] = {path:"animationDuration", property:"animation-duration"};
    $styleClasses$$9$$["oj-thematicmap-arealayer"] = [{path:"styleDefaults/areaStyle", property:"CSS_BACKGROUND_PROPERTIES"}, {path:"styleDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$9$$["oj-thematicmap-area"] = {path:"styleDefaults/dataAreaDefaults/borderColor", property:"border-top-color"};
    $styleClasses$$9$$["oj-thematicmap-area oj-hover"] = {path:"styleDefaults/dataAreaDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$9$$["oj-thematicmap-area oj-selected"] = [{path:"styleDefaults/dataAreaDefaults/selectedInnerColor", property:"border-top-color"}, {path:"styleDefaults/dataAreaDefaults/selectedOuterColor", property:"border-bottom-color"}];
    $styleClasses$$9$$["oj-thematicmap-marker"] = [{path:"styleDefaults/dataMarkerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}, {path:"styleDefaults/dataMarkerDefaults/color", property:"background-color"}, {path:"styleDefaults/dataMarkerDefaults/opacity", property:"opacity"}, {path:"styleDefaults/dataMarkerDefaults/borderColor", property:"border-top-color"}];
    return $styleClasses$$9$$;
  }, $_GetEventTypes$:function() {
    return["load", "optionChange"];
  }, _setOptions:function($options$$353$$, $flags$$35$$) {
    var $i$$373_numUpdates$$ = Object.keys($options$$353$$).length, $newAreaLayers$$ = $options$$353$$.areaLayers, $oldAreaLayers$$ = this.options.areaLayers, $newAreaLayer_pointDataLayers$$ = $options$$353$$.pointDataLayers;
    if (1 == $i$$373_numUpdates$$ && $newAreaLayers$$ && $oldAreaLayers$$ && 0 < $oldAreaLayers$$.length) {
      for ($i$$373_numUpdates$$ = 0;$i$$373_numUpdates$$ < $newAreaLayers$$.length;$i$$373_numUpdates$$++) {
        var $newAreaLayer_pointDataLayers$$ = $newAreaLayers$$[$i$$373_numUpdates$$], $currAreaLayer$$ = $oldAreaLayers$$[$i$$373_numUpdates$$], $updateDataLayer$$ = !0, $areaLayerKey$$;
        for ($areaLayerKey$$ in $newAreaLayer_pointDataLayers$$) {
          "areaDataLayer" != $areaLayerKey$$ && $newAreaLayer_pointDataLayers$$[$areaLayerKey$$] != $currAreaLayer$$[$areaLayerKey$$] && ($updateDataLayer$$ = $updateDataLayer$$ && !1);
        }
        $updateDataLayer$$ && !$oj$$32$$.$Object$.$compareValues$($currAreaLayer$$.areaDataLayer, $newAreaLayer_pointDataLayers$$.areaDataLayer) && this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$.areaDataLayer, parentLayer:$newAreaLayer_pointDataLayers$$.layer, isADL:!0});
      }
    } else {
      if (1 == $i$$373_numUpdates$$ && $newAreaLayer_pointDataLayers$$ && this.options.pointDataLayers && 0 < this.options.pointDataLayers.length) {
        for ($i$$373_numUpdates$$ = 0;$i$$373_numUpdates$$ < $newAreaLayer_pointDataLayers$$.length;$i$$373_numUpdates$$++) {
          $oj$$32$$.$Object$.$compareValues$(this.options.pointDataLayers[$i$$373_numUpdates$$], $newAreaLayer_pointDataLayers$$[$i$$373_numUpdates$$]) || this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$[$i$$373_numUpdates$$], parentLayer:$newAreaLayer_pointDataLayers$$[$i$$373_numUpdates$$].id, isADL:!1});
        }
      }
    }
    this._super($options$$353$$, $flags$$35$$);
  }, $_Render$:function() {
    this.$_loadBasemap$();
    for (var $i$$374$$ = 0;$i$$374$$ < this.$_checkBasemaps$.length;$i$$374$$++) {
      if (!this.$_loadedBasemaps$[this.$_checkBasemaps$[$i$$374$$]]) {
        return;
      }
    }
    this.$_checkBasemaps$ = [];
    this.$_updateDataLayerSelection$();
    var $areaLayers_pointDataLayers$$1$$ = this.options.areaLayers;
    if ($areaLayers_pointDataLayers$$1$$) {
      for ($i$$374$$ = 0;$i$$374$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$374$$++) {
        var $areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$374$$].areaDataLayer;
        if ($areaDataLayer$$1_pointDataLayer$$) {
          var $dl_renderer$$2$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer;
          $dl_renderer$$2$$ && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$2$$, $areaDataLayer$$1_pointDataLayer$$.markers));
        }
      }
    }
    if ($areaLayers_pointDataLayers$$1$$ = this.options.pointDataLayers) {
      for ($i$$374$$ = 0;$i$$374$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$374$$++) {
        ($areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$374$$]) && ($dl_renderer$$2$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer) && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$2$$, $areaDataLayer$$1_pointDataLayer$$.markers));
      }
    }
    this.options._contextHandler = this.$_getContextHandler$();
    if (this.$_initiallyRendered$ && 0 < this.$_dataLayersToUpdate$.length) {
      if (this.$_context$.isReadyToRender()) {
        for ($i$$374$$ = 0;$i$$374$$ < this.$_dataLayersToUpdate$.length;$i$$374$$++) {
          $dl_renderer$$2$$ = this.$_dataLayersToUpdate$[$i$$374$$], this.$_component$.updateLayer($dl_renderer$$2$$.options, $dl_renderer$$2$$.parentLayer, $dl_renderer$$2$$.isADL);
        }
        this.$_dataLayersToUpdate$ = [];
      } else {
        $oj$$32$$.$Logger$.error(this.$getResource$("messageNotReadyToRender").summary);
      }
    } else {
      this._super(), this.$_initiallyRendered$ = !0;
    }
    this._trigger("load", null, null);
  }, $_getTemplateRenderer$:function($templateFunction$$) {
    var $thisRef$$ = this;
    return function($context$$96_elem$$146$$) {
      var $dummyDiv$$ = document.createElement("div");
      $dummyDiv$$.style.display = "none";
      $dummyDiv$$.$_dvtcontext$ = $thisRef$$.$_context$;
      $thisRef$$.element.append($dummyDiv$$);
      $templateFunction$$({parentElement:$dummyDiv$$, data:$context$$96_elem$$146$$.data});
      return($context$$96_elem$$146$$ = $dummyDiv$$.children[0]) ? "http://www.w3.org/2000/svg" === $context$$96_elem$$146$$.namespaceURI ? ($$$$31$$($dummyDiv$$).remove(), $context$$96_elem$$146$$) : $thisRef$$.$_GetDvtComponent$($context$$96_elem$$146$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$1$$ = this;
    return function($parentElement$$6$$, $rootElement$$, $data$$149$$, $state$$15$$, $previousState$$) {
      return{component:$oj$$32$$.Components.$getWidgetConstructor$($thisRef$$1$$.element), parentElement:$parentElement$$6$$, rootElement:$rootElement$$, data:$data$$149$$, state:$state$$15$$, previousState:$previousState$$, id:$data$$149$$.id, label:$data$$149$$.label, color:$data$$149$$.color, location:$data$$149$$.location, x:$data$$149$$.x, y:$data$$149$$.y};
    };
  }, renderDefaultHover:function($context$$98$$) {
    $context$$98$$.previousState && $context$$98$$.state.hovered == $context$$98$$.previousState.hovered || this.$_component$.processDefaultHoverEffect($context$$98$$.id, $context$$98$$.state.hovered);
  }, renderDefaultSelection:function($context$$99$$) {
    $context$$99$$.previousState && $context$$99$$.state.selected == $context$$99$$.previousState.selected || this.$_component$.processDefaultSelectionEffect($context$$99$$.id, $context$$99$$.state.selected);
  }, renderDefaultFocus:function($context$$100$$) {
    $context$$100$$.previousState && $context$$100$$.state.focused == $context$$100$$.previousState.focused || this.$_component$.processDefaultFocusEffect($context$$100$$.id, $context$$100$$.state.focused);
  }, $_loadBasemap$:function() {
    var $basemap$$ = this.options.basemap;
    if ($basemap$$) {
      var $locale$$22$$ = $oj$$32$$.$Config$.$getLocale$();
      $locale$$22$$ !== this.$_currentLocale$ && (this.$_currentLocale$ = $locale$$22$$, this.$_loadedBasemaps$ = []);
      var $basemap$$ = $basemap$$.charAt(0).toUpperCase() + $basemap$$.slice(1), $areaLayers$$1_pointDataLayers$$2$$ = this.options.areaLayers;
      if ($areaLayers$$1_pointDataLayers$$2$$) {
        for (var $i$$375$$ = 0;$i$$375$$ < $areaLayers$$1_pointDataLayers$$2$$.length;$i$$375$$++) {
          var $layer$$20$$ = $areaLayers$$1_pointDataLayers$$2$$[$i$$375$$].layer;
          $layer$$20$$ && ($layer$$20$$ = $layer$$20$$.charAt(0).toUpperCase() + $layer$$20$$.slice(1), this.$_loadBasemapHelper$($basemap$$, $layer$$20$$, $locale$$22$$));
        }
      }
      ($areaLayers$$1_pointDataLayers$$2$$ = this.options.pointDataLayers) && 0 < $areaLayers$$1_pointDataLayers$$2$$.length && this.$_loadBasemapHelper$($basemap$$, "Cities", $locale$$22$$);
    }
  }, $_loadResourceByUrl$:function($url$$34$$) {
    if (!this.$_loadedBasemaps$[$url$$34$$]) {
      var $resolvedUrl$$ = $oj$$32$$.$Config$.$getResourceUrl$($url$$34$$), $thisRef$$2$$ = this, $loadedBundles$$ = this.$_loadedBasemaps$;
      $$$$31$$.getScript($resolvedUrl$$, function() {
        $loadedBundles$$[$url$$34$$] = !0;
        $thisRef$$2$$.$_Render$();
      });
    }
  }, $_loadBasemapHelper$:function($basemap$$1_bundleName_bundleUrl$$, $i$$376_layer$$21$$, $locale$$23_localeList$$) {
    var $relativeUrl_splitLocale$$ = "resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap" + $basemap$$1_bundleName_bundleUrl$$ + $i$$376_layer$$21$$ + ".js";
    -1 == this.$_checkBasemaps$.indexOf($relativeUrl_splitLocale$$) && (this.$_checkBasemaps$.push($relativeUrl_splitLocale$$), this.$_loadResourceByUrl$($relativeUrl_splitLocale$$));
    if (-1 === $locale$$23_localeList$$.indexOf("en")) {
      for ($relativeUrl_splitLocale$$ = $locale$$23_localeList$$.toLowerCase().split("-"), $locale$$23_localeList$$ = [$relativeUrl_splitLocale$$[0]], 1 < $relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[1]), 2 < $relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[2], $relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[1] + 
      "-" + $relativeUrl_splitLocale$$[2]), $basemap$$1_bundleName_bundleUrl$$ = "resources/internal-deps/dvt/thematicMap/resourceBundles/" + $basemap$$1_bundleName_bundleUrl$$ + $i$$376_layer$$21$$ + "Bundle", $i$$376_layer$$21$$ = 0;$i$$376_layer$$21$$ < $locale$$23_localeList$$.length;$i$$376_layer$$21$$++) {
        if (this.$_supportedLocales$[$locale$$23_localeList$$[$i$$376_layer$$21$$]]) {
          $basemap$$1_bundleName_bundleUrl$$ = $basemap$$1_bundleName_bundleUrl$$ + "_" + this.$_supportedLocales$[$locale$$23_localeList$$[$i$$376_layer$$21$$]] + ".js";
          -1 == this.$_checkBasemaps$.indexOf($basemap$$1_bundleName_bundleUrl$$) && (this.$_checkBasemaps$.push($basemap$$1_bundleName_bundleUrl$$), this.$_loadResourceByUrl$($basemap$$1_bundleName_bundleUrl$$));
          break;
        }
      }
    }
  }, $_HandleEvent$:function($event$$425$$) {
    var $selection$$14$$, $id$$40$$;
    if (($event$$425$$ && $event$$425$$.getType ? $event$$425$$.getType() : null) === $dvt$$4$$.DvtSelectionEvent.TYPE) {
      $selection$$14$$ = {};
      $id$$40$$ = $event$$425$$.getParamValue("clientId");
      $selection$$14$$[$id$$40$$] = $event$$425$$.getSelection();
      if (this.options.selection) {
        for (var $dataLayerId$$ in this.options.selection) {
          $id$$40$$ !== $dataLayerId$$ && ($selection$$14$$[$dataLayerId$$] = this.options.selection[$dataLayerId$$]);
        }
      }
      this.$_UserOptionChange$("selection", $selection$$14$$);
    } else {
      this._super($event$$425$$);
    }
  }, $_GetTranslationMap$:function() {
    var $translations$$13$$ = this.options.translations, $ret$$35$$ = this._super();
    $ret$$35$$["DvtUtilBundle.THEMATIC_MAP"] = $translations$$13$$.componentName;
    return $ret$$35$$;
  }, $_updateDataLayerSelection$:function() {
    var $selection$$15$$ = this.options.selection;
    if ($selection$$15$$) {
      var $als_pdls$$ = this.options.pointDataLayers;
      if ($als_pdls$$) {
        for (var $i$$377$$ = 0;$i$$377$$ < $als_pdls$$.length;$i$$377$$++) {
          $selection$$15$$[$als_pdls$$[$i$$377$$].id] && ($als_pdls$$[$i$$377$$].selection = $selection$$15$$[$als_pdls$$[$i$$377$$].id]);
        }
      }
      if ($als_pdls$$ = this.options.areaLayers) {
        for ($i$$377$$ = 0;$i$$377$$ < $als_pdls$$.length;$i$$377$$++) {
          var $adl$$ = $als_pdls$$[$i$$377$$].areaDataLayer;
          $adl$$ && $selection$$15$$[$adl$$.id] && ($adl$$.selection = $selection$$15$$[$adl$$.id]);
        }
      }
    }
  }, getArea:function($dataLayerId$$1$$, $index$$219$$) {
    var $ret$$36$$ = this.$_component$.getAutomation().getData($dataLayerId$$1$$, "area", $index$$219$$);
    this.$_AddAutomationGetters$($ret$$36$$);
    return $ret$$36$$;
  }, getMarker:function($dataLayerId$$2$$, $index$$220$$) {
    var $ret$$37$$ = this.$_component$.getAutomation().getData($dataLayerId$$2$$, "marker", $index$$220$$);
    this.$_AddAutomationGetters$($ret$$37$$);
    return $ret$$37$$;
  }, getContextByNode:function($context$$101_node$$60$$) {
    return($context$$101_node$$60$$ = this.getSubIdByNode($context$$101_node$$60$$)) && "oj-thematicmap-tooltip" !== $context$$101_node$$60$$.subId ? $context$$101_node$$60$$ : null;
  }});
});
