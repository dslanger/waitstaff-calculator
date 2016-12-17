angular.module('waitstaffApp')
.factory('wsCalculator', function(){
  return {
    var subtotal = 0,
        tip = 0,
        tipPercentage = 0,
        total = 0,
        tipTotal = 0,
        mealCount = 0,
        avgTipPerMeal = 0;

    function addUpMealTotal(taxRate, mealPrice) {
        subtotal = mealPrice * (1 + taxRate / 100);
        tip = mealPrice * (tipPercentage / 100);
        total = subtotal + tip;
    }

    function addUpEarnings(tip, mealCount) {
        tipTotal += tip;
        mealCount += 1;
        avgTipPerMeal = tipTotal / mealCount;
    }

    function getMealTotal() {
      return {
        'subtotal': subtotal,
        'tip': tip,
        'total': total
      }
    }

    function getEarnings() {
      return {
        'tipTotal': tipTotal,
        'mealCount': mealCount
      }

    }

    function getMealTotal() {
      return {
        calculateMealTotal: addUpMealTotal,
        getMealTotal: getMealTotal
      }
    }
  }

});
