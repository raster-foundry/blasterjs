/* @flow */

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Heading = styled.h1`
  color: black;

  ${({ blue }) => blue && css`
    background: blue;
  `}

  ${props => props.green && css`
    background: green;
  `}
`

Heading.propTypes = {
  blue: PropTypes.bool,
  green: PropTypes.bool
}

Heading.h1 = Heading.withComponent('h1').extend`
  font-size: ;
  line-height: ;
`;

Heading.h2 = Heading.withComponent('h2').extend`
  font-size: ;
  line-height: ;
`;

Heading.h3 = Heading.withComponent('h3').extend`
  font-size: ;
  line-height: ;
`;

Heading.h4 = Heading.withComponent('h4').extend`
  font-size: ;
  line-height: ;
`;

Heading.h5 = Heading.withComponent('h5').extend`
  font-size: ;
  line-height: ;
`;

Heading.h6 = Heading.withComponent('h6').extend`
  font-size: ;
  line-height: ;
`;

/** @component */
export default Heading;