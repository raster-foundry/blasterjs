import React from "react";
import styled from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import { compose } from "styled-system";
import {
  COMMON,
  LAYOUT,
  POSITION,
  TYPOGRAPHY,
  FLEX_ITEM,
  PROPTYPES
} from "../../constants";

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
    font-family: ${tg("fonts.code")};
  }

  s&,
  del& {
    text-decoration: line-through;
  }

  font-family: ${tg("text.fonts.fontFamily")};
  font-size: inherit;
  line-height: ${tg("text.lineHeights.lineHeight")};

  ${tg("text.overrides")}
  ${compose(
    COMMON,
    LAYOUT,
    POSITION,
    TYPOGRAPHY,
    FLEX_ITEM
  )}
`;

Text.propTypes = {
  ...PROPTYPES.COMMON,
  ...PROPTYPES.LAYOUT,
  ...PROPTYPES.POSITION,
  ...PROPTYPES.TYPOGRAPHY,
  ...PROPTYPES.FLEX_ITEM
};

export default Text;
