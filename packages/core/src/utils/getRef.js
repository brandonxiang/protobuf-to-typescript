const EMPTY = 'google.protobuf.Empty';

/**
 *
 * @param {*} namespace
 * @param {string} name
 * @returns
 */
function getRef(namespace, name) {
  if (name === EMPTY || name === 'Empty') return {}; // 处理空情况

  const type = namespace.lookup(name);
  if (type) {
    return {
      $ref: `#/definitions/${type.fullName.slice(1)}`,
    };
  }
  return {};
}

export default getRef;
