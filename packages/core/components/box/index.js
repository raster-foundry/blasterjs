import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { STYLED } from "../../constants";

const StyledBox = styled.div`
  ${STYLED}
`;

const Box = ({ tag, ...props }) => <StyledBox as={tag} {...props} />;

Box.propTypes = {
  tag: PropTypes.string,
  ...STYLED.propTypes
};

Box.defaultProps = {
  tag: undefined
};

export default Box;
