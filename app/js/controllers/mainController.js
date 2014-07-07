'use strict';

angular.module('wrapApp')
  .controller('mainCtrl', function ($scope, $rootScope) {

    $rootScope.viewNav = function () {
      return $rootScope.showNav ? '/partials/nav.html' : '';
    };
  });
