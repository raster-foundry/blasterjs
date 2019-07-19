import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import { extractComponentFromChildren } from "../../utils";
import { COMMON, BORDER, LAYOUT, FLEX_ITEM } from "../../constants";

const StyledSwatch = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;

  ${props => {
    if (props.circle) {
      return css`
        border-radius: 50%;
      `;
    }

    if (props.rounded) {
      return css`
        border-radius: ${themeGet("swatch.radii.rounded")};
      `;
    }
  }}

  width: ${themeGet("swatch.widths.width")};
  height: ${themeGet("swatch.heights.height")};
  padding: ${themeGet("swatch.space.p")};

  ${themeGet("swatch.styles")}
  ${COMMON}
  ${BORDER}
  ${LAYOUT}
  ${FLEX_ITEM}
`;

const Swatch = ({ color, children: _children, ...props }) => {
  const [children, tooltip] = extractComponentFromChildren(_children, 'Tooltip');

  return (
    <StyledSwatch
      {...props}
      bg={color}
    >
      {tooltip}
    </StyledSwatch>
  );
};

Swatch.propTypes = {
  ...COMMON.propTypes,
  ...BORDER.propTypes,
  ...LAYOUT.propTypes,
  ...FLEX_ITEM.propTypes,
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  color: PropTypes.string.isRequired
};

export default Swatch;
