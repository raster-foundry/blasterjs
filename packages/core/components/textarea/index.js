import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextInput from "../textInput";

const Textarea = styled(TextInput)``;

Textarea.propTypes = {
  ...TextInput.propTypes
};

Textarea.defaultProps = {
  tag: "textarea",
  type: "",
  height: "8rem",
  lineHeight: "1.4"
};

export default Textarea;
