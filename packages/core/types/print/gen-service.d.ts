/**
 *
 * @param {protobuf.Service} proto
 * @param {OptionType} options
 * @returns
 */
export function genService(proto: protobuf.Service, options: OptionType): {
    definitions: string;
    imports: string;
};
