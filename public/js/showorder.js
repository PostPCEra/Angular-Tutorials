var sampleApp = angular.module('sampleApp', []);
 
sampleApp.config(['$routeProvider',
  function($routeProvider) {


    $routeProvider.
      when('/ShowOrder/:orderId', {
    templateUrl: 'templates/order_details.html',
    controller: 'ShowOrderController'
      });


    $routeProvider.
      when('/ShowOrderINLINE/:orderId', {
    templateUrl: 'INLINE_details.html',
    controller: 'ShowOrderController'
      });

    $routeProvider.
     when('/menu/:orderId', {
    templateUrl: 'menu1.html',
    controller: 'MenuCtrl'
      });

     $routeProvider.
     when('/menu/:orderId', {
    templateUrl: 'menu2.html',
    controller: 'MenuCtrl'
      });


}]);
 
 
sampleApp.controller('ShowOrderController', function($scope, $routeParams) {
 
    $scope.order_id = $routeParams.orderId;
});

sampleApp.controller('MenuCtrl', function($scope, $routeParams) {
 
   // $scope.order_id = $routeParams.orderId;
});