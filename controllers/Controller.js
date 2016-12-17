angular.module('moduleName')
    .controller('NameCtrl', function($scope, FactoryName) {
        $scope.submit = function(tip, data) {
            FactoryName.addMeal(tip);        
        }

        $scope.total = FactoryName.getTotals();
    });