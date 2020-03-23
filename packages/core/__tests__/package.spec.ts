import { parseProto } from '../src';

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
  expect(ts).toContain('path: string');
  expect(ts).toContain('status: number');
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('interface MyMethod');
  expect(ts).toContain('Promise<MyResponse>');
});
