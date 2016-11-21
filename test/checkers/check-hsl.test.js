'use strict';

const chai     = require('chai'),
      assert   = chai.assert,
      checkHsl = require('./../../scripts/checkers/check-hsl');

describe(
  'checkHsl', () => {
    it(
      'Возвращает функцию', () => {
        assert.isFunction(checkHsl);
      }
    );

    describe(
      'Правильно обрабатывает строку', () => {

        it(
          'hsl(15, 100%, 50%) → true', () => {
            assert.isTrue(checkHsl('hsl(15, 100%, 50%)'));
          }
        );

        it(
          'hsl(0, 100%, 0%) → true', () => {
            assert.isTrue(checkHsl('hsl(0, 100%, 0%)'));
          }
        );

        it(
          'fff → false', () => {
            assert.isFalse(checkHsl('fff'));
          }
        );

        it(
          'red → false', () => {
            assert.isFalse(checkHsl('red'));
          }
        );

        it(
          'Turquoise → false', () => {
            assert.isFalse(checkHsl('Turquoise '));
          }
        );

      }
    );
  }
);
