import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { borders, borderColor, borderRadius, themeGet } from "styled-system";
import Text from "../text";
import { Size } from "../../common/size";

const StyledTextInput = styled(Text)`
  ${borders}
  ${borderColor}
  transition: .2s ease-in-out box-shadow;

  ${props => {
    if (props.height) return;

    const size = {
      [Size.TINY]: 4,
      [Size.SMALL]: 4,
      [Size.MEDIUM]: 5,
      [Size.LARGE]: 6
    }[props.size || Size.MEDIUM];

    return css`height: ${themeGet(`space.${size}`)}`;
  }}

  ${props => {
    const size = {
      [Size.TINY]: 1,
      [Size.SMALL]: 1,
      [Size.MEDIUM]: 2,
      [Size.LARGE]: 3
    }[props.size || Size.MEDIUM];

    return css`font-size: ${themeGet(`fontSizes.${size}`)}`;
  }}

  ${props => {
    const size = {
      [Size.TINY]: "base",
      [Size.SMALL]: "base",
      [Size.MEDIUM]: "base",
      [Size.LARGE]: "large"
    }[props.size || Size.MEDIUM];

    return css`border-radius: ${themeGet(`radii.${size}`)}`;
  }}
  ${borderRadius}

  &:focus {
    border-color: ${themeGet('colors.primary')};
    outline: 0;
    box-shadow: 0 0 0 3px ${themeGet('colors.primary')}4C;
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: ${themeGet('colors.grayLight3')};
  }

  &[aria-invalid="true"],
  &:invalid {
    border-color: ${themeGet('colors.red')};
  }
`;

const TextInput = ({invalid, type, ...props}) => {
  return <StyledTextInput aria-invalid={invalid} type={type || undefined} {...props} />;
};

TextInput.propTypes = {
  ...Text.propTypes,
  ...borders.propTypes,
  ...borderRadius.propTypes,
  ...borderColor.propTypes,
  type: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  spellCheck: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bg: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Size))
};

TextInput.defaultProps = {
  tag: "input",
  type: "text",
  required: false,
  disabled: false,
  invalid: false,
  spellCheck: false,
  width: "100%",
  pt: "textInput.p",
  pb: "textInput.p",
  pl: "textInput.p",
  pr: "textInput.p",
  bg: "textInput.bg",
  borderRadius: undefined,
  color: "textInput.color",
  border: "1px solid",
  borderColor: "textInput.borderColor",
  fontFamily: "textInput.fontFamily",
  size: Size.MEDIUM
};

export default TextInput;
