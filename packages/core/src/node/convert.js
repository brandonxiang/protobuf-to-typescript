import { parseProtoRoot } from '../core.js';
import { transformProtoFiles } from './io.js';
import protobuf from 'protobufjs';
import path from 'path';
import fs from 'node:fs';
import { handleError } from '../utils/log.js';
import { MODE, OUTPUT_TYPE } from '../constant.js';

/**
 * 
 * @param {string} input 
 * @param {string} output 
 * @param {import('../typedef.js').OptionType} options
 */
function convertFileTypescript (input, output, options) {
  const root = protobuf.loadSync(input);
  const definition = parseProtoRoot(root, options);
  fs.writeFileSync(output, definition);
  console.log(`[Success] "${output}" is converted successfully`);
}

/**
 * @param {import('../typedef.js').CommandOptionType} params
 */
const convertCommand = async (params) => {

  const {input: inputParams, output: outputParams, ...rest} = params;

  if (!inputParams) {
    handleError('Please enter the input file path');
    return;
  }

  if (!outputParams) {
    handleError('Please enter the output file path');
    return;
  }

  if (rest.outputType && !Object.values(OUTPUT_TYPE).includes(rest.outputType)) {
    handleError('Please enter the correct outputType, including jsdoc,typescript,definition');
    return;
  }

  if (rest.mode && !Object.values(MODE).includes(rest.mode)) {
    handleError('Please enter the correct mode, including normal,strict');
    return;
  }

  const input = path.resolve(inputParams);
  const output = path.resolve(outputParams);

  if (!fs.existsSync(input)) {
    handleError(`[Error] input file not found: ${input}`);
    return;
  }

  const inputStat = fs.statSync(input);

  /**
   * @type {import('node:fs').Stats}
   */
  let outputStat;

  if (inputStat.isDirectory()) {
    // if input is a directory, output must be a directory
    if(!fs.existsSync(output)) {
      fs.mkdirSync(output, { recursive: true });
    }  
    outputStat = fs.statSync(output);
    if(!outputStat.isDirectory()) {
      handleError('Parameter input is a directory, but output is not');
      return;
    }

    transformProtoFiles({
      inputDir: input,
      outputDir: output,
      ...rest,
    });
    console.log(`[Success] all are converted successfully`);
  } else {
    // if input is a file, output must be a file
    if(!fs.existsSync(output)) {
      const outputDir = path.dirname(output);
      fs.mkdirSync(outputDir, { recursive: true });
      convertFileTypescript(input, output, rest);
    } else {
      outputStat = fs.statSync(output);
      if (outputStat.isDirectory()) {
        handleError('Parameter output is a directory, but input is not');
        return;
      }
      convertFileTypescript(input, output, rest);
    }
  }
};

export { convertCommand };
