// @flow

import type {
  HeaderNameType,
  HeadersType
} from '../types';
import {
  validateName
} from '../validators';

export default (headers: HeadersType, name: HeaderNameType): boolean => {
  validateName(name);

  const headerNames = Object.keys(headers);

  const headerIndex = headerNames.findIndex((strawHeaderName) => {
    return strawHeaderName.toLowerCase() === name.toLowerCase();
  });

  return headerIndex !== -1;
};
