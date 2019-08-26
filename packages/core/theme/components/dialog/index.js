import { css } from "styled-components";

export const theme = {
  space: {
    p: 3
  },
  minWidths: {
    minWidth: "24rem"
  },
  maxWidths: {
    maxWidth: "80%"
  },
  minHeights: {
    minHeight: "16rem"
  },
  maxHeights: {
    maxHeight: "90%"
  },
  colors: {
    bg: "white",
    overlay: "#000",
    focus: "#bbb"
  },
  shadows: {
    boxShadow: 5
  },
  zIndices: {
    zIndex: 1000000
  },
  durations: {
    closeTimeoutMS: 150
  },
  opacities: {
    overlay: 0.5
  },
  transitions: {
    overlay: {
      base: css`
        transition-property: opacity;
        opacity: 0;
      `,
      afterOpen: css`
        opacity: 1;
      `,
      beforeClose: css`
        opacity: 0;
      `
    },
    dialog: {
      base: css`
        transition-property: transform;
        transform: translateY(200px);
      `,
      afterOpen: css`
        transform: translateY(0);
      `,
      beforeClose: css`
        transform: translateY(200px);
      `
    }
  },
  styles: css``
};
