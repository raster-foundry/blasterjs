import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { borders, borderColor, borderRadius, themeGet } from "styled-system";
import Text from "../text";

const StyledTextInput = styled(Text)`
    ${borders}
    ${borderColor}
    ${borderRadius}
    transition: .2s ease-in-out box-shadow;

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

const TextInput = ({isInvalid, type, ...props}) => {
  return <StyledTextInput aria-invalid={isInvalid} type={type || undefined} {...props} />;
};

TextInput.propTypes = {
    ...Text.propTypes
}

TextInput.defaultProps = {
    tag: "input",
    type: "text",
    required: false,
    disabled: false,
    isInvalid: false,
    spellCheck: false,
    width: "100%",
    height: "4rem",
    pt: 1,
    pb: 1,
    pl: 1,
    pr: 1,
    bg: "white",
    borderRadius: "base",
    color: "textBase",
    border: "1px solid",
    borderColor: "textBase",
    font: "inherit"
}

export default TextInput;
