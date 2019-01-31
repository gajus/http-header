// @flow

import test from 'ava';
import validateName from '../../../src/validators/validateName';

test('does not throw an error if header name is valid', (t) => {
  t.notThrows(() => {
    validateName('foo');
  });
});

test('throw an error if header name is invalid (white space)', (t) => {
  t.throws(() => {
    validateName('foo bar');
  });
});

test('throw an error if header name is invalid (empty)', (t) => {
  t.throws(() => {
    validateName('');
  });
});
