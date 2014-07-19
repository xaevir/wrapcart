'use strict';

angular.module('wrapApp')
  .controller('buyCtrl', function ($scope, $rootScope, $http, $filter) {

    $scope.selected = {
      price: '',
      color: '',
      dressLength: '',
      neckOpening: ''
    };
    $scope.options = {};

    $scope.photos = {};

    $scope.photosGroup = 'light';
    $scope.photoActive = 'halter-white';

    $scope.getPhotoGroup = function (selected) {
      return selected == photosGroup ? 'active' : "";
    };

    $scope.activatePhoto = function(photo) {
      $scope.photoActive = photo; 
    }; 


    $http.get('/api/product/photos')
      .success(function (data) {
        $scope.photosList = data;
      })
      .error(function (error) {
        $scope.error = error;
      });


    $http.get('/api/product/attributes')
      .success(function (attrs) {
        $scope.options.dressLength = attrs.dressLength;
        $scope.options.color = attrs.color;
        $scope.options.price = attrs.price;
        $scope.options.neckOpening = attrs.neckOpening;

        /* set default */
        $scope.selected.dressLength = $scope.options.dressLength[0].name;
      })
      .error(function (error) {
        $scope.error = error;
      });

  });





