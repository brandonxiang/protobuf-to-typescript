import protobuf from 'protobufjs';
export declare function getAllMethods(source: string): {
    [k: string]: protobuf.Method;
};
export declare function mockResponse(source: string, methodName: string): Object;
