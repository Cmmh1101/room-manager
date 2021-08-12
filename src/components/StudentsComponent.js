import React, { useState } from "react";
import { Button, ButtonGroup, Label, Input } from "reactstrap";

const Students = (props) => {
  const [rSelected, setRSelected] = useState(null);

  return (
    <>
      <div className="col-12 col-md-10 mx-auto d-flex justify-content-center flex-column text-center">
        {/* <h5>Manage students</h5>
        <p>Selected: {rSelected}</p> */}
        <div className="col d-flex justify-content-center mb-3">
          <Input placeholder="Student Name" />
        </div>
        {/* <ButtonGroup className="">
          <Button
            onClick={() => setRSelected(9)}
            active={rSelected === 9}
            className="grades_btns"
          >
            9th
          </Button>
          <Button
            onClick={() => setRSelected(10)}
            active={rSelected === 10}
            className="grades_btns"
          >
            10th
          </Button>
          <Button
            onClick={() => setRSelected(11)}
            active={rSelected === 11}
            className="grades_btns"
          >
            11th
          </Button>
          <Button
            onClick={() => setRSelected(12)}
            active={rSelected === 12}
            className="grades_btns"
          >
            12th
          </Button>
        </ButtonGroup> */}
      </div>
    </>
  );
};

export default Students;
