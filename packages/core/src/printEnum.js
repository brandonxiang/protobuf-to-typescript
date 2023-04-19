
/**
 *
 * @param {string} name
 * @param {protobuf.IEnum} enumContent
 * @param {OptionType} options
 * @returns
 */
export function printEnum(name, enumContent, options) {
  const content = enumContent.values;
  const item = Object.keys(content)
    .map((key) => ({
      name: key,
      id: content[key],
    }))
    .sort((a, b) => a.id - b.id);
  const strings = item.map((s) => `  ${s.name} = ${s.id},\n`).join('');
  const prefix = options.isDefinition ? '' : 'export ';
  return `${prefix}enum ${name} {\n${strings}}\n\n`;
}
