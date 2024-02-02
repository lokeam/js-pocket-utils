var CustomEmitter = require('./emitter-es5');
var Emitter = require('events');

var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
  console.log('hello from listener one');
});

emtr.on(eventConfig.GREETJP, function() {
  console.log('よろしく from listener three');
});

emtr.on(eventConfig.GREET, function() {
  console.log('obrigado from listener two')
});

emtr.on(eventConfig.GREETKR, function() {
  console.log('안녕 from listener four');
});

console.log('Hello!');
emtr.emit('greet');
emtr.emit('greet-kr');
emtr.emit('greet-jp');
