import { parseProto } from '../src';

test('Field type should be converted', () => {
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
  expect(ts).toContain('string');
  expect(ts).toContain('path');
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('interface MyMethod');
  expect(ts).toContain('Promise<MyResponse>');
});
