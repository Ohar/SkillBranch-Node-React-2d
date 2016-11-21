'use strict';

const convert = require('color-convert');

function unifyColorFromHsl (colorInput) {
  colorInput = colorInput.toLowerCase();

  const {hue, saturation, lightness} = colorInput.match(/^\D+(\d+)\D+(\d+)%\D+(\d+)%\D+$/g);

  return convert.hsl.hex(hue, saturation, lightness);
}

module.exports = unifyColorFromHsl;
