const fs = require('fs');

const logMessage = ( message ) => {
  fs.appendFile('app.log', message + '\n', (error) => {
    if (error) {
      console.error('Error writing to log file: ', error);
    } else {
      console.log('Message logged: ', message);
    }
  });
};

logMessage('Log message from logger.js module');

module.exports = logMessage;

module.exports.config = {
  logFileName: 'app.log',
  logDirectory: './'
};

