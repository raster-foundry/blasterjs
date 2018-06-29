import styled, { css } from 'styled-components';
import Button from './../button/styles/defaultButton';
import { consolidateStreamedStyles } from 'styled-components';

const ButtonGroup = styled.div`
    display: flex;
    ${Button} {
        flex: 1;
        margin-right: 1em;
        &:last-of-type {
            margin: 0;
        }
    }
`

/** @component */
export default ButtonGroup;
