import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Badge from "../badge";

const StyledSwatch = styled(Badge)`
  width: 1em;
  height: 1em;
  padding: 0;
`;

const Swatch = ({color, children, ...otherProps}) => {
  return (
    <StyledSwatch {...otherProps} bg={color} title={color} />
  );
};

Swatch.propTypes = {
  ...Badge.propTypes,
  color: PropTypes.string.isRequired
};

Swatch.defaultProps = {
  ...Badge.defaultProps
};

export default Swatch;
