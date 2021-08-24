import React, { useState, useEffect } from "react";
import StudentForm from "./FormComponent";
import DisplayStudent from "./DisplayStudent";

function Rooms() {
  const [inputText, setInputText] = useState("");

  const [students, setStudents] = useState([]);

  // getting localStudents (once)
  // useEffect(() => {
  //   getLocalStudents();
  // }, []);
  // useEffect(() => {
  //   saveLocalStudents();
  // }, [students]);
  // ----------------------------------
  // make a variable of your localstorage
  // const newStudents = localStorage.getItem("students");

  // if (!newStudents) {
  //   // this checks to see if it's null/falsy
  //   return; // exit the function
  // }

  //you don't need to set the item to an empty array because your state is defaulted to []

  // -----------------------------------
  // Saving to local storage

  // const saveLocalStudents = () => {
  //   localStorage.setItem("students", students);
  // };

  // const getLocalStudents = () => {
  //   if (localStorage.getItem("students") === null) {
  //     localStorage.setItem("students", JSON.stringify([]));
  //   } else {
  //     let studentsLocal = JSON.parse(localStorage.getItem("students"));

  //     console.log(studentsLocal);
  //     setStudents(studentsLocal);
  //   }
  // };

  return (
    <>
      <div className="room_box m-2">
        <h4 className="room_title">
          <i className="fa fa-female room-icon" />
          Girls 1
        </h4>

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

export default Rooms;
