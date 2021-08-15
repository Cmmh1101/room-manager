import React, { Component } from "react";
import { Button, Input, Form } from "reactstrap";

const StudentForm = ({ inputText, setInputText, students, setStudents }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
    //
  };
  const submitStudentHandler = (e) => {
    e.preventDefault();
    setStudents([...students, { text: inputText, id: Math.random() * 1000 }]);
    setInputText("");
  };

  //   const inputTextHandler = (e) => {console.log(e)}

  return (
    <>
      <div className="col-12 col-md-10 form-container">
        <Form className="col  d-flex justify-content-center mb-3">
          <Input
            value={inputText}
            onChange={inputTextHandler}
            placeholder="Student Name"
          />
          <Button onClick={submitStudentHandler} type="submit">
            add
          </Button>
        </Form>
      </div>
    </>
  );
};

export default StudentForm;
