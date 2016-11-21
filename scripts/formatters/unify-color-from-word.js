'use strict';


const log4js     = require('log4js'),
      logger     = log4js.getLogger('unifyColorFromWord'),
      COLOR_LIST = require('./../../const/color-dict');

function unifyColorFromWord (colorInput) {
  logger.trace('Start', colorInput);

  colorInput = colorInput.trim().toLowerCase();

  const result = COLOR_LIST[colorInput];
  logger.trace('Done', result);

  return result;
}

module.exports = unifyColorFromWord;
