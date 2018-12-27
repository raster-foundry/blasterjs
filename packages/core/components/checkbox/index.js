import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {} from "styled-system";
import Box from "../box";

const Checkbox = styled(Box)`
  &[disabled] {
    opacity: .7;
    cursor: not-allowed;
  }
`;

Checkbox.propTypes = {
  ...Box.propTypes
};

Checkbox.defaultProps = {
  tag: "input",
  type: "checkbox",
  onChange: () => {}
};

export default Checkbox;
