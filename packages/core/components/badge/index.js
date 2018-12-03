import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, fontSize, borderRadius } from "styled-system";
import Box from "../box";

const StyledBadge = styled(Box)`
  display: inline-block;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
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
  ...Box.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...borderRadius.propTypes
};

Badge.defaultProps = {
  mr: 1,
  pt: "0.24em",
  pb: "0.24em",
  pl: "0.4em",
  pr: "0.4em",
  borderRadius: "small",
  bg: "grayLightest",
  color: "textBase",
  fontSize: 1
};

export default Badge;
