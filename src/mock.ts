import protobuf, { Service, MapField, Enum, Field } from 'protobufjs';

function _getAllMethods(root: protobuf.Root) {
  const service = root.nestedArray.find(s => s instanceof Service);
  const firstService = root.lookupService(service!.name);

  return firstService.methods;
}

export function getAllMethods(source: string) {
  const res = protobuf.parse(source, {
    keepCase: true,
    alternateCommentMode: true
  });
  if (res.package) {
    const reflect = res.root.lookup(res.package) as protobuf.Root;
    return _getAllMethods(reflect);
  }
  return _getAllMethods(res.root);
}

function mockScalar(type: string): any {
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

function mockType(root: protobuf.Root, typeName: string): Object {
  const type = root.lookupType(typeName);

  const fieldMock = type.fieldsArray.reduce((a, b) => {
    if (b instanceof MapField) {
      const mockKey = mockScalar(b.keyType);
      const mockData = mockScalar(b.type);
      const val = mockData
        ? { [b.name]: { [mockKey]: mockData } }
        : { [b.name]: { [mockKey]: mockType(root, b.type) } };
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

  const enumMock = type.nestedArray.reduce((a, b) => {
    if (b instanceof Enum) {
      const values = Object.values(b.values);
      if (values.length) {
        const val = { [b.name]: values[0] };
        return { ...a, ...val };
      }
      return a;
    }
    return a;
  }, {});

  return { ...fieldMock, ...enumMock };
}

function _mockResponse(root: protobuf.Root, methodName: string) {
  const service = root.nestedArray.find(s => s instanceof Service);
  const firstService = root.lookupService(service!.name);
  const { responseType } = firstService.methods[methodName];
  const res = mockType(root, responseType);
  return res;
}

export function mockResponse(source: string, methodName: string) {
  const res = protobuf.parse(source, {
    keepCase: true,
    alternateCommentMode: true
  });
  if (res.package) {
    const reflect = res.root.lookup(res.package) as protobuf.Root;
    return _mockResponse(reflect, methodName);
  }
  return _mockResponse(res.root, methodName);
}
