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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$51$$, $$$$48$$) {
  (function() {
    $oj$$51$$.$__registerWidget$("oj.ojTrain", $$$$48$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{steps:[], selected:"", optionChange:null, beforeDeselect:null, deselect:null, beforeSelect:null, select:null}, $_stepNum$:0, $_stepArray$:null, _ComponentCreate:function() {
      this._super();
      this.$_setupTrain$();
    }, $_setupTrain$:function() {
      var $i$$436_options$$381$$ = this.options, $stepTag_steps$$4$$ = $i$$436_options$$381$$.steps;
      this.$_stepNum$ = $stepTag_steps$$4$$.length;
      this.$_wrapper$ = $$$$48$$("\x3cdiv class\x3d'oj-train-wrapper'\x3e\x3c/div\x3e");
      this.$_wrapper$.appendTo(this.element);
      this.$_connectorWrapper$ = $$$$48$$("\x3cdiv class\x3d'oj-train-connector-wrapper'\x3e\x3c/div\x3e");
      this.$_connectorWrapper$.appendTo(this.$_wrapper$);
      var $styleClass$$9$$ = this.element.attr("class");
      (this.$_stretch$ = null != $styleClass$$9$$ && 0 <= $styleClass$$9$$.indexOf("oj-train-stretch")) && this.$_connectorWrapper$.css("padding", "0 " + 100 / (2 * this.$_stepNum$) + "%");
      this.$_connector$ = $$$$48$$("\x3cdiv class\x3d'oj-train-connector'\x3e\x3c/div\x3e");
      this.$_connector$.appendTo(this.$_connectorWrapper$);
      this.$_stepList$ = $$$$48$$("\x3cul\x3e");
      this.$_stepList$.addClass("oj-train-step-list");
      this.$_connectorFill$ = $$$$48$$("\x3cdiv class\x3d'oj-train-connector-fill'\x3e\x3c/div\x3e");
      this.$_connectorFill$.appendTo(this.$_connectorWrapper$);
      this.$_setupArray$();
      this.$_selectedIndex$ = this.$_getStepIndex$($i$$436_options$$381$$.selected);
      -1 === this.$_selectedIndex$ && $stepTag_steps$$4$$[0] && $stepTag_steps$$4$$[0].id && (this.$_selectedIndex$ = 0, $i$$436_options$$381$$.selected = $stepTag_steps$$4$$[0].id);
      for ($i$$436_options$$381$$ = 0;$i$$436_options$$381$$ < this.$_stepNum$;$i$$436_options$$381$$++) {
        $stepTag_steps$$4$$ = $$$$48$$("\x3cli\x3e").addClass("oj-train-step-list-item").attr({id:this.$_stepArray$[$i$$436_options$$381$$][1]}), $stepTag_steps$$4$$.appendTo(this.$_stepList$), this.$_drawLabel$($i$$436_options$$381$$), this.$_drawStepFill$($i$$436_options$$381$$), this.$_drawButton$($i$$436_options$$381$$), this.$_drawMessageType$($i$$436_options$$381$$), this.$_stretch$ && $stepTag_steps$$4$$.css("width", 100 / this.$_stepNum$ + "%");
      }
      this.$_connectorFill$.css({width:(this.$_stepNum$ - 1 === this.$_selectedIndex$ ? 100 : 100 / (2 * (this.$_stepNum$ - 1)) + this.$_selectedIndex$ / (this.$_stepNum$ - 1) * 100) + "%"});
      this.$_stepList$.appendTo(this.$_wrapper$);
      this.element.addClass("oj-train");
    }, $_setupArray$:function() {
      var $options$$382$$ = this.options;
      this.$_stepArray$ = [];
      for (var $i$$437$$ = 0;$i$$437$$ < this.$_stepNum$;$i$$437$$++) {
        var $step$$4$$ = $options$$382$$.steps[$i$$437$$];
        this.$_stepArray$[$i$$437$$] = Array(5);
        this.$_stepArray$[$i$$437$$][0] = $step$$4$$.label ? $step$$4$$.label : null;
        this.$_stepArray$[$i$$437$$][1] = $step$$4$$.id ? $step$$4$$.id : null;
        this.$_stepArray$[$i$$437$$][2] = $step$$4$$.disabled ? !0 : !1;
        this.$_stepArray$[$i$$437$$][3] = $step$$4$$.visited ? !0 : !1;
        this.$_stepArray$[$i$$437$$][4] = $step$$4$$.messageType ? $step$$4$$.messageType : null;
      }
    }, $_drawButton$:function($index$$283$$) {
      var $button$$1$$ = $$$$48$$("\x3cdiv/\x3e").addClass("oj-train-button"), $scrnRead$$ = $$$$48$$("\x3cspan/\x3e"), $self$$189$$ = this, $desc$$1$$ = "";
      if (this.$_stepArray$[$index$$283$$]) {
        var $stepBackground_visited$$ = this.$_stepArray$[$index$$283$$][3], $disabled$$8$$ = this.$_stepArray$[$index$$283$$][2];
        this.$_selectedIndex$ === $index$$283$$ ? ($button$$1$$.addClass("oj-selected"), $desc$$1$$ = " current ") : $stepBackground_visited$$ && !$disabled$$8$$ ? ($button$$1$$.addClass("oj-visited"), $desc$$1$$ = " visited ") : $stepBackground_visited$$ || $disabled$$8$$ ? $button$$1$$.addClass("oj-disabled") : ($button$$1$$.addClass("oj-default"), $desc$$1$$ = " not visited ");
        this.$_stepArray$[$index$$283$$][2] || this.$_selectedIndex$ === $index$$283$$ || (this._hoverable($button$$1$$), $button$$1$$.on("click" + this.eventNamespace, function() {
          $self$$189$$.$_fireOptionChange$("selected", $self$$189$$.options.selected, this.parentNode.parentNode.id, !0);
          $self$$189$$.refresh();
        }));
        $stepBackground_visited$$ = this.$_stepList$.children().eq($index$$283$$).find(".oj-train-button-connector");
        1 <= $stepBackground_visited$$.length && $stepBackground_visited$$.children().remove();
        $stepBackground_visited$$.append($button$$1$$);
        $scrnRead$$.text($desc$$1$$);
        $scrnRead$$.addClass("oj-helper-hidden-accessible");
        this.$_stepList$.children().eq($index$$283$$).find("a").append($scrnRead$$);
      }
    }, $_drawMessageType$:function($index$$284$$) {
      var $icon$$7$$ = $$$$48$$("\x3cdiv/\x3e").addClass("oj-train-icon"), $scrnRead$$1$$ = $$$$48$$("\x3cspan/\x3e"), $desc$$2$$ = "", $self$$190$$ = this;
      if (this.$_stepArray$[$index$$284$$]) {
        var $messageType$$ = this.$_stepArray$[$index$$284$$][4];
        "confirmation" === $messageType$$ ? ($icon$$7$$.addClass("oj-confirmation"), $desc$$2$$ = " Confirmation ") : "info" === $messageType$$ ? ($icon$$7$$.addClass("oj-info"), $desc$$2$$ = " Info ") : "error" === $messageType$$ ? ($icon$$7$$.addClass("oj-error"), $desc$$2$$ = " Error ") : "fatal" === $messageType$$ ? ($icon$$7$$.addClass("oj-error"), $desc$$2$$ = " Error ") : "warning" === $messageType$$ && ($icon$$7$$.addClass("oj-warning"), $desc$$2$$ = " Warning ");
        var $button$$2$$ = this.$_stepList$.children().eq($index$$284$$).find(".oj-train-button");
        1 <= $button$$2$$.children().length && $button$$2$$.children().remove();
        this.$_stepArray$[$index$$284$$][2] || this.$_selectedIndex$ === $index$$284$$ || (this._hoverable($icon$$7$$), $icon$$7$$.on("click" + this.eventNamespace, function() {
          $self$$190$$.$_fireOptionChange$("selected", $self$$190$$.options.selected, this.parentNode.parentNode.parentNode.id, !0);
          $self$$190$$.refresh();
        }));
        null != $messageType$$ && ($scrnRead$$1$$.text($desc$$2$$), $scrnRead$$1$$.addClass("oj-helper-hidden-accessible"), this.$_stepList$.children().eq($index$$284$$).find("a").append($scrnRead$$1$$), $button$$2$$.append($icon$$7$$));
      }
    }, $_fireOptionChange$:function($eventData$$29_key$$172$$, $previousValue$$2_stepIndex$$, $value$$270$$, $originalEvent$$12$$) {
      $eventData$$29_key$$172$$ = {option:$eventData$$29_key$$172$$, fromStep:this.getStep($previousValue$$2_stepIndex$$), toStep:this.getStep($value$$270$$), optionMetadata:{writeback:$originalEvent$$12$$ ? "shouldWrite" : "shouldNotWrite"}};
      !1 !== this._trigger("beforeDeselect", null, $eventData$$29_key$$172$$) && !1 !== this._trigger("beforeSelect", null, $eventData$$29_key$$172$$) && ($previousValue$$2_stepIndex$$ = this.$_getStepIndex$($previousValue$$2_stepIndex$$), -1 !== $previousValue$$2_stepIndex$$ && (this.options.steps[$previousValue$$2_stepIndex$$].visited = !0), this._trigger("deselect", null, $eventData$$29_key$$172$$), this.option("selected", $value$$270$$, {_context:{originalEvent:$originalEvent$$12$$, $internalSet$:!0}}), 
      this._trigger("select", null, $eventData$$29_key$$172$$));
    }, $_drawStepFill$:function($index$$285_stepLi$$) {
      var $stepFill$$ = $$$$48$$("\x3cdiv/\x3e");
      $stepFill$$.addClass("oj-train-button-connector");
      this.$_stepArray$[$index$$285_stepLi$$] && ($index$$285_stepLi$$ <= this.$_selectedIndex$ && $stepFill$$.addClass("oj-train-fill"), $index$$285_stepLi$$ = this.$_stepList$.children().eq($index$$285_stepLi$$).children(), $stepFill$$.insertBefore($index$$285_stepLi$$));
    }, $_drawLabel$:function($index$$286$$) {
      var $self$$191$$ = this;
      if (this.$_stepArray$[$index$$286$$]) {
        var $labelWrapper$$ = $$$$48$$("\x3cdiv/\x3e").addClass("oj-train-label-wrapper"), $label$$14_stepLi$$1$$ = $$$$48$$("\x3ca\x3e");
        $label$$14_stepLi$$1$$.text(this.$_stepArray$[$index$$286$$][0]);
        var $disabled$$9$$ = this.$_stepArray$[$index$$286$$][2];
        $labelWrapper$$.append($label$$14_stepLi$$1$$);
        $label$$14_stepLi$$1$$.addClass("oj-train-label");
        $index$$286$$ === this.$_selectedIndex$ ? $label$$14_stepLi$$1$$.addClass("oj-selected") : this.$_stepArray$[$index$$286$$][3] && !$disabled$$9$$ ? $label$$14_stepLi$$1$$.addClass("oj-visited") : $disabled$$9$$ && $label$$14_stepLi$$1$$.addClass("oj-disabled");
        $disabled$$9$$ || ($label$$14_stepLi$$1$$.attr("href", "#"), this._hoverable($label$$14_stepLi$$1$$), $label$$14_stepLi$$1$$.on("click keydown" + this.eventNamespace, function($event$$568$$) {
          if ($event$$568$$.keyCode === $$$$48$$.ui.keyCode.ENTER || "click" === $event$$568$$.type) {
            $event$$568$$.preventDefault(), $self$$191$$.$_fireOptionChange$("selected", $self$$191$$.options.selected, this.parentNode.parentNode.id, !0), $self$$191$$.refresh(), $event$$568$$.keyCode === $$$$48$$.ui.keyCode.ENTER && $self$$191$$.$_setFocus$(this.parentNode.parentNode.id);
          }
        }));
        $label$$14_stepLi$$1$$ = this.$_stepList$.children().eq($index$$286$$).children();
        1 <= $label$$14_stepLi$$1$$.length && $label$$14_stepLi$$1$$[0].remove();
        this.$_stepList$.children().eq($index$$286$$).append($labelWrapper$$);
      }
    }, $_getStepIndex$:function($id$$54$$) {
      for (var $i$$438$$ = 0;$i$$438$$ < this.$_stepNum$;$i$$438$$++) {
        if (this.$_stepArray$[$i$$438$$] && this.$_stepArray$[$i$$438$$][1] === $id$$54$$) {
          return $i$$438$$;
        }
      }
      return-1;
    }, getStep:function($id$$55$$) {
      for (var $i$$439$$ = 0;$i$$439$$ < this.$_stepNum$;$i$$439$$++) {
        if (this.$_stepArray$[$i$$439$$] && this.$_stepArray$[$i$$439$$][1] === $id$$55$$) {
          return jQuery.extend({}, this.options.steps[$i$$439$$]);
        }
      }
      return null;
    }, nextSelectableStep:function() {
      for (var $i$$440$$ = this.$_getStepIndex$(this.options.selected);$i$$440$$ < this.$_stepNum$;$i$$440$$++) {
        if ($i$$440$$ + 1 < this.$_stepNum$ && this.$_stepArray$[$i$$440$$ + 1] && !this.$_stepArray$[$i$$440$$ + 1][2]) {
          return this.$_stepArray$[$i$$440$$ + 1][1];
        }
      }
      return null;
    }, previousSelectableStep:function() {
      for (var $i$$441$$ = this.$_getStepIndex$(this.options.selected);0 <= $i$$441$$;$i$$441$$--) {
        if (this.$_stepArray$[$i$$441$$ - 1] && !this.$_stepArray$[$i$$441$$ - 1][2]) {
          return this.$_stepArray$[$i$$441$$ - 1][1];
        }
      }
      return null;
    }, setStep:function($stepProperties$$) {
      if ($stepProperties$$.id) {
        var $stepInfo$$ = this.getStep($stepProperties$$.id), $stepIndex$$1_stepObj$$ = this.$_getStepIndex$($stepProperties$$.id);
        -1 !== $stepIndex$$1_stepObj$$ && ($stepIndex$$1_stepObj$$ = this.options.steps[$stepIndex$$1_stepObj$$], $stepProperties$$.label && ($stepInfo$$[0] = $stepProperties$$.label, $stepIndex$$1_stepObj$$.label = $stepProperties$$.label), "boolean" === typeof $stepProperties$$.disabled && ($stepInfo$$[2] = $stepProperties$$.disabled, $stepIndex$$1_stepObj$$.disabled = $stepProperties$$.disabled), "boolean" === typeof $stepProperties$$.visited && ($stepInfo$$[3] = $stepProperties$$.visited, $stepIndex$$1_stepObj$$.visited = 
        $stepProperties$$.visited), $stepProperties$$.messageType && ($stepInfo$$[4] = $stepProperties$$.messageType, $stepIndex$$1_stepObj$$.messageType = $stepProperties$$.messageType));
        this.refresh();
      }
    }, _setOptions:function($options$$383$$) {
      this._super($options$$383$$);
      this.refresh();
    }, refresh:function() {
      this._super();
      this._destroy();
      this.$_setupTrain$();
    }, _destroy:function() {
      this.$_stepList$.children().each(function() {
        $$$$48$$(this).remove();
      });
      this.element.removeClass("oj-train");
      this.element.find(".oj-train-wrapper").remove();
      this.element.find(".oj-train-connector-wrapper").remove();
      this.element.find(".oj-train-step-list").remove();
      this.element.find(".oj-train-step-list").remove();
      this._super();
    }, $_setFocus$:function($id$$56_index$$287$$) {
      $id$$56_index$$287$$ = this.$_getStepIndex$($id$$56_index$$287$$);
      for (var $i$$442$$ = 0;$i$$442$$ < this.$_stepNum$;$i$$442$$++) {
        if (this.$_stepArray$[($id$$56_index$$287$$ + $i$$442$$ + 1) % this.$_stepNum$] && !this.$_stepArray$[($id$$56_index$$287$$ + $i$$442$$ + 1) % this.$_stepNum$][2]) {
          this.$_stepList$.children().eq(($id$$56_index$$287$$ + $i$$442$$ + 1) % this.$_stepNum$).find(".oj-train-label").focus();
          break;
        }
      }
    }, getNodeBySubId:function($locator$$58$$) {
      if (null === $locator$$58$$) {
        return this.element ? this.element[0] : null;
      }
      var $index$$288$$ = $locator$$58$$.index;
      if ("number" !== typeof $index$$288$$ || 0 > $index$$288$$ || $index$$288$$ >= this.$_stepNum$) {
        return null;
      }
      switch($locator$$58$$.subId) {
        case "oj-train-button":
          return this.$_stepList$.children().eq($index$$288$$).find(".oj-train-button")[0];
        case "oj-train-button-connector":
          return this.$_stepList$.children().eq($index$$288$$).find(".oj-train-button-connector")[0];
        case "oj-train-connector":
          return this.$_connector$;
        case "oj-train-connector-fill":
          return this.$_connectorFill$;
        case "oj-train-icon":
          return this.$_stepList$.children().eq($index$$288$$).find(".oj-train-icon")[0];
        case "oj-train-label":
          return this.$_stepList$.children().eq($index$$288$$).find(".oj-train-label")[0];
      }
      return null;
    }});
  })();
});
