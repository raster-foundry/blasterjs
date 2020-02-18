import React from "react";
import PropTypes from "prop-types";
import { propType } from "@styled-system/prop-types";
import styled, { css } from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { system, compose } from "styled-system";
import Icon from "../icon";
import {
  COMMON,
  FLEX_ITEM,
  LAYOUT,
  MISC,
  POSITION,
  PROPTYPES
} from "../../constants";
import { blurUnlessFocusVisible } from "../../utils";

const checkedColor = system({
  checkedColor: {
    property: "color",
    scale: "colors"
  }
});

const uncheckedColor = system({
  uncheckedColor: {
    property: "color",
    scale: "colors"
  }
});

const StyledRadio = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: middle;

  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 3px ${tg("radio.colors.shadowColorFocus")}4C;
  }

  ${props =>
    props.disabled &&
    css`
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
    color: ${props =>
      !props.checkedColor ? tg("radio.colors.checkedColor") : ""};
    ${checkedColor}
  }

  .toggle--unchecked {
    color: ${props =>
      !props.uncheckedColor ? tg("radio.colors.uncheckedColor") : ""};
    ${uncheckedColor}
  }

  ${tg("radio.overrides")}
  ${compose(
    COMMON,
    FLEX_ITEM,
    LAYOUT,
    MISC,
    POSITION
  )}
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
    <StyledRadio disabled={disabled} width={size} height={size} {...props}>
      <Input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={e => onChange(e, e.target.value)}
        onFocus={e => blurUnlessFocusVisible(e.target)}
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
  checkedColor: propType,
  uncheckedColor: propType,
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
  ...PROPTYPES.COMMON,
  ...PROPTYPES.FLEX_ITEM,
  ...PROPTYPES.LAYOUT,
  ...PROPTYPES.POSITION
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
  checkedIcon: "radioChecked",
  uncheckedIcon: "radioUnchecked"
};

export default Radio;
