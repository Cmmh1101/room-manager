import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import StudentForm from "./FormComponent";
import DisplayStudent from "./DisplayStudent";

function Rooms() {
  const [inputText, setInputText] = useState("");
  const [students, setStudents] = useState([]);
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
      <div className="room_box m-2">
        <h4 className="room_title">Boys 1</h4>

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
