// Загрузка модуля fs (файловая система)
var fs = require('fs');

// Считывание содержимого файла в память
fs.readFile('Crystal Reports - rep_order_tmap_oper.txt', function (err, data) {

  // Если произошла ошибка, то мы генерируем исключение,
  // и работа приложения завершается
  if (err) throw err;

  // data имеет тип Buffer, переводим в string
  var text = data.toString();
  
  /**
   * В бой вступают регулярки
   * 
   * Интерфейс объектов парсера:
   * 
   * @param {string} field Имя поля в результирующем json;
   * @param {RegExp} matcher Регулярка, определяющая значение;
   * @param {number} [index] Индекс значения в массиве совпадений, опционально;
   * @param {function} [postProcess] Пост-обработка значения, опционально;
   */
  var parser = [
      {field: 'order_number', matcher: /Заказ №	([^\t]*)/},
      {field: 'customer', matcher: /Заказчик: ([^\t|\r]*)/},
      {
        field: 'order_name',
        matcher: /\/ ([^\t|\r]*)/,
        postProcess: function(m) {
          // С выходным значением ничего не делаем...
          return m;
          // ...хотя можно что угодно, например:
          //return m.split(', ');
          //return m.toUpperCase();
          //return m.replace(/ /g,'_');
        }
      }, // Наименование заказа
      {field: 'manager', matcher: /Менеджер: ([^\t|\s]*)/},
      {field: 'master', matcher: /Технолог: (.*)/},
      {field: 'designer', matcher: /КАРТА (.*)/}, // Дизайнер
      {field: 'profile', matcher: /профиль\t(.*)/}, // ICC-профиль
      {field: 'cut', matcher: /Высечка ([^\s]*)/},
  ];
  
  var result = {};
  
  parser.forEach(function(p) {
      var m = p.matcher.exec(text);
      // Индекс совпадения, по умолчанию 1
      var r = (typeof(p.index) === 'undefined') ? 1 : p.index;
      var value = m[r];
      if (typeof(p.postProcess) === 'function') {
        value = p.postProcess(m[r]);
      }
      result[p.field] = value;
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