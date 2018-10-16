import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, width, space } from "styled-system";
import Image from "../image";
import Link from "../link";

const BrandWrapper = styled.a`
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  padding: 1.5rem;
  vertical-align: middle;
  ${color};
  ${space};
`;

const BrandImage = styled.img`
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  ${width};
`;

const BrandTitle = styled.span`
  color: inherit;
`;

const Brand = props => {
  return (
    <BrandWrapper {...props} href={props.href}>
      {props.imagesrc ? (
        <BrandImage {...props} src={props.imagesrc} alt={props.title} />
      ) : (
        <BrandTitle children={props.title} />
      )}
    </BrandWrapper>
  );
};

Brand.propTypes = {
  ...color.PropTypes,
  ...width.PropTypes,
  ...space.PropTypes,
  imagesrc: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Brand.defaultProps = {
  color: "textBase"
};

export default Brand;
