import protobuf from 'protobufjs';
import { getAllMethods, mockResponse } from './utils/mock.js';
import { genEnum } from './print/gen-enum.js';
import { genType } from './print/gen-type.js';
import { genService } from './print/gen-service.js';
import { handleError } from './utils/log.js';
import { defaultFilename } from './constant.js';
import relativePath from './utils/relative-path.js';

const { Root, Enum, Service, Type } = protobuf;

/**
 * @type {OptionType}
 */
const defaultOptions = {
  isDefinition: false,
};

/**
 * internal function
 * @param {protobuf.Root} proto
 * @param {OptionType} options
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

    if (protoItem instanceof Enum) {
      const result = genEnum(protoItem, options);
      setType(_types, filename, result);
    } else if (protoItem instanceof Type) {
      const result = genType(protoItem, options);
      setType(_types, filename, result);
    } else if (protoItem instanceof Service) {
      const result = genService(protoItem, options);
      setType(_types, filename, result);
    } else if (protoItem.nested) {
      // 继续处理下一层
      //@ts-ignore
      processQueue = processQueue.concat(Object.values(protoItem.nested));
    }
  }

  return _types;
}

/**
 * parse protobuf root object
 * @param {protobuf.Root} root
 * @param {OptionType} options
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
 * @param {OptionType=} _options
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
 * @param {OptionType} options
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
