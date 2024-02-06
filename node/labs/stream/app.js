var fs = require('fs');
var zlib = require('zlib');

// return buffers
var readable = fs.createReadStream(__dirname + '/lorem-stream.txt');
var writeable = fs.createWriteStream(__dirname + '/loremcopy.txt');
var compressed = fs.createWriteStream(__dirname + '/lorem.txt.gz');

// create compressed file as a transform stream
var gzip = zlib.createGzip();

readable.pipe(writeable);

// stream to streams to stream
readable.pipe(gzip).pipe(compressed);
