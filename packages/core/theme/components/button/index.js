import { css } from "styled-components";

export const theme = {
  base: {
    colors: {
      defaultBg: "white",
      defaultBorder: "gray300",
      darkText: "gray800",
      lightText: "white"
    },
    space: {
      pt: 1,
      pb: 1,
      pl: 2,
      pr: 2
    },
    radii: {
      radius: "base"
    },
    fonts: {
      font: "body"
    },
    fontSizes: {
      fontSize: 2
    },
    fontWeights: {
      fontWeight: 600
    },
    lineHeights: {
      lineHeight: "base"
    },
    hover: {
      colors: {
        defaultBg: "gray100",
        defaultBorder: "gray300",
        darkText: "gray800",
        lightText: "white"
      }
    }
  },
  intents: {
    colors: {
      default: "gray700",
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
        pt: 1,
        pb: 1,
        pl: 1,
        pr: 1
      },
      radii: {
        radius: "small"
      },
      fontSizes: {
        fontSize: 1
      },
      fontWeights: {
        fontWeight: 600
      },
      lineHeights: {
        lineHeight: "base"
      }
    },
    large: {
      space: {
        pt: 2,
        pb: 2,
        pl: 2,
        pr: 2
      },
      radii: {
        radius: "large"
      },
      fontSizes: {
        fontSize: 3
      },
      fontWeights: {
        fontWeight: 600
      },
      lineHeights: {
        lineHeight: "base"
      }
    }
  },
  styles: css``
};
