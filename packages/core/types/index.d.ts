import protobuf from 'protobufjs';

type OptionType = {
    outputType?: string | undefined;
    mode?: string | undefined;
    inputDir?: string | undefined;
    outputDir?: string | undefined;
};
type CommandOptionType = {
    outputType?: string | undefined;
    mode?: string | undefined;
    input?: string | undefined;
    output?: string | undefined;
};
type MockOptionType = {
    mode?: string | undefined;
};

/**
 *
 * @param {string} source
 * @returns
 */
declare function getAllMethods(source: string): {
    [k: string]: protobuf.Method;
} | null;
/**
 *
 * @param {string} source
 * @param {string} methodName
 * @param {import('../typedef.js').MockOptionType=} options
 * @returns
 */
declare function mockResponse(source: string, methodName: string, options?: MockOptionType | undefined): Object | null;

/**
 * parse protobuf text plain
 * @param {string} source
 * @param {import('./typedef.js').OptionType=} _options
 * @returns
 */
declare function parseProto(source: string, _options?: OptionType | undefined): string;
/**
 * parse protobuf root object
 * @param {protobuf.Root} root
 * @param {import('./typedef.js').OptionType} options
 * @param {string=} packageName
 * @returns {string}
 */
declare function parseProtoRoot(root: protobuf.Root, options: OptionType, packageName?: string | undefined): string;
/**
 * @param {string[]} files
 * @param {import('./typedef.js').OptionType} options
 * @returns
 */
declare function parseProtoFiles(files: string[], options: OptionType): Map<any, any> | undefined;

/**
 * @param {import('../typedef.js').CommandOptionType} params
 */
declare function convertCommand(params: CommandOptionType): Promise<void>;

export { convertCommand, getAllMethods, mockResponse, parseProto, parseProtoFiles, parseProtoRoot };
