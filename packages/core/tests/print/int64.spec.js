import { parseProto } from '../../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('Field type with uint64 should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    uint64 path = 1;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface MyRequest');
  assert.match(ts, 'path?: string');
});

test('Field type with sint64 should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    sint64 path = 1;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface MyRequest');
  assert.match(ts, 'path?: string');
});

test('Field type with fixed64 should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    fixed64 path = 1;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface MyRequest');
  assert.match(ts, 'path?: string');
});

test('Field type with sfixed64 should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    sfixed64 path = 1;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface MyRequest');
  assert.match(ts, 'path?: string');
});

test.run();
