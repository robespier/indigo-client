var app = require('app')
var BrowserWindow = require('browser-window')

app.on('ready', function(){
  var mainWindow = new BrowserWindow({
    width: 1220,
    height: 900
  })
  mainWindow.loadUrl('file://' + __dirname + '/view/index.html')
})
