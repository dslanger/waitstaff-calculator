angular.module('waitstaffApp', ['ngMessages', 'ngRoute'])
.factory('calculateTotals', function() {
      return {
        // initial values
        this.subtotal = 0,
        this.tip = 0,
        this.total = 0,
        this.tipTotal = 0,
        this.mealCount = 0,
        this.avgTipPerMeal = 0,

        this.getMealTotal = function() {
          subtotal = mealPrice * (1 + taxRate / 100);
          tip = mealPrice * (tipPercentage / 100);
          total = subtotal + tip;
        },

        this.getEarningsInfo = function() {
          tipTotal += tip;
          mealCount += 1;
          avgTipPerMeal = tipTotal / mealCount;
        },

        this.getTotalAndTip = function() {
          this.getMealTotal();
          this.getEarningsInfo();
        },

        this.cancelTipForm = function() {
          mealPrice = '';
          taxRate = '';
          tipPercentage = '';
          tipForm.$setPristine();
        },

        this.reset = function() {
          subtotal = 0;
          tip = 0;
          total = 0;
          tipTotal = 0;
          mealCount = 0;
          avgTipPerMeal = 0;
        }

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
  .controller('HomeCtrl', ['calculateTotals', function() {
      var vm = this;
  }])
  .controller('EarningsCtrl', ['calculateTotals', function() {
    var vm = this;

  }])
  .controller('MealCtrl', [function() {
    var vm = this;

  }]);
