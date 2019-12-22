import { parseProto } from '../src';

test('Field type should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    string path = 1;
  }
  `;
  const ts = parseProto(source);
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('path: string');
});
