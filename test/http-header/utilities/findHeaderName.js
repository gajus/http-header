// @flow

import test from 'ava';
import findHeaderName from '../../../src/utilities/findHeaderName';
import {
  InvalidHeaderNameError
} from '../../../src/errors';
import {
  INVALID_HEADER_NAME
} from '../../helpers/constants';

test('finds header name', (t) => {
  t.true(findHeaderName({'Content-Type': 'text/html'}, 'Content-Type') === 'Content-Type');
});

test('finds header name (case-insensitive)', (t) => {
  t.true(findHeaderName({'Content-Type': 'text/html'}, 'CoNtEnT-TyPe') === 'Content-Type');
});

test('returns null if not found', (t) => {
  t.true(findHeaderName({'Content-Type': 'text/html'}, 'foo') === null);
});

test('throws an error if header name is invalid', (t) => {
  t.throws(() => {
    findHeaderName({}, INVALID_HEADER_NAME);
  }, InvalidHeaderNameError);
});
