'use strict';

angular.module('wrapApp')
  .animation('.test-replace', function($window) {
    return {
      enter: function(element, done) {


      },
      leave: function(element, done) {

      },
    };
  })



  .animation('.flip-replace', function($window) {
    return {
      enter: function(element, done) {

      var $slogans = $("p.slogan").find("strong");
          var $holder = $("#holder");

          //set via JS so they're visible if JS disabled
          $slogans.parent().css({position : "absolute", top:"0px", left:"0px"});

          //settings
          var transitionTime = 0.4;
          var slogansDelayTime = 2;

          //internal
          var totalSlogans = $slogans.length;

          var oldSlogan = 0;
          var currentSlogan = -1;

          //initialize	
          switchSlogan();

          function switchSlogan(){

            oldSlogan = currentSlogan;

            if(currentSlogan < totalSlogans-1){
              currentSlogan ++
            } else {
              currentSlogan = 0;
            }

            TweenLite.to($slogans.eq(oldSlogan), transitionTime, {top:-20, alpha:0, rotationX: 90});
            TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});

            TweenLite.delayedCall(slogansDelayTime, switchSlogan);
          }








        var wrapper = $('<div></div>');
        wrapper.css({
          position : 'absolute',
          top: '0px',
          left: '0px',
          perspective: 80
        });

        element.wrap(wrapper);

        TweenMax.set(element.parent(), {
          height: element.height()
        });

        TweenMax.set(element, {
          textRendering: 'optimizeLegibility'
        });

        var duration = 0.4;

        TweenMax.fromTo(element, duration, {
          top:20,
          opacity:0,
          rotationX: -90
        }, {
          top:0,
          alpha:1,
          rotationX:0
        });

        $window.setTimeout(done, duration * 1000);
      },
      leave: function(element, done) {
        var duration = 0.4;
        TweenMax.to(element, duration, {
          top:-20,
          opacity:0,
          rotationX: 90,
        });

        $window.setTimeout(done, duration * 1000);
      },
    };
  })
  .animation('.fade-replace', function($window) {
    return {
      enter: function(element, done) {

        element.parent().height(element.height());

        TweenMax.set(element, {
          display:'none',
          opacity: 0
        });

        TweenMax.to(element, 1, {
          opacity:1,
          display: 'block',
          delay: 1
        });

        var duration = 1;
        $window.setTimeout(done, duration * 1000);
      },
      leave: function(element, done) {
        var duration = 1;
        TweenMax.to(element, 1, {opacity:0});
        $window.setTimeout(done, duration * 1000);
      },
    };
  });
