import React from 'react';
import styled, { css } from 'styled-components';
import { lighten, darken, rgba } from 'polished';
import { Colors, Intent } from '../../defaultTheme';
import PlainProgressBar from '../plainProgressBar';

const Label = styled.div`
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    margin-bottom: 0.5em;
    font-size: 12px;
    color: ${Colors.grayDark};
`;

const ProgressBar = props => {
    return (
        <div>
            <Label>{props.value}/{props.max}</Label>
            <PlainProgressBar value={props.value} max={props.max}></PlainProgressBar>
        </div>
    );
}

/** @component */
export default ProgressBar;
