import { parseProto } from '../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';


test('Proto with Package Name should be converted', () => {
  const source = `
  syntax = "proto3";

  package test.account;

  service MyService {
      rpc MyMethod (MyRequest) returns (MyResponse);
  }
  
  message MyRequest {
      string path = 1;
  }
  
  message MyResponse {
      int32 status = 1;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'path: string');
  assert.match(ts, 'status: number');
  assert.match(ts, 'interface MyRequest');
  assert.match(ts, 'interface MyMethod');
  assert.match(ts, 'Promise<MyResponse>');
});

test.run();