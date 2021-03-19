import pbts from 'pbts';
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
  console.log(definition);
  writeFileSync(params.output, definition);
};

// convertAction({
//   input: '__tests__/__fixtures__/input/app/order.proto',
//   output: '__tests__/__fixtures__/output/order.ts'
// });

export default convertAction;
