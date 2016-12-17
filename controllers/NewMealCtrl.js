angular.module('waitstaffApp')
  .controller('NewMealCtrl', ['wsCalculator',function(wsCalculator, $scope) {
    $scope.subtotal = wsCalculator.subtotal;
    $scope.tip = wsCalculator.tip;
    $scope.total = wsCalculator.total;
    $scope.mealCount = wsCalculator.mealCount;
    $scope.avgTipPerMeal = wsCalculator.avgTipPerMeal;

    $scope.submit = function(taxRate, mealPrice) {
      wsCalculator.addUpMealTotal(taxRate, mealPrice);
      wsCalculator.getMealTotal();
      wsCalculator.addUpEarnings(tip, mealCount);
      wsCalculator.getEarnings();
    }

    // $scope.getMealTotal = function() {
    //   $scope.subtotal = $scope.mealPrice * (1 + $scope.taxRate / 100);
    //   $scope.tip = $scope.mealPrice * ($scope.tipPercentage / 100);
    //   $scope.total = $scope.subtotal + $scope.tip;
    // };
    // $scope.getEarningsInfo = function() {
    //   $scope.tipTotal += $scope.tip;
    //   $scope.mealCount += 1;
    //   $scope.avgTipPerMeal = $scope.tipTotal / $scope.mealCount;
    // };
    // $scope.cancelTipForm = function() {
    //   $scope.mealPrice = '';
    //   $scope.taxRate = '';
    //   $scope.tipPercentage = '';
    //   tipForm.$setPristine();
    // };
}]);
