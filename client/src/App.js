import React, { Component } from "react";
import Header from "./Components/Header";
import BoxFrame from "./Components/BoxFrame";
import Tooltip from "./Components/Tooltip";
import { API_URL } from "./config";
import "./App.css";

class App extends Component {
  state = {
    sum: 0
  };

  componentDidMount() {
    const endpoint = `${API_URL}/funds`;
    this.fetchItems(endpoint);
  }

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(res => res.json())
      .then(res => this.setState({ sum: res.sum }));
  };

  render() {
    return (
      <div>
        <Header />
        <Tooltip sum={this.state.sum} />
        <BoxFrame sum={this.state.sum} />
      </div>
    );
  }
}

export default App;
