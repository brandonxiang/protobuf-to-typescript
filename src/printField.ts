import { FieldContent } from './interface';

const TYPES: {
  [key: string]: string;
} = {
  double: 'number',
  float: 'number',
  int32: 'number',
  int64: 'number',
  uint32: 'number',
  uint64: 'number',
  sint32: 'number',
  sint64: 'number',
  fixed32: 'number',
  fixed64: 'number',
  sfixed32: 'number',
  sfixed64: 'number',
  bool: 'boolean',
  string: 'string',
  bytes: 'string'
};

function readField(name: string, content: FieldContent) {
  const params = Object.keys(content).map(paramName => {
    const paramValue = content[paramName];

    return {
      type: TYPES[paramValue.type] || paramValue.type,
      name: paramName,
      rule: paramValue.rule,
      id: paramValue.id
    };
  });

  return {
    category: 'fields',
    name: name,
    params: params.sort((a, b) => a.id - b.id)
  };
}

export function printField(name: string, content: FieldContent) {
  const item = readField(name, content);

  const strs = item.params.map(param => {
    if (param.rule === 'repeated') {
      return `  ${param.name}: ${param.type}[];\n`;
    }
    return `  ${param.name}: ${param.type};\n`;
  });

  console.log(strs);

  return `interface ${item.name} {\n${strs.join('')}}\n\n`;
}
