// @flow

import type {
  HeaderNameType,
  HeadersType
} from '../types';
import {
  validateName
} from '../validators';
import hasHeader from './hasHeader';
import getHeaderName from './getHeaderName';

export default (headers: HeadersType, name: HeaderNameType): HeadersType => {
  validateName(name);

  if (!hasHeader(headers, name)) {
    return headers;
  }

  const originalHeaderName = getHeaderName(headers, name);
  const newHeaders = {
    ...headers
  };

  // eslint-disable-next-line fp/no-delete
  delete newHeaders[originalHeaderName];

  return newHeaders;
};
