/* @flow */

import React from 'react';
import DefaultStyledButton from './styles/defaultButton';
import { Intent } from '@blasterjs/core';

type Props = {
  /** Button label */
  children: string,
  /** onClick handler */
  onClick: () => mixed,
  /** The intent of the button */
  intent: Intent,
  /** Should the button have the ghost style */
  ghost: boolean
}

const Button = (props: Props) => (
  <DefaultStyledButton
    onClick={props.onClick}
    intent={props.intent}
    ghost={props.ghost}
  >
    {props.children}
  </DefaultStyledButton>
);

export default Button;
