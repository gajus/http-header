// @flow

import type {
  HeadersType
} from '../types';
import {
  validateName
} from '../validators';
import findHeaderName from './findHeaderName';

export default (headers: HeadersType, name: string): HeadersType => {
  validateName(name);

  const caseSensitiveName = findHeaderName(headers, name);
  const newHeaders = {
    ...headers
  };

  if (caseSensitiveName) {
    // eslint-disable-next-line fp/no-delete
    delete newHeaders[caseSensitiveName];
  }

  return newHeaders;
};
