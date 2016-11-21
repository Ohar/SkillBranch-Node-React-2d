'use strict';

const COLOR_LIST = require('./../../const/color-dict');

function checkColorWord (str) {
  str = str.trim().toLowerCase();
  return Boolean(COLOR_LIST[str]);
}

module.exports = checkColorWord;
