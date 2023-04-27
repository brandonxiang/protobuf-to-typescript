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

  console.log(inputDir, outputDir);

  const filenames = readdirSync(inputDir);
  const files = filenames.map((s) => path.resolve(inputDir, s));

  const _types = parseProtoFiles(files, options);

  mkdirSync(outputDir, { recursive: true });

  _types.forEach((value, key) => {
    const outputFile = path.join(outputDir, key);
    writeFileSync(outputFile, value.join(''), 'utf-8');
  });
}
