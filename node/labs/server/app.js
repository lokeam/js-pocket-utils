var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });

  // conversion to utf8 string needed for template replacement
  var html = fs.readFileSync(__dirname + '/index.html', 'utf8');

  var message = 'よろしく!';
  html = html.replace('{message}', message)

  response.end(html);

}).listen(1337, '127.0.0.1');
