import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import React, { useState } from "react";
import "./MessageSender.css";
import Profile from "./img/profile.png";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
    setimageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={Profile} />
        <form>
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder="What's no your mind. Md Asikuzzaman"
          />
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setimageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button type="submit" onClick={handleSubmit}>
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
