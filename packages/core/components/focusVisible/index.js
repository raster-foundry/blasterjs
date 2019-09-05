import React from "react";
import { createGlobalStyle } from "styled-components";
import { themeGet } from "styled-system";
import 'focus-visible';

const FocusVisible = createGlobalStyle`
    /*
      Hide focus indicator if element receives focus via mouse,
      but show if focused via keyboard.
    */
    .js-focus-visible :focus:not(.focus-visible) {
        outline: none;
    }

    /* Custom keyboard focus style */
    *:focus-visible {
        ${themeGet("focusVisible.styles")}
    }
    .js-focus-visible .focus-visible {
        ${themeGet("focusVisible.styles")}
    }
`;

export default FocusVisible;
