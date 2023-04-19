const EMPTY = 'google.protobuf.Empty';

/**
 *
 * @param {string} name
 * @param {{[k: string]: protobuf.IMethod}} content
 * @returns
 */
function readMethod(name, content) {
  const params = Object.keys(content).map((paramName) => {
    const paramValue = content[paramName];

    return { name: paramName, ...paramValue };
  });

  return {
    category: 'methods',
    name: name,
    params,
  };
}

/**
 *
 * @param {string} name
 * @param {protobuf.IService} methodContent
 * @param {OptionType} options
 * @returns
 */
export function printMethod(name, methodContent, options) {
  const content = methodContent.methods;
  const item = readMethod(name, content);

  const strs = item.params.map((param) => {
    const requestType =
      param.requestType === EMPTY ? '' : `params: ${param.requestType}`;
    const responseType =
      param.responseType === EMPTY ? '{}' : param.responseType;

    const prefix = options.isDefinition ? '' : 'export ';
    return (
      `${prefix}interface ${param.name} {\n` +
      `  (${requestType}): Promise<${responseType}>;\n` +
      `}\n` +
      `\n`
    );
  });

  return `${strs.join('')}`;
}
