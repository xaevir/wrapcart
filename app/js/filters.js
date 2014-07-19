'use strict';

angular.module('wrapApp')
  .filter('capitalize', function() {
    return function(input, scope) {
      if (typeof input !== 'undefined')
        input = input.toLowerCase();
      return input.substring(0,1).toUpperCase()+input.substring(1);
    };
  })
  .filter('group', function() {
      return function(items, groupItems) {
          if (items) {
              var newArray = [];

              for (var i = 0; i < items.length; i+=groupItems) {
                  if (i + groupItems > items.length) {
                      newArray.push(items.slice(i));
                  } else {
                      newArray.push(items.slice(i, i + groupItems));
                  }
              }

              return newArray;
          }
      };
  })
  .filter('groupBy', function() {
    return function(items, groupedBy) {
        if (items) {
            var finalItems = [],
                thisGroup;
            for (var i = 0; i < items.length; i++) {
                if (!thisGroup) {
                    thisGroup = [];
                }
                thisGroup.push(items[i]);
                if (((i+1) % groupedBy) === 0) {
                    finalItems.push(thisGroup);
                    thisGroup = null;
                }
            }
            if (thisGroup) {
                finalItems.push(thisGroup);
            }
            return finalItems;
        }
    };
});

