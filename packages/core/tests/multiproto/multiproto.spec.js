import { transformProtoFiles } from '../../src/node/io.js';
import path from 'path';
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { fileURLToPath } from 'url';
import { readdirSync } from 'fs';

test('Multi Proto should be converted', () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const inputDir = path.resolve(__dirname, '../../fixtures/input');
  const outputDir = path.resolve(__dirname, '../../fixtures/output');

  transformProtoFiles({ inputDir, outputDir });
  const files = readdirSync(outputDir);
  assert.equal(files, ['order.ts', 'product.ts']);
});

test.run();
