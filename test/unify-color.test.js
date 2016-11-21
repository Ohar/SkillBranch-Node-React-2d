'use strict';

const chai          = require('chai'),
      assert        = chai.assert,
      unifyColor = require('./../scripts/unify-color');

describe(
  'unifyColor', () => {
    it(
      'Возвращает функцию', () => {
        assert.isFunction(unifyColor);
      }
    );

    describe(
      'Правильно работает при корректных данных', () => {

        it(
          '123abc → #123abc', () => {
            assert.equal(unifyColor('123abc'), '#123abc');
          }
        );

        it(
          '123ABC → #123abc', () => {
            assert.equal(unifyColor('123ABC'), '#123abc');
          }
        );

        it(
          'fff → #ffffff', () => {
            assert.equal(unifyColor('fff'), '#ffffff');
          }
        );

      }
    );

    describe(
      'Возвращает ошибку при некорректных данных', () => {

        it(
          '\'\'', () => {
            assert.throws(() => {unifyColor('')}, 'Invalid color');
          }
        );

        it(
          'xfiles', () => {
            assert.throws(() => {unifyColor('xfiles')}, 'Invalid color');
          }
        );

      }
    );
  }
);
