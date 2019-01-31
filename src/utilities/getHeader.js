// @flow

import type {
  HeaderNameType,
  HeadersType,
  HeaderValueType
} from '../types';
import {
  validateName
} from '../validators';
import {
  HeaderNotFoundError
} from '../errors';
import hasHeader from './hasHeader';
import getHeaderName from './getHeaderName';

export default (headers: HeadersType, name: HeaderNameType): HeaderValueType => {
  validateName(name);

  if (!hasHeader(headers, name)) {
    throw new HeaderNotFoundError(name);
  }

  return String(headers[getHeaderName(headers, name)]);
};
