export const indentPrefix = '  ';
export const defaultFilename = 'index';
export const EMPTY_PROTO = 'google.protobuf.Empty';

/** @type {{[key: string]: string;}} */
export const TYPE_REFLECTION_STRICT = {
  double: 'number',
  float: 'number',
  int32: 'number',
  int64: 'string',
  uint32: 'number',
  uint64: 'string',
  sint32: 'number',
  sint64: 'string',
  fixed32: 'number',
  fixed64: 'string',
  sfixed32: 'number',
  sfixed64: 'string',
  bool: 'boolean',
  string: 'string',
  bytes: 'string',
};

/** @type {{[key: string]: string;}} */
export const TYPE_REFLECTION_NORMAL = {
  double: 'number',
  float: 'number',
  int32: 'number',
  int64: 'number',
  uint32: 'number',
  uint64: 'number',
  sint32: 'number',
  sint64: 'number',
  fixed32: 'number',
  fixed64: 'number',
  sfixed32: 'number',
  sfixed64: 'number',
  bool: 'boolean',
  string: 'string',
  bytes: 'string',
};

export const OUTPUT_TYPE = {
  typescript: 'typescript',
  jsdoc: 'jsdoc',
  definition: 'definition',
};

export const MODE = {
  normal: 'normal',
  strict: 'strict',
};