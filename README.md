# http-header

[![Travis build status](http://img.shields.io/travis/gajus/http-header/master.svg?style=flat-square)](https://travis-ci.org/gajus/http-header)
[![Coveralls](https://img.shields.io/coveralls/gajus/http-header.svg?style=flat-square)](https://coveralls.io/github/gajus/http-header)
[![NPM version](http://img.shields.io/npm/v/http-header.svg?style=flat-square)](https://www.npmjs.org/package/http-header)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

Utilities for working with HTTP headers.

## API

```js
import {
  deleteHeader,
  getHeader,
  getHeaderName,
  hasHeader,
  HeaderNotFoundError,
  InvalidHeaderNameError,
  InvalidHeaderValueError,
  setHeader,
  setHeaderName
} from 'http-header';
import type {
  HeaderNameType,
  HeadersType,
  HeaderValueType
} from 'http-header';

deleteHeader(headers: HeadersType, name: HeaderNameType) => HeadersType;
getHeader(headers: HeadersType, name: HeaderNameType) => HeaderValueType;
getHeaderName(headers: HeadersType, name: HeaderNameType) => HeaderNameType;
hasHeader(headers: HeadersType, name: HeaderNameType) => boolean;
setHeader(headers: HeadersType, name: HeaderNameType, value: HeaderValueType) => HeadersType;
setHeaderName(headers: HeadersType, oldName: HeaderNameType, newName: HeaderNameType) => HeadersType;

```

### Behaviour

#### `HeaderNotFoundError` error

`getHeader` and `getHeaderName` throw `HeaderNotFoundError` if the specified header cannot be found.

Use `hasHeader` to check if the header exists before using `getHeader` or `getHeaderName`, e.g.

```js
import {
  hasHeader,
  getHeader
} from 'http-header';

if (hasHeader('Content-Type')) {
  getHeader('Content-Type');
}

```
