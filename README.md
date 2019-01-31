# http-header

[![Travis build status](http://img.shields.io/travis/gajus/http-header/master.svg?style=flat-square)](https://travis-ci.org/gajus/http-header)
[![Coveralls](https://img.shields.io/coveralls/gajus/http-header.svg?style=flat-square)](https://coveralls.io/github/gajus/http-header)
[![NPM version](http://img.shields.io/npm/v/http-header.svg?style=flat-square)](https://www.npmjs.org/package/http-header)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

Utilities for working with HTTP headers.

## API

```js
deleteHeader(headers: HeadersType, name: string) => HeadersType;
findHeaderName(headers: HeadersType, name: string) => string | null;
getHeader(headers: HeadersType, name: string) => string | null;
hasHeader(headers: HeadersType, name: string) => boolean;
setHeader(headers: HeadersType, name: string, value: string) => HeadersType;

```
