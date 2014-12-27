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
       app.controller('orderCtrl', ['$scope', function($scope) {
         $scope.sortparam = "date";
		$scope.order = {
            orders: [
                {
                    date: "07.11.2014",
                    number: "414Ц04866/1",
                    customer: "Тимнар ООО",
                    name: "Сок Гранатовый Премиум 1 л (эт.)",
                    manager: "Лотфуллина Э.",
                    master: "",
                    status: "deleted",
                },
                {
                    date: "07.11.2014",
                    number: "414Ц04866/2",
                    customer: "Тимнар ООО",
                    name: "Сок Гранатовый Премиум 1 л (к/эт.)",
                    manager: "Лотфуллина Э.",
                    master: "",
                    status: "deleted",
                },
                {
                    date: "10.11.2014",
                    number: "414-04454",
                    customer: "Челны-Бройлер ООО",
                    name: "Колбаса Рахмат",
                    manager: "Шестакова С.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "11.11.2014",
                    number: "414Ц04612/1/П1",
                    customer: "Аврора ОАО",
                    name: "Вино Кувье Карсов (красное, белое)",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    status: "closed",
                },
                {
                    date: "11.11.2014",
                    number: "414Ц04884",
                    customer: "Артлайф ООО",
                    name: "Комплекс ферментов плюс 90 кап. (для Украины)",
                    manager: "Лотфуллина Э.",
                    master: "Галиева В.",
                    status: "closed",
                },
                {
                    date: "11.11.2014",
                    number: "414М04969",
                    customer: "Артлайф ООО",
                    name: "Комплекс ферментов плюс 180 кап. (для Украины)",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "11.11.2014",
                    number: "414М04963",
                    customer: "Артлайф ООО",
                    name: "Арголайф",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "11.11.2014",
                    number: "414М04964",
                    customer: "Артлайф ООО",
                    name: "Аргосепт",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "11.11.2014",
                    number: "414М04977",
                    customer: "Артлайф ООО",
                    name: "Кисель Черника-Вишня",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "12.11.2014",
                    number: "414Ц04933/6",
                    customer: "СоюзАгроПром ПО ООО",
                    name: "Соки без ТМ 3 л (в ассортименте)",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    status: "closed",
                },
                {
                    date: "12.11.2014",
                    number: "414Ц04609",
                    customer: "Авангард ООО",
                    name: "Крекер, печенье (в ассортименте)",
                    manager: "Шестакова С.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "12.11.2014",
                    number: "414Ц04978",
                    customer: "Акульчев ТД ООО",
                    name: "Транспортные этикетки (в ассортименте)",
                    manager: "Гараева Л.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "12.11.2014",
                    number: "414Ц04877",
                    customer: "Абхим ПК ООО",
                    name: "Жидкое мыло 500 мл антибактериальное",
                    manager: "Дмитриева Н.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "12.11.2014",
                    number: "414Ц04726",
                    customer: "Абхим ПК ООО",
                    name: "Жидкое мыло 5 л антибактериальное",
                    manager: "Дмитриева Н.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "12.11.2014",
                    number: "414-04904",
                    customer: "Птицефабрика Пермская ОАО",
                    name: "Сервелат Коньячный п/к",
                    manager: "Шестакова С.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "12.11.2014",
                    number: "414Ц04879",
                    customer: "Санин ИП",
                    name: "Полуфабрикаты (в ассортименте)",
                    manager: "Дмитриева Н.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "12.11.2014",
                    number: "414М05005",
                    customer: "Артлайф ООО",
                    name: "БАДы (в ассортименте)",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "13.11.2014",
                    number: "414Ц04993",
                    customer: "Пищехимпродукт ПКП ООО",
                    name: "ТМ Абрико Аджика 120 г",
                    manager: "Шестакова С.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "13.11.2014",
                    number: "414Ц05036",
                    customer: "Тимнар ООО",
                    name: "Сок Гранатовый Премиум 1 л (комплект)",
                    manager: "Лотфуллина Э.",
                    master: "Галиева В.",
                    status: "closed",
                },
                {
                    date: "13.11.2014",
                    number: "414Ц05033",
                    customer: "Пищехимпродукт ПКП ООО",
                    name: "Варенье ТМ Абрико 390 г (в ассортименте)",
                    manager: "Шестакова С.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "13.11.2014",
                    number: "414Ц04898/1",
                    customer: "Сания ООО",
                    name: "Наршараб гранатовый 130 г (эт.)",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    status: "closed",
                },
                {
                    date: "13.11.2014",
                    number: "414Ц04898/5",
                    customer: "Сания ООО",
                    name: "Наршараб гранатовый 130 г (к/эт.)",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    status: "closed",
                },
                {
                    date: "13.11.2014",
                    number: "414Ц04308",
                    customer: "КФХ Семенов В.О.",
                    name: "напитки Саврушка 1,5 л (в ассортименте)",
                    manager: "Шестакова С.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "17.11.2014",
                    number: "414Ц05092",
                    customer: "Пищехимпродукт ПКП ООО",
                    name: "ТМ Абрико Маша и медведь Джем Клубника, Малина",
                    manager: "Шестакова С.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "17.11.2014",
                    number: "414Ц05059",
                    customer: "Пищехимпродукт ПКП ООО",
                    name: "Мед Д (цветочный)",
                    manager: "Шестакова С.",
                    master: "",
                    status: "agreement",
                },
                {
                    date: "17.11.2014",
                    number: "414Ц04860",
                    customer: "КФХ Семенов В.О.",
                    name: "Напитки Саврушка 0,5 л (в ассортименте)",
                    manager: "Шестакова С.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "17.11.2014",
                    number: "414М05001",
                    customer: "Артлайф ООО",
                    name: "Взвар Абитэль 100 мл, Взвар Гепатон-3 100 мл",
                    manager: "Лотфуллина Э.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "18.11.2014",
                    number: "414Ц05105/3",
                    customer: "ИКЕА Индастри Вятка ООО",
                    name: "Стикер черный",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    status: "closed",
                },
                {
                    date: "19.11.2014",
                    number: "414М05012",
                    customer: "Артлайф ООО",
                    name: "БАДы (в ассортименте)",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "20.11.2014",
                    number: "414Ц05158",
                    customer: "Сарман икмеге ООО",
                    name: "Х/булочные изделия (в ассортименте)",
                    manager: "Дмитриева Н.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "21.11.2014",
                    number: "414Ц05141/1",
                    customer: "Артлайф ООО",
                    name: "БАДы для Индии (в ассортименте)",
                    manager: "Лотфуллина Э.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "21.11.2014",
                    number: "414Ц04808",
                    customer: "Горячеключевская Пчеловодная Компания",
                    name: "Логотип Медовая Кубань",
                    manager: "Попова Е.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "24.11.2014",
                    number: "414Ц05141/2",
                    customer: "Артлайф ООО",
                    name: "Персифен 90 кап (Индия)",
                    manager: "Лотфуллина Э.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "24.11.2014",
                    number: "414Ц05263",
                    customer: "Черногорский КК ООО",
                    name: "Кондитерские изделия (в ассортименте)",
                    manager: "Попова Е.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "25.11.2014",
                    number: "414Ц05242",
                    customer: "Завод электрощитового оборудования",
                    name: "Стикеры номера с 10 по 14",
                    manager: "Шестакова С.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "25.11.2014",
                    number: "414Ц05249",
                    customer: "Завод электрощитового оборудования",
                    name: "Корпус щита этажного 7/1В (динрейка и спецпланка)",
                    manager: "Шестакова С.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "26.11.2014",
                    number: "414Ц05320",
                    customer: "Пищехимпродукт ПКП ООО",
                    name: "Варенье Вишневое ТМ Велада",
                    manager: "Шестакова С.",
                    master: "",
                    status: "agreement",
                },
                {
                    date: "27.11.2014",
                    number: "414-05337",
                    customer: "Татхимфармпрепараты ОАО",
                    name: "Таспир 300 мг",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "closed",
                },
                {
                    date: "27.11.2014",
                    number: "414А05344",
                    customer: "Диамторг ООО",
                    name: "Спреи Bruno и Kiss (в ассортименте) ПРОБА",
                    manager: "Шестакова С.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "27.11.2014",
                    number: "414А05329",
                    customer: "Диамторг ООО",
                    name: "Шампуни Kiss (комплекты в ассортименте) ПРОБА",
                    manager: "Шестакова С.",
                    master: "",
                    status: "closed",
                },
                {
                    date: "27.11.2014",
                    number: "414А05346",
                    customer: "Диамторг ООО",
                    name: "Шампуни Bruno (комплекты в ассортименте) ПРОБА",
                    manager: "Шестакова С.",
                    master: "",
                    status: "closed",
                },
            ],
            
            "designer": "Сергеев Р.",
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
                  { name: '107',
                     color: '#F9E526'
                  },
                  { name: '108',
                     color: '#F9DD16'
                  },
                  { name: '109',
                     color: '#F9D616'
                  },
                  { name: '110',
                     color: '#D8B511'
                  },
                  { name: '111',
                     color: '#AA930A'
                  },
                  { name: '112',
                     color: '#99840A'
                  },
                  { name: '113',
                     color: '#F9E55B'
                  },
                  { name: '114',
                     color: '#F9E24C'
                  },
                  { name: '115',
                     color: '#F9E04C'
                  },
                  { name: '116',
                     color: '#FCD116'
                  },
                  { name: '117',
                     color: '#C6A00C'
                  },
                  { name: '118',
                     color: '#AA8E0A'
                  },
                  { name: '119',
                     color: '#897719'
                  },
                  { name: '120',
                     color: '#F9E27F'
                  },
                  { name: '1205',
                     color: '#F7E8AA'
                  },
                  { name: '121',
                     color: '#F9E070'
                  },
                  { name: '1215',
                     color: '#F9E08C'
                  },
                  { name: '122',
                     color: '#FCD856'
                  },
                  { name: '1225',
                     color: '#FFCC49'
                  },
                  { name: '123',
                     color: '#FFC61E'
                  },
                  { name: '1235',
                     color: '#FCB514'
                  },
                  { name: '124',
                     color: '#E0AA0F'
                  },
                  { name: '1245',
                     color: '#BF910C'
                  },
                  { name: '125',
                     color: '#B58C0A'
                  },
                  { name: '1255',
                     color: '#A37F14'
                  },
                  { name: '126',
                     color: '#A38205'
                  },
                  { name: '1265',
                     color: '#7C6316'
                  },
                  { name: '127',
                     color: '#F4E287'
                  },
                  { name: '128',
                     color: '#F4DB60'
                  },
                  { name: '129',
                     color: '#F2D13D'
                  },
                  { name: '130',
                     color: '#EAAF0F'
                  },
                  { name: '131',
                     color: '#C6930A'
                  },
                  { name: '132',
                     color: '#9E7C0A'
                  },
                  { name: '133',
                     color: '#705B0A'
                  },
                  { name: '134',
                     color: '#FFD87F'
                  },
                  { name: '1345',
                     color: '#FFD691'
                  },
                  { name: '135',
                     color: '#FCC963'
                  },
                  { name: '1355',
                     color: '#FCCE87'
                  },
                  { name: '136',
                     color: '#FCBF49'
                  },
                  { name: '1365',
                     color: '#FCBA5E'
                  },
                  { name: '137',
                     color: '#FCA311'
                  },
                  { name: '1375',
                     color: '#F99B0C'
                  },
                  { name: '138',
                     color: '#D88C02'
                  },
                  { name: '1385',
                     color: '#CC7A02'
                  },
                  { name: '139',
                     color: '#AF7505'
                  },
                  { name: '1395',
                     color: '#996007'
                  },
                  { name: '140',
                     color: '#7A5B11'
                  },
                  { name: '1405',
                     color: '#6B4714'
                  },
                  { name: '141',
                     color: '#F2CE68'
                  },
                  { name: '142',
                     color: '#F2BF49'
                  },
                  { name: '143',
                     color: '#EFB22D'
                  },
                  { name: '144',
                     color: '#E28C05'
                  },
                  { name: '145',
                     color: '#C67F07'
                  },
                  { name: '146',
                     color: '#9E6B05'
                  },
                  { name: '147',
                     color: '#725E26'
                  },
                  { name: '148',
                     color: '#FFD69B'
                  },
                  { name: '1485',
                     color: '#FFB777'
                  },
                  { name: '149',
                     color: '#FCCC93'
                  },
                  { name: '1495',
                     color: '#FF993F'
                  },
                  { name: '150',
                     color: '#FCAD56'
                  },
                  { name: '1505',
                     color: '#F47C00'
                  },
                  { name: '151',
                     color: '#F77F00'
                  },
                  { name: '152',
                     color: '#DD7500'
                  },
                  { name: '1525',
                     color: '#B55400'
                  },
                  { name: '153',
                     color: '#BC6D0A'
                  },
                  { name: '1535',
                     color: '#8C4400'
                  },
                  { name: '154',
                     color: '#995905'
                  },
                  { name: '1545',
                     color: '#4C280F'
                  },
                  { name: '155',
                     color: '#F4DBAA'
                  },
                  { name: '1555',
                     color: '#F9BF9E'
                  },
                  { name: '156',
                     color: '#F2C68C'
                  },
                  { name: '1565',
                     color: '#FCA577'
                  },
                  { name: '157',
                     color: '#EDA04F'
                  },
                  { name: '1575',
                     color: '#FC8744'
                  },
                  { name: '158',
                     color: '#E87511'
                  },
                  { name: '1585',
                     color: '#F96B07'
                  },
                  { name: '159',
                     color: '#C66005'
                  },
                  { name: '1595',
                     color: '#D15B05'
                  },
                  { name: '160',
                     color: '#9E540A'
                  },
                  { name: '1605',
                     color: '#A04F11'
                  },
                  { name: '161',
                     color: '#633A11'
                  },
                  { name: '1615',
                     color: '#843F0F'
                  },
                  { name: '162',
                     color: '#F9C6AA'
                  },
                  { name: '1625',
                     color: '#F9A58C'
                  },
                  { name: '163',
                     color: '#FC9E70'
                  },
                  { name: '1635',
                     color: '#F98E6D'
                  },
                  { name: '164',
                     color: '#FC7F3F'
                  },
                  { name: '1645',
                     color: '#F97242'
                  },
                  { name: '165',
                     color: '#F96302'
                  },
                  { name: '1655',
                     color: '#F95602'
                  },
                  { name: '166',
                     color: '#DD5900'
                  },
                  { name: '1665',
                     color: '#DD4F05'
                  },
                  { name: '167',
                     color: '#BC4F07'
                  },
                  { name: '1675',
                     color: '#A53F0F'
                  },
                  { name: '168',
                     color: '#6D3011'
                  },
                  { name: '1685',
                     color: '#843511'
                  },
                  { name: '169',
                     color: '#F9BAAA'
                  },
                  { name: '170',
                     color: '#F98972'
                  },
                  { name: '171',
                     color: '#F9603A'
                  },
                  { name: '172',
                     color: '#F74902'
                  },
                  { name: '173',
                     color: '#D14414'
                  },
                  { name: '174',
                     color: '#933311'
                  },
                  { name: '175',
                     color: '#6D3321'
                  },
                  { name: '176',
                     color: '#F9AFAD'
                  },
                  { name: '1765',
                     color: '#F99EA3'
                  },
                  { name: '1767',
                     color: '#F9B2B7'
                  },
                  { name: '177',
                     color: '#F9827F'
                  },
                  { name: '1775',
                     color: '#F9848E'
                  },
                  { name: '1777',
                     color: '#FC6675'
                  },
                  { name: '178',
                     color: '#F95E59'
                  },
                  { name: '1785',
                     color: '#FC4F59'
                  },
                  { name: '1787',
                     color: '#F43F4F'
                  },
                  { name: '1788',
                     color: '#EF2B2D'
                  },
                  { name: '179',
                     color: '#E23D28'
                  },
                  { name: '1795',
                     color: '#D62828'
                  },
                  { name: '1797',
                     color: '#CC2D30'
                  },
                  { name: '180',
                     color: '#C13828'
                  },
                  { name: '1805',
                     color: '#AF2626'
                  },
                  { name: '1807',
                     color: '#A03033'
                  },
                  { name: '181',
                     color: '#7C2D23'
                  },
                  { name: '1810',
                     color: '#7C211E'
                  },
                  { name: '1817',
                     color: '#5B2D28'
                  },
                  { name: '182',
                     color: '#F9BFC1'
                  },
                  { name: '183',
                     color: '#FC8C99'
                  },
                  { name: '184',
                     color: '#FC5E72'
                  },
                  { name: '185',
                     color: '#E8112D'
                  },
                  { name: '186',
                     color: '#CE1126'
                  },
                  { name: '187',
                     color: '#AF1E2D'
                  },
                  { name: '188',
                     color: '#7C2128'
                  },
                  { name: '189',
                     color: '#FFA3B2'
                  },
                  { name: '1895',
                     color: '#FCBFC9'
                  },
                  { name: '190',
                     color: '#FC758E'
                  },
                  { name: '1905',
                     color: '#FC9BB2'
                  },
                  { name: '191',
                     color: '#F4476B'
                  },
                  { name: '1915',
                     color: '#F4547C'
                  },
                  { name: '192',
                     color: '#E5053A'
                  },
                  { name: '1925',
                     color: '#E00747'
                  },
                  { name: '193',
                     color: '#DB828C'
                  },
                  { name: '1935',
                     color: '#C10538'
                  },
                  { name: '194',
                     color: '#992135'
                  },
                  { name: '1945',
                     color: '#A80C35'
                  },
                  { name: '1955',
                     color: '#931638'
                  },
                  { name: '196',
                     color: '#F4C9C9'
                  },
                  { name: '197',
                     color: '#EF99A3'
                  },
                  { name: '198',
                     color: '#772D35'
                  },
                  { name: '199',
                     color: '#D81C3F'
                  },
                  { name: '200',
                     color: '#C41E3A'
                  },
                  { name: '201',
                     color: '#A32638'
                  },
                  { name: '202',
                     color: '#8C2633'
                  },
                  { name: '203',
                     color: '#F2AFC1'
                  },
                  { name: '204',
                     color: '#ED7A9E'
                  },
                  { name: '205',
                     color: '#E54C7C'
                  },
                  { name: '206',
                     color: '#D30547'
                  },
                  { name: '207',
                     color: '#BAAA9E'
                  },
                  { name: '208',
                     color: '#8E2344'
                  },
                  { name: '209',
                     color: '#75263D'
                  },
                  { name: '210',
                     color: '#FFA0BF'
                  },
                  { name: '211',
                     color: '#FF77A8'
                  },
                  { name: '212',
                     color: '#F94F8E'
                  },
                  { name: '213',
                     color: '#EA0F6B'
                  },
                  { name: '214',
                     color: '#CC0256'
                  },
                  { name: '215',
                     color: '#A50544'
                  },
                  { name: '216',
                     color: '#7C1E3F'
                  },
                  { name: '217',
                     color: '#F4BFD1'
                  },
                  { name: '218',
                     color: '#ED72AA'
                  },
                  { name: '219',
                     color: '#E22882'
                  },
                  { name: '220',
                     color: '#AA004F'
                  },
                  { name: '221',
                     color: '#930042'
                  },
                  { name: '222',
                     color: '#70193D'
                  },
                  { name: '223',
                     color: '#F993C4'
                  },
                  { name: '224',
                     color: '#F46BAF'
                  },
                  { name: '225',
                     color: '#ED2893'
                  },
                  { name: '226',
                     color: '#D60270'
                  },
                  { name: '227',
                     color: '#AD005B'
                  },
                  { name: '228',
                     color: '#8C004C'
                  },
                  { name: '229',
                     color: '#6D213F'
                  },
                  { name: '230',
                     color: '#FFA0CC'
                  },
                  { name: '231',
                     color: '#FC70BA'
                  },
                  { name: '232',
                     color: '#F43FA5'
                  },
                  { name: '233',
                     color: '#CE007C'
                  },
                  { name: '234',
                     color: '#AA0066'
                  },
                  { name: '235',
                     color: '#8E0554'
                  },
                  { name: '236',
                     color: '#F9AFD3'
                  },
                  { name: '2365',
                     color: '#F7C4D8'
                  },
                  { name: '237',
                     color: '#F484C4'
                  },
                  { name: '2375',
                     color: '#EA6BBF'
                  },
                  { name: '238',
                     color: '#ED4FAF'
                  },
                  { name: '2385',
                     color: '#DB28A5'
                  },
                  { name: '239',
                     color: '#E0219E'
                  },
                  { name: '2395',
                     color: '#C4008C'
                  },
                  { name: '240',
                     color: '#C40F89'
                  },
                  { name: '2405',
                     color: '#A8007A'
                  },
                  { name: '241',
                     color: '#AD0075'
                  },
                  { name: '2415',
                     color: '#9B0070'
                  },
                  { name: '242',
                     color: '#7C1C51'
                  },
                  { name: '2425',
                     color: '#87005B'
                  },
                  { name: '243',
                     color: '#F2BAD8'
                  },
                  { name: '244',
                     color: '#EDA0D3'
                  },
                  { name: '245',
                     color: '#E87FC9'
                  },
                  { name: '246',
                     color: '#CC00A0'
                  },
                  { name: '247',
                     color: '#B7008E'
                  },
                  { name: '248',
                     color: '#A3057F'
                  },
                  { name: '249',
                     color: '#7F2860'
                  },
                  { name: '250',
                     color: '#EDC4DD'
                  },
                  { name: '251',
                     color: '#E29ED6'
                  },
                  { name: '252',
                     color: '#D36BC6'
                  },
                  { name: '253',
                     color: '#AF23A5'
                  },
                  { name: '254',
                     color: '#A02D96'
                  },
                  { name: '255',
                     color: '#772D6B'
                  },
                  { name: '256',
                     color: '#E5C4D6'
                  },
                  { name: '2562',
                     color: '#D8A8D8'
                  },
                  { name: '2563',
                     color: '#D1A0CC'
                  },
                  { name: '2567',
                     color: '#BF93CC'
                  },
                  { name: '257',
                     color: '#D3A5C9'
                  },
                  { name: '2572',
                     color: '#C687D1'
                  },
                  { name: '2573',
                     color: '#BA7CBC'
                  },
                  { name: '2577',
                     color: '#AA72BF'
                  },
                  { name: '258',
                     color: '#9B4F96'
                  },
                  { name: '2582',
                     color: '#AA47BA'
                  },
                  { name: '2583',
                     color: '#9E4FA5'
                  },
                  { name: '2587',
                     color: '#8E47AD'
                  },
                  { name: '259',
                     color: '#72166B'
                  },
                  { name: '2592',
                     color: '#930FA5'
                  },
                  { name: '2593',
                     color: '#872B93'
                  },
                  { name: '2597',
                     color: '#66008C'
                  },
                  { name: '260',
                     color: '#681E5B'
                  },
                  { name: '2602',
                     color: '#820C8E'
                  },
                  { name: '2603',
                     color: '#70147A'
                  },
                  { name: '2607',
                     color: '#5B027A'
                  },
                  { name: '261',
                     color: '#5E2154'
                  },
                  { name: '2612',
                     color: '#701E72'
                  },
                  { name: '2613',
                     color: '#66116D'
                  },
                  { name: '2617',
                     color: '#560C70'
                  },
                  { name: '262',
                     color: '#542344'
                  },
                  { name: '2622',
                     color: '#602D59'
                  },
                  { name: '2623',
                     color: '#5B195E'
                  },
                  { name: '2627',
                     color: '#4C145E'
                  },
                  { name: '263',
                     color: '#E0CEE0'
                  },
                  { name: '2635',
                     color: '#C9ADD8'
                  },
                  { name: '264',
                     color: '#C6AADB'
                  },
                  { name: '2645',
                     color: '#B591D1'
                  },
                  { name: '265',
                     color: '#9663C4'
                  },
                  { name: '2655',
                     color: '#9B6DC6'
                  },
                  { name: '266',
                     color: '#6D28AA'
                  },
                  { name: '2665',
                     color: '#894FBF'
                  },
                  { name: '267',
                     color: '#59118E'
                  },
                  { name: '268',
                     color: '#4F2170'
                  },
                  { name: '2685',
                     color: '#56008C'
                  },
                  { name: '269',
                     color: '#442359'
                  },
                  { name: '2695',
                     color: '#44235E'
                  },
                  { name: '270',
                     color: '#BAAFD3'
                  },
                  { name: '2705',
                     color: '#AD9ED3'
                  },
                  { name: '2706',
                     color: '#D1CEDD'
                  },
                  { name: '2707',
                     color: '#BFD1E5'
                  },
                  { name: '2708',
                     color: '#AFBCDB'
                  },
                  { name: '271',
                     color: '#9E91C6'
                  },
                  { name: '2715',
                     color: '#937ACC'
                  },
                  { name: '2716',
                     color: '#A5A0D6'
                  },
                  { name: '2717',
                     color: '#A5BAE0'
                  },
                  { name: '2718',
                     color: '#5B77CC'
                  },
                  { name: '272',
                     color: '#8977BA'
                  },
                  { name: '2725',
                     color: '#7251BC'
                  },
                  { name: '2726',
                     color: '#6656BC'
                  },
                  { name: '2727',
                     color: '#5E68C4'
                  },
                  { name: '2728',
                     color: '#3044B5'
                  },
                  { name: '273',
                     color: '#38197A'
                  },
                  { name: '2735',
                     color: '#4F0093'
                  },
                  { name: '2736',
                     color: '#4930AD'
                  },
                  { name: '2738',
                     color: '#2D008E'
                  },
                  { name: '274',
                     color: '#2B1166'
                  },
                  { name: '2745',
                     color: '#3F0077'
                  },
                  { name: '2746',
                     color: '#3F2893'
                  },
                  { name: '2747',
                     color: '#1C146B'
                  },
                  { name: '2748',
                     color: '#1E1C77'
                  },
                  { name: '275',
                     color: '#260F54'
                  },
                  { name: '2755',
                     color: '#35006D'
                  },
                  { name: '2756',
                     color: '#332875'
                  },
                  { name: '2757',
                     color: '#141654'
                  },
                  { name: '2758',
                     color: '#192168'
                  },
                  { name: '276',
                     color: '#2B2147'
                  },
                  { name: '2765',
                     color: '#2B0C56'
                  },
                  { name: '2766',
                     color: '#2B265B'
                  },
                  { name: '2767',
                     color: '#14213D'
                  },
                  { name: '2768',
                     color: '#112151'
                  },
                  { name: '277',
                     color: '#B5D1E8'
                  },
                  { name: '278',
                     color: '#99BADD'
                  },
                  { name: '279',
                     color: '#6689CC'
                  },
                  { name: '280',
                     color: '#002B7F'
                  },
                  { name: '281',
                     color: '#002868'
                  },
                  { name: '282',
                     color: '#002654'
                  },
                  { name: '283',
                     color: '#9BC4E2'
                  },
                  { name: '284',
                     color: '#75AADB'
                  },
                  { name: '285',
                     color: '#3A75C4'
                  },
                  { name: '286',
                     color: '#0038A8'
                  },
                  { name: '287',
                     color: '#003893'
                  },
                  { name: '288',
                     color: '#00337F'
                  },
                  { name: '289',
                     color: '#002649'
                  },
                  { name: '290',
                     color: '#C4D8E2'
                  },
                  { name: '2905',
                     color: '#93C6E0'
                  },
                  { name: '291',
                     color: '#A8CEE2'
                  },
                  { name: '2915',
                     color: '#60AFDD'
                  },
                  { name: '292',
                     color: '#75B2DD'
                  },
                  { name: '2925',
                     color: '#008ED6'
                  },
                  { name: '293',
                     color: '#0051BA'
                  },
                  { name: '2935',
                     color: '#005BBF'
                  },
                  { name: '294',
                     color: '#003F87'
                  },
                  { name: '2945',
                     color: '#0054A0'
                  },
                  { name: '295',
                     color: '#00386B'
                  },
                  { name: '2955',
                     color: '#003D6B'
                  },
                  { name: '296',
                     color: '#002D47'
                  },
                  { name: '2965',
                     color: '#00334C'
                  },
                  { name: '297',
                     color: '#82C6E2'
                  },
                  { name: '2975',
                     color: '#BAE0E2'
                  },
                  { name: '298',
                     color: '#51B5E0'
                  },
                  { name: '2985',
                     color: '#51BFE2'
                  },
                  { name: '299',
                     color: '#00A3DD'
                  },
                  { name: '2995',
                     color: '#00A5DB'
                  },
                  { name: '300',
                     color: '#0072C6'
                  },
                  { name: '3005',
                     color: '#0084C9'
                  },
                  { name: '301',
                     color: '#005B99'
                  },
                  { name: '3015',
                     color: '#00709E'
                  },
                  { name: '302',
                     color: '#004F6D'
                  },
                  { name: '3025',
                     color: '#00546B'
                  },
                  { name: '303',
                     color: '#003F54'
                  },
                  { name: '3035',
                     color: '#004454'
                  },
                  { name: '304',
                     color: '#A5DDE2'
                  },
                  { name: '305',
                     color: '#70CEE2'
                  },
                  { name: '306',
                     color: '#00BCE2'
                  },
                  { name: '307',
                     color: '#007AA5'
                  },
                  { name: '308',
                     color: '#00607C'
                  },
                  { name: '309',
                     color: '#003F49'
                  },
                  { name: '310',
                     color: '#72D1DD'
                  },
                  { name: '3105',
                     color: '#7FD6DB'
                  },
                  { name: '311',
                     color: '#28C4D8'
                  },
                  { name: '3115',
                     color: '#2DC6D6'
                  },
                  { name: '312',
                     color: '#00ADC6'
                  },
                  { name: '3125',
                     color: '#00B7C6'
                  },
                  { name: '313',
                     color: '#0099B5'
                  },
                  { name: '3135',
                     color: '#009BAA'
                  },
                  { name: '314',
                     color: '#00829B'
                  },
                  { name: '3145',
                     color: '#00848E'
                  },
                  { name: '315',
                     color: '#006B77'
                  },
                  { name: '3155',
                     color: '#006D75'
                  },
                  { name: '316',
                     color: '#00494F'
                  },
                  { name: '3165',
                     color: '#00565B'
                  },
                  { name: '317',
                     color: '#C9E8DD'
                  },
                  { name: '318',
                     color: '#93DDDB'
                  },
                  { name: '319',
                     color: '#4CCED1'
                  },
                  { name: '320',
                     color: '#009EA0'
                  },
                  { name: '321',
                     color: '#008789'
                  },
                  { name: '322',
                     color: '#007272'
                  },
                  { name: '323',
                     color: '#006663'
                  },
                  { name: '324',
                     color: '#AADDD6'
                  },
                  { name: '3242',
                     color: '#87DDD1'
                  },
                  { name: '3245',
                     color: '#8CE0D1'
                  },
                  { name: '3248',
                     color: '#7AD3C1'
                  },
                  { name: '325',
                     color: '#56C9C1'
                  },
                  { name: '3252',
                     color: '#56D6C9'
                  },
                  { name: '3255',
                     color: '#47D6C1'
                  },
                  { name: '3258',
                     color: '#35C4AF'
                  },
                  { name: '326',
                     color: '#00B2AA'
                  },
                  { name: '3262',
                     color: '#00C1B5'
                  },
                  { name: '3265',
                     color: '#00C6B2'
                  },
                  { name: '3268',
                     color: '#00AF99'
                  },
                  { name: '327',
                     color: '#008C82'
                  },
                  { name: '3272',
                     color: '#00AA9E'
                  },
                  { name: '3275',
                     color: '#00B2A0'
                  },
                  { name: '3278',
                     color: '#009B84'
                  },
                  { name: '328',
                     color: '#007770'
                  },
                  { name: '3282',
                     color: '#008C82'
                  },
                  { name: '3285',
                     color: '#009987'
                  },
                  { name: '3288',
                     color: '#008270'
                  },
                  { name: '329',
                     color: '#006D66'
                  },
                  { name: '3292',
                     color: '#006056'
                  },
                  { name: '3295',
                     color: '#008272'
                  },
                  { name: '3298',
                     color: '#006B5B'
                  },
                  { name: '330',
                     color: '#005951'
                  },
                  { name: '3302',
                     color: '#00493F'
                  },
                  { name: '3305',
                     color: '#004F42'
                  },
                  { name: '3308',
                     color: '#004438'
                  },
                  { name: '331',
                     color: '#BAEAD6'
                  },
                  { name: '332',
                     color: '#A0E5CE'
                  },
                  { name: '333',
                     color: '#5EDDC1'
                  },
                  { name: '334',
                     color: '#00997C'
                  },
                  { name: '335',
                     color: '#007C66'
                  },
                  { name: '336',
                     color: '#006854'
                  },
                  { name: '337',
                     color: '#9BDBC1'
                  },
                  { name: '3375',
                     color: '#8EE2BC'
                  },
                  { name: '338',
                     color: '#7AD1B5'
                  },
                  { name: '3385',
                     color: '#54D8A8'
                  },
                  { name: '339',
                     color: '#00B28C'
                  },
                  { name: '3395',
                     color: '#00C993'
                  },
                  { name: '340',
                     color: '#009977'
                  },
                  { name: '3405',
                     color: '#00B27A'
                  },
                  { name: '341',
                     color: '#007A5E'
                  },
                  { name: '3415',
                     color: '#007C59'
                  },
                  { name: '342',
                     color: '#006B54'
                  },
                  { name: '3425',
                     color: '#006847'
                  },
                  { name: '343',
                     color: '#00563F'
                  },
                  { name: '3435',
                     color: '#024930'
                  },
                  { name: '344',
                     color: '#B5E2BF'
                  },
                  { name: '345',
                     color: '#96D8AF'
                  },
                  { name: '346',
                     color: '#70CE9B'
                  },
                  { name: '347',
                     color: '#009E60'
                  },
                  { name: '348',
                     color: '#008751'
                  },
                  { name: '349',
                     color: '#006B3F'
                  },
                  { name: '350',
                     color: '#234F33'
                  },
                  { name: '351',
                     color: '#B5E8BF'
                  },
                  { name: '352',
                     color: '#99E5B2'
                  },
                  { name: '353',
                     color: '#84E2A8'
                  },
                  { name: '354',
                     color: '#00B760'
                  },
                  { name: '355',
                     color: '#009E49'
                  },
                  { name: '356',
                     color: '#007A3D'
                  },
                  { name: '357',
                     color: '#215B33'
                  },
                  { name: '358',
                     color: '#AADD96'
                  },
                  { name: '359',
                     color: '#A0DB8E'
                  },
                  { name: '360',
                     color: '#60C659'
                  },
                  { name: '361',
                     color: '#1EB53A'
                  },
                  { name: '362',
                     color: '#339E35'
                  },
                  { name: '363',
                     color: '#3D8E33'
                  },
                  { name: '364',
                     color: '#3A7728'
                  },
                  { name: '365',
                     color: '#D3E8A3'
                  },
                  { name: '366',
                     color: '#C4E58E'
                  },
                  { name: '367',
                     color: '#AADD6D'
                  },
                  { name: '368',
                     color: '#5BBF21'
                  },
                  { name: '369',
                     color: '#56AA1C'
                  },
                  { name: '370',
                     color: '#568E14'
                  },
                  { name: '371',
                     color: '#566B21'
                  },
                  { name: '372',
                     color: '#D8ED96'
                  },
                  { name: '373',
                     color: '#CEEA82'
                  },
                  { name: '374',
                     color: '#BAE860'
                  },
                  { name: '375',
                     color: '#8CD600'
                  },
                  { name: '376',
                     color: '#7FBA00'
                  },
                  { name: '377',
                     color: '#709302'
                  },
                  { name: '378',
                     color: '#566314'
                  },
                  { name: '379',
                     color: '#E0EA68'
                  },
                  { name: '380',
                     color: '#D6E542'
                  },
                  { name: '381',
                     color: '#CCE226'
                  },
                  { name: '382',
                     color: '#BAD80A'
                  },
                  { name: '383',
                     color: '#A3AF07'
                  },
                  { name: '384',
                     color: '#939905'
                  },
                  { name: '385',
                     color: '#707014'
                  },
                  { name: '386',
                     color: '#E8ED60'
                  },
                  { name: '387',
                     color: '#E0ED44'
                  },
                  { name: '388',
                     color: '#D6E80F'
                  },
                  { name: '389',
                     color: '#CEE007'
                  },
                  { name: '390',
                     color: '#BAC405'
                  },
                  { name: '391',
                     color: '#9E9E07'
                  },
                  { name: '392',
                     color: '#848205'
                  },
                  { name: '393',
                     color: '#F2EF87'
                  },
                  { name: '3935',
                     color: '#F2ED6D'
                  },
                  { name: '394',
                     color: '#EAED35'
                  },
                  { name: '3945',
                     color: '#EFEA07'
                  },
                  { name: '395',
                     color: '#E5E811'
                  },
                  { name: '3955',
                     color: '#EDE211'
                  },
                  { name: '396',
                     color: '#E0E20C'
                  },
                  { name: '3965',
                     color: '#E8DD11'
                  },
                  { name: '397',
                     color: '#C1BF0A'
                  },
                  { name: '3975',
                     color: '#B5A80C'
                  },
                  { name: '398',
                     color: '#AFA80A'
                  },
                  { name: '3985',
                     color: '#998C0A'
                  },
                  { name: '399',
                     color: '#998E07'
                  },
                  { name: '3995',
                     color: '#6D6002'
                  },
                  { name: '400',
                     color: '#D1C6B5'
                  },
                  { name: '401',
                     color: '#C1B5A5'
                  },
                  { name: '402',
                     color: '#AFA593'
                  },
                  { name: '403',
                     color: '#998C7C'
                  },
                  { name: '404',
                     color: '#827566'
                  },
                  { name: '405',
                     color: '#6B5E4F'
                  },
                  { name: '406',
                     color: '#CEC1B5'
                  },
                  { name: '408',
                     color: '#A8998C'
                  },
                  { name: '409',
                     color: '#99897C'
                  },
                  { name: '410',
                     color: '#7C6D63'
                  },
                  { name: '411',
                     color: '#66594C'
                  },
                  { name: '412',
                     color: '#3D3028'
                  },
                  { name: '413',
                     color: '#C6C1B2'
                  },
                  { name: '414',
                     color: '#B5AFA0'
                  },
                  { name: '415',
                     color: '#A39E8C'
                  },
                  { name: '416',
                     color: '#8E8C7A'
                  },
                  { name: '417',
                     color: '#777263'
                  },
                  { name: '418',
                     color: '#605E4F'
                  },
                  { name: '419',
                     color: '#282821'
                  },
                  { name: '420',
                     color: '#D1CCBF'
                  },
                  { name: '421',
                     color: '#BFBAAF'
                  },
                  { name: '422',
                     color: '#AFAAA3'
                  },
                  { name: '423',
                     color: '#96938E'
                  },
                  { name: '424',
                     color: '#827F77'
                  },
                  { name: '425',
                     color: '#60605B'
                  },
                  { name: '426',
                     color: '#2B2B28'
                  },
                  { name: '427',
                     color: '#DDDBD1'
                  },
                  { name: '428',
                     color: '#D1CEC6'
                  },
                  { name: '429',
                     color: '#ADAFAA'
                  },
                  { name: '430',
                     color: '#919693'
                  },
                  { name: '431',
                     color: '#666D70'
                  },
                  { name: '432',
                     color: '#444F51'
                  },
                  { name: '433',
                     color: '#30383A'
                  },
                  { name: '434',
                     color: '#E0D1C6'
                  },
                  { name: '435',
                     color: '#D3BFB7'
                  },
                  { name: '436',
                     color: '#BCA59E'
                  },
                  { name: '437',
                     color: '#8C706B'
                  },
                  { name: '438',
                     color: '#593F3D'
                  },
                  { name: '439',
                     color: '#493533'
                  },
                  { name: '440',
                     color: '#3F302B'
                  },
                  { name: '441',
                     color: '#D1D1C6'
                  },
                  { name: '442',
                     color: '#BABFB7'
                  },
                  { name: '443',
                     color: '#A3A8A3'
                  },
                  { name: '444',
                     color: '#898E8C'
                  },
                  { name: '445',
                     color: '#565959'
                  },
                  { name: '446',
                     color: '#494C49'
                  },
                  { name: '447',
                     color: '#3F3F38'
                  },
                  { name: '448',
                     color: '#54472D'
                  },
                  { name: '4485',
                     color: '#604C11'
                  },
                  { name: '449',
                     color: '#544726'
                  },
                  { name: '4495',
                     color: '#877530'
                  },
                  { name: '450',
                     color: '#60542B'
                  },
                  { name: '4505',
                     color: '#A09151'
                  },
                  { name: '451',
                     color: '#ADA07A'
                  },
                  { name: '4515',
                     color: '#BCAD75'
                  },
                  { name: '452',
                     color: '#C4B796'
                  },
                  { name: '4525',
                     color: '#CCBF8E'
                  },
                  { name: '453',
                     color: '#D6CCAF'
                  },
                  { name: '4535',
                     color: '#DBCEA5'
                  },
                  { name: '454',
                     color: '#E2D8BF'
                  },
                  { name: '4545',
                     color: '#E5DBBA'
                  },
                  { name: '455',
                     color: '#665614'
                  },
                  { name: '456',
                     color: '#998714'
                  },
                  { name: '457',
                     color: '#B59B0C'
                  },
                  { name: '458',
                     color: '#DDCC6B'
                  },
                  { name: '459',
                     color: '#E2D67C'
                  },
                  { name: '460',
                     color: '#EADD96'
                  },
                  { name: '461',
                     color: '#EDE5AD'
                  },
                  { name: '462',
                     color: '#5B4723'
                  },
                  { name: '4625',
                     color: '#472311'
                  },
                  { name: '463',
                     color: '#755426'
                  },
                  { name: '4635',
                     color: '#8C5933'
                  },
                  { name: '464',
                     color: '#876028'
                  },
                  { name: '4645',
                     color: '#B28260'
                  },
                  { name: '465',
                     color: '#C1A875'
                  },
                  { name: '4655',
                     color: '#C49977'
                  },
                  { name: '466',
                     color: '#D1BF91'
                  },
                  { name: '4665',
                     color: '#D8B596'
                  },
                  { name: '467',
                     color: '#DDCCA5'
                  },
                  { name: '4675',
                     color: '#E5C6AA'
                  },
                  { name: '468',
                     color: '#E2D6B5'
                  },
                  { name: '4685',
                     color: '#EDD3BC'
                  },
                  { name: '469',
                     color: '#603311'
                  },
                  { name: '4695',
                     color: '#51261C'
                  },
                  { name: '470',
                     color: '#9B4F19'
                  },
                  { name: '4705',
                     color: '#7C513D'
                  },
                  { name: '471',
                     color: '#BC5E1E'
                  },
                  { name: '4715',
                     color: '#99705B'
                  },
                  { name: '472',
                     color: '#EAAA7A'
                  },
                  { name: '4725',
                     color: '#B5917C'
                  },
                  { name: '473',
                     color: '#F4C4A0'
                  },
                  { name: '4735',
                     color: '#CCAF9B'
                  },
                  { name: '474',
                     color: '#F4CCAA'
                  },
                  { name: '4745',
                     color: '#D8BFAA'
                  },
                  { name: '475',
                     color: '#F7D3B5'
                  },
                  { name: '4755',
                     color: '#E2CCBA'
                  },
                  { name: '476',
                     color: '#593D2B'
                  },
                  { name: '477',
                     color: '#633826'
                  },
                  { name: '478',
                     color: '#7A3F28'
                  },
                  { name: '479',
                     color: '#AF8970'
                  },
                  { name: '480',
                     color: '#D3B7A3'
                  },
                  { name: '481',
                     color: '#E0CCBA'
                  },
                  { name: '482',
                     color: '#E5D3C1'
                  },
                  { name: '483',
                     color: '#6B3021'
                  },
                  { name: '484',
                     color: '#9B301C'
                  },
                  { name: '485',
                     color: '#D81E05'
                  },
                  { name: '486',
                     color: '#ED9E84'
                  },
                  { name: '487',
                     color: '#EFB5A0'
                  },
                  { name: '488',
                     color: '#F2C4AF'
                  },
                  { name: '489',
                     color: '#F2D1BF'
                  },
                  { name: '490',
                     color: '#5B2626'
                  },
                  { name: '491',
                     color: '#752828'
                  },
                  { name: '492',
                     color: '#913338'
                  },
                  { name: '494',
                     color: '#F2ADB2'
                  },
                  { name: '495',
                     color: '#F4BCBF'
                  },
                  { name: '496',
                     color: '#F7C9C6'
                  },
                  { name: '497',
                     color: '#512826'
                  },
                  { name: '4975',
                     color: '#441E1C'
                  },
                  { name: '498',
                     color: '#6D332B'
                  },
                  { name: '4985',
                     color: '#844949'
                  },
                  { name: '499',
                     color: '#7A382D'
                  },
                  { name: '4995',
                     color: '#A56B6D'
                  },
                  { name: '500',
                     color: '#CE898C'
                  },
                  { name: '5005',
                     color: '#BC8787'
                  },
                  { name: '501',
                     color: '#EAB2B2'
                  },
                  { name: '5015',
                     color: '#D8ADA8'
                  },
                  { name: '502',
                     color: '#F2C6C4'
                  },
                  { name: '5025',
                     color: '#E2BCB7'
                  },
                  { name: '503',
                     color: '#F4D1CC'
                  },
                  { name: '5035',
                     color: '#EDCEC6'
                  },
                  { name: '504',
                     color: '#511E26'
                  },
                  { name: '505',
                     color: '#661E2B'
                  },
                  { name: '506',
                     color: '#7A2638'
                  },
                  { name: '507',
                     color: '#D8899B'
                  },
                  { name: '508',
                     color: '#E8A5AF'
                  },
                  { name: '509',
                     color: '#F2BABF'
                  },
                  { name: '510',
                     color: '#F4C6C9'
                  },
                  { name: '511',
                     color: '#602144'
                  },
                  { name: '5115',
                     color: '#4F213A'
                  },
                  { name: '512',
                     color: '#84216B'
                  },
                  { name: '5125',
                     color: '#754760'
                  },
                  { name: '513',
                     color: '#9E2387'
                  },
                  { name: '5135',
                     color: '#936B7F'
                  },
                  { name: '514',
                     color: '#D884BC'
                  },
                  { name: '5145',
                     color: '#AD8799'
                  },
                  { name: '515',
                     color: '#E8A3C9'
                  },
                  { name: '5155',
                     color: '#CCAFB7'
                  },
                  { name: '516',
                     color: '#F2BAD3'
                  },
                  { name: '5165',
                     color: '#E0C9CC'
                  },
                  { name: '517',
                     color: '#F4CCD8'
                  },
                  { name: '5175',
                     color: '#E8D6D1'
                  },
                  { name: '518',
                     color: '#512D44'
                  },
                  { name: '5185',
                     color: '#472835'
                  },
                  { name: '519',
                     color: '#63305E'
                  },
                  { name: '5195',
                     color: '#593344'
                  },
                  { name: '520',
                     color: '#703572'
                  },
                  { name: '5205',
                     color: '#8E6877'
                  },
                  { name: '521',
                     color: '#B58CB2'
                  },
                  { name: '5215',
                     color: '#B5939B'
                  },
                  { name: '522',
                     color: '#C6A3C1'
                  },
                  { name: '5225',
                     color: '#CCADAF'
                  },
                  { name: '523',
                     color: '#D3B7CC'
                  },
                  { name: '5235',
                     color: '#DDC6C4'
                  },
                  { name: '524',
                     color: '#E2CCD3'
                  },
                  { name: '5245',
                     color: '#E5D3CC'
                  },
                  { name: '525',
                     color: '#512654'
                  },
                  { name: '5255',
                     color: '#35264F'
                  },
                  { name: '526',
                     color: '#68217A'
                  },
                  { name: '5265',
                     color: '#493D63'
                  },
                  { name: '527',
                     color: '#7A1E99'
                  },
                  { name: '5275',
                     color: '#605677'
                  },
                  { name: '528',
                     color: '#AF72C1'
                  },
                  { name: '5285',
                     color: '#8C8299'
                  },
                  { name: '529',
                     color: '#CEA3D3'
                  },
                  { name: '5295',
                     color: '#B2A8B5'
                  },
                  { name: '530',
                     color: '#D6AFD6'
                  },
                  { name: '5305',
                     color: '#CCC1C6'
                  },
                  { name: '531',
                     color: '#E5C6DB'
                  },
                  { name: '5315',
                     color: '#DBD3D3'
                  },
                  { name: '532',
                     color: '#353842'
                  },
                  { name: '533',
                     color: '#353F5B'
                  },
                  { name: '534',
                     color: '#3A4972'
                  },
                  { name: '535',
                     color: '#9BA3B7'
                  },
                  { name: '536',
                     color: '#ADB2C1'
                  },
                  { name: '537',
                     color: '#C4C6CE'
                  },
                  { name: '538',
                     color: '#D6D3D6'
                  },
                  { name: '539',
                     color: '#003049'
                  },
                  { name: '5395',
                     color: '#02283A'
                  },
                  { name: '540',
                     color: '#00335B'
                  },
                  { name: '5405',
                     color: '#3F6075'
                  },
                  { name: '541',
                     color: '#003F77'
                  },
                  { name: '5415',
                     color: '#607C8C'
                  },
                  { name: '542',
                     color: '#6693BC'
                  },
                  { name: '5425',
                     color: '#8499A5'
                  },
                  { name: '543',
                     color: '#93B7D1'
                  },
                  { name: '5435',
                     color: '#AFBCBF'
                  },
                  { name: '544',
                     color: '#B7CCDB'
                  },
                  { name: '5445',
                     color: '#C4CCCC'
                  },
                  { name: '545',
                     color: '#C4D3DD'
                  },
                  { name: '5455',
                     color: '#D6D8D3'
                  },
                  { name: '546',
                     color: '#0C3844'
                  },
                  { name: '5463',
                     color: '#00353A'
                  },
                  { name: '5467',
                     color: '#193833'
                  },
                  { name: '547',
                     color: '#003F54'
                  },
                  { name: '5473',
                     color: '#26686D'
                  },
                  { name: '5477',
                     color: '#3A564F'
                  },
                  { name: '548',
                     color: '#004459'
                  },
                  { name: '5483',
                     color: '#609191'
                  },
                  { name: '5487',
                     color: '#667C72'
                  },
                  { name: '549',
                     color: '#5E99AA'
                  },
                  { name: '5493',
                     color: '#8CAFAD'
                  },
                  { name: '5497',
                     color: '#91A399'
                  },
                  { name: '550',
                     color: '#87AFBF'
                  },
                  { name: '5503',
                     color: '#AAC4BF'
                  },
                  { name: '5507',
                     color: '#AFBAB2'
                  },
                  { name: '551',
                     color: '#A3C1C9'
                  },
                  { name: '5513',
                     color: '#CED8D1'
                  },
                  { name: '5517',
                     color: '#C9CEC4'
                  },
                  { name: '552',
                     color: '#C4D6D6'
                  },
                  { name: '5523',
                     color: '#D6DDD6'
                  },
                  { name: '5527',
                     color: '#CED1C6'
                  },
                  { name: '553',
                     color: '#234435'
                  },
                  { name: '5535',
                     color: '#213D30'
                  },
                  { name: '554',
                     color: '#195E47'
                  },
                  { name: '5545',
                     color: '#4F6D5E'
                  },
                  { name: '555',
                     color: '#076D54'
                  },
                  { name: '5555',
                     color: '#779182'
                  },
                  { name: '556',
                     color: '#7AA891'
                  },
                  { name: '5565',
                     color: '#96AA99'
                  },
                  { name: '557',
                     color: '#A3C1AD'
                  },
                  { name: '5575',
                     color: '#AFBFAD'
                  },
                  { name: '558',
                     color: '#B7CEBC'
                  },
                  { name: '5585',
                     color: '#C4CEBF'
                  },
                  { name: '559',
                     color: '#C6D6C4'
                  },
                  { name: '5595',
                     color: '#D8DBCC'
                  },
                  { name: '560',
                     color: '#2B4C3F'
                  },
                  { name: '5605',
                     color: '#233A2D'
                  },
                  { name: '561',
                     color: '#266659'
                  },
                  { name: '5615',
                     color: '#546856'
                  },
                  { name: '562',
                     color: '#1E7A6D'
                  },
                  { name: '5625',
                     color: '#728470'
                  },
                  { name: '563',
                     color: '#7FBCAA'
                  },
                  { name: '5635',
                     color: '#9EAA99'
                  },
                  { name: '564',
                     color: '#05705E'
                  },
                  { name: '5645',
                     color: '#BCC1B2'
                  },
                  { name: '565',
                     color: '#BCDBCC'
                  },
                  { name: '5655',
                     color: '#C6CCBA'
                  },
                  { name: '566',
                     color: '#D1E2D3'
                  },
                  { name: '5665',
                     color: '#D6D6C6'
                  },
                  { name: '567',
                     color: '#265142'
                  },
                  { name: '569',
                     color: '#008772'
                  },
                  { name: '570',
                     color: '#7FC6B2'
                  },
                  { name: '571',
                     color: '#AADBC6'
                  },
                  { name: '572',
                     color: '#BCE2CE'
                  },
                  { name: '573',
                     color: '#CCE5D6'
                  },
                  { name: '574',
                     color: '#495928'
                  },
                  { name: '5743',
                     color: '#3F4926'
                  },
                  { name: '5747',
                     color: '#424716'
                  },
                  { name: '575',
                     color: '#547730'
                  },
                  { name: '5753',
                     color: '#5E663A'
                  },
                  { name: '5757',
                     color: '#6B702B'
                  },
                  { name: '576',
                     color: '#608E3A'
                  },
                  { name: '5763',
                     color: '#777C4F'
                  },
                  { name: '5767',
                     color: '#8C914F'
                  },
                  { name: '577',
                     color: '#B5CC8E'
                  },
                  { name: '5773',
                     color: '#9B9E72'
                  },
                  { name: '5777',
                     color: '#AAAD75'
                  },
                  { name: '578',
                     color: '#C6D6A0'
                  },
                  { name: '5783',
                     color: '#B5B58E'
                  },
                  { name: '5787',
                     color: '#C6C699'
                  },
                  { name: '579',
                     color: '#C9D6A3'
                  },
                  { name: '5793',
                     color: '#C6C6A5'
                  },
                  { name: '5797',
                     color: '#D3D1AA'
                  },
                  { name: '580',
                     color: '#D8DDB5'
                  },
                  { name: '5803',
                     color: '#D8D6B7'
                  },
                  { name: '5807',
                     color: '#E0DDBC'
                  },
                  { name: '581',
                     color: '#605E11'
                  },
                  { name: '5815',
                     color: '#494411'
                  },
                  { name: '582',
                     color: '#878905'
                  },
                  { name: '5825',
                     color: '#75702B'
                  },
                  { name: '583',
                     color: '#AABA0A'
                  },
                  { name: '5835',
                     color: '#9E9959'
                  },
                  { name: '584',
                     color: '#CED649'
                  },
                  { name: '5845',
                     color: '#B2AA70'
                  },
                  { name: '585',
                     color: '#DBE06B'
                  },
                  { name: '5855',
                     color: '#CCC693'
                  },
                  { name: '586',
                     color: '#E2E584'
                  },
                  { name: '5865',
                     color: '#D6CEA3'
                  },
                  { name: '587',
                     color: '#E8E89B'
                  },
                  { name: '5875',
                     color: '#E0DBB5'
                  },
                  { name: '600',
                     color: '#F4EDAF'
                  },
                  { name: '601',
                     color: '#F2ED9E'
                  },
                  { name: '602',
                     color: '#F2EA87'
                  },
                  { name: '603',
                     color: '#EDE85B'
                  },
                  { name: '604',
                     color: '#E8DD21'
                  },
                  { name: '605',
                     color: '#DDCE11'
                  },
                  { name: '606',
                     color: '#D3BF11'
                  },
                  { name: '607',
                     color: '#F2EABC'
                  },
                  { name: '608',
                     color: '#EFE8AD'
                  },
                  { name: '609',
                     color: '#EAE596'
                  },
                  { name: '610',
                     color: '#E2DB72'
                  },
                  { name: '611',
                     color: '#D6CE49'
                  },
                  { name: '612',
                     color: '#C4BA00'
                  },
                  { name: '613',
                     color: '#AFA00C'
                  },
                  { name: '614',
                     color: '#EAE2B7'
                  },
                  { name: '615',
                     color: '#E2DBAA'
                  },
                  { name: '616',
                     color: '#DDD69B'
                  },
                  { name: '617',
                     color: '#CCC47C'
                  },
                  { name: '618',
                     color: '#B5AA59'
                  },
                  { name: '619',
                     color: '#968C28'
                  },
                  { name: '620',
                     color: '#847711'
                  },
                  { name: '621',
                     color: '#D8DDCE'
                  },
                  { name: '622',
                     color: '#C1D1BF'
                  },
                  { name: '623',
                     color: '#A5BFAA'
                  },
                  { name: '624',
                     color: '#7FA08C'
                  },
                  { name: '625',
                     color: '#5B8772'
                  },
                  { name: '626',
                     color: '#21543F'
                  },
                  { name: '627',
                     color: '#0C3026'
                  },
                  { name: '628',
                     color: '#CCE2DD'
                  },
                  { name: '629',
                     color: '#B2D8D8'
                  },
                  { name: '630',
                     color: '#8CCCD3'
                  },
                  { name: '631',
                     color: '#54B7C6'
                  },
                  { name: '632',
                     color: '#00A0BA'
                  },
                  { name: '633',
                     color: '#007F99'
                  },
                  { name: '634',
                     color: '#00667F'
                  },
                  { name: '635',
                     color: '#BAE0E0'
                  },
                  { name: '636',
                     color: '#99D6DD'
                  },
                  { name: '637',
                     color: '#6BC9DB'
                  },
                  { name: '638',
                     color: '#00B5D6'
                  },
                  { name: '639',
                     color: '#00A0C4'
                  },
                  { name: '640',
                     color: '#008CB2'
                  },
                  { name: '641',
                     color: '#007AA5'
                  },
                  { name: '642',
                     color: '#D1D8D8'
                  },
                  { name: '643',
                     color: '#C6D1D6'
                  },
                  { name: '644',
                     color: '#9BAFC4'
                  },
                  { name: '645',
                     color: '#7796B2'
                  },
                  { name: '646',
                     color: '#5E82A3'
                  },
                  { name: '647',
                     color: '#26547C'
                  },
                  { name: '648',
                     color: '#00305E'
                  },
                  { name: '649',
                     color: '#D6D6D8'
                  },
                  { name: '650',
                     color: '#BFC6D1'
                  },
                  { name: '651',
                     color: '#9BAABF'
                  },
                  { name: '652',
                     color: '#6D87A8'
                  },
                  { name: '653',
                     color: '#335687'
                  },
                  { name: '654',
                     color: '#0F2B5B'
                  },
                  { name: '655',
                     color: '#0C1C47'
                  },
                  { name: '656',
                     color: '#D6DBE0'
                  },
                  { name: '657',
                     color: '#C1C9DD'
                  },
                  { name: '658',
                     color: '#A5AFD6'
                  },
                  { name: '659',
                     color: '#7F8CBF'
                  },
                  { name: '660',
                     color: '#5960A8'
                  },
                  { name: '661',
                     color: '#2D338E'
                  },
                  { name: '662',
                     color: '#0C1975'
                  },
                  { name: '663',
                     color: '#E2D3D6'
                  },
                  { name: '664',
                     color: '#D8CCD1'
                  },
                  { name: '665',
                     color: '#C6B5C4'
                  },
                  { name: '666',
                     color: '#A893AD'
                  },
                  { name: '667',
                     color: '#7F6689'
                  },
                  { name: '668',
                     color: '#664975'
                  },
                  { name: '669',
                     color: '#472B59'
                  },
                  { name: '670',
                     color: '#F2D6D8'
                  },
                  { name: '671',
                     color: '#EFC6D3'
                  },
                  { name: '672',
                     color: '#EAAAC4'
                  },
                  { name: '673',
                     color: '#E08CB2'
                  },
                  { name: '674',
                     color: '#D36B9E'
                  },
                  { name: '675',
                     color: '#BC3877'
                  },
                  { name: '676',
                     color: '#A00054'
                  },
                  { name: '677',
                     color: '#EDD6D6'
                  },
                  { name: '678',
                     color: '#EACCCE'
                  },
                  { name: '679',
                     color: '#E5BFC6'
                  },
                  { name: '680',
                     color: '#D39EAF'
                  },
                  { name: '681',
                     color: '#B7728E'
                  },
                  { name: '682',
                     color: '#A05175'
                  },
                  { name: '683',
                     color: '#7F284F'
                  },
                  { name: '684',
                     color: '#EFCCCE'
                  },
                  { name: '685',
                     color: '#EABFC4'
                  },
                  { name: '686',
                     color: '#E0AABA'
                  },
                  { name: '687',
                     color: '#C9899E'
                  },
                  { name: '688',
                     color: '#B26684'
                  },
                  { name: '689',
                     color: '#934266'
                  },
                  { name: '690',
                     color: '#702342'
                  },
                  { name: '691',
                     color: '#EFD1C9'
                  },
                  { name: '692',
                     color: '#E8BFBA'
                  },
                  { name: '693',
                     color: '#DBA8A5'
                  },
                  { name: '694',
                     color: '#C98C8C'
                  },
                  { name: '695',
                     color: '#B26B70'
                  },
                  { name: '696',
                     color: '#8E4749'
                  },
                  { name: '697',
                     color: '#7F383A'
                  },
                  { name: '698',
                     color: '#F7D1CC'
                  },
                  { name: '699',
                     color: '#F7BFBF'
                  },
                  { name: '700',
                     color: '#F2A5AA'
                  },
                  { name: '701',
                     color: '#E8878E'
                  },
                  { name: '702',
                     color: '#D6606D'
                  },
                  { name: '703',
                     color: '#B73844'
                  },
                  { name: '704',
                     color: '#9E2828'
                  },
                  { name: '705',
                     color: '#F9DDD6'
                  },
                  { name: '706',
                     color: '#FCC9C6'
                  },
                  { name: '707',
                     color: '#FCADAF'
                  },
                  { name: '708',
                     color: '#F98E99'
                  },
                  { name: '709',
                     color: '#F26877'
                  },
                  { name: '710',
                     color: '#E04251'
                  },
                  { name: '711',
                     color: '#D12D33'
                  },
                  { name: '712',
                     color: '#FFD3AA'
                  },
                  { name: '713',
                     color: '#F9C9A3'
                  },
                  { name: '714',
                     color: '#F9BA82'
                  },
                  { name: '715',
                     color: '#FC9E49'
                  },
                  { name: '716',
                     color: '#F28411'
                  },
                  { name: '717',
                     color: '#D36D00'
                  },
                  { name: '718',
                     color: '#BF5B00'
                  },
                  { name: '719',
                     color: '#F4D1AF'
                  },
                  { name: '720',
                     color: '#EFC49E'
                  },
                  { name: '721',
                     color: '#E8B282'
                  },
                  { name: '722',
                     color: '#D18E54'
                  },
                  { name: '723',
                     color: '#BA7530'
                  },
                  { name: '724',
                     color: '#8E4905'
                  },
                  { name: '725',
                     color: '#753802'
                  },
                  { name: '726',
                     color: '#EDD3B5'
                  },
                  { name: '727',
                     color: '#E2BF9B'
                  },
                  { name: '728',
                     color: '#D3A87C'
                  },
                  { name: '729',
                     color: '#C18E60'
                  },
                  { name: '730',
                     color: '#AA753F'
                  },
                  { name: '731',
                     color: '#723F0A'
                  },
                  { name: '732',
                     color: '#60330A'
                  },
                  { name: '801',
                     color: '#00AACC'
                  },
                  { name: '802',
                     color: '#60DD49'
                  },
                  { name: '803',
                     color: '#FFED38'
                  },
                  { name: '804',
                     color: '#FF9338'
                  },
                  { name: '805',
                     color: '#F95951'
                  },
                  { name: '806',
                     color: '#FF0093'
                  },
                  { name: '807',
                     color: '#D6009E'
                  },
                  { name: '808',
                     color: '#00B59B'
                  },
                  { name: '809',
                     color: '#DDE00F'
                  },
                  { name: '810',
                     color: '#FFCC1E'
                  },
                  { name: '811',
                     color: '#FF7247'
                  },
                  { name: '812',
                     color: '#FC2366'
                  },
                  { name: '813',
                     color: '#E50099'
                  },
                  { name: '814',
                     color: '#8C60C1'
                  },
                  { name: 'Yellow',
                     color: '#FFDD00'
                  },
                  { name: 'Yellow 012',
                     color: '#FFD700'
                  },
                  { name: 'Orange 021',
                     color: '#FF5000'
                  },
                  { name: 'Warm Red',
                     color: '#FF4338'
                  },
                  { name: 'Red 032',
                     color: '#F7323F'
                  },
                  { name: 'Rubine Red',
                     color: '#D60057'
                  },
                  { name: 'Rhadamine Red',
                     color: '#E70095'
                  },
                  { name: 'Purple',
                     color: '#C227B9'
                  },
                  { name: 'Violet',
                     color: '#430098'
                  },
                  { name: 'Blue 072',
                     color: '#060E9F'
                  },
                  { name: 'Reflex Blue',
                     color: '#001689'
                  },
                  { name: 'Process Blue',
                     color: '#0082CA'
                  },
                  { name: 'Green',
                     color: '#00A887'
                  },
                  { name: 'Black',
                     color: '#2E2A25'
                  },
                  { name: 'Yellow 0131',
                     color: '#F5F0A1'
                  },
                  { name: 'Red 0331',
                     color: '#FFAFBB'
                  },
                  { name: 'Magenta 0521',
                     color: '#F5B2DB'
                  },
                  { name: 'Violet 0631',
                     color: '#C39BDE'
                  },
                  { name: 'Blue 0821',
                     color: '#72D0EB'
                  },
                  { name: 'Green 0921',
                     color: '#9BE7D8'
                  },
                  { name: 'Black 0961',
                     color: '#A0968C'
                  },
                  { name: 'Warm Gray 1',
                     color: '#D8D1CA'
                  },
                  { name: 'Warm Gray 2',
                     color: '#CDC3BB'
                  },
                  { name: 'Warm Gray 3',
                     color: '#C1B8AF'
                  },
                  { name: 'Warm Gray 4',
                     color: '#B7ADA5'
                  },
                  { name: 'Warm Gray 5',
                     color: '#AEA299'
                  },
                  { name: 'Warm Gray 6',
                     color: '#A79C94'
                  },
                  { name: 'Warm Gray 7',
                     color: '#978B82'
                  },
                  { name: 'Warm Gray 8',
                     color: '#8E8279'
                  },
                  { name: 'Warm Gray 9',
                     color: '#86786F'
                  },
                  { name: 'Warm Gray 10',
                     color: '#7B6E66'
                  },
                  { name: 'Warm Gray 11',
                     color: '#706259'
                  },
                  { name: 'Cool Gray 1',
                     color: '#DBD9D6'
                  },
                  { name: 'Cool Gray 2',
                     color: '#D2D0CD'
                  },
                  { name: 'Cool Gray 3',
                     color: '#CAC8C8'
                  },
                  { name: 'Cool Gray 4',
                     color: '#BDBBBB'
                  },
                  { name: 'Cool Gray 5',
                     color: '#B3B2B1'
                  },
                  { name: 'Cool Gray 6',
                     color: '#A9A8A9'
                  },
                  { name: 'Cool Gray 7',
                     color: '#99999A'
                  },
                  { name: 'Cool Gray 8',
                     color: '#8A8A8D'
                  },
                  { name: 'Cool Gray 9',
                     color: '#77777A'
                  },
                  { name: 'Cool Gray 10',
                     color: '#646569'
                  },
                  { name: 'Cool Gray 11',
                     color: '#55565A'
                  },
                  { name: 'Black 2',
                     color: '#342E1F'
                  },
                  { name: 'Black 3',
                     color: '#222720'
                  },
                  { name: 'Black 4',
                     color: '#31251C'
                  },
                  { name: 'Black 5',
                     color: '#3F2B2F'
                  },
                  { name: 'Black 6',
                     color: '#111820'
                  },
                  { name: 'Black 7',
                     color: '#3E3935'
                  },
            ],
		};
        $scope.insideController = function() {
            debugger;
        };
	}]);
