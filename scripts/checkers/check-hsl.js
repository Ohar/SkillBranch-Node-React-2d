'use strict';

const log4js     = require('log4js'),
      logger     = log4js.getLogger('checkHsl'),
      hslRegexp = /^\s*hsl\(\s*\d{1,3}\D+\d{1,3}%\D+\d{1,3}%\s*\)\s*$/;

function checkHsl (str) {
  logger.trace('Start', str);
  const result = hslRegexp.test(str.trim().toLowerCase());
  logger.trace('Done', result);
  return result
}

module.exports = checkHsl;
