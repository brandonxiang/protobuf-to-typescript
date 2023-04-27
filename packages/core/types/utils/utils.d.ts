/**
 *
 * @param {Object} obj
 * @returns
 */
export function removeNullUndefined(obj: Object): {
    [k: string]: any;
};
/**
 *
 * @param {string} namespaceType
 * @param {boolean} isUniqName
 * @returns
 */
export function namespaceTypeParseToPath(namespaceType: string, isUniqName?: boolean): {
    name: string | undefined;
    namespace: string;
    path: string;
};
export function getUniqName(proto: any): string;
//# sourceMappingURL=utils.d.ts.map