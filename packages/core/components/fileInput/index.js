import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextInput from "../textInput";

const FileInput = styled(TextInput)``;

FileInput.propTypes = {
  ...TextInput.propTypes
};

FileInput.defaultProps = {
  type: "file",
  height: "auto",
  border: 0,
  borderRadius: 0,
  pt: 0,
  pb: 0,
  pl: 0,
  pr: 0
};

export default FileInput;
