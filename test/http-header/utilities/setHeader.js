// @flow

import test from 'ava';
import setHeader from '../../../src/utilities/setHeader';
import {
  InvalidHeaderNameError,
  InvalidHeaderValueError
} from '../../../src/errors';
import {
  INVALID_HEADER_NAME,
  INVALID_HEADER_VALUE
} from '../../helpers/constants';

test('appends header', (t) => {
  const inputHeaders = {
    'Content-Type': 'image/png'
  };

  const expectedHeaders = {
    'Content-Type': 'image/png',
    foo: 'bar'
  };

  t.deepEqual(setHeader(inputHeaders, 'foo', 'bar'), expectedHeaders);
});

test('overrides existing header', (t) => {
  const inputHeaders = {
    'Content-Type': 'image/png',
    foo: 'bar'
  };

  const expectedHeaders = {
    'Content-Type': 'image/png',
    foo: 'bar'
  };

  t.deepEqual(setHeader(inputHeaders, 'foo', 'bar'), expectedHeaders);
});

test('overrides existing header (case-insensitive)', (t) => {
  const inputHeaders = {
    'Content-Type': 'image/png',
    Foo: 'bar'
  };

  const expectedHeaders = {
    'Content-Type': 'image/png',
    Foo: 'bar'
  };

  t.deepEqual(setHeader(inputHeaders, 'foo', 'bar'), expectedHeaders);
});

test('throws an error if header name is invalid', (t) => {
  t.throws(() => {
    setHeader({}, INVALID_HEADER_NAME, 'foo');
  }, InvalidHeaderNameError);
});

test('throws an error if header value is invalid', (t) => {
  t.throws(() => {
    setHeader({}, 'foo', INVALID_HEADER_VALUE);
  }, InvalidHeaderValueError);
});
