// @flow

import type {
  HeaderNameType
} from '../types';
import {
  InvalidHeaderNameError
} from '../errors';

const invalidNameRegex = /[^^_`a-zA-Z\-0-9!#$%&'*+.|~]/;

export default (name: HeaderNameType) => {
  if (invalidNameRegex.test(name) || name === '') {
    throw new InvalidHeaderNameError(name);
  }
};
