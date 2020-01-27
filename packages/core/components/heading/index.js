import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, LAYOUT, POSITION, TYPOGRAPHY, FLEX_ITEM } from "../../constants";

const Heading = styled.h1`
  color: ${themeGet("heading.colors.color")};
  font-family: ${themeGet("heading.fonts.fontFamily")};
  font-weight: ${themeGet("heading.fontWeights.fontWeight")};
  line-height: ${themeGet("heading.lineHeights.lineHeight")};
  margin-top: ${themeGet("heading.space.mt")};
  font-size: ${props => themeGet(`heading.fontSizes.${props.as}`)};

  ${themeGet("heading.overrides")}
  ${COMMON}
  ${LAYOUT}
  ${POSITION}
  ${TYPOGRAPHY}
  ${FLEX_ITEM}
`;

Heading.propTypes = {
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  ...POSITION.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...FLEX_ITEM.propTypes,
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"])
};

Heading.defaultProps = {
  as: "h1"
};

export default Heading;
