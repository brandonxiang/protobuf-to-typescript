import protobuf from "protobufjs";
import path from 'path';
import { printField } from "./printField";
import { printMethod } from "./printMethod";
import fs from 'fs';

function parseProto() {

  protobuf.load('rpc.proto', (err, root) => {
    if(err) {
      console.log(err);
    } else {
      const output = parseJson(root!.toJSON()!);
      fs.writeFileSync('rpc.d.ts', output, {encoding: 'utf-8'})
    }
  })
}

function parseJson(json: protobuf.INamespace) {
  const nested = json.nested;
  if(nested) {
    const output = Object.keys(nested).map((name) => {
      const value = nested[name] as {[key:string]: any};

      const res = Object.keys(value).map((category) => {
        if(category === 'fields') return printField(name, value[category]);
        if(category === 'methods') return printMethod(name, value[category]);
      })
      return res;
    }).reduce((a, b) => a.concat(b), []).join('');

    return output;
  }
  return ''
}
parseProto()
