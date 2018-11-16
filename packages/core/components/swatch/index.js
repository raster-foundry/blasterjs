import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Badge from "../badge";
import { Shape } from "../../common/shape";

const StyledSwatch = styled(Badge)`
  width: 1em;
  height: 1em;
  padding: 0;
`;

const getBorderRadius = shape => {
  switch (shape) {
    case Shape.CIRCLE:
      return 999;
    case Shape.SQUARE:
      return 0;
    case Shape.ROUNDED:
    default:
      return "small";
  }
};

const Swatch = ({color, shape, children, ...otherProps}) => {
  const radius = getBorderRadius(shape);

  return (
    <StyledSwatch
      {...otherProps}
      bg={color}
      title={color}
      borderRadius={radius}
    />
  );
};

Swatch.propTypes = {
  ...Badge.propTypes,
  color: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(Object.values(Shape))
};

Swatch.defaultProps = {
  ...Badge.defaultProps,
  shape: Shape.ROUNDED
};

export default Swatch;
