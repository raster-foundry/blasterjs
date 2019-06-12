import React from "react";
import PropTypes from "prop-types";
import {
  getContrast,
  tint,
  shade,
  mix,
  getLuminance,
  setLightness,
  parseToHsl,
  darken
} from "polished";
import styled, { css } from "styled-components";
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
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-transform: ${props => (!props.textTransform ? "uppercase" : "")};
  font-family: ${props =>
    !props.fontFamily ? themeGet("badge.base.fonts.font", "fonts.body") : ""};
  
  ${props => badgeAppearance(props)}
  ${props => badgeScaling(props)}

  ${themeGet("badge.styles")};
  ${COMMON}
  ${BACKGROUND}
  ${BORDER}
  ${MISC}
  ${LAYOUT}
  ${POSITION}
  ${TYPOGRAPHY}
`;

function badgeScaling(props) {
  return css`
    padding-top: ${themeGet(
      `badge.scale.${props.scale}.space.pt`,
      `badge.base.space.pt`
    )};
    padding-bottom: ${themeGet(
      `badge.scale.${props.scale}.space.pb`,
      `badge.base.space.pb`
    )};
    padding-left: ${themeGet(
      `badge.scale.${props.scale}.space.pl`,
      `badge.base.space.pl`
    )};
    padding-right: ${themeGet(
      `badge.scale.${props.scale}.space.pr`,
      `badge.base.space.pr`
    )};
    border-radius: ${themeGet(
      `badge.scale.${props.scale}.radii.radius`,
      `badge.base.radii.radius`
    )};
    font-size: ${themeGet(
      `badge.scale.${props.scale}.fontSizes.fontSize`,
      `badge.base.fontSizes.fontSize`
    )};
    font-weight: ${themeGet(
      `badge.scale.${props.scale}.fontWeights.fontWeight`,
      `badge.base.fontWeights.fontWeight`
    )};
    line-height: ${themeGet(
      `badge.scale.${props.scale}.lineHeights.lineHeight`,
      `badge.base.lineHeights.lineHeight`
    )};
    min-height: ${themeGet(
      `badge.scale.${props.scale}.fontSizes.fontSize`,
      `badge.base.fontSizes.fontSize`
    )};
    min-width: ${themeGet(
      `badge.scale.${props.scale}.fontSizes.fontSize`,
      `badge.base.fontSizes.fontSize`
    )};
  `;
}

function badgeAppearance(props) {
  const { intent, appearance } = props;

  let color, fg, bg, contrast, darkenBy;
  color = themeGet(
    `badge.intents.colors.${props.intent}`,
    `badge.intents.colors.default`
  )(props);

  switch (appearance) {
    case "prominent":
      bg = color;
      fg =
        getContrast(color, "#fff") <= "4.5"
          ? mix(0.7, "#000", color)
          : themeGet(`badge.base.colors.lightText`)(props);
      break;
    case "default":
    default:
      bg = tint(0.9, color);
      contrast = getContrast(color, bg);
      darkenBy = (4.6 - contrast) / (4.6 + contrast);
      fg =
        getContrast(color, bg) <= "4.5" ? mix(darkenBy, "#000", color) : color;
      break;
  }

  return css`
    background-color: ${bg};
    color: ${fg};
  `;
}

Badge.propTypes = {
  ...COMMON.propsTypes,
  ...BACKGROUND.propsTypes,
  ...BORDER.propsTypes,
  ...MISC.propsTypes,
  ...LAYOUT.propsTypes,
  ...POSITION.propsTypes,
  ...TYPOGRAPHY.propsTypes,
  appearance: PropTypes.oneOf(["default", "prominent"]),
  intent: PropTypes.string,
  scale: PropTypes.string
};

Badge.defaultProps = {
  as: "span",
  intent: "default",
  appearance: "default"
};

export default Badge;
