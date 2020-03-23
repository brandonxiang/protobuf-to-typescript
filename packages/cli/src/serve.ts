import pbts from 'pbts';
import protobuf from 'protobufjs';
import { join } from 'path';

export default async (pbPath: string) => {
  if (!pbPath) {
    console.log('Please input Protobuf Path');
    process.exit(1);
  }
  const cwd = process.cwd();
  const root = protobuf.loadSync(join(cwd, pbPath));
  const definition = pbts.parseProtoRoot(root, { isDefinition: true });
  console.log(definition);
};
