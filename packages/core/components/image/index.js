import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { space } from "styled-system";

const Image = styled.img`
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  ${space};

  ${props =>
    props.rounded &&
    css`
      border-radius: ${props => props.theme.radius.base};
    `};

  ${props =>
    props.circle &&
    css`
      border-radius: 100%;
    `};
`;

Image.propTypes = {
  ...space.PropTypes,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  src: PropTypes.string.isRequired
};

export default Image;
