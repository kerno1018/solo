/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtNBox"], function($oj$$41$$, $$$$40$$, $comp$$14$$, $base$$11$$, $dvt$$8$$) {
  $oj$$41$$.$__registerWidget$("oj.ojNBox", $$$$40$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$115$$, $callback$$116$$, $callbackObj$$10$$) {
    return $dvt$$8$$.DvtNBox.newInstance($context$$115$$, $callback$$116$$, $callbackObj$$10$$);
  }, $_ConvertLocatorToSubId$:function($locator$$48$$) {
    var $subId$$46$$ = $locator$$48$$.subId;
    "oj-nbox-cell" == $subId$$46$$ ? $subId$$46$$ = "cell[" + $locator$$48$$.row + "," + $locator$$48$$.column + "]" : "oj-nbox-dialog" == $subId$$46$$ ? $subId$$46$$ = "dialog" : "oj-nbox-dialog-close-button" == $subId$$46$$ ? $subId$$46$$ = "dialog#closeButton" : "oj-nbox-dialog-node" == $subId$$46$$ ? $subId$$46$$ = "dialog#node[" + $locator$$48$$.index + "]" : "oj-nbox-group-node" == $subId$$46$$ ? ($subId$$46$$ = $locator$$48$$.row && $locator$$48$$.column ? "cell[" + $locator$$48$$.row + "," + 
    $locator$$48$$.column + "]#groupNode[" : "groupNode[", $subId$$46$$ += $locator$$48$$.groupCategory + "]") : "oj-nbox-node" == $subId$$46$$ ? $subId$$46$$ = "cell[" + $locator$$48$$.row + "," + $locator$$48$$.column + "]#node[" + $locator$$48$$.index + "]" : "oj-nbox-overflow" == $subId$$46$$ ? $subId$$46$$ = "cell[" + $locator$$48$$.row + "," + $locator$$48$$.column + "]#overflow" : "oj-nbox-tooltip" == $subId$$46$$ && ($subId$$46$$ = "tooltip");
    return $subId$$46$$;
  }, $_ConvertSubIdToLocator$:function($subId$$47$$) {
    var $locator$$49$$ = {};
    if (0 == $subId$$47$$.indexOf("cell")) {
      var $cellIds_poundIndex$$ = this.$_GetFirstBracketedString$($subId$$47$$), $commaIndex$$ = $cellIds_poundIndex$$.indexOf(",");
      $locator$$49$$.row = $cellIds_poundIndex$$.substring(0, $commaIndex$$);
      $locator$$49$$.column = $cellIds_poundIndex$$.substring($commaIndex$$ + 1);
      $cellIds_poundIndex$$ = $subId$$47$$.indexOf("#");
      0 < $subId$$47$$.indexOf("#groupNode") ? ($locator$$49$$.subId = "oj-nbox-group-node", $locator$$49$$.groupCategory = this.$_GetFirstBracketedString$($subId$$47$$.substring($cellIds_poundIndex$$))) : 0 < $subId$$47$$.indexOf("#node") ? ($locator$$49$$.subId = "oj-nbox-node", $locator$$49$$.index = this.$_GetFirstIndex$($subId$$47$$.substring($cellIds_poundIndex$$))) : 0 < $subId$$47$$.indexOf("#overflow") ? $locator$$49$$.subId = "oj-nbox-overflow" : $locator$$49$$.subId = "oj-nbox-cell";
    } else {
      0 == $subId$$47$$.indexOf("dialog") ? 0 < $subId$$47$$.indexOf("#closeButton") ? $locator$$49$$.subId = "oj-nbox-dialog-close-button" : 0 < $subId$$47$$.indexOf("#node") ? ($locator$$49$$.subId = "oj-nbox-dialog-node", $locator$$49$$.index = this.$_GetFirstIndex$($subId$$47$$)) : $locator$$49$$.subId = "oj-nbox-dialog" : 0 == $subId$$47$$.indexOf("groupNode") ? ($locator$$49$$.subId = "oj-nbox-group-node", $locator$$49$$.groupCategory = this.$_GetFirstBracketedString$($subId$$47$$)) : "tooltip" == 
      $subId$$47$$ && ($locator$$49$$.subId = "oj-nbox-tooltip");
    }
    return $locator$$49$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$16$$ = this._super();
    $styleClasses$$16$$.push("oj-nbox");
    return $styleClasses$$16$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$17$$ = this._super();
    $styleClasses$$17$$["oj-nbox-columns-title"] = {path:"styleDefaults/columnsTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-rows-title"] = {path:"styleDefaults/rowsTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-column-label"] = {path:"styleDefaults/columnLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-row-label"] = {path:"styleDefaults/rowLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-cell"] = {path:"styleDefaults/cellDefaults/style", property:"CSS_BACKGROUND_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-cell oj-minimized"] = {path:"styleDefaults/cellDefaults/minimizedStyle", property:"CSS_BACKGROUND_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-cell-label"] = {path:"styleDefaults/cellDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-cell-countlabel"] = {path:"styleDefaults/cellDefaults/bodyCountLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-cell-countlabel oj-nbox-cell-header"] = {path:"styleDefaults/cellDefaults/countLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-node"] = {path:"styleDefaults/nodeDefaults/color", property:"background-color"};
    $styleClasses$$17$$["oj-nbox-node oj-hover"] = {path:"styleDefaults/nodeDefaults/hoverColor", property:"border-color"};
    $styleClasses$$17$$["oj-nbox-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$17$$["oj-nbox-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-node-secondarylabel"] = {path:"styleDefaults/nodeDefaults/secondaryLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-node-categorylabel"] = {path:"styleDefaults/__categoryNodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-dialog"] = [{path:"styleDefaults/__drawerDefaults/background", property:"background-color"}, {path:"styleDefaults/__drawerDefaults/borderColor", property:"border-color"}];
    $styleClasses$$17$$["oj-nbox-dialog-label"] = {path:"styleDefaults/__drawerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$17$$["oj-nbox-dialog-countlabel"] = {path:"styleDefaults/__drawerDefaults/countLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$17$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$17$$ = this.options.translations, $ret$$49$$ = this._super();
    $ret$$49$$["DvtUtilBundle.NBOX"] = $translations$$17$$.componentName;
    $ret$$49$$["DvtNBoxBundle.HIGHLIGHTED_COUNT"] = $translations$$17$$.highlightedCount;
    $ret$$49$$["DvtNBoxBundle.OTHER"] = $translations$$17$$.labelOther;
    $ret$$49$$["DvtNBoxBundle.GROUP_NODE"] = $translations$$17$$.labelGroup;
    $ret$$49$$["DvtNBoxBundle.SIZE"] = $translations$$17$$.labelSize;
    $ret$$49$$["DvtNBoxBundle.ADDITIONAL_DATA"] = $translations$$17$$.labelAdditionalData;
    return $ret$$49$$;
  }, $_HandleEvent$:function($event$$509$$) {
    var $keys$$38_type$$95$$ = $event$$509$$ && $event$$509$$.getType ? $event$$509$$.getType() : null;
    if ($keys$$38_type$$95$$ === $dvt$$8$$.DvtSelectionEvent.TYPE) {
      this.$_UserOptionChange$("selection", $event$$509$$.getSelection());
    } else {
      if ($keys$$38_type$$95$$ === $dvt$$8$$.DvtSetPropertyEvent.TYPE) {
        for (var $keys$$38_type$$95$$ = $event$$509$$.getParamKeys(), $i$$424$$ = 0;$i$$424$$ < $keys$$38_type$$95$$.length;$i$$424$$++) {
          var $key$$155$$ = $keys$$38_type$$95$$[$i$$424$$], $value$$254$$ = $event$$509$$.getParamValue($key$$155$$);
          "_drawer" == $key$$155$$ ? ($value$$254$$ && ($value$$254$$ = {id:$value$$254$$}), this.options[$key$$155$$] = $value$$254$$) : "maximizedRow" != $key$$155$$ && "maximizedColumn" != $key$$155$$ || this.$_UserOptionChange$($key$$155$$, $value$$254$$);
        }
      } else {
        this._super($event$$509$$);
      }
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$2$$ = this.options._resources;
    $resources$$2$$.overflow_dwn = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_dwn.png"), width:34, height:9};
    $resources$$2$$.overflow_ovr = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_ovr.png"), width:34, height:9};
    $resources$$2$$.overflow_ena = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_ena.png"), width:34, height:9};
    $resources$$2$$.overflow_dis = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_dis.png"), width:34, height:9};
    $resources$$2$$.close_dwn = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_dwn.png"), width:16, height:16};
    $resources$$2$$.close_ovr = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_ovr.png"), width:16, height:16};
    $resources$$2$$.close_ena = {src:$oj$$41$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_ena.png"), width:16, height:16};
  }, getNodeBySubId:function($locator$$50$$) {
    return this._super($locator$$50$$);
  }, getSubIdByNode:function($node$$112$$) {
    return this._super($node$$112$$);
  }, getRowsTitle:function() {
    var $auto$$7$$ = this.$_component$.getAutomation();
    return $auto$$7$$ ? $auto$$7$$.getData("rowsTitle") : null;
  }, getRowCount:function() {
    var $auto$$8$$ = this.$_component$.getAutomation();
    return $auto$$8$$ ? $auto$$8$$.getData("rowCount") : null;
  }, getRow:function($rowValue$$) {
    var $auto$$9$$ = this.$_component$.getAutomation();
    return $auto$$9$$ ? $auto$$9$$.getData("row", $rowValue$$) : null;
  }, getColumnsTitle:function() {
    var $auto$$10$$ = this.$_component$.getAutomation();
    return $auto$$10$$ ? $auto$$10$$.getData("columnsTitle") : null;
  }, getColumnCount:function() {
    var $auto$$11$$ = this.$_component$.getAutomation();
    return $auto$$11$$ ? $auto$$11$$.getData("columnCount") : -1;
  }, getColumn:function($columnValue$$) {
    var $auto$$12$$ = this.$_component$.getAutomation();
    return $auto$$12$$ ? $auto$$12$$.getData("column", $columnValue$$) : null;
  }, getCell:function($rowValue$$1$$, $columnValue$$1$$) {
    var $auto$$13$$ = this.$_component$.getAutomation(), $ret$$50$$ = $auto$$13$$ ? $auto$$13$$.getCell($rowValue$$1$$, $columnValue$$1$$) : null;
    $ret$$50$$ && ($ret$$50$$.getGroupNode = function $$ret$$50$$$getGroupNode$($groupMap$$) {
      return $auto$$13$$.getCellGroupNode($ret$$50$$, $groupMap$$);
    }, $ret$$50$$.getNode = function $$ret$$50$$$getNode$($nodeIndex$$1$$) {
      return $auto$$13$$.getCellNode($ret$$50$$, $nodeIndex$$1$$);
    });
    return $ret$$50$$;
  }, getGroupBehavior:function() {
    var $auto$$14$$ = this.$_component$.getAutomation();
    return $auto$$14$$ ? $auto$$14$$.getData("groupBehavior") : null;
  }, getGroupNode:function($groupCategory$$) {
    return this.$_component$.getAutomation().getGroupNode($groupCategory$$);
  }, getDialog:function() {
    var $auto$$16$$ = this.$_component$.getAutomation(), $ret$$51$$ = $auto$$16$$ ? $auto$$16$$.getDialog() : null;
    $ret$$51$$ && ($ret$$51$$.getNode = function $$ret$$51$$$getNode$($nodeIndex$$2$$) {
      return $auto$$16$$.getDialogNode($nodeIndex$$2$$);
    });
    return $ret$$51$$;
  }, getContextByNode:function($context$$116_node$$113$$) {
    return($context$$116_node$$113$$ = this.getSubIdByNode($context$$116_node$$113$$)) && "oj-nbox-tooltip" !== $context$$116_node$$113$$.subId ? $context$$116_node$$113$$ : null;
  }});
});
