import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "../text";

const Label = styled(Text)``;

Label.propTypes = {
  ...Text.propTypes
};

Label.defaultProps = {
  tag: "label"
};

export default Label;
