import { parseProto } from '../src';
import * as typescript from 'typescript';

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

test('Field Array type should be converted', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    repeated string path = 1;
  }
  `;
  const ts = parseProto(source);
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('path: string[]');
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
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('path: Group');
  expect(ts).toContain('id: number');
  expect(ts).toContain('name: string');
});

test('Field type should include another field group', () => {
  const source = `
  syntax = "proto3";
  message MyRequest {
    repeated Group path = 1;
  }
  message Group {
    int32 id = 1;
    string name = 2;
  }
  `;
  const ts = parseProto(source);
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('path: Group[]');
  expect(ts).toContain('id: number');
  expect(ts).toContain('name: string');
});
