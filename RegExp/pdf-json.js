var fs = require('fs'),
  _ = require("lodash");

var asystem = require('a-system');

var outPrefix = 'print/';

/**
 * 
 */
var processing = [];

/**
 * Следим за папкой `print`, если там чего новое -- парсим!
 */
fs.watch(outPrefix, function(event, filename) {
  console.log('event is: ' + event, 'filename is:' + filename);
  var out = outPrefix + filename;
  if (event === 'change' && processing.indexOf(out) === -1) {
    /**if (filename.match(/\.raw\.json$/)) {
      parse(out);
    }*/
    if (filename.match(/\.pdf$/)) {
      /**
       * Ставим файл в очередь обработки, чтобы не гонять один 
       * и тот же файл параллельными процессами
       */
      processing.push(out);
      /**
       * Загружаем и парсим pdf асинхронно
       */
      asystem.pdf2json(out)
        .then(function(data) {
          //fs.writeFileSync(`${out}.raw.json`, JSON.stringify(data, null, '\t'));
          var result = asystem.parseJsonOrder(data);
          var newFileName = outPrefix + filename.replace(/\.pdf$/,'.json');
          fs.writeFileSync(newFileName, JSON.stringify(result, null, '\t'));
          
          var pdfQueueIndex = processing.indexOf(out);
          processing.splice(pdfQueueIndex, 1);
        })
        .catch(function(err) {
          console.error('fs watcher faced trouble: ', err);
        });
    }
  }
});

/**
 * @deprecated
 * 
function parse(infile) {
  // Считывание содержимого файла в память
  fs.readFile(infile, function(err, data) {

    // Если произошла ошибка, то мы генерируем исключение,
    // и работа приложения завершается
    if (err) throw err;

    // data имеет тип Buffer, переводим в string
    var text = data.toString();

    // Красота!!!
    var result = asystem.parseJsonOrder(text);

    console.log(result);

    /**
     * Пишем красивешный json в файл
     *
    fs.writeFileSync(infile + '.json', JSON.stringify(result, null, '\t'));

    /**
     * Cloud9 не завершает процесс автоматически, поможем товарищу!
     * 
     * Теперь watcher, так что не надо
     *
    //process.exit();
  });
}*/