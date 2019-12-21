import { parseProto } from '../src';

test('Field type should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    string path = 1;
  }
  `;
  const ts = parseProto(source);
  expect(ts).toContain('interface');
  expect(ts).toContain('MyRequest');
  expect(ts).toContain('string');
  expect(ts).toContain('path');
});

test('Field Array type should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    repeated string path = 1;
  }
  `;
  const ts = parseProto(source);
  expect(ts).toContain('interface');
  expect(ts).toContain('MyRequest');
  expect(ts).toContain('string[]');
  expect(ts).toContain('path');
});
