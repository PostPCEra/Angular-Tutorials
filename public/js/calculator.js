var app = angular.module('app', []);

// source URL:  http://viralpatel.net/blogs/angularjs-service-factory-tutorial/
// Service 1
app.service('MathService', function() {
    this.add = function(a, b) { return a + b };
    
    this.subtract = function(a, b) { return a - b };
    
    this.multiply = function(a, b) { return a * b };
    
    this.divide = function(a, b) { return a / b };
});

// Service 2 , note MathService is passed here
app.service('CalculatorService', function(MathService){
    
    this.square = function(a) { return MathService.multiply(a,a); };
    this.cube = function(a) { return MathService.multiply(a, MathService.multiply(a,a)); };

});

// controller , note CalculatorService is passed here
app.controller('CalculatorController', function($scope, CalculatorService) {

    $scope.doSquare = function() {
        $scope.answer = CalculatorService.square($scope.number);
    }

    $scope.doCube = function() {
        $scope.answer = CalculatorService.cube($scope.number);
    }
});