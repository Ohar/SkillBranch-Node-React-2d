'use strict';

const rgbRegexp = /^\s*rgb\(\s*\d{1,3}\D+\d{1,3}\D+\d{1,3}\s*\)\s*$/;

function checkRgb (str) {
  return rgbRegexp.test(str.trim().toLowerCase())
}

module.exports = checkRgb;
