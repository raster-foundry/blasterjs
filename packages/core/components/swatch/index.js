import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, size, themeGet } from "styled-system";
import Badge from "../badge";
import { Shape } from "../../common/shape";

const StyledSwatch = styled(Badge)`
  width: 1em;
  height: 1em;
  padding: ${themeGet('space.0', 0)};
  ${space}
  ${size}
`;

const getBorderRadius = (borderRadius, shape) => {
  if (borderRadius) {
    return borderRadius;
  }

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

const Swatch = ({borderRadius, shape, color, children, ...otherProps}) => {
  const radius = getBorderRadius(borderRadius, shape);

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
  ...size.propTypes,
  color: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(Object.values(Shape)),
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Swatch.defaultProps = {
  ...Badge.defaultProps,
  ...size.defaultProps,
  shape: Shape.ROUNDED,
  borderRadius: undefined
};

export default Swatch;
