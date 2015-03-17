#target illustrator

app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

var templateFolder = new Folder ('D:\\work\\template');
var template = new File (templateFolder + '\\' + '1064001' + '.ait');
open(template);
var myDoc = app.activeDocument;
var target = myDoc.layers['cut'].pathItems[0];
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

alert (target.width, 'Size X');
alert (target.height, 'Size Y');

app.activeDocument.close (SaveOptions.DONOTSAVECHANGES); // здесь надо сохранить содержимое в SVG-файл.

app.activeDocument.close (SaveOptions.DONOTSAVECHANGES);
