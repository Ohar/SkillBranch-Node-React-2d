'use strict';

const rgbRegexp = /^rgb\(\d{1,3},\s?\d{1,3},\s?\d{1,3}\)$/;

function checkRgb (str) {
  return rgbRegexp.test(str)
}

module.exports = checkRgb;
