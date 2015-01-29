// Фильтрация заказов для текущего месяца
    var orders = [
                {
                    date: new Date("Fri Nov 07 2014 00:00:00 GMT+0300"),
                },
                {
                    date: new Date("Fri Dec 02 2014 00:00:00 GMT+0300"),
                },
                {
                    date: new Date("Fri Jan 23 2015 00:00:00 GMT+0300"),
                },
                {
                    date: new Date("Sat Jan 24 2015 00:00:00 GMT+0300"),
                },
    ];
    var current_date = new Date;
    
    var check_date = (current_date.getMonth() + "." + current_date.getYear()); // Приводим current_date к формату (месяц, год)    
    var current_orders = []; // пустой массив заказов текущего месяца
            for (i=0, l=orders.length; i < l; i++) {
                var order_date = (orders[i].date.getMonth() + "." + orders[i].date.getYear()); // Приводим orders.date к формату (месяц, год)    
                    if (check_date === order_date) {
                        var pushed = current_orders.push(orders[i]);
                    }
            };
       alert (current_orders[0].date);
       alert (current_orders[1].date);
       alert (current_orders.length);