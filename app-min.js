angular.module("waitstaffApp",[]).controller("mainController",function(){var t=this;t.subtotal=0,t.tip=0,t.total=0,t.tipTotal=0,t.mealCount=0,t.avgTipPerMeal=0,t.getMealTotal=function(){t.subtotal=t.mealPrice*(1+t.taxRate/100),t.tip=t.mealPrice*(t.tipPercentage/100),t.total=t.subtotal+t.tip},t.getEarningsInfo=function(){t.tipTotal+=t.tip,t.mealCount+=1,t.avgTipPerMeal=t.tipTotal/t.mealCount}});