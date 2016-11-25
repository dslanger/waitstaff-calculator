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
  .controller('HomeCtrl', [function() {
      var vm = this;
  }])
  .controller('EarningsCtrl', [function() {
      var vm = this;
  }])
  .controller('NewMealCtrl', [function() {
      var vm = this;
  }]);
