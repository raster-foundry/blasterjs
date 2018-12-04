import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { width } from "styled-system";
import Image from "../image";
import Link from "../link";

const StyledBrand = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  vertical-align: middle;
`;

const Brand = ({href, title, imagesrc, width, children, ...props}) => {
  return (
    <StyledBrand href={href} title={title} {...props}>
      {imagesrc ? (
        <Image src={imagesrc} alt={title} width={width} />
      ) : (
        <span>{title}</span>
      )}
    </StyledBrand>
  );
};

Brand.propTypes = {
  ...Link.propTypes,
  ...width.propTypes,
  imagesrc: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Brand.defaultProps = {
  color: "textBase",
  pt: 2,
  pb: 2,
  pl: 2,
  pr: 2
};

export default Brand;
