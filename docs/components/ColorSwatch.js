/* @flow */

import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { theme } from "../../packages/core/defaultTheme";

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

/** @component */
const ColorSwatch = styled.div.attrs({
  children: props => getKeyByValue(theme.colors, props.color)
})`
  flex: 1;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  background-color: ${props => props.color};
  color: ${props => (props.invert ? "#fff" : "#000")};
`;

/** @component */
export default function component(props) {
  return <div>Test</div>;
}
