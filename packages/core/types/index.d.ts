/**
 *
 * @param {protobuf.INamespace} json
 * @param {OptionType} options
 * @returns {string}
 */
export function printTypesc../src/interfaceprotobuf.INamespace, options: OptionType): string;
/**
 *
 * @param {protobuf.Root} root
 * @param {OptionType} options
 * @param {string=} packageName
 * @returns
 */
export function parseProtoRoot(root: protobuf.Root, options: OptionType, packageName?: string | undefined): string;
/**
 *
 * @param {string} source
 * @param {OptionType=} _options
 * @returns
 */
export function parseProto(source: string, _options?: OptionType | undefined): string;
declare namespace _default {
    export { parseProto };
    export { parseProtoRoot };
    export { getAllMethods };
    export { mockResponse };
}
export default _default;
import protobuf from "protobufjs";
import { getAllMethods } from "./mock.js";
import { mockResponse } from "./mock.js";
export { getAllMethods, mockResponse };
