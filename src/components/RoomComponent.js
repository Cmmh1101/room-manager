import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import Students from "./StudentsComponent";

class Rooms extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   girlsName: "Girls",
    //   boysName: "Boys",
    //   mainOfficeName: "Main Office",
    //   nurseName: "Nurse",
    // };
  }

  render() {
    const girlsName = "Girls";
    const boysName = "Boys";
    const mainOfficeName = "Main Office";
    const nurseName = "Nurse";
    return (
      <>
        <div className="col-6 col-md-3">
          <Card className="col room_cards m-2">
            <CardHeader>{girlsName} 1</CardHeader>

            <CardBody>
              <Students />
            </CardBody>
          </Card>
          <Card className="col room_cards m-2">
            <CardHeader>{girlsName} 2</CardHeader>

            <CardBody>
              <Students />
            </CardBody>
          </Card>
          <Card className="col room_cards m-2">
            <CardHeader>{girlsName} E</CardHeader>

            <CardBody>
              <Students />
            </CardBody>
          </Card>
        </div>
        <div className="col-6 col-md-3">
          <Card className="col room_cards m-2">
            <CardHeader>{boysName} 1</CardHeader>

            <CardBody>
              <Students />
            </CardBody>
          </Card>
          <Card className="col room_cards m-2">
            <CardHeader>{boysName} 2</CardHeader>

            <CardBody>
              <Students />
            </CardBody>
          </Card>
          <Card className="col room_cards m-2">
            <CardHeader>{boysName} E</CardHeader>

            <CardBody>
              <Students />
            </CardBody>
          </Card>
        </div>
        <div className="col-6 col-md-3">
          <Card className="col room_cards m-2">
            <CardHeader>{mainOfficeName}</CardHeader>

            <CardBody>
              <Students />
            </CardBody>
          </Card>
          <Card className="col room_cards m-2">
            <CardHeader>{nurseName}</CardHeader>

            <CardBody>
              <Students />
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default Rooms;
