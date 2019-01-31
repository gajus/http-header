// @flow

import test from 'ava';
import hasHeader from '../../../src/utilities/hasHeader';
import {
  InvalidHeaderNameError
} from '../../../src/errors';
import {
  INVALID_HEADER_NAME
} from '../../helpers/constants';

test('finds case-insensitive header', (t) => {
  t.true(hasHeader({'Content-Type': 'text/html'}, 'content-type'));
  t.true(hasHeader({'content-type': 'text/html'}, 'CoNtEnT-TyPe'));
});

test('returns false if header does not exist', (t) => {
  t.true(hasHeader({'Content-Type': 'text/html'}, 'foo') === false);
});

test('throws an error if header name is invalid', (t) => {
  t.throws(() => {
    hasHeader({}, INVALID_HEADER_NAME);
  }, InvalidHeaderNameError);
});
