import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { fontSize, themeGet } from "styled-system";
import Text from "../text";
import A from "../a";
import Icon from "../icon";

const StyledBreadcrumbs = styled(Text)`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  max-width: 100%;
  line-height: 1.5;

  > * + * {
    margin-left: ${props => themeGet('space.1', '0.8rem')};
  }

  ${props => props.highlightCurrent && css`
    > :last-child {
      color: ${props => themeGet(`colors.${props.colorHighlight}`, props.colorHighlight)};
    }
  `}
`;

const BreadcrumbItem = styled(A)`
  &:hover {
    color: ${props => themeGet(`colors.${props.colorHover}`, props.colorHover)};
  }
`;

const Separator = styled.span`
  color: ${props => themeGet(`colors.${props.colorSeparator}`, props.colorSeparator)};
`;

const Breadcrumbs = ({
  path,
  highlightCurrent,
  color,
  colorHover,
  colorSeparator,
  colorHighlight,
  separator,
  separatorIcon,
  children,
  fontSize,
  ...props
}) => {

  const sep = (
    <Separator color={colorSeparator}>
      {separator || <Icon name={separatorIcon} color={colorSeparator} />}
    </Separator>
  );

  return (
    <StyledBreadcrumbs
      tag="div"
      highlightCurrent={highlightCurrent}
      colorHighlight={colorHighlight}
      fontSize={fontSize}
      {...props}
    >
      {path.map(({ name, url }, idx) => (
        <Fragment key={url}>
          {idx > 0 && sep}
          <BreadcrumbItem
            href={url}
            color={color}
            colorHover={colorHover}
            fontSize={fontSize}
          >
            {name}
          </BreadcrumbItem>
        </Fragment>
      ))}
    </StyledBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  ...Text.propTypes,
  highlightCurrent: PropTypes.bool,
  color: PropTypes.string,
  colorHover: PropTypes.string,
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
  pt: "breadcrumbs.p",
  pb: "breadcrumbs.p",
  pl: "breadcrumbs.p",
  pr: "breadcrumbs.p",
  fontSize: "breadcrumbs.fontSize",
  color: "breadcrumbs.color",
  colorHover: "breadcrumbs.colorHover",
  colorSeparator: "breadcrumbs.colorSeparator",
  colorHighlight: "breadcrumbs.colorHighlight",
  separatorIcon: "caretRight"
};

export default Breadcrumbs;
