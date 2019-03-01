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
  borderRadius: "fileInput.borderRadius",
  pt: "fileInput.p",
  pb: "fileInput.p",
  pl: "fileInput.p",
  pr: "fileInput.p"
};

export default FileInput;
