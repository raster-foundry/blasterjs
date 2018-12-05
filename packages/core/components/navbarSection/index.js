import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import Box from "../box";

const StyledNavbarSection = styled(Box)`
  display: flex;

  > * + * {
      margin-left: ${props => themeGet(`space.${props.gutter}`, props.gutter)};
  }
`;

const NavbarSection = props => <StyledNavbarSection {...props} />;

NavbarSection.propTypes = {
  ...Box.propTypes,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

NavbarSection.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  gutter: 3
};

export default NavbarSection;
