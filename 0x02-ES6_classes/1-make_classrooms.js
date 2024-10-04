import ClassRoom from "./0-classroom";

/**
 *  {@link ClassRoom} array with specifque size.
 * @returns array {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
