import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 250px;
  border: 1px solid #eaeaea;
  text-align: left;
`;

const ProgressBarContainer = styled.div`
  position: relative;
  height: 12px;
  border-bottom: 1px solid #eaeaea;
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background-color: ${props =>
    props.percentage === 100 ? "#1cbc2c" : "#EF5F3C"};
  width: ${props => props.percentage}%;
`;

const BoxFrameContent = styled.div`
  margin: 10px;
`;

const InputText = styled.input.attrs({
  type: "number",
  min: "0",
  step: "1",
  id: "fundraise_amount"
})`
  padding: 11px;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  max-width: -moz-available;
`;

const InputSubmit = styled.input.attrs({
  type: "submit",
  id: "fundraise_pledgeButton",
  value: "Pledge"
})`
  margin-top: 2px;
  padding: 12px;
  background-color: #1cbc2c;
  border: 0px;
  color: #fff;
  border-radius: 5px;
`;

const Notification = styled.div`
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  border-color: #1cbc2c;
  background-color: #dff0d8;
`;

const Link = styled.a`
  color: #000;
`;

class BoxFrame extends Component {
  state = {
    value: "",
    has_donated: false
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  updateDonation = event => {
    this.props.callback(this.state.value);
    this.setState({ value: "", has_donated: true });
    event.preventDefault();
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ has_donated: false });
  };

  render() {
    return (
      <Wrapper>
        <ProgressBarContainer>
          <ProgressBar
            percentage={this.props.sum < 1000 ? this.props.sum / 10 : 100}
          ></ProgressBar>
        </ProgressBarContainer>
        <BoxFrameContent>
          {this.props.sum < 1000 ? (
            <p>
              Only 3 days left to fund this project,{" "}
              <strong id="fundraise_currentFundingText">
                ${this.props.sum}
              </strong>{" "}
              has been raised towards the goal to raise{" "}
              <strong id="fundraise_goalText">$1000</strong>.
            </p>
          ) : (
            <p>
              Target achieved.{" "}
              <strong id="fundraise_currentFundingText">
                ${this.props.sum}
              </strong>{" "}
              has been raised. Keep going though!
            </p>
          )}
          <p>
            Pledge money by entering the sum in the field below and press
            pledge, we already know your credit card details.
          </p>
          {!this.state.has_donated ? (
            <form id="fundraise_form" onSubmit={this.updateDonation}>
              <InputText
                value={this.state.value}
                onChange={this.handleChange}
              />
              <InputSubmit />
            </form>
          ) : (
            <Notification>
              Thank you for your pledge!{" "}
              <Link href="#" onClick={this.handleClick}>
                Close
              </Link>
            </Notification>
          )}
        </BoxFrameContent>
      </Wrapper>
    );
  }
}

export default BoxFrame;
