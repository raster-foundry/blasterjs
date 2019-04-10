import React from "react";
import PropTypes from "prop-types";
import { darken, rgba } from "polished";
import styled, { css, keyframes } from "styled-components";
import { borders, borderColor, borderRadius, themeGet } from "styled-system";
import Text from "../text";
import Icon from "../icon";
import { Appearance, Intent } from "../../index.common";

const ButtonIcon = styled(Icon)`
  flex: none;
`;

const ButtonChildren = styled.span`
  display: inline-flex;
  align-items: center;
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

const animateLoading = keyframes`
  to {
    transform: rotate(360deg);
  }
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

  > ${ButtonIcon} {
    animation: 2s ${animateLoading} linear infinite;
  }
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
  transition: 0.1s ease-in-out, box-shadow, 0.1s ease-in-out background-color;
  font-weight: 600;
  min-height: 36px;
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
      color = "danger";
      break;
    case Intent.WARNING:
      color = "warning";
      break;
    case Intent.SUCCESS:
      color = "success";
      break;
    case Intent.NONE:
    default:
      color = "primary";
      break;
  }

  let fg, bg, border, bgHover, fgDisabled, bgDisabled;

  switch (appearance) {
    case Appearance.PROMINENT:
      fg = themeGet("colors.white", "#000")(props);
      bg = themeGet(`colors.${color}`)(props);
      border = `none`;
      bgHover = themeGet(`colors.${color}Shade`)(props);
      fgDisabled = rgba(fg, 0.6);
      bgDisabled = rgba(bg, 0.5);
      break;
    case Appearance.MINIMAL:
      fg = themeGet(`colors.${color}`)(props);
      bg = "transparent";
      border = "none";
      bgHover = themeGet("colors.gray100", "#e0e5f5")(props);
      fgDisabled = rgba(fg, 0.6);
      bgDisabled = "transparent";
      break;
    case Appearance.DEFAULT:
    default:
      fg = themeGet(`colors.${color}`)(props);
      bg = themeGet("colors.gray100", "#e0e5f5")(props);
      border = `1px solid ${darken(0.03, bg)}`;
      bgHover = darken(0.02, bg);
      fgDisabled = rgba(fg, 0.6);
      bgDisabled = rgba(bg, 0.5);
      break;
  }

  return css`
    background-color: ${bg};
    color: ${fg};
    border: ${border};

    ${props =>
      !props.disabled &&
      css`
        &:hover,
        &:active {
          background-color: ${bgHover};
        }

        &:active {
          background-color: ${darken(0.02, bgHover)};
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 4px ${rgba(themeGet("colors.primary")(props), 0.3)};
        }

        &:focus:active {
          background-color: ${darken(0.02, bgHover)};
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
      {isLoading && (
        <ButtonLoading>
          <ButtonIcon name="load" />
        </ButtonLoading>
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  ...Text.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  color: PropTypes.string,
  intent: PropTypes.oneOf(Object.values(Intent)),
  appearance: PropTypes.oneOf(Object.values(Appearance)),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  iconBefore: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconAfter: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isLoading: PropTypes.bool,
  isActive: PropTypes.bool
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
