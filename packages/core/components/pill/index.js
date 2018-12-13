import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Badge from "../badge";

const Pill = ({value, children, ...props}) => {
  return (
    <Badge {...props}>{value}</Badge>
  );
};

Pill.propTypes = {
  ...Badge.propTypes,
  value: PropTypes.number.isRequired
};

Pill.defaultProps = {
  ...Badge.defaultProps,
  borderRadius: 999
};

export default Pill;
