'use strict';

const hslRegexp = /^hsl\(\s*\d{1,3}\D+\d{1,3}%\D+\d{1,3}%\s*\)$/;

function checkHsl (str) {
  return hslRegexp.test(str)
}

module.exports = checkHsl;
