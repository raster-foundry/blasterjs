import { css } from "styled-components";

export const theme = {
  base: {
    colors: {
      darkText: "gray800",
      lightText: "white"
    },
    space: {
      pt: "5px",
      pb: "5px",
      pl: 1,
      pr: 1
    },
    radii: {
      radius: "base"
    },
    fonts: {
      font: "body"
    },
    fontSizes: {
      fontSize: 1
    },
    fontWeights: {
      fontWeight: 700
    },
    lineHeights: {
      lineHeight: "small"
    }
  },
  intents: {
    colors: {
      default: "gray800",
      secondary: "secondary",
      primary: "primary",
      success: "success",
      warning: "warning",
      danger: "danger"
    }
  },
  scale: {
    small: {
      space: {
        pt: "3px",
        pb: "3px",
        pl: "3px",
        pr: "3px"
      },
      radii: {
        radius: "small"
      },
      fontSizes: {
        fontSize: 0
      },
      fontWeights: {
        fontWeight: 700
      },
      lineHeights: {
        lineHeight: "small"
      }
    },
    large: {
      space: {
        pt: "5px",
        pb: "5px",
        pl: "10px",
        pr: "10px"
      },
      radii: {
        radius: "base"
      },
      fontSizes: {
        fontSize: 2
      },
      fontWeights: {
        fontWeight: 700
      },
      lineHeights: {
        lineHeight: "base"
      }
    }
  },
  overrides: css``
};
