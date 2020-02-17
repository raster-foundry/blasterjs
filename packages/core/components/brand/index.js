import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { system, compose } from "styled-system";
import Image from "../image";
import { extractComponentFromChildren } from "../../utils";
import {
  COMMON,
  LAYOUT,
  TYPOGRAPHY,
  FLEX_ITEM,
  POSITION
} from "../../constants";

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

const StyledBrand = styled.a`
  display: inline-block;
  text-decoration: none;
  vertical-align: middle;

  color: ${tg("brand.colors.color")};
  font-family: ${tg("brand.fonts.font")};
  font-size: ${tg("brand.fontSizes.fontSize")};
  font-weight: ${tg("brand.fontWeights.fontWeight")};

  &:focus-visible {
    ${colorFocus}
    color: ${props => (!props.colorFocus ? tg("brand.colors.colorFocus") : "")};
  }
  .js-focus-visible &.focus-visible {
    ${colorFocus}
    color: ${props => (!props.colorFocus ? tg("brand.colors.colorFocus") : "")};
  }

  &:hover {
    ${colorHover}
    color: ${props => (!props.colorHover ? tg("brand.colors.colorHover") : "")};
  }

  &:active {
    ${colorActive}
    color: ${props =>
      !props.colorActive ? tg("brand.colors.colorActive") : ""};
  }

  ${tg("brand.overrides")}
  ${compose(
    COMMON,
    LAYOUT,
    POSITION,
    TYPOGRAPHY,
    FLEX_ITEM
  )}
`;

const Brand = ({
  href,
  title,
  imagesrc,
  width,
  height,
  children: _children,
  ...props
}) => {
  const [children, tooltip] = extractComponentFromChildren(
    _children,
    "Tooltip"
  );

  return (
    <StyledBrand href={href} width={width} height={height} {...props}>
      {imagesrc ? (
        <Image src={imagesrc} alt={title} width={width} height={height} />
      ) : (
        title
      )}
      {tooltip}
    </StyledBrand>
  );
};

Brand.propTypes = {
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...POSITION.propTypes,
  ...FLEX_ITEM.propTypes,
  imagesrc: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colorFocus: PropTypes.string,
  colorHover: PropTypes.string,
  colorActive: PropTypes.string
};

export default Brand;
