# pb-to-typescript

<a href="https://github.com/brandonxiang/pb-to-typescript/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/brandonxiang/pb-to-typescript" alt="license">
</a>

## Intro

A converter to transform from Protobuf to Typescript definition files, which is inspired by [geotho/protobuf-to-typescript](https://github.com/geotho/protobuf-to-typescript). However, this converter is powered by [protobuf.js](https://github.com/protobufjs/protobuf.js), which is more tend to regularity and principle.

Protobuf is currently used in micro-service for back end. As a front end web developer, you can generate Typescript defination files based on Protobuf in case to develop your web page easily.

## Usage


```javascript
import { parseProto } from 'pb-to-typescript';

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


## Demo 

[Live Demo](https://brandonxiang.github.io/pb-to-typescript/example)

## License

[MIT](LICENSE)
