import React from "react";
import PropTypes from "prop-types";
import Badge from "../badge";

const Pill = ({value, children, ...otherProps}) => {
  return (
    <Badge {...otherProps} borderRadius={999}>{value}</Badge>
  );
};

Pill.propTypes = {
  ...Badge.propTypes,
  value: PropTypes.number.isRequired
};

Pill.defaultProps = {
  ...Badge.defaultProps,
  p: [1, 2]
};

export default Pill;
