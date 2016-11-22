var app = angular.module('theBestHour', ['ui.materialize'])
    .controller('MaterializeController', ["$scope", function ($scope) {
        $scope.select = {
            value: "Option1",
            choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
        };
    }]);