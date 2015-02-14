﻿var app = angular.module('indigoController', ['ngRoute'])
       .config(function($routeProvider, $locationProvider){
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
         $locationProvider.html5Mode(true);
        })
app.controller('OrderController', ['$scope', '$location', 'Orders', 'sample_status', 'sample_ink', 'sample_pms', function($scope, $location, Orders, sample_status, sample_ink, sample_pms) {
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
        $scope.orders = Orders.all(current_day);
        $scope.order = Orders.get();
        $scope.gotoPrevMonth = function() {
            current_day.setMonth(current_day.getMonth() -1);
            $scope.orders = Orders.all(current_day);
        };
        $scope.gotoNextMonth = function() {
            current_day.setMonth(current_day.getMonth() +1);
            $scope.orders = Orders.all(current_day);
        };
        $scope.gotoCurrentMonth = function() {
            current_day = new Date();
            $scope.orders = Orders.all(current_day);
        };
        $scope.setStatus = function() {
            $scope.status = this.status.name;
        };
        $scope.setActiveOrder = function() {
            $location.path('/details/' + ':' + this.order.id);
        };
}]);