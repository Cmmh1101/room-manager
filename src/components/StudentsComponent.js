import React, { Component } from "react";
import { Button, Input, Form } from "reactstrap";

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };

    this.addStudent = this.addStudent.bind(this);
  }

  addStudent(e) {
    if (this._inputElement.value !== "") {
      var newStudent = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          students: prevState.students.concat(newStudent),
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.students);
    e.preventDefault();
  }

  render() {
    return (
      <>
        <div className="col-12 col-md-10 mx-auto d-flex justify-content-center flex-column text-center">
          {/* <h5>Manage students</h5>
        <p>Selected: {rSelected}</p> */}
          <Form
            onSubmit={this.addStudent}
            className="col d-flex justify-content-center mb-3"
          >
            <Input
              ref={(a) => (this._inputElement = a)}
              placeholder="Student Name"
            />
            <Button type="submit">add</Button>
          </Form>
        </div>
      </>
    );
  }
}

export default Students;
