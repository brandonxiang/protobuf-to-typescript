import protobuf from 'protobufjs';
export declare function parseJson(json: protobuf.INamespace): string;
export declare function parseProto(source: string): string;
declare const _default: {
    parseProto: typeof parseProto;
    parseJson: typeof parseJson;
};
export default _default;
