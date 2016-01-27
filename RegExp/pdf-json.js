var fs = require('fs');

var asystem = require('a-system');

var outPrefix = 'print/';

/**
 * Массив файлов, находящихся в обработке
 */
var processing = [];

/**
 * Следим за папкой `print`, если там чего новое -- парсим!
 */
fs.watch(outPrefix, function(event, filename) {
  //console.log('event is: ' + event, 'filename is:' + filename);
  var out = outPrefix + filename;
  if (event === 'change' && processing.indexOf(out) === -1) {
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
          var result = asystem.parseJsonOrder(data);
          
          var newFileName = outPrefix;
          if (result.order_number) {
            newFileName += result.order_number + '.json';
          } else {
            newFileName += filename.replace(/\.pdf$/,'.json');
          }
          
          fs.writeFile(newFileName, JSON.stringify(result, null, '\t'));

          // Удалим исходный PDF, затем вычеркнем его из очереди обработки
          fs.unlink(out, function() {
            var pdfQueueIndex = processing.indexOf(out);
            processing.splice(pdfQueueIndex, 1);
          });
        })
        .catch(function(err) {
          console.error('fs watcher faced trouble: ', err);
        });
    }
  }
});