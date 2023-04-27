import { parseProto } from '../../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('Field type should be converted', () => {
  const source = `
  syntax = "proto3";

  message MyRequest {
    string path = 1;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface MyRequest');
  assert.match(ts, 'path?: string;');
});

test('Comment should be converted', () => {
  const source = `
  syntax = "proto3";

  // my request msg
  message MyRequest {
    string path = 1; //path msg
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, '//my request msg');
  assert.match(ts, 'path?: string; //path msg');
});

test('Field type should be converted', () => {
  const source = `
  syntax = "proto3";

  message MyRequest {
    required string path = 1;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface MyRequest');
  assert.match(ts, 'path: string;');
});

test('Field Array type should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    repeated string path = 1;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface MyRequest');
  assert.match(ts, 'path?: string[]');
});

test('Field type should include another field', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
     Group path = 1;
  }
  message Group {
    int32 id = 1;
    string name = 2;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface MyRequest');
  assert.match(ts, 'path?: Group');
  assert.match(ts, 'id?: number');
  assert.match(ts, 'name?: string');
});

test('Field type should include another field group', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    repeated Group path = 1;
  }
  message Group {
    required int32 id = 1;
    string name = 2;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface MyRequest');
  assert.match(ts, 'path?: Group[]');
  assert.match(ts, 'id: number');
  assert.match(ts, 'name?: string');
});

test.run();
