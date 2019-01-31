// @flow

import test from 'ava';
import validateValue from '../../../src/validators/validateValue';
import {
  INVALID_HEADER_VALUE
} from '../../helpers/constants';

test('does not throw an error if header value is valid', (t) => {
  t.notThrows(() => {
    validateValue('foo');
  });
});

test('throw an error if header value is invalid', (t) => {
  t.throws(() => {
    validateValue(INVALID_HEADER_VALUE);
  });
});
