/**
 *
 * @param {*} proto
 * @returns {string}
 */
export const getUniqName = (proto) => {
  return proto.fullName.slice(1).split('.').join('_');
};

/**
 *
 * @param {Object} obj
 * @returns
 */
export function removeNullUndefined(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([key, value]) => value !== null && value !== undefined
    )
  );
}

/**
 *
 * @param {string} namespaceType
 * @param {boolean} isUniqName
 * @returns
 */
export function namespaceTypeParseToPath(namespaceType, isUniqName = true) {
  const parts = namespaceType.split('.');
  const uniqName = parts.join('_');
  const name = parts.pop();
  const namespace = parts.join('.');
  const path = parts.join('/');

  return { name: isUniqName ? uniqName : name, namespace, path };
}

