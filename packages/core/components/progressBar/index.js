import React from "react";
import PropTypes from "prop-types";
import { darken } from "polished";
import styled, { css, keyframes } from "styled-components";
import { color, borderRadius, themeGet } from "styled-system";
import Box from "../box";

const animateProgress = keyframes`
  to {
    background-position: 30px 0;
  }
`;

const ProgressBar = styled(Box)`
  ${color}
  ${borderRadius}
  position: relative;
  overflow: hidden;

  ${themeGet("styles.progressBar.backBar")};

  &::after {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${props => (props.value / props.max) * 100}%;
    border-radius: inherit;

    ${({ animated }) =>
      animated &&
      css`
        background-position: 0 0;
        animation: 1s ${animateProgress} linear infinite;
      `}

    ${props => {
      const valColor = themeGet(`colors.${props.color}`, props.color)(props);

      return css`
        background: ${props =>
          !props.striped
            ? valColor
            : `linear-gradient( 45deg, 
                  ${valColor} 25%, 
                  ${darken(0.05, valColor)} 25%, 
                  ${darken(0.05, valColor)} 50%, 
                  ${valColor} 50%, 
                  ${valColor} 75%, 
                  ${darken(0.05, valColor)} 75%, 
                  ${darken(0.05, valColor)} 100%)
              `};
        background-size: 30px 30px;
        background-attachment: fixed;
      `;
    }}

    ${themeGet("styles.progressBar.topBar")};
  }
`;

ProgressBar.propTypes = {
  ...Box.propTypes,
  ...color.propTypes,
  ...borderRadius.propTypes,
  striped: PropTypes.bool,
  animated: PropTypes.bool
};

ProgressBar.defaultProps = {
  width: "100%",
  height: "progressBar.height",
  value: 0,
  max: 0,
  borderRadius: "progressBar.borderRadius",
  bg: "progressBar.bg",
  color: "progressBar.color"
};

export default ProgressBar;
