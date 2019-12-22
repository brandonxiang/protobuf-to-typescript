import { EnumContent } from './interface';

export function printEnum(name: string, content: EnumContent) {
  const item = Object.keys(content)
    .map(key => ({
      name: key,
      id: content[key]
    }))
    .sort((a, b) => a.id - b.id);
  const strs = item.map(s => `  ${s.name};\n`).join('');
  return `enum ${name} {\n${strs}}\n\n`;
}
