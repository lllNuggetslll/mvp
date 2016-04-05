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
  .controller('main', function($scope, $location, Mather) {

    //angular.extend($scope, Mather);
    $scope.money = 0;


    

    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.add = function() {
      Mather.make();
      $scope.money = Mather.wallet;
      console.log("mather make  "+ JSON.stringify(Mather))
    };

  })
  .factory('Mather', function() {
    var donuts = 0;
    var wallet = 0;
    var brooms = 0;

    var make = function() {
      donuts++;
      console.log("donuts " + donuts)
      var ten = donuts / 10;
      if (Number.isInteger(ten)) {
        wallet++;
        console.log("wallet: " + wallet)
       // return wallet;
      }
    };

    return {
      donuts: donuts,
      wallet: wallet,
      brooms: brooms,
      make: make
    }
  })
