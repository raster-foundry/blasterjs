import React from "react";
import PropTypes from "prop-types";
import { getContrast, tint, mix } from "polished";
import styled, { css } from "styled-components";
import { compose } from "styled-system";
import { themeGet as tg } from "@styled-system/theme-get";
import {
  COMMON,
  TYPOGRAPHY,
  MISC,
  LAYOUT,
  BORDER,
  BACKGROUND,
  POSITION,
  FLEX_ITEM
} from "../../constants";

const Badge = styled.span`
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-transform: ${props => (!props.textTransform ? "uppercase" : "")};
  font-family: ${props =>
    !props.fontFamily ? tg("badge.base.fonts.font", "fonts.body") : ""};

  ${props => badgeAppearance(props)}
  ${props => badgeScaling(props)}

  ${tg("badge.overrides")};
  ${compose(
    COMMON,
    BACKGROUND,
    BORDER,
    FLEX_ITEM,
    MISC,
    LAYOUT,
    POSITION,
    TYPOGRAPHY
  )}
`;

function badgeScaling(props) {
  return css`
    padding-top: ${tg(
      `badge.scale.${props.scale}.space.pt`,
      tg(`badge.base.space.pt`)
    )};
    padding-bottom: ${tg(
      `badge.scale.${props.scale}.space.pb`,
      tg(`badge.base.space.pb`)
    )};
    padding-left: ${tg(
      `badge.scale.${props.scale}.space.pl`,
      tg(`badge.base.space.pl`)
    )};
    padding-right: ${tg(
      `badge.scale.${props.scale}.space.pr`,
      tg(`badge.base.space.pr`)
    )};
    border-radius: ${tg(
      `badge.scale.${props.scale}.radii.radius`,
      tg(`badge.base.radii.radius`)
    )};
    font-size: ${tg(
      `badge.scale.${props.scale}.fontSizes.fontSize`,
      tg(`badge.base.fontSizes.fontSize`)
    )};
    font-weight: ${tg(
      `badge.scale.${props.scale}.fontWeights.fontWeight`,
      tg(`badge.base.fontWeights.fontWeight`)
    )};
    line-height: ${tg(
      `badge.scale.${props.scale}.lineHeights.lineHeight`,
      tg(`badge.base.lineHeights.lineHeight`)
    )};
    min-height: ${tg(
      `badge.scale.${props.scale}.fontSizes.fontSize`,
      tg(`badge.base.fontSizes.fontSize`)
    )};
    min-width: ${tg(
      `badge.scale.${props.scale}.fontSizes.fontSize`,
      tg(`badge.base.fontSizes.fontSize`)
    )};
  `;
}

function badgeAppearance(props) {
  const { intent, appearance } = props;

  let color, fg, bg, contrast, darkenBy;
  color = tg(
    `badge.intents.colors.${props.intent}`,
    `badge.intents.colors.default`
  )(props);

  switch (appearance) {
    case "prominent":
      bg = color;
      fg =
        getContrast(color, "#fff") <= "4.5"
          ? mix(0.7, "#000", color)
          : tg(`badge.base.colors.lightText`)(props);
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
  ...COMMON.propTypes,
  ...BACKGROUND.propTypes,
  ...BORDER.propTypes,
  ...FLEX_ITEM.propTypes,
  ...MISC.propTypes,
  ...LAYOUT.propTypes,
  ...POSITION.propTypes,
  ...TYPOGRAPHY.propTypes,
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
