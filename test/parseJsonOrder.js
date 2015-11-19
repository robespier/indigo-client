/**
 * Тесты матчеров для Asystem.parseOrder()
 */
var fs = require("fs"),
  path = require("path"),
  should = require("should");

var asystem = require("a-system");

var pdfHere = path.resolve('RegExp/sample_task_pdf/'),
  pdfName = 'Crystal Reports - rep_order_tmap_oper',
  watchFolder = path.resolve('RegExp/print/');

/**
 * Рекурсивный список pdf из папки sample_task
 * 
 * @return {array}
 */
function getTasks() {
  var orders = fs.readdirSync(pdfHere);
  return orders;
}

/**
 * Зачистка папки `print`
 * 
 * @return {Promise}
 */
function cleanupPrint() {
  return new Promise(function(resolve, reject) {
    fs.readdir(watchFolder, function(err, data) {
      if (err) {
        reject(err);
      }
      data.forEach(f => {
        fs.unlinkSync(path.join(watchFolder, f));
      });
      resolve();
    });
  });
}

/**
 * Что должно быть на выходе asystem.parseOrder()
 */
var expectations = [{
  order_number: '315Б04063',
  customer: 'Алькор Чел.обл.',
  order_name: 'Глинянный горшок Стакан 95.300 и 95.400.4',
  manager: 'Попова Е. Ю.',
  master: 'Роженко Ю.',
  designer: 'Сергеев Р. В.',
  profile: 'Siegwerk_PVC_156_fast',
  cut_type: 'Нет',
  //cut_number: '1081Т',
  printing: "1000",
}, {
  order_number: '414Ц04308',
  customer: 'КФХ Семенов В.О.',
  order_name: 'напитки Саврушка 1,5л в ассортименте 7 видов',
  manager: 'Шестакова С. Л.',
  master: null,
  designer: 'Сергеев Р. В.',
  profile: null,
  cut_type: 'Новая',
  //cut_number: '1084093',
  printing: "160000"
}, {
  order_number: '415Н04428',
  customer: 'Артлайф',
  order_name: 'Дискавери Сила № 1, Дискавери Сила № 2',
  manager: 'Лотфуллина Э. М.',
  master: 'Роженко Ю.',
  designer: 'Сергеев Р. В.',
  profile: 'Siegwerk_MPSilver_156_kodak',
  cut_type: 'Старая',
  //cut_number: '1108321',
  printing: "20000"
}, {
  order_number: '415Н04489',
  customer: 'Артлайф',
  order_name: 'Неоколлаген Артро',
  manager: 'Лотфуллина Э. М.',
  master: 'Роженко Ю.',
  designer: 'Сергеев Р. В.',
  profile: 'Siegwerk_MPSilver_156_fast',
  cut_type: 'Новая',
  //cut_number: null,
  printing: '7000'
}];

describe.only('ASystem: parse JSON orders', function() {

  before(function(done) {
    var prepSequence = [cleanupPrint()];
    return Promise.all(prepSequence)
      .then(function() {
        done();
      })
      .catch(function(err) {
        console.error('before hook failed', err);
      });
  });

  var tasksSet = getTasks();

  it('all tasks covered', function() {
    expectations.length.should.equal(tasksSet.length);
  });

  tasksSet.forEach((order, index) => {
    var source = path.join(pdfHere, order, `${pdfName}.pdf`);
    var result;

    it(`Load and map order ${order}`, function(done) {
      asystem.pdf2json(source).then(function(data) {
          result = asystem.parseJsonOrder(data);
          done();
        })
        .catch(function(err) {
          console.error(err);
        });
    });

    it(`Order ${order} should have required properties`, function() {
      result.should.have.keys([
        'order_number',
        'customer',
        'order_name',
        'manager',
        'master',
        'designer',
        'profile',
        'cut_type',
        //'cut_number',
        'printing',
      ]);
    })

    it(`Order ${order} parsed as expected`, function() {
      expectations[index].should.deepEqual(result);
    });
  });
  
  /**
   * Подсовываем парсеру заведомо неверные значения, смотрим, как справится.
   * Подпорченый заказ лежат в parseOrder/validators-tests.json
   * Валидаторы полей должны вопить в этом случае.
   * При пополнении валидаторов его тоже ЖЕЛАТЕЛЬНО обновлять
   * 
   * P.S. Про гремлинов см. Википедию 
   * P.P.S. Забыл, что ES6 и var уже не модно. С этого коммита -- let и const.
   *        Без `use strict` в текущей версии ноды (v4.1.1) let не сработает
   */
  it('Fields validators do not sleep :)', function() {
    'use strict';
    const wrongSrc = path.join(__dirname, 'parseOrder/validators-tests.json');
    const wrongParsings = fs.readFileSync(wrongSrc).toString();
    const result = asystem.parseJsonOrder(wrongParsings);
    const badReaction = "PARSING ERROR";
    const expected = {
      "designer": badReaction,
      "order_name": "Неоколлаген Артро",
      "order_number": badReaction,
      "master": badReaction,
      "manager": badReaction,
      "customer": "Артлайф",
      "printing": badReaction,
      "profile": "Siegwerk_MPSilver_156_fast",
      "cut_type": null
    };
    expected.should.deepEqual(result);
  });
});