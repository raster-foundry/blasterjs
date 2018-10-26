import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../packages/core/defaultTheme";

const Wrapper = ({ children }) => (
  <ThemeProvider theme={{ ...theme }}>{children}</ThemeProvider>
);

export default Wrapper;
