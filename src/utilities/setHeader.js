// @flow

import type {
  HeaderNameType,
  HeadersType,
  HeaderValueType
} from '../types';
import {
  validateName,
  validateValue
} from '../validators';
import hasHeader from './hasHeader';
import getHeaderName from './getHeaderName';

export default (headers: HeadersType, name: HeaderNameType, value: HeaderValueType): HeadersType => {
  validateName(name);
  validateValue(value);

  const headerIsPresent = hasHeader(headers, name);

  const targetName = headerIsPresent ? getHeaderName(headers, name) : name;

  return {
    ...headers,
    [targetName]: value
  };
};
