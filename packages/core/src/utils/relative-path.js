/**
 *
 * @param {string} from
 * @param {string} to
 */
export default function relativePath(from, to) {
  const fromArr = from.split('/');
  const toArr = to.split('/');

  /** @type {string[]} */
  let popSections = [];
  /** @type {string[]} */
  let pushSections = [];

  while (fromArr.length > 0) {
    const fromTarget = fromArr.shift();
    if (toArr.length > 0) {
      const toTarget = toArr.shift();
      if (fromTarget !== toTarget) {
        if (toTarget && fromTarget) {
          pushSections.push(toTarget);
          popSections.push(fromTarget);
        }
      }
    } else if (fromTarget) {
      popSections.push(fromTarget);
    }
  }

  while (toArr.length > 0) {
    const toTarget = toArr.shift();
    if (toTarget) {
      pushSections.push(toTarget);
    }
  }

  const steps = new Array(popSections.length).fill('..');
  const res = steps.concat(pushSections).join('/');
  return res.includes('/') ? res : './' + res;
}

/**
 *
 * @param {string} filePath
 */
export function getDirectory(filePath) {
  const index = filePath.lastIndexOf('/');
  return filePath.substring(0, index);
}
