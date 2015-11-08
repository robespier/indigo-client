// Загрузка модуля fs (файловая система)
var fs = require('fs');

/**
 * Блядь, куда всё делось? Сюда: node_modules/a-system/index.js
 */
var asystem = require('a-system');

// Считывание содержимого файла в память
fs.readFile('Crystal Reports - rep_order_tmap_oper.txt', function (err, data) {

  // Если произошла ошибка, то мы генерируем исключение,
  // и работа приложения завершается
  if (err) throw err;

  // data имеет тип Buffer, переводим в string
  var text = data.toString();
  
  // Красота!!!
  var result = asystem.parseOrder(text);
  
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