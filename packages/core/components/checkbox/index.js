import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import Icon from "../icon";
import { COMMON, FLEX_ITEM, LAYOUT, MISC, POSITION } from "../../constants";

const StyledCheckbox = styled.span`
  position: relative;
  display: inline-block;

  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 3px ${themeGet("checkbox.colors.shadowColorFocus")}4C;
  }

  ${props => props.disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  .toggle {
    display: none;
    pointer-events: none;
    vertical-align: initial;
  }

  .toggle--indeterminate {
    ${props => props.indeterminateColor
      ? css`color: ${themeGet("props.indeterminateColor", props.indeterminateColor)};`
      : css`color: ${themeGet("checkbox.colors.indeterminateColor")};`
    }
  }

  .toggle--checked {
    ${props => props.checkedColor
      ? css`color: ${themeGet("props.checkedColor", props.checkedColor)};`
      : css`color: ${themeGet("checkbox.colors.checkedColor")};`
    }
  }

  .toggle--unchecked {
    ${props => props.uncheckedColor
      ? css`color: ${themeGet("props.uncheckedColor", props.uncheckedColor)};`
      : css`color: ${themeGet("checkbox.colors.uncheckedColor")};`
    }
  }

  ${themeGet("checkbox.styles")}
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

  ${props => props.indeterminate && css`
    &:checked ~ .toggle--indeterminate {
      display: inline-block;
    }
  `}

  ${props => !props.indeterminate && css`
    &:checked ~ .toggle--checked {
      display: inline-block;
    }
  `}

  &:not(:checked) ~ .toggle--unchecked {
    display: inline-block;
  }
`;

const Checkbox = ({
  id,
  name,
  size,
  value,
  onChange,
  disabled,
  required,
  defaultChecked,
  checked,
  indeterminate,
  invalid,
  checkedIcon,
  uncheckedIcon,
  indeterminateIcon,
  checkedColor,
  uncheckedColor,
  indeterminateColor,
  ...props
}) => {
  return (
    <StyledCheckbox
      disabled={disabled}
      width={size}
      height={size}
      {...props}
    >
      <Input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={e => onChange(e, e.target.value)}
        disabled={disabled}
        defaultChecked={defaultChecked}
        checked={indeterminate || checked}
        indeterminate={indeterminate}
        required={required}
        aria-invalid={invalid}
      />
      <Icon
        className="toggle toggle--checked"
        name={checkedIcon}
        color={checkedColor}
        size={size}
        aria-hidden="true"
      />
      <Icon
        className="toggle toggle--unchecked"
        name={uncheckedIcon}
        color={uncheckedColor}
        size={size}
        aria-hidden="true"
      />
      <Icon
        className="toggle toggle--indeterminate"
        name={indeterminateIcon}
        color={indeterminateColor}
        size={size}
        aria-hidden="true"
      />
    </StyledCheckbox>
  );
};

Checkbox.propTypes = {
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
  indeterminate: PropTypes.bool,
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  checkedIcon: PropTypes.string,
  uncheckedIcon: PropTypes.string,
  indeterminateIcon: PropTypes.string,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
  indeterminateColor: PropTypes.string
};

Checkbox.defaultProps = {
  id: undefined,
  name: undefined,
  size: "2.4rem",
  value: undefined,
  onChange: () => {},
  disabled: false,
  defaultChecked: undefined,
  checked: undefined,
  indeterminate: false,
  required: false,
  invalid: false,
  checkedIcon: "checkboxChecked",
  uncheckedIcon: "checkboxUnchecked",
  indeterminateIcon: "checkboxIndeterminate"
};

export default Checkbox;
