import fs from 'node:fs';
import path from 'node:path';
import { handleError } from '../utils/log.js';
import { parseProtoFiles } from '../core.js';
import { defaultFilename } from '../constant.js';

const { mkdirSync, readdirSync, writeFileSync } = fs;

/**
 * @param {import('../typedef.js').OptionType} options
 */
export function transformProtoFiles(options) {
  const { inputDir, outputDir } = options;

  if (!inputDir) {
    handleError('Please check your config. Parameter inputDir is not existed');
    return;
  }

  if (!outputDir) {
    handleError('Please check your config. Parameter outputDir is not existed');
    return;
  }

  const filenames = readdirSync(inputDir);
  const files = filenames.map((s) => path.resolve(inputDir, s));

  const res = parseProtoFiles(files, options);
  if (!res) return;

  mkdirSync(outputDir, { recursive: true });
  
  if(res.has(defaultFilename)) {
    res.delete(defaultFilename);
  }

  res.forEach((value, key) => {
    const outputFile = path.join(outputDir, key);
    let str = '';

    if (value.imports) {
      str = str + value.imports.join('');
    }
    str = str + value.definitions.join('');

    writeFileSync(outputFile, str, 'utf-8');
  });
}
