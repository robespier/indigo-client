var app = angular.module('indigoController', ['ngRoute'])
       .config(function($routeProvider){
            $routeProvider
                .when('/list', {
                    templateUrl: 'list.html',
                    controller: 'OrderController'
                })
                .when('/details/:id', {
                    templateUrl: 'details.html',
                    controller: 'OrderController',
                })
                .otherwise({redirectTo: '/list'});
        })
app.controller('OrderController', ['$scope', '$location', 'Order', 'sample_status', 'sample_ink', 'sample_pms', function($scope, $location, Order, sample_status, sample_ink, sample_pms) {
        $scope.sortparam = "date";
        $scope.status = "";
        $scope.sample_status = sample_status;
        $scope.sample_ink = sample_ink;
        $scope.sample_pms = sample_pms;
        var current_day = new Date();
        $scope.getCurrentDate = function() {
            current_date = current_day;
            return current_date;
        };
        var current_order;
        $scope.orders = Order.all(current_day);
        $scope.order = Order.get(current_order);
        $scope.gotoPrevMonth = function() {
            current_day.setMonth(current_day.getMonth() -1);
            $scope.orders = Order.all(current_day);
        };
        $scope.gotoNextMonth = function() {
            current_day.setMonth(current_day.getMonth() +1);
            $scope.orders = Order.all(current_day);
        };
        $scope.gotoCurrentMonth = function() {
            current_day = new Date();
            $scope.orders = Order.all(current_day);
        };
        $scope.setStatus = function() {
            $scope.status = this.item.name;
        };
        $scope.setActiveOrder = function() {
            $scope.current_order = this.item;
            $location.path('/details/' + ':' + this.item.id);
        };
}]);