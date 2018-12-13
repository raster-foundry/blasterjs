import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { space, color, lineHeight, textAlign, themeGet } from "styled-system";

const Header = styled.h1`
  ${space}
  ${color}
  ${lineHeight}
  ${textAlign}
  font-weight: 700;

  ${props => {
    const size = {
      h1: 7,
      h2: 6,
      h3: 5,
      h4: 4,
      h5: 3,
      h6: 2
    }[props.as];

    return css`
      font-size: ${props => themeGet(`fontSizes.${size}`)};
    `;
  }}
`;

Header.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...textAlign.propTypes,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

Header.defaultProps = {
  color: "textBase",
  lineHeight: 2,
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0
};

export default Header;
