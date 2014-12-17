	var app = angular.module('indigo', []);
	app.controller('orderCtrl', ['$scope', function($scope) {
		$scope.order = {
            "order_number": "414Ц04308",
            "customer": "КФХ Семенов В.О.",
            "order_name": "Напитки Саврушка 1,5 л (в ассортименте)",
            "print_type": "digital",
            "label_type": "self-label",
            "material_type": "sem",
            "material_width": "250",
            "cut_type": "ready",
            "cut_number": "1084093",
            "size_x": "98,6",
            "size_y": "130",
            "roll_method": "auto", 
            "roll_type": "outside", 
            "roll_direct": "head_mashine",
            "polish": "none",
            "tisnenie": "none",
            "kongrev": "none",
            "print_size_X": "210",
            "print_size_Y": "933.45",
            "quantity_X": "2",
            "quantity_Y": "7",
            "AQ": "4",
            "AL": "3,35",
            "label_select": "off",
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
            inks: [ 
				{ name: 'Opaque',
                     used: false
                  },
                  { name: 'Opaque',
                     used: false
                  },
				{ name: 'Cyan',
                     used: true
                  },
                  { name: 'Cyan',
                     used: false
                  },
				{ name: 'Magenta',
                    used: true
                  },
                  { name: 'Magenta',
                     used: false
                  },
				{ name: 'Yellow',
                     used: true
                  },
                  { name: 'Yellow',
                     used: false
                  },
				{ name: 'Black',
                     used: true
                  },
                  { name: 'Black',
                     used: false
                  },
				{ name: 'Orange',
                     used: false
                  },
                  { name: 'Orange',
                     used: false
                  },
				{ name: 'Violet',
                     used: false
                  },
                  { name: 'Violet',
                     used: false
                  },
			],
		};
	}]);
