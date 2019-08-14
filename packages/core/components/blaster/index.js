import React from "react";
import { ThemeProvider } from "styled-components";

import { getTheme } from "../../theme";
import GlobalStyle from "../globalStyle";
import FocusVisible from "../focusVisible";

export default ({ children, theme }) => (
  <ThemeProvider theme={getTheme(theme)}>
    <>
      <GlobalStyle />
      <FocusVisible />
      {children}
    </>
  </ThemeProvider>
);
