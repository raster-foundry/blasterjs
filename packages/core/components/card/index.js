import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color, borders, borderColor, borderRadius, boxShadow, themeGet } from "styled-system";
import { Density } from "../../common/density";
import Box from "../box";

const Card = styled(Box)`
  ${color}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  position: relative;

  ${props =>
    props.density === Density.COMFORTABLE &&
    css`
      padding: ${props => themeGet('space.3', '2.4rem')};;
    `};

  ${props =>
    props.density === Density.COMPACT &&
    css`
      padding:  ${props => themeGet('space.1', '0.8rem')};;
    `};
`;

Card.propTypes = {
  ...Box.propTypes,
  ...color.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  density: PropTypes.oneOf(Object.values(Density))
};

Card.defaultProps = {
  pt: 0,
  pb: 0,
  pl: 0,
  pr: 0,
  bg: "white",
  border: "2px solid",
  borderColor: "grayLight3",
  borderRadius: "large",
  boxShadow: "0 5px 10px -4px rgba(67, 83, 153, 0.2)"
};

export default Card;
