import React from 'react';
import styled, {css} from 'styled-components';
import {consolidateStreamedStyles} from 'styled-components';

import Button from '../button';

const ButtonGroup = styled.div`
    display: flex;
    ${Button} {
        flex: 1;
        margin-right: 2em;
        &:last-of-type {
            margin: 0;
        }
    }
`

/** @component */
export default ButtonGroup;
