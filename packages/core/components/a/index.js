import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, TYPOGRAPHY, MISC, LAYOUT } from "../../constants";

const A = styled.a`
  color: ${themeGet("colors.a.color")};
  font-weight: ${themeGet("fontWeights.a.fontWeight")};

  &:hover {
    color: ${props => themeGet(`colors.${props.colorHover}`, props.colorHover)};
  }

  ${themeGet("styles.a")};
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
