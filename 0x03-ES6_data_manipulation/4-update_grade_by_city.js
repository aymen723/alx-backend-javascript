/**
 * to update the gardes.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - students list.
 * @param {*} city -  students cities.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - grade of a specifique student.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: "N/A" };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (
          newGrades.filter((grade) => grade.studentId === student.id).pop() ||
          defaultGrade
        ).grade,
      }));
  }
  return [];
}
