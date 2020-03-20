import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { STYLED, PROPTYPES } from "../../constants";

const Box = styled.div`
  ${STYLED}
`;

Box.propTypes = {
  ...PROPTYPES.STYLED
};

export default Box;
