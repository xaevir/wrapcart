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
      $scope.options.color = $scope.dependents[$scope.selected.size + '.color'];
      $scope.selected.price = $scope.dependents[$scope.selected.size + '.price'][0].name;
    };


    var first = $http.get('/api/product/attributes/size'),
        second = $http.get('/api/product/attributes/dependents');

    $q.all([first, second]).then(function(result){
      $scope.options.size = result[0].data;
      $scope.dependents = result[1].data;
      // set default
      $scope.selected.size = result[0].data[1].name;
      $scope.changeSize();
    },
    function(error) {
      $scope.error = error;
    });
  });





