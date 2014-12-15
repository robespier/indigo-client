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
					source: "вложение",
					run: "",
					status: "undefinded",
				},
				{
					name: "Малина 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "undefinded",
				},
				{
					name: "Зеленый чай 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "undefinded",
				},
				{
					name: "Квас 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "undefinded",
				},
				{
					name: "Груша-Дюшес 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "undefinded",
				},
				{
					name: "Вода газированная 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "undefinded",
				},
				{
					name: "Вода негазированная 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "undefinded",
				},
				{
					name: "Лимонад 1,5л",
					placement: "d4327004",
					source: "4327003",
					run: "",
					status: "undefinded",
				},
			],
		};
	}]);
})();
