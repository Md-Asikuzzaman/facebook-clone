import { IconButton } from "@material-ui/core";
import { AttachFile, Mic, Mood, MoreVert, Search } from "@material-ui/icons";
import React from "react";
import "./style/chat.css";
import user from "./style/img/user.png";

class Chat extends React.Component {
  render() {
    return (
      <div className="chat">
        <div className="chat__header">
          <div className="avatar">
            <img src={user} alt="" />
          </div>
          <div className="chat__headerInfo">
            <h3>Room name</h3>
            <p>Last seen at...</p>
          </div>
          <div className="chat__headerRight">
            <IconButton>
              <Search />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="chat__body">
          <p className="chat__message">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__message">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>

          <p className="chat__message chat__receiver">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__message">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__message">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__message">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__message chat__receiver">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__message chat__receiver">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__message">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__message">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__message">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__message">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__message">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__message chat__receiver">
            <span className="chat__name">Asik</span>
            This is a message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
        </div>

        <div className="chat__footer">
          <IconButton>
            <Mood />
          </IconButton>
          <form>
            <input type="text" placeholder="Type a message" />
            <button type="submit">Send a message</button>
          </form>

          <IconButton>
            <Mic />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Chat;
