'use strict';

angular.module('wrapApp')
  .controller('buyCtrl', function ($scope, $rootScope, $http) {

    $scope.selected = {
      price: '',
      color: '',
      size: ''
    };
    $scope.options = {};

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





