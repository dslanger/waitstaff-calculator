angular.module('waitstaffApp', ['ngMessages', 'ngRoute'])
.factory('TipsAndTotals', function() {
    var vm = this;
    // initial values
    vm.subtotal = 0;
    vm.tip = 0;
    vm.total = 0;
    vm.tipTotal = 0;
    vm.mealCount = 0;
    vm.avgTipPerMeal = 0;

    vm.getMealTotal = function() {
      vm.subtotal = vm.mealPrice * (1 + vm.taxRate / 100);
      vm.tip = vm.mealPrice * (vm.tipPercentage / 100);
      vm.total = vm.subtotal + vm.tip;
    };

    vm.getEarningsInfo = function() {
      vm.tipTotal += vm.tip;
      vm.mealCount += 1;
      vm.avgTipPerMeal = vm.tipTotal / vm.mealCount;
    };

    vm.getTotalAndTip = function() {
      vm.getMealTotal();
      vm.getEarningsInfo();
    };

    vm.cancelTipForm = function() {
      vm.mealPrice = '';
      vm.taxRate = '';
      vm.tipPercentage = '';
      tipForm.$setPristine();
    };

    vm.reset = function() {
      vm.subtotal = 0;
      vm.tip = 0;
      vm.total = 0;
      vm.tipTotal = 0;
      vm.mealCount = 0;
      vm.avgTipPerMeal = 0;
    };
})
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
          controller : 'MealCtrl',
          controllerAs: 'vm',
      })
      .when('/error', {
        template : '<p>Error Page Not Found</p>'
      })
      .otherwise('/error');
  }])
  .controller('HomeCtrl', ['TipsAndTotals', function() {
      var vm = this;
  }])
  .controller('EarningsCtrl', ['TipsAndTotals', function() {
    var vm = this;

  }])
  .controller('MealCtrl', [function() {
    var vm = this;

  }]);
