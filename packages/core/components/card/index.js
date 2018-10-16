/* @flow */

import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Density } from "../../common/density";

const StyledCard = styled.div`
  position: relative;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 5px 10px -4px rgba(67, 83, 153, 0.2);
  border: 2px solid ${props => props.theme.colors.grayLight3};
  border-radius: ${props => props.theme.radius.large};
  padding: 0;

  ${props =>
    props.density === Density.COMFORTABLE &&
    css`
      padding: 2.5rem;
    `};

  ${props =>
    props.density === Density.COMPACT &&
    css`
      padding: 0.5rem;
    `};
`;

StyledCard.propTypes = {
  density: PropTypes.oneOf(Object.values(Density))
};

const Card = props => {
  return (
    <StyledCard density={props.density}>
      <>{props.children}</>
    </StyledCard>
  );
};

/** @component  */
export default Card;
