import React from "react";
import PropTypes from "prop-types";
import { darken } from "polished";
import styled, { css, keyframes } from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { compose } from "styled-system";
import { COMMON, BORDER, LAYOUT, FLEX_ITEM, PROPTYPES } from "../../constants";

const animateProgress = keyframes`
  to {
    background-position: 30px 0;
  }
`;

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

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
      const valColor = props.color
        ? tg(`colors.${props.color}`, props.color)(props)
        : tg("progressBar.colors.color")(props);

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

    ${tg("progressBar.overrides.topBar")};
  }

  height: ${tg("progressBar.sizes.height")};
  border-radius: ${tg("progressBar.radii.borderRadius")};
  background-color: ${tg("progressBar.colors.bg")};
  color: ${tg("progressBar.colors.color")};

  ${tg("progressBar.overrides.backBar")};
  ${compose(
    COMMON,
    BORDER,
    LAYOUT,
    FLEX_ITEM
  )}
`;

ProgressBar.propTypes = {
  striped: PropTypes.bool,
  animated: PropTypes.bool,
  ...PROPTYPES.COMMON,
  ...PROPTYPES.BORDER,
  ...PROPTYPES.LAYOUT,
  ...PROPTYPES.FLEX_ITEM
};

ProgressBar.defaultProps = {
  value: 0,
  max: 0
};

export default ProgressBar;
