import React from 'react';
import styled, { css } from 'styled-components';
import { lighten, darken, rgba } from 'polished';

const PlainProgressBar = styled.div.attrs({
    value: props => props.value || 0,
    max: props => props.max || 1
})`
    width: 10em;
    height: 0.5em;
    border-radius: 100px;
    background-color: ${props => props.theme.colors.grayLightest};
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        background: ${props => props.theme.colors.brandPrimary};
        width: ${props => (props.value / props.max) * 100}%;
        border-radius: inherit;
    }
`;

/** @component */
export default PlainProgressBar;
