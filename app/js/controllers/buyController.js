'use strict';

angular.module('wrapApp')
  .controller('buyCtrl', function ($scope, $rootScope, $http, $q) {

    $scope.selected = {};
    $scope.selected.size = '';
    $scope.selected.color = '';
    $scope.selected.price = '';
    $scope.color = '';
    $scope.options = {};
    $scope.changeSize = function() {
      //$scope.options.color = $scope.dependents[$scope.selected.size + '.color'];
      //$scope.selected.price = $scope.dependents[$scope.selected.size + '.price'][0].name;
    };


    $http.get('/api/product/attributes')
      .success(function (attrs) {
        $scope.options.size = attrs.size;
        $scope.options.color = attrs.color;
        $scope.options.price = attrs.price;

        /* set default */
        $scope.selected.size = $scope.options.size[0].name;
      })
      .error(function (error) {
        $scope.error = error;
      });

  });





