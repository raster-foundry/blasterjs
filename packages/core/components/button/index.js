import React from "react";
import PropTypes from "prop-types";
import propTypes from "@styled-system/prop-types";
import { darken, rgba, getLuminance, shade } from "polished";
import styled, { css, keyframes } from "styled-components";
import { compose } from "styled-system";
import { themeGet as tg } from "@styled-system/theme-get";
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

const ButtonChildren = styled.span`
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

  > .icon {
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
    !props.fontFamily ? tg(`button.base.fonts.font`, tg(`fonts.body`)) : ""};

  ${props => buttonStates(props)}
  ${props => buttonScaling(props)}

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  ${tg("button.overrides")};
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

function buttonScaling(props) {
  return css`
    padding-top: ${tg(
      `button.scale.${props.scale}.space.pt`,
      tg(`button.base.space.pt`)
    )};
    padding-bottom: ${tg(
      `button.scale.${props.scale}.space.pb`,
      tg(`button.base.space.pb`)
    )};
    padding-left: ${tg(
      `button.scale.${props.scale}.space.pl`,
      tg(`button.base.space.pl`)
    )};
    padding-right: ${tg(
      `button.scale.${props.scale}.space.pr`,
      tg(`button.base.space.pr`)
    )};
    border-radius: ${tg(
      `button.scale.${props.scale}.radii.radius`,
      tg(`button.base.radii.radius`)
    )};
    font-size: ${tg(
      `button.scale.${props.scale}.fontSizes.fontSize`,
      tg(`button.base.fontSizes.fontSize`)
    )};
    font-weight: ${tg(
      `button.scale.${props.scale}.fontWeights.fontWeight`,
      tg(`button.base.fontWeights.fontWeight`)
    )};
    line-height: ${tg(
      `button.scale.${props.scale}.lineHeights.lineHeight`,
      tg(`button.base.lineHeights.lineHeight`)
    )};
  `;
}

function buttonStates(props) {
  const { intent, appearance } = props;

  let INTENT_COLOR = tg(
    `button.intents.colors.${props.intent}`,
    tg(`button.base.colors.color`)(props)
  )(props);

  let fg, bg, border, bgHover, fgDisabled, bgDisabled;

  switch (appearance) {
    case "prominent":
      bg = INTENT_COLOR;
      fg =
        getLuminance(bg) >= "0.5"
          ? tg(`button.base.colors.colorDark`)(props)
          : tg(`button.base.colors.colorLight`)(props);
      border = `1px solid ${bg}`;
      bgHover = shade(0.1, bg);
      fgDisabled = rgba(fg, 0.6);
      bgDisabled = rgba(bg, 0.5);
      break;
    case "minimal":
      fg = INTENT_COLOR;
      bg = "transparent";
      border = "1px solid transparent";
      bgHover = tg(`button.base.colors.bgHover`)(props);
      fgDisabled = rgba(fg, 0.6);
      bgDisabled = "transparent";
      break;
    case "default":
    default:
      bg = tg(`button.base.colors.bg`)(props);
      fg = INTENT_COLOR;
      border = `1px solid ${tg(`button.base.colors.border`)(props)}`;
      bgHover = tg(`button.base.colors.bgHover`)(props);
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

        &:focus-visible {
          outline: none;
          box-shadow: 0 0 0 4px ${rgba(tg("colors.primary")(props), 0.3)};
        }
        .js-focus-visible &.focus-visible {
          outline: none;
          box-shadow: 0 0 0 4px ${rgba(tg("colors.primary")(props), 0.3)};
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
      <ButtonChildren isLoading={isLoading}>
        {iconBefore && <Icon name={iconBefore} mr={1} aria-hidden="true" />}
        {children}
        {iconAfter && <Icon name={iconAfter} ml={1} aria-hidden="true" />}
      </ButtonChildren>
      {isLoading && (
        <ButtonLoading>
          <Icon name="load" flex="none" className="icon" aria-label="Loading" />
        </ButtonLoading>
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  ...propTypes.COMMON,
  ...propTypes.BACKGROUND,
  ...propTypes.BORDER,
  ...propTypes.TYPOGRAPHY,
  ...propTypes.MISC,
  ...propTypes.LAYOUT,
  ...propTypes.POSITION,
  ...propTypes.FLEX_ITEM,
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
  intent: null,
  appearance: "default",
  block: false,
  disabled: false,
  iconBefore: undefined,
  iconAfter: undefined,
  isLoading: false
};

export default Button;
