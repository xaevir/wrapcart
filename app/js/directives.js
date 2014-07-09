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
  })
  .directive('animateFade', function() {
      return {
          restrict: 'C',
          link: function(scope, element) {

              // Get the height of this element and it's parent height
              var height = element.height();
              var parentHeight = element.parent().height();

              // If this element's height is greater than that of the parent,
              // update the parents's height. Always pick the largest one as this
              // will mean no flickering.
              if (height > parentHeight) {
                  //element.parent().height(height);
              }
          }
      };
  });

