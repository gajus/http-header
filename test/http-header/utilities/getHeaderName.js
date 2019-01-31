// @flow

import test from 'ava';
import getHeaderName from '../../../src/utilities/getHeaderName';
import {
  HeaderNotFoundError,
  InvalidHeaderNameError
} from '../../../src/errors';
import {
  INVALID_HEADER_NAME
} from '../../helpers/constants';

test('gets the original header name', (t) => {
  t.true(getHeaderName({'Content-Type': 'text/html'}, 'Content-Type') === 'Content-Type');
});

test('gets the original header name (case-insensitive)', (t) => {
  t.true(getHeaderName({'Content-Type': 'text/html'}, 'CoNtEnT-TyPe') === 'Content-Type');
});

test('throws an error if header does not exist', (t) => {
  t.throws(() => {
    getHeaderName({'Content-Type': 'text/html'}, 'foo');
  }, HeaderNotFoundError);
});

test('throws an error if header name is invalid', (t) => {
  t.throws(() => {
    getHeaderName({}, INVALID_HEADER_NAME);
  }, InvalidHeaderNameError);
});
