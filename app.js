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
				{ name: 'Opaque1',
                     used: false
                  },
				{ name: 'Cyan1',
                     used: true
                  },
				{ name: 'Magenta1',
                    used: true
                  },
				{ name: 'Yellow1',
                     used: true
                  },
				{ name: 'Black1',
                     used: true
                  },
				{ name: 'Orange1',
                     used: false
                  },
                  { name: 'Violet1',
                     used: false
                  },
            ],
            inks2: [ 
				{ name: 'Opaque2',
                     used: false
                  },
				{ name: 'Cyan2',
                     used: false
                  },
				{ name: 'Magenta2',
                    used: false
                  },
				{ name: 'Yellow2',
                     used: false
                  },
				{ name: 'Black2',
                     used: false
                  },
				{ name: 'Orange2',
                     used: false
                  },
                  { name: 'Violet2',
                     used: false
                  },
            ],
            pms: [ 
				{ name: 'pms1',
                     used: true
                  },
				{ name: 'pms2',
                     used: true
                  },
				{ name: 'pms3',
                    used: true
                  },
				{ name: 'pms4',
                     used: true
                  },
				{ name: 'pms5',
                     used: true
                  },
				{ name: 'pms6',
                     used: true
                  },
                  { name: 'pms7',
                     used: true
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
            sample_pms: [
                  { name: '100',
                      color: '#F4ED7C'
                  },
                  { name: '101',
                      color: '#F4ED47'
                  },
                  { name: '102',
                      color: '#F9E814'
                  },
                  { name: '103',
                      color: '#C6AD0F'
                  },
                  { name: '104',
                      color: '#AD9B0C'
                  },
                  { name: '105',
                      color: '#82750F'
                  },
                  { name: '106',
                      color: '#F7E859'
                  },
            ],
		};
	}]);
