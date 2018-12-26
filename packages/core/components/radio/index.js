import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {} from "styled-system";
import Box from "../box";

const Radio = styled(Box)``;

Radio.propTypes = {
  ...Box.propTypes,
  onChange: PropTypes.func
};

Radio.defaultProps = {
  tag: "input",
  type: "radio",
  onChange: () => {}
};

export default Radio;
