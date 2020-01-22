import { buildTheme } from "@blasterjs/core/utils";
import components from "./components";

export default buildTheme(components, {
  colors: {
    // Base color overrides
    primary: "red",
    secondary: "#333"
  },
  fonts: {
    // Base font overrides
    body: "'Roboto', sans-serif;"
  },
  fontSizes: [
    // Base font-size overrides
  ],
  radii: {
    // Base border-radius overrides
  },
  shadows: [
    // Base box-shadow overrides
  ],
  space: [
    // Base space overrides
  ],
  lineHeights: {
    // Base line-height overrides
  },
  fontWeights: {
    // Base font-weight overrides
  },
  letterSpacings: {
    // Base letter-spacing overrides
  },
  maxWidths: {
    // Base max-width overrides
  },
  minWidths: {
    // Base min-width overrides
  },
  widths: {
    // Base width overrides
  },
  maxHeights: {
    // Base max-height overrides
  },
  minHeights: {
    // Base min-height overrides
  },
  heights: {
    // Base height overrides
  },
  borders: {
    // Base border overrides
  },
  borderWidths: {
    // Base border-width overrides
  },
  borderStyles: {
    // Base border-style overrides
  },
  zIndices: {
    // Base z-index overrides
  },
  overrides: {
    // Base style overrides
  }
});
