import React, { Component } from "react";
import logo from "./logo.svg";
import "./build/styles.css";
// import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Post Css</h1>
        <div className="cont">
          <div className="box">one</div>
          <div className="box">two</div>
          <div className="box">three</div>
          <div className="box">four</div>
        </div>
        <button className="btn">This is a button</button>
      </div>
    );
  }
}

export default App;
