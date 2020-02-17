import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { system, compose } from "styled-system";
import { COMMON, TYPOGRAPHY, FLEX_ITEM } from "../../constants";

const colorHover = system({
  colorHover: {
    property: "color",
    scale: "colors"
  }
});

const colorFocus = system({
  colorFocus: {
    property: "color",
    scale: "colors"
  }
});

const colorActive = system({
  colorActive: {
    property: "color",
    scale: "colors"
  }
});

const A = styled.a`
  color: ${tg("a.colors.color")};
  font-weight: ${tg("a.fontWeights.fontWeight")};

  &:focus-visible {
    ${colorFocus}
    color: ${props => (!props.colorFocus ? tg("a.colors.colorFocus") : "")};
  }
  .js-focus-visible &.focus-visible {
    ${colorFocus}
    color: ${props => (!props.colorFocus ? tg("a.colors.colorFocus") : "")};
  }

  &:hover {
    ${colorHover}
    color: ${props => (!props.colorHover ? tg("a.colors.colorHover") : "")};
  }

  &:active {
    ${colorActive}
    color: ${props => (!props.colorActive ? tg("a.colors.colorActive") : "")};
  }

  ${tg("a.overrides")}
  ${compose(
    COMMON,
    TYPOGRAPHY,
    FLEX_ITEM
  )}
`;

A.propTypes = {
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...FLEX_ITEM.propTypes,
  href: PropTypes.string.isRequired,
  colorFocus: PropTypes.string,
  colorHover: PropTypes.string,
  colorActive: PropTypes.string
};

export default A;
