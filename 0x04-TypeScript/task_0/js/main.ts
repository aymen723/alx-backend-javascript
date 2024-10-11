export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentA: Student = {
  firstName: "jhon",
  lastName: "test",
  age: 22,
  location: "Seoul, South Korea",
};
const studentB: Student = {
  firstName: "jhon",
  lastName: "test2",
  age: 22,
  location: "Lodz, Poland",
};

const studentsList: Array<Student> = [studentA, studentB];

/**
 * @param students students list.
 */
export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const headRow = document.createElement("tr");
  const tableBody = document.createElement("tbody");
  headRow.insertAdjacentHTML("beforeend", "<td>FirstName</td");
  headRow.insertAdjacentHTML("beforeend", "<td>Location</td");
  tableHead.insertAdjacentElement("beforeend", headRow);

  for (const student of students) {
    const bodyRow = document.createElement("tr");
    bodyRow.insertAdjacentHTML("beforeend", `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML("beforeend", `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement("beforeend", bodyRow);
  }

  table.insertAdjacentElement("beforeend", tableHead);
  table.insertAdjacentElement("beforeend", tableBody);
  document.body.insertAdjacentElement("beforeend", table);
};

displayStudents(studentsList);
const styleSheetElement = document.createElement("style");
document.head.insertAdjacentElement("beforeend", styleSheetElement);
document.title = "Task 0";
