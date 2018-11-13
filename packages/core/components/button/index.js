/* @flow */
import React from "react";
import PropTypes from "prop-types";
import { darken, rgba } from "polished";
import styled, { css, withTheme } from "styled-components";

const baseStyles = css`
  position: relative;
  cursor: pointer;
  display: inline-block;
  outline: 0;
  border: 1px solid;
  padding: 1rem 2rem;
  border-radius: ${props => props.theme.radii.base};
  font-weight: 600;
  line-height: 1.1;
  text-align: center;
  text-decoration: none;
  user-select: none;
  will-change: box-shadow, background-color, color, border-color;
  transition: 0.1s ease-in-out box-shadow, 0.1s ease-in-out background,
    0.1s ease-in-out color, 0.1s ease-in-out border-color;

  ${props =>
    props.isLoading &&
    css`
      .loader {
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
      }

      .button-child {
        opacity: 0;
      }
    `};
`;

function buttonStates(bgColor, textColor, ghostTextColor) {
  return css`
  background: ${bgColor};
  color: ${textColor};
  border-color: ${darken(0.1, bgColor)};

  ${props =>
    !props.disabled &&
    css`
      &:hover,
      &:active {
        background-color: ${darken(0.05, bgColor)};
        border-color: ${darken(0.1, bgColor)};
        color: ${textColor};
      }

      &:active {
        box-shadow: inset 0 5px 2px 0px ${rgba(0, 0, 0, 0.2)};
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 4px ${rgba(props.theme.colors.primary, 0.2)};
      }

      &:focus:active {
        box-shadow: inset 0 2px 2px 0px ${rgba(0, 0, 0, 0.2)};
      }
    `}

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: ${rgba(bgColor, 0.7)};
      border: 1px solid ${rgba(bgColor, 0.7)};
      color: ${rgba(textColor, 0.8)};
    `}

  ${props =>
    props.ghost &&
    css`
      background-color: transparent;
      border: 1px solid ${darken(0.15, bgColor)};
      color: ${ghostTextColor};
    `}

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;
}

/*
 * Component: <Button>
 */
const StyledButton = styled.button`
  ${baseStyles};

  /*
   * Default button styling. Does not require use of appearance propType
   * propType: appearance="default"
   */
  ${props =>
    !props.appearance &&
    css`
      ${props =>
        buttonStates(
          props.theme.colors.grayLightest,
          props.theme.colors.shadeNormal,
          props.theme.colors.grayLight
        )};
    `}

  ${props =>
    props.appearance === props.theme.buttonsStyles.DEFAULT &&
    css`
      ${buttonStates(
        props.theme.colors.grayLightest,
        props.theme.colors.shadeNormal
      )};
    `}

  /*
   * propType: appearance="primary"
   */
  ${props =>
    props.appearance === props.theme.buttonsStyles.PRIMARY &&
    css`
      ${buttonStates(props.theme.colors.primary, "#fff")};
    `}

  /*
   * propType: appearance="secondary"
   */
  ${props =>
    props.appearance === props.theme.buttonsStyles.SECONDARY &&
    css`
      ${buttonStates(props.theme.colors.secondary, "#fff")};
    `}
`;

const Button = props => {
  return (
    <StyledButton {...props}>
      <>
        {props.iconBefore ? props.iconBefore : null}
        {props.children ? (
          <span className="button-child">{props.children}</span>
        ) : null}
        {props.iconAfter ? props.iconBefore : null}
        {props.isLoading ? <span className="loader">Loading...</span> : null}
      </>
    </StyledButton>
  );
};

Button.propTypes = {
  appearance: PropTypes.oneOf(["default", "primary", "secondary"]),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  isLoading: PropTypes.bool
};

export default withTheme(Button);
