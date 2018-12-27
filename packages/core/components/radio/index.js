import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {} from "styled-system";
import Box from "../box";

const Radio = styled(Box)`
  &[disabled] {
    opacity: .7;
    cursor: not-allowed;
  }
`;

Radio.propTypes = {
  ...Box.propTypes
};

Radio.defaultProps = {
  tag: "input",
  type: "radio",
  onChange: () => {}
};

export default Radio;
