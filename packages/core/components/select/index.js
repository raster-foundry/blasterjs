import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { compose } from "styled-system";
import Icon from "../icon";
import {
  COMMON,
  BACKGROUND,
  BORDER,
  TYPOGRAPHY,
  MISC,
  LAYOUT,
  POSITION,
  FLEX_ITEM,
  PROPTYPES
} from "../../constants";

const StyledSelect = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  min-height: 1.5em;
  transition: 0.2s ease-in-out box-shadow;

  background: ${tg("select.colors.bg")};
  border: ${tg("select.borders.border")};
  border-color: ${tg("select.colors.borderColor")};
  border-radius: ${tg("select.radii.borderRadius")};
  color: ${tg("select.colors.color")};
  font-family: ${tg("select.fonts.fontFamily")};
  font-size: ${tg("select.fontSizes.fontSize")};

  &:focus-within {
    border-color: ${tg("select.colors.borderColorFocus")};
    background-color: ${tg("select.colors.bgFocus")};
    outline: 0;
    box-shadow: 0 0 0 3px ${tg("select.colors.shadowColorFocus")}4C;
  }

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      border-color: ${tg("select.colors.borderColorDisabled")};
      background-color: ${tg("select.colors.bgDisabled")};
    `}

  ${props =>
    props.invalid &&
    css`
      border-color: ${tg("select.colors.borderColorInvalid")};
      background-color: ${tg("select.colors.bgInvalid")};
    `}

  .menu-icon {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    margin: 0 ${tg("space.1", "0.8rem")};
    pointer-events: none;
    vertical-align: middle;
  }

  ${tg("select.overrides")};
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

const SelectSelect = styled.select`
  display: block;
  width: 100%;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  appearance: none;

  padding: ${tg("select.space.p")};
  padding-right: ${tg("space.6", "4.8rem")};

  option {
    color: inherit;
  }

  ${COMMON}
`;

const Select = ({
  id,
  value,
  defaultValue,
  onChange,
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
  pr,
  pb,
  pl,
  icon,
  iconColor,
  children,
  ...props
}) => {
  return (
    <StyledSelect disabled={disabled} invalid={invalid} {...props}>
      <SelectSelect
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={e => onChange(e, e.target.value)}
        multiple={multiple}
        required={required}
        disabled={disabled}
        aria-invalid={invalid}
        spellCheck={spellCheck}
        minHeight={multiple ? "5em" : undefined}
        p={p}
        px={px}
        py={py}
        pt={pt}
        pr={pr}
        pb={pb}
        pl={pl}
      >
        {children}
      </SelectSelect>
      {!multiple && (
        <Icon
          name={icon}
          color={iconColor}
          className="menu-icon"
          aria-hidden="true"
        />
      )}
    </StyledSelect>
  );
};

Select.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  ...PROPTYPES.COMMON,
  ...PROPTYPES.BACKGROUND,
  ...PROPTYPES.BORDER,
  ...PROPTYPES.TYPOGRAPHY,
  ...PROPTYPES.MISC,
  ...PROPTYPES.LAYOUT,
  ...PROPTYPES.POSITION,
  ...PROPTYPES.FLEX_ITEM
};

Select.defaultProps = {
  icon: "caretDown",
  value: undefined,
  defaultValue: undefined,
  onChange: () => {}
};

export default Select;
