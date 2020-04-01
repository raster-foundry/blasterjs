import "./App.css";

import React, { Component } from "react";
import { css } from "styled-components";
import { Blaster, Button, Box, Icon } from "@blasterjs/core";

const theme = {
  colors: {
    //primary: "red"
  },
  button: {
    intents: {
      colors: {
        primary: "green",
        secondary: "primary"
      }
    },
    overrides: css`
      vertical-align: middle;
    `
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blaster theme={theme}>
          <Box p="4">
            <Button intent="secondary">
              <Icon name="cloud" />
            </Button>
            <Button intent="secondary" iconBefore="cloud">
              Testing
            </Button>
            <Button intent="secondary" iconAfter="cloud">
              Testing
            </Button>
            <Button intent="secondary" iconBefore="cloud" iconAfter="cloud">
              Testing
            </Button>
          </Box>
        </Blaster>
      </div>
    );
  }
}

export default App;
