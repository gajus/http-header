// @flow

import type {
  HeadersType
} from '../types';
import {
  validateName
} from '../validators';
import findHeaderName from './findHeaderName';

export default (headerCollection: HeadersType, name: string): boolean => {
  validateName(name);

  return Boolean(findHeaderName(headerCollection, name));
};
