import React from "react";
import logo from "../../../logo.svg";
import "./style.css";
import "../../../styles/App.css";

const Loading = () => {
  return (
    <div className="loadingContainer">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default Loading;
