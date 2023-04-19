

/** @type {{[key: string]: string;}} */
const TYPES = {
  double: 'number',
  float: 'number',
  int32: 'number',
  int64: 'string',
  uint32: 'number',
  uint64: 'string',
  sint32: 'number',
  sint64: 'string',
  fixed32: 'number',
  fixed64: 'string',
  sfixed32: 'number',
  sfixed64: 'string',
  bool: 'boolean',
  string: 'string',
  bytes: 'string',
};

/**
 *
 * @param {Partial<protobuf.IMapField>} p
 * @returns
 */
function getKeyType(p) {
  if (p.keyType) {
    return TYPES[p.keyType] || p.keyType;
  }
  return '';
}

/**
 *
 * @param {string} name
 * @param {{[k: string]: protobuf.IField }} content
 * @returns
 */
function readField(name, content) {
  const params = Object.keys(content).map((paramName) => {
    const paramValue = content[paramName];

    return {
      type: TYPES[paramValue.type] || paramValue.type,
      keyType: getKeyType(paramValue),
      name: paramName,
      rule: paramValue.rule,
      id: paramValue.id,
    };
  });

  return {
    category: 'fields',
    name: name,
    params: params.sort((a, b) => a.id - b.id),
  };
}

/**
 *
 * @param {string} name
 * @param {protobuf.IType} fieldParams
 * @param {OptionType} options
 * @returns
 */
export function printField(name, fieldParams, options) {
  const content = fieldParams.fields;

  const item = readField(name, content);

  const strings = item.params.map((param) => {
    let optionalChar = '';
    if (options.isParamOptional) {
      optionalChar = '?';
    }

    if (param.rule === 'repeated') {
      return `  ${param.name}${optionalChar}: ${param.type}[];\n`;
    }
    if (param.keyType) {
      return `  ${param.name}${optionalChar}: {[key: ${param.keyType}]: ${param.type}};\n`;
    }
    return `  ${param.name}${optionalChar}: ${param.type};\n`;
  });

  // if (fieldParams.nested) {
  //   Object.keys(fieldParams.nested).forEach(key => {
  //     strs.push(`  ${key}: ${key};\n`);
  //   });
  // }
  const prefix = options.isDefinition ? '' : 'export ';

  return `${prefix}interface ${item.name} {\n${strings.join('')}}\n\n`;
}
