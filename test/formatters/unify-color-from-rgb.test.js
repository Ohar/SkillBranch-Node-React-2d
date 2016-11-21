'use strict';

const chai              = require('chai'),
      assert            = chai.assert,
      unifyColorFromRgb = require('./../../scripts/formatters/unify-color-from-rgb');

describe(
  'unifyColorFromRgb', () => {
    it(
      'Возвращает функцию', () => {
        assert.isFunction(unifyColorFromRgb);
      }
    );

    describe(
      'Правильно обрабатывает строку', () => {

        it(
          'rgb(230, 25, 25) → #e61919', () => {
            assert.equal(unifyColorFromRgb('rgb(230, 25, 25)'), '#e61919');
          }
        );

        it(
          'rgb(0, 128, 255) → #0080ff', () => {
            assert.equal(unifyColorFromRgb('rgb(0, 128, 255)'), '#0080ff');
          }
        );

      }
    );
  }
);
