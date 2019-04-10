import React from "react";
import { ThemeProvider } from "styled-components";
import merge from "lodash.merge";

import { theme as defaultTheme } from "../../theme";
import GlobalStyle from "../globalStyle";

export default ({ children, theme }) => (
  <ThemeProvider theme={merge(defaultTheme, theme || {})}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);
