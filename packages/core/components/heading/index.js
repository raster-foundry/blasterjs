import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { compose } from "styled-system";
import { themeGet as tg } from "@styled-system/theme-get";
import {
  COMMON,
  LAYOUT,
  POSITION,
  TYPOGRAPHY,
  FLEX_ITEM,
  PROPTYPES
} from "../../constants";

const Heading = styled.h1`
  color: ${tg("heading.colors.color")};
  font-family: ${tg("heading.fonts.fontFamily")};
  font-weight: ${tg("heading.fontWeights.fontWeight")};
  line-height: ${tg("heading.lineHeights.lineHeight")};
  margin-top: ${tg("heading.space.mt")};
  font-size: ${props => tg(`heading.fontSizes.${props.as}`)};

  ${tg("heading.overrides")}
  ${compose(
    COMMON,
    LAYOUT,
    POSITION,
    TYPOGRAPHY,
    FLEX_ITEM
  )}
`;

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  ...PROPTYPES.COMMON,
  ...PROPTYPES.LAYOUT,
  ...PROPTYPES.POSITION,
  ...PROPTYPES.TYPOGRAPHY,
  ...PROPTYPES.FLEX_ITEM
};

Heading.defaultProps = {
  as: "h1"
};

export default Heading;
