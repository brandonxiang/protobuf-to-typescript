import { parseProto } from '../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('Method type should be converted', () => {
  const source = `
  syntax = "proto3";

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

test('Method type should be converted with emtry response', () => {
  const source = `
    syntax = "proto3";
  
    service MyService {
        rpc MyMethod (MyRequest) returns (google.protobuf.Empty) {};
    }
    
    message MyRequest {
        string path = 1;
    }
    
    `;
  const ts = parseProto(source);
  assert.match(ts, 'path: string');
  assert.match(ts, 'interface MyRequest');
  assert.match(ts, 'interface MyMethod');
  assert.match(ts, '(params: MyRequest): Promise<{}>');
});

test('Method type should be converted with emtry request', () => {
  const source = `
      syntax = "proto3";
    
      service MyService {
          rpc MyMethod (google.protobuf.Empty) returns (MyResponse) {};
      }
      
      message MyResponse {
        int32 status = 1;
    }
      `;
  const ts = parseProto(source);
  assert.match(ts, 'status: number');
  assert.match(ts, 'interface MyResponse');
  assert.match(ts, 'interface MyMethod');
  assert.match(ts, '(): Promise<MyResponse>');
});

test.run();
