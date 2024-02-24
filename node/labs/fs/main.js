const logger = require('./logger');

const { config } = require('./logger');

logger('Main.js log message');

console.log('Log file name: ', config.logFileName);
console.log('Log directory: ', config.logDirectory);
