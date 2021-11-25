import React from "react";
import "./Header.css";
import logo from "./1200px-Facebook_f_logo_(2019).svg.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Profile from "./img/profile.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img className="logo" src={logo} alt="logo" />
        <form className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </form>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <FlagIcon />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={Profile} />
          <h4>Md Asikuzzaman</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
