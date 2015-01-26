var app = angular.module('indigo', ['ngRoute'])
       .config(function($routeProvider){
            $routeProvider
                .when('/list', {
                    templateUrl: 'list.html',
                    controller: 'orderCtrl'
                })
                .when('/details', {
                    templateUrl: 'details.html',
                    controller: 'orderCtrl'
                })
                .otherwise({redirectTo: '/list'});
        })
app.controller('orderCtrl', ['$scope', 'Order', 'CurrentOrder', 'sample_status', 'sample_ink', 'sample_pms', function($scope, Order, CurrentOrder, sample_status, sample_ink, sample_pms) {
        $scope.sortparam = "date";
        $scope.status = "";
        $scope.sample_status = sample_status;
        $scope.sample_ink = sample_ink;
        $scope.sample_pms = sample_pms;
        $scope.orders = Order.all();
        $scope.order = Order.get();
        today = new Date();
        $scope.current_date = function() {
            current_day = today;
            current_date = current_day;
            return current_date;
        };
        $scope.gotoPrevMonth = function() {
            current_day.setMonth(current_day.getMonth() -1);
        };
        $scope.gotoNextMonth = function() {
            current_day.setMonth(current_day.getMonth() +1);
        };
}]);