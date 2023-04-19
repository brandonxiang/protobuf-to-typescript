import protobuf from 'protobufjs';
import { printField } from './printField.js';
import { printMethod } from './printMethod.js';
import { printEnum } from './printEnum.js';
import { getAllMethods, mockResponse } from './mock.js';
const { Root } = protobuf;

/**
 * @type OptionType
 */
const defaultOptions = {
  isDefinition: false,
  isParamOptional: false,
};

/**
 *
 * @param {protobuf.INamespace} json
 * @param {OptionType} options
 * @returns {string}
 */
export function printTypescript(json, options) {
  const nested = json.nested;
  if (nested) {
    const output = Object.keys(nested)
      .map((name) => {
        const value = nested[name];

        const res = Object.keys(value).map((category) => {
          if (category === 'fields')
            return printField(
              name,
              /**@type {protobuf.IType} */ (value),
              options
            );
          if (category === 'methods')
            return printMethod(
              name,
              /**@type {protobuf.IService} */ (value),
              options
            );
          if (category === 'values')
            return printEnum(
              name,
              /**@type {protobuf.IEnum} */ (value),
              options
            );
          if (category === 'nested') return printTypescript(value, options);
        });
        return res;
      })
      .reduce((a, b) => a.concat(b), [])
      .join('');

    return output;
  }
  return '';
}

/**
 *
 * @param {protobuf.Root} root
 * @param {OptionType} options
 * @param {string=} packageName
 * @returns
 */
export function parseProtoRoot(root, options, packageName) {
  if (packageName) {
    const _root = root.lookup(packageName);
    if (_root) {
      return printTypescript(_root.toJSON(), options);
    }
  }
  return printTypescript(root.toJSON(), options);
}

/**
 *
 * @param {string} source
 * @param {OptionType=} _options
 * @returns
 */
export function parseProto(source, _options) {
  const options = { ...defaultOptions, ..._options };
  const res = protobuf.parse(source, { keepCase: true });
  return parseProtoRoot(res.root, options, res.package);
}

export { getAllMethods, mockResponse };

export default {
  parseProto,
  parseProtoRoot,
  getAllMethods,
  mockResponse,
};
