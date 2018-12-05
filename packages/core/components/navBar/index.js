import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, borders, boxShadow } from "styled-system";
import Box from "../box";

const StyledNavBar = styled(Box)`
  display: flex;
  ${color}
  ${borders}
  ${boxShadow}
`;

const NavBar = props => <StyledNavBar {...props} />;

NavBar.propTypes = {
  ...Box.propTypes,
  ...borders.propTypes,
  ...color.propTypes,
  ...boxShadow.propTypes
};

NavBar.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  bg: "shadeNormal",
  pt: 2,
  pb: 2,
  pl: 2,
  pr: 2
};

export default NavBar;
