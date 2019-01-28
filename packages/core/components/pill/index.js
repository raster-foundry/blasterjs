import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Badge from "../badge";
import { extractComponentFromChildren } from "../../utils";

const Pill = ({value, children: _children, ...props}) => {
  const [children, tooltip] = extractComponentFromChildren(_children, 'Tooltip');

  return (
    <Badge {...props}>
      {value}
      {tooltip}
    </Badge>
  );
};

Pill.propTypes = {
  ...Badge.propTypes,
  value: PropTypes.number.isRequired
};

Pill.defaultProps = {
  ...Badge.defaultProps,
  borderRadius: "pill.borderRadius"
};

export default Pill;
