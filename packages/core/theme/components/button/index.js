import { css } from "styled-components";

export const theme = {
  base: {
    colors: {
      color: "gray700",
      colorDark: "gray800",
      colorLight: "white",
      bg: "white",
      bgHover: "gray100",
      border: "gray300"
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
      lineHeight: 1
    }
  },
  intents: {
    colors: {
      primary: "primary",
      secondary: "secondary",
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
        lineHeight: 1
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
        lineHeight: 1
      }
    }
  },
  styles: css``
};
