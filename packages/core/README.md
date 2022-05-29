# pbts

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@pbts/core.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@pbts/core
[download-image]: https://img.shields.io/npm/dm/@pbts/core.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/@pbts/core


The core repo to convert protobuffer to typescript definition file.

## Usage

```javascript
import { parseProto } from '@pbts/core';

const source = `
syntax = "proto3";
message MyRequest {
  string path = 1;
}
`;

const ts = parseProto(source);
```

The result is as follow.

```typescript
interface MyRequest {
  path: string;
}
```

## Parameter

### Case 1 Typescript Definition File (.d.ts)

Default is false.

```javascript
const ts = parseProto(source, {isDefinition: true});
```

### Case 2 Request and Response Parameter (Optional)

Default is false.

```javascript
const ts = parseProto(source, {isParamOptional: true});
```
