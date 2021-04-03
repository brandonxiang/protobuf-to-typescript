import pbts from '@pbts/core';
import protobuf from 'protobufjs';
import path, { join } from 'path';
import globby from 'globby';
import { writeFileSync } from 'fs-extra';

// export function parseProtoDirectory(
//   input: string,
//   output: string,
// ) {
// globby.
// }

const convertAction = async (params: { input: string; output: string }) => {
  if (!params.input || !params.output) {
    console.log('Please input Protobuf Path');
    process.exit(1);
  }
  const cwd = process.cwd();
  const filename = join(cwd, params.input);
  const root = protobuf.loadSync(filename);
  const definition = pbts.parseProtoRoot(root, { isDefinition: true });
  writeFileSync(params.output, definition);
  return 'Convert Success!';
};

export default convertAction;
