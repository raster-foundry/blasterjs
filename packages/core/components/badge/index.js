import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import {
  COMMON,
  TYPOGRAPHY,
  MISC,
  LAYOUT,
  BORDER,
  BACKGROUND,
  POSITION
} from "../../constants";

const Badge = styled.span`
  padding-top: ${themeGet("badge.space.pTop")};
  padding-bottom: ${themeGet("badge.space.pBottom")};
  padding-left: ${themeGet("badge.space.pLeft")};
  padding-right: ${themeGet("badge.space.pRight")};
  border-radius: ${themeGet("badge.radii.borderRadius")};
  line-height: ${themeGet("badge.lineHeights.lineHeight")};
  background: ${themeGet("badge.colors.background")};
  color: ${themeGet("badge.colors.color")};
  font-size: ${themeGet("badge.fontSizes.fontSize")};
  font-weight: ${themeGet("badge.fontWeights.fontWeight")};
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  ${themeGet("badge.styles")};
  ${COMMON}
  ${BACKGROUND}
  ${BORDER}
  ${MISC}
  ${LAYOUT}
  ${POSITION}
  ${TYPOGRAPHY}
`;

Badge.propTypes = {
  ...COMMON.propsTypes,
  ...BACKGROUND.propsTypes,
  ...BORDER.propsTypes,
  ...MISC.propsTypes,
  ...LAYOUT.propsTypes,
  ...POSITION.propsTypes,
  ...TYPOGRAPHY.propsTypes
};

Badge.defaultProps = {
  as: "span"
};

export default Badge;
