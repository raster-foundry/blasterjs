import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, TYPOGRAPHY, FLEX_ITEM } from "../../constants";

const A = styled.a`
  color: ${themeGet("a.colors.color")};
  font-weight: ${themeGet("a.fontWeights.fontWeight")};

  &:focus-visible {
    color: ${props =>
      themeGet(`colors.${props.colorFocus}`, "a.colors.colorFocus")};
  }
  .js-focus-visible &.focus-visible {
    color: ${props =>
      themeGet(`colors.${props.colorFocus}`, "a.colors.colorFocus")};
  }

  &:hover {
    color: ${props =>
      themeGet(`colors.${props.colorHover}`, "a.colors.colorHover")};
  }

  &:active {
    color: ${props =>
      themeGet(`colors.${props.colorActive}`, "a.colors.colorActive")};
  }

  ${themeGet("a.overrides")}
  ${COMMON}
  ${TYPOGRAPHY}
  ${FLEX_ITEM}
`;

A.propTypes = {
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...FLEX_ITEM.propTypes,
  href: PropTypes.string.isRequired,
  colorFocus: PropTypes.string,
  colorHover: PropTypes.string,
  colorActive: PropTypes.string
};

export default A;
