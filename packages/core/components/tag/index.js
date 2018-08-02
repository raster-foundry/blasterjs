import styled, { css } from 'styled-components';
import { consolidateStreamedStyles } from 'styled-components';

const Tag = styled.span`
    background: gray;
    border-radius: 4px;
    padding: 2px 10px;
    display: inline-block;
    color: ${props => props.theme.colors.white};
`

/** @component */
export default Tag;
