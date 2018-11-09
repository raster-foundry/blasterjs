import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, themeGet } from "styled-system";

const StyledGrouper = styled.div`
  ${space}
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: ${props => props.alignItems};

  > * + * {
    margin-left: ${props => props.gutter};
  }
`;

const CompactGrouper = styled(StyledGrouper).attrs({
  radius: props => themeGet(`radii.${props.borderRadius}`, props.borderRadius)
})`
  > * {
    border-radius: 0 !important;
  }

  > :first-child {
    border-top-left-radius: ${props => props.radius} !important;
    border-bottom-left-radius: ${props => props.radius} !important;
  }

  > :last-child {
    border-top-right-radius: ${props => props.radius} !important;
    border-bottom-right-radius: ${props => props.radius} !important;
  }
`;

const Grouper = props => {
  return props.gutter === 0 ? (
    <CompactGrouper {...props}>
      {props.children}
    </CompactGrouper>
  ) : (
    <StyledGrouper {...props}>
      {props.children}
    </StyledGrouper>
  );
};

Grouper.propTypes = {
  ...space.PropTypes,
  borderRadius: PropTypes.string,
  gutter: PropTypes.string,
  alignItems: PropTypes.string
};

Grouper.defaultProps = {
  borderRadius: 0,
  gutter: 0,
  alignItems: "stretch"
};

export default Grouper;
