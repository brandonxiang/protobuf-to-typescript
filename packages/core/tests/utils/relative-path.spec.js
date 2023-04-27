import relativePath from '../../src/utils/relative-path.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('calculate relative path only pop', () => {
  const res = relativePath('/hello/world', '/hello');
  assert.is(res, '..');
});

test('calculate relative path only push', () => {
  const res = relativePath('/hello/world', '/hello/world/brandon');
  assert.is(res, './brandon');
});

test('calculate relative path both pop and push ', () => {
  const res = relativePath('/hello/world/xiang', '/hello/world/brandon');
  assert.is(res, '../brandon');
});

test('calculate relative path no pop and push ', () => {
  const res = relativePath('/hello/world', '/hello/world');
  assert.is(res, './');
});

test.run();
