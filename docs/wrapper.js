import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../packages/core/defaultTheme";
import GlobalStyle from "../packages/core/components/globalStyle"

const Wrapper = ({ children }) => (
  <ThemeProvider theme={{ ...theme }}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default Wrapper;
