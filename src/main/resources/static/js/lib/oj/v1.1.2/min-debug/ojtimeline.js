/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTimeline"], function($oj$$39$$, $$$$38$$, $comp$$12$$, $base$$9$$, $dvt$$6$$) {
  $oj$$39$$.$__registerWidget$("oj.ojTimeline", $$$$38$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{viewportChange:null}, $_CreateDvtComponent$:function($context$$112$$, $callback$$114$$, $callbackObj$$8$$) {
    return $dvt$$6$$.DvtTimeline.newInstance($context$$112$$, $callback$$114$$, $callbackObj$$8$$);
  }, $_ConvertLocatorToSubId$:function($locator$$44$$) {
    var $subId$$42$$ = $locator$$44$$.subId;
    "oj-timeline-item" == $subId$$42$$ && ($subId$$42$$ = "timelineItem[" + $locator$$44$$.seriesIndex + "][" + $locator$$44$$.itemIndex + "]");
    return $subId$$42$$;
  }, $_ConvertSubIdToLocator$:function($indexPath$$2_subId$$43$$) {
    var $locator$$45$$ = {};
    0 == $indexPath$$2_subId$$43$$.indexOf("timelineItem") && ($indexPath$$2_subId$$43$$ = this.$_GetIndexPath$($indexPath$$2_subId$$43$$), $locator$$45$$.subId = "oj-timeline-item", $locator$$45$$.seriesIndex = $indexPath$$2_subId$$43$$[0], $locator$$45$$.itemIndex = $indexPath$$2_subId$$43$$[1]);
    return $locator$$45$$;
  }, $_ProcessStyles$:function() {
    this._super();
    this.options.styleDefaults || (this.options.styleDefaults = {});
    this.options.styleDefaults.series || (this.options.styleDefaults.series = {});
    if (!this.options.styleDefaults.series.colors) {
      var $handler$$51$$ = new $oj$$39$$.$ColorAttributeGroupHandler$;
      this.options.styleDefaults.series.colors = $handler$$51$$.$getValueRamp$();
    }
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$12$$ = this._super();
    $styleClasses$$12$$.push("oj-timeline");
    return $styleClasses$$12$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$13$$ = this._super();
    $styleClasses$$13$$["oj-timeline"] = {path:"styleDefaults/borderColor", property:"border-color"};
    $styleClasses$$13$$["oj-timeline-item"] = [{path:"styleDefaults/item/borderColor", property:"border-color"}, {path:"styleDefaults/item/backgroundColor", property:"background-color"}];
    $styleClasses$$13$$["oj-timeline-item oj-hover"] = [{path:"styleDefaults/item/hoverBorderColor", property:"border-color"}, {path:"styleDefaults/item/hoverBackgroundColor", property:"background-color"}];
    $styleClasses$$13$$["oj-timeline-item oj-selected"] = [{path:"styleDefaults/item/selectedBorderColor", property:"border-color"}, {path:"styleDefaults/item/selectedBackgroundColor", property:"background-color"}];
    $styleClasses$$13$$["oj-timeline-item-description"] = {path:"styleDefaults/item/descriptionStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-timeline-item-title"] = {path:"styleDefaults/item/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-timeline-major-axis-label"] = {path:"styleDefaults/majorAxis/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-timeline-major-axis-separator"] = {path:"styleDefaults/majorAxis/separatorColor", property:"color"};
    $styleClasses$$13$$["oj-timeline-minor-axis"] = [{path:"styleDefaults/minorAxis/backgroundColor", property:"background-color"}, {path:"styleDefaults/minorAxis/borderColor", property:"border-color"}];
    $styleClasses$$13$$["oj-timeline-minor-axis-label"] = {path:"styleDefaults/minorAxis/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-timeline-minor-axis-separator"] = {path:"styleDefaults/minorAxis/separatorColor", property:"color"};
    $styleClasses$$13$$["oj-timeline-overview"] = {path:"styleDefaults/overview/backgroundColor", property:"background-color"};
    $styleClasses$$13$$["oj-timeline-overview-label"] = {path:"styleDefaults/overview/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-timeline-overview-window"] = [{path:"styleDefaults/overview/window/backgroundColor", property:"background-color"}, {path:"styleDefaults/overview/window/borderColor", property:"border-color"}];
    $styleClasses$$13$$["oj-timeline-reference-object"] = {path:"styleDefaults/referenceObject/color", property:"color"};
    $styleClasses$$13$$["oj-timeline-series"] = {path:"styleDefaults/series/backgroundColor", property:"background-color"};
    $styleClasses$$13$$["oj-timeline-series-empty-text"] = {path:"styleDefaults/series/emptyTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-timeline-series-label"] = {path:"styleDefaults/series/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-timeline-zoomin-icon"] = {path:"_resources/zoomIn", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-zoomin-icon oj-hover"] = {path:"_resources/zoomIn_h", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-zoomin-icon oj-active"] = {path:"_resources/zoomIn_a", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-zoomin-icon oj-disabled"] = {path:"_resources/zoomIn_d", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-zoomout-icon"] = {path:"_resources/zoomOut", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-zoomout-icon oj-hover"] = {path:"_resources/zoomOut_h", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-zoomout-icon oj-active"] = {path:"_resources/zoomOut_a", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-zoomout-icon oj-disabled"] = {path:"_resources/zoomOut_d", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-scroll-indicator-back"] = {path:"_resources/scrollLeft", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-scroll-indicator-forward"] = {path:"_resources/scrollRight", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-scroll-indicator-up"] = {path:"_resources/scrollUp", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-scroll-indicator-down"] = {path:"_resources/scrollDown", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-overview-window-handle-horizontal"] = {path:"_resources/overviewHandleHor", property:"CSS_URL"};
    $styleClasses$$13$$["oj-timeline-overview-window-handle-vertical"] = {path:"_resources/overviewHandleVert", property:"CSS_URL"};
    return $styleClasses$$13$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "viewportChange"];
  }, $_GetTranslationMap$:function() {
    var $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$ = this.options.translations, $ret$$46$$ = this._super();
    $ret$$46$$["DvtUtilBundle.TIMELINE"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$.componentName;
    $ret$$46$$["DvtUtilBundle.TIMELINE_SERIES"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$.labelSeries;
    $ret$$46$$["DvtUtilBundle.ZOOM_IN"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$.tooltipZoomIn;
    $ret$$46$$["DvtUtilBundle.ZOOM_OUT"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$.tooltipZoomOut;
    $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$ = $oj$$39$$.$LocaleData$.$getMonthNames$("wide");
    $ret$$46$$["DvtUtilBundle.MONTH_JANUARY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[0];
    $ret$$46$$["DvtUtilBundle.MONTH_FEBRUARY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[1];
    $ret$$46$$["DvtUtilBundle.MONTH_MARCH"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[2];
    $ret$$46$$["DvtUtilBundle.MONTH_APRIL"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[3];
    $ret$$46$$["DvtUtilBundle.MONTH_MAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[4];
    $ret$$46$$["DvtUtilBundle.MONTH_JUNE"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[5];
    $ret$$46$$["DvtUtilBundle.MONTH_JULY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[6];
    $ret$$46$$["DvtUtilBundle.MONTH_AUGUST"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[7];
    $ret$$46$$["DvtUtilBundle.MONTH_SEPTEMBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[8];
    $ret$$46$$["DvtUtilBundle.MONTH_OCTOBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[9];
    $ret$$46$$["DvtUtilBundle.MONTH_NOVEMBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[10];
    $ret$$46$$["DvtUtilBundle.MONTH_DECEMBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[11];
    $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$ = $oj$$39$$.$LocaleData$.$getDayNames$("wide");
    $ret$$46$$["DvtUtilBundle.DAY_SUNDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[0];
    $ret$$46$$["DvtUtilBundle.DAY_MONDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[1];
    $ret$$46$$["DvtUtilBundle.DAY_TUESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[2];
    $ret$$46$$["DvtUtilBundle.DAY_WEDNESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[3];
    $ret$$46$$["DvtUtilBundle.DAY_THURSDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[4];
    $ret$$46$$["DvtUtilBundle.DAY_FRIDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[5];
    $ret$$46$$["DvtUtilBundle.DAY_SATURDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[6];
    $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$ = $oj$$39$$.$LocaleData$.$getDayNames$("abbreviated");
    $ret$$46$$["DvtUtilBundle.DAY_SHORT_SUNDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[0];
    $ret$$46$$["DvtUtilBundle.DAY_SHORT_MONDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[1];
    $ret$$46$$["DvtUtilBundle.DAY_SHORT_TUESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[2];
    $ret$$46$$["DvtUtilBundle.DAY_SHORT_WEDNESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[3];
    $ret$$46$$["DvtUtilBundle.DAY_SHORT_THURSDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[4];
    $ret$$46$$["DvtUtilBundle.DAY_SHORT_FRIDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[5];
    $ret$$46$$["DvtUtilBundle.DAY_SHORT_SATURDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$15$$[6];
    return $ret$$46$$;
  }, $_HandleEvent$:function($event$$507_minorAxisScale$$) {
    var $type$$93_viewportStart$$ = $event$$507_minorAxisScale$$ && $event$$507_minorAxisScale$$.getType ? $event$$507_minorAxisScale$$.getType() : null;
    if ($type$$93_viewportStart$$ === $dvt$$6$$.DvtSelectionEvent.TYPE) {
      this.$_UserOptionChange$("selection", $event$$507_minorAxisScale$$.getSelection());
    } else {
      if ($type$$93_viewportStart$$ === $dvt$$6$$.DvtTimelineViewportChangeEvent.TYPE) {
        var $type$$93_viewportStart$$ = (new Date($event$$507_minorAxisScale$$.getViewportStart())).toISOString(), $viewportEnd$$ = (new Date($event$$507_minorAxisScale$$.getViewportEnd())).toISOString();
        $event$$507_minorAxisScale$$ = $event$$507_minorAxisScale$$.getMinorAxisScale();
        var $viewportChangePayload$$ = {viewportStart:$type$$93_viewportStart$$, viewportEnd:$viewportEnd$$, minorAxisScale:$event$$507_minorAxisScale$$};
        this.$_UserOptionChange$("viewportStart", $type$$93_viewportStart$$);
        this.$_UserOptionChange$("viewportEnd", $viewportEnd$$);
        this.$_UserOptionChange$("minorAxis.scale", $event$$507_minorAxisScale$$);
        this._trigger("viewportChange", null, $viewportChangePayload$$);
      } else {
        this._super($event$$507_minorAxisScale$$);
      }
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$1$$ = this.options._resources, $converterFactory_yearsConverterVert$$ = $oj$$39$$.$Validation$.$converterFactory$("datetime"), $secondsConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({hour:"numeric", minute:"2-digit", second:"2-digit"}), $minutesConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({hour:"numeric", minute:"2-digit"}), $hoursConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({hour:"numeric"}), $daysConverter$$ = 
    $converterFactory_yearsConverterVert$$.createConverter({month:"numeric", day:"2-digit"}), $monthsConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({month:"long"}), $yearsConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({year:"numeric"}), $converterVert_monthsConverterVert$$ = $converterFactory_yearsConverterVert$$.createConverter({month:"short"}), $converterFactory_yearsConverterVert$$ = $converterFactory_yearsConverterVert$$.createConverter({year:"2-digit"}), 
    $converterVert_monthsConverterVert$$ = {seconds:$secondsConverter$$, minutes:$minutesConverter$$, hours:$hoursConverter$$, days:$daysConverter$$, weeks:$daysConverter$$, months:$converterVert_monthsConverterVert$$, quarters:$converterVert_monthsConverterVert$$, years:$converterFactory_yearsConverterVert$$};
    $resources$$1$$.converter = {seconds:$secondsConverter$$, minutes:$minutesConverter$$, hours:$hoursConverter$$, days:$daysConverter$$, weeks:$daysConverter$$, months:$monthsConverter$$, quarters:$monthsConverter$$, years:$yearsConverter$$};
    $resources$$1$$.converterVert = $converterVert_monthsConverterVert$$;
  }, getContextByNode:function($node$$110$$) {
    return this.getSubIdByNode($node$$110$$);
  }});
});
