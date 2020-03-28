import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #fff;
  background-color: #424242;
  padding: 10px 0;
  border-radius: 4px;
  width: 250px;
  margin-bottom: 10px;
  text-align: center;
`;

const Tooltip = props => {
  const text = " of the goal funded";
  return (
    <Wrapper>
      <strong id="fundraise_remainingText">
        {props.sum < 1000 ? props.sum / 10 : 100}%
      </strong>
      {text}
    </Wrapper>
  );
};

export default Tooltip;
