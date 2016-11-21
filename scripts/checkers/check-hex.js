'use strict';

const hexRegexp = /^\s*#?([A-Fa-f0-9]{3}){1,2}\s*$/;

function checkHex (str) {
  return hexRegexp.test(str.trim().toLowerCase())
}

module.exports = checkHex;
