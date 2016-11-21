'use strict';

const log4js     = require('log4js'),
      logger     = log4js.getLogger('checkRgb'),
      rgbRegexp = /^\s*rgb\(\s*\d{1,3}\D+\d{1,3}\D+\d{1,3}\s*\)\s*$/;

function checkRgb (str) {
  logger.trace('Start', str);
  const result = rgbRegexp.test(str.trim().toLowerCase());
  logger.trace('Done', result);
  return result
}

module.exports = checkRgb;
