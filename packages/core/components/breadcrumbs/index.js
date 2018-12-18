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
  color: ${props => themeGet(`colors.${props.color}`, props.color)};

  &:hover {
    color: ${props => themeGet(`colors.${props.colorHover}`, props.colorHover)};
  }
`;

const Separator = styled.span`
  color: ${props => themeGet(`colors.${props.color}`, props.color)};
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
  ...props
}) => {

  const sep = (
    <Separator color={colorSeparator}>
      {separator || <Icon name={separatorIcon} color={colorSeparator} />}
    </Separator>
  );

  return (
    <StyledBreadcrumbs
      highlightCurrent={highlightCurrent}
      colorHighlight={colorHighlight}
      {...props}
    >
      {path.map(({ name, url }, idx) => (
        <Fragment key={url}>
          {idx > 0 && sep}
          <BreadcrumbItem
            href={url}
            color={color}
            colorHover={colorHover}
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
  p: 1,
  fontSize: 2,
  color: "grayBase3",
  colorHover: "primary",
  colorSeparator: "grayLight1",
  colorHighlight: "grayDark1",
  separatorIcon: "caretRight"
};

export default Breadcrumbs;
