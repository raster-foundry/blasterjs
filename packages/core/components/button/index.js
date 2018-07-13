/* @flow */

import styled, { css } from 'styled-components';
import { lighten, darken, rgba } from 'polished';
import { Colors, Intent } from '../../defaultTheme';

/** @component */
export default styled.button`
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  outline: 0;
  border: none;
  padding: .8rem 2rem;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  border-radius: ${Colors.borderRadiusBase};
  user-select: none;
  background: #fff;
  border: 1px solid ${Colors.shadeLight};
  color: ${Colors.shadeLight};
  will-change: opacity, border;

  background: ${Colors.shadeNormal};
  border-color: ${darken(0.05, Colors.shadeNormal)};
  color: #fff;

  &:hover, &.hover,
  &:active, &.active {
    color: #fff;
    background-color: ${rgba('black', 0.1)};
    z-index: 1;
  }

  &:active, &.active {
    box-shadow: inset 0 2px 2px 0px rgba(black, .2);
  }

  &:focus, &.focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba($brand-primary, .3);
    z-index: 1;
  }

  &:focus:active {
    box-shadow: inset 0 2px 2px 0px rgba(black, .2);
  }

  &:disabled, &.disabled, &[disabled] {
    opacity: .5;
    cursor: not-allowed;
  }

  ${props => props.intent === Intent.PRIMARY && css`
    background: ${Colors.brandPrimary};
    border-color: ${darken(0.1, Colors.brandPrimary)};
    color: #fff;
    ${props.ghost && css`
      background-color: transparent;
      color: ${Colors.brandPrimary};
    `}
  `}

  ${props => props.intent === Intent.SECONDARY && css`
    background: ${Colors.brandSecondary};
    border-color: ${darken(0.1, Colors.brandSecondary)};
    color: #fff;
    ${props.ghost && css`
      background-color: transparent;
      color: ${Colors.brandPrimary};
    `}
  `}
`;
