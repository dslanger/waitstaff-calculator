angular.module('waitstaffApp')
.factory('wsCalculator', function(){
    var = wsCalculator = {};
    wsCalculator.subtotal = 0,
    wsCalculator.tip = 0,
    wsCalculator.tipPercentage = 0,
    wsCalculator.total = 0,
    wsCalculator.tipTotal = 0,
    wsCalculator.mealCount = 0,
    wsCalculator.avgTipPerMeal = 0;

    wsCalculator.addUpMealTotal = function(taxRate, mealPrice) {
        subtotal = mealPrice * (1 + taxRate / 100);
        tip = mealPrice * (tipPercentage / 100);
        total = subtotal + tip;
    }

    wsCalculator.addUpEarnings = function(tip, mealCount) {
        tipTotal += tip;
        mealCount += 1;
        avgTipPerMeal = tipTotal / mealCount;
    }

    wsCalculator.getMealTotal = function () {
      return {
        'subtotal': subtotal,
        'tip': tip,
        'total': total
      }
    }

    wsCalculator.getEarnings = function () {
      return {
        'tipTotal': tipTotal,
        'mealCount': mealCount
      }

    }

    wsCalculator.getMealTotal = function () {
      return {
        calculateMealTotal: addUpMealTotal,
        getMealTotal: getMealTotal
      }
    }

    return wsCalculator;

});
