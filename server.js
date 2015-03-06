var http = require('http');

function start() {
    
var server = new http.Server();
server.listen(1337, '127.0.0.1');
server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});﻿
    res.write("Привет, Джо!");
    res.end();
});

}

exports.start = start;