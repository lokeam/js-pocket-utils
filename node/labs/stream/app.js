var fs = require('fs');

// return buffers
var readable = fs.createReadStream(
  __dirname + '/lorem-stream.txt', {
    encoding: 'utf8',
    highWaterMark: 16 * 1024
  });

var writeable = fs.createWriteStream(__dirname + '/loremcopy.txt');

readable.on('data', function(chunk) {
  console.log(chunk.length);
  writeable.write(chunk);
});