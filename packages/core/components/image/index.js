import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { compose } from "styled-system";
import {
  COMMON,
  BORDER,
  LAYOUT,
  POSITION,
  FLEX_ITEM,
  MISC,
  PROPTYPES
} from "../../constants";

const Image = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: auto;
  max-width: 100%;
  height: auto;

  ${props => {
    if (props.circle) {
      return css`
        border-radius: 50%;
      `;
    }

    if (props.rounded) {
      return css`
        border-radius: ${tg("image.radii.rounded")};
      `;
    }
  }}

  ${tg("image.overrides")}
  ${compose(
    COMMON,
    BORDER,
    LAYOUT,
    POSITION,
    FLEX_ITEM,
    MISC
  )}
`;

Image.propTypes = {
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  ...PROPTYPES.COMMON,
  ...PROPTYPES.BORDER,
  ...PROPTYPES.LAYOUT,
  ...PROPTYPES.POSITION,
  ...PROPTYPES.FLEX_ITEM,
  ...PROPTYPES.MISC
};

export default Image;
