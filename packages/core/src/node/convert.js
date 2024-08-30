import { parseProtoRoot } from '../core.js';
import { transformProtoFiles } from './io.js';
import protobuf from 'protobufjs';
import path from 'path';
import fs from 'node:fs';
import { handleError } from '../utils/log.js';

/**
 * 
 * @param {string} input 
 * @param {string} output 
 */
function convertFileTypescript (input, output) {
  const root = protobuf.loadSync(input);
  const definition = parseProtoRoot(root, { isDefinition: true });
  fs.writeFileSync(output, definition);
  console.log(`[Success] "${output}" is converted successfully`);
}

/**
 * @param {{ input: string, output: string }} params
 */
const convertCommand = async (params) => {
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
      isDefinition: true,
    });
    console.log(`[Success] all are converted successfully`);
  } else {
    // if input is a file, output must be a file
    if(!fs.existsSync(output)) {
      const outputDir = path.dirname(output);
      fs.mkdirSync(outputDir, { recursive: true });
      convertFileTypescript(input, output);
    } else {
      outputStat = fs.statSync(output);
      if (outputStat.isDirectory()) {
        handleError('Parameter output is a directory, but input is not');
        return;
      }
      convertFileTypescript(input, output);
    }
  }
};

export { convertCommand };
