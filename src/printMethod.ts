import { MethodContent } from './interface';

function readMethod(name: string, content: MethodContent) {
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

export function printMethod(name: string, content: MethodContent) {
  const item = readMethod(name, content);

  const strs = item.params.map(
    param =>
      `interface ${param.name} {\n` +
      `  (params: ${param.requestType}): Promise<${param.responseType}>;\n` +
      `}\n` +
      `\n`
  );

  return `${strs.join('/n')}`;
}
