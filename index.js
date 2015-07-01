var app = require('app')
var BrowserWindow = require('browser-window')

var mainWindow = null;

app.on('ready', function(){
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    'auto-hide-menu-bar': true,
  })
  mainWindow.loadUrl('file://' + __dirname + '/view/index.html');
  mainWindow.focus();
})
