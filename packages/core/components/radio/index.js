import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import Text from "../text";
import Icon from "../icon";
import { Size } from "../../common/size";

const StyledRadio = styled(Text)`
  position: relative;
  display: inline-block;

  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 3px ${themeGet('colors.primary')}4C;
  }

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
  value,
  onChange,
  disabled,
  required,
  defaultChecked,
  checked,
  invalid,
  checkedIcon,
  uncheckedIcon,
  checkedColor,
  uncheckedColor,
  size: _size,
  ...props
}) => {

  const size = {
    [Size.TINY]: '1.2rem',
    [Size.SMALL]: '1.6rem',
    [Size.MEDIUM]: '2.4rem',
    [Size.LARGE]: '3.2rem'
  }[_size || Size.MEDIUM];

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
        onChange={(e) => onChange(e, e.target.value)}
        disabled={disabled}
        defaultChecked={defaultChecked}
        checked={checked}
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
    </StyledRadio>
  );
};

Radio.propTypes = {
  ...Text.propTypes,
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
  uncheckedColor: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Size))
};

Radio.defaultProps = {
  tag: 'div',
  id: undefined,
  name: undefined,
  value: undefined,
  onChange: () => {},
  disabled: false,
  defaultChecked: undefined,
  checked: undefined,
  required: false,
  invalid: false,
  checkedIcon: 'radioChecked',
  uncheckedIcon: 'radioUnchecked',
  checkedColor: 'primary',
  uncheckedColor: 'grayLight1',
  size: Size.MEDIUM
};

export default Radio;
