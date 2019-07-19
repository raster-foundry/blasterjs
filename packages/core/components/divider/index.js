import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, LAYOUT, FLEX_ITEM } from "../../constants";

const HDivider = styled.hr`
  border: 0;

  background-color: ${themeGet("divider.colors.horizontal")};
  width: ${themeGet("divider.widths.horizontal")};
  height: ${themeGet("divider.heights.horizontal")};

  ${themeGet("divider.styles.horizontal")};

  ${COMMON}
  ${LAYOUT}
  ${FLEX_ITEM}
`;

const VDivider = styled.span`
  display: inline-block;
  vertical-align: middle;

  &:after {
    content: "\00a0";
    visibility: hidden;
    pointer-events: none;
    user-select: none;
  }

  background-color: ${themeGet("divider.colors.vertical")};
  width: ${themeGet("divider.widths.vertical")};
  height: ${themeGet("divider.heights.vertical")};

  ${themeGet("divider.styles.vertical")};

  ${COMMON}
  ${LAYOUT}
  ${FLEX_ITEM}
`;

const Divider = ({
  children,
  color,
  bg, // ignored
  ...props
}) => {
  const Component = props.vertical ? VDivider : HDivider;
  return <Component bg={color} {...props} />;
};

Divider.propTypes = {
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  ...FLEX_ITEM.propTypes,
  vertical: PropTypes.bool
};

export default Divider;
