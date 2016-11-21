'use strict';

const checkColorWord = require('./checkers/check-color-word'),
      checkRgb       = require('./checkers/check-rgb'),
      checkHex       = require('./checkers/check-hex'),
      checkHsl       = require('./checkers/check-hsl');

function getColorFormat (colorInput) {
  if (checkColorWord(colorInput)) {
    return 'word';
  } else if (checkHex(colorInput)) {
    return 'hex';
  } else if (checkHsl(colorInput)) {
    return 'hsl';
  } else if (checkRgb(colorInput)) {
    return 'rgb';
  } else {
    return null;
  }
}

module.exports = getColorFormat;
