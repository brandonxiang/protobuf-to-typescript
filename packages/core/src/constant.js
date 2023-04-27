export const indentPrefix = '  ';
export const defaultFilename = 'index';
export const EMPTY_PROTO = 'google.protobuf.Empty';

/** @type {{[key: string]: string;}} */
export const TYPE_REFLECTION = {
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
