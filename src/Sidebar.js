import { IconButton } from "@material-ui/core";
import { Add, CropFree, MoreHoriz } from "@material-ui/icons";
import React from "react";
import Avatar from "./Avatar";
import Sidebarchat from "./Sidebarchat";
import "./style/sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar />
          <div className="sidebar__headerRight">
            <IconButton>
              <CropFree />
            </IconButton>
            <IconButton>
              <Add />
            </IconButton>
            <IconButton>
              <MoreHoriz />
            </IconButton>
          </div>
        </div>
        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search or Start new chat" />
          </div>
        </div>
        <div className="sidebar__chat">
          <h2>Add new Chat</h2>
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
        </div>
      </div>
    );
  }
}

export default Sidebar;
