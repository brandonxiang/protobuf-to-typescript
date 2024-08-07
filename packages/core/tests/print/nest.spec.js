import { parseProto } from '../../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('nest type should be converted', () => {
  const source = `
  syntax = "proto3";

  message Data {
    int32 id = 1;
  }

  message Message1 {
    Data data = 1;
  }

  message Message2 {
    Data data = 1;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface Data');
  assert.match(ts, 'interface Message1');
  assert.match(ts, 'interface Message2');
  assert.match(ts, 'data?: Data;');
});


test('nest type should be converted', () => {
  const source = `
  syntax = "proto3";

  message Message1 {
    message Data {
      int32 id = 1;
    }
    Data data = 1;
  }

  message Message2 {
    message Data {
      int32 id = 1;
    }
    Data data = 1;
  }
  `;

  const ts = parseProto(source);
  console.log(ts);
  assert.match(ts, 'interface Data');
  assert.match(ts, 'interface Message1');
  assert.match(ts, 'interface Message2');
  assert.match(ts, 'data?: Data;');
});

test.run();