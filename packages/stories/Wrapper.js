import React from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme} from "@blasterjs/core";

export default ({children}) => (
  <ThemeProvider theme={theme}>
    < >
      <GlobalStyle />
      { children }
    </ >
  </ThemeProvider>
)
