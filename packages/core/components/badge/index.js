import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { borderRadius } from "styled-system";
import Text from "../text";

const StyledBadge = styled(Text)`
  display: inline-block;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  ${borderRadius}
`;

const Badge = props => {
  return (
    <StyledBadge {...props} />
  );
};

Badge.propTypes = {
  ...Text.propTypes,
  ...borderRadius.propTypes
};

Badge.defaultProps = {
  tag: "span",
  mr: "badge.mr",
  pt: "badge.py",
  pb: "badge.py",
  pl: "badge.px",
  pr: "badge.px",
  borderRadius: "badge.borderRadius",
  bg: "badge.bg",
  color: "badge.color",
  fontSize: "badge.fontSize"
};

export default Badge;
