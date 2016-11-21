'use strict';

const convert = require('color-convert');

function unifyColorFromRgb (colorInput) {
  colorInput = colorInput.toLowerCase();

  const {red, green, blue} = colorInput.match(/^\D+(\d+)\D+(\d+)\D+(\d+)\D+$/g);

  return convert.rgb.hex(red, green, blue);
}

module.exports = unifyColorFromRgb;
