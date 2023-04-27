import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { parseProto } from '../../src/index.js';

test('Enum type should be converted', () => {
  const source = `
  syntax = "proto3";

  enum ErrorCode {
    kSuccess = 0;  // success
    kFail = 1;     // fail
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'kSuccess = 0, //success');
  assert.match(ts, 'kFail = 1, //fail');
});

test.run();
