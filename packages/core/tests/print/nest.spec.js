import { parseProto } from '../../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('nest type1 should be converted', () => {
  const source = `
  syntax = "proto3";

  message Data {
    int32 id = 1;
  }

  message Message1 {
    Data data = 1;
  }

  message Message2 {
    Data data = 1;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface Data');
  assert.match(ts, 'interface Message1');
  assert.match(ts, 'interface Message2');
  assert.match(ts, 'data?: Data;');
});


test('nest type2 should be converted', () => {
  const source = `
  syntax = "proto3";

  message Message1 {
    message Data {
      int32 id = 1;
    }
    Data data = 1;
  }

  message Message2 {
    message Data {
      int32 id = 1;
    }
    Data data = 1;
  }
  `;

  const ts = parseProto(source);
  assert.match(ts, 'interface Message1Data');
  assert.match(ts, 'interface Message2Data');
  assert.match(ts, 'interface Message1');
  assert.match(ts, 'interface Message2');
  assert.match(ts, 'data?: Message1Data;');
  assert.match(ts, 'data?: Message2Data;');
});

test('nest type3 should be converted', () => {
  const source = `
  syntax = "proto3";

  message Data {
    int32 id = 1;
  }

  message Message1 {
    Data data = 1;
  }

  message Message2 {
    Data data = 1;
  }
  `;
  const ts = parseProto(source, { isJsdoc: true });
  assert.match(ts, '@typedef {Object} Message1');
  assert.match(ts, '@typedef {Object} Message2');
  assert.match(ts, '@typedef {Object} Data');
});

test('nest type4 should be converted', () => {
  const source = `
  syntax = "proto3";

  message Message1 {
    message Data {
      int32 id = 1;
    }
    Data data = 1;
  }

  message Message2 {
    message Data {
      int32 id = 1;
    }
    Data data = 1;
  }
  `;
  const ts = parseProto(source, { isJsdoc: true });
  assert.match(ts, '@typedef {Object} Message1Data');
  assert.match(ts, '@typedef {Object} Message2Data');
  assert.match(ts, '@typedef {Object} Message1');
  assert.match(ts, '@typedef {Object} Message2');
});

test('nest type5 should be converted', () => {
  const source = `
  syntax = "proto3";

  message Message1 {
    message Data {
      int32 id = 1;
    }
    Data data = 1;
    Finder finder = 2;
  }
  `;
  const ts = parseProto(source);
  assert.match(ts, 'interface Message1');
  assert.match(ts, 'data?: Message1Data');
  assert.match(ts, 'finder?: Finder');
  assert.match(ts, 'interface Message1Data');
  assert.match(ts, 'id?: number');
});

test('nest type6 should be converted', () => {
  const source = `
  syntax = "proto3";

  message Message1 {
    message Data {
      int32 id = 1;
    }
    Data data = 1;
    Finder finder = 2;
  }

  `;
  const ts = parseProto(source, { isJsdoc: true });
  assert.match(ts, '@typedef {Object} Message1Data');
  assert.match(ts, '* @prop {Finder=} finder ');
  assert.match(ts, '@typedef {Object} Message1');
});

test.run();

