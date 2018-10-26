import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { space, flex } from "styled-system";
import { Alignment } from "../../common/alignment";

const StyledNavbarSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 1rem;
  padding-right: 1rem;

  ${props =>
    props.alignment === Alignment.LEFT &&
    css`
      justify-content: flex-start;
    `};
  ${props =>
    props.alignment === Alignment.RIGHT &&
    css`
      justify-content: flex-end;
    `};
  ${props =>
    props.alignment === Alignment.CENTER &&
    css`
      justify-content: center;
    `};
  ${space};
  ${flex};
`;

const NavbarSection = props => {
  return (
    <StyledNavbarSection {...props}>
      <>{props.children}</>
    </StyledNavbarSection>
  );
};

/** @component */
export default NavbarSection;
