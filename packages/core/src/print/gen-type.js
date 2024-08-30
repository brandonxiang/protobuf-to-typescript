import MagicString from 'magic-string';
import { TYPE_REFLECTION, indentPrefix } from '../constant.js';
import relativePath, { getDirectory } from '../utils/relative-path.js';
import protobuf from 'protobufjs';

const { Type } = protobuf;

/**
 *
 * @param {Partial<protobuf.IMapField>} p
 * @returns
 */
function getKeyType(p) {
  if (p.keyType) {
    if(TYPE_REFLECTION[p.keyType]) {
      return TYPE_REFLECTION[p.keyType];
    }
  

    return p.keyType;
  }
  return '';
}


/**
 * 
 * @param {string} type 
 *  @param {Partial<protobuf.Field>} paramValue
 * @returns 
 */
function getType(type, paramValue) {
  if(TYPE_REFLECTION[type]) {
    return TYPE_REFLECTION[type];
  }
  if(paramValue.parent?.nested) {
    try {
      if(paramValue.parent.lookupTypeOrEnum(type)) {
        return paramValue.parent.name + type;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log('lookup protobuf type error:' + error.message);
      } else {
        console.log('lookup protobuf type error: Unknown error');
      }

    }
    return type; 
  }
  
  return type;
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
      type: getType(type, paramValue),
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
 * generate typescript files from proto info
 * @param {protobuf.Type} proto
 * @param {import('../typedef.js').OptionType} options
 * @returns
 */
export function genType(proto, options) {
  const { name, fields, comment, filename, parent } = proto;

  const items = readField(name, fields);

  const result = new MagicString('');

  let imports = items.importItems
    .map((item) => {
      try {
        const typeOrEnum = proto.lookupTypeOrEnum(item);

        if (filename && typeOrEnum.filename) {
          const from = getDirectory(filename);
          const to = typeOrEnum.filename;
          const importPath = relativePath(from, to).replace('.proto', '');
          return `import { ${item} } from './${importPath}';\n`;
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log('lookup protobuf type error:' + error.message);
        } else {
          console.log('lookup protobuf type error: Unknown error');
        }
      }
      return '';
    })
    .filter((s) => s)
    .join('');

  if (imports) {
    imports = imports + '\n';
  }

  items.params.forEach((item) => {
    const optionalChar = item.required ? '' : '?';

    if (item.comment) {
      item.comment.split('\n').forEach((line) => {
        result.append(`//${line} \n`);
      })
    }

    if (item.repeated) {
      result.append(`${item.name}${optionalChar}: ${item.type}[];`);
    } else if (item.keyType) {
      result.append(
        `${item.name}${optionalChar}: {[key: ${item.keyType}]: ${item.type}};`
      );
    } else {
      result.append(`${item.name}${optionalChar}: ${item.type};`);
    }
    
    result.append('\n');
  });

  const prefix = options.isDefinition ? '' : 'export ';

  let interfaceName = items.name;

  // deal with nested type conflict problem
  if(parent && parent instanceof Type && parent.name) {
    interfaceName = parent.name + interfaceName;
  }

  result
  .indent(indentPrefix)
  .prepend(`${prefix}interface ${interfaceName} {\n`)
  .append(`}\n\n`);



  if (comment) {
    result.prepend(`//${comment}\n`);
  }

  return {
    definitions: result.toString(),
    imports,
  };
}

/**
 * generate jsdoc from proto info
 * @param {protobuf.Type} proto
 * @param {import('../typedef.js').OptionType} options
 * @returns
 */
export function getJsdocType(proto, options) {
  const { name, fields, comment, parent } = proto;

  const items = readField(name, fields);

  const result = new MagicString('');

  items.params.forEach((item) => {
    const optionalChar = item.required ? '' : '=';

    const paramComment = item.comment || '';

    if (item.repeated) {
      result.append(
        ` * @prop {${item.type}[]${optionalChar}} ${item.name} ${paramComment}`
      );
    } else if (item.keyType) {
      result.append(
        ` * @prop {{[key: ${item.keyType}]: ${item.type}}${optionalChar}} ${item.name} ${paramComment}`
      );
    } else {
      result.append(
        ` * @prop {${item.type}${optionalChar}} ${item.name} ${paramComment}`
      );
    }

    result.append('\n');
  });

  let interfaceName = items.name;

  if(parent && parent instanceof Type && parent.name) {
    interfaceName = parent.name + interfaceName;
  }


  result
    .prepend(` * @typedef {Object} ${interfaceName}\n`)
    .prepend(` * ${comment || ''}\n`)
    .prepend(`/**\n`)
    .append(` */\n\n`);

  return {
    definitions: result.toString(),
    imports: '',
  };
}
