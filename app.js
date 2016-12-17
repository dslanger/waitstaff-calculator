var app = angular.module('waitstaffApp', ['ngMessages', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider){
      $routeProvider.when('/', {
          templateUrl: 'home.html',
          controller : 'HomeCtrl'
      })
      .when('/my-earnings', {
          templateUrl : 'my-earnings.html',
          controller : 'EarningsCtrl'
      })
      .when('/new-meal', {
          templateUrl : 'new-meal.html',
          controller : 'NewMealCtrl'
      })
      .when('/error', {
        template : '<p>Error Page Not Found</p>'
      })
      .otherwise('/error');
  }]);
  // app.run(function($rootScope) {
  //   $rootScope.subtotal = 0;
  //   $rootScope.tip = 0;
  //   $rootScope.total = 0;
  //   $rootScope.tipTotal = 0;
  //   $rootScope.mealCount = 0;
  //   $rootScope.avgTipPerMeal = 0;
  // });
