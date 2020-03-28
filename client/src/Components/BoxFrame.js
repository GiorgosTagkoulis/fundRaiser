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

const InputSubmit = styled.input.attrs({
  type: "submit",
  id: "fundraise_pledgeButton",
  value: "Pledge"
})`
  padding: 12px;
  background-color: #1cbc2c;
  border: 0px;
  color: #fff;
  border-radius: 5px;
`;

const InputText = styled.input.attrs({
  type: "text",
  id: "fundraise_amount"
})`
  padding: 11px;
  border-radius: 5px;
  border: 1px solid #eaeaea;
`;

class BoxFrame extends Component {
  state = {
    amount: null,
    has_donated: false
  };

  updateDonation = event => {
    event.preventDefault();
    this.props.callback(500);
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
          <p>
            Only 3 days left to fund this project,{" "}
            <strong id="fundraise_currentFundingText">${this.props.sum}</strong>{" "}
            has been raised towards the goal to raise{" "}
            <strong id="fundraise_goalText">$1000</strong>.
          </p>
          <p>
            Pledge money by entering the sum in the field below and press
            pledge, we already know your credit card details.
          </p>
          <form id="fundraise_form" onSubmit={this.updateDonation}>
            <InputText />
            <InputSubmit />
          </form>
        </BoxFrameContent>
      </Wrapper>
    );
  }
}

export default BoxFrame;
