# Getting started

## Theme Provider
Wrap the root of your application with the ThemeProvider component. This should only be included once in your application.

The ThemeProvider is a wrapper around styled-components' ThemeProvider.

```jsx static
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '@blasterjs/core'
// or
// import { MyCustomTheme } from '../your-custom-theme'

class App extends React.Component {
  render () {
    return (
      <ThemeProvider theme={Theme}>
        ...
      </ThemeProvider>
    )
  }
}
```