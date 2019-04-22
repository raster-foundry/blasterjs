import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import Text from "../text";

const Heading = styled(Text)`
  ${props => {
    const size = {
      h1: 7,
      h2: 6,
      h3: 5,
      h4: 4,
      h5: 3,
      h6: 2
    }[props.tag];

    return css`
      font-size: ${props => themeGet(`fontSizes.${size}`)};
    `;
  }}

  ${themeGet("styles.heading")};
`;

Heading.propTypes = {
  ...Text.propTypes,
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"])
};

Heading.defaultProps = {
  tag: "h1",
  color: "heading.color",
  fontFamily: "heading.fontFamily",
  fontWeight: "heading.fontWeight",
  lineHeight: "heading.lineHeight",
  mt: "heading.m",
  mb: "heading.m",
  ml: "heading.m",
  mr: "heading.m"
};

export default Heading;
