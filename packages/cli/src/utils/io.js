import fs from 'fs-extra';
import path from 'node:path';
import { handleError } from './log.js';
import { parseProtoFiles } from '@pbts/core';

const { mkdirSync, readdirSync, writeFileSync } = fs;

/**
 * @param {OptionType} options
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

  mkdirSync(outputDir, { recursive: true });

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
