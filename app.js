(function() {
	var app = angular.module('indigo', []);
	app.controller('OrderBlank', ['$scope', function($scope) {
		$scope.order = {
             "order_number": "414Ц04308",
			"customer": "КФХ Семенов В.О.",
			"order_name": "Напитки Саврушка 1,5 л (в ассортименте)",
			"roll_method": "auto", 
			"roll_type": "outside", 
			"roll_direct": "head_forward",
              labels: [
				{
					name: "Апельсин 1,5л",
					placement: "d4327004",
					file: '',
				},
				{
					name: "Малина 1,5л",
					placement: "d4327004",
					file: '',
				},
				{
					name: "Зеленый чай 1,5л",
					placement: "d4327004",
					file: '',
				},
				{
					name: "Квас 1,5л",
					placement: "d4327004",
					file: '',
				},
				{
					name: "Груша-Дюшес 1,5л",
					placement: "d4327004",
					file: '',
				},
				{
					name: "Вода газирован. 1,5л",
					placement: "d4327004",
					file: '',
				},
				{
					name: "Вода негазир 1,5л",
					placement: "d4327004",
					file: '',
				},
				{
					name: "Лимонад 1,5л",
					placement: "d4327004",
					file: '',
				},
			],
		};
	}]);
})();
