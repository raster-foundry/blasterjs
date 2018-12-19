import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { width, height, borderRadius } from "styled-system";
import { Shape } from "../../common/shape";
import Box from "../box";

const StyledImage = styled(Box)`
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
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
  ...Box.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...borderRadius.propTypes,
  shape: PropTypes.oneOf(Object.values(Shape)),
  src: PropTypes.string.isRequired
};

Image.defaultProps = {
  tag: "img",
  width: "auto",
  height: "auto",
  shape: Shape.SQUARE,
  borderRadius: undefined
};

export default Image;
