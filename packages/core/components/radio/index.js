import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import Icon from "../icon";
import { COMMON, FLEX_ITEM, LAYOUT, MISC, POSITION } from "../../constants";

const StyledRadio = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: middle;

  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 3px ${themeGet('radio.colors.shadowColorFocus')}4C;
  }

  ${props => props.disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  .toggle {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    pointer-events: none;
    vertical-align: initial;
  }

  .toggle--checked {
    ${props => props.checkedColor
      ? css`color: ${themeGet(`colors.${props.checkedColor}`, props.checkedColor)};`
      : css`color: ${themeGet("radio.colors.checkedColor")};`
    }
  }

  .toggle--unchecked {
    ${props => props.uncheckedColor
      ? css`color: ${themeGet(`colors.${props.uncheckedColor}`, props.uncheckedColor)};`
      : css`color: ${themeGet("radio.colors.uncheckedColor")};`
    }
  }

  ${themeGet("radio.styles")}
  ${COMMON}
  ${FLEX_ITEM}
  ${LAYOUT}
  ${MISC}
  ${POSITION}
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;

  &:checked ~ .toggle--checked {
    display: inline-block;
  }

  &:not(:checked) ~ .toggle--unchecked {
    display: inline-block;
  }
`;

const Radio = ({
  id,
  name,
  size,
  value,
  onChange,
  disabled,
  required,
  defaultChecked,
  checked,
  invalid,
  checkedIcon,
  uncheckedIcon,
  ...props
}) => {
  return (
    <StyledRadio
      disabled={disabled}
      width={size}
      height={size}
      {...props}
    >
      <Input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={e => onChange(e, e.target.value)}
        disabled={disabled}
        defaultChecked={defaultChecked}
        checked={checked}
        required={required}
        aria-invalid={invalid}
      />
      <Icon
        className="toggle toggle--checked"
        name={checkedIcon}
        size={size}
        aria-hidden="true"
      />
      <Icon
        className="toggle toggle--unchecked"
        name={uncheckedIcon}
        size={size}
        aria-hidden="true"
      />
    </StyledRadio>
  );
};

Radio.propTypes = {
  ...COMMON.propTypes,
  ...FLEX_ITEM.propTypes,
  ...LAYOUT.propTypes,
  ...MISC.propTypes,
  ...POSITION.propTypes,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  checkedIcon: PropTypes.string,
  uncheckedIcon: PropTypes.string,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string
};

Radio.defaultProps = {
  id: undefined,
  name: undefined,
  size: "2.4rem",
  value: undefined,
  onChange: () => {},
  disabled: false,
  defaultChecked: undefined,
  checked: undefined,
  required: false,
  invalid: false,
  checkedIcon: 'radioChecked',
  uncheckedIcon: 'radioUnchecked'
};

export default Radio;
