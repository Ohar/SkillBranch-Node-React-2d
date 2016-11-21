'use strict';

const log4js     = require('log4js'),
      logger     = log4js.getLogger('checkHex'),
      hexRegexp = /^\s*#?([A-Fa-f0-9]{3}){1,2}\s*$/;

function checkHex (str) {
  logger.trace('Start', str);
  const result = hexRegexp.test(str.trim().toLowerCase());
  logger.trace('Done', result);
  return result
}

module.exports = checkHex;
