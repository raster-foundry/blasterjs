import './App.css'

import React, {Component} from 'react'

import { Blaster, Button, Box } from "@blasterjs/core";

const theme = {
  colors: {
    primary: "red"
  },
  button: {
    intents: {
      colors: {
        primary: "green",
        secondary: "primary"
      }
    }
  }
};

class App extends Component {
  render() {
    return <div className="App">
      <Blaster theme={theme}>
        <Box>
          <Button intent="secondary">Testing</Button>
        </Box>
      </Blaster>
    </div>
  }
}

export default App
