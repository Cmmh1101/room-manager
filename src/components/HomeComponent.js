import React, { Component } from "react";
import { Link } from "react-router-dom";
import Students from "./StudentsComponent";
import UserAvatar from "./UserAvatar";
import Rooms from "./RoomComponent";

class Home extends Component {
  render() {
    return (
      <>
        <div className="home_bg">
          <div className="container">
            <div className="row ml-0">
              <div className="col">
                <UserAvatar />
              </div>
            </div>
            <div className="row m-0">
              <div className="col-12 title">
                <h1>Manage Rooms</h1>
              </div>
              <div className="col room_display">
                <Rooms />
              </div>
            </div>
            <div className="row"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
