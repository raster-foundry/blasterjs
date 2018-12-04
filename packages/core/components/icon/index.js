import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { color, size, space } from "styled-system";

/* helpful links
  SVG optimization
  - https://github.com/svg/svgo
  SVG Transformation or inspection
  - https://github.com/elrumordelaluz/svgson-next
  - https://github.com/Angelmmiguel/svgi
*/
const StyledIcon = styled.svg`
  ${color}
  ${size}
  ${space}
  vertical-align: middle;
`;

const Icon = withTheme(props => {
  const icon = props.theme.icons[props.name];

  return (
    <StyledIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox={icon.viewBox}
      {...props}
    >
      <title>{icon.title}</title>
      <path d={icon.path} fill="currentColor" />
    </StyledIcon>
  );
});

Icon.propTypes = {
  ...space.proptTypes,
  ...color.propTypes,
  ...size.propTypes,
  name: PropTypes.string.isRequired
};

Icon.defaultProps = {
  size: "1em",
  mt: "-2px",
  mb: 0,
  ml: "2px",
  mr: "2px"
};

export default Icon;
