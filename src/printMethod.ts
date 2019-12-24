import { IService, IMethod } from 'protobufjs';

const EMPTY = 'google.protobuf.Empty';

function readMethod(
  name: string,
  content: {
    [k: string]: IMethod;
  }
) {
  const params = Object.keys(content).map(paramName => {
    const paramValue = content[paramName];

    return { name: paramName, ...paramValue };
  });

  return {
    category: 'methods',
    name: name,
    params
  };
}

export function printMethod(name: string, methodContent: IService) {
  const content = methodContent.methods;
  const item = readMethod(name, content);

  const strs = item.params.map(param => {
    const requestType =
      param.requestType === EMPTY ? '' : `params: ${param.requestType}`;
    const responseType =
      param.responseType === EMPTY ? '{}' : param.responseType;
    return (
      `interface ${param.name} {\n` +
      `  (${requestType}): Promise<${responseType}>;\n` +
      `}\n` +
      `\n`
    );
  });

  return `${strs.join('')}`;
}
