import React from "react";
import "./style/avatar.css";
import user from "./style/img/user.png";

class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <img src={user} alt="" />
      </div>
    );
  }
}

export default Avatar;
