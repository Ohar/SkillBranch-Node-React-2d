'use strict';

const convert = require('color-convert');

function unifyColorFromRgb (colorInput) {
  colorInput = colorInput.trim().toLowerCase();

  const [all, red, green, blue] = colorInput.match(/^\D+(\d+),\D+(\d+),\D+(\d+)\D+$/),
        hex                     = convert.rgb.hex(red, green, blue).toLowerCase();

  return `#${hex}`;
}

module.exports = unifyColorFromRgb;
