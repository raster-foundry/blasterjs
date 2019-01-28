import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { size } from "styled-system";
import Badge from "../badge";
import { Shape } from "../../common/shape";
import { extractComponentFromChildren } from "../../utils";

const StyledSwatch = styled(Badge)`
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

const Swatch = ({borderRadius, shape, color, children: _children, ...props}) => {
  const radius = getBorderRadius(borderRadius, shape);
  const [children, tooltip] = extractComponentFromChildren(_children, 'Tooltip');

  return (
    <StyledSwatch
      {...props}
      bg={color}
      borderRadius={radius}
    >
      {tooltip}
    </StyledSwatch>
  );
};

Swatch.propTypes = {
  ...Badge.propTypes,
  ...size.propTypes,
  color: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(Object.values(Shape))
};

Swatch.defaultProps = {
  ...Badge.defaultProps,
  ...size.defaultProps,
  shape: Shape.ROUNDED,
  borderRadius: undefined,
  pt: "swatch.p",
  pb: "swatch.p",
  pl: "swatch.p",
  pr: "swatch.p",
  width: "1em",
  height: "1em"
};

export default Swatch;
