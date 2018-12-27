import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../input";

const Textarea = styled(Input)``;

Textarea.propTypes = {
  ...Input.propTypes
};

Textarea.defaultProps = {
  tag: "textarea",
  type: "",
  height: "8rem",
  lineHeight: "1.4"
};

export default Textarea;
