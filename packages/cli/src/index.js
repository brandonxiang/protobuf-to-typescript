import { parseProtoRoot } from '@pbts/core';
import { transformProtoFiles } from './utils/io.js';
import protobuf from 'protobufjs';
import path from 'path';
import fs from 'fs-extra';
import { handleError } from './utils/log.js';

/**
 * @param {{ input: string, output: string }} params
 */
const convertAction = async (params) => {
  if (!params.input) {
    handleError('Please enter the input file path');
    return;
  }

  if (!params.output) {
    handleError('Please enter the output file path');
    return;
  }

  const input = path.resolve(params.input);
  const output = path.resolve(params.output);

  const inputStat = fs.statSync(input);
  const outputStat = fs.statSync(output);

  if (inputStat.isDirectory() && !outputStat.isDirectory()) {
    handleError('Parameter input is a directory, but output is not');
    return;
  }
  if (!inputStat.isDirectory() && outputStat.isDirectory()) {
    handleError('Parameter output is a directory, but input is not');
    return;
  }

  if (inputStat.isDirectory() && outputStat.isDirectory()) {
    transformProtoFiles({
      inputDir: input,
      outputDir: output,
      isDefinition: true,
    });
    console.log(`[Success] all are converted successfully`);
  }

  if (!inputStat.isDirectory() && !outputStat.isDirectory()) {
    const root = protobuf.loadSync(input);
    const definition = parseProtoRoot(root, { isDefinition: true });
    fs.writeFileSync(params.output, definition);
    console.log(`[Success] "${params.output}" is converted successfully`);
  }
};

export default convertAction;
