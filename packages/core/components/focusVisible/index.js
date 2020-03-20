import React from "react";
import { createGlobalStyle } from "styled-components";
import { themeGet as tg } from "@styled-system/theme-get";
import "focus-visible";

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
        ${tg("focusVisible.overrides")}
    }
    .js-focus-visible .focus-visible {
        ${tg("focusVisible.overrides")}
    }
`;

export default FocusVisible;
