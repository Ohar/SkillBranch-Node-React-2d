'use strict';

const chai              = require('chai'),
      assert            = chai.assert,
      unifyColorFromHex = require('./../../scripts/formatters/unify-color-from-hex');

describe(
  'unifyColorFromHex', () => {
    it(
      'Возвращает функцию', () => {
        assert.isFunction(unifyColorFromHex);
      }
    );

    describe(
      'Правильно обрабатывает строку', () => {

        it(
          'fff → #ffffff', () => {
            assert.equal(unifyColorFromHex('fff'), '#ffffff');
          }
        );

        it(
          'abc → #aabbcc', () => {
            assert.equal(unifyColorFromHex('abc'), '#aabbcc');
          }
        );

        it(
          'ABC123 → #abc123', () => {
            assert.equal(unifyColorFromHex('#ABC123'), '#abc123');
          }
        );

      }
    );
  }
);
