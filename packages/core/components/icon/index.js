import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { css, ThemeContext } from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { compose } from "styled-system";
import {
  COMMON,
  FLEX_ITEM,
  LAYOUT,
  MISC,
  POSITION,
  PROPTYPES
} from "../../constants";

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

  ${tg("icon.overrides")};
  ${compose(
    COMMON,
    FLEX_ITEM,
    LAYOUT,
    MISC,
    POSITION
  )}
`;

const Icon = ({ path, viewBox, ...p }) => {
  const themeContext = useContext(ThemeContext);
  const icon = themeContext.icons[p.name];
  return (
    <StyledIcon
      role="img"
      fill="currentColor"
      viewBox={icon ? icon.viewBox : viewBox ? viewBox : "0 0 24 24"}
      xmlns="http://www.w3.org/2000/svg"
      {...p}
    >
      <path d={icon ? icon.path : path ? path : ""} fill="currentColor" />
    </StyledIcon>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  ...PROPTYPES.COMMON,
  ...PROPTYPES.FLEX_ITEM,
  ...PROPTYPES.LAYOUT,
  ...PROPTYPES.MISC,
  ...PROPTYPES.POSITION
};

Icon.defaultProps = {
  size: "1em"
};

export default Icon;
