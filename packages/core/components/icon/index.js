import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext } from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, FLEX_ITEM, LAYOUT, MISC, POSITION } from "../../constants";

const StyledIcon = styled.svg`
  vertical-align: middle;
  font-size: inherit;
  line-height: inherit;

  ${p =>
    !p.size &&
    css`
      width: 1em;
      height: 1em;
    `}

  ${themeGet("icon.styles")};
  ${COMMON}
  ${FLEX_ITEM}
  ${LAYOUT}
  ${MISC}
  ${POSITION}
`;

const Icon = ({ path, ...p }) => {
  const themeContext = useContext(ThemeContext);
  const icon = themeContext.icons[p.name];
  return (
    <StyledIcon
      role="img"
      fill="currentColor"
      viewBox={icon ? icon.viewBox : p.viewBox ? p.viewBox : "0 0 24 24"}
      xmlns="http://www.w3.org/2000/svg"
      {...p}
    >
      <path d={icon ? icon.path : path ? path : ""} fill="currentColor" />
    </StyledIcon>
  );
};

Icon.propTypes = {
  ...COMMON.propTypes,
  ...FLEX_ITEM.propTypes,
  ...LAYOUT.propTypes,
  ...MISC.propTypes,
  ...POSITION.propTypes,
  name: PropTypes.string,
  path: PropTypes.string
};

Icon.defaultProps = {
  size: "1em"
};

export default Icon;
