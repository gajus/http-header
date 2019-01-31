// @flow

import type {
  HeadersType
} from '../types';
import {
  validateName
} from '../validators';
import findHeaderName from './findHeaderName';

export default (headers: HeadersType, name: string): string => {
  validateName(name);

  const caseSensitiveName = findHeaderName(headers, name);

  return caseSensitiveName ? String(headers[caseSensitiveName]) : null;
};
