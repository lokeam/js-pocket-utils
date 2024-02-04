var fs = require('fs');

/*
Synchronous approach to reading file

1. look at file
2. wait until buffer is filled
3. wait until it has string ready before V8 engine will move on to next line
*/
var greetjp = fs.readFileSync(__dirname + '/greet-jp.txt', 'utf8');

console.log(greetjp);

/* Async Approach
  Error First Callback Pattern:

  1. C++ goes and does it thing
  2. libuv library goes and ask operating system to do work
  3. when event is complete and it has finished reading the file, run fn.

  Note: this uses BUFFER to load file contents, sits on heap in V8.
  */

// if you include optional encoding param, will return str
var greet2 = fs.readFile( __dirname + '/greet-jp.txt', 'utf-8',

  // this fn ran after V8 completed its work
  function(error, data) {
    console.log('async - returns buffer full of binary data: ', data);
  }
);

console.log('final console log: finished!');
