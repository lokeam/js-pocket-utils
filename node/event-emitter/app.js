var Emitter = require('./emitter-es5');

var emtr = new Emitter();

emtr.on('greet', function() {
  console.log('hello from listener one');
});

emtr.on('greet-jp', function() {
  console.log('よろしく from listener three');
});

emtr.on('greet', function() {
  console.log('obrigado from listener two')
});

emtr.on('greet-kr', function() {
  console.log('안녕 from listener four');
});

console.log('Hello!');
emtr.emit('greet');
emtr.emit('greet-kr');
emtr.emit('greet-jp');
