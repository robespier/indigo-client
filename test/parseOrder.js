/**
 * Тесты матчеров для Asystem.parseOrder()
 */
var fs = require("fs"),
    path = require("path"),
    should = require("should"),
    pdf2txt = require('pdftotextjs');
    
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
            if (err) { reject(err); }
            data.forEach( f => { fs.unlinkSync(path.join(watchFolder, f)); } );
            resolve();
        });
    });
}

/**
 * Что должно быть на выходе asystem.parseOrder()
 */
var expectations = [
    {
        order_number: '315Б04063',
        customer: 'Алькор Чел.обл.',
        order_name: 'Глинянный горшок Стакан 95.300 и 95.400.4',
        manager: 'Попова Е. Ю.',
        master: 'Роженко Ю.',
        designer: 'Сергеев Р. В.',
        profile: 'Siegwerk_PVC_156_fast',
        cut_type: 'Нет',
        cut_number: '1081Т'
    },
    {
        order_number: '414Ц04308',
        customer: 'КФХ Семенов В.О.',
        order_name: 'напитки Саврушка 1,5л в ассортименте 7 видов',
        manager: 'Шестакова С. Л.',
        master: null,
        designer: 'Сергеев Р. В.',
        profile: null,
        cut_type: 'Новая',
        cut_number: '1084093'
    },
    {
        order_number: '415Н04428',
        customer: 'Артлайф',
        order_name: 'Дискавери Сила № 1, Дискавери Сила № 2',
        manager: 'Лотфуллина Э. М.',
        master: 'Роженко Ю.',
        designer: 'Сергеев Р. В.',
        profile: 'Siegwerk_MPSilver_156_kodak',
        cut_type: 'Старая',
        cut_number: '1108321'
    },
    {
        order_number: '415Н04489',
        customer: 'Артлайф',
        order_name: 'Неоколлаген Артро',
        manager: 'Лотфуллина Э. М.',
        master: 'Роженко Ю.',
        designer: 'Сергеев Р. В.',
        profile: 'Siegwerk_MPSilver_156_fast',
        cut_type: 'Новая',
        cut_number: null
    }
];

describe.skip('ASystem.parseOrder', function() {

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
        var rawPDF = new pdf2txt(source);
        var text = rawPDF.getTextSync();
        var result = asystem.parseOrder(text);
        
        it(`Order ${order} has expected length`, function() {
            Object.keys(result).length.should.equal(8);
        });
        
        it (`Order ${order} should have required properties`, function() {
            result.should.have.keys([
                'order_number',
                'customer',
                'order_name',
                'manager',
                'master',
                'designer',
                'profile',
                'cut_type',
                'cut_number'
            ]);
        })
        
        // Хочешь счастья? Закомментируй следующие три строчки
        it(`Order ${order} parsed as expected`, function() {
            expectations[index].should.deepEqual(result);
        });
    });
});