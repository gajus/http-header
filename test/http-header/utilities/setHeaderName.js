// @flow

import test from 'ava';
import setHeaderName from '../../../src/utilities/setHeaderName';
import {
  HeaderNotFoundError,
  InvalidHeaderNameError
} from '../../../src/errors';
import {
  INVALID_HEADER_NAME
} from '../../helpers/constants';

test('renames header', (t) => {
  const inputHeaders = {
    'content-type': 'image/png'
  };

  const expectedHeaders = {
    'Content-Type': 'image/png'
  };

  t.deepEqual(setHeaderName(inputHeaders, 'content-type', 'Content-Type'), expectedHeaders);
});

test('throws an error if header does not exist', (t) => {
  t.throws(() => {
    setHeaderName({}, 'foo', 'bar');
  }, HeaderNotFoundError);
});

test('throws an error if old header name is invalid', (t) => {
  t.throws(() => {
    setHeaderName({}, INVALID_HEADER_NAME, 'foo');
  }, InvalidHeaderNameError);
});

test('throws an error if new header name is invalid', (t) => {
  t.throws(() => {
    setHeaderName({}, 'foo', INVALID_HEADER_NAME);
  }, InvalidHeaderNameError);
});
