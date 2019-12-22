import { parseProto } from '../src';

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
  expect(ts).toContain('path: string');
  expect(ts).toContain('status: number');
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('interface MyMethod');
  expect(ts).toContain('Promise<MyResponse>');
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
  expect(ts).toContain('path: string');
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('interface MyMethod');
  expect(ts).toContain('(params: MyRequest): Promise<{}>');
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
  expect(ts).toContain('status: number');
  expect(ts).toContain('interface MyResponse');
  expect(ts).toContain('interface MyMethod');
  expect(ts).toContain('(): Promise<MyResponse>');
});
