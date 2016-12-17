angula.module('moduleName')
    .factory('FactoryName', function () {
        var totalCount = 0,
            meals = 0;

        function addMeal(tip) {
            totaCount += tip;
            meals += 1;
        }

        function getTotals() {
            return {
                "totalTip": totaCount,
                "meals": meals
            }
        }

        return {
            addMeal: addMeal,
            getTotals: getTotals
        }
    });

    





Returned Value!{
    totalTip: 60,
    meals: 6
}