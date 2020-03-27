import React, { Component } from "react";
import Header from "./Components/Header";
import BoxFrame from "./Components/BoxFrame";
import Tooltip from "./Components/Tooltip";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Tooltip />
        <BoxFrame />
      </div>
    );
  }
}

export default App;
