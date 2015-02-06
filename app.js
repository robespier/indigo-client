var app = angular.module('indigo', ['ngRoute'])
       .config(function($routeProvider){
            $routeProvider
                .when('/list', {
                    templateUrl: 'list.html',
                    controller: 'orderCtrl'
                })
                .when('/details/:orderId', {
                    templateUrl: 'details.html',
                    controller: 'orderCtrl',
                })
                .otherwise({redirectTo: '/list'});
        })
app.controller('orderCtrl', ['$scope', '$location', 'Order', 'sample_status', 'sample_ink', 'sample_pms', function($scope, $location, Order, sample_status, sample_ink, sample_pms) {
        $scope.sortparam = "date";
        $scope.status = "";
        $scope.sample_status = sample_status;
        $scope.sample_ink = sample_ink;
        $scope.sample_pms = sample_pms;
        var today = new Date();
        var current_day = today;
        $scope.getCurrentDate = function() {
            current_date = current_day;
            return current_date;
        };
        $scope.orders = Order.all(current_day);
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
            var order = this.item;
            $location.path('/details/' + ':' + order.id);
        };
}]);