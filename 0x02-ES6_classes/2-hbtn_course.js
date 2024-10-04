/**
 * HolbertonCourse Representation.
 */
export default class HolbertonCourse {
  /**
   *  @see {@link HolbertonCourse}.
   *
   * @param {String} name - name of the course.
   * @param {Number} length - the duration of the course.
   * @param {String[]} students - name of students.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * a getter for the name.
   */
  get name() {
    return this._name;
  }

  /**
   *setter for the name.
   */
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = value;
  }

  /**
   * a getter for the duration.
   */
  get length() {
    return this._length;
  }

  /**
   * a setter for the duration.
   */
  set length(value) {
    if (typeof value !== "number") {
      throw new TypeError("Length must be a number");
    }
    this._length = value;
  }

  /**
   * a getter for the name of students in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * a setter  for the name of students.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError("Students must be an array of strings");
    }
    if (!value.every((student) => typeof student === "string")) {
      throw new TypeError("Students must be an array of strings");
    }
    this._students = value;
  }
}
