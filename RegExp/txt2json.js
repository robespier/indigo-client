// Загрузка модуля fs (файловая система)
var fs = require('fs');

// Считывание содержимого файла в память
fs.readFile('Crystal Reports - rep_order_tmap_oper.txt', function (err, data) {

  // Если произошла ошибка, то мы генерируем исключение,
  // и работа приложения завершается
  if (err) throw err;

  // data имеет тип Buffer, переводим в string
  var text = data.toString();
  
  // В бой вступают регулярки
  var parser = [
      {field: 'order_number', matcher: /\d{3}.\d{5}/, index: 0},
      {field: 'customer', matcher: /Заказчик: ([^\t]*)/},
      {field: 'order_name', matcher: /\/ ([^\t]*)/},
      {field: 'manager', matcher: /Менеджер: ([^\t]*)/},
      {field: 'master', matcher: /Технолог: (.*)/},
      {field: 'designer', matcher: /КАРТА (.*)/},
  ];
  
  var result = {};
  
  parser.forEach(function(p) {
      var m = p.matcher.exec(text);
      // Индекс совпадения, по умолчанию 1
      var r = (typeof(p.index) === 'undefined') ? 1 : p.index;
      result[p.field] = m[r];
  });
  
  /**
  var r1 = /\d{3}.\d{5}/;
  var r2 = /Заказчик: ([^\t]*)/;
  var r3 = /\/ ([^\t]*)/;
  var r4 = /Менеджер: ([^\t]*)/;
  var r5 = /Технолог: (.*)/;
  var r6 = /КАРТА (.*)/;
  
  var order_number = r1.exec(text);
  var customer = r2.exec(text);
  var order_name = r3.exec(text);
  var manager = r4.exec(text);
  var master = r5.exec(text);
  var designer = r6.exec(text);
    
  // Объединяем отдельные переменные объект
  var result = {
         order_number: order_number[0],
         customer: customer[1],
         order_name: order_name[1],
         manager: manager[1],
         master: master[1],
         designer: designer[1]
  };
  */
  
  console.log(result);
  
  /**
   * Пишем красивешный json в файл
   */
  fs.writeFileSync('result.json', JSON.stringify(result, null, '\t'));
  
  /**
   * Cloud9 не завершает процесс автоматически, поможем товарищу!
   */
  process.exit();
});