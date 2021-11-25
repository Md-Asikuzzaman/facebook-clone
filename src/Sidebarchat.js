import React from "react";
import "./style/sidebarchat.css";
import user from "./style/img/user.png";

class Sidebarchat extends React.Component {
  render() {
    return (
      <div className="sidebarChat">
        <div className="avatar">
          <img src={user} alt="" />
        </div>
        <div className="sidebarChat__info">
          <h3>Room name</h3>
          <p>This is the last message</p>
        </div>
      </div>
    );
  }
}

export default Sidebarchat;
