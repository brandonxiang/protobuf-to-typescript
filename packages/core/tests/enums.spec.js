import { parseProto } from '../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

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
  assert.match(ts, 'enum PhoneType');
  assert.match(ts, 'MOBILE = 0,');
  assert.match(ts, 'HOME = 1,');
  assert.match(ts, 'WORK = 2,');
});

test('Enum in a message should be converted', () => {
  const source = `
  syntax = "proto3";

  message MyRequest {
    string path = 1;
    PhoneType type = 2;
    enum PhoneType 
    {
        MOBILE = 0;
        HOME = 1;
        WORK = 2;
    }
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'type: PhoneType');
  assert.is(ts.indexOf('PhoneType: PhoneType') > -1, false);
  assert.match(ts, 'enum PhoneType');
  assert.match(ts, 'MOBILE = 0,');
  assert.match(ts, 'HOME = 1,');
  assert.match(ts, 'WORK = 2,');
});

test('Enum output a message should be converted', () => {
  const source = `
  syntax = "proto3";

  message MyRequest {
    string path = 1;
    PhoneType type = 2;
  }

  enum PhoneType 
    {
        MOBILE = 0;
        HOME = 1;
        WORK = 2;
    }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'type: PhoneType');
  assert.is(ts.indexOf('PhoneType: PhoneType') > -1, false);
  assert.match(ts, 'enum PhoneType');
  assert.match(ts, 'MOBILE = 0,');
  assert.match(ts, 'HOME = 1,');
  assert.match(ts, 'WORK = 2,');
});

test.run();