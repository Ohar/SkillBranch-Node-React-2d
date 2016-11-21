'use strict';

const log4js = require('log4js'),
      logger = log4js.getLogger('unifyColorFromHex');

function unifyColorFromHex (colorInput) {
  logger.trace('Start', colorInput);
  let color = colorInput.toLowerCase().replace('#', '');

  const isShort = color.length === 3;
  logger.trace('isShort', isShort);

  if (isShort) {
    const a = color[0],
          b = color[1],
          c = color[2];

    color = `${a}${a}${b}${b}${c}${c}`
  }

  logger.trace('Done', color);

  return `#${color}`;
}

module.exports = unifyColorFromHex;
