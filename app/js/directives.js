'use strict';

angular.module('wrapApp')
  .directive('hueChange', function() {
    return {
      link: function(scope, element) {

        var s = Snap('#buy-title-svg')
          , mainWord = s.select('#main-word')
          , it = s.selectAll('.it');
        var m = {h:355, s:100, l:60};
        var i = {h:355, s:100, l:60};

        mainWord.attr({ 
          'fill': s.gradient('l(0, 0, 1, 1)'+Snap.hsl(m.h, m.s, m.l)+'-'+Snap.hsl(m.h, m.s, m.l)) 
        });
        it.attr({ 
          'fill': s.gradient('l(0, 0, 1, 1)'+Snap.hsl(i.h, i.s, i.l)+'-'+Snap.hsl(i.h, i.s, i.l))
         });


        function applyColorMain() {
          var g =s.gradient('l(0, 0, 1, 1)'+Snap.hsl(m.h, m.s, m.l)+'-'+Snap.hsl(m.h, m.s, m.l)); 
          mainWord.attr({ 
            fill: g
          });
        }

        function applyColorIt() {
          var g =s.gradient('l(0, 0, 1, 1)'+Snap.hsl(i.h, i.s, i.l)+'-'+Snap.hsl(i.h, i.s, i.l)); 
          it.attr({ 
            fill: g 
          });
        }
          
        TweenMax.to(m, 60, {h:0, onUpdate:applyColorMain, ease: 'Linear.easeNone', repeat:-1, yoyo: true, onUpdateParams: [m, s]});
          
        TweenMax.to(i, 60, {h:0, onUpdate:applyColorIt, ease: 'Linear.easeNone', repeat:-1, yoyo:true, onUpdateParams: [i, s]});

      }
    };
  })

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
  })

