import React from "react";
import Student from "./StudentComponent";

const DisplayStudent = ({ students, setStudents }) => {
  return (
    <div className="student-display">
      <ul className="student-in-room">
        {students.map((student) => (
          <Student
            setStudents={setStudents}
            students={students}
            student={student}
            key={student.id}
            text={student.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default DisplayStudent;
