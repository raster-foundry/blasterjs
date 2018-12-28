import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Text from "../text";
import Icon from "../icon";

const StyledCheckbox = styled(Text)`
  position: relative;
  display: inline-block;
  width: 2.4rem;
  height: 2.4rem;

  ${props => props.disabled && css`
    opacity: .5;
    cursor: not-allowed;
  `}
`;

const StyledIcon = styled(Icon)`
  display: none;
  pointer-events: none;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  value,
  onChange,
  disabled,
  required,
  checked,
  indeterminate,
  invalid,
  checkedIcon,
  uncheckedIcon,
  indeterminateIcon,
  checkedColor,
  uncheckedColor,
  indeterminateColor,
  size,
  ...props
}) => {

  return (
    <StyledCheckbox
      disabled={disabled}
      {...props}
    >
      <Input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e, e.target.value)}
        disabled={disabled}
        checked={indeterminate || checked}
        indeterminate={indeterminate}
        required={required}
        aria-invalid={invalid}
      />
      <StyledIcon
        className="toggle--checked"
        name={checkedIcon}
        color={checkedColor}
        size={size}
      />
      <StyledIcon
        className="toggle--unchecked"
        name={uncheckedIcon}
        color={uncheckedColor}
        size={size}
      />
      <StyledIcon
        className="toggle--indeterminate"
        name={indeterminateIcon}
        color={indeterminateColor}
        size={size}
      />
    </StyledCheckbox>
  );
};

Checkbox.propTypes = {
  ...Text.propTypes,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  checkedIcon: PropTypes.string,
  uncheckedIcon: PropTypes.string,
  indeterminateIcon: PropTypes.string,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
  indeterminateColor: PropTypes.string,
  size: PropTypes.string
};

Checkbox.defaultProps = {
  tag: 'div',
  id: undefined,
  name: undefined,
  value: undefined,
  onChange: () => {},
  disabled: false,
  checked: undefined,
  indeterminate: false,
  required: false,
  invalid: false,
  checkedIcon: 'check',
  uncheckedIcon: 'cancel',
  indeterminateIcon: 'minus',
  checkedColor: 'primary',
  uncheckedColor: 'grayLight1',
  indeterminateColor: 'primary',
  size: '2rem'
};

export default Checkbox;
