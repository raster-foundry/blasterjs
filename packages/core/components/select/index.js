import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import Box from "../box";
import TextInput from "../textInput";
import Icon from "../icon";

const StyledSelect = styled(Box)`
  position: relative;

  ${props => props.multiple && css`
    min-height: 5em;
  `}
`;

const SelectSelect = styled(TextInput).attrs({
  tag: 'select',
  type: ''
})`
  appearance: none;
  flex: auto;
  padding-right: ${themeGet('space.6', '4.8rem')};

  option {
    color: ${themeGet('colors.black', '#000')};
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  margin: 0 ${themeGet('space.1', '0.8rem')};
  pointer-events: none;
  vertical-align: middle;
`;

const Select = ({
  multiple,
  required,
  disabled,
  invalid,
  spellCheck,
  height,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  bg,
  borderRadius,
  color,
  border,
  borderColor,
  font,
  icon,
  children,
  ...props
}) => {
  return (
    <StyledSelect multiple={multiple} height={height} {...props}>
      <SelectSelect
        multiple={multiple}
        required={required}
        disabled={disabled}
        invalid={invalid}
        spellCheck={spellCheck}
        height="100%"
        p={p}
        px={px}
        py={py}
        pt={pt}
        pb={pb}
        pl={pl}
        pr={pr}
        bg={bg}
        borderRadius={borderRadius}
        color={color}
        border={border}
        borderColor={borderColor}
        font={font}
        {...props}
      >
        {children}
      </SelectSelect>
      {!multiple && <SelectIcon name={icon} color={color} />}
    </StyledSelect>
  );
};

Select.propTypes = {
  ...Box.propTypes,
  ...TextInput.propTypes
};

Select.defaultProps = {
  display: "inline-block",
  multiple: undefined,
  required: false,
  disabled: false,
  invalid: false,
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
  font: "inherit",
  icon: "caretDown"
};

export default Select;
