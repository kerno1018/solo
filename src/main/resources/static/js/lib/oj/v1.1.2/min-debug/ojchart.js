/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtChart"], function($oj$$43$$, $$$$42$$, $comp$$15$$, $base$$12$$, $dvt$$9$$) {
  $oj$$43$$.$SparkChartDataItem$ = function $$oj$$43$$$$SparkChartDataItem$$($data$$171$$) {
    this.$_data$ = $data$$171$$;
  };
  $goog$exportPath_$$("SparkChartDataItem", $oj$$43$$.$SparkChartDataItem$, $oj$$43$$);
  $oj$$43$$.$SparkChartDataItem$.prototype.$getBorderColor$ = function $$oj$$43$$$$SparkChartDataItem$$$$getBorderColor$$() {
    return this.$_data$ ? this.$_data$.borderColor : null;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getBorderColor", {$getBorderColor$:$oj$$43$$.$SparkChartDataItem$.prototype.$getBorderColor$});
  $oj$$43$$.$SparkChartDataItem$.prototype.$getColor$ = function $$oj$$43$$$$SparkChartDataItem$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getColor", {$getColor$:$oj$$43$$.$SparkChartDataItem$.prototype.$getColor$});
  $oj$$43$$.$SparkChartDataItem$.prototype.getDate = function $$oj$$43$$$$SparkChartDataItem$$$getDate$() {
    return this.$_data$ ? this.$_data$.date : null;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getDate", {getDate:$oj$$43$$.$SparkChartDataItem$.prototype.getDate});
  $oj$$43$$.$SparkChartDataItem$.prototype.getFloatValue = function $$oj$$43$$$$SparkChartDataItem$$$getFloatValue$() {
    return this.$getLow$();
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getFloatValue", {getFloatValue:$oj$$43$$.$SparkChartDataItem$.prototype.getFloatValue});
  $oj$$43$$.$SparkChartDataItem$.prototype.$getLow$ = function $$oj$$43$$$$SparkChartDataItem$$$$getLow$$() {
    return this.$_data$ ? this.$_data$.low : null;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getLow", {$getLow$:$oj$$43$$.$SparkChartDataItem$.prototype.$getLow$});
  $oj$$43$$.$SparkChartDataItem$.prototype.$getHigh$ = function $$oj$$43$$$$SparkChartDataItem$$$$getHigh$$() {
    return this.$_data$ ? this.$_data$.high : null;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getHigh", {$getHigh$:$oj$$43$$.$SparkChartDataItem$.prototype.$getHigh$});
  $oj$$43$$.$SparkChartDataItem$.prototype.$getValue$ = function $$oj$$43$$$$SparkChartDataItem$$$$getValue$$() {
    return this.$_data$ ? this.$_data$.value : null;
  };
  $oj$$43$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getValue", {$getValue$:$oj$$43$$.$SparkChartDataItem$.prototype.$getValue$});
  $oj$$43$$.$__registerWidget$("oj.ojChart", $$$$42$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null, optionChange:null, selectInput:null, viewportChange:null, viewportChangeInput:null, drill:null}, $_CreateDvtComponent$:function($context$$117$$, $callback$$117$$, $callbackObj$$11$$) {
    return $dvt$$9$$.DvtChart.newInstance($context$$117$$, $callback$$117$$, $callbackObj$$11$$);
  }, $_ConvertLocatorToSubId$:function($locator$$52$$) {
    var $subId$$49$$ = $locator$$52$$.subId;
    "oj-chart-item" == $subId$$49$$ ? $subId$$49$$ = "dataItem[" + $locator$$52$$.seriesIndex + "][" + $locator$$52$$.itemIndex + "]" : "oj-chart-group" == $subId$$49$$ ? $subId$$49$$ = "group" + this.$_GetStringFromIndexPath$($locator$$52$$.indexPath) : "oj-chart-series" == $subId$$49$$ ? $subId$$49$$ = "series[" + $locator$$52$$.index + "]" : "oj-chart-axis-title" == $subId$$49$$ ? $subId$$49$$ = $locator$$52$$.axis + ":title" : "oj-chart-reference-object" == $subId$$49$$ ? $subId$$49$$ = $locator$$52$$.axis + 
    ":referenceObject[" + $locator$$52$$.index + "]" : "oj-legend-section" == $subId$$49$$ ? $subId$$49$$ = "legend:section" + this.$_GetStringFromIndexPath$($locator$$52$$.indexPath) : "oj-legend-item" == $subId$$49$$ ? ($subId$$49$$ = "legend:section" + this.$_GetStringFromIndexPath$($locator$$52$$.sectionIndexPath), $subId$$49$$ += ":item[" + $locator$$52$$.itemIndex + "]") : "oj-chart-tooltip" == $subId$$49$$ && ($subId$$49$$ = "tooltip");
    return $subId$$49$$;
  }, $_ConvertSubIdToLocator$:function($itemSubstr_subId$$50$$) {
    var $locator$$53$$ = {};
    if (0 == $itemSubstr_subId$$50$$.indexOf("dataItem")) {
      var $indexPath$$3_sectionSubstr$$ = this.$_GetIndexPath$($itemSubstr_subId$$50$$);
      $locator$$53$$.subId = "oj-chart-item";
      $locator$$53$$.seriesIndex = $indexPath$$3_sectionSubstr$$[0];
      $locator$$53$$.itemIndex = $indexPath$$3_sectionSubstr$$[1];
    } else {
      if (0 == $itemSubstr_subId$$50$$.indexOf("group")) {
        $locator$$53$$.subId = "oj-chart-group", $locator$$53$$.indexPath = this.$_GetIndexPath$($itemSubstr_subId$$50$$);
      } else {
        if (0 == $itemSubstr_subId$$50$$.indexOf("series")) {
          $locator$$53$$.subId = "oj-chart-series", $locator$$53$$.index = this.$_GetFirstIndex$($itemSubstr_subId$$50$$);
        } else {
          if (0 < $itemSubstr_subId$$50$$.indexOf("Axis:title")) {
            $locator$$53$$.subId = "oj-chart-axis-title", $locator$$53$$.axis = $itemSubstr_subId$$50$$.substring(0, $itemSubstr_subId$$50$$.indexOf(":"));
          } else {
            if (0 < $itemSubstr_subId$$50$$.indexOf("Axis:referenceObject")) {
              $locator$$53$$.subId = "oj-chart-reference-object", $locator$$53$$.axis = $itemSubstr_subId$$50$$.substring(0, $itemSubstr_subId$$50$$.indexOf(":")), $locator$$53$$.index = this.$_GetFirstIndex$($itemSubstr_subId$$50$$);
            } else {
              if (0 == $itemSubstr_subId$$50$$.indexOf("legend")) {
                if (0 < $itemSubstr_subId$$50$$.indexOf(":item")) {
                  var $itemStartIndex$$ = $itemSubstr_subId$$50$$.indexOf(":item"), $indexPath$$3_sectionSubstr$$ = $itemSubstr_subId$$50$$.substring(0, $itemStartIndex$$);
                  $itemSubstr_subId$$50$$ = $itemSubstr_subId$$50$$.substring($itemStartIndex$$);
                  $locator$$53$$.subId = "oj-legend-item";
                  $locator$$53$$.sectionIndexPath = this.$_GetIndexPath$($indexPath$$3_sectionSubstr$$);
                  $locator$$53$$.itemIndex = this.$_GetFirstIndex$($itemSubstr_subId$$50$$);
                } else {
                  0 == $itemSubstr_subId$$50$$.indexOf("section") && ($locator$$53$$.subId = "oj-legend-section", $locator$$53$$.indexPath = this.$_GetIndexPath$($itemSubstr_subId$$50$$));
                }
              } else {
                "tooltip" == $itemSubstr_subId$$50$$ && ($locator$$53$$.subId = "oj-chart-tooltip");
              }
            }
          }
        }
      }
    }
    return $locator$$53$$;
  }, $_ProcessStyles$:function() {
    this._super();
    this.options.styleDefaults || (this.options.styleDefaults = {});
    if (!this.options.styleDefaults.colors) {
      var $handler$$52$$ = new $oj$$43$$.$ColorAttributeGroupHandler$;
      this.options.styleDefaults.colors = $handler$$52$$.$getValueRamp$();
    }
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$18$$ = this._super();
    $styleClasses$$18$$.push("oj-chart");
    return $styleClasses$$18$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$19$$ = this._super();
    $styleClasses$$19$$["oj-chart-footnote"] = {path:"footnote/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-chart-slice-label"] = {path:"styleDefaults/sliceLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-chart-subtitle"] = {path:"subtitle/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-chart-title"] = {path:"title/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-chart-xaxis-tick-label"] = {path:"xAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-chart-xaxis-title"] = {path:"xAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-chart-yaxis-tick-label"] = {path:"yAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-chart-yaxis-title"] = {path:"yAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-chart-y2axis-tick-label"] = {path:"y2Axis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-chart-y2axis-title"] = {path:"y2Axis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-chart-stock-falling"] = {path:"styleDefaults/stockFallingColor", property:"background-color"};
    $styleClasses$$19$$["oj-chart-stock-range"] = {path:"styleDefaults/stockRangeColor", property:"background-color"};
    $styleClasses$$19$$["oj-chart-stock-rising"] = {path:"styleDefaults/stockRisingColor", property:"background-color"};
    $styleClasses$$19$$["oj-chart-pan-icon"] = {path:"_resources/panUp", property:"CSS_URL"};
    $styleClasses$$19$$["oj-chart-pan-icon oj-active"] = {path:"_resources/panDown", property:"CSS_URL"};
    $styleClasses$$19$$["oj-chart-select-icon"] = {path:"_resources/selectUp", property:"CSS_URL"};
    $styleClasses$$19$$["oj-chart-select-icon oj-active"] = {path:"_resources/selectDown", property:"CSS_URL"};
    $styleClasses$$19$$["oj-chart-zoom-icon"] = {path:"_resources/zoomUp", property:"CSS_URL"};
    $styleClasses$$19$$["oj-chart-zoom-icon oj-active"] = {path:"_resources/zoomDown", property:"CSS_URL"};
    $styleClasses$$19$$["oj-legend"] = {path:"legend/textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-legend-title"] = {path:"legend/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-legend-section-close-icon"] = {path:"legend/_resources/closedEnabled", property:"CSS_URL"};
    $styleClasses$$19$$["oj-legend-section-close-icon oj-hover"] = {path:"legend/_resources/closedOver", property:"CSS_URL"};
    $styleClasses$$19$$["oj-legend-section-close-icon oj-active"] = {path:"legend/_resources/closedDown", property:"CSS_URL"};
    $styleClasses$$19$$["oj-legend-section-open-icon"] = {path:"legend/_resources/openEnabled", property:"CSS_URL"};
    $styleClasses$$19$$["oj-legend-section-open-icon oj-hover"] = {path:"legend/_resources/openOver", property:"CSS_URL"};
    $styleClasses$$19$$["oj-legend-section-open-icon oj-active"] = {path:"legend/_resources/openDown", property:"CSS_URL"};
    return $styleClasses$$19$$;
  }, $_GetEventTypes$:function() {
    return "categoryFilter categoryHighlight drill optionChange selectInput viewportChange viewportChangeInput".split(" ");
  }, $_GetTranslationMap$:function() {
    var $translations$$18$$ = this.options.translations, $ret$$52$$ = this._super();
    $ret$$52$$["DvtChartBundle.DEFAULT_GROUP_NAME"] = this.$_GetTranslatedResource$("labelDefaultGroupName", ["groupName"]);
    $ret$$52$$["DvtChartBundle.LABEL_SERIES"] = $translations$$18$$.labelSeries;
    $ret$$52$$["DvtChartBundle.LABEL_GROUP"] = $translations$$18$$.labelGroup;
    $ret$$52$$["DvtChartBundle.LABEL_VALUE"] = $translations$$18$$.labelValue;
    $ret$$52$$["DvtChartBundle.LABEL_TARGET_VALUE"] = $translations$$18$$.labelTargetValue;
    $ret$$52$$["DvtChartBundle.LABEL_X"] = $translations$$18$$.labelX;
    $ret$$52$$["DvtChartBundle.LABEL_Y"] = $translations$$18$$.labelY;
    $ret$$52$$["DvtChartBundle.LABEL_Z"] = $translations$$18$$.labelZ;
    $ret$$52$$["DvtChartBundle.LABEL_PERCENTAGE"] = $translations$$18$$.labelPercentage;
    $ret$$52$$["DvtChartBundle.LABEL_LOW"] = $translations$$18$$.labelLow;
    $ret$$52$$["DvtChartBundle.LABEL_HIGH"] = $translations$$18$$.labelHigh;
    $ret$$52$$["DvtChartBundle.LABEL_OPEN"] = $translations$$18$$.labelOpen;
    $ret$$52$$["DvtChartBundle.LABEL_CLOSE"] = $translations$$18$$.labelClose;
    $ret$$52$$["DvtChartBundle.LABEL_VOLUME"] = $translations$$18$$.labelVolume;
    $ret$$52$$["DvtChartBundle.LABEL_MIN"] = $translations$$18$$.labelMin;
    $ret$$52$$["DvtChartBundle.LABEL_MAX"] = $translations$$18$$.labelMax;
    $ret$$52$$["DvtChartBundle.LABEL_OTHER"] = $translations$$18$$.labelOther;
    $ret$$52$$["DvtChartBundle.PAN"] = $translations$$18$$.tooltipPan;
    $ret$$52$$["DvtChartBundle.MARQUEE_SELECT"] = $translations$$18$$.tooltipSelect;
    $ret$$52$$["DvtChartBundle.MARQUEE_ZOOM"] = $translations$$18$$.tooltipZoom;
    $ret$$52$$["DvtUtilBundle.CHART"] = $translations$$18$$.componentName;
    $translations$$18$$.labelDefaultGroupName = $translations$$18$$.labelDefaultGroupName.replace("{groupName}", "{0}");
    return $ret$$52$$;
  }, $_HandleEvent$:function($event$$519_selectPayload$$) {
    var $filterType_type$$96$$ = $event$$519_selectPayload$$ && $event$$519_selectPayload$$.getType ? $event$$519_selectPayload$$.getType() : null;
    if ($filterType_type$$96$$ === $dvt$$9$$.DvtSelectionEvent.TYPE || $filterType_type$$96$$ === $dvt$$9$$.DvtSelectionEvent.TYPE_INPUT) {
      var $selection$$16$$ = $event$$519_selectPayload$$.getSelection();
      if ($selection$$16$$) {
        for (var $selectedItems_viewportChangePayload$$1$$ = [], $i$$425$$ = 0;$i$$425$$ < $selection$$16$$.length;$i$$425$$++) {
          var $selectedItem$$ = {id:$selection$$16$$[$i$$425$$].getId(), series:$selection$$16$$[$i$$425$$].getSeries(), group:$selection$$16$$[$i$$425$$].getGroup()};
          $selectedItems_viewportChangePayload$$1$$.push($selectedItem$$);
        }
        $event$$519_selectPayload$$ = {endGroup:$event$$519_selectPayload$$.getEndGroup(), startGroup:$event$$519_selectPayload$$.getStartGroup(), xMax:$event$$519_selectPayload$$.getXMax(), xMin:$event$$519_selectPayload$$.getXMin(), yMax:$event$$519_selectPayload$$.getYMax(), yMin:$event$$519_selectPayload$$.getYMin()};
        $filterType_type$$96$$ === $dvt$$9$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $selectedItems_viewportChangePayload$$1$$, $event$$519_selectPayload$$) : ($event$$519_selectPayload$$.items = $selectedItems_viewportChangePayload$$1$$, this._trigger("selectInput", null, $event$$519_selectPayload$$));
      }
    } else {
      $filterType_type$$96$$ === $dvt$$9$$.DvtCategoryHideShowEvent.TYPE_HIDE || $filterType_type$$96$$ === $dvt$$9$$.DvtCategoryHideShowEvent.TYPE_SHOW ? ($filterType_type$$96$$ = $filterType_type$$96$$ === $dvt$$9$$.DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in", this._trigger("categoryFilter", null, {category:$event$$519_selectPayload$$.getCategory(), type:$filterType_type$$96$$}), this.$_UserOptionChange$("hiddenCategories", $event$$519_selectPayload$$.hiddenCategories)) : $filterType_type$$96$$ === 
      $dvt$$9$$.DvtCategoryRolloverEvent.TYPE_OVER || $filterType_type$$96$$ === $dvt$$9$$.DvtCategoryRolloverEvent.TYPE_OUT ? (this._trigger("categoryHighlight", null, {categories:$event$$519_selectPayload$$.categories, type:$filterType_type$$96$$ === $dvt$$9$$.DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off"}), this.$_UserOptionChange$("highlightedCategories", $event$$519_selectPayload$$.categories)) : $filterType_type$$96$$ === $dvt$$9$$.DvtChartViewportChangeEvent.TYPE || $filterType_type$$96$$ === 
      $dvt$$9$$.DvtChartViewportChangeEvent.TYPE_INPUT ? ($selectedItems_viewportChangePayload$$1$$ = {endGroup:$event$$519_selectPayload$$.getEndGroup(), startGroup:$event$$519_selectPayload$$.getStartGroup(), xMax:$event$$519_selectPayload$$.getXMax(), xMin:$event$$519_selectPayload$$.getXMin(), yMax:$event$$519_selectPayload$$.getYMax(), yMin:$event$$519_selectPayload$$.getYMin()}, $filterType_type$$96$$ === $dvt$$9$$.DvtChartViewportChangeEvent.TYPE && (this.options.xAxis || (this.options.xAxis = 
      {}), this.options.yAxis || (this.options.yAxis = {}), this.options.xAxis.viewportStartGroup = null, this.options.xAxis.viewportEndGroup = null, null != $event$$519_selectPayload$$.getXMin() && null != $event$$519_selectPayload$$.getXMax() && (this.options.xAxis.viewportMin = $event$$519_selectPayload$$.getXMin(), this.options.xAxis.viewportMax = $event$$519_selectPayload$$.getXMax()), null != $event$$519_selectPayload$$.getYMin() && null != $event$$519_selectPayload$$.getYMax() && (this.options.yAxis.viewportMin = 
      $event$$519_selectPayload$$.getYMin(), this.options.yAxis.viewportMax = $event$$519_selectPayload$$.getYMax())), this._trigger($filterType_type$$96$$ === $dvt$$9$$.DvtChartViewportChangeEvent.TYPE ? "viewportChange" : "viewportChangeInput", null, $selectedItems_viewportChangePayload$$1$$)) : $filterType_type$$96$$ === $dvt$$9$$.DvtDrillEvent.TYPE ? this._trigger("drill", null, {id:$event$$519_selectPayload$$.getId(), series:$event$$519_selectPayload$$.getSeries(), group:$event$$519_selectPayload$$.getGroup()}) : 
      this._super($event$$519_selectPayload$$);
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$3$$ = this.options._resources;
    $resources$$3$$.overviewGrippy = $oj$$43$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/drag_horizontal.png");
    $resources$$3$$.panCursorDown = $oj$$43$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-closed.cur");
    $resources$$3$$.panCursorUp = $oj$$43$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-open.cur");
  }, getTitle:function() {
    return this.$_component$.getAutomation().getTitle();
  }, getGroup:function($groupIndex$$) {
    return this.$_component$.getAutomation().getGroup($groupIndex$$);
  }, getSeries:function($seriesIndex$$) {
    return this.$_component$.getAutomation().getSeries($seriesIndex$$);
  }, getGroupCount:function() {
    return this.$_component$.getAutomation().getGroupCount();
  }, getSeriesCount:function() {
    return this.$_component$.getAutomation().getSeriesCount();
  }, getDataItem:function($seriesIndex$$1$$, $groupIndex$$1$$) {
    var $ret$$53$$ = this.$_component$.getAutomation().getDataItem($seriesIndex$$1$$, $groupIndex$$1$$);
    this.$_AddAutomationGetters$($ret$$53$$);
    return $ret$$53$$;
  }, getLegend:function() {
    var $ret$$54$$ = this.$_component$.getAutomation().getLegend();
    this.$_AddAutomationGetters$($ret$$54$$);
    return $ret$$54$$;
  }, getPlotArea:function() {
    var $ret$$55$$ = this.$_component$.getAutomation().getPlotArea();
    this.$_AddAutomationGetters$($ret$$55$$);
    return $ret$$55$$;
  }, getXAxis:function() {
    var $ret$$56$$ = this.$_component$.getAutomation().getXAxis();
    this.$_AddAutomationGetters$($ret$$56$$);
    return $ret$$56$$;
  }, getYAxis:function() {
    var $ret$$57$$ = this.$_component$.getAutomation().getYAxis();
    this.$_AddAutomationGetters$($ret$$57$$);
    return $ret$$57$$;
  }, getY2Axis:function() {
    var $ret$$58$$ = this.$_component$.getAutomation().getY2Axis();
    this.$_AddAutomationGetters$($ret$$58$$);
    return $ret$$58$$;
  }, getValuesAt:function($x$$58$$, $y$$38$$) {
    return this.$_component$.getValuesAt($x$$58$$, $y$$38$$);
  }, getContextByNode:function($context$$118_node$$114$$) {
    return($context$$118_node$$114$$ = this.getSubIdByNode($context$$118_node$$114$$)) && "oj-chart-tooltip" !== $context$$118_node$$114$$.subId ? $context$$118_node$$114$$ : null;
  }});
  $oj$$43$$.$__registerWidget$("oj.ojSparkChart", $$$$42$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{}, $_CreateDvtComponent$:function($context$$119$$, $callback$$118$$, $callbackObj$$12$$) {
    return $dvt$$9$$.DvtSparkChart.newInstance($context$$119$$, $callback$$118$$, $callbackObj$$12$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$20$$ = this._super();
    $styleClasses$$20$$.push("oj-sparkchart");
    return $styleClasses$$20$$;
  }, $_GetTranslationMap$:function() {
    var $translations$$19$$ = this.options.translations, $ret$$59$$ = this._super();
    $ret$$59$$["DvtUtilBundle.CHART"] = $translations$$19$$.componentName;
    return $ret$$59$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, getDataItem:function($itemIndex$$3$$) {
    var $auto$$22$$ = this.$_component$.getAutomation();
    return new $oj$$43$$.$SparkChartDataItem$($auto$$22$$.getDataItem($itemIndex$$3$$));
  }});
});
