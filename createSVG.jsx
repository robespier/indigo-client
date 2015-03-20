#target illustrator

app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

var templateFolder = new Folder ('D:\\work\\template'); // Ссылка на папку template
var templateListFile = new File (templateFolder + '\\' + 'cut_list' + '.csv'); // Ссылка на файл template-листа


var templateListArray = []; //Массив строк из template-листа
templateListFile.open(); // Открываем template-лист
		while (line=templateListFile.readln()) {
			file_name = line;
			var templateObjectFile= new File (file_name); // Создаем ссылку на файл шаблона
			templateListArray.push(templateObjectFile); // Сохраняем ссылку на файл в экземплярной переменной
		};
templateListFile.close();

for (i=0, l=templateListArray.length; i < l; i++) {
	

open(templateListArray[i]);
var target = app.activeDocument.layers['cut'].pageItems[0];
target.selected = true;

app.copy();

var myPreset = new Object (DocumentPreset);
myPreset.colorMode = DocumentColorSpace.RGB; // цветовая модель
// myPreset.title = "1064001"; // название документа
myPreset.width = target.width + 5; // задаем ширину документа
myPreset.height = target.height + 5; // задаем высоту документа
myPreset.name = "preset";
var doc = app.documents.addDocument ("preset", myPreset);
doc.activate();

app.paste();

// Назначение имени файлу шаблона
templateFileName = templateListArray[i].name.replace('ait', 'svg');

// Экспорт в SVG

var exportOptions = new ExportOptionsSVG();
var type = ExportType.SVG;
var fileSpec = new File(templateFolder + '\\svg' + '\\' + templateFileName);
exportOptions.embedRasterImages = true;
exportOptions.embedAllFonts = false;
exportOptions.fontSubsetting = SVGFontSubsetting.GLYPHSUSED;
app.activeDocument.exportFile( fileSpec, type, exportOptions );


app.activeDocument.close;
app.activeDocument.close (SaveOptions.DONOTSAVECHANGES);
app.activeDocument.close (SaveOptions.DONOTSAVECHANGES);

}