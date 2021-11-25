import React from "react";
import "./style/style.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./style/app.css";
import "./style/icon/css/font-awesome.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__body">
          <Sidebar />
          <Chat />
        </div>
      </div>
    );
  }
}

export default App;
