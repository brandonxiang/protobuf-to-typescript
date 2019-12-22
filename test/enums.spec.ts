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
  console.log(ts);
  expect(ts).toContain('interface MyRequest');
  expect(ts).toContain('path: string');
});
