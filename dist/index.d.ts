import protobuf from 'protobufjs';
import { getAllMethods, mockResponse } from './mock';
export declare function printTypescript(json: protobuf.INamespace): string;
export declare function parseProto(source: string): string;
export { getAllMethods, mockResponse };
declare const _default: {
    parseProto: typeof parseProto;
    getAllMethods: typeof getAllMethods;
    mockResponse: typeof mockResponse;
};
export default _default;
