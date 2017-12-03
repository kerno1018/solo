/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs"], function($oj$$53$$, $$$$50$$, $Hammer$$4$$) {
  $Hammer$$4$$ ? ($$$$50$$.fn.$ojHammer$ = function $$$$$50$$$fn$$ojHammer$$($options$$384$$) {
    return "instance" == $options$$384$$ ? this.data("ojHammer") : this.each(function() {
      var $$el$$1$$ = $$$$50$$(this);
      $$el$$1$$.data("ojHammer") || $$el$$1$$.data("ojHammer", new $Hammer$$4$$.Manager($$el$$1$$[0], $options$$384$$));
    });
  }, $goog$exportPath_$$("$.fn.ojHammer", $$$$50$$.fn.$ojHammer$, void 0), $Hammer$$4$$.Manager.prototype.emit = function($originalEmit$$) {
    return function($type$$97$$, $data$$175$$) {
      $originalEmit$$.call(this, $type$$97$$, $data$$175$$);
      $$$$50$$(this.element).trigger({type:$type$$97$$, gesture:$data$$175$$});
    };
  }($Hammer$$4$$.Manager.prototype.emit)) : $oj$$53$$.$Logger$.warn("Hammer jQuery extension loaded without Hammer.");
});
