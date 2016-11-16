angular.module('waitstaffApp', ['ngMessages'])
  .controller('mainController', function() {
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

  });
