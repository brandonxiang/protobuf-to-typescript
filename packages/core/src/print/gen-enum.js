import MagicString from 'magic-string';
import { indentPrefix } from '../constant.js';

/**
 * generate typescript files from proto info
 * @param {protobuf.Enum} proto
 * @param {import('../typedef.js').OptionType} options
 * @returns
 */
export function genEnum(proto, options) {
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
    result.append(`${s.name} = ${s.id}, //${s.comment}\n`);
  });

  const prefix = options.isDefinition ? '' : 'export ';

  result
    .indent(indentPrefix)
    .prepend(`${prefix}enum ${name} {\n`)
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
    result.append(`${s.name} = ${s.id}, //${s.comment}\n`);
  });

  const prefix = 'export ';

  result.prepend(`${prefix} const ${name} = {\n`).append('}\n\n');

  result.prepend(`/** @enum {number}\n`);

  return {
    definitions: result.toString(),
    imports: '',
  };
}
