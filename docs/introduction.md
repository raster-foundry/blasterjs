# Getting started

## Theme Provider

Wrap the root of your application with the ThemeProvider component. This should only be included once in your application.

The ThemeProvider is a wrapper around styled-components' ThemeProvider.

```jsx static
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@blasterjs/core";
// or
// import { MyCustomTheme } from '../your-custom-theme'

import "@blasterjs/core/dist/reset.css";

class App extends React.Component {
  render() {
    return <ThemeProvider theme={theme}>...</ThemeProvider>;
  }
}
```
