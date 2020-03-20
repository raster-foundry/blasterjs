import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { compose } from "styled-system";
import { extractComponentFromChildren } from "../../utils";
import { COMMON, BORDER, LAYOUT, FLEX_ITEM, PROPTYPES } from "../../constants";

const StyledSwatch = styled.span`
  display: inline-block;

  ${props => {
    if (props.circle) {
      return css`
        border-radius: 50%;
      `;
    }

    if (props.rounded) {
      return css`
        border-radius: ${tg("swatch.radii.rounded")};
      `;
    }
  }}

  width: ${tg("swatch.sizes.width")};
  height: ${tg("swatch.sizes.height")};
  padding: ${tg("swatch.space.p")};

  ${tg("swatch.overrides")}
  ${compose(
    COMMON,
    BORDER,
    LAYOUT,
    FLEX_ITEM
  )}
`;

const Swatch = ({ color, children: _children, ...props }) => {
  const [children, tooltip] = extractComponentFromChildren(
    _children,
    "Tooltip"
  );

  return (
    <StyledSwatch {...props} bg={color}>
      {tooltip}
    </StyledSwatch>
  );
};

Swatch.propTypes = {
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  color: PropTypes.string.isRequired,
  ...PROPTYPES.COMMON,
  ...PROPTYPES.BORDER,
  ...PROPTYPES.LAYOUT,
  ...PROPTYPES.FLEX_ITEM
};

export default Swatch;
