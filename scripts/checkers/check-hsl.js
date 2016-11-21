'use strict';

const hslRegexp = /^\s*hsl\(\s*\d{1,3}\D+\d{1,3}%\D+\d{1,3}%\s*\)\s*$/;

function checkHsl (str) {
  return hslRegexp.test(str.trim().toLowerCase())
}

module.exports = checkHsl;
