import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, themeGet } from "styled-system";
import Badge from "../badge";

const StyledPill = styled(Badge)`
  padding: ${themeGet('space.1', '0.8rem')} ${themeGet('space.1', '0.8rem')};
  ${space}
`;

const Pill = ({value, children, ...otherProps}) => {
  return (
    <StyledPill {...otherProps} borderRadius={999}>{value}</StyledPill>
  );
};

Pill.propTypes = {
  ...Badge.propTypes,
  value: PropTypes.number.isRequired
};

Pill.defaultProps = {
  ...Badge.defaultProps
};

export default Pill;
