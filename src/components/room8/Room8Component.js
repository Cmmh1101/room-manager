import React, { useState } from "react";
import StudentForm from "./FormComponent";
import DisplayStudent from "./DisplayStudent";

function Room8() {
  const [inputText, setInputText] = useState("");

  const [students, setStudents] = useState([]);
  return (
    <>
      <div className="room_box m-2">
        <h4 className="room_title">Nurse</h4>

        <div>
          <StudentForm
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

export default Room8;
