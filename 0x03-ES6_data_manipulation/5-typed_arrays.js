/**
 * buffer array to a given index
 * @param {Number} length - lenght.
 * @param {Number} position - index.
 * @param {Number} value - value.
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error("Position outside range");
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
