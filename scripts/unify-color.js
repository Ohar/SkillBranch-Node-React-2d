'use strict';

const unifyColorFromHex  = require('./formatters/unify-color-from-hex'),
      unifyColorFromHsl  = require('./formatters/unify-color-from-hsl'),
      unifyColorFromRgb  = require('./formatters/unify-color-from-rgb'),
      unifyColorFromWord = require('./formatters/unify-color-from-word');

function unifyColor (colorInput, format) {
  switch (format) {
    case 'hex':
      return unifyColorFromHex(colorInput);
    case 'hsl':
      return unifyColorFromHsl(colorInput);
    case 'rgb':
      return unifyColorFromRgb(colorInput);
    case 'word':
      return unifyColorFromWord(colorInput);
    default:
      return new Error('Invalid color');
  }
}

module.exports = unifyColor;
