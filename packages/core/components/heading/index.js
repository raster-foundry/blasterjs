import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, TYPOGRAPHY, MISC, LAYOUT } from "../../constants";

const Heading = styled.h1`
  color: ${themeGet("colors.heading.color")};
  font-family: ${themeGet("fonts.heading.fontFamily")};
  font-weight: ${themeGet("fontWeights.heading.fontWeight")};
  line-height: ${themeGet("lineHeights.heading.lineHeight")};
  margin-top: ${themeGet("space.heading.m")};

  ${props => {
    const size = {
      h1: 7,
      h2: 6,
      h3: 5,
      h4: 4,
      h5: 3,
      h6: 2
    }[props.as];

    return css`
      font-size: ${props => themeGet(`fontSizes.${size}`)};
    `;
  }}

  ${themeGet("styles.heading")};
  ${COMMON}
  ${LAYOUT}
  ${MISC}
  ${TYPOGRAPHY}
`;

Heading.propTypes = {
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  ...MISC.propTypes,
  ...TYPOGRAPHY.propTypes,
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"])
};

Heading.defaultProps = {
  as: "h1"
};

export default Heading;
