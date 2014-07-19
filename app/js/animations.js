'use strict';

angular.module('wrapApp')

  .animation('.drop-out', function($window) {
    var duration = 1;
    return {
      enter: function(element, done) {

        TweenMax.set(element, {opacity: 0});

        TweenMax.to(element, 0, {y:70 });

        TweenMax.to(element, 1, {
          y:0,
          opacity: 1,
          delay:0.1,
          ease:'Elastic.easeOut'
        });

        $window.setTimeout(done, duration * 1000);
      },
      leave: function(element, done) {

        TweenMax.to(element, 1, {
          y:70,
          opacity: 0,
          //ease:'Elastic.easeIn'
        });

        $window.setTimeout(done, duration * 1000);
      },
    };
  })

  .animation('.multi-bounce', function($window) {
    var duration = 1;
    return {
      enter: function(element, done) {

        //var t1 = new TimelineLite();

        TweenMax.from(element, 0.5, {
          width:0,
          //ease: 'Power4.easeInOut'
          //ease: 'Linear.easeNone'
          ease:'Power2.easeIn'
        });

        //element.css({opacity: 0});
        //t1.fromTo(element, 1, {width: 0}, {width: element.width()})
          //.from(element, 1, {x: 10})
          //.from(element, 1, {x: 30, y: 70});

        $window.setTimeout(done, duration * 1000);
      },
      leave: function(element, done) {
        TweenMax.to(element, 0.5, {
          width:0,
          //ease: 'Power0.easeIn'
          //ease: 'Linear.easeNone'
          ease:'Power2.easeIn'
        });

        $window.setTimeout(done, 0.5 * 1000);
      },
    };
  })

  .animation('.bounce-fade', function($window) {

    var duration = 1;

    return {
      enter: function(element, done) {

        element.parent().height(element.height());

        TweenMax.set(element, {
          position: 'absolute',
        });

        TweenMax.to(element, 0.3, {
          y: -20
        });

        TweenMax.to(element, 0.5, {
          y: 0,
          delay: 0.3,
          ease: 'Elastic.easeOut'
        });

        $window.setTimeout(done, duration * 1000);
      },
      leave: function(element, done) {

        TweenMax.to(element, .3, {
          height: 0,
          opacity: 0,
          y: -30,
        });
        $window.setTimeout(done, duration * 1000);
      }
    };
  })


  .animation('.bounce', function($window) {
    return {
      enter: function(element, done) {
        var duration = 1;

        TweenMax.to(element, 0.3, {
          y: -20
        });

        TweenMax.to(element, 0.5, {
          y: 0,
          delay: 0.3,
          ease: 'Elastic.easeOut'
        });

        $window.setTimeout(done, duration * 1000);
      }
    };
  })
  .animation('.flip-replace', function($window) {

    var topValue = '';

    return {
      enter: function(element, done) {

       var elementHeight = element.height();

       topValue = elementHeight/2;

        TweenMax.set(element.parent(), {
          height: elementHeight
        });

        TweenMax.set(element, {
          position: 'absolute',
          textRendering: 'optimizeLegibility'
        });

        var duration = 0.7;

        TweenMax.fromTo(element, duration, {
          top: '-'+topValue,
          opacity: 0,
          rotationX: 90
        }, {
          top:0,
          opacity:1,
          rotationX:0
        });

        $window.setTimeout(done, duration * 1000);
      },
      leave: function(element, done) {
        var duration = 0.7;
        TweenMax.to(element, duration, {
          top: topValue,
          opacity:0,
          rotationX: -90,
        });

        $window.setTimeout(done, duration * 1000);
      },
    };
  })

  .animation('.fade-replace-1', function($window) {

    var duration = 1;

    return {
      enter: function(element, done) {

       var height = element.height();

        element.parent().height(element.height());

        TweenMax.set(element, {
          display:'none',
          opacity: 0
        });

        TweenMax.to(element, 0.3, {
          opacity:1,
          display: 'block',
          delay: 0.4,
          onComplete: done
        });

      },
      leave: function(element, done) {

        TweenMax.to(element, 0.3, {
          opacity:0,
          delay: 0.1,
          onComplete: done
        });
      },
    };
  })

  .animation('.fade-replace', function($window) {

    var duration = 1;

    return {
      enter: function(element, done) {

        element.parent().height(element.height());

        element.css({
          display:'none',
          opacity: 0
        });

        TweenMax.to(element, .3, {
          opacity:1,
          display: 'block',
          delay: 0.3,
          onComplete: done
        });

      },
      leave: function(element, done) {

        TweenMax.to(element, 0.3, {opacity:0, onComplete: done });
      }
    };
  });
