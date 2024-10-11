/**
 * to chnage the qunatitie of a specifique item.
 * @param {Map<String, number>} map
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error("Cannot process");
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
