import protobuf, { Root } from 'protobufjs';
import { getAllMethods, mockResponse } from './mock';
import { OptionType } from './interface';
export declare function printTypescript(json: protobuf.INamespace, options: OptionType): string;
export declare function parseProtoRoot(root: Root, options: OptionType, packageName?: string): string;
export declare function parseProto(source: string, _options?: OptionType): string;
export { getAllMethods, mockResponse };
declare const _default: {
    parseProto: typeof parseProto;
    parseProtoRoot: typeof parseProtoRoot;
    getAllMethods: typeof getAllMethods;
    mockResponse: typeof mockResponse;
};
export default _default;
