import React, { useState } from "react";
import StudentForm2 from "./Form2Component";
import DisplayStudent from "./DisplayStudent";

function Room2() {
  const [inputText, setInputText] = useState("");

  const [students, setStudents] = useState([]);
  return (
    <>
      <div className="room_box m-2">
        <h4 className="room_title">Boys 1</h4>

        <div>
          <StudentForm2
            inputText={inputText}
            students={students}
            setStudents={setStudents}
            setInputText={setInputText}
          />
          <DisplayStudent setStudents={setStudents} students={students} />
        </div>
      </div>
    </>
  );
}

export default Room2;
