import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { width } from "styled-system";
import Image from "../image";
import A from "../a";
import { extractComponentFromChildren } from "../../utils";

const StyledBrand = styled(A)`
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  vertical-align: middle;
`;

const Brand = ({href, title, imagesrc, width, children: _children, ...props}) => {
  const [children, tooltip] = extractComponentFromChildren(_children, 'Tooltip');

  return (
    <StyledBrand href={href} {...props}>
      {imagesrc ? (
        <Image src={imagesrc} alt={title} width={width} />
      ) : (
        <span>{title}</span>
      )}
      {tooltip}
    </StyledBrand>
  );
};

Brand.propTypes = {
  ...A.propTypes,
  ...width.propTypes,
  imagesrc: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Brand.defaultProps = {
  color: "brand.color"
};

export default Brand;
