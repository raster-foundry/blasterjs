/* @flow */

import React from "react";
import PropTypes from "prop-types";
import { darken, rgba, shade } from "polished";
import styled, { css } from "styled-components";

const Link = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: ${props => props.theme.linkStyles.color};
  font-size: ${props => props.theme.typeSystem.base};
  font-family: ${props => props.theme.fonts.sans};

  &:hover {
    text-decoration: underline;
    color: ${props => darken(0.2, props.theme.linkStyles.color)};
  }
`;

Link.defaultProps = {
  href: "#"
};

Link.propTypes = {
  /**
   * Enforcing best practices by defining a default href
   */
  href: PropTypes.string.isRequired
};

/** @component */
export default Link;
