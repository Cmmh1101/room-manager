import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <>
        <div className="main_bg">
          <div className="container">
            <div className="row ml-0">
              <div className="col text-center">
                <h1>Manage Restrooms</h1>
              </div>
              <div className="col-12 mx-auto d-flex flex-wrap justify-content-center">
                <Card className="col-5 m-1">
                  <CardHeader>
                    <h1>Ladies 1</h1>
                  </CardHeader>
                  <CardBody>
                    <p>here is where students will be dragged to</p>
                  </CardBody>
                </Card>
                <Card className="col-5 m-1">
                  <CardHeader>
                    <h1>Boys 1</h1>
                  </CardHeader>
                  <CardBody>
                    <p>here is where students will be dragged to</p>
                  </CardBody>
                </Card>
                <Card className="col-5 m-1">
                  <CardHeader>
                    <h1>Ladies 2</h1>
                  </CardHeader>
                  <CardBody>
                    <p>here is where students will be dragged to</p>
                  </CardBody>
                </Card>
                <Card className="col-5 m-1">
                  <CardHeader>
                    <h1>Boys 2</h1>
                  </CardHeader>
                  <CardBody>
                    <p>here is where students will be dragged to</p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
