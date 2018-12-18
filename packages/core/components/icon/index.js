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
  ...Text.propTypes,
  ...size.propTypes,
  name: PropTypes.string.isRequired
};

Icon.defaultProps = {
  tag: "svg",
  size: "1em",
  mt: "-2px",
  mb: 0,
  ml: "2px",
  mr: "2px"
};

export default Icon;
