import React, { Fragment } from "react";
import PropTypes from "prop-types";
import propTypes, { propType } from "@styled-system/prop-types";
import styled, { css } from "styled-components";
import { system, compose } from "styled-system";
import { themeGet as tg } from "@styled-system/theme-get";
import Icon from "../icon";
import { COMMON, LAYOUT, TYPOGRAPHY, FLEX_ITEM } from "../../constants";

const colorHighlight = system({
  colorHighlight: {
    property: "color",
    scale: "colors"
  }
});

const gutter = system({
  gutter: {
    property: "margin-left",
    scale: "space"
  }
});

const colorFocus = system({
  colorFocus: {
    property: "color",
    scale: "colors"
  }
});

const colorHover = system({
  colorHover: {
    property: "color",
    scale: "colors"
  }
});

const colorActive = system({
  colorActive: {
    property: "color",
    scale: "colors"
  }
});

const colorSeparator = system({
  colorSeparator: {
    property: "color",
    scale: "colors"
  }
});

const StyledBreadcrumbs = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  max-width: 100%;
  line-height: 1.5;
  padding: ${tg("breadcrumbs.space.p")};
  font-size: ${tg("breadcrumbs.fontSizes.fontSize")};

  > * + * {
    margin-left: ${props =>
      !props.gutter ? tg("breadcrumbs.space.gutter") : ""};
    ${gutter}
  }

  ${props =>
    props.highlightCurrent &&
    css`
      > :last-child {
        color: ${props =>
          !props.colorHighlight ? tg("breadcrumbs.colors.colorHighlight") : ""};
        ${colorHighlight}
      }
    `}

  ${tg("breadcrumbs.overrides")}
  ${compose(
    COMMON,
    LAYOUT,
    TYPOGRAPHY,
    FLEX_ITEM
  )}
`;

const BreadcrumbItem = styled.a`
  text-decoration: none;
  color: ${props => (!props.color ? tg("breadcrumbs.colors.color") : "")};
  ${COMMON.color}

  &:visited {
    color: ${props => (!props.color ? tg("breadcrumbs.colors.color") : "")};
    ${COMMON.color}
  }

  &:focus-visible {
    color: ${props =>
      !props.colorFocus ? tg("breadcrumbs.colors.colorFocus") : ""};
    ${colorFocus}
  }
  .js-focus-visible &.focus-visible {
    color: ${props =>
      !props.colorFocus ? tg("breadcrumbs.colors.colorFocus") : ""};
    ${colorFocus}
  }

  &:hover {
    color: ${props =>
      !props.colorHover ? tg("breadcrumbs.colors.colorHover") : ""};
    ${colorHover}
  }

  &:active {
    color: ${props =>
      !props.colorActive ? tg("breadcrumbs.colors.colorActive") : ""};
    ${colorActive}
  }
`;

const Separator = styled.span`
  color: ${props =>
    !props.colorSeparator ? tg("breadcrumbs.colors.colorSeparator") : ""};
  ${colorSeparator}
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
      {separator || (
        <Icon name={separatorIcon} color={colorSeparator} aria-hidden="true" />
      )}
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
  ...propTypes.COMMON,
  ...propTypes.LAYOUT,
  ...propTypes.TYPOGRAPHY,
  ...propTypes.FLEX_ITEM,
  gutter: propType,
  colorActive: propType,
  colorFocus: propType,
  colorHighlight: propType,
  colorHover: propType,
  colorSeparator: propType,
  highlightCurrent: PropTypes.bool,
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
