/* @flow */
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Alignment } from "../../common/alignment";
import { space, color } from "styled-system";

const Header = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: ${props => props.theme.typeSystem.xxxxl};
  ${space};
  ${color};

  ${props =>
    props.alignment &&
    css`
      text-align: ${props.alignment};
    `};
`;

Header.propTypes = {
  ...space.PropTypes,
  ...color.PropTypes,
  alignment: PropTypes.oneOf(Object.values(Alignment))
};

Header.defaultProps = {
  color: "textBase"
};

Header.h1 = styled(Header.withComponent("h1"))`
  font-size: ${props => props.theme.typeSystem.xxxxl};
`;

Header.h2 = styled(Header.withComponent("h2"))`
  font-size: ${props => props.theme.typeSystem.xxxl};
`;

Header.h3 = styled(Header.withComponent("h3"))`
  font-size: ${props => props.theme.typeSystem.xxl};
`;

Header.h4 = styled(Header.withComponent("h4"))`
  font-size: ${props => props.theme.typeSystem.xl};
`;

Header.h5 = styled(Header.withComponent("h5"))`
  font-size: ${props => props.theme.typeSystem.lg};
`;

Header.h6 = styled(Header.withComponent("h6"))`
  font-size: ${props => props.theme.typeSystem.base};
`;

/** @component */
export default Header;
