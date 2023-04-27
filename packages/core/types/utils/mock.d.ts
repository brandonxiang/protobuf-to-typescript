/**
 *
 * @param {string} source
 * @returns
 */
export function getAllMethods(source: string): {
    [k: string]: protobuf.Method;
} | null;
/**
 *
 * @param {string} source
 * @param {string} methodName
 * @returns
 */
export function mockResponse(source: string, methodName: string): Object | null;
import protobuf from 'protobufjs';
//# sourceMappingURL=mock.d.ts.map