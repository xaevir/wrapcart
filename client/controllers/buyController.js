'use strict';

angular.module('wrapApp')
  .controller('buyCtrl', function ($scope, $rootScope, $http) {


    $http.get('/api/products/attributes')
      .success(function (data) {
        $scope.attrs = data.firstLevel;
      })
      .error(function (error) {
        $scope.error = error;
      });
  });





