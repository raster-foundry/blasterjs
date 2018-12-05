import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import Box from "../box";

const StyledNavBarSection = styled(Box)`
  display: flex;

  > * + * {
      margin-left: ${props => themeGet(`space.${props.gutter}`, props.gutter)};
  }
`;

const NavBarSection = props => <StyledNavBarSection {...props} />;

NavBarSection.propTypes = {
  ...Box.propTypes,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

NavBarSection.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  gutter: 3
};

export default NavBarSection;
