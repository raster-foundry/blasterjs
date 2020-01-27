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

const StyledTextArea = styled.textarea`
  height: 8em;
  width: 100%;
  transition: .2s ease-in-out box-shadow;

  padding: ${themeGet("textArea.space.p")};
  background: ${themeGet("textArea.colors.bg")};
  color: ${themeGet("textArea.color.color")};
  border: ${themeGet("textArea.borders.border")};
  border-color: ${themeGet("textArea.colors.borderColor")};
  border-radius: ${themeGet("textArea.radii.borderRadius")};
  font-family: ${themeGet("textArea.fonts.fontFamily")};
  font-size: ${themeGet("textArea.fontSizes.fontSize")};
  line-height: ${themeGet("textArea.lineHeights.lineHeight")};

  &:focus {
    border-color: ${themeGet("textArea.colors.borderColorFocus")};
    background-color: ${themeGet("textArea.colors.bgFocus")};
    outline: 0;
    box-shadow: 0 0 0 3px ${themeGet("textArea.colors.shadowColorFocus")}4C;
  }

  &[disabled] {
    cursor: not-allowed;
    border-color: ${themeGet("textArea.colors.borderColorDisabled")};
    background-color: ${themeGet("textArea.colors.bgDisabled")};
  }

  &[aria-invalid="true"],
  &:invalid {
    border-color: ${themeGet("textArea.colors.borderColorInvalid")};
    background-color: ${themeGet("textArea.colors.bgInvalid")};
  }

  ${themeGet("textArea.overrides")};
  ${COMMON}
  ${BACKGROUND}
  ${BORDER}
  ${TYPOGRAPHY}
  ${MISC}
  ${LAYOUT}
  ${POSITION}
  ${FLEX_ITEM}
`;

const TextArea = ({ invalid, ...props }) => {
  return (
    <StyledTextArea aria-invalid={invalid} {...props} />
  );
};

TextArea.propTypes = {
  ...COMMON.propTypes,
  ...BACKGROUND.propTypes,
  ...BORDER.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...MISC.propTypes,
  ...LAYOUT.propTypes,
  ...POSITION.propTypes,
  ...FLEX_ITEM.propTypes,
  invalid: PropTypes.bool
};

TextArea.defaultProps = {
  invalid: false
};

export default TextArea;
