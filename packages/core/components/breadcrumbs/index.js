import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import Icon from "../icon";
import { COMMON, LAYOUT, TYPOGRAPHY, FLEX_ITEM } from "../../constants";

const StyledBreadcrumbs = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  max-width: 100%;
  line-height: 1.5;
  padding: ${themeGet("breadcrumbs.space.p")};
  font-size: ${themeGet("breadcrumbs.fontSizes.fontSize")};

  > * + * {
    ${props =>
      props.gutter
        ? css`
            margin-left: ${themeGet(`space.${props.gutter}`, props.gutter)};
          `
        : css`
            margin-left: ${themeGet("breadcrumbs.space.gutter")};
          `};
  }

  ${props =>
    props.highlightCurrent &&
    css`
      > :last-child {
        ${props =>
          props.colorHighlight
            ? css`
                color: ${themeGet(
                  `colors.${props.colorHighlight}`,
                  props.colorHighlight
                )};
              `
            : css`
                color: ${themeGet("breadcrumbs.colors.colorHighlight")};
              `};
      }
    `}

  ${themeGet("breadcrumbs.styles")}
  ${COMMON}
  ${LAYOUT}
  ${TYPOGRAPHY}
  ${FLEX_ITEM}
`;

const BreadcrumbItem = styled.a`
  text-decoration: none;

  ${props =>
    props.color
      ? css`
          color: ${themeGet(`colors.${props.color}`, props.color)};
        `
      : css`
          color: ${themeGet("breadcrumbs.colors.color")};
        `};

  &:visited {
    ${props =>
      props.color
        ? css`
            color: ${themeGet(`colors.${props.color}`, props.color)};
          `
        : css`
            color: ${themeGet("breadcrumbs.colors.color")};
          `};
  }

  &:focus {
    ${props =>
      props.colorFocus
        ? css`
            color: ${themeGet(`colors.${props.colorFocus}`, props.colorFocus)};
          `
        : css`
            color: ${themeGet("breadcrumbs.colors.colorFocus")};
          `};
  }

  &:hover {
    ${props =>
      props.colorHover
        ? css`
            color: ${themeGet(`colors.${props.colorHover}`, props.colorHover)};
          `
        : css`
            color: ${themeGet("breadcrumbs.colors.colorHover")};
          `};
  }

  &:active {
    ${props =>
      props.colorActive
        ? css`
            color: ${themeGet(
              `colors.${props.colorActive}`,
              props.colorActive
            )};
          `
        : css`
            color: ${themeGet("breadcrumbs.colors.colorActive")};
          `};
  }
`;

const Separator = styled.span`
  ${props =>
    props.colorSeparator
      ? css`
          color: ${themeGet(
            `colors.${props.colorSeparator}`,
            props.colorSeparator
          )};
        `
      : css`
          color: ${themeGet("breadcrumbs.colors.colorSeparator")};
        `};
`;

const Breadcrumbs = ({
  path,
  color,
  colorFocus,
  colorHover,
  colorActive,
  colorSeparator,
  separator,
  separatorIcon,
  children,
  ...props
}) => {
  const sep = (
    <Separator color={colorSeparator}>
      {separator || <Icon name={separatorIcon} color={colorSeparator} />}
    </Separator>
  );

  return (
    <StyledBreadcrumbs {...props}>
      {path.map(({ name, url }, index) => (
        <Fragment key={url}>
          {index > 0 && sep}
          <BreadcrumbItem
            href={url}
            color={color}
            colorFocus={colorFocus}
            colorHover={colorHover}
            colorActive={colorActive}
          >
            {name}
          </BreadcrumbItem>
        </Fragment>
      ))}
    </StyledBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...FLEX_ITEM.propTypes,
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  highlightCurrent: PropTypes.bool,
  colorFocus: PropTypes.string,
  colorHover: PropTypes.string,
  colorActive: PropTypes.string,
  colorSeparator: PropTypes.string,
  colorHighlight: PropTypes.string,
  separator: PropTypes.string,
  separatorIcon: PropTypes.string,
  path: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

Breadcrumbs.defaultProps = {
  path: [],
  highlightCurrent: false,
  separatorIcon: "caretRight"
};

export default Breadcrumbs;
