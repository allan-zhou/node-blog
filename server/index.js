var app = require('./app');
var http = require('http');

var port = process.env.PORT || '3000';

var server = http.createServer(app);

server.listen(port,(params) => {
  console.log('express start at port: ' + port);
});
