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
  bg: "shadeNormal",
  pt: 1,
  pb: 1,
  pl: 1,
  pr: 1
};

export default NavBar;
