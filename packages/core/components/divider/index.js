import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { Direction } from "../../common/direction";
import Box from "../box";

const HDivider = styled(Box).attrs({
  tag: "hr"
})`
  border: 0;

  background-color: ${props =>
    props.color
      ? themeGet(`colors.${props.color}`, props.color)
      : themeGet("colors.divider.horizontal")};

  width: ${props =>
    props.width
      ? themeGet(`widths.${props.color}`, props.width)
      : themeGet("widths.divider.horizontal")};

  height: ${props =>
    props.height
      ? themeGet(`heights.${props.color}`, props.height)
      : themeGet("heights.divider.horizontal")};

  ${themeGet("styles.divider.horizontal")};
`;

const VDivider = styled(Box).attrs({
  tag: "span"
})`
  display: inline-block;
  vertical-align: middle;
  background-color: ${props =>
    props.color
      ? themeGet(`colors.${props.color}`, props.color)
      : themeGet("colors.divider.vertical")};

  width: ${props =>
    props.width
      ? themeGet(`widths.${props.color}`, props.width)
      : themeGet("widths.divider.vertical")};

  height: ${props =>
    props.height
      ? themeGet(`heights.${props.color}`, props.height)
      : themeGet("heights.divider.vertical")};

  ${themeGet("styles.divider.horizontal")};

  &:after {
    content: "\00a0";
    visibility: hidden;
    pointer-events: none;
    user-select: none;
  }
`;

const Divider = ({ children, ...props }) => {
  return (
    <>
      {props.direction === Direction.HORIZONTAL && <HDivider {...props} />}
      {props.direction === Direction.VERTICAL && <VDivider {...props} />}
    </>
  );
};

Divider.propTypes = {
  ...Box.propTypes,
  direction: PropTypes.oneOf(Object.values(Direction)).isRequired,
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Divider.defaultProps = {
  direction: "horizontal"
};

export default Divider;
