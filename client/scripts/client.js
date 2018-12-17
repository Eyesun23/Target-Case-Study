var myRetailApp = angular.module('myRetailApp', ['ngRoute','ngMaterial','ngSanitize']);

// Angular Material Theme Configuration
myRetailApp.config(['$mdThemingProvider', function($mdThemingProvider) {
   $mdThemingProvider.theme('altTheme').primaryPalette('grey').accentPalette('blue-grey');
}]);

/// Routes ///
myRetailApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/item:code', {
      templateUrl: '/views/templates/product.html',
      controller: 'ProductController',
    })
    .otherwise({
      redirectTo: 'item0'
    });
}]);
