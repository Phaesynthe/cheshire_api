/* global module, process, require */

require('colors');

module.exports = {
  error: (module, method, message, error) => {
    console.log(`${module.red} ${method}: ${message}\n ${error}`);
  },
  info: (module, method, message) => {
    process.stdout.write(`${('Information: ' + module + ' >> ' + method).cyan}: ${message}\n`);
  }
};
