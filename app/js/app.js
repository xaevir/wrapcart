'use strict';

/**
 * Top level module. Lists all the other modules as dependencies.
 */

angular.module('wrapApp', ['ngRoute', 'ngAnimate', 'ngMessages', 'mgcrea.ngStrap', 'rcForm'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: '/partials/index.html',
        title: 'WrapIt by Tish -  One versatile wrap creates a wardrobe of ideas!',
        pageId: 'home'
      })
      .when('/contact', {
        templateUrl: '/partials/contact.html',
        title: 'Contact - WrapIt by Tish',
        pageId: 'contact'
      })
//      .when('/buy', {
//        templateUrl: '/partials/buy.html',
//        title: 'Buy - WrapIt by Tish',
//        controller: 'buyCtrl',
//        pageId: 'buy'
//      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .run(function ($location, $rootScope) {
    // set actions to be taken each time the user navigates
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      if (!current.$$route) return; // it was blank because no match 
      // set page title
      $rootScope.title = current.$$route.title;
      $rootScope.showNav = (current.$$route.originalPath === '/') ?  false : true;
      // set page id
      $rootScope.pageId = current.$$route.pageId;
    });
  });
