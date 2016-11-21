'use strict';

const chai               = require('chai'),
      assert             = chai.assert,
      unifyColorFromWord = require('./../../scripts/formatters/unify-color-from-word');

describe(
  'unifyColorFromWord', () => {
    it(
      'Возвращает функцию', () => {
        assert.isFunction(unifyColorFromWord);
      }
    );

    describe(
      'Правильно обрабатывает строку', () => {

        it(
          'red → #ff0000', () => {
            assert.equal(unifyColorFromWord('red'), '#ff0000');
          }
        );

        it(
          'CornFlowerBlue → #6495ed', () => {
            assert.equal(unifyColorFromWord('CornFlowerBlue'), '#6495ed');
          }
        );

      }
    );
  }
);
