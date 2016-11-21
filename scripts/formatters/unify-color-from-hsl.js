'use strict';

const log4js  = require('log4js'),
      logger  = log4js.getLogger('unifyColorFromHsl'),
      convert = require('color-convert');

function unifyColorFromHsl (colorInput) {
  logger.trace('Start', colorInput);
  colorInput = colorInput.toLowerCase();

  const [all, hue, saturation, lightness] = colorInput.match(/^\D+(\d+),\D+(\d+)%,\D+(\d+)%\D+$/),
        hex                               = convert.hsl.hex(hue, saturation, lightness).toLowerCase(),
        result                            = `#${hex}`;

  logger.trace('[hue, saturation, lightness]', [hue, saturation, lightness]);
  logger.trace('hex', hex);
  logger.trace('Done', result);

  return result;
}

module.exports = unifyColorFromHsl;
