'use strict';

const COLOR_LIST = require('./../../const/color-list');

function checkColorWord (str) {
  return Boolean(COLOR_LIST.find(str))
}

module.exports = checkColorWord;
