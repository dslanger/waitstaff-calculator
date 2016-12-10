angular.module('waitstaffApp', ['ngMessages', 'ngRoute'])
.config(['$routeProvider', function($routeProvider){
      $routeProvider.when('/', {
          templateUrl: 'home.html',
          controller : 'HomeCtrl',
          controllerAs: 'vm'
      })
      .when('/my-earnings', {
          templateUrl : 'my-earnings.html',
          controller : 'EarningsCtrl',
          controllerAs: 'vm',
      })
      .when('/new-meal', {
          templateUrl : 'new-meal.html',
          controller : 'NewMealCtrl',
          controllerAs: 'vm',
      })
      .when('/error', {
        template : '<p>Error Page Not Found</p>'
      })
      .otherwise('/error');
  }])
  .run(function($rootScope) {
    $rootScope.subtotal = 0;
    $rootScope.tip = 0;
    $rootScope.total = 0;
    $rootScope.tipTotal = 0;
    $rootScope.mealCount = 0;
    $rootScope.avgTipPerMeal = 0;
  })
  .controller('NewMealCtrl', function($scope) {
    $scope.getMealTotal = function() {
      $scope.subtotal = $scope.mealPrice * (1 + $scope.taxRate / 100);
      $scope.tip = $scope.mealPrice * ($scope.tipPercentage / 100);
      $scope.total = $scope.subtotal + $scope.tip;
    };
    $scope.getTotalAndTip = function() {
      $scope.getMealTotal();
      $scope.getEarningsInfo();
    };
    $scope.cancelTipForm = function() {
      $scope.mealPrice = '';
      $scope.taxRate = '';
      $scope.tipPercentage = '';
      tipForm.$setPristine();
    };

  }])
  .controller('EarningsCtrl', function($scope) {
    // $scope.getEarningsInfo = function() {
    //   $scope.tipTotal += $scope.tip;
    //   $scope.mealCount += 1;
    //   $scope.avgTipPerMeal = $scope.tipTotal / $scope.mealCount;
    // };
    $scope.reset = function() {
      $scope.subtotal = 0;
      $scope.tip = 0;
      $scope.total = 0;
      $scope.tipTotal = 0;
      $scope.mealCount = 0;
      $scope.avgTipPerMeal = 0;
    };


  }])
  .controller('HomeCtrl', function($scope) {


  }]);
