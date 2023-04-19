import protobuf from 'protobufjs';
const { Service, MapField, Enum, Field } = protobuf;

/**
 *
 * @param {protobuf.Root} root
 * @returns
 */
function _getAllMethods(root) {
  const service = root.nestedArray.find((s) => s instanceof Service);
  if (service) {
    const firstService = root.lookupService(service.name);
    return firstService.methods;
  }
  return null;
}

/**
 *
 * @param {string} source
 * @returns
 */
export function getAllMethods(source) {
  const res = protobuf.parse(source, {
    keepCase: true,
    alternateCommentMode: true,
  });
  if (res.package) {
    const reflect = res.root.lookup(res.package);
    if (reflect) {
      return _getAllMethods(/** @type {protobuf.Root} */ (reflect));
    }
  }
  return _getAllMethods(res.root);
}

/**
 *
 * @param {string} type
 * @returns
 */
function mockScalar(type) {
  switch (type) {
    case 'string':
      return 'Hello';
    case 'number':
      return 10;
    case 'bool':
      return true;
    case 'int32':
      return 10;
    case 'int64':
      return '20';
    case 'uint32':
      return 100;
    case 'uint64':
      return '100';
    case 'sint32':
      return 100;
    case 'sint64':
      return '-1200';
    case 'fixed32':
      return 1400;
    case 'fixed64':
      return '1500';
    case 'sfixed32':
      return 1600;
    case 'sfixed64':
      return '-1700';
    case 'double':
      return 1.4;
    case 'float':
      return 1.1;
    case 'bytes':
      return new Buffer('Hello');
    default:
      return null;
  }
}

/**
 *
 * @param {protobuf.Root} root
 * @param {string} typeName
 * @returns {Object}
 */
function mockType(root, typeName) {
  const type = root.lookupTypeOrEnum(typeName);

  if (type instanceof Enum) {
    const values = Object.values(type.values);
    return values[0];
  }

  const fieldMock =
    type.fieldsArray &&
    type.fieldsArray.reduce((a, b) => {
      if (b instanceof MapField) {
        const mockKey = mockScalar(b.keyType);
        const mockData = mockScalar(b.type);
        const val = mockData
          ? //@ts-ignore
            { [b.name]: { [mockKey]: mockData } }
          : //@ts-ignore
            { [b.name]: { [mockKey]: mockType(root, b.type) } };
        return { ...a, ...val };
      }
      if (b.rule === 'repeated') {
        const mockData = mockScalar(b.type);
        const val = mockData
          ? { [b.name]: [mockData] }
          : { [b.name]: [mockType(root, b.type)] };
        return { ...a, ...val };
      }
      const mockData = mockScalar(b.type);
      const val = mockData
        ? { [b.name]: mockData }
        : { [b.name]: mockType(root, b.type) };
      return { ...a, ...val };
    }, {});

  // const enumMock =
  //   type.nestedArray &&
  //   type.nestedArray.reduce((a, b) => {
  //     if (b instanceof Enum) {
  //       const values = Object.values(b.values);
  //       if (values.length) {
  //         const val = { [b.name]: values[0] };
  //         return { ...a, ...val };
  //       }
  //       return a;
  //     }
  //     return a;
  //   }, {});

  return fieldMock;
}

/**
 *
 * @param {protobuf.Root} root
 * @param {string} methodName
 * @returns
 */
function _mockResponse(root, methodName) {
  const service = root.nestedArray.find((s) => s instanceof Service);
  if (!service) return null;
  const firstService = root.lookupService(service.name);
  const { responseType } = firstService.methods[methodName];
  const res = mockType(root, responseType);
  return res;
}

/**
 *
 * @param {string} source
 * @param {string} methodName
 * @returns
 */
export function mockResponse(source, methodName) {
  const res = protobuf.parse(source, {
    keepCase: true,
    alternateCommentMode: true,
  });
  if (res.package) {
    const reflect = res.root.lookup(res.package);
    if (reflect) {
      return _mockResponse(/** @type {protobuf.Root} */ (reflect), methodName);
    }
  }
  return _mockResponse(res.root, methodName);
}
