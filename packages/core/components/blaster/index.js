import React from "react";
import { ThemeProvider } from "styled-components";
import merge from "lodash.merge";

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
