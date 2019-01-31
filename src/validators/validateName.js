// @flow

import {
  InvalidHeaderNameError
} from '../errors';

const invalidNameRegex = /[^^_`a-zA-Z\-0-9!#$%&'*+.|~]/;

export default (name: string) => {
  if (invalidNameRegex.test(name) || name === '') {
    throw new InvalidHeaderNameError(name);
  }
};
