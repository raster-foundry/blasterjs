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

  > *:focus {
    z-index: 1;
  }

  > * + * {
    margin-left: ${props => themeGet(`space.${props.gutter}`, props.gutter)};
  }
`;

const CompactGrouper = styled(StyledGrouper)`
  > * {
    border-radius: 0 !important;
  }

  > * + * {
    border-left: none;
  }

  > :first-child {
    border-top-left-radius: ${props => themeGet(`radii.${props.borderRadius}`, props.borderRadius)} !important;
    border-bottom-left-radius: ${props => themeGet(`radii.${props.borderRadius}`, props.borderRadius)} !important;
  }

  > :last-child {
    border-top-right-radius: ${props => themeGet(`radii.${props.borderRadius}`, props.borderRadius)} !important;
    border-bottom-right-radius: ${props => themeGet(`radii.${props.borderRadius}`, props.borderRadius)} !important;
  }
`;

const Grouper = props => {
  return props.gutter === 0 ? <CompactGrouper {...props} /> : <StyledGrouper {...props} />;
};

Grouper.propTypes = {
  ...space.PropTypes,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alignItems: PropTypes.string
};

Grouper.defaultProps = {
  borderRadius: "base",
  gutter: 0,
  alignItems: "stretch"
};

export default Grouper;
