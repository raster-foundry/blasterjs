import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, width, height, borderRadius } from "styled-system";
import { Shape } from "../../common/shape";

const StyledImage = styled.img`
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  ${space}
  ${width}
  ${height}
  ${borderRadius}
`;

const getBorderRadius = (borderRadius, shape) => {
  if (borderRadius) {
    return borderRadius;
  }

  switch (shape) {
    case Shape.CIRCLE:
      return 999;
    case Shape.ROUNDED:
      return "base";
    case Shape.SQUARE:
    default:
      return 0;
  }
};

const Image = ({borderRadius, shape, ...props}) => {
  const radius = getBorderRadius(borderRadius, shape);
  return <StyledImage borderRadius={radius} {...props} />;
};

Image.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...borderRadius.propTypes,
  shape: PropTypes.oneOf(Object.values(Shape)),
  src: PropTypes.string.isRequired
};

Image.defaultProps = {
  width: "auto",
  height: "auto",
  shape: Shape.SQUARE,
  borderRadius: undefined
};

export default Image;
