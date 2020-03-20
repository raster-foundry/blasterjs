import { css } from "styled-components";

export const theme = {
  colors: {
    thumb: "gray600",
    thumbBorder: "gray600",
    track: "gray200",
    trackBorder: "gray200",
    trackFocus: "gray300"
  },
  sizes: {
    track: {
      width: "100%",
      height: "5px"
    },
    thumb: {
      width: "14px",
      height: "14px"
    }
  },
  borderWidths: {
    thumb: "0",
    track: "0"
  },
  radii: {
    thumb: "50%",
    track: "base"
  },
  shadows: {
    thumb: "none",
    track: "none"
  },
  overrides: css``
};
