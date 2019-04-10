import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import { Direction } from "../../common/direction";
import { Density } from "../../common/density";
import Box from "../box";

const StyledGrouper = styled(Box).attrs(props => ({
  leadingMargin:
    props.flexDirection === "column" ? "margin-bottom" : "margin-right"
}))`
  display: flex;
  flex-wrap: wrap;

  > *:focus {
    z-index: 1;
  }

  > * {
    ${props => props.leadingMargin}: ${props =>
      themeGet(`space.${props.gutter}`, props.gutter)};
  }
`;

const CompactGrouper = styled(StyledGrouper).attrs(props => ({
  leadingBorder:
    props.flexDirection === "column" ? "border-top" : "border-left",
  firstChildCorner:
    props.flexDirection === "column"
      ? "border-top-right-radius"
      : "border-bottom-left-radius",
  lastChildCorner:
    props.flexDirection === "column"
      ? "border-bottom-left-radius"
      : "border-top-right-radius"
}))`
  > * {
    border-radius: 0 !important;
  }

  ${props =>
    props.gutter === 0 &&
    css`
      > * + * {
        ${props => props.leadingBorder}: 0;
      }
    `}

  > :first-child {
    border-top-left-radius: ${props =>
      themeGet(`radii.${props.borderRadius}`, props.borderRadius)} !important;
    ${props => props.firstChildCorner}: ${props =>
      themeGet(`radii.${props.borderRadius}`, props.borderRadius)} !important;
  }

  > :last-child {
    ${props => props.lastChildCorner}: ${props =>
      themeGet(`radii.${props.borderRadius}`, props.borderRadius)} !important;
    border-bottom-right-radius: ${props =>
      themeGet(`radii.${props.borderRadius}`, props.borderRadius)} !important;
  }
`;

function determineDirection(direction, flexDirection) {
  switch (direction) {
    case Direction.VERTICAL:
      return "column";
    case Direction.HORIZONTAL:
      return "row";
    default:
      return flexDirection;
  }
}

function determineGutter(gutter, density) {
  if (gutter !== undefined) {
    return gutter;
  } else if (density === Density.COMPACT) {
    return "2px";
  } else if (density === Density.COMFORTABLE) {
    return 1;
  } else {
    return 0;
  }
}

const Grouper = ({
  density,
  direction: dir,
  flexDirection,
  gutter: g,
  ...props
}) => {
  const direction = determineDirection(dir, flexDirection);
  const gutter = determineGutter(g, density);
  switch (density) {
    case Density.COMFORTABLE:
      return (
        <StyledGrouper flexDirection={direction} gutter={gutter} {...props} />
      );
    case Density.COMPACT:
    default:
      return (
        <CompactGrouper flexDirection={direction} gutter={gutter} {...props} />
      );
  }
};

Grouper.propTypes = {
  ...Box.PropTypes,
  compact: PropTypes.bool,
  direction: PropTypes.oneOf(Object.values(Direction)),
  density: PropTypes.oneOf(Object.values(Density)),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Grouper.defaultProps = {
  direction: undefined,
  density: Density.COMPACT,
  borderRadius: "grouper.borderRadius",
  gutter: undefined,
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "stretch"
};

export default Grouper;
