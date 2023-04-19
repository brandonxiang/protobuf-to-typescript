import { mockResponse } from '../../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('Method type should be converted with package', () => {
  const source = `
  syntax = "proto3";
  
  service Greeter {
      rpc SayHello (HelloRequest) returns (HelloReply) {}
  }
  
  message HelloRequest {
    string name = 1;
  }
  
  message HelloReply {
      string message = 1;
      map<int32, string> test = 2;
  }
  `;
  const ts = mockResponse(source, 'SayHello');
  assert.equal(ts, { message: 'Hello', test: { '10': 'Hello' } });
});

test.run();