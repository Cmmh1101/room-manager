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

  // Saving to local storage

  // const saveLocalStudents = () => {
  //   if (localStorage.setItem("students") === null) {
  //     localStorage.setItem("students", JSON.stringify([]));
  //   } else {
  //     localStorage.setItem("students", JSON.stringify(students));
  //   }
  // };

  // const getLocalStudents = () => {
  //   if (localStorage.getItem("students") === null) {
  //     localStorage.setItem("students", JSON.stringify([]));
  //   } else {
  //     let studentsLocal = JSON.parse(localStorage.getItem("todos"));

  //     console.log(studentsLocal);
  //     setStudents(studentsLocal);
  //   }
  // };

  return (
    <>
      <div className="room_box m-2">
        <h4 className="room_title">Girls 1</h4>

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

      {/* <Card className="col room_cards m-2">
            <CardHeader>{girlsName} 2</CardHeader>

            <CardBody></CardBody>
          </Card>
          <Card className="col room_cards m-2">
            <CardHeader>{girlsName} E</CardHeader>

            <CardBody></CardBody>
          </Card> */}

      {/* <div className="col-12 col-md-5">
          <Card className="col room_cards m-2">
            <CardHeader>{boysName} 1</CardHeader>

            <CardBody></CardBody>
          </Card>
          <Card className="col room_cards m-2">
            <CardHeader>{boysName} 2</CardHeader>

            <CardBody></CardBody>
          </Card>
          <Card className="col room_cards m-2">
            <CardHeader>{boysName} E</CardHeader>

            <CardBody></CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5">
          <Card className="col room_cards m-2">
            <CardHeader>{mainOfficeName}</CardHeader>

            <CardBody></CardBody>
          </Card>
          <Card className="col room_cards m-2">
            <CardHeader>{nurseName}</CardHeader>

            <CardBody></CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5">
          <Card className="col room_cards m-2">
            <CardHeader>{socialName}</CardHeader>

            <CardBody></CardBody>
          </Card>
        </div> */}
    </>
  );
}

export default Rooms;
