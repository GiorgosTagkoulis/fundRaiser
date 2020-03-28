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

const ProgressBarContent = styled.div`
  margin: 10px;
`;

class BoxFrame extends Component {
  state = {
    has_donated: false
  };

  render() {
    return (
      <Wrapper>
        <ProgressBarContainer>
          <ProgressBar
            percentage={this.props.sum < 1000 ? this.props.sum / 10 : 100}
          ></ProgressBar>
        </ProgressBarContainer>
        <ProgressBarContent></ProgressBarContent>
        <ProgressBarContent>
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
        </ProgressBarContent>
      </Wrapper>
    );
  }
}

export default BoxFrame;
