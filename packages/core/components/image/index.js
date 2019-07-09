import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, BORDER, LAYOUT, POSITION, FLEX_ITEM, MISC } from "../../constants";

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
        border-radius: ${themeGet("image.radii.rounded")};
      `;
    }
  }}

  ${themeGet("image.styles")}
  ${COMMON}
  ${BORDER}
  ${LAYOUT}
  ${POSITION}
  ${FLEX_ITEM}
  ${MISC}
`;


Image.propTypes = {
  ...COMMON.propTypes,
  ...BORDER.propTypes,
  ...LAYOUT.propTypes,
  ...POSITION.propTypes,
  ...FLEX_ITEM.propTypes,
  ...MISC.propTypes,
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Image;
