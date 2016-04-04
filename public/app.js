angular.module('app', [
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'Todo.html',
        controller: 'main'
      })
      .when('/inventory', {
        templateUrl: 'Inventory.html',
        controller: 'main'
      })
      .when('/store', {
        templateUrl: 'Store.html',
        controller: 'main'
      })
      .when('/donutfactory', {
        templateUrl: 'DonutFactory.html',
        controller: 'main'
      })
      .otherwise({ redirectTo: '/' })



  })

.controller('main', function($scope, $location) {

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };




})
