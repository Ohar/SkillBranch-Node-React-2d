'use strict';

const chai     = require('chai'),
      assert   = chai.assert,
      checkHex = require('./../../scripts/checkers/check-hex');

describe(
  'checkHex', () => {
    it(
      'Возвращает функцию', () => {
        assert.isFunction(checkHex);
      }
    );

    describe(
      'Правильно обрабатывает строку', () => {

        it(
          '123abc → true', () => {
            assert.isTrue(checkHex('123abc'));
          }
        );

        it(
          '123ABC → true', () => {
            assert.isTrue(checkHex('123ABC'));
          }
        );

        it(
          'fff → true', () => {
            assert.isTrue(checkHex('fff'));
          }
        );

        it(
          'red → false', () => {
            assert.isFalse(checkHex('red'));
          }
        );

        it(
          'Turquoise → false', () => {
            assert.isFalse(checkHex('Turquoise '));
          }
        );

      }
    );
  }
);
