import React from "react";
import { Button } from "reactstrap";
import Timer from "./TimerComponent";

const Student = ({ text, student, students, setStudents }) => {
  // event listeners
  const removeHandler = () => {
    setStudents(students.filter((el) => el.id !== student.id));
  };

  return (
    <div className="student_in_room">
      <p> {text} </p>
      <Timer />
      <Button className="remove-btn" onClick={removeHandler}>
        X
      </Button>
    </div>
  );
};

export default Student;
