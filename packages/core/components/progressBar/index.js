import React from "react";
import styled from "styled-components";
import { color, borderRadius, themeGet } from "styled-system";
import Box from "../box";

const ProgressBar = styled(Box)`
  ${color}
  ${borderRadius}
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: ${props => themeGet(`colors.${props.color}`, props.color)};
    width: ${props => (props.value / props.max) * 100}%;
    border-radius: inherit;
  }
`;

ProgressBar.propTypes = {
  ...Box.propTypes,
  ...color.propTypes,
  ...borderRadius.propTypes
};

ProgressBar.defaultProps = {
  width: "100%",
  height: "0.8rem",
  value: 0,
  max: 0,
  borderRadius: 999,
  bg: "grayLightest",
  color: "primary"
};

export default ProgressBar;
