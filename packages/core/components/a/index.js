import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, TYPOGRAPHY, MISC, LAYOUT } from "../../constants";

const A = styled.a`
  color: ${themeGet("a.colors.color")};
  font-weight: ${themeGet("a.fontWeights.fontWeight")};

  &:hover {
    color: ${props => themeGet(`colors.${props.colorHover}`, props.colorHover)};
  }

  ${themeGet("a.styles")};
  ${COMMON}
  ${LAYOUT}
  ${MISC}
  ${TYPOGRAPHY}
`;

A.propTypes = {
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  ...MISC.propTypes,
  ...TYPOGRAPHY.propTypes,
  href: PropTypes.string.isRequired,
  colorHover: PropTypes.string
};

export default A;
