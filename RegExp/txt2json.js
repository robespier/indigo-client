// Загрузка модуля fs (файловая система)
var fs = require('fs');

/**
 * !!! WARNING !!! OS DEPENDENCIES !!!
 * 
 * Ubuntu/Debian sudo apt-get install poppler-utils.
 * MacOSX sudo port install poppler or brew install xpdf.
 * Windows download and install Xpdf. http://www.foolabs.com/xpdf/download.html
 */
var pdf2txt = require('pdftotextjs');

/**
 * Блядь, куда всё делось? Сюда: node_modules/a-system/index.js
 */
var asystem = require('a-system');

/**
 * Параметры
 *
 * @deprecated
 * 
var infile = 'Crystal Reports - rep_order_tmap_oper.txt';
var outfile = 'result.json';
*/

/**
 * Следим за папкой `print`, если там чего новое -- парсим немедленно!
 */
fs.watch('print', function(event, filename) {
  //console.log('event is: ' + event, 'filename is:' + filename);
  if (event === 'change' && filename.match(/\.txt$/)) {
    parse('print/' + filename);
  }
    if (event === 'change' && filename.match(/\.pdf$/)) {
    convertPDF('print/' + filename);
  }
});

/**
 * Конвертим PDF в текст
 */
function convertPDF(filename) {
  var rawPDF = new pdf2txt(filename);
  var text = rawPDF.getTextSync();
  fs.writeFileSync(filename + '.txt', text);
}

function parse(infile) {
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
    fs.writeFileSync(infile + '.json', JSON.stringify(result, null, '\t'));
    
    /**
     * Cloud9 не завершает процесс автоматически, поможем товарищу!
     * 
     * Теперь watcher, так что не надо
     */
    //process.exit();
  });
}