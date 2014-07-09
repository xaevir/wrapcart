'use strict';

angular.module('wrapApp')
  .animation('.fade-replace', function($window) {
    return {
      enter: function(element, done) {

        element.parent().height(element.height());

        TweenMax.set(element, {display:'none', opacity: 0});

        TweenMax.to(element, 1, {opacity:1, display: 'block', delay: 1});

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
