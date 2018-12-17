import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { display, space, color, fontSize, themeGet } from "styled-system";

const StyledA = styled.a`
  ${display}
  ${space}
  ${color}
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    color: ${props => themeGet(`colors.${props.colorHover}`)};
  }
`;

const A = props => <StyledA {...props} />;

A.propTypes = {
  ...display.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  colorHover: PropTypes.string
};

A.defaultProps = {
  href: "#",
  color: "link",
  colorHover: "linkHover"
};

export default A;
