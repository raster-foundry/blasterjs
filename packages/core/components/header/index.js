import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import Text from "../text";

const Header = styled(Text)`
  font-weight: 700;

  ${props => {
    const size = {
      h1: 7,
      h2: 6,
      h3: 5,
      h4: 4,
      h5: 3,
      h6: 2
    }[props.tag];

    return css`
      font-size: ${props => themeGet(`fontSizes.${size}`)};
    `;
  }}
`;

Header.propTypes = {
  ...Text.propTypes,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

Header.defaultProps = {
  tag: "h1",
  color: "textBase",
  fontFamily: "display",
  lineHeight: 2,
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0
};

export default Header;
