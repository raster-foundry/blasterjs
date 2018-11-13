import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, color, fontSize, borderRadius } from "styled-system";

const StyledBadge = styled.span`
  ${space}
  ${color}
  ${fontSize}
  ${borderRadius}
  display: inline-block;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
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

Badge.defaultProps = {
  mx: 1,
  my: "auto",
  px: "0.4em",
  py: "0.24em",
  color: "textBase",
  bg: "grayLightest",
  fontSize: 1,
  borderRadius: "small"
};

export default Badge;
