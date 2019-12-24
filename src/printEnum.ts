import { IEnum } from 'protobufjs';

export function printEnum(name: string, enumContent: IEnum) {
  const content = enumContent.values;
  const item = Object.keys(content)
    .map(key => ({
      name: key,
      id: content[key]
    }))
    .sort((a, b) => a.id - b.id);
  const strs = item.map(s => `  ${s.name} = ${s.id},\n`).join('');
  return `enum ${name} {\n${strs}}\n\n`;
}
