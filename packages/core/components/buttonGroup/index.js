import React from "react";
import styled from "styled-components";
import Button from "../button";

const StyledButtonGroup = styled.div`
  display: inline-flex;
  position: relative;

  ${Button} {
    flex: 1;
    font-size: 50px;
    margin-right: 2em;
  }
`;

const ButtonGroup = props => {
  return (
    <StyledButtonGroup {...props}>
      <>{props.children}</>
    </StyledButtonGroup>
  );
};

/** @component */
export default ButtonGroup;
