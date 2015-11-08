// Загрузка модуля fs (файловая система)
var fs = require('fs');

/**
 * Блядь, куда всё делось? Сюда: node_modules/a-system/index.js
 */
var asystem = require('a-system');

/**
 * Параметры
 */
var infile = 'Crystal Reports - rep_order_tmap_oper.txt';
var outfile = 'result.json';

// Считывание содержимого файла в память
fs.readFile(infile, function (err, data) {

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
  fs.writeFileSync(outfile, JSON.stringify(result, null, '\t'));
  
  /**
   * Cloud9 не завершает процесс автоматически, поможем товарищу!
   */
  process.exit();
});