# pbts

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/pbts.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/pbts
[download-image]: https://img.shields.io/npm/dm/pbts.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/pbts

It is the cli for pbts. You can convert pb to ts file by command line

## CLI Usage

### Global Installation

step 1 Install pbts

```shell
npm i pbts -g
```

step 2 Convert your protobuffer to Typescript Definition File

```shell
pbts -i input/app/order.proto -o output/order.ts
```

### No Installation

Please use npx for short.

```shell
npx pbts -i packages/cli/__tests__/__fixtures__/input/app/single.proto -o packages/cli/__tests__/__fixtures__/output/single.ts
```

## Javascript API Usage

## Browser Library Usage

```javascript
import { parseProto } from 'pbts/core';

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

## Node Library Usage

```javascript
import { parseProto } from 'pbts';

const source = `
syntax = "proto3";
message MyRequest {
  string path = 1;
}
`;

const ts = parseProto(source);
```
