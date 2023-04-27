import MagicString from 'magic-string';
import { TYPE_REFLECTION, indentPrefix } from '../constant.js';
import relativePath, { getDirectory } from '../utils/relative-path.js';

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
  /** @type {string[]} */
  let importItems = [];

  const params = Object.keys(fields).map((paramName) => {
    const paramValue = fields[paramName];
    const { type, repeated, id, comment, required } = paramValue;

    if (!TYPE_REFLECTION[type]) {
      importItems.push(type);
    }

    return {
      name: paramName,
      type: TYPE_REFLECTION[type] || type,
      keyType: getKeyType(paramValue),
      repeated,
      id,
      comment,
      required,
    };
  });

  return {
    name: name,
    params: params.sort((a, b) => a.id - b.id),
    importItems,
  };
}

/**
 *
 * @param {protobuf.Type} proto
 * @param {OptionType} options
 * @returns
 */
export function genType(proto, options) {
  const { name, fields, comment, filename } = proto;

  const items = readField(name, fields);

  const result = new MagicString('');

  const imports =
    items.importItems
      .map((item) => {
        const typeOrEnum = proto.lookupTypeOrEnum(item);

        if (filename && typeOrEnum.filename) {
          const from = getDirectory(filename);
          const to = typeOrEnum.filename;
          const importPath = relativePath(from, to).replace('.proto', '');
          return `import { ${item} } from '${importPath}';\n`;
        }
        return '';
      })
      .filter((s) => s)
      .join('') + '\n';

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

  return {
    definitions: result.toString(),
    imports,
  };
}
