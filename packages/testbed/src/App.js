import './App.css'

import React, {Component} from 'react'

import { Blaster, Button, Box } from "@blasterjs/core";

const theme = {
  button: {
    intents: {
      colors: {
        primary: "gray500"
      }
    }
  }
};

class App extends Component {
  render() {
    return <div className="App">
      <Blaster theme={theme}>
        <Box>
          <Button intent="primary">Testing</Button>
        </Box>
      </Blaster>
    </div>
  }
}

export default App
