import { parseProto } from '../src';

test('Enum type should be converted', () => {
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
  expect(ts).toContain('MOBILE = 0,');
  expect(ts).toContain('HOME = 1,');
  expect(ts).toContain('WORK = 2,');
});

test('Enum in a message should be converted', () => {
  const source = `
  syntax = "proto3";

  message MyRequest {
    string path = 1;
    enum PhoneType 
    {
        MOBILE = 0;
        HOME = 1;
        WORK = 2;
    }
  }
  `;
  const ts = parseProto(source);
  expect(ts).toContain('PhoneType: PhoneType');
  expect(ts).toContain('enum PhoneType');
  expect(ts).toContain('MOBILE = 0,');
  expect(ts).toContain('HOME = 1,');
  expect(ts).toContain('WORK = 2,');
});
