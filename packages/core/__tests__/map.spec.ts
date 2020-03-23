import { parseProto } from '../src';

test('Enum type should be converted', () => {
  const source = `
  syntax = "proto3";

  message MapInt32String {
    map<int32, string> data = 1;
  }
  `;
  const ts = parseProto(source);
  expect(ts).toContain('interface MapInt32String');
  expect(ts).toContain('data:');
  expect(ts).toContain('key: number');
  expect(ts).toContain('string');
});
