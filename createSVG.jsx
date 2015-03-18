#target illustrator

app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

var templateFolder = new Folder ('D:\\work\\template'); //Ссылка на папку template
var templateFile = new File (templateFolder + '\\' + '1100207' + '.ait');
var templateListFile = new File (templateFolder + '\\' + 'cut_list' + '.csv'); //Ссылка на файл template-листа
var templateListArray = []; //Массив строк из template-листа

var template = []; // Экземплярная переменная для хранения шаблонов
templateListFile.open(); // Открываем template-лист
		while (line=templateListFile.readln()) {
			file_name = line;
			var templateObjectFile= new File (file_name); // Создаем ссылку на файл шаблона
			this.template.push(templateObjectFile); // Сохраняем ссылку на файл в экземплярной переменной
		};
this.templateListFile.close();



open(templateFile);
var target = app.activeDocument.layers['cut'].pageItems[0];
target.selected = true;

app.copy();

var myPreset = new Object (DocumentPreset);
myPreset.colorMode = DocumentColorSpace.RGB; // цветовая модель
myPreset.title = "1064001"; // название документа
myPreset.width = target.width + 5; // задаем ширину документа
myPreset.height = target.height + 5; // задаем высоту документа
myPreset.name = "pr";
var doc = app.documents.addDocument ("pr", myPreset);
doc.activate();

app.paste();

// Экпортв SVG

var exportOptions = new ExportOptionsSVG();
var type = ExportType.SVG;
var fileSpec = new File(templateFolder + '\\svg' + '\\' + '1100207' + '.svg');
exportOptions.embedRasterImages = true;
exportOptions.embedAllFonts = false;
exportOptions.fontSubsetting = SVGFontSubsetting.GLYPHSUSED;
app.activeDocument.exportFile( fileSpec, type, exportOptions );


app.activeDocument.close;
app.activeDocument.close (SaveOptions.DONOTSAVECHANGES);
app.activeDocument.close (SaveOptions.DONOTSAVECHANGES);
