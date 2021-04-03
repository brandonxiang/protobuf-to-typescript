# pbts

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
