// @flow

import type {
  HeaderValueType
} from '../types';
import {
  InvalidHeaderValueError
} from '../errors';

const invalidHeaderCharacterRegex = /[^\t\u0020-\u007e\u0080-\u00ff]/;

export default (value: HeaderValueType) => {
  if (invalidHeaderCharacterRegex.test(value)) {
    throw new InvalidHeaderValueError(value);
  }
};
