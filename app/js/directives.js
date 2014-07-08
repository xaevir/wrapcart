'use strict';

angular.module('wrapApp')
  .directive('animateOnChange', function($animate) {
    return function(scope, elem, attr) {
      scope.$watch(attr.animateOnChange, function(nv,ov) {
        if (nv === '') return;
        if (ov === '') return;
        $animate.addClass(elem, 'highlight', function() {
          $animate.removeClass(elem,'highlight');
        });
      });
    };
  });

