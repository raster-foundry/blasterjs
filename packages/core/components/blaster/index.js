import React from "react";
import { ThemeProvider } from "styled-components";

import { getTheme } from "../../theme";
import GlobalStyle from "../globalStyle";

export default ({ children, theme }) => (
  <ThemeProvider theme={getTheme(theme)}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);
