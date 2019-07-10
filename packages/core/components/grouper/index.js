import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, LAYOUT } from "../../constants";

const OuterGrouper = styled.div`
  ${themeGet("grouper.styles")}
  ${COMMON}
  ${LAYOUT}
`;

const InnerGrouper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.vertical ? "column" : "row"};
  align-items: ${props => props.stretch ? "stretch" : "center"};
  width: 100%;
  height: 100%;

  ${props => {
    return props.gutter !== undefined
      ? css`margin: calc(-0.5 * ${themeGet(`space.${props.gutter}`, props.gutter)});`
      : css`margin: calc(-0.5 * ${themeGet("grouper.space.gutter")});`
  }}

  > * {
    ${props => {
      return props.gutter !== undefined
        ? css`margin: calc(0.5 * ${themeGet(`space.${props.gutter}`, props.gutter)});`
        : css`margin: calc(0.5 * ${themeGet("grouper.space.gutter")});`
    }}
  }

  > *:focus {
    z-index: 1;
  }
`;

const Grouper = ({vertical, stretch, gutter, children, ...props}) => {
  return (
    <OuterGrouper {...props}>
      <InnerGrouper vertical={vertical} stretch={stretch} gutter={gutter}>
        {children}
      </InnerGrouper>
    </OuterGrouper>
  );
};

Grouper.propTypes = {
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  vertical: PropTypes.bool,
  stretch: PropTypes.bool,
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Grouper;
