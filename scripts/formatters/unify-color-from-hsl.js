'use strict';

const convert = require('color-convert');

function unifyColorFromHsl (colorInput) {
  colorInput = colorInput.toLowerCase();

  const [all, hue, saturation, lightness] = colorInput.match(/^\D+(\d+),\D+(\d+)%,\D+(\d+)%\D+$/),
        hex                               = convert.hsl.hex(hue, saturation, lightness).toLowerCase();

  return `#${hex}`;
}

module.exports = unifyColorFromHsl;
