angular.module("waitstaffApp",["ngMessages","ngRoute"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"home.html",controller:"HomeCtrl",controllerAs:"vm"}).when("/my-earnings",{templateUrl:"my-earnings.html",controller:"EarningsCtrl",controllerAs:"vm"}).when("/new-meal",{templateUrl:"new-meal.html",controller:"newMealCtrl",controllerAs:"vm"}).when("/error",{template:"<p>Error Page Not Found</p>"}).otherwise("/error")}]).factory("calculator",[function(){var e,t,r,n,l,a,o,c,i,m,g,u,s;return{mealPrice:0,taxRate:0,tipPercentage:0,getMealTotal:function(){c=e*(1+t/100),i=e*(r/100),m=c+i},getEarningsInfo:function(){g+=i,u+=1,s=g/u},getTotalAndTip:function(){calculator.getMealTotal(),calculator.getEarningsInfo()},cancelTipForm:function(n){e="",t="",r="",n.$setPristine()}}}]).controller("HomeCtrl",[function(){var e=this}]).controller("newMealCtrl",["calculator",function(e){var t=this;t.mealPrice=e.mealPrice,t.taxRate=e.taxRate,t.tipPercentage=e.tipPercentage,t.getTotalAndTip=e.getTotalAndTip(),t.cancelTipForm=e.cancelTipForm()}]).controller("EarningsCtrl",["calculator",function(e){var t=this}]);