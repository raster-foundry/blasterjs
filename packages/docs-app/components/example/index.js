import styled, { css } from 'styled-components';
import { Button } from '@blasterjs/core';
import { consolidateStreamedStyles } from 'styled-components';

const Example = styled.div`
    ${Button} {
        font-size: 24px;
    }
`

/** @component */
export default Example;
