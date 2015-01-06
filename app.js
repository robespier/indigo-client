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
       app.controller('orderCtrl', ['$scope', 'Order', 'sample_pms', function($scope, Order, sample_pms) {
         $scope.misc = {
             status: [
                 {
                    name: "new",
                    label: "новый",
                    color: "#FFFFFF",
                 },
                 {
                    name: "job",
                    label: "в работе",
                    color: "#CCE8FF",
                 },
                 {
                    name: "pause",
                    label: "приостановлен",
                    color: "#CECECE",
                 },
                 {
                    name: "agreement",
                    label: "на утверждении",
                    color: "#87B7E1",
                 },
                 {
                    name: "agreed",
                    label: "утвержден",
                    color: "#C7E4BA",
                 },
                 {
                    name: "closed",
                    label: "завершен",
                    color: "#F8BBC7",
                 },
                 {
                    name: "deleted",
                    label: "аннулирован",
                    color: "#767676",
                 },
             ],
            sample_ink: [ 
				{ name: 'Opaque',
                     color: '#FFFFFF',
                  },
				{ name: 'Cyan',
                     color: '#00AEEF',
                  },
				{ name: 'Magenta',
                     color: '#EC008C',
                  },
				{ name: 'Yellow',
                     color: '#FFFF00',
                  },
				{ name: 'Black',
                     color: '#000000',
                  },
				{ name: 'Orange',
                     color: '#FF5000',
                  },
                  { name: 'Violet',
                     color: '#430098',
                  },
            ],
         };
        $scope.sortparam = "date";
        $scope.sample_pms = sample_pms;
        $scope.orders = Order.all();
        $scope.order = Order.get();
        
        $scope.insideController = function() {
            debugger;
        };
	}]);
