'use strict';

const chai              = require('chai'),
      assert            = chai.assert,
      unifyColorFromHsl = require('./../../scripts/formatters/unify-color-from-hsl');

describe(
  'unifyColorFromHsl', () => {
    it(
      'Возвращает функцию', () => {
        assert.isFunction(unifyColorFromHsl);
      }
    );

    describe(
      'Правильно обрабатывает строку', () => {

        it(
          'hsl(0, 100%, 70%) → #ff6666', () => {
            assert.equal(unifyColorFromHsl('hsl(0, 100%, 70%)'), '#ff6666');
          }
        );

        it(
          'hsl(0, 90%, 50%) → #f20d0d', () => {
            assert.equal(unifyColorFromHsl('hsl(0, 90%, 50%)'), '#f20d0d');
          }
        );

      }
    );
  }
);
