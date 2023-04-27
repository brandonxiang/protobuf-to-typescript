/**
 * parse protobuf root object
 * @param {protobuf.Root} root
 * @param {OptionType} options
 * @param {string=} packageName
 * @returns {string}
 */
export function parseProtoRoot(root: protobuf.Root, options: OptionType, packageName?: string | undefined): string;
/**
 * parse protobuf text plain
 * @param {string} source
 * @param {OptionType=} _options
 * @returns
 */
export function parseProto(source: string, _options?: OptionType | undefined): string;
/**
 * @param {string[]} files
 * @param {OptionType} options
 * @returns
 */
export function parseProtoFiles(files: string[], options: OptionType): Map<any, any>;
declare namespace _default {
    export { parseProto };
    export { parseProtoRoot };
    export { getAllMethods };
    export { mockResponse };
}
export default _default;
import protobuf from 'protobufjs';
declare const Root: typeof protobuf.Root;
import { getAllMethods } from './utils/mock.js';
import { mockResponse } from './utils/mock.js';
export { getAllMethods, mockResponse };
//# sourceMappingURL=index.d.ts.map