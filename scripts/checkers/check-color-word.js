'use strict';

const findKey = require('lodash/findKey');

const COLOR_LIST = require('./../../const/color-dict');

function checkColorWord (str) {
  return Boolean(findKey(COLOR_LIST, color => color === `#${str}`));
}

module.exports = checkColorWord;
