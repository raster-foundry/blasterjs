import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import Image from "../image";
import { extractComponentFromChildren } from "../../utils";
import { COMMON, LAYOUT, TYPOGRAPHY, FLEX_ITEM } from "../../constants";

const StyledBrand = styled.a`
  display: inline-block;
  text-decoration: none;
  vertical-align: middle;

  color: ${themeGet("brand.colors.color")};
  font-family: ${themeGet("brand.fonts.font")};
  font-size: ${themeGet("brand.fontSizes.fontSize")};
  font-weight: ${themeGet("brand.fontWeights.fontWeight")};

  &:focus {
    color: ${props =>
      themeGet(`colors.${props.colorFocus}`, "brand.colors.colorFocus")};
  }

  &:hover {
    color: ${props =>
      themeGet(`colors.${props.colorHover}`, "brand.colors.colorHover")};
  }

  &:active {
    color: ${props =>
      themeGet(`colors.${props.colorActive}`, "brand.colors.colorActive")};
  }

  ${themeGet("brand.styles")}
  ${COMMON}
  ${LAYOUT}
  ${TYPOGRAPHY}
  ${FLEX_ITEM}
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

  const [children, tooltip] = extractComponentFromChildren(_children, "Tooltip");

  return (
    <StyledBrand href={href} width={width} height={height} {...props}>
      {imagesrc
        ? <Image src={imagesrc} alt={title} width={width} height={height} />
        : title
      }
      {tooltip}
    </StyledBrand>
  );
};

Brand.propTypes = {
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...FLEX_ITEM.propTypes,
  imagesrc: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colorFocus: PropTypes.string,
  colorHover: PropTypes.string,
  colorActive: PropTypes.string
};

export default Brand;
