/**
 *to check what the set containe.
 * @param {Set} set - collection.
 * @param {*} array
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
