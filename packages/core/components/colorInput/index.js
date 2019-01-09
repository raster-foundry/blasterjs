import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import TextInput from "../textInput";
import { Size } from "../../common/size";

const ColorInput = styled(TextInput)`
  ${props => {
    const size = {
      [Size.TINY]: 2,
      [Size.SMALL]: 3,
      [Size.MEDIUM]: 5,
      [Size.LARGE]: 6
    }[props.size || Size.MEDIUM];

    return css`
      width: ${themeGet(`space.${size}`)};
      height: ${themeGet(`space.${size}`)};
    `;
  }}
`;

ColorInput.propTypes = {
  ...TextInput.propTypes
};

ColorInput.defaultProps = {
  type: "color",
  border: 0,
  borderRadius: 0,
  pt: 0,
  pb: 0,
  pl: 0,
  pr: 0,
  onChange: () => {}
};

export default ColorInput;
