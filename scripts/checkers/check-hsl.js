'use strict';

const hslRegexp = /^hsl\(\d{1,3},\s?\d{1,3}%,\s?\d{1,3}%\)$/;

function checkHsl (str) {
  return hslRegexp.test(str)
}

module.exports = checkHsl;
