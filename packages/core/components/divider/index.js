import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { compose } from "styled-system";
import { COMMON, LAYOUT, FLEX_ITEM } from "../../constants";

const HDivider = styled.hr`
  border: 0;

  background-color: ${tg("divider.colors.horizontal")};
  width: ${tg("divider.sizes.horizontal.width")};
  height: ${tg("divider.sizes.horizontal.height")};

  ${tg("divider.overrides.horizontal")};
  ${compose(
    COMMON,
    LAYOUT,
    FLEX_ITEM
  )}
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

  background-color: ${tg("divider.colors.vertical")};
  width: ${tg("divider.sizes.vertical.width")};
  height: ${tg("divider.sizes.vertical.height")};

  ${tg("divider.overrides.vertical")};
  ${compose(
    COMMON,
    LAYOUT,
    FLEX_ITEM
  )}
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
