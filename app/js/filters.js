'use strict';

angular.module('wrapApp')
  .filter('capitalize', function() {
    return function(input, scope) {
      if (typeof input !== 'undefined')
        input = input.toLowerCase();
      return input.substring(0,1).toUpperCase()+input.substring(1);
    };
  });
