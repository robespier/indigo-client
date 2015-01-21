var app = angular.module('indigo', ['ngRoute'])
       .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    templateUrl: 'list.html',
                    controller: 'orderCtrl'
                })
                .when('/details', {
                    templateUrl: 'details.html',
                    controller: 'orderCtrl'
                })
                .otherwise({redirectTo: '/list'});
        })
       app.controller('orderCtrl', ['$scope', 'Order', 'sample_status', 'sample_ink', 'sample_pms', function($scope, Order, sample_status, sample_ink, sample_pms) {

        $scope.sortparam = "date";
        $scope.status = "";
        $scope.sample_status = sample_status;
        $scope.sample_ink = sample_ink;
        $scope.sample_pms = sample_pms;
        $scope.orders = Order.all();
        $scope.order = Order.get();
        
        today = new Date();
        current_day = today;
        $scope.current_date = Date.parse (current_day);
        
        $scope.gotoNextMonth = function() {
            current_day.setMonth(current_day.getMonth() +1);
            current_date = Date.parse (current_day);
        return current_date;
        };

	}]);
