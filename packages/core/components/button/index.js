import React from "react";
import PropTypes from "prop-types";
import { darken, rgba } from "polished";
import styled, { css } from "styled-components";
import { borders, borderColor, borderRadius, themeGet } from "styled-system";
import Text from "../text";
import Icon from "../icon";
import { Intent } from "../../common/intent";
import { Appearance } from "../../common/appearance";

const ButtonIcon = styled(Icon)`
  flex: none;
`;

const ButtonChildren = styled.span`
  ${props =>
    props.isLoading &&
    css`
      opacity: 0;
      pointer-events: none;
      user-select: none;
    `};

  ${props =>
    !props.iconBefore &&
    css`
      margin-left: ${themeGet("space.1", "0.8rem")};
    `};

  ${props =>
    !props.iconAfter &&
    css`
      margin-right: ${themeGet("space.1", "0.8rem")};
    `};
`;

const ButtonLoading = styled.span`
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  color: currentColor;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${themeGet("fontSizes.1", "inherit")};
`;

const StyledButton = styled(Text)`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  outline: 0;
  line-height: 1.1;
  text-align: center;
  text-decoration: none;
  user-select: none;
  will-change: box-shadow, background-color;
  transition: 0.1s ease-in-out box-shadow, 0.1s ease-in-out background-color;
  ${borders}
  ${borderColor}
  ${borderRadius}

  ${props => buttonStates(props)}
`;

function buttonStates(props) {
  const { intent, appearance } = props;

  let color;
  switch (intent) {
    case Intent.DANGER:
      color = "red";
      break;
    case Intent.WARNING:
      color = "yellow";
      break;
    case Intent.SUCCESS:
      color = "green";
      break;
    case Intent.NONE:
    default:
      color = "primary";
      break;
  }

  let fg, bg, bgHover, fgDisabled, bgDisabled;

  switch (appearance) {
    case Appearance.PROMINENT:
      fg = themeGet("colors.white", "#fff")(props);
      bg = themeGet(`colors.${color}`)(props);
      bgHover = darken(0.1, bg);
      fgDisabled = rgba(fg, 0.6);
      bgDisabled = rgba(bg, 0.5);
      break;
    case Appearance.MINIMAL:
      fg = themeGet(`colors.${color}`)(props);
      bg = "transparent";
      bgHover = themeGet("colors.gray100", "#e0e5f5")(props);
      fgDisabled = rgba(fg, 0.6);
      bgDisabled = "transparent";
      break;
    case Appearance.DEFAULT:
    default:
      fg = themeGet(`colors.${color}`)(props);
      bg = themeGet("colors.gray100", "#e0e5f5")(props);
      bgHover = darken(0.05, bg);
      fgDisabled = rgba(fg, 0.6);
      bgDisabled = rgba(bg, 0.5);
      break;
  }

  return css`
    background-color: ${bg};
    color: ${fg};

    ${props =>
      !props.disabled &&
      css`
        &:hover,
        &:active {
          background-color: ${bgHover};
        }

        &:active {
          box-shadow: inset 0 5px 2px 0px ${rgba(0, 0, 0, 0.2)};
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 4px ${rgba(themeGet("colors.primary")(props), 0.3)};
        }

        &:focus:active {
          box-shadow: inset 0 2px 2px 0px ${rgba(0, 0, 0, 0.2)};
        }
      `}

    ${props =>
      props.disabled &&
      css`
        cursor: not-allowed;
        background-color: ${bgDisabled};
        color: ${fgDisabled};
      `}

    ${props =>
      props.block &&
      css`
        display: block;
        width: 100%;
      `}
  `;
}

const Button = ({ iconBefore, iconAfter, isLoading, children, ...props }) => {
  return (
    <StyledButton {...props}>
      <ButtonChildren
        iconBefore={iconBefore}
        iconAfter={iconAfter}
        isLoading={isLoading}
      >
        {iconBefore && <ButtonIcon name={iconBefore} mr={1} />}
        {children}
        {iconAfter && <ButtonIcon name={iconAfter} ml={1} />}
      </ButtonChildren>
      {isLoading && <ButtonLoading>Loading…</ButtonLoading>}
    </StyledButton>
  );
};

Button.propTypes = {
  ...Text.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  intent: PropTypes.oneOf(Object.values(Intent)),
  appearance: PropTypes.oneOf(Object.values(Appearance)),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  iconBefore: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconAfter: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isLoading: PropTypes.bool
};

Button.defaultProps = {
  tag: "button",
  pt: "button.p",
  pb: "button.p",
  pl: "button.p",
  pr: "button.p",
  border: 0,
  borderRadius: "button.borderRadius",
  intent: Intent.NONE,
  appearance: Appearance.DEFAULT,
  block: false,
  disabled: false,
  iconBefore: undefined,
  iconAfter: undefined,
  isLoading: false
};

export default Button;
