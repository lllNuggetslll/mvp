angular.module('app', [
  'ngRoute'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'ToDo.html',
      controller:
    })
    .when('/Inventory', {
      templateUrl: 'Inventory.html',
      controller:
    })
    .when('/Store', {
      templateUrl: 'Store.html',
      controller:
    })
    .when('/DonutFactory', {
      templateUrl: 'DonutFactory.html'
    })
    .otherwise({ redirectTo: '/' })



})
