/* @flow */

import styled, { css } from "styled-components";

const Link = styled.a`
  border: 1px solid #ddd;
  border-color: ${props => props.theme.colors.warning};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.typeSystem.base};
  font-weight: ;
  text-decoration: underline;

  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
      color: #fff;
    `};
`;

/** @component */
export default Link;
