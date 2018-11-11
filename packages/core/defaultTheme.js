const colors = {
  primary: "#738FFC",
  secondary: "#2FC1D0",
  tertiary: "#53B1E0",

  grayBase1: "#6A7085",
  grayBase2: "#858b9d",
  grayBase3: "#9ca1b0",

  grayLight1: "#C3CADF",
  grayLight2: "#E0E5F5",
  grayLight3: "#F2F5FF",

  grayDark1: "#1B1C31",
  grayDark2: "#33344D",
  grayDark3: "#4D4E66",

  white: "#FFFFFF",
  black: "#1B1C31", // also gray1

  // Still reviewing the following colors
  grayLight: "#999DA8", //#4d4f6d
  grayLighter: "#C8CCDB", //#8c8dad
  grayLightest: "#e0e5f5",
  grayDark: "#343549", //#343549
  grayDarker: "#1b1c31",

  textBase: "#435399",
  shadeLight: "#959CAC", // slightly lighter then $text-base
  shadeNormal: "#465076", // deep purple
  shadeDark: "#353C58", // deepdeep purple

  slate: "#435399",

  // Action Colors:
  orange: "#E69348",
  yellow: "#FFCA28",
  red: "#f03333",
  green: "#81C784"
};

const fonts = {
  sans: "'Libre Franklin', sans-serif",
  serif: "serif",
  code: "'Source Code Pro', monospace"
};

const typeSystem = {
  xs: "1rem",
  sm: "1.2rem",
  base: "1.5rem",
  lg: "1.8rem",
  xl: "2.2rem",
  xxl: "2.6rem",
  xxxl: "2.9rem",
  xxxxl: "3.4rem"
};

const radius = {
  small: "3px",
  base: "5px",
  large: "10px"
};

const buttonsStyles = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DEFAULT: "default"
};

const linkStyles = {
  color: "#738FFC"
};

const entities = {
  breadcrumb: "▸"
};

const icons = {
  addNode: {
    title: "add-node",
    viewBox: "0 0 24 24",
    path:
      "M2.4 3h19.2A2.4 2.4 0 0 1 24 5.4v12a2.4 2.4 0 0 1-2.4 2.4H2.4A2.4 2.4 0 0 1 0 17.4v-12A2.4 2.4 0 0 1 2.4 3zm10.8 7.2V7.8a1.2 1.2 0 1 0-2.4 0v2.4H8.4a1.2 1.2 0 1 0 0 2.4h2.4V15a1.2 1.2 0 1 0 2.4 0v-2.4h2.4a1.2 1.2 0 1 0 0-2.4h-2.4z"
  },
  arrowLeft: {
    title: "arrow-left",
    viewBox: "0 0 24 24",
    path:
      "M18.04 10.8h-8.8l2.66-2.752c.454-.469.454-1.228 0-1.697s-1.187-.469-1.64 0L4.8 11.999l5.46 5.648c.226.234.523.352.82.352s.594-.118.82-.352a1.227 1.227 0 0 0 0-1.697l-2.66-2.752h8.8c.64 0 1.16-.538 1.16-1.2s-.52-1.2-1.16-1.2z"
  },
  arrowRight: {
    title: "arrow-right",
    viewBox: "0 0 24 24",
    path:
      "M12.1 6.352a1.227 1.227 0 0 0 0 1.697l2.66 2.752h-8.8c-.64 0-1.16.538-1.16 1.2s.52 1.2 1.16 1.2h8.8l-2.66 2.752a1.227 1.227 0 0 0 0 1.697c.226.234.523.352.82.352s.594-.118.82-.352l5.46-5.648-5.46-5.648a1.132 1.132 0 0 0-1.64 0z"
  }
};

export const theme = {
  colors,
  fonts,
  radius,
  typeSystem,
  buttonsStyles,
  linkStyles,
  entities,
  icons
};
