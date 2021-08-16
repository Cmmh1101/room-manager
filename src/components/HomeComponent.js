import React, { Component } from "react";

import UserAvatar from "./UserAvatar";
import Rooms from "./RoomComponent";
import Room2 from "./Room2Component";

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
              <div className="col-12 room_display">
                <Rooms />
                <Room2 />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
