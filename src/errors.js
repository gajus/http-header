// @flow

/* eslint-disable fp/no-class */

import ExtendableError from 'es6-error';

class HttpHeaderError extends ExtendableError {}

export class InvalidHeaderNameError extends HttpHeaderError {
  constructor (name: string) {
    super('"' + name + '" is illegal HTTP header name.');
  }
}

export class InvalidHeaderValueError extends HttpHeaderError {
  constructor (name: string) {
    super('"' + name + '" is illegal HTTP header value.');
  }
}
