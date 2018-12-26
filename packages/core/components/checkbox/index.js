import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {} from "styled-system";
import Box from "../box";

const Checkbox = styled(Box)``;

Checkbox.propTypes = {
  ...Box.propTypes,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  tag: "input",
  type: "checkbox",
  onChange: () => {}
};

export default Checkbox;
