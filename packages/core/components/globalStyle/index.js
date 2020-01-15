import React from "react";
import { createGlobalStyle } from "styled-components";
import { themeGet } from "styled-system";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
   ${normalize()}
    html {
        font-size: 62.5%;
    }
    body {
        font-family: ${themeGet("fonts.body")};
        font-size: ${themeGet("fontSizes.body")};
        line-height: ${themeGet("lineHeights.base")};
        color: ${themeGet("colors.textBase")};
    }
`;

export default GlobalStyle;
