'use strict';

function unifyColorFromHex (colorInput) {
  let color = colorInput.toLowerCase().replace('#', '');

  const isShort = color.length === 3;

  if (isShort) {
    const a = color[0],
          b = color[1],
          c = color[2];

    color = `${a}${a}${b}${b}${c}${c}`
  }

  return `#${color}`;
}

module.exports = unifyColorFromHex;
