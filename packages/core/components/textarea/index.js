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

const StyledTextarea = styled.textarea`
  height: 8em;
  width: 100%;
  transition: .2s ease-in-out box-shadow;

  padding: ${themeGet("textarea.space.p")};
  background: ${themeGet("textarea.colors.bg")};
  color: ${themeGet("textarea.color.color")};
  border: ${themeGet("textarea.borders.border")};
  border-color: ${themeGet("textarea.colors.borderColor")};
  border-radius: ${themeGet("textarea.radii.borderRadius")};
  font-family: ${themeGet("textarea.fonts.fontFamily")};
  font-size: ${themeGet("textarea.fontSizes.fontSize")};
  line-height: ${themeGet("textarea.lineHeights.lineHeight")};

  &:focus {
    border-color: ${themeGet("textarea.colors.borderColorFocus")};
    background-color: ${themeGet("textarea.colors.bgFocus")};
    outline: 0;
    box-shadow: 0 0 0 3px ${themeGet("textarea.colors.shadowColorFocus")}4C;
  }

  &[disabled] {
    cursor: not-allowed;
    border-color: ${themeGet("textarea.colors.borderColorDisabled")};
    background-color: ${themeGet("textarea.colors.bgDisabled")};
  }

  &[aria-invalid="true"],
  &:invalid {
    border-color: ${themeGet("textarea.colors.borderColorInvalid")};
    background-color: ${themeGet("textarea.colors.bgInvalid")};
  }

  ${themeGet("textarea.styles")};
  ${COMMON}
  ${BACKGROUND}
  ${BORDER}
  ${TYPOGRAPHY}
  ${MISC}
  ${LAYOUT}
  ${POSITION}
  ${FLEX_ITEM}
`;

const Textarea = ({ invalid, ...props }) => {
  return (
    <StyledTextarea aria-invalid={invalid} {...props} />
  );
};

Textarea.propTypes = {
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

Textarea.defaultProps = {
  invalid: false
};

export default Textarea;
