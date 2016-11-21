'use strict';

const chai     = require('chai'),
      assert   = chai.assert,
      checkRgb = require('./../../scripts/checkers/check-rgb');

describe(
  'checkRgb', () => {
    it(
      'Возвращает функцию', () => {
        assert.isFunction(checkRgb);
      }
    );

    describe(
      'Правильно обрабатывает строку', () => {

        it(
          'rgb(255, 179, 179) → true', () => {
            assert.isTrue(checkRgb('rgb(255, 179, 179)'));
          }
        );

        it(
          ' rgb( 0, 255 , 64 )  → true', () => {
            assert.isTrue(checkRgb(' rgb( 0, 255 , 64 ) '));
          }
        );

        it(
          'hsl(0, 100%, 0%) → false', () => {
            assert.isFalse(checkRgb('hsl(0, 100%, 0%)'));
          }
        );

        it(
          'fff → false', () => {
            assert.isFalse(checkRgb('fff'));
          }
        );

        it(
          'red → false', () => {
            assert.isFalse(checkRgb('red'));
          }
        );

        it(
          'Turquoise → false', () => {
            assert.isFalse(checkRgb('Turquoise '));
          }
        );

      }
    );
  }
);
