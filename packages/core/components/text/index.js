import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as styledSystem from "styled-system";
import { themeGet } from "styled-system";
import Box from "../box";

const Text = styled(Box)`
  abbr& {
    border-bottom: 1px dotted;
    cursor: help;
    text-decoration: none;
  }

  i&,
  em& {
    font-style: italic;
  }

  u& {
    text-decoration: underline;
  }

  strong&,
  b& {
    font-weight: bold;
  }

  code&,
  pre& {
    font-family: ${themeGet("fonts.code")};
  }

  s&,
  del& {
    text-decoration: line-through;
  }

  ${styledSystem.fontFamily}
  ${styledSystem.fontSize}
  ${styledSystem.fontWeight}
  ${styledSystem.textAlign}
  ${styledSystem.lineHeight}
  ${styledSystem.letterSpacing}
  ${styledSystem.color}

  ${themeGet("styles.text")};
`;

Text.propTypes = {
  ...Box.propTypes,
  ...styledSystem.fontFamily.propTypes,
  ...styledSystem.fontSize.propTypes,
  ...styledSystem.fontWeight.propTypes,
  ...styledSystem.textAlign.propTypes,
  ...styledSystem.lineHeight.propTypes,
  ...styledSystem.letterSpacing.propTypes,
  ...styledSystem.color.propTypes
};

Text.defaultProps = {
  tag: "span",
  fontFamily: "text.fontFamily",
  fontSize: "text.fontSize",
  lineHeight: 1
};

export default Text;
