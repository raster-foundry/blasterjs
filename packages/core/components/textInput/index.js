import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { compose } from "styled-system";
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
  transition: 0.2s ease-in-out box-shadow;

  padding: ${tg("textInput.space.p")};
  background: ${tg("textInput.colors.bg")};
  color: ${tg("textInput.color.color")};
  border: ${tg("textInput.borders.border")};
  border-color: ${tg("textInput.colors.borderColor")};
  border-radius: ${tg("textInput.radii.borderRadius")};
  font-family: ${tg("textInput.fonts.fontFamily")};
  font-size: ${tg("textInput.fontSizes.fontSize")};

  &:focus {
    border-color: ${tg("textInput.colors.borderColorFocus")};
    background-color: ${tg("textInput.colors.bgFocus")};
    outline: 0;
    box-shadow: 0 0 0 3px ${tg("textInput.colors.shadowColorFocus")}4C;
  }

  &[disabled] {
    cursor: not-allowed;
    border-color: ${tg("textInput.colors.borderColorDisabled")};
    background-color: ${tg("textInput.colors.bgDisabled")};
  }

  &[aria-invalid="true"],
  &:invalid {
    border-color: ${tg("textInput.colors.borderColorInvalid")};
    background-color: ${tg("textInput.colors.bgInvalid")};
  }

  ${tg("textInput.overrides")};
  ${compose(
    COMMON,
    BACKGROUND,
    BORDER,
    TYPOGRAPHY,
    MISC,
    LAYOUT,
    POSITION,
    FLEX_ITEM
  )}
`;

const TextInput = ({ invalid, ...props }) => {
  return <StyledTextInput aria-invalid={invalid} {...props} />;
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
