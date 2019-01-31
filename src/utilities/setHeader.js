// @flow

import type {
  HeadersType,
  HeaderValueType
} from '../types';
import {
  validateName,
  validateValue
} from '../validators';
import hasHeader from './hasHeader';
import findHeaderName from './findHeaderName';

export default (headers: HeadersType, name: string, value: HeaderValueType): HeadersType => {
  validateName(name);
  validateValue(value);

  const headerIsPresent = hasHeader(headers, name);

  const targetName = headerIsPresent ? findHeaderName(headers, name) : name;

  return {
    ...headers,
    [targetName]: value
  };
};
