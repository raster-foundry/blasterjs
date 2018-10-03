/* @flow */

import React from "react";
import PropTypes from "prop-types";
import { Density } from "../../index.common";
import styled, { css } from "styled-components";

const CardWrapper = styled.div`
  position: relative;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 5px 10px -4px rgba(67, 83, 153, 0.2);
  border: 2px solid ${props => props.theme.colors.grayLight3};
  border-radius: ${props => props.theme.radius.large};
`;

const CardHeader = styled.div`
  padding: 1rem;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardFooter = styled.div`
  font-weight: 900;
  padding: 1rem;
`;

type CardProps = {
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node
};

const Card = (props: CardProps) => {
  return (
    <CardWrapper>
      <CardHeader>{props.header}</CardHeader>
      <CardBody>{props.body}</CardBody>
      <CardFooter>{props.footer}</CardFooter>
    </CardWrapper>
  );
};

Card.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node
};

/** @component  */
export default Card;
