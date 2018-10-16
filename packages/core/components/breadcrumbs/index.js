/* @flow */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../link";

const StyledBreadcrumbs = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 100%;
  padding: 1rem;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.typeSystem.xs};

  > * + * {
    margin-left: 0.8rem;
  }

  > :last-child {
    color: ${props =>
      props.highlightCurrent ? props.theme.colors.grayDark1 : null};
  }
`;

const BreadcrumbItem = Link.extend`
  border: 0;
  color: ${props => props.theme.colors.grayBase3};
  font-size: ${props => props.theme.typeSystem.base};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  color: ${props => props.theme.colors.grayLight2};

  ::before {
    content: "${props => props.theme.entities.breadcrumb}";
  }
`;

const Breadcrumbs = props => {
  return (
    <StyledBreadcrumbs highlightCurrent={props.highlightCurrent}>
      {props.path.map(({ name, url }, idx) => (
        <React.Fragment key={url}>
          {idx > 0 && <Separator />}
          <BreadcrumbItem href={url}>{name}</BreadcrumbItem>
        </React.Fragment>
      ))}
    </StyledBreadcrumbs>
  );
};

Breadcrumbs.defaultProps = {
  path: [],
  highlightCurrent: false
};

Breadcrumbs.propTypes = {
  /**
   * Array of objects describing the breadcrumb path.
   */
  path: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  /**
   * Highlight last breadcrumb item, to represent current screen.
   */
  highlightCurrent: PropTypes.bool
};

/** @component */
export default Breadcrumbs;
