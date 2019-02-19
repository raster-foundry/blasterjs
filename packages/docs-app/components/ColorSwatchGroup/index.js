import React from "react";
import styled, { css } from "styled-components";
import ColorSwatch from "../ColorSwatch";

const ColorSwatchGroup = styled.div.attrs({
  border: props => props.border || "#ddd"
})`
  display: flex;
  flex-direction: column;
  border: 2px solid ${props => props.border};
  border-radius: 5px;
  flex: 1;
  margin: 5px;

  ${ColorSwatch}:first-of-type {
    border-radius: 3px 3px 0 0;
  }

  ${ColorSwatch}:last-of-type {
    border-radius: 0 0 3px 3px;
  }

  ${ColorSwatch}:only-child {
    border-radius: 3px;
  }
`;

/** @component */
export default ColorSwatchGroup;
