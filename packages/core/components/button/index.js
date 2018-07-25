/* @flow */
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { lighten, darken, rgba } from 'polished';

const Button = styled.button`
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
  border-radius: ${props => props.theme.radius.base };
  user-select: none;
  background: #fff;
  border: 1px solid ${props => props.theme.colors.base };
  color: ${props => props.theme.colors.shadeLight };
  will-change: opacity, border;
  background: ${props => props.theme.colors.shadeNormal };
  border-color: ${props => props.theme.colors.shadeNormal && darken(.05, props.theme.colors.shadeNormal)};
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
    box-shadow: 0 0 0 3px rgba(${props => props.theme.colors.brandPrimary }, .3);
    z-index: 1;
  }

  &:focus:active {
    box-shadow: inset 0 2px 2px 0px rgba(black, .2);
  }

  &:disabled, &.disabled, &[disabled] {
    opacity: .5;
    cursor: not-allowed;
  }

  ${props => props.primary && css`
    background: ${props => props.theme.colors.brandPrimary };
    border-color: ${darken(0.1, props.theme.colors.brandPrimary)}
    ;
    color: #fff;
    
    ${props.ghost && css`
      background-color: transparent;
      color: ${props => props.theme.colors.brandPrimary};
    `}
  `}

  ${props => props.secondary && css`
    background: ${props => props.theme.colors.brandSecondary};
    border-color: ${darken(0.1, props.theme.colors.brandSecondary)}
    ;
    color: #fff;
    
    ${props.ghost && css`
      background-color: transparent;
      color: ${props => props.theme.colors.brandSecondary};
    `}
  `}
`;


Button.link = Button.withComponent('a');

/** @component */
export default Button;