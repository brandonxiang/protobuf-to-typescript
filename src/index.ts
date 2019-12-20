import protobuf from "protobufjs";
import path from 'path';

function parseProto() {
  const url = path.join(process.cwd(), 'rpc.proto')

  protobuf.load('rpc.proto', (err, root) => {
    //@ts-ignore
    console.log(root?.toJSON().nested);
  })
}

function parseJson() {
  parseJson( )
}

parseProto()
