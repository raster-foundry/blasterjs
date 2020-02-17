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

const StyledTextArea = styled.textarea`
  height: 8em;
  width: 100%;
  transition: 0.2s ease-in-out box-shadow;

  padding: ${tg("textArea.space.p")};
  background: ${tg("textArea.colors.bg")};
  color: ${tg("textArea.color.color")};
  border: ${tg("textArea.borders.border")};
  border-color: ${tg("textArea.colors.borderColor")};
  border-radius: ${tg("textArea.radii.borderRadius")};
  font-family: ${tg("textArea.fonts.fontFamily")};
  font-size: ${tg("textArea.fontSizes.fontSize")};
  line-height: ${tg("textArea.lineHeights.lineHeight")};

  &:focus {
    border-color: ${tg("textArea.colors.borderColorFocus")};
    background-color: ${tg("textArea.colors.bgFocus")};
    outline: 0;
    box-shadow: 0 0 0 3px ${tg("textArea.colors.shadowColorFocus")}4C;
  }

  &[disabled] {
    cursor: not-allowed;
    border-color: ${tg("textArea.colors.borderColorDisabled")};
    background-color: ${tg("textArea.colors.bgDisabled")};
  }

  &[aria-invalid="true"],
  &:invalid {
    border-color: ${tg("textArea.colors.borderColorInvalid")};
    background-color: ${tg("textArea.colors.bgInvalid")};
  }

  ${tg("textArea.overrides")};
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

const TextArea = ({ invalid, ...props }) => {
  return <StyledTextArea aria-invalid={invalid} {...props} />;
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
