import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, color, fontSize, borderRadius, themeGet } from "styled-system";

const StyledBadge = styled.span`
  & + & {
    margin-left: ${themeGet('space.1', '0.8rem')};
  }
  display: inline-block;
  padding: 0.24em 0.4em;
  borderRadius: ${themeGet('radii.small', '3px')};
  background-color: ${themeGet('colors.grayLightest', '#e0e5f5')};
  color: ${themeGet('colors.textBase', '#435399')};
  font-size: ${themeGet('fontSizes.1', '1.2rem')};
  line-height: 1;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  ${space}
  ${color}
  ${fontSize}
  ${borderRadius}
`;

const Badge = props => {
  return (
    <StyledBadge {...props}>{props.children}</StyledBadge>
  );
};

Badge.propTypes = {
  ...space.PropTypes,
  ...color.PropTypes,
  ...fontSize.PropTypes,
  ...borderRadius.PropTypes
};

export default Badge;
