import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { borderRadius, themeGet } from "styled-system";
import Text from "../text";

const StyledBadge = styled(Text)`
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  ${borderRadius}
  ${themeGet("styles.badge")};
`;

const Badge = props => {
  return <StyledBadge {...props} />;
};

Badge.propTypes = {
  ...Text.propTypes,
  ...borderRadius.propTypes
};

Badge.defaultProps = {
  tag: "span",
  pt: "badge.pTop",
  pb: "badge.pBottom",
  pl: "badge.pLeft",
  pr: "badge.pRight",
  borderRadius: "badge.borderRadius",
  lineHeight: "badge.lineHeight",
  bg: "badge.background",
  color: "badge.color",
  fontSize: "badge.fontSize",
  fontWeight: "badge.fontWeight"
};

export default Badge;
