import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, borderColor, borders, boxShadow } from "styled-system";
import Box from "../box";

const StyledNavBar = styled(Box)`
  display: flex;
  ${color}
  ${borders}
  ${borderColor}
  ${boxShadow}
`;

const NavBar = props => <StyledNavBar {...props} />;

NavBar.propTypes = {
  ...Box.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...color.propTypes,
  ...boxShadow.propTypes
};

NavBar.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  bg: "navBar.bg",
  pt: "navBar.p",
  pb: "navBar.p",
  pl: "navBar.p",
  pr: "navBar.p"
};

export default NavBar;
