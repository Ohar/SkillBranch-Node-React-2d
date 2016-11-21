'use strict';

const log4js = require('log4js'),
      last   = require('lodash/last'),
      logger = log4js.getLogger('unifyColor');

function unifyColor (colorInput) {
  logger.trace('Start', colorInput);

  const unifiedColor = '';

  logger.trace('Done', unifiedColor);

  if (unifiedColor) {
    return unifiedColor;
  } else {
    throw new Error('Invalid color');
  }
}

module.exports = unifyColor;
