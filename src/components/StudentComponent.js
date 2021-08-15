import React from "react";
import { Button } from "reactstrap";

const Student = ({ text, student, students, setStudents }) => {
  // event listeners
  const removeHandler = () => {
    setStudents(students.filter((el) => el.id !== student.id));
  };

  return (
    <div>
      <li> {text} </li>
      <Button onClick={removeHandler}>X</Button>
    </div>
  );
};

export default Student;
