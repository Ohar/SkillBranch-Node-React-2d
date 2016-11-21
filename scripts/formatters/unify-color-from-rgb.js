'use strict';

const log4js  = require('log4js'),
      inRange = require('lodash/inRange'),
      logger  = log4js.getLogger('unifyColorFromRgb'),
      convert = require('color-convert');

function unifyColorFromRgb (colorInput) {
  logger.trace('Start', colorInput);
  colorInput = colorInput.trim().toLowerCase();

  const [all, red, green, blue] = colorInput.match(/^\s*rgb\(\s*(\d{1,3})\D+(\d{1,3})\D+(\d{1,3})\s*\)\s*$/),
        hex                     = convert.rgb.hex(red, green, blue).toLowerCase(),
        result                  = `#${hex}`;

  logger.trace('[red, green, blue]', [red, green, blue]);
  logger.trace('hex', hex);
  logger.trace('Done', result);

  if (
       inRange(red, 0, 256)
    && inRange(green, 0, 256)
    && inRange(blue, 0, 256)
  ) {
    return result;
  } else {
    throw new Error('Invalid color')
  }
}

module.exports = unifyColorFromRgb;
