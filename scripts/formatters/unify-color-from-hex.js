'use strict';

function unifyColorFromHex (colorInput) {
  colorInput = colorInput.toLowerCase().replace('#', '');

  const isShort = colorInput.length === 3;

  if (isShort) {
    colorInput += colorInput
  }

  return `#${colorInput}`;
}

module.exports = unifyColorFromHex;
