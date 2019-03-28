import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color, borders, boxShadow, themeGet } from "styled-system";
import { Density } from "../../common/density";
import Box from "../box";

const Card = styled(Box)`
  ${color}
  ${borders}
  ${boxShadow}
  position: relative;

  ${props =>
    props.density === Density.COMFORTABLE &&
    css`
      padding: ${props => themeGet("space.3", "2.4rem")};
    `};

  ${props =>
    props.density === Density.COMPACT &&
    css`
      padding: ${props => themeGet("space.1", "0.8rem")};
    `};
  
    ${themeGet("styles.card")}
`;

Card.propTypes = {
  ...Box.propTypes,
  ...color.propTypes,
  ...borders.propTypes,
  ...boxShadow.propTypes,
  density: PropTypes.oneOf(Object.values(Density))
};

Card.defaultProps = {
  pt: "card.padding",
  pb: "card.padding",
  pl: "card.padding",
  pr: "card.padding",
  bg: "card.background",
  border: "card.border",
  borderColor: "card.borderColor",
  borderRadius: "card.borderRadius",
  boxShadow: "card.boxShadow"
};

export default Card;
