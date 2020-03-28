import React, { Component } from "react";
import BoxFrame from "./Components/BoxFrame";
import Tooltip from "./Components/Tooltip";
import { API_URL } from "./config";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2em auto;
  max-width: 630px;
`;

const Header = styled.h1`
  font-family: "rooney-web", "AmericanTypewriter", Rockwell, serif;
  font-size: 2.5em;
  font-weight: bold;
`;

class App extends Component {
  state = {
    sum: ""
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

  sendDonation = amount => {
    const endpoint = `${API_URL}/donation`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ donation: amount })
    };
    fetch(endpoint, requestOptions)
      .then(res => res.json())
      .then(res => this.setState({ sum: res.sum }));
  };

  render() {
    return (
      <Wrapper>
        <Header>FundRasing Widget</Header>
        <Tooltip sum={this.state.sum} />
        <BoxFrame sum={this.state.sum} callback={this.sendDonation} />
      </Wrapper>
    );
  }
}

export default App;
