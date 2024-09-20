import { mockResponse } from '../../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('Method type should be converted to number', () => {
  const source = `
  syntax = "proto3";
  
  service Greeter {
      rpc SayHello (HelloRequest) returns (HelloReply) {}
  }
  
  message HelloRequest {
    string name = 1;
  }
  
  message Teacher {
    string name = 1;
  }
  
  message HelloReply {
      string message = 1;
      int64 test = 2;
      Teacher teacher = 3;
  }
  `;
  const ts = mockResponse(source, 'SayHello');
  assert.equal(ts, {
    message: 'Hello',
    test: 20,
    teacher: { name: 'Hello' }
  });
});

test('Method type should be converted to string', () => {
  const source = `
  syntax = "proto3";
  
  service Greeter {
      rpc SayHello (HelloRequest) returns (HelloReply) {}
  }
  
  message HelloRequest {
    string name = 1;
  }
  
  message Teacher {
    string name = 1;
  }
  
  message HelloReply {
      string message = 1;
      int64 test = 2;
      Teacher teacher = 3;
  }
  `;
  const ts = mockResponse(source, 'SayHello', {mode: 'strict'});
  assert.equal(ts, {
    message: 'Hello',
    test: '20',
    teacher: { name: 'Hello' }
  });
});

test.run();