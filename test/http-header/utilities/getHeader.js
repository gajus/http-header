// @flow

import test from 'ava';
import getHeader from '../../../src/utilities/getHeader';
import {
  HeaderNotFoundError,
  InvalidHeaderNameError
} from '../../../src/errors';
import {
  INVALID_HEADER_NAME
} from '../../helpers/constants';

test('gets header value', (t) => {
  t.true(getHeader({'Content-Type': 'text/html'}, 'Content-Type') === 'text/html');
});

test('gets header value (case-insensitive)', (t) => {
  t.true(getHeader({'Content-Type': 'text/html'}, 'CoNtEnT-TyPe') === 'text/html');
});

test('throws ', (t) => {
  t.throws(() => {
    getHeader({'Content-Type': 'text/html'}, 'foo');
  }, HeaderNotFoundError);
});

test('throws an error if header name is invalid', (t) => {
  t.throws(() => {
    getHeader({}, INVALID_HEADER_NAME);
  }, InvalidHeaderNameError);
});
