var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {

  // manually route and create readable streams or write to head
  if (request.url === '/') {
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);

  } else if (request.url === '/api') {
    response.writeHead(200, {'Content-Type': 'application/json'});

    var obj = {
      firstname: 'John',
      lastname: 'Wick'
    };

    response.end(JSON.stringify(obj));
  } else {
    response.writeHead(404);
    response.end();
  }

}).listen(1337, '127.0.0.1');
