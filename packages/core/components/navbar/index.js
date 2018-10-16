import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { darken, invert } from "polished";
import { color, borders, boxShadow, lineHeight } from "styled-system";
import Link from "../link";

const StyledNavbar = styled.div`
  display: flex;
  align-content: center;
  ${color};
  ${borders};
  ${boxShadow};
  ${lineHeight};

  ${Link} {
    padding: 1rem;
    text-decoration: none;
    color: inherit;
  }
`;

const Navbar = props => {
  return (
    <StyledNavbar {...props}>
      <>{props.children}</>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  ...borders.PropTypes,
  ...color.PropTypes,
  ...boxShadow.PropTypes
};

Navbar.defaultProps = {
  bg: "shadeNormal"
};

/** @component */
export default withTheme(Navbar);
