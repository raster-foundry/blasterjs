import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { borders, borderColor, borderRadius, themeGet } from "styled-system";
import Text from "../text";

const StyledInput = styled(Text)`
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

const Input = ({isInvalid, ...props}) => {
  return <StyledInput aria-invalid={isInvalid} {...props} />;
};

Input.propTypes = {
    ...Text.propTypes
}

Input.defaultProps = {
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
    pl: 2,
    pl: 2,
    bg: "white",
    borderRadius: "base",
    color: "textBase",
    border: "1px solid",
    borderColor: "textBase",
    font: "inherit",
    fontWeight: 600
}

export default Input;
