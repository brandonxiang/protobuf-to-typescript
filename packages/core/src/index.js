import protobuf from 'protobufjs';
import { getAllMethods, mockResponse } from './utils/mock.js';
import { genEnum } from './print/genEnum.js';
import { genType } from './print/genType.js';
import { genService } from './print/genService.js';
import { handleError } from './utils/log.js';
import { defaultFilename } from './constant.js';

const { Root, Enum, Service, Type } = protobuf;

/**
 * @type OptionType
 */
const defaultOptions = {
  isDefinition: false,
};

/**
 * internal function
 * @param {protobuf.Root} proto
 * @param {OptionType} options
 * @returns {Map<string,string[]>}
 */
function getTypescript(proto, options) {
  const _types = new Map();
  let processQueue = [proto];
  let protoItem;
  while ((protoItem = processQueue.shift())) {
    let filename = defaultFilename;
    if (protoItem.filename && options.inputDir) {
      filename = protoItem.filename
        .replace(options.inputDir, '')
        .replace('proto', 'ts');
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
export function parseProtoRoot(root, options, packageName) {
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
      return result.join('');
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
export function parseProto(source, _options) {
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
 * @param {Map<string,string[]>} mapType
 * @param {string} key
 * @param {string} value
 */
function setType(mapType, key, value) {
  const existedValue = mapType.get(key);
  if (existedValue) {
    mapType.set(key, [...existedValue, value]);
  } else {
    mapType.set(key, [value]);
  }
}

/**
 * @param {string[]} files
 * @param {OptionType} options
 * @returns
 */
export function parseProtoFiles(files, options) {
  const proto = new Root();

  files.forEach((file) => {
    proto.loadSync(file, {
      alternateCommentMode: true,
      preferTrailingComment: true,
      keepCase: true,
    });
  });

  return getTypescript(proto, options);
}

// mock function
export { getAllMethods, mockResponse };
// gen-ts function
export default {
  parseProto,
  parseProtoRoot,
  getAllMethods,
  mockResponse,
};
