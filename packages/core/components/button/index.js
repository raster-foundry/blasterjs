import React from "react";
import PropTypes from "prop-types";
import { darken, rgba, getLuminance, shade } from "polished";
import styled, { css, keyframes } from "styled-components";
import { themeGet } from "styled-system";
import {
  COMMON,
  BACKGROUND,
  BORDER,
  TYPOGRAPHY,
  MISC,
  LAYOUT,
  POSITION,
  FLEX_ITEM
} from "../../constants";
import Icon from "../icon";

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

const StyledButton = styled.button`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  outline: 0;
  text-align: center;
  user-select: none;
  will-change: box-shadow, background-color;
  transition: 0.1s ease-in-out, box-shadow, 0.1s ease-in-out background-color;
  text-decoration: ${props => (!props.textDecoration ? "none" : "")};
  font-family: ${props =>
    !props.fontFamily ? themeGet("button.base.fonts.font", "fonts.body") : ""};
  
  ${props => buttonStates(props)}
  ${props => buttonScaling(props)}

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  ${themeGet("button.styles")};
  ${COMMON}
  ${BACKGROUND}
  ${BORDER}
  ${TYPOGRAPHY}
  ${MISC}
  ${LAYOUT}
  ${POSITION}
  ${FLEX_ITEM}
`;

function buttonScaling(props) {
  return css`
    padding-top: ${themeGet(
      `button.scale.${props.scale}.space.pt`,
      `button.base.space.pt`
    )};
    padding-bottom: ${themeGet(
      `button.scale.${props.scale}.space.pb`,
      `button.base.space.pb`
    )};
    padding-left: ${themeGet(
      `button.scale.${props.scale}.space.pl`,
      `button.base.space.pl`
    )};
    padding-right: ${themeGet(
      `button.scale.${props.scale}.space.pr`,
      `button.base.space.pr`
    )};
    border-radius: ${themeGet(
      `button.scale.${props.scale}.radii.radius`,
      `button.base.radii.radius`
    )};
    font-size: ${themeGet(
      `button.scale.${props.scale}.fontSizes.fontSize`,
      `button.base.fontSizes.fontSize`
    )};
    font-weight: ${themeGet(
      `button.scale.${props.scale}.fontWeights.fontWeight`,
      `button.base.fontWeights.fontWeight`
    )};
    line-height: ${themeGet(
      `button.scale.${props.scale}.lineHeights.lineHeight`,
      `button.base.lineHeights.lineHeight`
    )};
  `;
}

function buttonStates(props) {
  const { intent, appearance } = props;

  let fg, bg, border, bgHover, fgDisabled, bgDisabled;

  switch (appearance) {
    case "prominent":
      bg = themeGet(
        `button.intents.colors.${props.intent}`,
        `button.intents.colors.default`
      )(props);
      fg =
        getLuminance(bg) >= "0.5"
          ? themeGet(`button.base.colors.darkText`)(props)
          : themeGet(`button.base.colors.lightText`)(props);
      border = `1px solid ${bg}`;
      bgHover = shade(0.1, bg);
      fgDisabled = rgba(fg, 0.6);
      bgDisabled = rgba(bg, 0.5);
      break;
    case "minimal":
      fg = themeGet(
        `button.intents.colors.${props.intent}`,
        `button.intents.colors.default`
      )(props);
      bg = "transparent";
      border = "1px solid transparent";
      bgHover = themeGet(`colors.gray100`)(props);
      fgDisabled = rgba(fg, 0.6);
      bgDisabled = "transparent";
      break;
    case "default":
    default:
      bg = themeGet(`button.base.colors.defaultBg`)(props);
      fg = themeGet(
        `button.intents.colors.${props.intent}`,
        `button.intents.colors.default`
      )(props);
      border = `1px solid ${themeGet(`button.base.colors.defaultBorder`)(
        props
      )}`;
      bgHover = themeGet(`button.base.hover.colors.defaultBg`)(props);
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
        user-select: none;
        background-color: ${bgDisabled};
        color: ${fgDisabled};
      `}
      
    ${props =>
      props.disabled &&
      props.appearance === "prominent" &&
      css`
        border-color: transparent;
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
  ...COMMON.propTypes,
  ...BACKGROUND.propTypes,
  ...BORDER.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...MISC.propTypes,
  ...LAYOUT.propTypes,
  ...POSITION.propTypes,
  ...FLEX_ITEM.propTypes,
  appearance: PropTypes.oneOf(["default", "prominent", "minimal"]),
  intent: PropTypes.string,
  scale: PropTypes.string,
  iconBefore: PropTypes.string,
  iconAfter: PropTypes.string,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool
};

Button.defaultProps = {
  as: "button",
  intent: "default",
  appearance: "default",
  block: false,
  disabled: false,
  iconBefore: undefined,
  iconAfter: undefined,
  isLoading: false
};

export default Button;
