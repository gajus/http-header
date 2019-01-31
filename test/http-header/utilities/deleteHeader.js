// @flow

import test from 'ava';
import deleteHeader from '../../../src/utilities/deleteHeader';
import {
  InvalidHeaderNameError
} from '../../../src/errors';
import {
  INVALID_HEADER_NAME
} from '../../helpers/constants';

test('deletes header', (t) => {
  t.deepEqual(deleteHeader({'Content-Type': 'text/html'}, 'content-type'), {});
});

test('deletes header (case-insensitive)', (t) => {
  t.deepEqual(deleteHeader({'content-type': 'text/html'}, 'CoNtEnT-TyPe'), {});
});

test('does not modify the input', (t) => {
  const input = {'Content-Type': 'text/html'};

  t.deepEqual(deleteHeader(input, 'Content-Type'), {});
  t.deepEqual(input, {'Content-Type': 'text/html'});
});

test('does no-op if header is not found', (t) => {
  t.deepEqual(deleteHeader({'Content-Type': 'text/html'}, 'foo'), {'Content-Type': 'text/html'});
});

test('throws an error if header name is invalid', (t) => {
  t.throws(() => {
    deleteHeader({}, INVALID_HEADER_NAME);
  }, InvalidHeaderNameError);
});
