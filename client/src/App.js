import React, { Component } from "react";
import Header from "./Components/Header";
import BoxFrame from "./Components/BoxFrame";
import Tooltip from "./Components/Tooltip";
import { API_URL } from "./config";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2em auto;
  max-width: 630px;
`;

class App extends Component {
  state = {
    sum: null
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
      <Wrapper>
        <Header />
        <Tooltip sum={this.state.sum} />
        <BoxFrame sum={this.state.sum} />
      </Wrapper>
    );
  }
}

export default App;
