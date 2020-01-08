import protobuf, { IService, IType, IEnum } from 'protobufjs';
import { printField } from './printField';
import { printMethod } from './printMethod';
import { printEnum } from './printEnum';
import { getAllMethods, mockResponse } from './mock';
import { OptionType } from './interface';

const defaultOptions: OptionType = {
  isDefinition: true
};

export function printTypescript(
  json: protobuf.INamespace,
  options: OptionType
): string {
  const nested = json.nested;
  if (nested) {
    const output = Object.keys(nested)
      .map(name => {
        const value = nested[name];

        const res = Object.keys(value).map(category => {
          if (category === 'fields')
            return printField(name, value as IType, options);
          if (category === 'methods')
            return printMethod(name, value as IService, options);
          if (category === 'values')
            return printEnum(name, value as IEnum, options);
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

export function parseProto(source: string, _options?: OptionType) {
  const options = { ...defaultOptions, ..._options };
  const res = protobuf.parse(source, { keepCase: true });
  if (res.package) {
    const root = res.root.lookup(res.package);
    return printTypescript(root!.toJSON(), options);
  }
  // console.log(JSON.stringify(res.root.toJSON()));
  return printTypescript(res.root.toJSON(), options);
}

export { getAllMethods, mockResponse };

export default {
  parseProto,
  getAllMethods,
  mockResponse
};
