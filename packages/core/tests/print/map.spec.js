import { parseProto } from '../../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('Map message type should be converted', () => {
  const source = `
  syntax = "proto3";

  message MapInt32String {
    map<int32, string> data = 1;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface MapInt32String');
  assert.match(ts, 'data?:');
  assert.match(ts, 'key: number');
  assert.match(ts, 'string');
});

test.run();
