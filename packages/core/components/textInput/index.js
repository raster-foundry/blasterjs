import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { borders, borderColor, borderRadius, themeGet } from "styled-system";
import Text from "../text";
import { Size } from "../../common/size";
import {
  COMMON,
  BACKGROUND,
  BORDER,
  TYPOGRAPHY,
  MISC,
  LAYOUT,
  POSITION
} from "../../constants";

const StyledTextInput = styled(Text)`
  width: 100%;
  padding: ${themeGet("textInput.p")};
  background: ${themeGet("textInput.bg")};
  color: ${themeGet("textInput.color")};
  border: 1px solid;
  border-color: ${themeGet("textInput.borderColor")};
  fontFamily: ${themeGet("textInput.fontFamily")};
  transition: ${themeGet("textInput.transition", ".2s ease-in-out box-shadow")};

  ${props => {
    if (props.height) return;

    const size = {
      [Size.TINY]: 4,
      [Size.SMALL]: 4,
      [Size.MEDIUM]: 5,
      [Size.LARGE]: 6
    }[props.size || Size.MEDIUM];

    return css`
      height: ${themeGet(`space.${size}`)};
    `;
  }}

  ${props => {
    const size = {
      [Size.TINY]: 1,
      [Size.SMALL]: 1,
      [Size.MEDIUM]: 2,
      [Size.LARGE]: 3
    }[props.size || Size.MEDIUM];

    return css`
      font-size: ${themeGet(`fontSizes.${size}`)};
    `;
  }}

  ${props => {
    const size = {
      [Size.TINY]: "base",
      [Size.SMALL]: "base",
      [Size.MEDIUM]: "base",
      [Size.LARGE]: "large"
    }[props.size || Size.MEDIUM];

    return css`
      border-radius: ${themeGet(`radii.${size}`)};
    `;
  }}

  &:focus {
    border-color: ${themeGet("colors.primary")};
    outline: 0;
    box-shadow: 0 0 0 3px ${themeGet("colors.primary")}4C;
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: ${themeGet("colors.gray300")};
  }

  &[aria-invalid="true"],
  &:invalid {
    border-color: ${themeGet("colors.red")};
  }

  ${themeGet("textInput.styles")};
  ${COMMON}
  ${BACKGROUND}
  ${BORDER}
  ${TYPOGRAPHY}
  ${MISC}
  ${LAYOUT}
  ${POSITION}
`;

const TextInput = ({ invalid, type, ...props }) => {
  return (
    <StyledTextInput
      aria-invalid={invalid}
      type={type || undefined}
      {...props}
    />
  );
};

TextInput.propTypes = {
  ...COMMON.propTypes,
  ...BACKGROUND.propTypes,
  ...BORDER.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...MISC.propTypes,
  ...LAYOUT.propTypes,
  ...POSITION.propTypes,
  type: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  spellCheck: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(Size))
};

TextInput.defaultProps = {
  tag: "input",
  type: "text",
  required: false,
  disabled: false,
  invalid: false,
  spellCheck: false,
  size: Size.MEDIUM
};

export default TextInput;
