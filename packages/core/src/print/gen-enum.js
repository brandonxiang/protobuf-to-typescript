import MagicString from 'magic-string';
import { indentPrefix, OUTPUT_TYPE } from '../constant.js';
import protobuf from 'protobufjs';

const { Type } = protobuf;

/**
 * generate typescript files from proto info
 * @param {protobuf.Enum} proto
 * @param {import('../typedef.js').OptionType} options
 * @returns
 */
export function genEnum(proto, options) {
  const { values, comments, name, parent } = proto;

  const items = Object.keys(values)
    .map((key) => ({
      name: key,
      id: values[key],
      comment: comments[key],
    }))
    .sort((a, b) => a.id - b.id);

  const result = new MagicString('');

  items.forEach((s) => {
    if (s.comment) {
      result.append(`//${s.comment}\n`);
    }
    result.append(`${s.name} = ${s.id},\n`);
  });

  const prefix = options.outputType === OUTPUT_TYPE.definition ? '' : 'export ';

  let interfaceName = name;

  // deal with nested type conflict problem
  if (parent && parent instanceof Type && parent.name) {
    interfaceName = parent.name + interfaceName;
  }

  result
    .indent(indentPrefix)
    .prepend(`${prefix}enum ${interfaceName} {\n`)
    .append('}\n\n');

  return {
    definitions: result.toString(),
    imports: '',
  };
}

/**
 * generate jsdoc from proto info
 * @param {protobuf.Enum} proto
 * @param {import('../typedef.js').OptionType} options
 * @returns
 */
export function getJsdocEnum(proto, options) {
  const { values, comments, name } = proto;

  const items = Object.keys(values)
    .map((key) => ({
      name: key,
      id: values[key],
      comment: comments[key],
    }))
    .sort((a, b) => a.id - b.id);

  const result = new MagicString('');

  items.forEach((s) => {
    if (s.comment) {
      result.append(`//${s.comment}\n`);
    }
    result.append(`${s.name} = ${s.id},\n`);
  });

  const prefix = 'export ';

  result.prepend(`${prefix} const ${name} = {\n`).append('}\n\n');

  result.prepend(`/** @enum {number}\n`);

  return {
    definitions: result.toString(),
    imports: '',
  };
}
