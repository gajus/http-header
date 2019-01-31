// @flow

import type {
  HeadersType
} from '../types';
import {
  validateName
} from '../validators';

export default (headers: HeadersType, name: string): string | null => {
  validateName(name);

  const headerNames = Object.keys(headers);

  const headerName = headerNames.find((strawHeaderName) => {
    return strawHeaderName.toLowerCase() === name.toLowerCase();
  });

  if (!headerName) {
    return null;
  }

  return headerName;
};
