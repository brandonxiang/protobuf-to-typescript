import protobuf from 'protobufjs';
import { getAllMethods, mockResponse } from './utils/mock.js';
import { genEnum, getJsdocEnum } from './print/gen-enum.js';
import { genType, getJsdocType } from './print/gen-type.js';
import { genService, getJsdocService } from './print/gen-service.js';
import { handleError } from './utils/log.js';
import { defaultFilename, OUTPUT_TYPE } from './constant.js';
import relativePath from './utils/relative-path.js';

const { Root, Enum, Service, Type } = protobuf;

/**
 * @type {import('./typedef.js').OptionType}
 */
const defaultOptions = {
  outputType: 'typescript',
  mode: 'normal',
};

/**
 * 
 * @param {protobuf.Root} protoItem
 * @param {import('./typedef.js').OptionType} options
 */
function getTypescriptString(protoItem, options) {

  let result = null;
  if (protoItem instanceof Enum) {
    if (options.outputType === OUTPUT_TYPE.jsdoc) {
      result = getJsdocEnum(protoItem, options);
    } else {
      result = genEnum(protoItem, options);
    }
  } else if (protoItem instanceof Type) {
    if (options.outputType === OUTPUT_TYPE.jsdoc) {
      result = getJsdocType(protoItem, options);
    } else {
      result = genType(protoItem, options);
    }
  } else if (protoItem instanceof Service) {
    if (options.outputType === OUTPUT_TYPE.jsdoc) {
      result = getJsdocService(protoItem, options);
    } else {
      result = genService(protoItem, options);
    }
  }
  return result
}

/**
 * internal function
 * @param {protobuf.Root} proto
 * @param {import('./typedef.js').OptionType} options
 * @returns
 */
function getTypescript(proto, options) {
  const _types = new Map();
  let processQueue = [proto];
  let protoItem;
  while ((protoItem = processQueue.shift())) {
    let filename = defaultFilename;
    if (protoItem.filename && options.inputDir) {
      filename = relativePath(options.inputDir, protoItem.filename).replace(
        'proto',
        'ts'
      );
    }


    if (protoItem.nested) {

      // 继续处理下一层
      //@ts-ignore
      processQueue = processQueue.concat(Object.values(protoItem.nested));

      const result = getTypescriptString(protoItem, options);
      if (result) {
        setType(_types, filename, result);
      }
    } else {
      const result = getTypescriptString(protoItem, options);
      if (result) {
        setType(_types, filename, result);
      }
    }
  }
  return _types;
}

/**
 * parse protobuf root object
 * @param {protobuf.Root} root
 * @param {import('./typedef.js').OptionType} options
 * @param {string=} packageName
 * @returns {string}
 */
function parseProtoRoot(root, options, packageName) {
  let proto = root;
  if (packageName) {
    const _root = root.lookup(packageName);
    if (_root) {
      //@ts-ignore
      proto = _root;
    }
  }
  const _types = getTypescript(proto, options);
  if (_types.size === 0) {
    return '';
  }
  if (_types.size === 1) {
    const result = _types.get(defaultFilename);
    if (result) {
      let str = '';
      if (result.imports) {
        str = str + result.imports.join('');
      }
      str = str + result.definitions.join('');
      return str;
    }
  }
  handleError('More than one protobuf files, please use parseProtoFiles');
  return '';
}

/**
 * parse protobuf text plain
 * @param {string} source
 * @param {import('./typedef.js').OptionType=} _options
 * @returns
 */
function parseProto(source, _options) {
  const options = { ...defaultOptions, ..._options };
  const res = protobuf.parse(source, {
    alternateCommentMode: true,
    preferTrailingComment: true,
    keepCase: true,
  });
  return parseProtoRoot(res.root, options, res.package);
}

/**
 *
 * @param {Map<string,{definitions: string[], imports: string[]}>} mapType
 * @param {string} key
 * @param {{definitions: string, imports: string}} value
 */
function setType(mapType, key, value) {
  const existedValue = mapType.get(key);
  if (existedValue) {
    mapType.set(key, {
      definitions: [...existedValue.definitions, value.definitions],
      imports: [...existedValue.imports, value.imports],
    });
  } else {
    mapType.set(key, {
      definitions: [value.definitions],
      imports: [value.imports],
    });
  }
}

/**
 * @param {string[]} files
 * @param {import('./typedef.js').OptionType} options
 * @returns
 */
function parseProtoFiles(files, options) {
  try {
    const proto = new Root();

    files.forEach((file) => {
      proto.loadSync(file, {
        alternateCommentMode: true,
        preferTrailingComment: true,
        keepCase: true,
      });
    });

    return getTypescript(proto, options);
  } catch (error) {
    handleError(error);
  }
}

export {
  getAllMethods,
  mockResponse,
  parseProto,
  parseProtoRoot,
  parseProtoFiles,
};

export default {
  getAllMethods,
  mockResponse,
  parseProto,
  parseProtoRoot,
  parseProtoFiles,
};
