'use strict';

const chai          = require('chai'),
      assert        = chai.assert,
      checkColorWord = require('./../scripts/checkers/check-color-word');

describe(
  'checkColorWord', () => {
    it(
      'Возвращает функцию', () => {
        assert.isFunction(checkColorWord);
      }
    );

    describe(
      'Правильно обрабатывает строку', () => {

        it(
          '123abc → false', () => {
            assert.isFalse(checkColorWord('123abc'));
          }
        );

        it(
          '123ABC → false', () => {
            assert.isFalse(checkColorWord('123ABC'));
          }
        );

        it(
          'fff → false', () => {
            assert.isFalse(checkColorWord('fff'));
          }
        );

        it(
          'red → true', () => {
            assert.isTrue(checkColorWord('red'));
          }
        );

        it(
          'Turquoise → true', () => {
            assert.isTrue(checkColorWord('Turquoise '));
          }
        );

      }
    );
  }
);
