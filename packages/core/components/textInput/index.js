import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import {
  COMMON,
  BACKGROUND,
  BORDER,
  TYPOGRAPHY,
  MISC,
  LAYOUT,
  POSITION,
  FLEX_ITEM
} from "../../constants";

const StyledTextInput = styled.input`
  width: 100%;
  transition: .2s ease-in-out box-shadow;

  padding: ${themeGet("textInput.space.p")};
  background: ${themeGet("textInput.colors.bg")};
  color: ${themeGet("textInput.color.color")};
  border: ${themeGet("textInput.borders.border")};
  border-color: ${themeGet("textInput.colors.borderColor")};
  border-radius: ${themeGet("textInput.radii.borderRadius")};
  font-family: ${themeGet("textInput.fonts.fontFamily")};
  font-size: ${themeGet("textInput.fontSizes.fontSize")};

  &:focus {
    border-color: ${themeGet("textInput.colors.borderColorFocus")};
    background-color: ${themeGet("textInput.colors.bgFocus")};
    outline: 0;
    box-shadow: 0 0 0 3px ${themeGet("textInput.colors.shadowColorFocus")}4C;
  }

  &[disabled] {
    cursor: not-allowed;
    border-color: ${themeGet("textInput.colors.borderColorDisabled")};
    background-color: ${themeGet("textInput.colors.bgDisabled")};
  }

  &[aria-invalid="true"],
  &:invalid {
    border-color: ${themeGet("textInput.colors.borderColorInvalid")};
    background-color: ${themeGet("textInput.colors.bgInvalid")};
  }

  ${themeGet("textInput.overrides")};
  ${COMMON}
  ${BACKGROUND}
  ${BORDER}
  ${TYPOGRAPHY}
  ${MISC}
  ${LAYOUT}
  ${POSITION}
  ${FLEX_ITEM}
`;

const TextInput = ({ invalid, ...props }) => {
  return (
    <StyledTextInput aria-invalid={invalid} {...props} />
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
  ...FLEX_ITEM.propTypes,
  type: PropTypes.string,
  invalid: PropTypes.bool
};

TextInput.defaultProps = {
  type: "text",
  invalid: false
};

export default TextInput;
