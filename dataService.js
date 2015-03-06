﻿angular.module('indigo').factory('Orders', function() {
    var orders = [
                {
                    date: new Date("Wed Mar 4 2015 12:48:00 GMT+0300"),
                    adopted: new Date("Wed Mar 4 2015 13:18:00 GMT+0300"),
                    send: "",
                    agreed: "",
                    completed: "",
                    id: "000",
                    comments: "убираем знаки рст, добровольная сертификация,  добавляем ЕАС",
                    number: "115Ц00658/5",
                    customer: "Сания ООО",
                    name: "Мед и паста шоколадная (в ассортименте)",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    status: "job",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    print_mashine: "6000",
                    label_type: "self-label",
                    material_type: "pew",
                    material_width: "215",
                    cut_type: "ready",
                    cut_number: "1100207",
                    size_x: "95",
                    size_y: "42",
                    roll_method: "hand", 
                    roll_type: "outside", 
                    roll_direct: "",
                    lak: "selected",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "205",
                    print_size_Y: "952.56",
                    quantity_X: "2",
                    quantity_Y: "21",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "Мед натуральный цветочный с арахисом 250 г",
					placement: "",
					source: "",
					run: "d4300048",
                       file_path: "Y:\\d4\\300\\048\\med_arahis.eps",
					status: "job",
				},
				{
					name: "Мед натуральный цветочный с фисташками 250 г",
					placement: "",
					source: "",
					run: "d4300048",
                       file_path: "Y:\\d4\\300\\048\\med_fistash.eps",
					status: "job",
				},
				{
					name: "Паста шоколадно-ореховая с кунжутом 225 г",
					placement: "d4300065",
					source: "d4300048",
					run: "",
                       file_path: "Y:\\d4\\300\\065\\pasta_kungut.eps",
					status: "job",
				},
				{
					name: "Паста шоколадно-ореховая с тыквой 225 г",
					placement: "d4300065",
					source: "d4300048",
					run: "",
                       file_path: "Y:\\d4\\300\\065\\pasta_tikva.eps",
					status: "job",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Sat Jan 31 2015 13:31:00 GMT+0300"),
                    adopted: new Date("Mon Feb 02 2015 09:00:00 GMT+0300"),
                    send: new Date("Mon Feb 02 2015 15:49:00 GMT+0300"),
                    agreed: new Date("Tue Feb 03 2015 15:52:00 GMT+0300"),
                    completed: new Date("Tue Feb 03 2015 15:53:00 GMT+0300"),
                    id: "001",
                    comments: "Файлы находятся в \\192.168.0.11\ExampleJob_8TB\Design\Деликатесы.   Илья",
                    number: "115Ц00351",
                    customer: "Челны-Бройлер ООО",
                    name: "мясные деликатесы (в ассортименте)",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "pps",
                    material_width: "333",
                    cut_type: "ready",
                    cut_number: "2152072",
                    size_x: "80",
                    size_y: "80",
                    roll_method: "hand", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "warnish",
                    lak: "solid",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "260",
                    print_size_Y: "924",
                    quantity_X: "3",
                    quantity_Y: "11",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "мясо цыпленка-бройлера прессованное с сыром",
					placement: "d1174100",
					source: "вложение",
					run: "",
					status: "completed",
				},
				{
					name: "мясо цыпленка-бройлера прессованное",
					placement: "d1174101",
					source: "вложение",
					run: "",
					status: "completed",
				},
			],
                    inks1: [ 
                        { name: 'Opaque1',
                            used: true
                        },
                        { name: 'Cyan1',
                            used: true
                        },
                        { name: 'Magenta1',
                            used: false
                        },
                        { name: 'Yellow1',
                            used: false
                        },
                        { name: 'Black1',
                            used: true
                        },
                        { name: 'Orange1',
                            used: false
                        },
                        { name: 'Violet1',
                            used: true
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Sat Jan 31 2015 13:31:00 GMT+0300"),
                    adopted: new Date("Mon Feb 02 2015 09:00:00 GMT+0300"),
                    send: new Date("Mon Feb 02 2015 13:16:00 GMT+0300"),
                    agreed: new Date("Tue Feb 03 2015 15:52:00 GMT+0300"),
                    completed: new Date("Tue Feb 03 2015 15:53:00 GMT+0300"),
                    id: "002",
                    comments: "выборочный лак, только окно под дату. Файлы находятся в \\192.168.0.11\ExampleJob_8TB\Design\Деликатесы.    Илья",
                    number: "115Ц00353",
                    customer: "Челны-Бройлер ООО",
                    name: "мясные деликатесы (в ассортименте)",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "pps",
                    material_width: "333",
                    cut_type: "ready",
                    cut_number: "1152466",
                    size_x: "100",
                    size_y: "65",
                    roll_method: "hand", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "warnish",
                    lak: "selected",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "314",
                    print_size_Y: "952",
                    quantity_X: "3",
                    quantity_Y: "14",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "хлеб Аппетитный с сыром",
					placement: "d1174098",
					source: "вложение",
					run: "",
					status: "completed",
				},
				{
					name: "буженина Купеческая",
					placement: "d1174099",
					source: "вложение",
					run: "",
					status: "completed",
				},
			],
                    inks1: [ 
                        { name: 'Opaque1',
                            used: true
                        },
                        { name: 'Cyan1',
                            used: true
                        },
                        { name: 'Magenta1',
                            used: false
                        },
                        { name: 'Yellow1',
                            used: false
                        },
                        { name: 'Black1',
                            used: true
                        },
                        { name: 'Orange1',
                            used: false
                        },
                        { name: 'Violet1',
                            used: true
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Fri Dec 02 2014 00:00:00 GMT+0300"),
                    id: "003",
                    number: "414Ц05395",
                    customer: "Птицефабрика Пермская ОАО",
                    name: "Стикер EAC",
                    manager: "Шестакова С.",
                    master: "",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Mon Dec 05 2014 00:00:00 GMT+0300"),
                    id: "004",
                    number: "414М05449",
                    customer: "Артлайф ООО",
                    name: "Токсфайтер Люкс 300 г",
                    manager: "Лотфуллина Э.",
                    master: "",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Mon Dec 05 2014 00:00:00 GMT+0300"),
                    id: "005",
                    number: "414А05458",
                    customer: "Мирзаев ИП",
                    name: "Зелень (в ассортименте)",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    designer: "Сергеев Р.",
                    status: "deleted",
                },
                {
                    date: new Date("Mon Dec 05 2014 00:00:00 GMT+0300"),
                    id: "006",
                    number: "414А05462",
                    customer: "ИКЕА Индастри Вятка ООО",
                    name: "Стикер серый",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Wed Dec 10 2014 00:00:00 GMT+0300"),
                    id: "007",
                    number: "414Ц05459",
                    customer: "Аком ЗАО",
                    name: "Renault 70, Renault 60, Renault 70",
                    manager: "Лотфуллина Э.",
                    master: "",
                    designer: "Сергеев Р.",
                    status: "agreement",
                },
                {
                    date: new Date("Thu Dec 11 2014 00:00:00 GMT+0300"),
                    id: "008",
                    number: "414Ц05456",
                    customer: "Нижнекамский хлебокомбинат ОАО",
                    name: "Кекс Мраморный 300 г",
                    manager: "Лотфуллина Э.",
                    master: "",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Thu Dec 11 2014 00:00:00 GMT+0300"),
                    id: "009",
                    number: "414Ц05528",
                    customer: "Компания Караван ООО",
                    name: "Арахис, фисташки, коктейль Баварский (Пивная серия)",
                    manager: "Костюкова В.",
                    master: "Воронцова М.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Fri Dec 12 2014 00:00:00 GMT+0300"),
                    id: "010",
                    number: "414Ц05472",
                    customer: "Современные полимерные технологии ООО",
                    name: "жидкое мыло Чистые руки",
                    manager: "Шестакова С.",
                    master: "",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Fri Dec 12 2014 00:00:00 GMT+0300"),
                    id: "011",
                    number: "414Ц05426",
                    customer: "Нижнекамский хлебокомбинат ОАО",
                    name: "Торты (в ассортименте)",
                    manager: "Лотфуллина Э.",
                    master: "Галиева В.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Fri Dec 12 2014 00:00:00 GMT+0300"),
                    id: "012",
                    number: "414Ц05597",
                    customer: "РК-АЛКО",
                    name: "стикеры на водку Царская чарка (в ассортименте)",
                    manager: "Попова Е.",
                    master: "Галиева В.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Fri Dec 12 2014 00:00:00 GMT+0300"),
                    id: "013",
                    number: "414М05609",
                    customer: "Артлайф ООО",
                    name: "Кисель Сливовый 300 г",
                    manager: "Лотфуллина Э.",
                    master: "Галиева В.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Wed Dec 17 2014 00:00:00 GMT+0300"),
                    id: "014",
                    number: "414Ц05642",
                    customer: "Нижнекамский хлебокомбинат ОАО",
                    name: "хлеб Раменский 0,5 кг",
                    manager: "Лотфуллина Э.",
                    master: "Галиева В.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Thu Dec 18 2014 00:00:00 GMT+0300"),
                    id: "015",
                    number: "414Ц05691",
                    customer: "СоюзАгроПром ПО ООО",
                    name: "Закуска Новинка (на казахском языке)",
                    manager: "Сабитова Р.",
                    master: "Воронцова М.",
                    designer: "Сергеев Р.",
                    status: "agreement",
                },
                {
                    date: new Date("Thu Dec 18 2014 00:00:00 GMT+0300"),
                    id: "016",
                    number: "414Ц05607",
                    customer: "Нижнекамский хлебокомбинат ОАО",
                    name: "Мука пшеничная 2,0 кг",
                    manager: "Лотфуллина Э.",
                    master: "",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Thu Dec 18 2014 00:00:00 GMT+0300"),
                    id: "017",
                    number: "414М05618",
                    customer: "Артлайф ООО",
                    name: "Арголайф (на украинском языке)",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Fri Dec 19 2014 00:00:00 GMT+0300"),
                    id: "018",
                    number: "414Ц05694",
                    customer: "Кураж ООО Издательский дом",
                    name: "Био Аква Спорт",
                    manager: "Костюкова В.",
                    master: "Воронцова М.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Mon Dec 22 2014 00:00:00 GMT+0300"),
                    id: "019",
                    number: "414Ц05181",
                    customer: "Пищехимпродукт ПКП ООО",
                    name: "Варенье ТМ Абрико (в ассортименте)",
                    manager: "Шестакова С.",
                    master: "Воронцова М.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Mon Dec 22 2014 00:00:00 GMT+0300"),
                    id: "020",
                    number: "414Ц04787",
                    customer: "Эстель ООО",
                    name: "стикер п/ф",
                    manager: "Костюкова В.",
                    master: "Воронцова М.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Tue Dec 23 2014 00:00:00 GMT+0300"),
                    id: "021",
                    number: "414Ц05762/1 ",
                    customer: "Татхимфармпрепараты ОАО",
                    name: "Стикеры с цветной полосой (в ассортименте)",
                    manager: "Лотфуллина Э.",
                    master: "",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Tue Dec 23 2014 00:00:00 GMT+0300"),
                    id: "022",
                    number: "414Ц05762/2",
                    customer: "Татхимфармпрепараты ОАО",
                    name: "Стикеры с цветной полосой (в ассортименте)",
                    manager: "Лотфуллина Э.",
                    master: "Галиева В.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Sat Dec 25 2014 00:00:00 GMT+0300"),
                    id: "023",
                    number: "414П05776",
                    customer: "Сабинский лесхоз ООО",
                    name: "Вода Урман (газ./негаз.) ПРОБА",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Sat Dec 25 2014 00:00:00 GMT+0300"),
                    id: "024",
                    number: "414М05829",
                    customer: "Артлайф ООО",
                    name: "Взвар Вечерний 100 мл",
                    manager: "Лотфуллина Э.",
                    master: "Галиева В.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Mon Dec 27 2014 00:00:00 GMT+0300"),
                    id: "025",
                    number: "414Ц05838",
                    customer: "Кураж ООО Издательский дом",
                    name: "Био Аква Спорт (в ассортименте)",
                    manager: "Костюкова В.",
                    master: "Воронцова М.",
                    designer: "Сергеев Р.",
                    status: "completed",
                },
                {
                    date: new Date("Fri Nov 07 2014 00:00:00 GMT+0300"),
                    id: "026",
                    number: "414Ц04866/2",
                    customer: "Тимнар ООО",
                    name: "Сок Гранатовый Премиум 1 л (к/эт.)",
                    manager: "Лотфуллина Э.",
                    master: "",
                    status: "deleted",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "Сок Гранатовый Премиум 1 л (к/эт.)",
					placement: "d4248031",
					source: "вложение",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Mon Nov 10 2014 00:00:00 GMT+0300"),
                    id: "027",
                    number: "414-04454",
                    customer: "Челны-Бройлер ООО",
                    name: "Колбаса Рахмат",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Tue Nov 11 2014 00:00:00 GMT+0300"),
                    id: "028",
                    number: "414Ц04612/1/П1",
                    customer: "Аврора ОАО",
                    name: "Вино Кувье Карсов (красное, белое)",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Tue Nov 11 2014 00:00:00 GMT+0300"),
                    id: "029",
                    number: "414Ц04884",
                    customer: "Артлайф ООО",
                    name: "Комплекс ферментов плюс 90 кап. (для Украины)",
                    manager: "Лотфуллина Э.",
                    master: "Галиева В.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Tue Nov 11 2014 00:00:00 GMT+0300"),
                    id: "030",
                    number: "414М04969",
                    customer: "Артлайф ООО",
                    name: "Комплекс ферментов плюс 180 кап. (для Украины)",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Tue Nov 11 2014 00:00:00 GMT+0300"),
                    id: "031",
                    number: "414М04963",
                    customer: "Артлайф ООО",
                    name: "Арголайф",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Tue Nov 11 2014 00:00:00 GMT+0300"),
                    id: "032",
                    number: "414М04964",
                    customer: "Артлайф ООО",
                    name: "Аргосепт",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Tue Nov 11 2014 00:00:00 GMT+0300"),
                    id: "033",
                    number: "414М04977",
                    customer: "Артлайф ООО",
                    name: "Кисель Черника-Вишня",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Wed Nov 12 2014 00:00:00 GMT+0300"),
                    id: "034",
                    number: "414Ц04933/6",
                    customer: "СоюзАгроПром ПО ООО",
                    name: "Соки без ТМ 3 л (в ассортименте)",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Wed Nov 12 2014 00:00:00 GMT+0300"),
                    id: "035",
                    number: "414Ц04609",
                    customer: "Авангард ООО",
                    name: "Крекер, печенье (в ассортименте)",
                    manager: "Шестакова С.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Wed Nov 12 2014 00:00:00 GMT+0300"),
                    id: "036",
                    number: "414Ц04978",
                    customer: "Акульчев ТД ООО",
                    name: "Транспортные этикетки (в ассортименте)",
                    manager: "Гараева Л.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Wed Nov 12 2014 00:00:00 GMT+0300"),
                    id: "037",
                    number: "414Ц04877",
                    customer: "Абхим ПК ООО",
                    name: "Жидкое мыло 500 мл антибактериальное",
                    manager: "Дмитриева Н.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Wed Nov 12 2014 00:00:00 GMT+0300"),
                    id: "038",
                    number: "414Ц04726",
                    customer: "Абхим ПК ООО",
                    name: "Жидкое мыло 5 л антибактериальное",
                    manager: "Дмитриева Н.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Wed Nov 12 2014 00:00:00 GMT+0300"),
                    id: "039",
                    number: "414-04904",
                    customer: "Птицефабрика Пермская ОАО",
                    name: "Сервелат Коньячный п/к",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Wed Nov 12 2014 00:00:00 GMT+0300"),
                    id: "040",
                    number: "414Ц04879",
                    customer: "Санин ИП",
                    name: "Полуфабрикаты (в ассортименте)",
                    manager: "Дмитриева Н.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Wed Nov 12 2014 00:00:00 GMT+0300"),
                    id: "041",
                    number: "414М05005",
                    customer: "Артлайф ООО",
                    name: "БАДы (в ассортименте)",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Thu Nov 13 2014 00:00:00 GMT+0300"),
                    id: "042",
                    number: "414Ц04993",
                    customer: "Пищехимпродукт ПКП ООО",
                    name: "ТМ Абрико Аджика 120 г",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Thu Nov 13 2014 00:00:00 GMT+0300"),
                    id: "043",
                    number: "414Ц05036",
                    customer: "Тимнар ООО",
                    name: "Сок Гранатовый Премиум 1 л (комплект)",
                    manager: "Лотфуллина Э.",
                    master: "Галиева В.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Thu Nov 13 2014 00:00:00 GMT+0300"),
                    id: "044",
                    number: "414Ц05033",
                    customer: "Пищехимпродукт ПКП ООО",
                    name: "Варенье ТМ Абрико 390 г (в ассортименте)",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Thu Nov 13 2014 00:00:00 GMT+0300"),
                    id: "045",
                    number: "414Ц04898/1",
                    customer: "Сания ООО",
                    name: "Наршараб гранатовый 130 г (эт.)",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "ppw",
                    material_width: "",
                    cut_type: "ready",
                    cut_number: "4152099",
                    size_x: "70",
                    size_y: "50",
                    roll_method: "hand", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "warnish",
                    lak: "solid",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "300",
                    print_size_Y: "954",
                    quantity_X: "4",
                    quantity_Y: "18",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "Наршараб гранатовый 130 г (эт.)",
					placement: "d4300049",
					source: "вложение",
					run: "",
					status: "completed",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Thu Nov 13 2014 00:00:00 GMT+0300"),
                    id: "046",
                    number: "414Ц04898/5",
                    customer: "Сания ООО",
                    name: "Наршараб гранатовый 130 г (к/эт.)",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "ppw",
                    material_width: "",
                    cut_type: "ready",
                    cut_number: "1152571",
                    size_x: "65",
                    size_y: "45",
                    roll_method: "hand", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "warnish",
                    lak: "selected",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "280",
                    print_size_Y: "960",
                    quantity_X: "4",
                    quantity_Y: "20",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "Наршараб гранатовый 130 г (к/эт.)",
					placement: "d4300050",
					source: "вложение",
					run: "",
					status: "completed",
				},
			],
                    inks1: [ 
                        { name: 'Opaque1',
                            used: false
                        },
                        { name: 'Cyan1',
                            used: false
                        },
                        { name: 'Magenta1',
                            used: false
                        },
                        { name: 'Yellow1',
                            used: false
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Thu Nov 13 2014 00:00:00 GMT+0300"),
                    id: "047",
                    number: "414Ц04308",
                    customer: "КФХ Семенов В.О.",
                    name: "Напитки Саврушка 1,5 л (в ассортименте)",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "sem",
                    material_width: "250",
                    cut_type: "ready",
                    cut_number: "1084093",
                    size_x: "98,6",
                    size_y: "130",
                    roll_method: "auto", 
                    roll_type: "outside", 
                    roll_direct: "head_mashine",
                    polish: "warnish",
                    lak: "solid",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "210",
                    print_size_Y: "933.45",
                    quantity_X: "2",
                    quantity_Y: "7",
                    AQ: "4",
                    AL: "3,35",
            labels: [
				{
					name: "Апельсин 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "completed",
				},
				{
					name: "Малина 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "completed",
				},
				{
					name: "Зеленый чай 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "completed",
				},
				{
					name: "Квас 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "completed",
				},
				{
					name: "Груша-Дюшес 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "completed",
				},
				{
					name: "Вода газированная 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "completed",
				},
				{
					name: "Вода негазированная 1,5л",
					placement: "d4327004",
					source: "вложение",
					run: "",
					status: "completed",
				},
				{
					name: "Лимонад 1,5л",
					placement: "d4327004",
					source: "4327003",
					run: "",
					status: "completed",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Mon Nov 17 2014 00:00:00 GMT+0300"),
                    id: "048",
                    number: "414Ц05092",
                    customer: "Пищехимпродукт ПКП ООО",
                    name: "ТМ Абрико Маша и медведь Джем Клубника, Малина",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "sem",
                    material_width: "",
                    cut_type: "ready",
                    cut_number: "11521063",
                    size_x: "45",
                    size_y: "145",
                    roll_method: "auto", 
                    roll_type: "outside", 
                    roll_direct: "head_mashine",
                    polish: "warnish",
                    lak: "solid",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "300",
                    print_size_Y: "894",
                    quantity_X: "6",
                    quantity_Y: "6",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "ТМ Абрико Маша и медведь Джем Клубника",
					placement: "d3160133",
					source: "d3160054",
					run: "",
					status: "completed",
				},
				{
					name: "ТМ Абрико Маша и медведь Джем Малина",
					placement: "d3160134",
					source: "d3160055",
					run: "",
					status: "completed",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Mon Nov 17 2014 00:00:00 GMT+0300"),
                    id: "049",
                    number: "414Ц05059",
                    customer: "Пищехимпродукт ПКП ООО",
                    name: "Мед Д (цветочный)",
                    manager: "Шестакова С.",
                    master: "",
                    status: "deleted",
                    designer: "Сергеев Р.",
                    print_type: "flexo",
                    label_type: "self-label",
                    material_type: "sem",
                    material_width: "",
                    cut_type: "ready",
                    cut_number: "1120227",
                    size_x: "69",
                    size_y: "185",
                    roll_method: "auto", 
                    roll_type: "outside", 
                    roll_direct: "head_mashine",
                    polish: "warnish",
                    lak: "solid",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "Мед Д (цветочный)",
					placement: "3160021",
					source: "3160003",
					run: "",
					status: "agreement",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Mon Nov 17 2014 00:00:00 GMT+0300"),
                    id: "050",
                    number: "414Ц04860",
                    customer: "КФХ Семенов В.О.",
                    name: "Напитки Саврушка 0,5 л (в ассортименте)",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "sem",
                    material_width: "",
                    cut_type: "ready",
                    cut_number: "1140035",
                    size_x: "80",
                    size_y: "105",
                    roll_method: "auto", 
                    roll_type: "outside", 
                    roll_direct: "head_mashine",
                    polish: "warnish",
                    lak: "solid",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "262",
                    print_size_Y: "889",
                    quantity_X: "3",
                    quantity_Y: "8",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "d4327001",
					source: "",
					run: "",
					status: "",
				},
				{
					name: "",
					placement: "d4327002",
					source: "",
					run: "",
					status: "",
				},
				{
					name: "",
					placement: "d4327003",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Mon Nov 17 2014 00:00:00 GMT+0300"),
                    id: "051",
                    number: "414М05001",
                    customer: "Артлайф ООО",
                    name: "Взвар Абитэль 100 мл, Взвар Гепатон-3 100 мл",
                    manager: "Лотфуллина Э.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Tue Nov 18 2014 00:00:00 GMT+0300"),
                    id: "052",
                    number: "414Ц05105/3",
                    customer: "ИКЕА Индастри Вятка ООО",
                    name: "Стикер черный",
                    manager: "Сабитова Р.",
                    master: "Галиева В.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Wed Nov 19 2014 00:00:00 GMT+0300"),
                    id: "053",
                    number: "414М05012",
                    customer: "Артлайф ООО",
                    name: "БАДы (в ассортименте)",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Thu Nov 20 2014 00:00:00 GMT+0300"),
                    id: "054",
                    number: "414Ц05158",
                    customer: "Сарман икмеге ООО",
                    name: "Х/булочные изделия (в ассортименте)",
                    manager: "Дмитриева Н.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Fri Nov 21 2014 00:00:00 GMT+0300"),
                    id: "055",
                    number: "414Ц05141/1",
                    customer: "Артлайф ООО",
                    name: "БАДы для Индии (в ассортименте)",
                    manager: "Лотфуллина Э.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Fri Nov 21 2014 00:00:00 GMT+0300"),
                    id: "056",
                    number: "414Ц04808",
                    customer: "Горячеключевская Пчеловодная Компания",
                    name: "Логотип Медовая Кубань",
                    manager: "Попова Е.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Mon Nov 24 2014 00:00:00 GMT+0300"),
                    id: "057",
                    number: "414Ц05141/2",
                    customer: "Артлайф ООО",
                    name: "Персифен 90 кап (Индия)",
                    manager: "Лотфуллина Э.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Mon Nov 24 2014 00:00:00 GMT+0300"),
                    id: "058",
                    number: "414Ц05263",
                    customer: "Черногорский КК ООО",
                    name: "Кондитерские изделия (в ассортименте)",
                    manager: "Попова Е.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Tue Nov 25 2014 00:00:00 GMT+0300"),
                    id: "059",
                    number: "414Ц05242",
                    customer: "Завод электрощитового оборудования",
                    name: "Стикеры номера с 10 по 14",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Tue Nov 25 2014 00:00:00 GMT+0300"),
                    id: "060",
                    number: "414Ц05249",
                    customer: "Завод электрощитового оборудования",
                    name: "Корпус щита этажного 7/1В (динрейка и спецпланка)",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Wed Nov 26 2014 00:00:00 GMT+0300"),
                    id: "061",
                    number: "414Ц05320",
                    customer: "Пищехимпродукт ПКП ООО",
                    name: "Варенье Вишневое ТМ Велада",
                    manager: "Шестакова С.",
                    master: "",
                    status: "deleted",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Thu Nov 27 2014 00:00:00 GMT+0300"),
                    id: "062",
                    number: "414-05337",
                    customer: "Татхимфармпрепараты ОАО",
                    name: "Таспир 300 мг",
                    manager: "Лотфуллина Э.",
                    master: "Воронцова М.",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "flexo",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Thu Nov 27 2014 00:00:00 GMT+0300"),
                    id: "063",
                    number: "414А05344",
                    customer: "Диамторг ООО",
                    name: "Спреи Bruno и Kiss (в ассортименте) ПРОБА",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Thu Nov 27 2014 00:00:00 GMT+0300"),
                    id: "064",
                    number: "414А05329",
                    customer: "Диамторг ООО",
                    name: "Шампуни Kiss (комплекты в ассортименте) ПРОБА",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
                {
                    date: new Date("Thu Nov 27 2014 00:00:00 GMT+0300"),
                    id: "065",
                    number: "414А05346",
                    customer: "Диамторг ООО",
                    name: "Шампуни Bruno (комплекты в ассортименте) ПРОБА",
                    manager: "Шестакова С.",
                    master: "",
                    status: "completed",
                    designer: "Сергеев Р.",
                    print_type: "digital",
                    label_type: "self-label",
                    material_type: "",
                    material_width: "",
                    cut_type: "",
                    cut_number: "",
                    size_x: "",
                    size_y: "",
                    roll_method: "", 
                    roll_type: "outside", 
                    roll_direct: "",
                    polish: "",
                    lak: "",
                    tisnenie: "none",
                    kongrev: "none",
                    print_size_X: "",
                    print_size_Y: "",
                    quantity_X: "",
                    quantity_Y: "",
                    AQ: "",
                    AL: "",
            labels: [
				{
					name: "",
					placement: "",
					source: "",
					run: "",
					status: "",
				},
			],
                    inks1: [ 
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
                            value: ''
                        },
                        { name: 'pms2',
                            value: ''
                        },
                        { name: 'pms3',
                            value: ''
                        },
                        { name: 'pms4',
                            value: ''
                        },
                        { name: 'pms5',
                            value: ''
                        },
                        { name: 'pms6',
                            value: ''
                        },
                        { name: 'pms7',
                            value: ''
                        },
                    ],  
                },
            ];
    /**
     * Нормализация фильтра дат, в одном месте
     *
     * @param {Date} somedate Дата
     */
    normalizeDate = function(somedate) {
        return (somedate.getMonth() + "." + somedate.getYear()); 
    }

    return {
        all: function(somedate) {
            var current_orders = []; // пустой массив заказов текущего месяца
            var check_date = normalizeDate(somedate); // Приводим current_date к формату (месяц, год)    
            for (var i=0, l=orders.length; i < l; i++) {
                var order_date = normalizeDate(orders[i].date); // Приводим orders.date к формату (месяц, год)
                if (check_date === order_date) {
                    var pushed = current_orders.push(orders[i]);
                }
            };
            return current_orders;
        },
    };
});
