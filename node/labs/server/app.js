var http = require('http');

http.createServer(function(request, response) {
  response.writehead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello world\n');

}).listen(1337, '127.0.0.1');
