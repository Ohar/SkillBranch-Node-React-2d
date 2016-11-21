'use strict';

const COLOR_LIST = require('./../../const/color-dict');

function unifyColorFromWord (colorInput) {
  colorInput = colorInput.trim().toLowerCase();
  return COLOR_LIST[colorInput];
}

module.exports = unifyColorFromWord;
