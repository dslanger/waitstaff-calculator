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
          controller : 'newMealCtrl',
          controllerAs: 'vm',
      })
      .when('/error', {
        template : '<p>Error Page Not Found</p>'
      })
      .otherwise('/error');
  }])
  .factory('calculator', [function() {
    var mealPrice, taxRate, tipPercentage, getMealTotal, getEarningsInfo, getTotalAndTip, cancelTipForm, subtotal, tip, total, tipTotal, mealCount, avgTipPerMeal;
    return {
      mealPrice: 0,
      taxRate: 0,
      tipPercentage: 0,
      getMealTotal: function() {
        subtotal = mealPrice * (1 + taxRate / 100);
        tip = mealPrice * (tipPercentage / 100);
        total = subtotal + tip;
      },
      getEarningsInfo: function() {
        tipTotal += tip;
        mealCount += 1;
        avgTipPerMeal = tipTotal / mealCount;
      },
      getTotalAndTip: function() {
        calculator.getMealTotal();
        calculator.getEarningsInfo();
      },
      cancelTipForm: function(form) {
        mealPrice = '';
        taxRate = '';
        tipPercentage = '';
        form.$setPristine();
      }
    };
  }])
  .controller('HomeCtrl', [function() {
      var vm = this;

  }])
  .controller('newMealCtrl', ['calculator', function(calculator) {
      var vm = this;
      vm.mealPrice = calculator.mealPrice;
      vm.taxRate = calculator.taxRate;
      vm.tipPercentage = calculator.tipPercentage;
      vm.getTotalAndTip = calculator.getTotalAndTip();
      vm.cancelTipForm = calculator.cancelTipForm();
  }])
  .controller('EarningsCtrl', ['calculator', function(calculator) {
      var vm = this;


  }]);
