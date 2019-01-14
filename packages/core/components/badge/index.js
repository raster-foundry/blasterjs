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
