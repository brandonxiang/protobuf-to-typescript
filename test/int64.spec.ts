import { parseProto } from '../src';

test('Field type with uint64 should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    uint64 path = 1;
  }
  `;
  const ts = parseProto(source);
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('path: string');
});

test('Field type with sint64 should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    sint64 path = 1;
  }
  `;
  const ts = parseProto(source);
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('path: string');
});

test('Field type with fixed64 should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    fixed64 path = 1;
  }
  `;
  const ts = parseProto(source);
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('path: string');
});

test('Field type with sfixed64 should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    sfixed64 path = 1;
  }
  `;
  const ts = parseProto(source);
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('path: string');
});
