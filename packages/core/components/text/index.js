import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { COMMON, LAYOUT, POSITION, TYPOGRAPHY, FLEX_ITEM } from "../../constants";

const Text = styled.span`
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

  font-family: ${themeGet("text.fonts.fontFamily")};
  font-size: inherit;
  line-height: ${themeGet("text.lineHeights.lineHeight")};

  ${themeGet("text.styles")}
  ${COMMON}
  ${LAYOUT}
  ${POSITION}
  ${TYPOGRAPHY}
  ${FLEX_ITEM}
`;

Text.propTypes = {
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  ...POSITION.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...FLEX_ITEM.propTypes
};

export default Text;
