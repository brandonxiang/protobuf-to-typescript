import { IEnum } from 'protobufjs';
import { OptionType } from './interface';

export function printEnum(
  name: string,
  enumContent: IEnum,
  options: OptionType
) {
  const content = enumContent.values;
  const item = Object.keys(content)
    .map(key => ({
      name: key,
      id: content[key]
    }))
    .sort((a, b) => a.id - b.id);
  const strs = item.map(s => `  ${s.name} = ${s.id},\n`).join('');
  const prefix = options.isDefinition ? '' : 'export ';
  return `${prefix}enum ${name} {\n${strs}}\n\n`;
}
