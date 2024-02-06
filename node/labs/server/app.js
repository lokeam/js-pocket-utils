var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });

  // create readable file stream, buffer then pipe to response
  fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);

}).listen(1337, '127.0.0.1');
