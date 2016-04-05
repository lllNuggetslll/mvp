angular.module('app', [
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'ToDo.html',
        controller: 'todo'
      })
      .when('/inventory', {
        templateUrl: 'Inventory.html',
        controller: 'box'
      })
      .when('/store', {
        templateUrl: 'Store.html',
        controller: 'buy'
      })
      .when('/donutfactory', {
        templateUrl: 'DonutFactory.html',
        controller: 'work'
      })
      .otherwise({ redirectTo: '/' })
  })

.controller('todo', function($scope, Mather) {
  $scope.room = "Dirty as hell!";
  $scope.clean = function() {
    if (Mather.brooms > 0) {
      $scope.room = "All clean, good job, team!";
      Mather.brooms--;
      console.log("all clean")
    }
  }
})

.controller('box', function($scope, Mather) {
  $scope.broom = Mather.brooms;

})

.controller('work', function($scope, Mather) {
  $scope.monies = Mather.wallet;
  $scope.donuts = Mather.donuts;

  $scope.add = function() {
    Mather.donuts++;
    console.log('donuts ' + Mather.donuts)
    if (Number.isInteger(Mather.donuts / 10)) {
      Mather.wallet++;
    }

    $scope.monies = Mather.wallet;
    $scope.donuts = Mather.donuts;

    console.log("mather make  " + JSON.stringify(Mather))
  };

})

.controller('buy', function($scope, Mather) {
  console.log('store ' + JSON.stringify(Mather))

  $scope.pocket = Mather.wallet;
  $scope.broom = Mather.brooms;


  $scope.pay = function() {
    if (Mather.wallet > 0) {
      Mather.brooms++;
      Mather.wallet--;
    }
    $scope.pocket = Mather.wallet;
    $scope.broom = Mather.brooms;
  }

})

.factory('Mather', function() {
  var donuts = 0;
  var wallet = 0;
  var brooms = 0;

  return {
    brooms: brooms,
    donuts: donuts,
    wallet: wallet
  };
})

.controller('navCtrl', function($scope, $location) {
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
});
