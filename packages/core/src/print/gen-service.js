import MagicString from 'magic-string';
import { EMPTY_PROTO } from '../constant.js';

/**
 *
 * @param {string} name
 * @param {{[k: string]: protobuf.Method}} methods
 * @returns
 */
function readMethod(name, methods) {
  const params = Object.keys(methods).map((paramName) => {
    const paramValue = methods[paramName];
    const { requestType, responseType, comment } = paramValue;

    return {
      name: paramName,
      requestType,
      responseType,
      comment,
    };
  });

  return {
    name,
    params,
  };
}

/**
 * generate typescript files from proto info
 * @param {protobuf.Service} proto
 * @param {import('../typedef.js').OptionType} options
 * @returns
 */
export function genService(proto, options) {
  const { name, methods, comment } = proto;

  const items = readMethod(name, methods);

  const result = new MagicString(`//Service: ${name}\n`);

  if (comment) {
    result.prepend(`//${comment}\n`);
  }

  items.params.forEach((item) => {
    const requestType =
      item.requestType === EMPTY_PROTO ? '' : `params: ${item.requestType}`;
    const responseType =
      item.responseType === EMPTY_PROTO ? '{}' : item.responseType;

    const prefix = options.isDefinition ? '' : 'export ';

    if (item.comment) {
      result.append(`//${item.comment}\n`);
    }

    result.append(
      `${prefix}type ${item.name} = (${requestType}) => Promise<${responseType}>;`
    );

    result.append('\n\n');
  });

  return {
    definitions: result.toString(),
    imports: '',
  };
}

/**
 * generate jsdoc from proto info
 * @param {protobuf.Service} proto
 * @param {import('../typedef.js').OptionType} options
 */
export function getJsdocService(proto, options) {
  const { name, methods, comment } = proto;

  const items = readMethod(name, methods);

  const result = new MagicString(``);

  items.params.forEach((item) => {
    const requestType =
      item.requestType === EMPTY_PROTO ? '*' : item.requestType;
    const responseType =
      item.responseType === EMPTY_PROTO ? '*' : item.responseType;

    if (item.comment) {
      result.append(` * ${item.comment}\n`);
    }

    result.append(` * @callback ${item.name}\n`);
    result.append(` * @param {${requestType}} params\n`);
    result.append(` * @returns {Promise<${responseType}>}\n`);

    result
      .prepend(` * ${comment || ''}\n`)
      .prepend(`/**\n`)
      .prepend(`//Service: ${name}\n`)
      .append(` */\n\n`);
  });

  return {
    definitions: result.toString(),
    imports: '',
  };
}
