import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { size } from "styled-system";
import Text from "../text";

/* helpful links
  SVG optimization
  - https://github.com/svg/svgo
  SVG Transformation or inspection
  - https://github.com/elrumordelaluz/svgson-next
  - https://github.com/Angelmmiguel/svgi
*/
const StyledIcon = styled(Text)`
  ${size}
  vertical-align: middle;
`;

const Icon = ({ children, ...props }) => {
  const icon = props.theme.icons[props.name];
  return (
    <StyledIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox={icon ? icon.viewBox : "0 0 24 24"}
      {...props}
    >
      <path d={icon ? icon.path : ""} fill="currentColor" />
    </StyledIcon>
  );
};

Icon.propTypes = {
  ...Text.propTypes,
  ...size.propTypes,
  name: PropTypes.string.isRequired
};

Icon.defaultProps = {
  tag: "svg",
  fontSize: "inherit",
  lineHeight: "inherit",
  size: "1em",
  mt: "icon.mt",
  mb: "icon.mb",
  ml: "icon.mx",
  mr: "icon.mx"
};

export default withTheme(Icon);
