import MagicString from 'magic-string';
import { TYPE_REFLECTION, indentPrefix } from '../constant.js';

/**
 *
 * @param {Partial<protobuf.IMapField>} p
 * @returns
 */
function getKeyType(p) {
  if (p.keyType) {
    return TYPE_REFLECTION[p.keyType] || p.keyType;
  }
  return '';
}

/**
 *
 * @param {string} name
 * @param {{[k: string]: protobuf.Field }} fields
 * @returns
 */
function readField(name, fields) {
  const params = Object.keys(fields).map((paramName) => {
    const paramValue = fields[paramName];
    const { type, repeated, id, comment, required } = paramValue;

    return {
      type: TYPE_REFLECTION[type] || type,
      keyType: getKeyType(paramValue),
      name: paramName,
      repeated,
      id,
      comment,
      required,
    };
  });

  return {
    name: name,
    params: params.sort((a, b) => a.id - b.id),
  };
}

/**
 *
 * @param {protobuf.Type} proto
 * @param {OptionType} options
 * @returns
 */
export function genType(proto, options) {
  const { name, fields, comment } = proto;

  const items = readField(name, fields);

  const result = new MagicString('');

  items.params.forEach((item) => {
    const optionalChar = item.required ? '' : '?';

    if (item.repeated) {
      result.append(`${item.name}${optionalChar}: ${item.type}[];`);
    } else if (item.keyType) {
      result.append(
        `${item.name}${optionalChar}: {[key: ${item.keyType}]: ${item.type}};`
      );
    } else {
      result.append(`${item.name}${optionalChar}: ${item.type};`);
    }
    if (item.comment) {
      result.append(` //${item.comment}`);
    }
    result.append('\n');
  });

  const prefix = options.isDefinition ? '' : 'export ';

  result
    .indent(indentPrefix)
    .prepend(`${prefix}interface ${items.name} {\n`)
    .append(`}\n\n`);

  if (comment) {
    result.prepend(`//${comment}\n`);
  }

  return result.toString();
}
