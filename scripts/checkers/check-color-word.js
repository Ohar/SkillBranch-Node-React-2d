'use strict';

const log4js     = require('log4js'),
      logger     = log4js.getLogger('checkColorWord'),
      COLOR_LIST = require('./../../const/color-dict');

function checkColorWord (str) {
  logger.trace('Start', str);
  str = str.trim().toLowerCase();
  logger.trace('trimmed', str);
  const result = Boolean(COLOR_LIST[str]);
  logger.trace('Done', result);

  return result;
}

module.exports = checkColorWord;
