import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextInput from "../textInput";

const ColorInput = styled(TextInput)``;

ColorInput.propTypes = {
  ...TextInput.propTypes
};

ColorInput.defaultProps = {
  type: "color",
  width: "4rem",
  height: "4rem",
  border: 0,
  borderRadius: 0,
  pt: 0,
  pb: 0,
  pl: 0,
  pr: 0,
  onChange: () => {}
};

export default ColorInput;
