import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import { Text } from "@blasterjs/core";
import Wrapper from "./Wrapper";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);

storiesOf('Text', module)
  .add('with text', () => (
    <Wrapper>
      <Text tag="h1" color="primary">Hello Button</Text>
    </Wrapper>
  ))
  .add('with emoji', () => (
    <Text><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Text>
  ));
