// @flow

import type {
  HeaderNameType,
  HeadersType
} from '../types';
import {
  validateName
} from '../validators';
import {
  HeaderNotFoundError
} from '../errors';

export default (headers: HeadersType, name: HeaderNameType): HeaderNameType => {
  validateName(name);

  const headerNames = Object.keys(headers);

  const headerName = headerNames.find((strawHeaderName) => {
    return strawHeaderName.toLowerCase() === name.toLowerCase();
  });

  if (!headerName) {
    throw new HeaderNotFoundError(name);
  }

  return headerName;
};
