// @flow

import type {
  HeadersType,
  HeaderNameType
} from '../types';
import {
  validateName
} from '../validators';
import {
  HeaderNotFoundError
} from '../errors';
import deleteHeader from './deleteHeader';
import getHeader from './getHeader';
import hasHeader from './hasHeader';
import setHeader from './setHeader';

export default (headers: HeadersType, oldName: HeaderNameType, newName: HeaderNameType): HeadersType => {
  validateName(oldName);
  validateName(newName);

  if (!hasHeader(headers, oldName)) {
    throw new HeaderNotFoundError(oldName);
  }

  const value = getHeader(headers, oldName);

  return setHeader(
    deleteHeader(headers, oldName),
    newName,
    value
  );
};
