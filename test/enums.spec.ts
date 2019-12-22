import { parseProto } from '../src';

test('Field type should be converted', () => {
  const source = `
  syntax = "proto3";

  enum PhoneType 
  {
      MOBILE = 0;
      HOME = 1;
      WORK = 2;
  }
  `;
  const ts = parseProto(source);
  expect(ts).toContain('enum PhoneType');
  expect(ts).toContain('MOBILE;');
  expect(ts).toContain('HOME;');
  expect(ts).toContain('WORK;');
});
