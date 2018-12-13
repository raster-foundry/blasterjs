import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { display, space, color, fontSize, themeGet } from "styled-system";

const StyledLink = styled.a`
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

const Link = props => <StyledLink {...props} />;

Link.propTypes = {
  ...display.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  colorHover: PropTypes.string
};

Link.defaultProps = {
  href: "#",
  color: "link",
  colorHover: "linkHover"
};

/** @component */
export default Link;
