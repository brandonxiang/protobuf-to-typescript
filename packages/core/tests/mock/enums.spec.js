import { mockResponse } from '../../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('Enum in a message should be converted', () => {
  const source = `
  syntax = "proto3";

  service MyService {
    rpc MyMethod (MyRequest) returns (MyResponse);
  }

  message MyRequest {
      string path = 1;
  }

  message MyResponse {
    string path = 1;
    PhoneType type = 2;
    enum PhoneType 
    {
        MOBILE = 0;
        HOME = 1;
        WORK = 2;
    }
  }
  `;
  const ts = mockResponse(source, 'MyMethod');
  assert.equal(ts, {
    path: 'Hello',
    type: 0
  });
});

test('Enum outside a message should be converted', () => {
  const source = `
  syntax = "proto3";

  service MyService {
    rpc MyMethod (MyRequest) returns (MyResponse);
  }

  message MyRequest {
      string path = 1;
  }

  message MyResponse {
    string path = 1;
    PhoneType type = 2;
  }

  enum PhoneType 
    {
        MOBILE = 0;
        HOME = 1;
        WORK = 2;
    }
  `;
  const ts = mockResponse(source, 'MyMethod');
  assert.equal(ts, {
    path: 'Hello',
    type: 0
  });
});

test.run();