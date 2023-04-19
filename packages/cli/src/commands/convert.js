import pbts from '@pbts/core';
import protobuf from 'protobufjs';
import { join } from 'path';
import { writeFileSync } from 'fs-extra';

// export function parseProtoDirectory(
//   input: string,
//   output: string,
// ) {
// globby.
// }

/**
 * 
 * @param {{ input: string, output: string }} params
 */
const convertAction = async (params) => {
  if (!params.input) {
    console.log('Please enter the input file path');
    process.exit(1);
  }

  if (!params.output) {
    console.log('Please enter the output file path');
    process.exit(1);
  }

  console.log(params.input);

  const cwd = process.cwd();
  const filename = join(cwd, params.input);
  const root = protobuf.loadSync(filename);
  const definition = pbts.parseProtoRoot(root, { isDefinition: true });
  writeFileSync(params.output, definition);
  console.log(`[Success] "${params.output}" is converted successfully`);
};

export default convertAction;
