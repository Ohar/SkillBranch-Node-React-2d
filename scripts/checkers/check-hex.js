'use strict';

const hexRegexp = /^#?([A-Fa-f0-9]{3}){1,2}$/;

function checkHex (str) {
  return hexRegexp.test(str)
}

module.exports = checkHex;
